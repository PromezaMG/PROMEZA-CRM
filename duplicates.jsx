// PROMEZA CRM — Duplicate detection and merge review

const _norm = (s) =>
  (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ").trim();

const _phone = (s) => (s || "").replace(/\D/g, "");

// Blocking approach: group ids by shared email / phone / name (O(n)), then only
// pair WITHIN each group. The old O(n²) double loop did ~n²/2 comparisons — at
// ~18k records that's ~160M string-normalizations on the main thread and froze the
// page on every create/import/scan. This is O(n + pairs). Groups larger than
// GROUP_CAP (a shared org email or a very common name) are skipped — those are not
// real duplicate clusters and would otherwise explode the pair count.
const GROUP_CAP = 30;
const _pushId = (map, key, id) => { let a = map.get(key); if (!a) { a = []; map.set(key, a); } a.push(id); };
const findDuplicatePairs = (personas, existingPairs = []) => {
  const dismissed = new Set(existingPairs.filter(p => p.dismissed).map(p => p.idA + "|" + p.idB));
  const byEmail = new Map(), byPhone = new Map(), byName = new Map();
  for (let i = 0; i < personas.length; i++) {
    const p = personas[i];
    const e = _norm(p.email); if (e) _pushId(byEmail, e, p.id);
    const ph = _phone(p.phone); if (ph.length >= 7) _pushId(byPhone, ph, p.id);
    const n = _norm((p.first || "") + " " + (p.last || "")); if (n && n !== " ") _pushId(byName, n, p.id);
  }
  const scores = new Map();
  const addGroups = (map, w) => {
    for (const ids of map.values()) {
      const k = ids.length; if (k < 2 || k > GROUP_CAP) continue;
      for (let i = 0; i < k; i++) for (let j = i + 1; j < k; j++) {
        const a = ids[i], b = ids[j]; if (a === b) continue;
        const key = a < b ? a + "|" + b : b + "|" + a;
        scores.set(key, (scores.get(key) || 0) + w);
      }
    }
  };
  addGroups(byEmail, 3); addGroups(byPhone, 3); addGroups(byName, 2);
  const pairs = [];
  for (const [key, s] of scores) {
    if (s < 2 || dismissed.has(key)) continue;
    const idx = key.indexOf("|");
    pairs.push({ idA: key.slice(0, idx), idB: key.slice(idx + 1), score: s, dismissed: false });
  }
  return pairs.sort((a, b) => b.score - a.score);
};

// Entity duplicate detection
const findEntityDuplicatePairs = (entities, existingPairs = []) => {
  const dismissed = new Set(existingPairs.filter(p => p.dismissed).map(p => p.idA + "|" + p.idB));
  const pairs = [];
  const seen = new Set();
  for (let i = 0; i < entities.length; i++) {
    for (let j = i + 1; j < entities.length; j++) {
      const a = entities[i], b = entities[j];
      const key = [a.id, b.id].sort().join("|");
      if (seen.has(key) || dismissed.has(key)) continue;
      seen.add(key);
      const aName = _norm(a.name);
      const bName = _norm(b.name);
      const aEmail = _norm(a.email);
      const bEmail = _norm(b.email);
      const aPhone = _phone(a.phone);
      const bPhone = _phone(b.phone);
      let score = 0;
      if (aName && bName && aName === bName) score += 3;
      if (aEmail && bEmail && aEmail === bEmail) score += 2;
      if (aPhone.length >= 7 && bPhone.length >= 7 && aPhone === bPhone) score += 2;
      if (score >= 2) pairs.push({ idA: a.id, idB: b.id, score, dismissed: false, kind: "entity" });
    }
  }
  return pairs.sort((a, b) => b.score - a.score);
};

window.findEntityDuplicatePairs = findEntityDuplicatePairs;

// Check if persona has contact info issues
const hasContactIssue = (p) => {
  const email = (p.email || "").trim();
  const phone = (p.phone || "").replace(/\D/g, "");
  if (!email && phone.length < 7) return true;   // no way to contact
  if (email && !email.includes("@")) return true; // bad email format
  if (p.emailStatus === "bad") return true;        // marked not working
  if (p.phoneStatus === "bad") return true;        // marked not working
  return false;
};

window.hasContactIssue = hasContactIssue;

// ─── Side-by-side field row ───

const DupField = ({ label, a, b }) => {
  const na = (a || "").toString().trim();
  const nb = (b || "").toString().trim();
  const diff = na !== nb && (na || nb);
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "90px 1fr 1fr", gap: 10,
      padding: "7px 0", borderBottom: "1px solid var(--line)", alignItems: "start",
    }}>
      <div style={{ fontSize: 10.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ink-4)", paddingTop: 2 }}>
        {label}
      </div>
      <div style={{ fontSize: 13, color: diff ? "var(--accent-700)" : "var(--ink-1)", fontWeight: diff ? 600 : 400 }}>
        {na || <span style={{ color: "var(--ink-5)" }}>—</span>}
      </div>
      <div style={{ fontSize: 13, color: diff ? "var(--accent-700)" : "var(--ink-1)", fontWeight: diff ? 600 : 400 }}>
        {nb || <span style={{ color: "var(--ink-5)" }}>—</span>}
      </div>
    </div>
  );
};

// ─── Merge Editor — field-by-field selection ───

const MergeEditor = ({ pA, pB, data, onConfirm, onCancel, t, lang }) => {
  const FIELDS = [
    { key: "first",       label: lang === "es" ? "Nombre" : "First name",       group: "basic" },
    { key: "last",        label: lang === "es" ? "Apellido" : "Last name",       group: "basic" },
    { key: "role",        label: lang === "es" ? "Cargo" : "Role",               group: "basic", fmt: v => t.roles[v] || v },
    { key: "email",       label: "Email",                                         group: "contact" },
    { key: "phone",       label: lang === "es" ? "Teléfono" : "Phone",           group: "contact" },
    { key: "address",     label: lang === "es" ? "Dirección" : "Address",        group: "location" },
    { key: "zip",         label: "ZIP",                                           group: "location" },
    { key: "city",        label: lang === "es" ? "Ciudad" : "City",              group: "location" },
    { key: "state",       label: lang === "es" ? "Estado" : "State",             group: "location" },
    { key: "country",     label: lang === "es" ? "País" : "Country",             group: "location" },
    { key: "website",     label: "Web",                                           group: "social" },
    { key: "social.ig",   label: "Instagram",                                    group: "social" },
    { key: "social.fb",   label: "Facebook",                                     group: "social" },
    { key: "social.tiktok", label: "TikTok",                                     group: "social" },
    { key: "social.x",    label: "X (Twitter)",                                  group: "social" },
    { key: "birthday",    label: lang === "es" ? "Cumpleaños" : "Birthday",      group: "extra" },
    { key: "lastContact", label: lang === "es" ? "Ú. contacto" : "Last contact", group: "extra" },
    { key: "language",    label: lang === "es" ? "Idioma" : "Language",          group: "extra", fmt: v => v === "en" ? "English" : "Español" },
    { key: "status",      label: lang === "es" ? "Estado" : "Status",            group: "extra", fmt: v => t.common[v === "inactivo" ? "inactivos" : "activos"] || v },
  ];
  const GROUPS = [
    { id: "basic",    label: lang === "es" ? "Datos básicos"  : "Basic info"  },
    { id: "contact",  label: lang === "es" ? "Contacto"       : "Contact"     },
    { id: "location", label: lang === "es" ? "Ubicación"      : "Location"    },
    { id: "social",   label: "Social & Web"                                    },
    { id: "extra",    label: lang === "es" ? "Adicional"      : "Additional"  },
  ];

  const getVal = (p, key) => {
    if (key.includes(".")) { const [obj, k] = key.split("."); return p[obj]?.[k] || ""; }
    return p[key] || "";
  };

  const [sels, setSels] = React.useState(() => {
    const s = {};
    FIELDS.forEach(f => {
      const av = getVal(pA, f.key), bv = getVal(pB, f.key);
      s[f.key] = (!bv && av) ? "A" : (!av && bv) ? "B" : "A";
    });
    return s;
  });
  const [keepSide, setKeepSide] = React.useState("A");

  // Only sets the per-field DATA source; does NOT change the base profile (the
  // record/ID that's kept). This lets you keep B as the winner but pull all its
  // data from A, or any mix.
  const setAll = (side) => {
    const n = {}; FIELDS.forEach(f => n[f.key] = side); setSels(n);
  };
  const pickVal = (key) => {
    if (key.includes(".")) { const [obj, k] = key.split("."); return sels[key] === "B" ? (pB[obj]?.[k] || "") : (pA[obj]?.[k] || ""); }
    return sels[key] === "B" ? (pB[key] || "") : (pA[key] || "");
  };

  const handleConfirm = () => {
    const base = keepSide === "A" ? pA : pB;
    const merged = {
      ...base,
      first: pickVal("first"), last: pickVal("last"),
      role: pickVal("role"),
      roleOther: pickVal("role") === "otro" ? (sels.role === "B" ? pB.roleOther : pA.roleOther) : "",
      email: pickVal("email"), phone: pickVal("phone"),
      address: pickVal("address"), zip: pickVal("zip"), city: pickVal("city"),
      state: pickVal("state"), country: pickVal("country"),
      website: pickVal("website"),
      birthday: pickVal("birthday"), lastContact: pickVal("lastContact"),
      language: pickVal("language"), status: pickVal("status"),
      social: { ig: pickVal("social.ig"), fb: pickVal("social.fb"), tiktok: pickVal("social.tiktok"), x: pickVal("social.x") },
      tags: [...new Set([...(pA.tags || []), ...(pB.tags || [])])],
      entities: [...(pA.entities || []), ...(pB.entities || []).filter(de => !(pA.entities || []).some(ke => ke.id === de.id))],
    };
    onConfirm(keepSide === "A" ? pA.id : pB.id, keepSide === "A" ? pB.id : pA.id, merged);
  };

  return (
    <div className="modal-veil" style={{ zIndex: 1300 }} onClick={onCancel}>
      <div className="modal" style={{ width: "min(840px,100%)" }} onClick={e => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <div style={{ fontWeight: 700, fontSize: 15 }}>
              {lang === "es" ? "Elegir datos del perfil fusionado" : "Choose data for merged profile"}
            </div>
            <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>
              {lang === "es"
                ? "1) Elige el perfil que se queda (ID).  2) Elige el dato de cada campo. Son independientes: el perfil 2 puede quedarse y aun así tomar datos del perfil 1."
                : "1) Pick which profile stays (ID).  2) Pick each field's value. They're independent: profile 2 can be kept while still taking data from profile 1."}
            </div>
          </div>
          <button className="icon-btn" onClick={onCancel}><Icon name="x" /></button>
        </div>

        <div className="modal-body">
          {/* ── Profile base (which ID to keep) ── */}
          <div style={{ display: "grid", gridTemplateColumns: "90px 1fr 1fr", gap: 10, marginBottom: 14, paddingBottom: 14, borderBottom: "2px solid var(--line)" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ink-4)" }}>
                {lang === "es" ? "Se queda" : "Keeps"}
                <span style={{ display: "block", fontSize: 9, fontWeight: 500, textTransform: "none", letterSpacing: 0, color: "var(--ink-4)", marginTop: 2 }}>{lang === "es" ? "el otro se borra" : "other is deleted"}</span>
              </span>
            </div>
            {[{ side: "A", p: pA }, { side: "B", p: pB }].map(({ side, p }) => (
              <div key={side} onClick={() => setKeepSide(side)}
                style={{
                  display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
                  borderRadius: 8, cursor: "pointer",
                  border: "2px solid " + (keepSide === side ? "var(--accent)" : "var(--line)"),
                  background: keepSide === side ? "var(--accent-50)" : "transparent",
                  transition: "border-color .15s, background .15s",
                }}>
                <div className="av-circle" style={{ background: p.color, flexShrink: 0 }}>{initials(fullName(p))}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{fullName(p)}</div>
                  <div style={{ fontSize: 10, color: "var(--ink-4)", fontFamily: "var(--font-mono)" }}>ID conservado: {p.id}</div>
                </div>
                {keepSide === side && <Icon name="check" />}
              </div>
            ))}
          </div>

          {/* ── Select-all shortcuts ── */}
          <div style={{ display: "grid", gridTemplateColumns: "90px 1fr 1fr", gap: 10, marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ink-4)" }}>
                {lang === "es" ? "Datos: todos de…" : "Data: all from…"}
              </span>
            </div>
            <button className="btn btn-sm" onClick={() => setAll("A")} style={{ width: "100%" }}>← {lang === "es" ? "Datos de A" : "Data from A"}</button>
            <button className="btn btn-sm" onClick={() => setAll("B")} style={{ width: "100%" }}>{lang === "es" ? "Datos de B" : "Data from B"} →</button>
          </div>

          {/* ── Field rows by group ── */}
          {GROUPS.map(group => {
            const gFields = FIELDS.filter(f => f.group === group.id).filter(f => getVal(pA, f.key) || getVal(pB, f.key));
            if (!gFields.length) return null;
            return (
              <div key={group.id}>
                <div style={{ fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--ink-4)", margin: "16px 0 6px" }}>
                  {group.label}
                </div>
                {gFields.map(f => {
                  const aRaw = getVal(pA, f.key), bRaw = getVal(pB, f.key);
                  const aDisp = f.fmt ? f.fmt(aRaw) : aRaw;
                  const bDisp = f.fmt ? f.fmt(bRaw) : bRaw;
                  const same = aRaw === bRaw;
                  return (
                    <div key={f.key} style={{ display: "grid", gridTemplateColumns: "90px 1fr 1fr", gap: 8, marginBottom: 5 }}>
                      <div style={{ fontSize: 10.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ink-4)", display: "flex", alignItems: "center" }}>
                        {f.label}
                      </div>
                      {[{ side: "A", disp: aDisp, raw: aRaw }, { side: "B", disp: bDisp, raw: bRaw }].map(({ side, disp, raw }) => {
                        const sel = sels[f.key] === side;
                        return (
                          <div key={side}
                            onClick={() => !same && setSels(s => ({ ...s, [f.key]: side }))}
                            style={{
                              display: "flex", alignItems: "center", gap: 7,
                              padding: "7px 10px", borderRadius: 7, fontSize: 13,
                              border: "2px solid " + (same ? "var(--line)" : sel ? "var(--accent)" : "var(--line)"),
                              background: same ? "transparent" : sel ? "var(--accent-50)" : "var(--bg-soft)",
                              cursor: same ? "default" : "pointer",
                              color: raw ? (sel && !same ? "var(--accent-700)" : "var(--ink-1)") : "var(--ink-5)",
                              fontWeight: sel && !same ? 600 : 400,
                              transition: "border-color .1s, background .1s",
                            }}>
                            {!same && (
                              <div style={{
                                width: 14, height: 14, borderRadius: "50%", flexShrink: 0,
                                border: "2px solid " + (sel ? "var(--accent)" : "var(--ink-4)"),
                                background: sel ? "var(--accent)" : "transparent",
                              }} />
                            )}
                            <span>{disp || <em style={{ color: "var(--ink-5)", fontStyle: "italic", fontWeight: 400 }}>{lang === "es" ? "vacío" : "empty"}</em>}</span>
                            {same && <span style={{ fontSize: 10, color: "var(--ink-4)", marginLeft: "auto" }}>={lang === "es" ? "igual" : "same"}</span>}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}

          <div style={{ marginTop: 16, padding: "10px 14px", background: "var(--bg-soft)", borderRadius: 8, fontSize: 12, color: "var(--ink-3)" }}>
            <strong>{lang === "es" ? "Se combinan siempre:" : "Always combined:"}</strong>
            {" "}{lang === "es" ? "Etiquetas (unión) · Entidades vinculadas (unión) · Comentarios (todos)" : "Tags (union) · Linked entities (union) · Comments (all)"}
          </div>
        </div>

        <div className="modal-foot">
          <button className="btn" onClick={onCancel}>{t.common.cancel}</button>
          <button className="btn btn-primary" onClick={handleConfirm}>
            🔀 {lang === "es" ? "Fusionar con estos datos" : "Merge with these selections"}
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Entity Merge Editor — field-by-field selection for media / entities ───

const EntityMergeEditor = ({ eA, eB, t, lang, onConfirm, onCancel }) => {
  const es = lang === "es";
  const typeLabel = (v) => (t.types && t.types[v]) || v || "";
  const FIELDS = [
    { key: "name",          label: es ? "Nombre" : "Name",          group: "basic" },
    { key: "type",          label: es ? "Tipo" : "Type",            group: "basic", fmt: typeLabel },
    { key: "denominacion",  label: es ? "Denominación" : "Denom.",  group: "basic" },
    { key: "email",         label: "Email",                          group: "contact" },
    { key: "phone",         label: es ? "Teléfono" : "Phone",       group: "contact" },
    { key: "website",       label: "Web",                            group: "contact" },
    { key: "address",       label: es ? "Dirección" : "Address",    group: "location" },
    { key: "zip",           label: "ZIP",                            group: "location" },
    { key: "city",          label: es ? "Ciudad" : "City",          group: "location" },
    { key: "state",         label: es ? "Estado" : "State",         group: "location" },
    { key: "country",       label: es ? "País" : "Country",         group: "location" },
    { key: "social.ig",     label: "Instagram",                      group: "social" },
    { key: "social.fb",     label: "Facebook",                       group: "social" },
    { key: "social.tiktok", label: "TikTok",                         group: "social" },
    { key: "social.x",      label: "X (Twitter)",                    group: "social" },
  ];
  const GROUPS = [
    { id: "basic",    label: es ? "Datos básicos" : "Basic info" },
    { id: "contact",  label: es ? "Contacto" : "Contact" },
    { id: "location", label: es ? "Ubicación" : "Location" },
    { id: "social",   label: "Social & Web" },
  ];
  const getVal = (e, key) => { if (key.includes(".")) { const [o, k] = key.split("."); return (e[o] && e[o][k]) || ""; } return e[key] || ""; };
  const [sels, setSels] = React.useState(() => { const s = {}; FIELDS.forEach(f => { const av = getVal(eA, f.key), bv = getVal(eB, f.key); s[f.key] = (!bv && av) ? "A" : (!av && bv) ? "B" : "A"; }); return s; });
  const [keepSide, setKeepSide] = React.useState("A");
  const setAll = (side) => { const n = {}; FIELDS.forEach(f => n[f.key] = side); setSels(n); };
  const pickVal = (key) => { if (key.includes(".")) { const [o, k] = key.split("."); return sels[key] === "B" ? ((eB[o] && eB[o][k]) || "") : ((eA[o] && eA[o][k]) || ""); } return sels[key] === "B" ? (eB[key] || "") : (eA[key] || ""); };
  const handleConfirm = () => {
    const base = keepSide === "A" ? eA : eB;
    const merged = {
      ...base,
      name: pickVal("name"), type: pickVal("type"), denominacion: pickVal("denominacion"),
      email: pickVal("email"), phone: pickVal("phone"), website: pickVal("website"),
      address: pickVal("address"), zip: pickVal("zip"), city: pickVal("city"), state: pickVal("state"), country: pickVal("country"),
      social: { ig: pickVal("social.ig"), fb: pickVal("social.fb"), tiktok: pickVal("social.tiktok"), x: pickVal("social.x") },
      tags: [...new Set([...(eA.tags || []), ...(eB.tags || [])])],
    };
    onConfirm(keepSide === "A" ? eA.id : eB.id, keepSide === "A" ? eB.id : eA.id, merged);
  };
  return (
    <div className="modal-veil" style={{ zIndex: 1300 }} onClick={onCancel}>
      <div className="modal" style={{ width: "min(840px,100%)" }} onClick={e => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <div style={{ fontWeight: 700, fontSize: 15 }}>{es ? "Elegir datos del medio fusionado" : "Choose data for merged entity"}</div>
            <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>{es ? "1) Elige el medio que se queda.  2) Elige el dato de cada campo." : "1) Pick which entity stays.  2) Pick each field's value."}</div>
          </div>
          <button className="icon-btn" onClick={onCancel}><Icon name="x" /></button>
        </div>
        <div className="modal-body">
          <div style={{ display: "grid", gridTemplateColumns: "90px 1fr 1fr", gap: 10, marginBottom: 14, paddingBottom: 14, borderBottom: "2px solid var(--line)" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ink-4)" }}>{es ? "Se queda" : "Keeps"}
                <span style={{ display: "block", fontSize: 9, fontWeight: 500, textTransform: "none", letterSpacing: 0, color: "var(--ink-4)", marginTop: 2 }}>{es ? "el otro se borra" : "other is deleted"}</span>
              </span>
            </div>
            {[{ side: "A", e: eA }, { side: "B", e: eB }].map(({ side, e }) => (
              <div key={side} onClick={() => setKeepSide(side)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8, cursor: "pointer", border: "2px solid " + (keepSide === side ? "var(--accent)" : "var(--line)"), background: keepSide === side ? "var(--accent-50)" : "transparent" }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>🏢</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{e.name}</div>
                  <div style={{ fontSize: 10, color: "var(--ink-4)", fontFamily: "var(--font-mono)" }}>ID conservado: {e.id}</div>
                </div>
                {keepSide === side && <Icon name="check" />}
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "90px 1fr 1fr", gap: 10, marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center" }}><span style={{ fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ink-4)" }}>{es ? "Datos: todos de…" : "Data: all from…"}</span></div>
            <button className="btn btn-sm" onClick={() => setAll("A")} style={{ width: "100%" }}>← {es ? "Datos de A" : "Data from A"}</button>
            <button className="btn btn-sm" onClick={() => setAll("B")} style={{ width: "100%" }}>{es ? "Datos de B" : "Data from B"} →</button>
          </div>
          {GROUPS.map(group => {
            const gFields = FIELDS.filter(f => f.group === group.id).filter(f => getVal(eA, f.key) || getVal(eB, f.key));
            if (!gFields.length) return null;
            return (
              <div key={group.id}>
                <div style={{ fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--ink-4)", margin: "16px 0 6px" }}>{group.label}</div>
                {gFields.map(f => {
                  const aRaw = getVal(eA, f.key), bRaw = getVal(eB, f.key);
                  const aDisp = f.fmt ? f.fmt(aRaw) : aRaw, bDisp = f.fmt ? f.fmt(bRaw) : bRaw;
                  const same = aRaw === bRaw;
                  return (
                    <div key={f.key} style={{ display: "grid", gridTemplateColumns: "90px 1fr 1fr", gap: 8, marginBottom: 5 }}>
                      <div style={{ fontSize: 10.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--ink-4)", display: "flex", alignItems: "center" }}>{f.label}</div>
                      {[{ side: "A", disp: aDisp, raw: aRaw }, { side: "B", disp: bDisp, raw: bRaw }].map(({ side, disp, raw }) => {
                        const sel = sels[f.key] === side;
                        return (
                          <div key={side} onClick={() => !same && setSels(s => ({ ...s, [f.key]: side }))} style={{ display: "flex", alignItems: "center", gap: 7, padding: "7px 10px", borderRadius: 7, fontSize: 13, border: "2px solid " + (same ? "var(--line)" : sel ? "var(--accent)" : "var(--line)"), background: same ? "transparent" : sel ? "var(--accent-50)" : "var(--bg-soft)", cursor: same ? "default" : "pointer", color: raw ? (sel && !same ? "var(--accent-700)" : "var(--ink-1)") : "var(--ink-5)", fontWeight: sel && !same ? 600 : 400 }}>
                            {!same && (<div style={{ width: 14, height: 14, borderRadius: "50%", flexShrink: 0, border: "2px solid " + (sel ? "var(--accent)" : "var(--ink-4)"), background: sel ? "var(--accent)" : "transparent" }} />)}
                            <span>{disp || <em style={{ color: "var(--ink-5)", fontStyle: "italic", fontWeight: 400 }}>{es ? "vacío" : "empty"}</em>}</span>
                            {same && <span style={{ fontSize: 10, color: "var(--ink-4)", marginLeft: "auto" }}>={es ? "igual" : "same"}</span>}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div style={{ marginTop: 16, padding: "10px 14px", background: "var(--bg-soft)", borderRadius: 8, fontSize: 12, color: "var(--ink-3)" }}>
            <strong>{es ? "Se combinan siempre:" : "Always combined:"}</strong> {es ? "Etiquetas (unión) · Contactos vinculados se mueven al medio que se queda." : "Tags (union) · Linked contacts move to the kept entity."}
          </div>
        </div>
        <div className="modal-foot">
          <button className="btn" onClick={onCancel}>{t.common.cancel}</button>
          <button className="btn btn-primary" onClick={handleConfirm}>🔀 {es ? "Fusionar con estos datos" : "Merge with these selections"}</button>
        </div>
      </div>
    </div>
  );
};

// ─── Duplicate Review Modal ───

const DuplicateReviewModal = ({ pairs, data, onMerge, onDismiss, onClose, t, lang }) => {
  const active = pairs.filter(p => !p.dismissed);

  if (active.length === 0) { onClose(); return null; }

  const cur = active[0];
  const pA = data.personas.find(p => p.id === cur.idA);
  const pB = data.personas.find(p => p.id === cur.idB);

  if (!pA || !pB) { onDismiss(cur); return null; }

  const entName = (le) => {
    const ent = data.entities.find(e => e.id === le.id);
    return ent ? ent.name : le.id;
  };

  const scoreLabel = cur.score >= 6
    ? (lang === "es" ? "Muy probable" : "Very likely")
    : cur.score >= 3
    ? (lang === "es" ? "Probable" : "Likely")
    : (lang === "es" ? "Posible" : "Possible");

  const scoreColor = cur.score >= 6 ? "var(--bad)" : cur.score >= 3 ? "#d97706" : "var(--ink-3)";

  return (
    <div className="modal-veil" style={{ zIndex: 1200 }} onClick={onClose}>
      <div className="modal" style={{ width: "min(820px,100%)" }} onClick={e => e.stopPropagation()}>

        <div className="modal-head">
          <div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>
              {lang === "es" ? "Revisar posibles duplicados" : "Review possible duplicates"}
              <span style={{ marginLeft: 10, fontSize: 12, fontWeight: 500, color: "var(--ink-3)" }}>
                {active.length} {lang === "es" ? "por revisar" : "remaining"}
              </span>
            </div>
            <div style={{ fontSize: 12, color: scoreColor, fontWeight: 600, marginTop: 2 }}>
              ⚠ {lang === "es" ? "Coincidencia:" : "Match:"} {scoreLabel}
              {cur.score >= 3 && " · " + (lang === "es" ? "Mismo email o teléfono" : "Same email or phone")}
            </div>
          </div>
          <button className="icon-btn" onClick={onClose}><Icon name="x" /></button>
        </div>

        <div className="modal-body">
          {/* Column headers */}
          <div style={{ display: "grid", gridTemplateColumns: "90px 1fr 1fr", gap: 10, marginBottom: 4 }}>
            <div />
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div className="av-circle" style={{ background: pA.color, flexShrink: 0 }}>{initials(fullName(pA))}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{fullName(pA)}</div>
                <div style={{ fontSize: 10, color: "var(--ink-4)", fontFamily: "var(--font-mono)" }}>ID {pA.id}</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div className="av-circle" style={{ background: pB.color, flexShrink: 0 }}>{initials(fullName(pB))}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{fullName(pB)}</div>
                <div style={{ fontSize: 10, color: "var(--ink-4)", fontFamily: "var(--font-mono)" }}>ID {pB.id}</div>
              </div>
            </div>
          </div>

          <DupField label={lang === "es" ? "Nombre" : "Name"} a={fullName(pA)} b={fullName(pB)} />
          <DupField label={lang === "es" ? "Cargo" : "Role"} a={t.roles[pA.role] || pA.roleOther || pA.role} b={t.roles[pB.role] || pB.roleOther || pB.role} />
          <DupField label="Email" a={pA.email} b={pB.email} />
          <DupField label={lang === "es" ? "Teléfono" : "Phone"} a={pA.phone} b={pB.phone} />
          <DupField label={lang === "es" ? "Ciudad" : "City"} a={pA.city} b={pB.city} />
          <DupField label={lang === "es" ? "País" : "Country"} a={pA.country} b={pB.country} />
          <DupField label={lang === "es" ? "Cumpleaños" : "Birthday"} a={pA.birthday} b={pB.birthday} />
          <DupField label={lang === "es" ? "Ú. contacto" : "Last contact"} a={pA.lastContact} b={pB.lastContact} />
          <DupField label="Tags" a={(pA.tags || []).join(", ")} b={(pB.tags || []).join(", ")} />
          <DupField
            label={lang === "es" ? "Entidades" : "Entities"}
            a={(pA.entities || []).map(entName).join(", ")}
            b={(pB.entities || []).map(entName).join(", ")}
          />

          <div style={{ marginTop: 14, padding: "10px 14px", background: "var(--bg-soft)", borderRadius: 8, fontSize: 12, color: "var(--ink-3)", lineHeight: 1.6 }}>
            {lang === "es"
              ? "Al fusionar se combinan los campos (priorizando los no vacíos), se unen etiquetas y vínculos de entidades, y se eliminará el registro con ID menor. Los campos resaltados son diferentes entre los dos registros."
              : "On merge, fields are combined (non-empty preferred), tags and entity links are joined, and the lower-ID record is removed. Highlighted fields differ between the two records."}
          </div>
        </div>

        <div className="modal-foot">
          <button className="btn" style={{ marginRight: "auto" }} onClick={onClose}>
            {lang === "es" ? "Revisar después" : "Review later"}
          </button>
          <button className="btn" onClick={() => onDismiss(cur)}>
            👥 {lang === "es" ? "Son personas distintas" : "Different people"}
          </button>
          <button className="btn btn-primary" onClick={() => onMerge(cur.idA, cur.idB)}>
            🔀 {lang === "es" ? "Fusionar — es la misma persona" : "Merge — same person"}
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Duplicates Page ───

const DuplicatesPage = ({ pairs, entityPairs = [], data, onMerge, onMergeWithData, onMergeEntity, onMergeEntityWithData, onDismiss, onUndismiss, onDismissEntity, onUndismissEntity, onScanAll, onCreateDemo, onCreateManual, onCreateManualEntity, onOpenHistory, initialSearch = "", initialTab = "", t, lang }) => {
  const [expanded, setExpanded] = React.useState(null);
  const [mergingPair, setMergingPair] = React.useState(null);
  const [mergingEntPair, setMergingEntPair] = React.useState(null);
  const [showManual, setShowManual] = React.useState(false);
  const [showManualEnt, setShowManualEnt] = React.useState(false);
  const [manEA, setManEA] = React.useState(null);
  const [manEB, setManEB] = React.useState(null);
  const [qEA, setQEA] = React.useState("");
  const [qEB, setQEB] = React.useState("");
  const [dupTab, setDupTab] = React.useState(initialTab || "personas"); // "personas" | "entidades"
  const [manA, setManA] = React.useState(null);   // selected persona A
  const [manB, setManB] = React.useState(null);   // selected persona B
  const [qA, setQA] = React.useState("");
  const [qB, setQB] = React.useState("");
  const [visP, setVisP] = React.useState(40);  // # of active contact pairs rendered (paginate — 2000 cards froze the page)
  const [visE, setVisE] = React.useState(40);  // # of active entity pairs rendered
  const [dupSearch, setDupSearch] = React.useState(initialSearch || "");
  // When navigated here from a profile's "Ver" (with a record id/tab), jump to that
  // record's pair instead of showing the whole list.
  React.useEffect(() => {
    if (initialSearch) setDupSearch(initialSearch);
    if (initialTab) setDupTab(initialTab);
  }, [initialSearch, initialTab]);
  const es = lang === "es";
  // Index records by id ONCE. Was: data.personas.find() per pair × 2 × ~18k records
  // = tens of millions of scans every render → the Duplicates page crawled.
  const personaById = React.useMemo(() => { const m = Object.create(null); (data.personas || []).forEach(p => { m[p.id] = p; }); return m; }, [data.personas]);
  const entityById = React.useMemo(() => { const m = Object.create(null); (data.entities || []).forEach(e => { m[e.id] = e; }); return m; }, [data.entities]);
  const searchP = (q) => {
    const sq = (q || "").trim().toLowerCase();
    if (sq.length < 2) return [];
    const sqAl = sq.replace(/[^a-z0-9]/g, "");   // digits/letters only (match codes/phones with dashes)
    return data.personas.filter(p => {
      const code = (window.getUID ? window.getUID(p.id) : p.id) || "";
      const phones = [p.phone, ...(p.phones || []).map(x => x && x.value)].filter(Boolean).join(" ");
      const emails = [p.email, ...(p.emails || []).map(x => x && x.value)].filter(Boolean).join(" ");
      const s = (fullName(p) + " " + emails + " " + phones + " " + p.id + " " + (p.uid || "") + " " + code).toLowerCase();
      if (s.includes(sq)) return true;
      return sqAl.length >= 2 && s.replace(/[^a-z0-9]/g, "").includes(sqAl);
    }).slice(0, 8);
  };
  const searchE = (q) => {
    const sq = (q || "").trim().toLowerCase();
    if (sq.length < 2) return [];
    const sqAl = sq.replace(/[^a-z0-9]/g, "");
    return (data.entities || []).filter(e => {
      const code = (window.getUID ? window.getUID(e.id) : e.id) || "";
      const s = ((e.name || "") + " " + (e.email || "") + " " + (e.phone || "") + " " + (e.city || "") + " " + e.id + " " + (e.uid || "") + " " + code).toLowerCase();
      if (s.includes(sq)) return true;
      return sqAl.length >= 2 && s.replace(/[^a-z0-9]/g, "").includes(sqAl);
    }).slice(0, 8);
  };

  // Search within the Duplicates section: match a pair if EITHER record matches by
  // name / email / phone / code. Lets the user look up one person and see if they
  // have a pending duplicate.
  const dsq = (dupSearch || "").trim().toLowerCase();
  const dsqAl = dsq.replace(/[^a-z0-9]/g, "");
  const recMatches = (rec, isEnt) => {
    if (!rec) return false;
    const code = (window.getUID ? window.getUID(rec.id) : rec.id) || "";
    const nm = isEnt ? (rec.name || "") : fullName(rec);
    const s = (nm + " " + (rec.email || "") + " " + (rec.phone || "") + " " + rec.id + " " + (rec.uid || "") + " " + code).toLowerCase();
    if (s.includes(dsq)) return true;
    return dsqAl.length >= 2 && s.replace(/[^a-z0-9]/g, "").includes(dsqAl);
  };
  const pairMatches = (pair, isEnt) => {
    if (!dsq) return true;
    const idx = isEnt ? entityById : personaById;
    return recMatches(idx[pair.idA], isEnt) || recMatches(idx[pair.idB], isEnt);
  };

  const active = pairs.filter(p => !p.dismissed && pairMatches(p, false));
  const dismissed = pairs.filter(p => p.dismissed && pairMatches(p, false));
  const entActive = entityPairs.filter(p => !p.dismissed && pairMatches(p, true));

  const toggle = (key) => setExpanded(k => k === key ? null : key);

  const ScoreBadge = ({ score }) => {
    const label = score >= 6
      ? (lang === "es" ? "Mismo email/tel." : "Same email/phone")
      : score >= 3
      ? (lang === "es" ? "Mismo teléfono" : "Same phone")
      : (lang === "es" ? "Mismo nombre" : "Same name");
    const color = score >= 6 ? "#dc2626" : score >= 3 ? "#d97706" : "#6b7280";
    return (
      <span style={{ fontSize: 11, fontWeight: 600, color, background: color + "18", padding: "2px 7px", borderRadius: 20 }}>
        ⚠ {label}
      </span>
    );
  };

  return (
    <div>
      <div className="page-head">
        <div>
          <h1 className="page-title">{lang === "es" ? "Duplicados" : "Duplicates"}</h1>
          <div className="page-sub">
            {active.length > 0
              ? `${active.length} ${lang === "es" ? "pares pendientes de revisión" : "pairs pending review"}`
              : (lang === "es" ? "Sin duplicados pendientes" : "No pending duplicates")}
          </div>
        </div>
        <div className="page-actions">
          <button className={"btn" + ((dupTab === "entidades" ? showManualEnt : showManual) ? " btn-primary" : "")}
            onClick={() => dupTab === "entidades" ? setShowManualEnt(v => !v) : setShowManual(v => !v)}>
            <Icon name="plus" /> {dupTab === "entidades" ? (es ? "Marcar medio duplicado manual" : "Add manual entity duplicate") : (es ? "Marcar duplicado manual" : "Add manual duplicate")}
          </button>
          <button className="btn" onClick={onScanAll}>
            <Icon name="search" /> {lang === "es" ? "Escanear base completa" : "Scan full database"}
          </button>
          {onOpenHistory && (
            <button className="btn" onClick={onOpenHistory}>
              <Icon name="clock" /> {lang === "es" ? "Historial" : "History"}
            </button>
          )}
        </div>
      </div>

      {/* ── Search within duplicates ── */}
      <div style={{ position: "relative", marginBottom: 12 }}>
        <input value={dupSearch} onChange={e => { setDupSearch(e.target.value); setVisP(40); setVisE(40); }}
          placeholder={es ? "Buscar en duplicados: nombre, correo, teléfono, código…" : "Search duplicates: name, email, phone, code…"}
          style={{ width: "100%", padding: "9px 12px 9px 34px", border: "1px solid var(--line)", borderRadius: 8, fontFamily: "inherit", fontSize: 13 }} />
        <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "var(--ink-4)" }}><Icon name="search" size={15} /></span>
        {dupSearch && <button onClick={() => setDupSearch("")} style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", border: "none", background: "none", cursor: "pointer", color: "var(--ink-4)", fontSize: 16 }}>×</button>}
      </div>
      {dsq && (
        <div style={{ fontSize: 12.5, color: "var(--ink-3)", marginBottom: 12 }}>
          {active.length + entActive.length > 0
            ? `${active.length + entActive.length} ${es ? "resultado(s) para" : "result(s) for"} "${dupSearch}"`
            : (es ? `Sin duplicados para "${dupSearch}" — esa persona/medio no tiene duplicado pendiente.` : `No duplicates for "${dupSearch}".`)}
        </div>
      )}

      {/* ── Tabs: Contactos | Entidades ── */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button className={"btn btn-sm" + (dupTab === "personas" ? " btn-primary" : "")} onClick={() => setDupTab("personas")}>
          {es ? "Contactos" : "Contacts"} ({active.length})
        </button>
        <button className={"btn btn-sm" + (dupTab === "entidades" ? " btn-primary" : "")} onClick={() => setDupTab("entidades")}>
          {es ? "Entidades / Medios" : "Entities / Media"} ({entActive.length})
        </button>
      </div>

      {/* ═══ CONTACTOS ═══ */}
      {dupTab === "personas" && (<React.Fragment>

      {/* ── Manual duplicate picker ── */}
      {showManual && (
        <div className="card" style={{ padding: "16px 20px", marginBottom: 14 }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{es ? "Marcar dos contactos como duplicados" : "Mark two contacts as duplicates"}</div>
          <div style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 12 }}>{es ? "Busca y elige los dos contactos que son la misma persona. Aparecerán abajo para revisarlos y fusionarlos." : "Search and pick the two contacts that are the same person. They'll appear below to review and merge."}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[{ q: qA, setQ: setQA, pick: manA, setPick: setManA, label: "A" }, { q: qB, setQ: setQB, pick: manB, setPick: setManB, label: "B" }].map(col => (
              <div key={col.label}>
                {col.pick ? (
                  <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", border: "2px solid var(--accent)", borderRadius: 8, background: "var(--accent-50)" }}>
                    <div className="av-circle" style={{ background: col.pick.color, width: 30, height: 30, fontSize: 12 }}>{initials(fullName(col.pick))}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>{fullName(col.pick)}</div>
                      <div style={{ fontSize: 11, color: "var(--ink-4)" }}>{col.pick.email || col.pick.phone || col.pick.id}</div>
                    </div>
                    <button className="icon-btn" onClick={() => { col.setPick(null); col.setQ(""); }}><Icon name="x" /></button>
                  </div>
                ) : (
                  <div style={{ position: "relative" }}>
                    <input value={col.q} onChange={e => col.setQ(e.target.value)} placeholder={es ? "Nombre, código, teléfono, correo…" : "Name, code, phone, email…"}
                      style={{ width: "100%", padding: "8px 10px", border: "1px solid var(--line)", borderRadius: 8, fontFamily: "inherit", fontSize: 13 }} />
                    {col.q.trim().length >= 2 && (
                      <div style={{ marginTop: 6, border: "1px solid var(--line)", borderRadius: 8, overflow: "hidden", maxHeight: 220, overflowY: "auto" }}>
                        {searchP(col.q).length === 0 && <div style={{ padding: 10, fontSize: 12, color: "var(--ink-4)" }}>{es ? "Sin resultados" : "No results"}</div>}
                        {searchP(col.q).map(p => (
                          <div key={p.id} className="hover-row" style={{ padding: "7px 10px", cursor: "pointer" }} onClick={() => { col.setPick(p); col.setQ(""); }}>
                            <div className="av-circle" style={{ background: p.color, width: 26, height: 26, fontSize: 11 }}>{initials(fullName(p))}</div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontWeight: 600, fontSize: 12.5, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{fullName(p)}</div>
                              <div style={{ fontSize: 11, color: "var(--ink-4)" }}>{p.email || p.phone || "—"}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 14 }}>
            <button className="btn" onClick={() => { setManA(null); setManB(null); setQA(""); setQB(""); setShowManual(false); }}>{t.common.cancel}</button>
            <button className="btn btn-primary" disabled={!manA || !manB || manA.id === manB.id}
              style={{ opacity: (!manA || !manB || (manA && manB && manA.id === manB.id)) ? 0.5 : 1 }}
              onClick={() => { onCreateManual(manA.id, manB.id); setManA(null); setManB(null); setQA(""); setQB(""); }}>
              🔗 {es ? "Marcar como duplicado" : "Mark as duplicate"}
            </button>
          </div>
          {manA && manB && manA.id === manB.id && <div style={{ marginTop: 8, fontSize: 12, color: "var(--bad)" }}>{es ? "Elige dos contactos distintos." : "Pick two different contacts."}</div>}
        </div>
      )}

      {/* ── Empty state ── */}
      {active.length === 0 && (
        <div className="card" style={{ padding: "48px 24px", textAlign: "center" }}>
          <div style={{ fontSize: 44, marginBottom: 12 }}>✓</div>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>
            {lang === "es" ? "No hay duplicados pendientes" : "No pending duplicates"}
          </div>
          <div style={{ color: "var(--ink-3)", fontSize: 13, marginBottom: 24, maxWidth: 440, margin: "0 auto 24px" }}>
            {lang === "es"
              ? "Los duplicados se detectan automáticamente al agregar o importar personas. También puedes escanear toda la base en cualquier momento."
              : "Duplicates are detected automatically when adding or importing people. You can also scan the full database at any time."}
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn" onClick={onScanAll}>
              <Icon name="search" /> {lang === "es" ? "Escanear toda la base" : "Scan full database"}
            </button>
            <button className="btn btn-primary" onClick={onCreateDemo}>
              <Icon name="copy" /> {lang === "es" ? "Crear ejemplo de prueba" : "Create test example"}
            </button>
          </div>
        </div>
      )}

      {/* ── Active pairs ── */}
      {active.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {active.slice(0, visP).map((pair) => {
            const pA = personaById[pair.idA];
            const pB = personaById[pair.idB];
            if (!pA || !pB) return null;
            const key = pair.idA + pair.idB;
            const isOpen = expanded === key;

            return (
              <div key={key} className="card" style={{ overflow: "hidden" }}>
                {/* Summary row — click to expand */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", cursor: "pointer", userSelect: "none" }}
                  onClick={() => toggle(key)}
                >
                  {/* Stacked avatars */}
                  <div style={{ display: "flex", flexShrink: 0 }}>
                    <div className="av-circle" style={{ background: pA.color }}>{initials(fullName(pA))}</div>
                    <div className="av-circle" style={{ background: pB.color, marginLeft: -10, boxShadow: "0 0 0 2px var(--bg)" }}>{initials(fullName(pB))}</div>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>
                      {fullName(pA)} <span style={{ color: "var(--ink-4)", fontWeight: 400 }}>vs</span> {fullName(pB)}
                    </div>
                    <div style={{ marginTop: 3 }}>
                      <ScoreBadge score={pair.score} />
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
                    {!isOpen && (
                      <>
                        <button className="btn btn-sm" style={{ color: "var(--ink-3)" }}
                          onClick={e => { e.stopPropagation(); onDismiss(pair); }}>
                          {lang === "es" ? "Son distintos" : "Different"}
                        </button>
                        <button className="btn btn-sm btn-primary"
                          onClick={e => { e.stopPropagation(); setMergingPair(pair); }}>
                          ✎ {lang === "es" ? "Elegir datos" : "Choose data"}
                        </button>
                      </>
                    )}
                    <span style={{ color: "var(--ink-4)", fontSize: 12 }}>{isOpen ? "▲" : "▼"}</span>
                  </div>
                </div>

                {/* Expanded: side-by-side comparison */}
                {isOpen && (
                  <div style={{ borderTop: "1px solid var(--line)", padding: 16 }}>
                    {/* Column headers */}
                    <div style={{ display: "grid", gridTemplateColumns: "90px 1fr 1fr", gap: 10, marginBottom: 8 }}>
                      <div />
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div className="av-circle" style={{ background: pA.color, flexShrink: 0 }}>{initials(fullName(pA))}</div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 14 }}>{fullName(pA)}</div>
                          <div style={{ fontSize: 10, color: "var(--ink-4)", fontFamily: "var(--font-mono)" }}>ID {pA.id}</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div className="av-circle" style={{ background: pB.color, flexShrink: 0 }}>{initials(fullName(pB))}</div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 14 }}>{fullName(pB)}</div>
                          <div style={{ fontSize: 10, color: "var(--ink-4)", fontFamily: "var(--font-mono)" }}>ID {pB.id}</div>
                        </div>
                      </div>
                    </div>

                    <DupField label={lang === "es" ? "Nombre" : "Name"} a={fullName(pA)} b={fullName(pB)} />
                    <DupField label={lang === "es" ? "Cargo" : "Role"} a={t.roles[pA.role] || pA.roleOther || pA.role} b={t.roles[pB.role] || pB.roleOther || pB.role} />
                    <DupField label="Email" a={pA.email} b={pB.email} />
                    <DupField label={lang === "es" ? "Teléfono" : "Phone"} a={pA.phone} b={pB.phone} />
                    <DupField label={lang === "es" ? "Ciudad" : "City"} a={pA.city} b={pB.city} />
                    <DupField label={lang === "es" ? "País" : "Country"} a={pA.country} b={pB.country} />
                    <DupField label={lang === "es" ? "Cumpleaños" : "Birthday"} a={pA.birthday} b={pB.birthday} />
                    <DupField label={lang === "es" ? "Ú. contacto" : "Last contact"} a={pA.lastContact} b={pB.lastContact} />
                    <DupField label="Tags" a={(pA.tags || []).join(", ")} b={(pB.tags || []).join(", ")} />
                    <DupField
                      label={lang === "es" ? "Entidades" : "Entities"}
                      a={(pA.entities || []).map(le => { const e = entityById[le.id]; return e ? e.name : le.id; }).join(", ")}
                      b={(pB.entities || []).map(le => { const e = entityById[le.id]; return e ? e.name : le.id; }).join(", ")}
                    />

                    <div style={{ marginTop: 14, padding: "10px 14px", background: "var(--bg-soft)", borderRadius: 8, fontSize: 12, color: "var(--ink-3)", marginBottom: 14 }}>
                      {lang === "es"
                        ? "Fusionar combina los datos (prefiere campos no vacíos), une etiquetas, vínculos y comentarios, y elimina el registro duplicado."
                        : "Merge combines data (non-empty fields preferred), joins tags, links and comments, and removes the duplicate record."}
                    </div>

                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <button className="btn" onClick={() => { onDismiss(pair); setExpanded(null); }}>
                        👥 {lang === "es" ? "Son personas distintas" : "Different people"}
                      </button>
                      <button className="btn" onClick={() => { onMerge(pair.idA, pair.idB); setExpanded(null); }}>
                        🔀 {lang === "es" ? "Fusionar (auto)" : "Auto-merge"}
                      </button>
                      <button className="btn btn-primary" onClick={() => setMergingPair(pair)}>
                        ✎ {lang === "es" ? "Elegir datos →" : "Choose data →"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {active.length > visP && (
            <button className="btn" style={{ alignSelf: "center", marginTop: 4 }} onClick={() => setVisP(v => v + 40)}>
              {es ? `Ver más (${active.length - visP} restantes)` : `Show more (${active.length - visP} left)`}
            </button>
          )}
        </div>
      )}

      {/* ── Dismissed pairs ── */}
      {dismissed.length > 0 && (
        <div style={{ marginTop: 28 }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--ink-4)", marginBottom: 8 }}>
            {lang === "es" ? "Revisados — personas distintas" : "Reviewed — different people"} ({dismissed.length})
          </div>
          {dismissed.map(pair => {
            const pA = personaById[pair.idA];
            const pB = personaById[pair.idB];
            if (!pA || !pB) return null;
            return (
              <div key={pair.idA + pair.idB} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 14px", background: "var(--bg-soft)", borderRadius: 8, marginBottom: 6, fontSize: 13 }}>
                <span style={{ color: "var(--good)" }}>✓</span>
                <span style={{ flex: 1, color: "var(--ink-3)" }}>{fullName(pA)} · {fullName(pB)}</span>
                <button className="btn btn-sm btn-ghost" onClick={() => onUndismiss(pair)}>
                  {lang === "es" ? "Deshacer" : "Undo"}
                </button>
              </div>
            );
          })}
        </div>
      )}

      </React.Fragment>)}

      {/* ═══ ENTIDADES / MEDIOS ═══ */}
      {dupTab === "entidades" && showManualEnt && (
            <div className="card" style={{ padding: "16px 20px", marginBottom: 14 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{es ? "Marcar dos medios/entidades como duplicados" : "Mark two entities as duplicates"}</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 12 }}>{es ? "Busca y elige los dos medios que son el mismo. Aparecerán abajo para revisarlos y fusionarlos." : "Search and pick the two entities that are the same."}</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[{ q: qEA, setQ: setQEA, pick: manEA, setPick: setManEA }, { q: qEB, setQ: setQEB, pick: manEB, setPick: setManEB }].map((col, ci) => (
                  <div key={ci}>
                    {col.pick ? (
                      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", border: "2px solid var(--accent)", borderRadius: 8, background: "var(--accent-50)" }}>
                        <span style={{ fontSize: 18 }}>🏢</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 700, fontSize: 13 }}>{col.pick.name}</div>
                          <div style={{ fontSize: 11, color: "var(--ink-4)" }}>{col.pick.city || col.pick.email || col.pick.id}</div>
                        </div>
                        <button className="icon-btn" onClick={() => { col.setPick(null); col.setQ(""); }}><Icon name="x" /></button>
                      </div>
                    ) : (
                      <div style={{ position: "relative" }}>
                        <input value={col.q} onChange={e => col.setQ(e.target.value)} placeholder={es ? "Nombre del medio, ciudad, código…" : "Entity name, city, code…"}
                          style={{ width: "100%", padding: "8px 10px", border: "1px solid var(--line)", borderRadius: 8, fontFamily: "inherit", fontSize: 13 }} />
                        {col.q.trim().length >= 2 && (
                          <div style={{ marginTop: 6, border: "1px solid var(--line)", borderRadius: 8, overflow: "hidden", maxHeight: 220, overflowY: "auto" }}>
                            {searchE(col.q).length === 0 && <div style={{ padding: 10, fontSize: 12, color: "var(--ink-4)" }}>{es ? "Sin resultados" : "No results"}</div>}
                            {searchE(col.q).map(e => (
                              <div key={e.id} className="hover-row" style={{ padding: "7px 10px", cursor: "pointer", display: "flex", gap: 8, alignItems: "center" }} onClick={() => { col.setPick(e); col.setQ(""); }}>
                                <span style={{ fontSize: 16 }}>🏢</span>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{ fontWeight: 600, fontSize: 12.5, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e.name}</div>
                                  <div style={{ fontSize: 11, color: "var(--ink-4)" }}>{e.city || e.email || "—"}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 14 }}>
                <button className="btn" onClick={() => { setManEA(null); setManEB(null); setQEA(""); setQEB(""); setShowManualEnt(false); }}>{t.common.cancel}</button>
                <button className="btn btn-primary" disabled={!manEA || !manEB || (manEA && manEB && manEA.id === manEB.id)}
                  style={{ opacity: (!manEA || !manEB || (manEA && manEB && manEA.id === manEB.id)) ? 0.5 : 1 }}
                  onClick={() => { onCreateManualEntity && onCreateManualEntity(manEA.id, manEB.id); setManEA(null); setManEB(null); setQEA(""); setQEB(""); }}>
                  🔗 {es ? "Marcar como duplicado" : "Mark as duplicate"}
                </button>
              </div>
              {manEA && manEB && manEA.id === manEB.id && <div style={{ marginTop: 8, fontSize: 12, color: "var(--bad)" }}>{es ? "Elige dos medios distintos." : "Pick two different entities."}</div>}
            </div>
      )}
      {dupTab === "entidades" && entActive.length === 0 && !showManualEnt && (
        <div className="card" style={{ padding: "40px 24px", textAlign: "center", color: "var(--ink-3)", fontSize: 13 }}>
          {es ? "No hay medios / entidades duplicados detectados." : "No duplicate media / entities detected."}
        </div>
      )}
      {dupTab === "entidades" && entityPairs.length > 0 && (
        <div style={{ marginTop: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 4 }}>
            {es ? "Medios / entidades duplicados" : "Duplicate media / entities"}
          </div>
          <div style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 12 }}>
            {entActive.length} {es ? "pares pendientes de revisión" : "pairs pending review"}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {entActive.slice(0, visE).map(pair => {
              const eA = entityById[pair.idA];
              const eB = entityById[pair.idB];
              if (!eA || !eB) return null;
              const ekey = "ent-" + pair.idA + pair.idB;
              const isOpen = expanded === ekey;
              const typeLabel = (e) => (t.types && t.types[e.type]) || e.type || "—";
              return (
                <div key={pair.idA + pair.idB} className="card" style={{ overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", cursor: "pointer", flexWrap: "wrap" }} onClick={() => toggle(ekey)}>
                    <div style={{ flex: 1, minWidth: 200 }}>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>{eA.name} <span style={{ color: "var(--ink-4)", fontWeight: 400 }}>vs</span> {eB.name}</div>
                      <div style={{ fontSize: 11.5, color: "var(--ink-3)", marginTop: 3 }}>
                        {[typeLabel(eA), eA.city, eA.email, eA.phone].filter(Boolean).join(" · ") || "—"}{"  ·  "}{[typeLabel(eB), eB.city, eB.email, eB.phone].filter(Boolean).join(" · ") || "—"}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8, flexShrink: 0, alignItems: "center" }}>
                      {!isOpen && (
                        <>
                          <button className="btn btn-sm" onClick={e => { e.stopPropagation(); onDismissEntity && onDismissEntity(pair); }}>{es ? "Son distintos" : "Different"}</button>
                          <button className="btn btn-sm btn-primary" onClick={e => { e.stopPropagation(); setMergingEntPair(pair); }}>✎ {es ? "Elegir datos" : "Choose data"}</button>
                        </>
                      )}
                      <span style={{ color: "var(--ink-4)", fontSize: 12 }}>{isOpen ? "▲" : "▼"}</span>
                    </div>
                  </div>
                  {isOpen && (
                    <div style={{ borderTop: "1px solid var(--line)", padding: 16 }}>
                      <div style={{ display: "grid", gridTemplateColumns: "90px 1fr 1fr", gap: 10, marginBottom: 8 }}>
                        <div />
                        <div><div style={{ fontWeight: 700, fontSize: 13.5 }}>{eA.name}</div><div style={{ fontSize: 10, color: "var(--ink-4)", fontFamily: "var(--font-mono)" }}>ID {eA.id}</div></div>
                        <div><div style={{ fontWeight: 700, fontSize: 13.5 }}>{eB.name}</div><div style={{ fontSize: 10, color: "var(--ink-4)", fontFamily: "var(--font-mono)" }}>ID {eB.id}</div></div>
                      </div>
                      <DupField label={es ? "Nombre" : "Name"} a={eA.name} b={eB.name} />
                      <DupField label={es ? "Tipo" : "Type"} a={typeLabel(eA)} b={typeLabel(eB)} />
                      <DupField label="Email" a={eA.email} b={eB.email} />
                      <DupField label={es ? "Teléfono" : "Phone"} a={eA.phone} b={eB.phone} />
                      <DupField label={es ? "Ciudad" : "City"} a={eA.city} b={eB.city} />
                      <DupField label={es ? "Estado" : "State"} a={eA.state} b={eB.state} />
                      <DupField label={es ? "País" : "Country"} a={eA.country} b={eB.country} />
                      <DupField label="Web" a={eA.website} b={eB.website} />
                      <DupField label={es ? "Dirección" : "Address"} a={eA.address} b={eB.address} />
                      <DupField label="Tags" a={(eA.tags || []).join(", ")} b={(eB.tags || []).join(", ")} />
                      <div style={{ marginTop: 14, padding: "10px 14px", background: "var(--bg-soft)", borderRadius: 8, fontSize: 12, color: "var(--ink-3)", marginBottom: 14 }}>
                        {es ? "Fusionar combina los datos (prefiere lo no vacío), une etiquetas y contactos vinculados, y elimina el duplicado." : "Merge combines data, joins tags & linked contacts, and removes the duplicate."}
                      </div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        <button className="btn" onClick={() => { onDismissEntity && onDismissEntity(pair); setExpanded(null); }}>🏢 {es ? "Son medios distintos" : "Different"}</button>
                        <button className="btn" onClick={() => { onMergeEntity && onMergeEntity(pair.idA, pair.idB); setExpanded(null); }}>🔀 {es ? "Fusionar (auto)" : "Auto-merge"}</button>
                        <button className="btn btn-primary" onClick={() => { setMergingEntPair(pair); setExpanded(null); }}>✎ {es ? "Elegir datos →" : "Choose data →"}</button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            {entActive.length > visE && (
              <button className="btn" style={{ alignSelf: "center", marginTop: 4 }} onClick={() => setVisE(v => v + 40)}>
                {es ? `Ver más (${entActive.length - visE} restantes)` : `Show more`}
              </button>
            )}
          </div>
          {entityPairs.filter(p => p.dismissed).length > 0 && (
            <div style={{ marginTop: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--ink-4)", marginBottom: 8 }}>
                {es ? "Revisados — medios distintos" : "Reviewed — different"} ({entityPairs.filter(p => p.dismissed).length})
              </div>
              {entityPairs.filter(p => p.dismissed).map(pair => {
                const eA = entityById[pair.idA];
                const eB = entityById[pair.idB];
                if (!eA || !eB) return null;
                return (
                  <div key={pair.idA + pair.idB} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 14px", background: "var(--bg-soft)", borderRadius: 8, marginBottom: 6, fontSize: 13 }}>
                    <span style={{ color: "var(--good)" }}>✓</span>
                    <span style={{ flex: 1, color: "var(--ink-3)" }}>{eA.name} · {eB.name}</span>
                    <button className="btn btn-sm btn-ghost" onClick={() => onUndismissEntity && onUndismissEntity(pair)}>{es ? "Deshacer" : "Undo"}</button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ── MergeEditor overlay ── */}
      {mergingPair && (() => {
        const pA = personaById[mergingPair.idA];
        const pB = personaById[mergingPair.idB];
        if (!pA || !pB) { setMergingPair(null); return null; }
        return (
          <MergeEditor
            pA={pA} pB={pB} data={data}
            onConfirm={(keepId, dropId, mergedData) => {
              onMergeWithData(keepId, dropId, mergedData);
              setMergingPair(null);
              setExpanded(null);
            }}
            onCancel={() => setMergingPair(null)}
            t={t} lang={lang}
          />
        );
      })()}

      {mergingEntPair && (() => {
        const eA = entityById[mergingEntPair.idA];
        const eB = entityById[mergingEntPair.idB];
        if (!eA || !eB) { setMergingEntPair(null); return null; }
        return (
          <EntityMergeEditor
            eA={eA} eB={eB}
            onConfirm={(keepId, dropId, mergedData) => {
              (onMergeEntityWithData || onMergeEntity)(keepId, dropId, mergedData);
              setMergingEntPair(null);
              setExpanded(null);
            }}
            onCancel={() => setMergingEntPair(null)}
            t={t} lang={lang}
          />
        );
      })()}
    </div>
  );
};

window.findDuplicatePairs = findDuplicatePairs;
window.DuplicateReviewModal = DuplicateReviewModal;
window.DuplicatesPage = DuplicatesPage;
