// PROMEZA CRM — Forms: New Person / New Entity (modal style)

const TextField = ({ label, value, onChange, type = "text", placeholder, full, optional, hint, onBlur }) => (
  <div className={"field" + (full ? " full" : "")}>
    <label>{label}{optional && <span style={{ marginLeft: 6, color: "var(--ink-4)", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(opcional)</span>}</label>
    <input type={type} value={value || ""} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} onBlur={onBlur} />
    {hint && <div className="muted" style={{ fontSize: 11 }}>{hint}</div>}
  </div>
);

const SelectField = ({ label, value, onChange, options, full }) => (
  <div className={"field" + (full ? " full" : "")}>
    <label>{label}</label>
    <select value={value || ""} onChange={e => onChange(e.target.value)}>
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  </div>
);

const PHONE_LABELS = ["Personal", "Trabajo", "WhatsApp", "Casa", "Oficina", "Otro"];
const EMAIL_LABELS = ["Personal", "Trabajo", "Otro"];

const MultiContactField = ({ label, entries, onChange, type = "phone", lang }) => {
  const labels = type === "phone" ? PHONE_LABELS : EMAIL_LABELS;
  const placeholder = type === "phone" ? "+1 305 555 0000" : "correo@dominio.com";
  const inputType = type === "email" ? "email" : "tel";
  const add = () => onChange([...entries, { value: "", label: labels[0] }]);
  const remove = (i) => onChange(entries.filter((_, idx) => idx !== i));
  const upd = (i, key, val) => onChange(entries.map((e, idx) => idx === i ? { ...e, [key]: val } : e));
  return (
    <div className="field full">
      <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span>{label}</span>
        <button type="button" onClick={add} style={{ border: "none", background: "none", cursor: "pointer", color: "var(--accent)", fontSize: 12, fontWeight: 600, padding: "0 2px", fontFamily: "inherit" }}>+ Agregar</button>
      </label>
      {entries.length === 0 && (
        <button type="button" onClick={add} style={{ width: "100%", padding: "9px 12px", border: "1px dashed var(--line)", borderRadius: 8, background: "transparent", cursor: "pointer", color: "var(--ink-3)", fontSize: 13, fontFamily: "inherit", textAlign: "left" }}>+ {label}</button>
      )}
      {entries.map((entry, i) => (
        <div key={i} style={{ display: "flex", gap: 6, marginTop: 6, alignItems: "center" }}>
          <select value={entry.label} onChange={e => upd(i, "label", e.target.value)}
            style={{ flexShrink: 0, width: 110, padding: "8px 10px", border: "1px solid var(--line)", borderRadius: 8, background: "var(--bg)", fontSize: 13, fontFamily: "inherit", color: "var(--ink-1)" }}>
            {labels.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
          <input type={inputType} value={entry.value} onChange={e => upd(i, "value", e.target.value)}
            placeholder={placeholder}
            style={{ flex: 1, padding: "8px 12px", border: "1px solid var(--line)", borderRadius: 8, background: "var(--bg)", fontSize: 13, fontFamily: "inherit", color: "var(--ink-1)" }} />
          <button type="button" onClick={() => remove(i)}
            style={{ flexShrink: 0, border: "none", background: "none", cursor: "pointer", color: "var(--ink-4)", fontSize: 18, padding: "0 4px", lineHeight: 1 }}>×</button>
        </div>
      ))}
    </div>
  );
};

// ─── Roles Multi-Select Field ───

const RolesField = ({ roles, onChange, t }) => {
  const toggle = (key) => {
    if (roles.includes(key)) {
      const next = roles.filter(r => r !== key);
      onChange(next.length ? next : ["miembro"]);
    } else {
      onChange([...roles, key]);
    }
  };
  return (
    <div className="field full">
      <label>{t.common.role} <span style={{ marginLeft: 6, color: "var(--ink-4)", fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: 11 }}>(uno o varios)</span></label>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {Object.keys(t.roles).map(key => (
          <button key={key} type="button" onClick={() => toggle(key)}
            style={{ padding: "5px 11px", borderRadius: 20, border: "1.5px solid " + (roles.includes(key) ? "var(--accent)" : "var(--line)"), background: roles.includes(key) ? "var(--accent)" : "transparent", color: roles.includes(key) ? "#fff" : "var(--ink-3)", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "inherit", transition: "all .15s" }}>
            {t.roles[key]}
          </button>
        ))}
      </div>
    </div>
  );
};

// ─── Schedule Field (for entities) ───

const SCHEDULE_DAYS = [
  { key: "domingo",   short: "Dom", label: "Domingo" },
  { key: "lunes",     short: "Lun", label: "Lunes" },
  { key: "martes",    short: "Mar", label: "Martes" },
  { key: "miercoles", short: "Mié", label: "Miércoles" },
  { key: "jueves",    short: "Jue", label: "Jueves" },
  { key: "viernes",   short: "Vie", label: "Viernes" },
  { key: "sabado",    short: "Sáb", label: "Sábado" },
];
const DAY_ORDER = SCHEDULE_DAYS.map(d => d.key);

const ScheduleField = ({ schedule, onChange }) => {
  const has = (day) => schedule.some(s => s.day === day);
  // Toggle: add first slot or remove all slots for that day
  const toggle = (day) => {
    if (has(day)) onChange(schedule.filter(s => s.day !== day));
    else onChange([...schedule, { day, time: "" }].sort((a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day)));
  };
  // Add another time slot for an already-selected day
  const addSlot = (day) => onChange([...schedule, { day, time: "" }].sort((a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day)));
  // Remove a specific slot by its array index
  const removeSlot = (idx) => onChange(schedule.filter((_, i) => i !== idx));
  const setTime = (idx, time) => onChange(schedule.map((s, i) => i === idx ? { ...s, time } : s));

  // Group entries by day for display
  const byDay = DAY_ORDER.filter(has).map(day => ({
    day,
    dayObj: SCHEDULE_DAYS.find(d => d.key === day),
    entries: schedule.map((s, i) => ({ ...s, idx: i })).filter(s => s.day === day),
  }));

  return (
    <div className="field full">
      <label>Horario de servicios · Opcional</label>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: byDay.length ? 10 : 0 }}>
        {SCHEDULE_DAYS.map(({ key, short }) => (
          <button key={key} type="button" onClick={() => toggle(key)}
            style={{ padding: "5px 11px", border: "1.5px solid " + (has(key) ? "var(--accent)" : "var(--line)"), borderRadius: 20, background: has(key) ? "var(--accent)" : "transparent", color: has(key) ? "#fff" : "var(--ink-3)", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "inherit", transition: "all .15s" }}>
            {short}
          </button>
        ))}
      </div>
      {byDay.map(({ day, dayObj, entries }) => (
        <div key={day} style={{ marginBottom: 8, padding: "8px 10px", background: "var(--bg-2, #f8f8fa)", borderRadius: 8, border: "1px solid var(--line)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: entries.length ? 8 : 0 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "capitalize" }}>{dayObj?.label || day}</span>
            <button type="button" onClick={() => addSlot(day)}
              style={{ fontSize: 11, color: "var(--accent)", border: "none", background: "none", cursor: "pointer", fontFamily: "inherit", padding: 0, fontWeight: 600 }}>
              + hora
            </button>
          </div>
          {entries.map(({ idx, time }) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <input type="time" value={time || ""} onChange={e => setTime(idx, e.target.value)}
                style={{ flex: 1, padding: "6px 10px", border: "1px solid var(--line)", borderRadius: 8, background: "var(--bg)", fontSize: 13, fontFamily: "inherit", color: "var(--ink-1)" }} />
              <button type="button" onClick={() => removeSlot(idx)}
                style={{ color: "var(--ink-4)", border: "none", background: "none", cursor: "pointer", fontSize: 18, lineHeight: 1, padding: "0 2px" }}>×</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// ─── New Person ───

const NewPersonForm = ({ t, lang, data, onClose, onSave, initialData, editMode, prefillData }) => {
  const [form, setForm] = React.useState(() => initialData ? {
    first: initialData.first || "",
    last: initialData.last || "",
    roles: initialData.roles || (initialData.role ? [initialData.role] : ["miembro"]),
    roleOther: initialData.roleOther || "",
    emails: initialData.emails || (initialData.email ? [{ value: initialData.email, label: "Personal" }] : []),
    phones: initialData.phones || (initialData.phone ? [{ value: initialData.phone, label: "Personal" }] : []),
    address: initialData.address || "",
    zip: initialData.zip || "",
    city: initialData.city || "",
    state: initialData.state || "",
    country: initialData.country || "",
    county: initialData.county || "",
    website: initialData.website || "",
    social: initialData.social || { ig: "", fb: "", tiktok: "", x: "" },
    entities: initialData.entities || [],
    tags: Array.isArray(initialData.tags) ? initialData.tags.join(", ") : (initialData.tags || ""),
    language: initialData.language || "es",
    status: initialData.status || "activo",
    stage: initialData.stage || (initialData.status === "inactivo" ? "inactivo" : "conocido"),
    source: initialData.source || "",
    nextAction: initialData.nextAction || "",
    birthday: initialData.birthday || "",
    lastContact: initialData.lastContact || "",
    extraAddresses: initialData.extraAddresses || [],
    addressLabel: initialData.addressLabel || "domicilio",
  } : {
    first: "", last: "", roles: ["miembro"], roleOther: "",
    emails: [], phones: [],
    address: "", zip: "", city: "", state: "", country: "", county: "",
    addressLabel: "domicilio",
    website: "",
    social: { ig: "", fb: "", tiktok: "", x: "" },
    entities: prefillData?.entityId ? [{ id: prefillData.entityId, role: prefillData.entityRole || "miembro", roleOther: "", comment: "" }] : [],
    tags: "", language: "es", status: "activo",
    stage: "nuevo", source: "", nextAction: "",
    birthday: "", lastContact: "",
    extraAddresses: [],
  });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const setSoc = (k, v) => setForm(f => ({ ...f, social: { ...f.social, [k]: v } }));

  const [countyLoading, setCountyLoading] = React.useState(false);
  const lookupCounty = async (city, state) => {
    if (!city) return;
    const q = [city, state].filter(Boolean).join(", ");
    setCountyLoading(true);
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&addressdetails=1&limit=1`, { headers: { "Accept-Language": "es" } });
      const results = await res.json();
      if (results.length && results[0].address) {
        const addr = results[0].address;
        const county = addr.county || addr.state_district || addr.region || "";
        if (county) set("county", county);
      }
    } catch(e) {}
    setCountyLoading(false);
  };

  const addAddress = () => set("extraAddresses", [...(form.extraAddresses || []), { id: "addr" + Date.now(), label: "", address: "", city: "", state: "", country: "", zip: "" }]);
  const removeAddress = (idx) => set("extraAddresses", form.extraAddresses.filter((_, i) => i !== idx));
  const updateAddress = (idx, k, v) => set("extraAddresses", form.extraAddresses.map((a, i) => i === idx ? { ...a, [k]: v } : a));

  const roleOpts = Object.keys(t.roles).map(k => ({ value: k, label: t.roles[k] }));
  const langOpts = [{ value: "es", label: "Español" }, { value: "en", label: "English" }, { value: "pt", label: "Português" }];
  const statusOpts = [{ value: "activo", label: t.common.activos }, { value: "inactivo", label: t.common.inactivos }];

  const addEntityLink = () => set("entities", [...form.entities, { id: data.entities[0]?.id || "", role: "miembro", roleOther: "", comment: "" }]);
  const removeEntityLink = (idx) => set("entities", form.entities.filter((_, i) => i !== idx));
  const updateEntityLink = (idx, k, v) => set("entities", form.entities.map((e, i) => i === idx ? { ...e, [k]: v } : e));

  const addrLabels = [
    lang === "es" ? "Domicilio" : "Home",
    lang === "es" ? "Iglesia" : "Church",
    lang === "es" ? "Trabajo" : "Work",
    lang === "es" ? "Ministerio" : "Ministry",
    lang === "es" ? "Otro" : "Other",
  ];

  return (
    <div className="modal-veil" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>{editMode ? (lang === "es" ? "Editar persona" : "Edit person") : t.forms.newPersonTitle}</div>
            <div className="muted" style={{ fontSize: 12 }}>{t.forms.basic}</div>
          </div>
          <button className="icon-btn" onClick={onClose}><Icon name="x" /></button>
        </div>
        <div className="modal-body">
          <h4 style={{ margin: "0 0 8px", fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em" }}>{t.forms.basic}</h4>
          <div className="form-grid">
            <TextField label={t.forms.first} value={form.first} onChange={v => set("first", v)} placeholder="Marcos" />
            <TextField label={t.forms.last} value={form.last} onChange={v => set("last", v)} placeholder="Rivera" />
            <RolesField roles={form.roles} onChange={v => set("roles", v)} t={t} />
            {form.roles.includes("otro") && <TextField label={t.common.roleOther} value={form.roleOther} onChange={v => set("roleOther", v)} placeholder="Coordinador, Director…" />}
          </div>

          <h4 style={{ margin: "18px 0 8px", fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em" }}>{t.forms.contact}</h4>
          <div className="form-grid">
            <MultiContactField label="Email(s)" entries={form.emails} onChange={v => set("emails", v)} type="email" lang={lang} />
            <MultiContactField label={lang === "es" ? "Teléfono(s)" : "Phone(s)"} entries={form.phones} onChange={v => set("phones", v)} type="phone" lang={lang} />
          </div>

          {/* Primary address */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "18px 0 8px" }}>
            <h4 style={{ margin: 0, fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em" }}>
              {lang === "es" ? "Dirección" : "Address"}
            </h4>
            <select value={form.addressLabel} onChange={e => set("addressLabel", e.target.value)}
              style={{ fontSize: 12, padding: "3px 8px", border: "1px solid var(--line)", borderRadius: 6, background: "var(--bg)", color: "var(--accent)", fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>
              <option value="domicilio">{lang === "es" ? "Domicilio / Casa" : "Home"}</option>
              <option value="iglesia">{lang === "es" ? "Iglesia" : "Church"}</option>
              <option value="trabajo">{lang === "es" ? "Trabajo / Oficina" : "Work / Office"}</option>
              <option value="ministerio">{lang === "es" ? "Ministerio" : "Ministry"}</option>
              <option value="otro">{lang === "es" ? "Otro" : "Other"}</option>
            </select>
          </div>
          <div className="form-grid">
            <TextField full label={lang === "es" ? "Dirección completa" : "Full address"} value={form.address} onChange={v => set("address", v)} placeholder="Calle, número, depto." />
            <TextField label="ZIP" value={form.zip} onChange={v => set("zip", v)} />
            <TextField label={lang === "es" ? "Ciudad" : "City"} value={form.city} onChange={v => set("city", v)} onBlur={() => lookupCounty(form.city, form.state)} />
            <TextField label={lang === "es" ? "Estado / Provincia" : "State / Province"} value={form.state} onChange={v => set("state", v)} onBlur={() => lookupCounty(form.city, form.state)} />
            <TextField label={lang === "es" ? "País" : "Country"} value={form.country} onChange={v => set("country", v)} />
            <div className="field">
              <label>
                {lang === "es" ? "Condado / Región" : "County / Region"}
                {countyLoading && <span style={{ marginLeft: 6, color: "var(--accent)", fontSize: 10, fontWeight: 400 }}>detectando…</span>}
                {form.county && !countyLoading && <span style={{ marginLeft: 6, color: "var(--good)", fontSize: 10, fontWeight: 600 }}>● auto</span>}
              </label>
              <input value={form.county || ""} onChange={e => set("county", e.target.value)} placeholder={lang === "es" ? "Se detecta al ingresar ciudad" : "Auto-detected from city"} />
            </div>
          </div>

          {/* Extra addresses */}
          {(form.extraAddresses || []).map((addr, idx) => (
            <div key={addr.id || idx} className="entity-block" style={{ marginTop: 10 }}>
              <div className="head">
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon name="pin" size={14} />
                  <select
                    value={addr.label}
                    onChange={e => updateAddress(idx, "label", e.target.value)}
                    style={{ border: "none", background: "transparent", fontFamily: "inherit", fontSize: 13, fontWeight: 600, color: "var(--ink)", cursor: "pointer" }}>
                    <option value="">{lang === "es" ? "Tipo de dirección…" : "Address type…"}</option>
                    {addrLabels.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
                <button className="btn btn-sm btn-ghost" onClick={() => removeAddress(idx)} style={{ color: "var(--bad)" }}>
                  <Icon name="x" size={13} /> {lang === "es" ? "Quitar" : "Remove"}
                </button>
              </div>
              <div className="form-grid">
                <TextField full label={lang === "es" ? "Dirección" : "Address"} value={addr.address} onChange={v => updateAddress(idx, "address", v)} placeholder="Calle, número…" />
                <TextField label="ZIP" value={addr.zip} onChange={v => updateAddress(idx, "zip", v)} />
                <TextField label={lang === "es" ? "Ciudad" : "City"} value={addr.city} onChange={v => updateAddress(idx, "city", v)} />
                <TextField label={lang === "es" ? "Estado" : "State"} value={addr.state} onChange={v => updateAddress(idx, "state", v)} />
                <TextField label={lang === "es" ? "País" : "Country"} value={addr.country} onChange={v => updateAddress(idx, "country", v)} />
              </div>
            </div>
          ))}
          <div style={{ marginTop: 8 }}>
            <button className="btn btn-sm btn-ghost" onClick={addAddress}>
              <Icon name="plus" /> {lang === "es" ? "Agregar otra dirección" : "Add another address"}
            </button>
          </div>

          <h4 style={{ margin: "18px 0 8px", fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em" }}>
            {t.forms.affiliation} <span className="muted" style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, marginLeft: 4 }}>· {t.common.optional}</span>
          </h4>
          {form.entities.length === 0 && <div className="muted" style={{ fontSize: 13, padding: "4px 2px" }}>{t.forms.noEntity}</div>}
          {form.entities.map((le, i) => (
            <div key={i} className="entity-block">
              <div className="head">
                <div style={{ fontWeight: 600, fontSize: 13 }}>{lang === "es" ? "Entidad" : "Entity"} #{i + 1}</div>
                <button className="btn btn-sm btn-ghost" onClick={() => removeEntityLink(i)}><Icon name="x" /> {t.forms.removeEntity}</button>
              </div>
              <div className="form-grid">
                <div className="field full">
                  <label>{lang === "es" ? "Entidad" : "Entity"}</label>
                  <SearchPicker
                    items={data.entities}
                    value={le.id}
                    onChange={v => updateEntityLink(i, "id", v)}
                    getLabel={e => e.name || ""}
                    getSub={e => [e.city && (e.city + (e.state ? ", " + e.state : "")), (e.phone || (e.phones && e.phones[0] && e.phones[0].value))].filter(Boolean).join(" · ")}
                    getPhone={e => e.phone || (e.phones && e.phones[0] && e.phones[0].value) || ""}
                    lang={lang}
                    placeholder={lang === "es" ? "Escribe el nombre de la entidad…" : "Type entity name…"} />
                </div>
                <SelectField label={lang === "es" ? "Cargo en la entidad" : "Role at entity"} value={le.role} onChange={v => updateEntityLink(i, "role", v)} options={roleOpts} />
                {le.role === "otro" && <TextField label={t.common.roleOther} value={le.roleOther} onChange={v => updateEntityLink(i, "roleOther", v)} />}
                <TextField full label={t.common.comments} value={le.comment} onChange={v => updateEntityLink(i, "comment", v)} placeholder={lang === "es" ? "Notas sobre la afiliación" : "Notes about the affiliation"} />
              </div>
            </div>
          ))}
          <div style={{ marginTop: 8 }}>
            <button className="btn btn-sm" onClick={addEntityLink}><Icon name="plus" /> {t.forms.addEntity}</button>
          </div>

          <h4 style={{ margin: "18px 0 8px", fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em" }}>{t.forms.socialBlock}</h4>
          <div className="form-grid">
            <TextField full label={t.common.web} value={form.website} onChange={v => set("website", v)} placeholder="dominio.com" />
            <TextField label="Instagram" value={form.social.ig} onChange={v => setSoc("ig", v)} placeholder="@usuario" />
            <TextField label="Facebook" value={form.social.fb} onChange={v => setSoc("fb", v)} placeholder="usuario" />
            <TextField label="TikTok" value={form.social.tiktok} onChange={v => setSoc("tiktok", v)} placeholder="@usuario" />
            <TextField label="X (Twitter)" value={form.social.x} onChange={v => setSoc("x", v)} placeholder="@usuario" />
          </div>

          <h4 style={{ margin: "18px 0 8px", fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em" }}>Pipeline CRM</h4>
          <div className="form-grid">
            <div className="field full">
              <label>{lang === "es" ? "Etapa en el pipeline" : "Pipeline stage"}</label>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {(window.PIPELINE_STAGES || []).map(s => (
                  <button key={s.id} type="button" onClick={() => set("stage", s.id)} style={{
                    padding: "5px 12px", borderRadius: 20, border: "1.5px solid",
                    borderColor: form.stage === s.id ? s.color : "var(--line)",
                    background: form.stage === s.id ? s.bg : "transparent",
                    color: form.stage === s.id ? s.color : "var(--ink-3)",
                    fontFamily: "inherit", fontSize: 12.5, fontWeight: 600, cursor: "pointer",
                  }}>{s.label}</button>
                ))}
              </div>
            </div>
            <SelectField label={lang === "es" ? "Fuente del contacto" : "Contact source"} value={form.source} onChange={v => set("source", v)}
              options={[{ value: "", label: lang === "es" ? "— Sin especificar —" : "— Not specified —" }, ...(window.CONTACT_SOURCES || []).map(s => ({ value: s.id, label: s.label }))]} />
            <TextField type="date" label={lang === "es" ? "Próxima acción" : "Next action date"} value={form.nextAction} onChange={v => set("nextAction", v)} />
          </div>

          <h4 style={{ margin: "18px 0 8px", fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em" }}>{t.forms.extra}</h4>
          <div className="form-grid">
            <TextField label={t.common.tags} value={form.tags} onChange={v => set("tags", v)} placeholder="liderazgo, vip" hint={lang === "es" ? "Separadas por coma" : "Comma separated"} />
            <SelectField label={t.common.language} value={form.language} onChange={v => set("language", v)} options={langOpts} />
            <TextField type="date" label={t.common.birthday} value={form.birthday} onChange={v => set("birthday", v)} />
            <TextField type="date" label={t.common.lastContact} value={form.lastContact} onChange={v => set("lastContact", v)} />
          </div>
        </div>
        <div className="modal-foot">
          <button className="btn" onClick={onClose}>{t.common.cancel}</button>
          <button className="btn btn-primary" onClick={() => onSave(form)} disabled={!form.first || !form.last}>
            {editMode ? <><Icon name="check" /> {lang === "es" ? "Guardar cambios" : "Save changes"}</> : <><Icon name="plus" /> {t.forms.saveCreate}</>}
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── New Entity ───

const NewEntityForm = ({ t, lang, data, onClose, onSave, initialData, editMode }) => {
  const [form, setForm] = React.useState(() => initialData ? {
    name: initialData.name || "",
    type: initialData.type || "iglesia",
    typeOther: initialData.typeOther || "",
    denominacion: initialData.denominacion || "",
    emails: initialData.emails || (initialData.email ? [{ value: initialData.email, label: "Personal" }] : []),
    phones: initialData.phones || (initialData.phone ? [{ value: initialData.phone, label: "Personal" }] : []),
    address: initialData.address || "",
    zip: initialData.zip || "",
    city: initialData.city || "",
    state: initialData.state || "",
    country: initialData.country || "",
    county: initialData.county || "",
    website: initialData.website || "",
    social: initialData.social || { ig: "", fb: "", tiktok: "", x: "" },
    size: initialData.size ? String(initialData.size) : "",
    founded: initialData.founded || "",
    parent: initialData.parent || "",
    tags: Array.isArray(initialData.tags) ? initialData.tags.join(", ") : (initialData.tags || ""),
    schedule: initialData.schedule || [],
    idioma: initialData.idioma || "",
  } : {
    name: "", type: "iglesia", typeOther: "", denominacion: "",
    emails: [], phones: [],
    address: "", zip: "", city: "", state: "", country: "", county: "",
    website: "",
    social: { ig: "", fb: "", tiktok: "", x: "" },
    size: "", founded: "", parent: "",
    tags: "", schedule: [], idioma: "",
  });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const setSoc = (k, v) => setForm(f => ({ ...f, social: { ...f.social, [k]: v } }));

  const [countyLoading, setCountyLoading] = React.useState(false);
  const lookupCounty = async (city, state) => {
    if (!city) return;
    const q = [city, state].filter(Boolean).join(", ");
    setCountyLoading(true);
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&addressdetails=1&limit=1`, { headers: { "Accept-Language": "es" } });
      const results = await res.json();
      if (results.length && results[0].address) {
        const addr = results[0].address;
        const county = addr.county || addr.state_district || addr.region || "";
        if (county) set("county", county);
      }
    } catch(e) {}
    setCountyLoading(false);
  };

  const typeOpts = Object.keys(t.types).map(k => ({ value: k, label: t.types[k] }));
  const parentOpts = [{ value: "", label: lang === "es" ? "— Ninguna —" : "— None —" }, ...data.entities.map(e => ({ value: e.id, label: e.name })).sort((a, b) => (a.label || "").localeCompare(b.label || "", "es", { sensitivity: "base" }))];

  return (
    <div className="modal-veil" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>{editMode ? (lang === "es" ? "Editar entidad" : "Edit entity") : t.forms.newEntityTitle}</div>
            <div className="muted" style={{ fontSize: 12 }}>{t.forms.basic}</div>
          </div>
          <button className="icon-btn" onClick={onClose}><Icon name="x" /></button>
        </div>
        <div className="modal-body">
          <h4 style={{ margin: "0 0 8px", fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em" }}>{t.forms.basic}</h4>
          <div className="form-grid">
            <TextField full label={t.forms.entityName} value={form.name} onChange={v => set("name", v)} placeholder={lang === "es" ? "Iglesia / Fundación / Estudio…" : "Church / Foundation / Studio…"} />
            <SelectField label={t.common.type} value={form.type} onChange={v => set("type", v)} options={typeOpts} />
            {(form.type === "iglesia" || form.type === "sinagoga") && (
              <TextField
                label={lang === "es" ? "Denominación · Opcional" : "Denomination · Optional"}
                value={form.denominacion}
                onChange={v => set("denominacion", v)}
                placeholder={lang === "es" ? "Ej: Bautista, Católica, Adventista…" : "E.g. Baptist, Catholic, Adventist…"}
              />
            )}
            {form.type === "otro" && <TextField label={lang === "es" ? "Especificar tipo" : "Specify type"} value={form.typeOther} onChange={v => set("typeOther", v)} />}
            <SelectField label={t.common.parent + " · " + t.common.optional} value={form.parent} onChange={v => set("parent", v)} options={parentOpts} />
          </div>

          <h4 style={{ margin: "18px 0 8px", fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em" }}>{t.forms.contact}</h4>
          <div className="form-grid">
            <MultiContactField label="Email(s)" entries={form.emails} onChange={v => set("emails", v)} type="email" lang={lang} />
            <MultiContactField label={lang === "es" ? "Teléfono(s)" : "Phone(s)"} entries={form.phones} onChange={v => set("phones", v)} type="phone" lang={lang} />
          </div>

          <h4 style={{ margin: "18px 0 8px", fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em" }}>{t.forms.addressBlock}</h4>
          <div className="form-grid">
            <TextField full label={lang === "es" ? "Dirección completa" : "Full address"} value={form.address} onChange={v => set("address", v)} />
            <TextField label="ZIP" value={form.zip} onChange={v => set("zip", v)} />
            <TextField label={lang === "es" ? "Ciudad" : "City"} value={form.city} onChange={v => set("city", v)} onBlur={() => lookupCounty(form.city, form.state)} />
            <TextField label={lang === "es" ? "Estado / Provincia" : "State / Province"} value={form.state} onChange={v => set("state", v)} onBlur={() => lookupCounty(form.city, form.state)} />
            <TextField label={lang === "es" ? "País" : "Country"} value={form.country} onChange={v => set("country", v)} />
            <div className="field">
              <label>
                {lang === "es" ? "Condado / Región" : "County / Region"}
                {countyLoading && <span style={{ marginLeft: 6, color: "var(--accent)", fontSize: 10, fontWeight: 400 }}>detectando…</span>}
                {form.county && !countyLoading && <span style={{ marginLeft: 6, color: "var(--good)", fontSize: 10, fontWeight: 600 }}>● auto</span>}
              </label>
              <input value={form.county || ""} onChange={e => set("county", e.target.value)} placeholder={lang === "es" ? "Se detecta al ingresar ciudad" : "Auto-detected from city"} />
            </div>
          </div>

          <h4 style={{ margin: "18px 0 8px", fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em" }}>{t.forms.socialBlock}</h4>
          <div className="form-grid">
            <TextField full label={t.common.web} value={form.website} onChange={v => set("website", v)} placeholder="dominio.com" />
            <TextField label="Instagram" value={form.social.ig} onChange={v => setSoc("ig", v)} />
            <TextField label="Facebook" value={form.social.fb} onChange={v => setSoc("fb", v)} />
            <TextField label="TikTok" value={form.social.tiktok} onChange={v => setSoc("tiktok", v)} />
            <TextField label="X (Twitter)" value={form.social.x} onChange={v => setSoc("x", v)} />
          </div>

          <h4 style={{ margin: "18px 0 8px", fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em" }}>{t.forms.extra}</h4>
          <div className="form-grid">
            <TextField label={t.common.size + " (" + t.common.members + ")"} type="number" value={form.size} onChange={v => set("size", v)} />
            <TextField label={t.common.founded} value={form.founded} onChange={v => set("founded", v)} placeholder="2014" />
            {(form.type === "iglesia" || form.type === "sinagoga") && (
              <SelectField
                label={lang === "es" ? "Idioma de la congregación" : "Congregation language"}
                value={form.idioma}
                onChange={v => set("idioma", v)}
                options={[
                  { value: "", label: lang === "es" ? "— No especificado —" : "— Not specified —" },
                  { value: "hispana", label: lang === "es" ? "Hispana / Español" : "Hispanic / Spanish" },
                  { value: "ingles", label: lang === "es" ? "Inglés" : "English" },
                  { value: "bilingue", label: lang === "es" ? "Bilingüe" : "Bilingual" },
                  { value: "otro", label: lang === "es" ? "Otro" : "Other" },
                ]}
              />
            )}
            <TextField full label={t.common.tags} value={form.tags} onChange={v => set("tags", v)} placeholder="matriz, hispana" hint={lang === "es" ? "Separadas por coma" : "Comma separated"} />
          </div>

          <h4 style={{ margin: "18px 0 8px", fontSize: 12, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em" }}>Horarios</h4>
          <div className="form-grid">
            <ScheduleField schedule={form.schedule} onChange={v => set("schedule", v)} />
          </div>
        </div>
        <div className="modal-foot">
          <button className="btn" onClick={onClose}>{t.common.cancel}</button>
          <button className="btn btn-primary" onClick={() => onSave(form)} disabled={!form.name}>
            {editMode ? <><Icon name="check" /> {lang === "es" ? "Guardar cambios" : "Save changes"}</> : <><Icon name="plus" /> {t.forms.saveCreate}</>}
          </button>
        </div>
      </div>
    </div>
  );
};

window.NewPersonForm = NewPersonForm;
window.NewEntityForm = NewEntityForm;
