// PROMEZA CRM â€” App root with auth + settings modal

const { useState, useMemo, useEffect, useRef } = React;

// â”€â”€â”€ Large storage (IndexedDB) â”€â”€â”€
// The encrypted dataset outgrew localStorage's ~5MB limit (QuotaExceededError).
// IndexedDB allows far more, so the big blob lives here instead.
const idbReady = () => new Promise((resolve, reject) => {
  try {
    const req = indexedDB.open("promeza_db", 1);
    req.onupgradeneeded = () => { try { req.result.createObjectStore("kv"); } catch (e) {} };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  } catch (e) { reject(e); }
});
const idbGet = async (key) => {
  try {
    const db = await idbReady();
    return await new Promise((resolve) => {
      const g = db.transaction("kv", "readonly").objectStore("kv").get(key);
      g.onsuccess = () => resolve(g.result === undefined ? null : g.result);
      g.onerror = () => resolve(null);
    });
  } catch (e) { return null; }
};
const idbSet = async (key, val) => {
  try {
    const db = await idbReady();
    return await new Promise((resolve) => {
      const tx = db.transaction("kv", "readwrite");
      tx.objectStore("kv").put(val, key);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    });
  } catch (e) { return false; }
};
// Read the encrypted blob from IndexedDB, migrating any old localStorage copy once.
const DATA_BYTES_KEY = "promeza_data_bytes";
// Load and decrypt the dataset. Stored as raw encrypted bytes in IndexedDB (no
// base64 â€” that char-by-char conversion over megabytes was the main freeze).
// Migrates any older base64 copy (IDB or localStorage) once, then drops it.
const loadDecrypted = async (key) => {
  try {
    const bytes = await idbGet(DATA_BYTES_KEY);
    if (bytes) return await window.CryptoUtils.decryptBytes(bytes, key);
    let b64 = await idbGet("promeza_data_enc");
    if (!b64) { try { b64 = localStorage.getItem("promeza_data_enc"); } catch (e) {} }
    if (b64) {
      const json = await window.CryptoUtils.decrypt(b64, key);
      try {
        const nb = await window.CryptoUtils.encryptBytes(json, key);
        await idbSet(DATA_BYTES_KEY, nb);
        await idbSet("promeza_data_enc", null);
        localStorage.removeItem("promeza_data_enc");
      } catch (e) {}
      return json;
    }
    return null;
  } catch (e) { return null; }
};
// Encrypt + store as raw bytes. crypto.subtle is async/off-thread; no base64.
const saveEncrypted = async (json, key) => {
  try { return await idbSet(DATA_BYTES_KEY, await window.CryptoUtils.encryptBytes(json, key)); }
  catch (e) { return false; }
};

// ─── Off-main-thread save (Web Worker) ───
// The remaining main-thread freeze on save is JSON.stringify(~10MB) + text-encode.
// A worker does the stringify + encode + AES-GCM encrypt off-thread; the main
// thread only pays the structured-clone of the data object. Output format matches
// CryptoUtils.encryptBytes exactly ([12-byte IV][ciphertext]). Any failure falls
// back to the main-thread path, so this can never lose a save.
const SAVE_WORKER_SRC = `self.onmessage = async (e) => {
  const d = e.data;
  try {
    const key = await crypto.subtle.importKey("raw", d.keyRaw, { name: "AES-GCM", length: 256 }, false, ["encrypt"]);
    const str = JSON.stringify(d.obj);
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const enc = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(str));
    const out = new Uint8Array(12 + enc.byteLength);
    out.set(iv, 0); out.set(new Uint8Array(enc), 12);
    self.postMessage({ id: d.id, ok: true, bytes: out }, [out.buffer]);
  } catch (err) { self.postMessage({ id: d.id, ok: false, err: String((err && err.message) || err) }); }
};`;
let _saveWorker = null, _saveMsgId = 0; const _saveWaiters = {};
const getSaveWorker = () => {
  if (_saveWorker) return _saveWorker;
  try {
    const w = new Worker(URL.createObjectURL(new Blob([SAVE_WORKER_SRC], { type: "text/javascript" })));
    w.onmessage = (e) => { const cb = _saveWaiters[e.data.id]; if (cb) { delete _saveWaiters[e.data.id]; cb(e.data); } };
    w.onerror = () => {}; // per-call timeout handles hangs
    _saveWorker = w;
  } catch (e) { _saveWorker = null; }
  return _saveWorker;
};
const encryptViaWorker = (obj, keyRaw) => new Promise((resolve, reject) => {
  const w = getSaveWorker(); if (!w) return reject(new Error("no worker"));
  const id = ++_saveMsgId;
  const to = setTimeout(() => { if (_saveWaiters[id]) { delete _saveWaiters[id]; reject(new Error("worker timeout")); } }, 20000);
  _saveWaiters[id] = (msg) => { clearTimeout(to); msg.ok ? resolve(msg.bytes) : reject(new Error(msg.err)); };
  w.postMessage({ id, obj, keyRaw });
});
// Save via worker; fall back to main-thread on any failure.
const saveEncryptedObj = async (obj, key, keyRaw) => {
  if (keyRaw) {
    try { const bytes = await encryptViaWorker(obj, keyRaw); return await idbSet(DATA_BYTES_KEY, bytes); }
    catch (e) { /* fall through */ }
  }
  return saveEncrypted(JSON.stringify(obj), key);
};
// ── Route <-> URL hash helpers (deep-linking / open-in-new-tab) ──
const _ROUTE_WITH_ID = { person: 1, entity: 1, project: 1 };
const routeToHash = (r) => {
  if (!r || !r.name) return "";
  return "#" + r.name + (_ROUTE_WITH_ID[r.name] && r.id ? "/" + encodeURIComponent(r.id) : "");
};
const hashToRoute = (h) => {
  const s = (h || "").replace(/^#\/?/, "").trim();
  if (!s) return null;
  const i = s.indexOf("/");
  const name = i === -1 ? s : s.slice(0, i);
  const id = i === -1 ? null : decodeURIComponent(s.slice(i + 1));
  if (!name) return null;
  return id ? { name, id } : { name };
};
const sameRoute = (a, b) => !!a && !!b && a.name === b.name && (a.id || "") === (b.id || "");
if (typeof window !== "undefined") window.PROMEZA_HASH = routeToHash;

const clearStoredData = async () => {
  try { await idbSet(DATA_BYTES_KEY, null); } catch (e) {}
  try { await idbSet("promeza_data_enc", null); } catch (e) {}
  try { localStorage.removeItem("promeza_data_enc"); } catch (e) {}
};

// Cheap content signature of the Airtable data. The periodic sync uses it to skip
// the expensive merge + full re-render + re-encrypt when nothing actually changed
// (the common case) â€” that recurring work was freezing the UI mid-use.
const atSignature = (d) => {
  if (!d) return "";
  let h = 0;
  const acc = (s) => { s = s == null ? "" : ("" + s); for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0; };
  // Hash the FULL record (every field), not a hand-picked subset. The old version
  // listed specific fields and even referenced fields that don't exist in the model
  // (titulo/roles/gender instead of role), so editing an uncovered field (role, notes,
  // website, state, zip, language, entity type, denominación…) left the signature
  // unchanged → the 2-min sync thought "nothing changed" and never propagated the edit
  // to other devices. We strip local-only annotations (leading "_", uid) so the
  // signature reflects Airtable content identically on every device; being extra
  // sensitive only risks an occasional redundant (but harmless) merge.
  const clean = (o) => { if (!o || typeof o !== "object") return o; const c = {}; for (const k in o) { if (k.charCodeAt(0) !== 95 && k !== "uid") c[k] = o[k]; } return c; };
  (d.personas || []).forEach(p => acc(JSON.stringify(clean(p))));
  (d.entities || []).forEach(e => acc(JSON.stringify(clean(e))));
  return (d.personas ? d.personas.length : 0) + ":" + (d.entities ? d.entities.length : 0) + ":" + h;
};

// Church entities whose imported NAME is actually a phone number. Correct
// name/email/zip come from the source spreadsheet (Churches in USA.xlsx),
// matched by phone digits. data_churches.js missed a couple, so these are explicit.
const ENTITY_PHONE_FIX = {
  "8187470347": { name: "Iglesia Siervos de Dios", email: "mart.medina542@gmail.com", zip: "91324" },
  "7145431460": { name: "Iglesia de Dios Pentecostal MI", email: "pastor.samuelmejia@gmail.com", zip: "92706" },
  "7143658341": { name: "Iglesia Fe y Amistad Cristiana", email: "joelbac@yahoo.com", zip: "92703" },
  "13038706055": { name: "Iglesia Mosaico de Aurora", email: "reidhettich@gmail.com", zip: "80010" },
  "8058746063": { name: "Iglesia Llamada Final Oxnard", email: "info@oasis1079.com", zip: "93033" },
  "5625078614": { name: "Iglesia Mi Fortaleza / Plymouth Church", email: "edgardomorenov@gmail.com", zip: "90601" },
};

// â”€â”€â”€ Settings Modal â”€â”€â”€

const SettingsModal = ({ t, lang, data, cryptoKey, onClose, onLogout, onRestoreData, onForcePull }) => {
  const [ejsCfg, setEjsCfg] = useState(() => {
    try { return JSON.parse(localStorage.getItem("promeza_ejs")) || {}; } catch { return {}; }
  });
  const [atCfg, setAtCfg] = useState(() => window.AIRTABLE.getConfig());
  const [syncStatus, setSyncStatus] = useState("");
  const [syncing, setSyncing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState("airtable");
  const [secMsg, setSecMsg] = useState(null);
  const [secLoading, setSecLoading] = useState(false);
  const [authorizedEmails, setAuthorizedEmails] = useState(() => {
    try { return (JSON.parse(localStorage.getItem(window.CryptoUtils?.MSAL_CONFIG_KEY)) || {}).authorizedEmails || ""; } catch { return ""; }
  });
  const [accessLog, setAccessLog] = useState(() => window.AIRTABLE?.getAccessLog() || []);
  const [backupMsg, setBackupMsg] = React.useState(null);
  const [curPass, setCurPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const doExport = () => {
    const backup = {
      version: 1,
      exported: new Date().toISOString(),
      personas: data.personas,
      entities: data.entities,
      tasks: data.tasks || {},
      interactions: data.interactions || {},
      projects: data.projects || [],
      campaigns: data.campaigns || [],
      calendarEvents: data.calendarEvents || [],
      comments: data.comments || {},
      attachments: data.attachments || {},
      changelog: data.changelog || {},
      goals: data.goals || [],
      segments: data.segments || [],
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "promeza-backup-" + new Date().toISOString().slice(0, 10) + ".json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const doImport = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (!parsed.personas || !parsed.entities) {
          setBackupMsg({ type: "err", text: lang === "es" ? "Archivo invÃ¡lido: faltan personas o entidades" : "Invalid file: missing personas or entities" });
          return;
        }
        if (window.confirm(lang === "es" ? "Â¿Restaurar estos datos? Se reemplazarÃ¡n TODOS los datos actuales." : "Restore this data? ALL current data will be replaced.")) {
          onRestoreData({
            personas: parsed.personas || [],
            entities: parsed.entities || [],
            tasks: parsed.tasks || {},
            interactions: parsed.interactions || {},
            projects: parsed.projects || [],
            campaigns: parsed.campaigns || [],
            calendarEvents: parsed.calendarEvents || [],
            comments: parsed.comments || {},
            attachments: parsed.attachments || {},
            changelog: parsed.changelog || {},
            goals: parsed.goals || [],
            segments: parsed.segments || [],
          });
          setBackupMsg({ type: "ok", text: lang === "es" ? `âœ“ Datos restaurados: ${parsed.personas.length} personas, ${parsed.entities.length} entidades` : `âœ“ Data restored: ${parsed.personas.length} people, ${parsed.entities.length} entities` });
        }
      } catch {
        setBackupMsg({ type: "err", text: lang === "es" ? "Error al leer el archivo" : "Error reading file" });
      }
    };
    reader.readAsText(file);
  };

  const st = t.settings || {};
  const tabs = [
    { id: "airtable", label: "Airtable" },
    { id: "emailjs", label: "EmailJS" },
    { id: "security", label: "Seguridad" },
    { id: "account", label: lang === "es" ? "Cuenta" : "Account" },
    { id: "backup", label: lang === "es" ? "Respaldo" : "Backup" },
  ];

  const doChangePassword = async () => {
    setSecMsg(null);
    if (!curPass || !newPass || !confirmPass) { setSecMsg({ type: "err", text: "Completa todos los campos." }); return; }
    if (newPass !== confirmPass) { setSecMsg({ type: "err", text: "Las contraseÃ±as nuevas no coinciden." }); return; }
    if (newPass.length < 8) { setSecMsg({ type: "err", text: "MÃ­nimo 8 caracteres." }); return; }
    setSecLoading(true);
    try {
      const result = await window.CryptoUtils.changePassword(curPass, newPass, data);
      if (result.error) { setSecMsg({ type: "err", text: result.error }); }
      else { setSecMsg({ type: "ok", text: "ContraseÃ±a cambiada correctamente." }); setCurPass(""); setNewPass(""); setConfirmPass(""); }
    } catch (err) {
      setSecMsg({ type: "err", text: "Error: " + err.message });
    }
    setSecLoading(false);
  };

  const saveAll = () => {
    localStorage.setItem("promeza_ejs", JSON.stringify(ejsCfg));
    window.AIRTABLE.saveConfig(atCfg);
    // Save authorized emails into MSAL config
    const msalKey = window.CryptoUtils?.MSAL_CONFIG_KEY || "promeza_msal_cfg";
    const msalCfg = (() => { try { return JSON.parse(localStorage.getItem(msalKey)) || {}; } catch { return {}; } })();
    localStorage.setItem(msalKey, JSON.stringify({ ...msalCfg, authorizedEmails }));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const doSync = async () => {
    setSyncing(true);
    setSyncStatus("");
    try {
      const result = await window.AIRTABLE.syncAll(data);
      setSyncStatus(
        "âœ“ " + (st.syncDone || "Sync completed") + " â€” " +
        result.personas.created + " personas creadas, " + result.personas.updated + " actualizadas Â· " +
        result.entities.created + " entidades creadas, " + result.entities.updated + " actualizadas"
      );
    } catch (err) {
      setSyncStatus("âš  " + (st.syncError || "Error:") + " " + err.message);
    }
    setSyncing(false);
  };

  const lastSync = window.AIRTABLE.getLastSync();
  const lastSyncFmt = lastSync ? new Date(lastSync).toLocaleString(lang === "en" ? "en-US" : "es-ES") : (st.never || "Nunca");

  const Field = ({ label, value, onChange, type = "text", placeholder, mono, hint }) => (
    <div className="field" style={{ marginBottom: 12 }}>
      <label>{label}</label>
      <input
        type={type}
        value={value || ""}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={mono ? { fontFamily: "var(--font-mono)", fontSize: 12 } : {}}
      />
      {hint && <div style={{ fontSize: 11, color: "var(--ink-4)", marginTop: 3, lineHeight: 1.4 }}>{hint}</div>}
    </div>
  );

  return (
    <div className="modal-veil" onClick={onClose}>
      <div className="modal" style={{ width: "min(640px,100%)" }} onClick={e => e.stopPropagation()}>
        <div className="modal-head">
          <div style={{ fontWeight: 600, fontSize: 16 }}>{st.title || "ConfiguraciÃ³n"}</div>
          <button className="icon-btn" onClick={onClose}><Icon name="x" /></button>
        </div>

        <div style={{ display: "flex", borderBottom: "1px solid var(--line)" }}>
          {tabs.map(tb => (
            <button key={tb.id} onClick={() => setTab(tb.id)}
              style={{
                padding: "10px 16px", border: 0, background: "transparent",
                fontFamily: "inherit", fontSize: 13, fontWeight: 500,
                color: tab === tb.id ? "var(--accent-700)" : "var(--ink-3)",
                borderBottom: "2px solid " + (tab === tb.id ? "var(--accent)" : "transparent"),
                cursor: "pointer",
              }}>
              {tb.label}
            </button>
          ))}
        </div>

        <div className="modal-body">

          {/* â”€â”€â”€ Airtable â”€â”€â”€ */}
          {tab === "airtable" && (
            <div>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: "12px 16px", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "#10b981", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <Icon name="check" size={16} style={{ color: "#fff" }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "#166534" }}>{lang === "es" ? "Conectado a la base compartida" : "Connected to shared base"}</div>
                  <div style={{ fontSize: 12, color: "#166534", opacity: 0.8 }}>PROMEZA CRM Â· app0MYHVyhTYFsDqV</div>
                </div>
              </div>
              <div style={{ background: "var(--bg-soft)", borderRadius: 8, padding: "10px 14px", marginBottom: 14, fontSize: 12, color: "var(--ink-3)" }}>
                {st.lastSync || "Ãšltima sync:"} <strong>{lastSyncFmt}</strong>
              </div>
              {syncStatus && (
                <div style={{
                  marginBottom: 12, padding: "10px 14px", borderRadius: 8, fontSize: 12.5,
                  background: syncStatus.startsWith("âœ“") ? "#f0fdf4" : "#fff5f5",
                  color: syncStatus.startsWith("âœ“") ? "#166534" : "#991b1b",
                  border: "1px solid " + (syncStatus.startsWith("âœ“") ? "#bbf7d0" : "#fecaca"),
                }}>
                  {syncStatus}
                </div>
              )}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <button className="btn btn-primary" style={{ width: "100%" }} disabled={syncing} onClick={doSync}>
                  <Icon name="sync" /> {syncing ? "Enviandoâ€¦" : "â¬† Enviar mis datos a Airtable"}
                </button>
                <button className="btn" style={{ width: "100%", fontWeight: 600 }} disabled={syncing} onClick={() => { if (onForcePull) { onClose(); onForcePull(); } }}>
                  â¬‡ Recibir cambios de Airtable
                </button>
                <div style={{ fontSize: 11, color: "var(--ink-4)", lineHeight: 1.5, padding: "4px 2px" }}>
                  <strong>â¬† Enviar</strong> = sube TUS datos a Airtable (hazlo desde la MacBook).<br/>
                  <strong>â¬‡ Recibir</strong> = descarga lo que hay en Airtable (hazlo desde Windows).
                </div>
              </div>
            </div>
          )}

          {/* â”€â”€â”€ EmailJS â”€â”€â”€ */}
          {tab === "emailjs" && (
            <div>
              <div style={{ background: "var(--accent-50)", border: "1px solid var(--accent-100)", borderRadius: 8, padding: "10px 14px", marginBottom: 16, fontSize: 12.5, color: "var(--ink-2)" }}>
                <strong>{lang === "es" ? "EmailJS se usa para recuperar contraseÃ±a." : "EmailJS is used for password recovery."}</strong>
                {" "}{lang === "es" ? "Crea una cuenta gratis en" : "Create a free account at"}{" "}
                <a href="https://www.emailjs.com/" target="_blank" rel="noopener">emailjs.com</a>
                {" "}{lang === "es" ? "y una plantilla con la variable" : "and a template with the variable"}{" "}
                <code style={{ background: "var(--accent-100)", padding: "0 4px", borderRadius: 3 }}>{"{{code}}"}</code>
              </div>
              <Field label="Service ID" value={ejsCfg.serviceId} onChange={v => setEjsCfg(c => ({ ...c, serviceId: v }))} placeholder="service_xxxxxxx" mono />
              <Field label="Template ID" value={ejsCfg.templateId} onChange={v => setEjsCfg(c => ({ ...c, templateId: v }))} placeholder="template_xxxxxxx" mono />
              <Field label="Public Key" value={ejsCfg.publicKey} onChange={v => setEjsCfg(c => ({ ...c, publicKey: v }))} placeholder="xxxxxxxxxxxxxxxxxxxx" mono />
            </div>
          )}

          {/* â”€â”€â”€ Security â”€â”€â”€ */}
          {tab === "security" && (
            <div>
              {/* Info bar */}
              <div style={{ background: "var(--bg-soft)", borderRadius: 10, padding: "12px 16px", marginBottom: 18, display: "flex", alignItems: "center", gap: 10 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-700)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>Microsoft Entra ID Â· AES-256</div>
                  <div style={{ fontSize: 12, color: "var(--ink-3)" }}>Auto-cierre: 1 hora de inactividad Â· Solo @promeza.com</div>
                </div>
              </div>

              {/* Authorized emails */}
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 6 }}>Correos autorizados</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)", marginBottom: 8 }}>
                Deja vacÃ­o para permitir cualquier cuenta @promeza.com. Si escribes correos especÃ­ficos, solo ellos podrÃ¡n entrar.
              </div>
              <div className="field" style={{ marginBottom: 4 }}>
                <textarea
                  value={authorizedEmails}
                  onChange={e => setAuthorizedEmails(e.target.value)}
                  placeholder={"vanessa@promeza.com\nbetty@promeza.com\njuan@promeza.com"}
                  rows={4}
                  style={{ width: "100%", fontFamily: "var(--mono, monospace)", fontSize: 12, resize: "vertical" }}
                />
              </div>
              <div style={{ fontSize: 11, color: "var(--ink-4)", marginBottom: 18 }}>Un correo por lÃ­nea o separados por coma. Se guarda al presionar "Guardar configuraciÃ³n".</div>

              {/* Access log */}
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span>Registro de accesos</span>
                <button className="btn" style={{ fontSize: 11, padding: "3px 10px" }} onClick={() => setAccessLog(window.AIRTABLE?.getAccessLog() || [])}>
                  Actualizar
                </button>
              </div>
              {accessLog.length === 0 ? (
                <div style={{ fontSize: 13, color: "var(--ink-3)", textAlign: "center", padding: "20px 0" }}>Sin registros aÃºn</div>
              ) : (
                <div style={{ maxHeight: 260, overflowY: "auto", border: "1px solid var(--line)", borderRadius: 8 }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                    <thead>
                      <tr style={{ background: "var(--bg-soft)", position: "sticky", top: 0 }}>
                        {["Fecha", "Usuario", "AcciÃ³n", "Dispositivo", "Localidad"].map(h => (
                          <th key={h} style={{ padding: "6px 10px", textAlign: "left", fontWeight: 600, color: "var(--ink-2)", borderBottom: "1px solid var(--line)", whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {accessLog.map((e, i) => (
                        <tr key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                          <td style={{ padding: "5px 10px", color: "var(--ink-3)", whiteSpace: "nowrap" }}>{new Date(e.ts).toLocaleString("es")}</td>
                          <td style={{ padding: "5px 10px", fontWeight: 500 }}>{(e.email || "").split("@")[0]}</td>
                          <td style={{ padding: "5px 10px" }}>{e.action}</td>
                          <td style={{ padding: "5px 10px", color: "var(--ink-3)" }}>{e.device}</td>
                          <td style={{ padding: "5px 10px", color: "var(--ink-3)" }}>{e.location}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div style={{ marginTop: 18, borderTop: "1px solid var(--line)", paddingTop: 14 }}>
                <button className="btn" style={{ color: "var(--bad)", borderColor: "var(--bad)" }}
                  onClick={() => { if (window.confirm("Â¿Cerrar esta sesiÃ³n?")) { clearSession(); (window.CryptoUtils?.clearSessionKey ? window.CryptoUtils.clearSessionKey() : (localStorage.removeItem("promeza_sk"), sessionStorage.removeItem("promeza_sk"))); onLogout(); } }}>
                  <Icon name="log-out" /> Cerrar esta sesiÃ³n
                </button>
              </div>
            </div>
          )}


          {/* â”€â”€â”€ Account â”€â”€â”€ */}
          {tab === "account" && (
            <div>
              <div style={{ background: "var(--bg-soft)", borderRadius: 10, padding: "14px 16px", marginBottom: 16 }}>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>{lang === "es" ? "Cuenta activa" : "Active account"}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div className="av-circle" style={{ background: "var(--accent)" }}>P</div>
                  <span style={{ fontSize: 13 }}>Promeza</span>
                </div>
              </div>
              <button className="btn" style={{ color: "var(--bad)", borderColor: "var(--bad)" }}
                onClick={() => {
                  if (confirm(st.logoutConfirm || "Â¿Cerrar sesiÃ³n?")) {
                    clearSession();
                    onLogout();
                  }
                }}>
                <Icon name="log-out" /> {st.logout || "Cerrar sesiÃ³n"}
              </button>
            </div>
          )}

          {/* â”€â”€â”€ Backup â”€â”€â”€ */}
          {tab === "backup" && (
            <div>
              {/* Export */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{lang === "es" ? "Exportar datos" : "Export data"}</div>
                <div style={{ fontSize: 12.5, color: "var(--ink-3)", marginBottom: 10 }}>{lang === "es" ? "Descarga una copia completa de todos tus datos como archivo JSON. GuÃ¡rdala en un lugar seguro." : "Download a complete copy of all your data as a JSON file. Keep it in a safe place."}</div>
                <div style={{ background: "var(--bg-soft)", borderRadius: 8, padding: "10px 14px", marginBottom: 10, fontSize: 12, color: "var(--ink-3)" }}>
                  {data.personas.length} {lang === "es" ? "personas" : "people"} Â· {data.entities.length} {lang === "es" ? "entidades" : "entities"} Â· {(data.projects || []).length} {lang === "es" ? "proyectos" : "projects"}
                </div>
                <button className="btn btn-primary" onClick={doExport}>
                  <Icon name="download" /> {lang === "es" ? "Descargar backup JSON" : "Download JSON backup"}
                </button>
              </div>

              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 20 }}>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{lang === "es" ? "Importar / Restaurar" : "Import / Restore"}</div>
                <div style={{ background: "#fff5f5", border: "1px solid #fecaca", borderRadius: 8, padding: "10px 14px", marginBottom: 10, fontSize: 12, color: "#991b1b" }}>
                  âš  {lang === "es" ? "Esto reemplazarÃ¡ TODOS los datos actuales." : "This will replace ALL current data."}
                </div>
                <label className="btn" style={{ cursor: "pointer" }}>
                  <Icon name="upload" /> {lang === "es" ? "Seleccionar archivo de respaldoâ€¦" : "Select backup fileâ€¦"}
                  <input type="file" accept=".json" style={{ display: "none" }} onChange={e => { doImport(e.target.files[0]); e.target.value = ""; }} />
                </label>
              </div>

              {backupMsg && (
                <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, fontSize: 12.5, background: backupMsg.type === "ok" ? "#f0fdf4" : "#fff5f5", color: backupMsg.type === "ok" ? "#166534" : "#991b1b", border: "1px solid " + (backupMsg.type === "ok" ? "#bbf7d0" : "#fecaca") }}>
                  {backupMsg.text}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="modal-foot">
          <button className="btn" onClick={onClose}>{t.common.cancel}</button>
          <button className="btn btn-primary" onClick={saveAll}>
            {saved ? <><Icon name="check" /> {st.saved || "Guardado"}</> : (st.save || "Guardar configuraciÃ³n")}
          </button>
        </div>
      </div>
    </div>
  );
};

// â”€â”€â”€ Changelog helpers â”€â”€â”€

const PERSON_FIELD_LABELS = {
  first: "Nombre", last: "Apellido", email: "Email", phone: "TelÃ©fono",
  role: "Cargo", status: "Estado", address: "DirecciÃ³n", city: "Ciudad",
  state: "Estado/Prov.", country: "PaÃ­s", zip: "ZIP", website: "Sitio web",
  birthday: "CumpleaÃ±os", lastContact: "Ãšltimo contacto", language: "Idioma",
  tags: "Etiquetas", entities: "Entidades",
  stage: "Etapa", source: "Fuente", nextAction: "PrÃ³xima acciÃ³n",
};

const ENTITY_FIELD_LABELS = {
  name: "Nombre", type: "Tipo", denominacion: "DenominaciÃ³n", email: "Email", phone: "TelÃ©fono",
  address: "DirecciÃ³n", city: "Ciudad", state: "Estado/Prov.", country: "PaÃ­s",
  zip: "ZIP", website: "Sitio web", founded: "AÃ±o fundaciÃ³n",
  size: "TamaÃ±o", tags: "Etiquetas", status: "Estado",
};

const computeChanges = (oldObj, updates, fieldLabels) => {
  const changes = [];
  for (const key of Object.keys(updates)) {
    const label = fieldLabels[key];
    if (!label) continue;
    const oldVal = oldObj[key];
    const newVal = updates[key];
    if (key === "tags" || key === "entities") {
      if (JSON.stringify(oldVal) !== JSON.stringify(newVal)) changes.push({ field: label, type: key });
    } else {
      const o = String(oldVal ?? ""), n = String(newVal ?? "");
      if (o !== n) changes.push({ field: label, old: o, new: n });
    }
  }
  return changes;
};

// â”€â”€â”€ Reminders Modal â”€â”€â”€

const RemindersModal = ({ lang, data, onClose, go }) => {
  const today = new Date().toISOString().slice(0, 10);
  const todayMMDD = today.slice(5);
  const birthdaysToday = data.personas.filter(p => p.birthday && p.birthday.slice(5) === todayMMDD && p.status !== "inactivo");
  const overdueTasks = [];
  Object.entries(data.tasks || {}).forEach(([pid, tasks]) => {
    tasks.forEach(tk => {
      if (!tk.done && tk.due && tk.due < today) {
        const p = data.personas.find(x => x.id === pid);
        overdueTasks.push({ ...tk, personaName: p ? p.first + " " + (p.last || "") : "" });
      }
    });
  });

  return (
    <div className="modal-veil" onClick={onClose}>
      <div className="modal" style={{ width: "min(480px,100%)" }} onClick={e => e.stopPropagation()}>
        <div className="modal-head">
          <div style={{ fontWeight: 600, fontSize: 15 }}>
            {lang === "es" ? "Recordatorios de hoy" : "Today's reminders"}
          </div>
          <button className="icon-btn" onClick={onClose}><Icon name="x" /></button>
        </div>
        <div className="modal-body" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {birthdaysToday.length > 0 && (
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#f59e0b", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                ðŸŽ‚ {lang === "es" ? "CumpleaÃ±os hoy" : "Birthdays today"}
              </div>
              {birthdaysToday.map(p => (
                <div key={p.id} className="hover-row" onClick={() => { go({ name: "person", id: p.id }); onClose(); }}
                  style={{ borderRadius: 8 }}>
                  <div className="av-circle" style={{ background: p.color, width: 32, height: 32, fontSize: 11, flexShrink: 0 }}>
                    {((p.first || "")[0] || "") + (p.last ? (p.last[0] || "") : "")}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600 }}>{p.first} {p.last}</div>
                    <div style={{ fontSize: 11.5, color: "var(--ink-3)" }}>{p.role}</div>
                  </div>
                  <span style={{ fontSize: 18 }}>ðŸŽ‚</span>
                </div>
              ))}
            </div>
          )}
          {overdueTasks.length > 0 && (
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#ef4444", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                âš  {overdueTasks.length} {lang === "es" ? "tarea" + (overdueTasks.length !== 1 ? "s vencidas" : " vencida") : "overdue task" + (overdueTasks.length !== 1 ? "s" : "")}
              </div>
              {overdueTasks.slice(0, 5).map(tk => (
                <div key={tk.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 10px", background: "#fff5f5", borderRadius: 7, marginBottom: 4, border: "1px solid #fecaca" }}>
                  <Icon name="check" size={12} style={{ color: "#ef4444", flexShrink: 0 }} />
                  <span style={{ flex: 1, fontSize: 12.5, fontWeight: 500 }}>{tk.text}</span>
                  {tk.personaName && <span style={{ fontSize: 11, color: "#b91c1c", fontWeight: 600 }}>{tk.personaName}</span>}
                  <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "#ef4444", fontWeight: 700 }}>{tk.due}</span>
                </div>
              ))}
              {overdueTasks.length > 5 && <div style={{ fontSize: 11.5, color: "var(--ink-3)", textAlign: "center", marginTop: 4 }}>+{overdueTasks.length - 5} {lang === "es" ? "mÃ¡s" : "more"}</div>}
            </div>
          )}
          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", paddingTop: 4 }}>
            <button className="btn" onClick={() => { go({ name: "tasks" }); onClose(); }}>
              <Icon name="check" /> {lang === "es" ? "Ver tareas" : "View tasks"}
            </button>
            <button className="btn btn-primary" onClick={onClose}>
              {lang === "es" ? "Entendido" : "Got it"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// â”€â”€â”€ Error Boundary â€” prevents a view crash from blanking the whole page â”€â”€â”€

class ViewErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(e) { return { error: e }; }
  componentDidCatch(e) { console.error("View crash:", e); }
  render() {
    if (this.state.error) {
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "60vh", gap: 16, padding: 32, textAlign: "center" }}>
          <div style={{ fontSize: 32 }}>âš ï¸</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "var(--ink)" }}>Algo saliÃ³ mal en esta vista</div>
          <div style={{ fontSize: 12, color: "var(--ink-4)", maxWidth: 400 }}>{String(this.state.error)}</div>
          <button onClick={() => this.setState({ error: null })}
            style={{ padding: "10px 20px", background: "var(--accent)", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 14 }}>
            Reintentar
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// â”€â”€â”€ App Root â”€â”€â”€

const App = () => {
  const [lang, setLang] = useState("es");
  const t = window.PROMEZA_I18N[lang];

  const [userEmail, setUserEmail] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const session = getSession();
    if (session) setUserEmail(session.email);
    setAuthChecked(true);
  }, []);

  const [route, setRoute] = useState({ name: "home" });
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState(null); // 'new-person' | 'new-entity' | 'edit-person' | 'edit-entity' | 'settings' | null
  const [editingId, setEditingId] = useState(null);
  const [modalPrefill, setModalPrefill] = useState(null);
  const [dupPairs, setDupPairs] = useState([]);
  const [entityDupPairs, setEntityDupPairs] = useState([]);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [historyLog, setHistoryLog] = useState(null); // null = loading
  const [sideOpen, setSideOpen] = useState(false);
  const [showReminders, setShowReminders] = useState(false);
  const [remindersShown, setRemindersShown] = useState(false);

  // Compute stable 7-digit UID from internal ID string
  const computeUID = (id) => {
    let h = 0;
    for (let i = 0; i < id.length; i++) h = (Math.imul(31, h) + id.charCodeAt(i)) | 0;
    return String((Math.abs(h) % 9000000) + 1000000);
  };
  const withUIDs = (arr) => arr.map(x => x.uid ? x : { ...x, uid: computeUID(x.id) });

  const [cryptoKey, setCryptoKey] = useState(null);
  const [dataReady, setDataReady] = useState(false);
  const [data, setData] = useState(null);
  const [needsUnlock, setNeedsUnlock] = useState(false);

  const freshData = () => {
    const pd = window.PROMEZA_DATA || {};
    return {
      personas: withUIDs([...(pd.personas || [])]),
      entities: withUIDs([...(pd.entities || [])]),
      comments: { ...(pd.comments || {}) },
      interactions: {},
      tasks: { ...(pd.tasks || {}) },
      changelog: {},
      segments: [],
      attachments: {},
      projects: [],
      campaigns: [],
      goals: [],
      calendarEvents: [],
    };
  };

  const processLoadedData = (parsed) => {
    // Normalize fields only â€” do NOT merge PROMEZA_DATA into existing data.
    // PROMEZA_DATA is only used as a fallback when localStorage has no real data.
    const hasDigit = (v) => /\d/.test(String(v || ""));

    // Strip float suffix: "91706.0" â†’ "91706", "35815.0" â†’ "35815"
    const stripFloat = (v) => String(v || "").replace(/^(\d+)\.0+$/, "$1").trim();

    // Clean a phone string: strip float suffix, reject if no digits remain
    const normalizePhoneStr = (v) => {
      const s = stripFloat(v);
      return hasDigit(s) ? s : "";
    };

    // Build phones array: existing phones[] OR split legacy phone string on newlines.
    // Also merges phone2 field if not already present.
    const buildPhones = (phones, phone, phone2) => {
      let result;
      if (Array.isArray(phones) && phones.length > 0) {
        result = phones.filter(ph => ph && ph.value && hasDigit(ph.value));
      } else {
        const parts = String(phone || "").split(/\n/).map(s => normalizePhoneStr(s.trim())).filter(Boolean);
        result = parts.map((v, i) => ({ value: v, label: i === 0 ? "Personal" : "Otro" }));
      }
      if (phone2) {
        const p2 = normalizePhoneStr(String(phone2).trim());
        if (p2 && !result.some(ph => ph.value === p2)) result.push({ value: p2, label: "Otro" });
      }
      return result;
    };

    // Build emails array: existing emails[] OR legacy email string. Also merges email2.
    const buildEmails = (emails, email, email2) => {
      const result = Array.isArray(emails) && emails.length > 0
        ? [...emails]
        : (email && email.trim() ? [{ value: email.trim(), label: "Personal" }] : []);
      if (email2 && email2.trim()) {
        const e2 = email2.trim();
        if (!result.some(e => (e.value || "").toLowerCase() === e2.toLowerCase())) {
          result.push({ value: e2, label: "Otro" });
        }
      }
      return result;
    };

    // Zip: strip float suffix, then move city-names in zip field to city.
    const fixZipCity = (zip, city) => {
      const z = stripFloat(zip);
      const c = String(city || "").trim();
      if (z && !hasDigit(z)) return { zip: "", city: c || z };
      return { zip: z, city: c };
    };

    const outPersonas = withUIDs(parsed.personas || []).map(p => {
      const { zip, city } = fixZipCity(p.zip, p.city);
      return {
        ...p,
        phone: normalizePhoneStr(p.phone),
        phones: buildPhones(p.phones, p.phone, p.phone2),
        emails: buildEmails(p.emails, p.email, p.email2),
        entities: p.entities || [],
        tags: p.tags || [],
        zip,
        city,
      };
    });
    const outEntities = withUIDs(parsed.entities || []).map(e => {
      const { zip, city } = fixZipCity(e.zip, e.city);
      return {
        ...e,
        phone: normalizePhoneStr(e.phone),
        phones: buildPhones(e.phones, e.phone, e.phone2),
        emails: buildEmails(e.emails, e.email, e.email2),
        schedule: e.schedule || [],
        tags: e.tags || [],
        zip,
        city,
      };
    });
    // PERSIST HISTORY: each record now carries its own `changelog` inside _data (so it
    // survives reloads/clean-slate and is shared across devices via Airtable). Rebuild
    // the top-level changelog map from the records, keeping whichever copy has MORE
    // entries (a device that saw more history wins) so nothing is lost.
    const changelog = { ...(parsed.changelog || {}) };
    [...outPersonas, ...outEntities].forEach(r => {
      if (Array.isArray(r.changelog) && r.changelog.length > (changelog[r.id] || []).length) changelog[r.id] = r.changelog;
    });
    return {
      ...parsed,
      personas: outPersonas,
      entities: outEntities,
      interactions: parsed.interactions || {},
      tasks: parsed.tasks || {},
      changelog,
      segments: parsed.segments || [],
      attachments: parsed.attachments || {},
      projects: parsed.projects || [],
      campaigns: parsed.campaigns || [],
      goals: parsed.goals || [],
      calendarEvents: parsed.calendarEvents || [],
    };
  };

  const [atSyncing, setAtSyncing] = useState(false);
  const [atSyncMsg, setAtSyncMsg] = useState(null); // { type:"ok"|"warn"|"err", text }
  const lastSyncSigRef = useRef(""); // signature of last-applied Airtable data (skip no-op syncs)
  const dupLoadedRef = useRef(false); // duplicate-review state has been loaded (don't save before then)
  const projLoadedRef = useRef(false); // shared projects have been loaded from Airtable
  const keyRawRef = useRef(null);     // raw AES key bytes for the off-thread save worker
  const savingRef = useRef(false);    // a save is in flight (avoid overlapping heavy saves)
  const lastVisSyncRef = useRef(0);   // throttle sync-on-tab-focus
  const syncInFlightRef = useRef(false); // a full Airtable pull is running (never overlap — each pull is ~160 paged HTTP calls at 16k records)
  const deletedIdsRef = useRef(new Set()); // ids deleted on any device (shared tombstones) — filter local ghosts
  const lastSyncTimeRef = useRef(localStorage.getItem("promeza_delta_since") || ""); // ISO of last successful sync — delta syncs pull only records changed after this

  const mergeFromAirtable = (atData, prev, prevLastLoad = "", isFullPull = false) => {
    if (!atData || !prev) return prev;
    // prevLastLoad = BEFORE this fetch started â€” edits after that moment are "newer than Airtable"
    const atPersonaMap = new Map((atData.personas || []).map(p => [p.id, p]));
    const atEntityMap = new Map((atData.entities || []).map(e => [e.id, e]));

    // GHOST REMOVAL (root fix for "record shows twice"): on a FULL pull, a local record
    // that was previously in Airtable (_atId set) but is now absent was deleted/merged
    // on another device → drop it. Guards: only when the pull is trustworthy (got most
    // of the dataset, not a partial/failed pull) and the record wasn't just saved locally
    // (Airtable may not have indexed a brand-new save yet). Records never saved (no _atId)
    // are always kept (unsaved local creations).
    const ghostCutoff = new Date(Date.now() - 180000).toISOString();
    const trustPersonas = isFullPull && (atData.personas || []).length >= prev.personas.length * 0.85;
    const trustEntities = isFullPull && (atData.entities || []).length >= prev.entities.length * 0.85;
    const isGhost = (local, trust) => trust && local._atId && !(local._localSavedAt && local._localSavedAt > ghostCutoff);

    // data.js is the authoritative source for p5xxx identity fields.
    // Airtable was seeded from a corrupted CRM export, so its first/last/titulo
    // may be wrong. Always use data.js values for those fields.
    const canonicalById = new Map(((window.PROMEZA_DATA && window.PROMEZA_DATA.personas) || []).map(p => [p.id, p]));

    // Detect roles that got corrupted by the import (a city/county landed in the
    // role field, e.g. ["San Francisco"], ["Kern"]). A role is only "valid" if
    // every entry is a known role key. Corrupted ones are restored from data.js.
    const VALID_ROLES = new Set(["pastor", "co-pastor", "copastor", "lider", "lÃ­der", "miembro", "tesorero", "ujier", "adorador", "musico", "mÃºsico", "comunicador", "influencer", "presidente", "vicepresidente", "fundador", "secretario", "diacono", "diÃ¡cono", "maestro", "director-ministerio", "voluntario", "evangelista", "misionero", "otro"]);
    const rolesLookValid = (arr) => Array.isArray(arr) && arr.length > 0 && arr.every(r => VALID_ROLES.has((r || "").toLowerCase().trim()));
    // A name that looks like an imported interaction note (date + text), not a real name.
    const looksLikeNote = (s) => !s || /\d{1,2}\/\d{1,2}|Spoke |Talked |services on|Cannot Go|movie project|told (him|her)/i.test(s);

    // Merge helper: pick the non-empty value, preferring the base entity's value
    const pick = (base, fallback) => (base && base.length > 0) ? base : (fallback || []);
    const pickStr = (base, fallback) => base || fallback || "";

    // Some church entities were imported column-shifted: the NAME field holds the
    // phone number (e.g. "(805) 874-6063"). Match by phone digits to data_churches.js
    // to restore the real name and contact fields.
    const churchByPhone = {};
    ((window.PROMEZA_CHURCHES && window.PROMEZA_CHURCHES.entities) || []).forEach(e => {
      const d = (e.phone || "").replace(/\D/g, "");
      if (d.length >= 7 && !churchByPhone[d]) churchByPhone[d] = e;
    });
    const looksLikePhone = (s) => /^[\s(+]*\d[\d()+\-. ]{6,}$/.test((s || "").trim());
    const fixEntityName = (e) => {
      if (!e || !looksLikePhone(e.name)) return e;
      const d = (e.name || "").replace(/\D/g, "");
      const f = ENTITY_PHONE_FIX[d];
      if (f) return { ...e, name: f.name, phone: e.name, phones: [{ value: e.name, label: "Principal" }], email: f.email, emails: f.email ? [{ value: f.email, label: "Principal" }] : [], zip: f.zip, type: e.type || "iglesia" };
      const src = churchByPhone[d];
      if (!src) return e;
      return { ...e, name: src.name, phone: e.phone || src.phone, email: e.email || src.email, city: e.city || src.city, state: e.state || src.state, zip: e.zip || src.zip, type: e.type || src.type || "iglesia" };
    };

    const mergedPersonas = prev.personas.map(local => {
      const remote = atPersonaMap.get(local.id);
      if (!remote) return isGhost(local, trustPersonas) ? null : local;
      if (local._localSavedAt && local._localSavedAt > prevLastLoad) {
        // Local was edited after the last Airtable load â†’ keep local, update _atId
        return { ...local, _atId: remote._atId || local._atId };
      }
      // Remote is source of truth, but use data.js for identity fields on p5xxx contacts
      // (Airtable was synced from corrupted data and may have wrong names/titles)
      const canonical = (local.id && local.id.match(/^p\d+$/)) ? canonicalById.get(local.id) : null;
      // Only trust data.js identity fields when its name looks clean â€” never let a
      // stale/corrupted data.js (note text in the name) override a clean Airtable value.
      const canonClean = canonical && !looksLikeNote(canonical.first);
      // Helper: pick first non-empty value
      const geo = (...vs) => vs.find(v => v !== undefined && v !== null && v !== "") || "";
      return {
        ...remote,
        _atId: remote._atId || local._atId,
        first: canonClean ? (canonical.first || remote.first) : remote.first,
        last: canonClean ? (canonical.last !== undefined ? canonical.last : remote.last) : remote.last,
        titulo: canonClean ? (canonical.titulo || remote.titulo) : remote.titulo,
        // Restore a corrupted role (city/county stuck in the role field) from data.js,
        // but keep the remote role when it is a genuine, valid role.
        roles: (canonical && canonical.roles && !rolesLookValid(remote.roles)) ? canonical.roles : remote.roles,
        roleOther: (canonical && canonical.roles && !rolesLookValid(remote.roles)) ? (canonical.roleOther || "") : remote.roleOther,
        // Airtable's contact columns are column-shifted for p#### imports (e.g. the
        // phone field holds a name like "Claudio"). data.js is authoritative â€” restore
        // phone/email/website from it so search and display use the real values.
        phone: canonClean ? (canonical.phone !== undefined ? canonical.phone : remote.phone) : remote.phone,
        phone2: canonClean ? (canonical.phone2 !== undefined ? canonical.phone2 : remote.phone2) : remote.phone2,
        email: canonClean ? (canonical.email !== undefined ? canonical.email : remote.email) : remote.email,
        email2: canonClean ? (canonical.email2 !== undefined ? canonical.email2 : remote.email2) : remote.email2,
        website: canonClean ? (canonical.website || remote.website) : remote.website,
        // Geographic fields: Airtable often has these empty â€” use canonical (data.js) or local as fallback
        state: canonical ? geo(canonical.state, remote.state, local.state) : geo(remote.state, local.state),
        city: canonical ? geo(canonical.city, remote.city, local.city) : geo(remote.city, local.city),
        county: canonical ? geo(canonical.county, remote.county, local.county) : geo(remote.county, local.county),
        zip: canonical ? geo(canonical.zip, remote.zip, local.zip) : geo(remote.zip, local.zip),
        phones: canonClean
          ? [canonical.phone, canonical.phone2].filter(v => v && /\d/.test(v)).map((v, i) => ({ value: v, label: i === 0 ? "Personal" : "Otro" }))
          : pick(remote.phones, local.phones),
        emails: canonClean
          ? [canonical.email, canonical.email2].filter(v => v && v.indexOf("@") >= 0).map((v, i) => ({ value: v, label: i === 0 ? "Personal" : "Otro" }))
          : pick(remote.emails, local.emails),
        addressLabel: remote.addressLabel || local.addressLabel || "domicilio",
      };
    }).filter(Boolean);
    const localPersonaIds = new Set(prev.personas.map(p => p.id));
    const remoteOnlyPersonas = atData.personas.filter(p => !localPersonaIds.has(p.id));

    const mergedEntities = prev.entities.map(local => {
      const remote = atEntityMap.get(local.id);
      if (!remote) return isGhost(local, trustEntities) ? null : local;
      if (local._localSavedAt && local._localSavedAt > prevLastLoad) {
        // Local was edited after last Airtable load â†’ keep local edits, but recover
        // complex fields (schedule/phones/emails) from remote if local lacks them
        // (happens when Mac saved entity with old code before these fields existed)
        return {
          ...local,
          _atId: remote._atId || local._atId,
          schedule: pick(local.schedule, remote.schedule),
          phones: pick(local.phones, remote.phones),
          emails: pick(local.emails, remote.emails),
        };
      }
      // Remote is source of truth, but never blank out complex fields if only one side has them
      return fixEntityName({
        ...remote,
        _atId: remote._atId || local._atId,
        schedule: pick(remote.schedule, local.schedule),
        denominacion: pickStr(remote.denominacion, local.denominacion),
        phones: pick(remote.phones, local.phones),
        emails: pick(remote.emails, local.emails),
      });
    }).filter(Boolean);
    const localEntityIds = new Set(prev.entities.map(e => e.id));
    const remoteOnlyEntities = atData.entities.filter(e => !localEntityIds.has(e.id)).map(e => fixEntityName({
      ...e,
      schedule: e.schedule || [],
      phones: e.phones || [],
      emails: e.emails || [],
    }));

    // Drop records that were deleted (merged away / removed) on ANY device — Airtable
    // has no "deleted" signal in a delta sync, so we track deletions in a shared
    // tombstone list. Without this, a record deleted elsewhere lingers as a local
    // "ghost" and shows up twice in search.
    const _del = deletedIdsRef.current || new Set();
    const finalPersonas = [...mergedPersonas, ...remoteOnlyPersonas].filter(p => !_del.has(p.id));
    const finalEntities = [...mergedEntities, ...remoteOnlyEntities].filter(e => !_del.has(e.id));
    // Keep the changelog map fresh from records' own (persisted) history — take
    // whichever copy has more entries so a sync never loses history.
    const changelog = { ...prev.changelog };
    [...finalPersonas, ...finalEntities].forEach(r => {
      if (Array.isArray(r.changelog) && r.changelog.length > (changelog[r.id] || []).length) changelog[r.id] = r.changelog;
    });
    return {
      ...prev,
      personas: finalPersonas,
      entities: finalEntities,
      changelog,
    };
  };

  const syncFromAirtable = () => {
    // Never run two full pulls at once. Each loadData() is ~160 sequential paged HTTP
    // calls at 16k records and can take many seconds; without this guard, focus/timer
    // triggers pile up overlapping pulls and grind the whole app to a halt.
    if (syncInFlightRef.current) return;
    syncInFlightRef.current = true;
    setAtSyncing(true);
    const prevLastLoad = window.AIRTABLE.getLastLoad() || "";
    const nowIso = new Date().toISOString();
    window.AIRTABLE.loadData().then(async atData => {
      if (atData && (atData.personas.length > 0 || atData.entities.length > 0)) {
        // A full pull succeeded — advance the delta baseline so later background syncs
        // only fetch what changes from here on.
        lastSyncTimeRef.current = nowIso;
        try { localStorage.setItem("promeza_delta_since", nowIso); } catch (e) {}
        // ── Ghost purge (runs on EVERY full pull, even if Airtable content is unchanged,
        // because a ghost is a LOCAL discrepancy) ── remove local records that were in
        // Airtable before (_atId) but are now absent = deleted/merged elsewhere. Guarded:
        // only when the pull is trustworthy (got ≥85% of the local count, not a partial
        // failure) and the record wasn't just saved (<3 min, Airtable may not have indexed).
        const _pIds = new Set(atData.personas.map(p => p.id));
        const _eIds = new Set(atData.entities.map(e => e.id));
        const _cut = new Date(Date.now() - 180000).toISOString();
        setData(d => {
          if (!d) return d;
          const trustP = atData.personas.length >= d.personas.length * 0.85;
          const trustE = atData.entities.length >= d.entities.length * 0.85;
          const pn = trustP ? d.personas.filter(p => _pIds.has(p.id) || !p._atId || (p._localSavedAt && p._localSavedAt > _cut)) : d.personas;
          const en = trustE ? d.entities.filter(e => _eIds.has(e.id) || !e._atId || (e._localSavedAt && e._localSavedAt > _cut)) : d.entities;
          if (pn.length === d.personas.length && en.length === d.entities.length) return d;
          return { ...d, personas: pn, entities: en };
        });
        const sig = atSignature(atData);
        if (sig === lastSyncSigRef.current) {
          // Airtable unchanged since last sync â€” skip the heavy merge/re-render/
          // re-encrypt so the UI doesn't freeze while the user is working.
          return;
        }
        lastSyncSigRef.current = sig;
        // Refresh the shared tombstone list so deletions from other devices are applied.
        try { const ids = await window.AIRTABLE.loadAppState("deletedIds"); if (Array.isArray(ids)) ids.forEach(id => deletedIdsRef.current.add(id)); } catch (e) {}
        setData(prev => mergeFromAirtable(atData, prev, prevLastLoad, true));
        setAtSyncMsg({ type: "ok", text: "â†“ Airtable: " + atData.personas.length + " personas Â· " + atData.entities.length + " entidades" });
      } else if (atData) {
        setAtSyncMsg({ type: "warn", text: "âš  Airtable vacÃ­o â€” haz 'Sincronizar todo' desde la MacBook primero" });
      } else {
        setAtSyncMsg({ type: "err", text: "âœ— No se pudo leer Airtable â€” revisa conexiÃ³n" });
      }
    }).catch(e => {
      setAtSyncMsg({ type: "err", text: "âœ— Error Airtable: " + e.message });
      console.warn("syncFromAirtable error:", e);
    }).finally(() => { setAtSyncing(false); syncInFlightRef.current = false; });
  };

  // DELTA sync: pull ONLY records changed since the last sync (via the "Ultima
  // modificacion" field). Cheap — this is what runs in the background so working in the
  // app doesn't hitch. Never removes records (deletions still propagate via the full
  // clean reload); merge keeps local edits newer than the remote change.
  const deltaSyncFromAirtable = () => {
    const since = lastSyncTimeRef.current;
    if (!since) { syncFromAirtable(); return; }   // no baseline yet → do a full pull
    if (syncInFlightRef.current) return;
    syncInFlightRef.current = true;
    setAtSyncing(true);
    const prevLastLoad = window.AIRTABLE.getLastLoad() || "";
    const nowIso = new Date().toISOString();
    // Re-fetch a small overlap (30s) so an edit that landed right at the boundary isn't missed.
    const sinceOverlap = new Date(Date.parse(since) - 30000).toISOString();
    window.AIRTABLE.loadDataSince(sinceOverlap).then(changed => {
      if (changed) {
        lastSyncTimeRef.current = nowIso;
        try { localStorage.setItem("promeza_delta_since", nowIso); } catch (e) {}
        if (changed.personas.length > 0 || changed.entities.length > 0) {
          setData(prev => mergeFromAirtable(changed, prev, prevLastLoad));
          setAtSyncMsg({ type: "ok", text: "â†“ " + (changed.personas.length + changed.entities.length) + " cambios de Airtable" });
        }
      }
    }).catch(e => { console.warn("deltaSync error:", e); })
      .finally(() => { setAtSyncing(false); syncInFlightRef.current = false; });
  };

  const forcePullFromAirtable = () => {
    setAtSyncing(true);
    setAtSyncMsg(null);
    window.AIRTABLE.loadData().then(atData => {
      if (atData && (atData.personas.length > 0 || atData.entities.length > 0)) {
        setData(prev => ({
          ...prev,
          personas: [
            ...atData.personas,
            ...prev.personas.filter(p => !atData.personas.some(a => a.id === p.id)),
          ],
          entities: [
            ...atData.entities.map(e => ({ ...e, schedule: e.schedule || [], phones: e.phones || [], emails: e.emails || [] })),
            ...prev.entities.filter(e => !atData.entities.some(a => a.id === e.id)),
          ],
        }));
        setAtSyncMsg({ type: "ok", text: "âœ“ Recibido: " + atData.personas.length + " personas Â· " + atData.entities.length + " entidades" });
      } else if (atData) {
        setAtSyncMsg({ type: "warn", text: "âš  Airtable no tiene datos â€” primero sincroniza desde la MacBook" });
      } else {
        setAtSyncMsg({ type: "err", text: "âœ— No se pudo conectar a Airtable" });
      }
    }).catch(e => {
      setAtSyncMsg({ type: "err", text: "âœ— Error: " + e.message });
    }).finally(() => setAtSyncing(false));
  };

  useEffect(() => {
    const initData = async () => {
      // loadSessionKey reads THIS tab's key (sessionStorage) or, for a new tab opened
      // from an already-signed-in window, inherits it from a sibling tab over
      // BroadcastChannel. On a real cold start (browser reopened, no sibling) there is
      // no key → require Microsoft sign-in. We deliberately do NOT derive the key from
      // the stored 30-day session, so closing the browser really does lock the app.
      const key = await window.CryptoUtils.loadSessionKey();
      if (!key) { setNeedsUnlock(true); setDataReady(true); return; }
      setCryptoKey(key);

      // â”€â”€ One-time CLEAN SLATE (2026-06-25 rebuild) â”€â”€
      // The database was rebuilt clean from the source spreadsheet. Load ONLY from
      // Airtable (ignore the old local cache AND the bundled data.js seed) so every
      // device shows the clean base. Runs once per browser.
      if (!localStorage.getItem('promeza_cleanslate_v190')) {
        try {
          const at = await window.AIRTABLE.loadData();
          if (at && ((at.personas || []).length > 200)) {
            const fresh = processLoadedData({ personas: at.personas, entities: at.entities, tasks: {}, interactions: {}, projects: [], campaigns: [], calendarEvents: [], comments: {}, attachments: {}, changelog: {}, goals: [], segments: [] });
            try { delete window.PROMEZA_DATA; } catch (e) {}
            try { delete window.PROMEZA_CHURCHES; } catch (e) {}
            localStorage.setItem('promeza_cleanslate_v190', '1');
            try { const bytes = await window.CryptoUtils.encryptBytes(JSON.stringify(fresh), key); await idbSet('promeza_data_bytes', bytes); } catch (e) {}
            setData(fresh); setDataReady(true);
            console.log('PROMEZA: clean-slate loaded ' + fresh.personas.length + ' contacts from Airtable');
            return;
          }
        } catch (e) { console.warn('clean-slate load failed, using normal flow', e); }
      }

      try {
        const json = await loadDecrypted(key);
        if (json) {
          const loaded = processLoadedData(JSON.parse(json));
          // â”€â”€ Self-heal stale pre-rebuild data â”€â”€
          // A device that never ran the clean-slate rebuild can keep the OLD contacts
          // (ids p#### / e####) ALONGSIDE the new clean ones (pc#### / ec####), which
          // inflates the count (~11k seen in Brazil). The clean database uses ONLY
          // pc####/ec####, so any p####/e#### record is leftover stale data â€” drop it
          // once. Preserves local notes/tasks (unlike the full clean-slate reload).
          if (!localStorage.getItem('promeza_purgeold_v154')) {
            const hasStale = (loaded.personas || []).some(p => /^p\d+$/.test(p.id)) || (loaded.entities || []).some(e => /^e\d+$/.test(e.id));
            if (hasStale) {
              const bp = loaded.personas.length, be = loaded.entities.length;
              loaded.personas = loaded.personas.filter(p => !/^p\d+$/.test(p.id));
              loaded.entities = loaded.entities.filter(e => !/^e\d+$/.test(e.id));
              console.log('PROMEZA: purged stale pre-rebuild records: -' + (bp - loaded.personas.length) + ' personas, -' + (be - loaded.entities.length) + ' entities');
              try { const bytes = await window.CryptoUtils.encryptBytes(JSON.stringify(loaded), key); await idbSet('promeza_data_bytes', bytes); } catch (e) {}
            }
            localStorage.setItem('promeza_purgeold_v154', '1');
          }
          // Validate: must have real data AND correct English field names (first/last).
          // Old Airtable data used Spanish names (nombre/apellido) â€” unusable for search.
          const sample = (loaded.personas || [])[0];
          const hasCorrectFormat = sample && (sample.first !== undefined || sample.last !== undefined);
          if ((loaded.personas || []).length >= 200 && hasCorrectFormat) {
            // One-time merge of church contacts (v89) for existing users whose localStorage
            // was saved before data_churches.js existed.
            if (!localStorage.getItem('promeza_churches_v89') && window.PROMEZA_CHURCHES) {
              const cd = window.PROMEZA_CHURCHES;
              const exN = new Set(loaded.personas.map(p => ((p.first||'')+(p.last||'')).toLowerCase().replace(/\s/g,'')));
              const exE = new Set(loaded.entities.map(e => (e.name||'').toLowerCase().trim()));
              const newP = (cd.personas||[]).filter(p => !exN.has(((p.first||'')+(p.last||'')).toLowerCase().replace(/\s/g,'')));
              const newE = (cd.entities||[]).filter(e => !exE.has((e.name||'').toLowerCase().trim()));
              if (newP.length > 0) loaded.personas = [...loaded.personas, ...newP];
              if (newE.length > 0) loaded.entities = [...loaded.entities, ...newE];
              localStorage.setItem('promeza_churches_v89', '1');
              console.log('PROMEZA: merged church contacts: +' + newP.length + ' personas, +' + newE.length + ' entities');
            }
            // One-time sync of p5xxx contacts from current data.js (fixes column-mapping errors
            // in the original seed: city names in first field, wrong phone/city, etc.)
            if (!localStorage.getItem('promeza_p5sync_v95') && window.PROMEZA_DATA) {
              const srcMap = new Map((window.PROMEZA_DATA.personas || []).map(p => [p.id, p]));
              let synced = 0;
              loaded.personas = loaded.personas.map(p => {
                if (!p.id || !p.id.match(/^p\d+$/)) return p; // only system IDs (p5xxx, p6xxxâ€¦)
                const src = srcMap.get(p.id);
                if (!src) return p;
                // Safety: at least one email must match to confirm it's the same person
                const pEmail = (p.email || '').toLowerCase().trim();
                const sEmail = (src.email || '').toLowerCase().trim();
                if (pEmail && sEmail && pEmail !== sEmail) return p;
                if (!pEmail && !sEmail) return p; // can't verify, skip
                // Overwrite core fields from the correct data.js version
                synced++;
                return {
                  ...p,
                  first: src.first || p.first,
                  last: src.last !== undefined ? src.last : p.last,
                  titulo: src.titulo !== undefined ? src.titulo : p.titulo,
                  roles: src.roles || p.roles,
                  city: src.city || p.city,
                  state: src.state || p.state,
                  zip: src.zip !== undefined ? src.zip : p.zip,
                  county: src.county || p.county,
                  region: src.region || p.region,
                  church: src.church || p.church,
                  website: src.website || p.website,
                };
              });
              if (synced > 0) console.log('PROMEZA: synced ' + synced + ' contacts from data.js (column-mapping fix)');
              localStorage.setItem('promeza_p5sync_v95', '1');
            }
            // v98: restore any pch_xxx contacts corrupted by v97, then re-run
            // email-based sync restricted to p5xxx contacts only.
            if (!localStorage.getItem('promeza_fullsync_v98') && window.PROMEZA_DATA) {
              // Step A: restore pch_xxx from data_churches.js (source of truth)
              if (window.PROMEZA_CHURCHES) {
                const churchSrc = new Map((window.PROMEZA_CHURCHES.personas || []).map(p => [p.id, p]));
                loaded.personas = loaded.personas.map(p => {
                  if (!p.id || !p.id.startsWith('pch_')) return p;
                  const src = churchSrc.get(p.id);
                  if (!src) return p;
                  return { ...p, first: src.first, last: src.last, titulo: src.titulo, roles: src.roles, role: src.role, church: src.church };
                });
              }
              // Step B: email-based sync for p5xxx contacts only
              const srcByEmail = new Map();
              const srcById = new Map();
              (window.PROMEZA_DATA.personas || []).forEach(src => {
                srcById.set(src.id, src);
                if (src.email && src.email.includes('@')) srcByEmail.set(src.email.toLowerCase().trim(), src);
                if (src.email2 && src.email2.includes('@')) srcByEmail.set(src.email2.toLowerCase().trim(), src);
              });
              let emailSynced = 0;
              loaded.personas = loaded.personas.map(p => {
                if (!p.id || !p.id.match(/^p\d+$/)) return p; // only p5xxx â€” never touch pch_xxx
                const storedEmails = [p.email, p.email2, ...((p.emails || []).map(e => e.value || ''))]
                  .filter(e => e && e.includes('@')).map(e => e.toLowerCase().trim());
                let src = null;
                for (const se of storedEmails) { if (srcByEmail.has(se)) { src = srcByEmail.get(se); break; } }
                if (!src && storedEmails.length === 0) {
                  const byId = srcById.get(p.id);
                  if (byId && byId.email && byId.email.includes('@')) src = byId;
                }
                if (!src) return p;
                emailSynced++;
                return {
                  ...p,
                  first: src.first || p.first,
                  last: src.last !== undefined ? src.last : p.last,
                  titulo: src.titulo !== undefined ? src.titulo : p.titulo,
                  roles: src.roles || p.roles,
                  city: src.city || p.city,
                  state: src.state || p.state,
                  zip: src.zip !== undefined ? src.zip : p.zip,
                  county: src.county || p.county,
                  region: src.region || p.region,
                  church: src.church || p.church,
                  website: src.website || p.website,
                };
              });
              if (emailSynced > 0) console.log('PROMEZA: fullsync fixed ' + emailSynced + ' contacts');
              localStorage.setItem('promeza_fullsync_v98', '1');
            }
            // v101: full ID-based re-sync from updated data.js â€” fixes all CA/CO/CT
            // field mapping errors corrected in the source data.
            if (!localStorage.getItem('promeza_datasync_v101') && window.PROMEZA_DATA) {
              const srcById101 = new Map((window.PROMEZA_DATA.personas || []).map(p => [p.id, p]));
              let n101 = 0;
              loaded.personas = loaded.personas.map(p => {
                if (!p.id || !p.id.match(/^p\d+$/)) return p;
                const src = srcById101.get(p.id);
                if (!src) return p;
                n101++;
                return {
                  ...p,
                  first: src.first || p.first,
                  last: src.last !== undefined ? src.last : p.last,
                  titulo: src.titulo || p.titulo,
                  city: src.city || p.city,
                  county: src.county || p.county,
                  region: src.region || p.region,
                  zip: src.zip !== undefined ? src.zip : p.zip,
                  phone: src.phone !== undefined ? src.phone : p.phone,
                  phone2: src.phone2 !== undefined ? src.phone2 : p.phone2,
                  email: src.email !== undefined ? src.email : p.email,
                  email2: src.email2 !== undefined ? src.email2 : p.email2,
                  church: src.church || p.church,
                  screening: src.screening || p.screening,
                  members: src.members || p.members,
                  website: src.website || p.website,
                };
              });
              if (n101 > 0) console.log('PROMEZA: datasync v101 refreshed ' + n101 + ' contacts from corrected data.js');
              localStorage.setItem('promeza_datasync_v101', '1');
            }
            // v116: restore the 6 interaction notes that had been import-corrupted
            // into the name fields (names were fixed in data.js v115). Added as
            // "otro" interactions so they live in each contact's history. Runs once
            // per browser, so every teammate gets them.
            if (!localStorage.getItem('promeza_notes_v116')) {
              const IMP_NOTES = [
                { id: 'p7166', notes: '9/18 - Cannot Go' },
                { id: 'p7212', notes: '6/13 - CH He has services on Tuesdays.' },
                { id: 'p7238', notes: '7/24 - Talked to Pastor Efren and told him about the movie projects we will be hosting. This ministry does not attend the movie theatres.' },
                { id: 'p7302', notes: '7/21 - Spoke with sister Carmen. She will talk to her pastor about the movie projects. She was interested in these projects.' },
                { id: 'p7314', notes: '7/24 - Talked to Pastor Mainor and told him about the movie projects we will be hosting. He was not open to give his email address.' },
                { id: 'p7323', notes: '7/24 - Spoke with sister Mariela and told her about the new movie projects.' },
              ];
              loaded.interactions = loaded.interactions || {};
              IMP_NOTES.forEach(n => {
                const list = loaded.interactions[n.id] || [];
                if (!list.some(it => (it.notes || '') === n.notes)) {
                  loaded.interactions[n.id] = [{ id: 'iimp_' + n.id, type: 'otro', date: '', notes: n.notes, result: '' }, ...list];
                }
              });
              localStorage.setItem('promeza_notes_v116', '1');
              console.log('PROMEZA: restored 6 import notes as interactions (v116)');
            }
            // v117: fix roles corrupted by the import (a city/county landed in the
            // role field, e.g. "San Francisco", "Kern") â€” restore from data.js.
            if (!localStorage.getItem('promeza_roles_v117') && window.PROMEZA_DATA) {
              const VALID_R = new Set(["pastor", "co-pastor", "copastor", "lider", "lÃ­der", "miembro", "tesorero", "ujier", "adorador", "musico", "mÃºsico", "comunicador", "influencer", "presidente", "vicepresidente", "fundador", "secretario", "diacono", "diÃ¡cono", "maestro", "director-ministerio", "voluntario", "evangelista", "misionero", "otro"]);
              const okRoles = (arr) => Array.isArray(arr) && arr.length > 0 && arr.every(r => VALID_R.has((r || "").toLowerCase().trim()));
              const srcRoles = new Map((window.PROMEZA_DATA.personas || []).map(p => [p.id, p]));
              let rFixed = 0;
              loaded.personas = loaded.personas.map(p => {
                if (!p.id || !p.id.match(/^p\d+$/) || okRoles(p.roles)) return p;
                const src = srcRoles.get(p.id);
                if (!src || !src.roles) return p;
                rFixed++;
                return { ...p, roles: src.roles, roleOther: src.roleOther || "" };
              });
              if (rFixed > 0) console.log('PROMEZA: fixed ' + rFixed + ' corrupted roles from data.js (v117)');
              localStorage.setItem('promeza_roles_v117', '1');
            }
            // v119: force-restore name/title/role from the corrected data.js for ALL
            // p#### contacts. Earlier name fixes (v101) ran BEFORE data.js was
            // corrected, so their flag was set with stale data and never re-ran â€”
            // leaving notes stuck in the name field for some contacts. A fresh flag
            // re-applies the corrected identity fields from data.js.
            if (!localStorage.getItem('promeza_idfix_v119') && window.PROMEZA_DATA) {
              const srcId119 = new Map((window.PROMEZA_DATA.personas || []).map(p => [p.id, p]));
              let nId = 0;
              loaded.personas = loaded.personas.map(p => {
                if (!p.id || !p.id.match(/^p\d+$/)) return p;
                const src = srcId119.get(p.id);
                if (!src) return p;
                nId++;
                return {
                  ...p,
                  first: src.first || p.first,
                  last: src.last !== undefined ? src.last : p.last,
                  titulo: src.titulo !== undefined ? src.titulo : p.titulo,
                  roles: src.roles || p.roles,
                  roleOther: src.roleOther !== undefined ? src.roleOther : p.roleOther,
                };
              });
              if (nId > 0) console.log('PROMEZA: v119 re-synced name/title/role for ' + nId + ' contacts');
              localStorage.setItem('promeza_idfix_v119', '1');
            }
            // v121: robust name/role repair for the whole team. Earlier fixes could run
            // with a stale (corrupted) data.js and then mark themselves done. This only
            // runs once data.js is CONFIRMED clean (probe a known contact); otherwise it
            // does NOT set its flag, so it retries on the next load when data.js is fresh.
            if (!localStorage.getItem('promeza_idfix_v121') && window.PROMEZA_DATA) {
              const noteRx = /\d{1,2}\/\d{1,2}|Spoke |Talked |services on|Cannot Go|movie project|told (him|her)/i;
              const srcMap = new Map((window.PROMEZA_DATA.personas || []).map(p => [p.id, p]));
              const probe = srcMap.get('p7238') || srcMap.get('p7212');
              const sourceClean = probe && probe.first && !noteRx.test(probe.first);
              if (sourceClean) {
                let nFix = 0;
                loaded.personas = loaded.personas.map(p => {
                  if (!p.id || !p.id.match(/^p\d+$/)) return p;
                  const s = srcMap.get(p.id);
                  if (!s || !s.first || noteRx.test(s.first)) return p; // only apply clean source names
                  if ((p.first || '') !== s.first) nFix++;
                  return {
                    ...p,
                    first: s.first,
                    last: s.last !== undefined ? s.last : p.last,
                    titulo: s.titulo !== undefined ? s.titulo : p.titulo,
                    roles: s.roles || p.roles,
                    roleOther: s.roleOther !== undefined ? s.roleOther : p.roleOther,
                  };
                });
                if (nFix > 0) console.log('PROMEZA: v121 repaired ' + nFix + ' contact names from clean data.js');
                localStorage.setItem('promeza_idfix_v121', '1');
              } else {
                console.log('PROMEZA: v121 skipped â€” data.js not confirmed clean yet, will retry next load');
              }
            }
            // v124: remove the auto-generated "Revisar posible duplicado" tasks that
            // had accumulated by the thousands and bloated storage (duplicates are
            // still listed on the Duplicados page). One-time cleanup.
            if (!localStorage.getItem('promeza_detask_v124') && loaded.tasks) {
              let removed = 0;
              const tk = { ...loaded.tasks };
              Object.keys(tk).forEach(pid => {
                const before = (tk[pid] || []).length;
                tk[pid] = (tk[pid] || []).filter(t => t && t.type !== 'duplicate');
                removed += before - tk[pid].length;
                if (tk[pid].length === 0) delete tk[pid];
              });
              loaded.tasks = tk;
              if (removed > 0) console.log('PROMEZA: v124 removed ' + removed + ' duplicate-review tasks');
              localStorage.setItem('promeza_detask_v124', '1');
            }
            // v133: restore phone/email/website from data.js for p#### contacts. The
            // Airtable import column-shifted these (e.g. phone held a name like "Claudio"),
            // so search by phone failed. data.js is authoritative. Runs once data.js is
            // confirmed clean; rebuilds the phones/emails arrays too.
            if (!localStorage.getItem('promeza_contactfix_v133') && window.PROMEZA_DATA) {
              const noteRx = /\d{1,2}\/\d{1,2}|Spoke |Talked |services on|Cannot Go|movie project|told (him|her)/i;
              const srcMap = new Map((window.PROMEZA_DATA.personas || []).map(p => [p.id, p]));
              const probe = srcMap.get('p5294') || srcMap.get('p7238');
              const sourceClean = probe && probe.first && !noteRx.test(probe.first);
              if (sourceClean) {
                let cFix = 0;
                loaded.personas = loaded.personas.map(p => {
                  if (!p.id || !p.id.match(/^p\d+$/)) return p;
                  const s = srcMap.get(p.id);
                  if (!s || !s.first || noteRx.test(s.first)) return p;
                  cFix++;
                  const phones = [s.phone, s.phone2].filter(v => v && /\d/.test(v)).map((v, i) => ({ value: v, label: i === 0 ? "Personal" : "Otro" }));
                  const emails = [s.email, s.email2].filter(v => v && v.indexOf("@") >= 0).map((v, i) => ({ value: v, label: i === 0 ? "Personal" : "Otro" }));
                  return {
                    ...p,
                    phone: s.phone !== undefined ? s.phone : p.phone,
                    phone2: s.phone2 !== undefined ? s.phone2 : p.phone2,
                    email: s.email !== undefined ? s.email : p.email,
                    email2: s.email2 !== undefined ? s.email2 : p.email2,
                    website: s.website || p.website,
                    phones, emails,
                  };
                });
                if (cFix > 0) console.log('PROMEZA: v133 restored phone/email for ' + cFix + ' contacts');
                localStorage.setItem('promeza_contactfix_v133', '1');
              } else {
                console.log('PROMEZA: v133 skipped â€” data.js not confirmed clean yet, retry next load');
              }
            }
            // v137: fix church entities whose NAME holds the phone number (import
            // column-shift). Uses the explicit ENTITY_PHONE_FIX map (from the source
            // spreadsheet) plus data_churches.js, matched by phone digits.
            if (!localStorage.getItem('promeza_entfix_v137')) {
              const byPhone = {};
              ((window.PROMEZA_CHURCHES && window.PROMEZA_CHURCHES.entities) || []).forEach(e => {
                const d = (e.phone || "").replace(/\D/g, "");
                if (d.length >= 7 && !byPhone[d]) byPhone[d] = e;
              });
              const isPhoneName = (s) => /^[\s(+]*\d[\d()+\-. ]{6,}$/.test((s || "").trim());
              let eFix = 0;
              loaded.entities = (loaded.entities || []).map(e => {
                if (!isPhoneName(e.name)) return e;
                const d = (e.name || "").replace(/\D/g, "");
                const f = ENTITY_PHONE_FIX[d];
                if (f) { eFix++; return { ...e, name: f.name, phone: e.name, phones: [{ value: e.name, label: "Principal" }], email: f.email, emails: f.email ? [{ value: f.email, label: "Principal" }] : [], zip: f.zip, type: e.type || "iglesia" }; }
                const src = byPhone[d];
                if (!src) return e;
                eFix++;
                return { ...e, name: src.name, phone: e.phone || src.phone, email: e.email || src.email, city: e.city || src.city, state: e.state || src.state, zip: e.zip || src.zip, type: e.type || src.type || "iglesia" };
              });
              if (eFix > 0) console.log('PROMEZA: v137 fixed ' + eFix + ' entity names');
              localStorage.setItem('promeza_entfix_v137', '1');
            }
            // v138: remove junk contacts created by the bulk import â€” rows where the
            // Excel had a phone or a note in the name column. Only touches import ids
            // (px*) whose name doesn't start with a letter or looks like a note; never
            // touches real contacts. Mirrors the cleanup already done in Airtable.
            if (!localStorage.getItem('promeza_cleanjunk_v138')) {
              const noteRx = /Spoke |Talked |services on|Cannot Go|movie project|told (him|her)|retreat|projects\.|Went to/i;
              const isJunk = (n) => { n = (n || "").trim(); return !n || !/^\p{L}/u.test(n) || noteRx.test(n); };
              const before = (loaded.personas || []).length;
              loaded.personas = (loaded.personas || []).filter(p => {
                const full = ((p.first || "") + " " + (p.last || "")).trim();
                if (/^px/.test(p.id || "") && isJunk(p.first || full)) return false;
                return true;
              });
              const removed = before - loaded.personas.length;
              if (removed > 0) console.log('PROMEZA: v138 removed ' + removed + ' junk imported contacts');
              localStorage.setItem('promeza_cleanjunk_v138', '1');
            }
            // v140: same cleanup for junk ENTITIES created by the import (exb* ids whose
            // name is a phone number, because the Excel's CHURCH NAME column held a phone).
            if (!localStorage.getItem('promeza_cleanent_v140')) {
              const isJunkE = (n) => { n = (n || "").trim(); return !n || !/^\p{L}/u.test(n); };
              const beforeE = (loaded.entities || []).length;
              loaded.entities = (loaded.entities || []).filter(e => !(/^exb/.test(e.id || "") && isJunkE(e.name)));
              const removedE = beforeE - loaded.entities.length;
              if (removedE > 0) console.log('PROMEZA: v140 removed ' + removedE + ' junk imported entities');
              localStorage.setItem('promeza_cleanent_v140', '1');
            }
            // v142: remove imported entities whose name is an EMAIL or other non-name
            // (the Excel's CHURCH NAME column held an email for some rows). v140 missed
            // these because emails start with a letter.
            if (!localStorage.getItem('promeza_cleanent_v142')) {
              const isJunkE2 = (n) => { n = (n || "").trim(); return !n || !/^\p{L}/u.test(n) || /@/.test(n); };
              const beforeE = (loaded.entities || []).length;
              loaded.entities = (loaded.entities || []).filter(e => !(/^exb/.test(e.id || "") && isJunkE2(e.name)));
              const removedE = beforeE - loaded.entities.length;
              if (removedE > 0) console.log('PROMEZA: v142 removed ' + removedE + ' email/junk imported entities');
              localStorage.setItem('promeza_cleanent_v142', '1');
            }
            setData(loaded);
            setDataReady(true);
            return;
          }
          // Wrong format or too few contacts â€” clear and re-seed
          await clearStoredData();
          console.log("PROMEZA: cleared stale/wrong-format data, re-seeding");
        }
      } catch (err) { console.error("Data load error:", err); }

      // No valid data in localStorage â€” seed from data.js (instant, no fetch)
      const seed = window.PROMEZA_DATA || {};
      const seedData = {
        personas: seed.personas || [],
        entities: seed.entities || [],
        tasks: seed.tasks || {},
        interactions: seed.interactions || {},
        projects: seed.projects || [],
        campaigns: seed.campaigns || [],
        calendarEvents: seed.calendarEvents || [],
        comments: seed.comments || {},
        attachments: seed.attachments || {},
        changelog: seed.changelog || {},
        goals: seed.goals || [],
        segments: seed.segments || [],
      };
      // Normalize phone/email arrays expected by UI components
      let seeded;
      try { seeded = processLoadedData(seedData); } catch(e) { console.error("processLoadedData seed error:", e); seeded = seedData; }
      setData(seeded);
      setDataReady(true);
      localStorage.setItem('promeza_last_load', new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString());
      // Keep window.PROMEZA_DATA available: mergeFromAirtable uses it as the
      // canonical source for p#### identity fields (name/title/role). Deleting it
      // let Airtable's values win unchecked, which could re-introduce corruption.
    };
    if (userEmail) initData();
  }, [userEmail]);

  // Export the raw AES key once so the save worker can use it.
  useEffect(() => {
    if (!cryptoKey) { keyRawRef.current = null; return; }
    crypto.subtle.exportKey("raw", cryptoKey).then(buf => { keyRawRef.current = new Uint8Array(buf); }).catch(() => { keyRawRef.current = null; });
  }, [cryptoKey]);

  useEffect(() => {
    if (!data || !cryptoKey) return;
    // Save when browser is idle. The heavy stringify+encode+encrypt runs off the
    // main thread in a Web Worker (saveEncryptedObj), so it no longer freezes the
    // UI; falls back to the main thread if the worker is unavailable. savingRef
    // prevents overlapping heavy saves — if one is in flight we retry after it.
    const doSave = () => {
      if (savingRef.current) { timer = setTimeout(doSave, 1500); return; }
      savingRef.current = true;
      saveEncryptedObj(data, cryptoKey, keyRawRef.current).catch(console.error).finally(() => { savingRef.current = false; });
    };
    let timer;
    if (typeof requestIdleCallback !== "undefined") {
      timer = requestIdleCallback(doSave, { timeout: 4000 });
    } else {
      timer = setTimeout(doSave, 2000);
    }
    return () => {
      if (typeof requestIdleCallback !== "undefined") cancelIdleCallback(timer);
      else clearTimeout(timer);
    };
  }, [data, cryptoKey]);

  // Cross-tab sync: when another tab saves to localStorage, reload data here
  useEffect(() => {
    if (!cryptoKey || !dataReady) return;
    const onStorage = async (e) => {
      if (e.key !== "promeza_data_enc" || !e.newValue) return;
      try {
        const json = await window.CryptoUtils.decrypt(e.newValue, cryptoKey);
        const parsed = JSON.parse(json);
        setData(processLoadedData(parsed));
      } catch {}
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [cryptoKey, dataReady]);

  // Airtable sync: one pull a few seconds after open (so the UI is interactive
  // first and teammates' latest data arrives shortly), then every 2 minutes.
  // Deliberately NOT on every tab focus â€” that caused repeated full-dataset
  // merges + re-encryption that froze the page.
  useEffect(() => {
    if (!dataReady || !data) return;
    // Only sync while the tab is visible (a background tab doesn't need to re-fetch
    // + re-parse 10k records), and every 4 min instead of 2 — this halves the
    // periodic hitch while working. Also sync once when the tab regains focus
    // (throttled to at most once/2 min) so returning to the app shows fresh data.
    // On open: ONE full pull (baseline + catches anything). Afterwards, background
    // syncs are DELTA (only changed records) so they're cheap and don't hitch the UI.
    const runFull = () => { if (document.visibilityState === "visible") { lastVisSyncRef.current = Date.now(); syncFromAirtable(); } };
    const runDelta = () => { if (document.visibilityState === "visible") { lastVisSyncRef.current = Date.now(); deltaSyncFromAirtable(); } };
    const first = setTimeout(runFull, 3000);
    // Every 2 min: usually a cheap DELTA pull, but every 4th tick (~8 min) a FULL pull.
    // The full pull is the SAFETY NET — it catches changes the delta missed (e.g. a bulk
    // edit that didn't bump "Ultima modificacion", or a delta baseline gap) AND runs the
    // ghost purge. This is what guarantees everything eventually shows on every device.
    let _tick = 0;
    const interval = setInterval(() => { _tick++; if (_tick % 4 === 0) runFull(); else runDelta(); }, 120000);
    // Sync when the tab regains focus, throttled to once/2min. (A full pull is ~160
    // paged HTTP calls at 16k records — doing it on every focus, as an earlier 20s
    // throttle did, made the whole app crawl.) On-open + this + the 4-min timer keep
    // it automatic without hammering; the syncInFlightRef guard prevents overlap.
    const onVis = () => { if (document.visibilityState === "visible" && Date.now() - lastVisSyncRef.current > 120000) runDelta(); };
    document.addEventListener("visibilitychange", onVis);
    return () => { clearTimeout(first); clearInterval(interval); document.removeEventListener("visibilitychange", onVis); };
  }, [dataReady]); // eslint-disable-line react-hooks/exhaustive-deps

  // Duplicate-review state: SHARED across devices via Airtable (+ localStorage for
  // instant same-device reload). Without this, a scan done on the tablet never
  // reached the computer (dupPairs was in-memory only). Load once when data is ready.
  useEffect(() => {
    if (!dataReady) return;
    let cancelled = false;
    (async () => {
      let local = null;
      try { local = JSON.parse(localStorage.getItem("promeza_dupreview") || "null"); } catch {}
      if (local && !cancelled) {
        if (Array.isArray(local.personas)) setDupPairs(local.personas);
        if (Array.isArray(local.entities)) setEntityDupPairs(local.entities);
      }
      let remote = null;
      try { remote = await window.AIRTABLE.loadAppState("dupReview"); } catch {}
      if (remote && !cancelled) {
        // Remote is the shared truth; prefer it when present.
        if (Array.isArray(remote.personas)) setDupPairs(remote.personas);
        if (Array.isArray(remote.entities)) setEntityDupPairs(remote.entities);
      }
      dupLoadedRef.current = true;
    })();
    return () => { cancelled = true; };
  }, [dataReady]);

  // Load the shared tombstone list (deleted ids) and purge any local "ghost" records
  // that were deleted on another device (merges/deletes that didn't propagate here).
  useEffect(() => {
    if (!dataReady) return;
    let cancelled = false;
    (async () => {
      let ids = null;
      try { ids = await window.AIRTABLE.loadAppState("deletedIds"); } catch (e) {}
      if (cancelled || !Array.isArray(ids) || ids.length === 0) return;
      ids.forEach(id => deletedIdsRef.current.add(id));
      setData(d => {
        if (!d) return d;
        const pn = d.personas.filter(p => !deletedIdsRef.current.has(p.id));
        const en = d.entities.filter(e => !deletedIdsRef.current.has(e.id));
        if (pn.length === d.personas.length && en.length === d.entities.length) return d;
        return { ...d, personas: pn, entities: en };
      });
    })();
    return () => { cancelled = true; };
  }, [dataReady]);

  // Persist duplicate-review state on change (after the initial load). Saves to
  // localStorage immediately and to Airtable (debounced) so all devices share it.
  useEffect(() => {
    if (!dupLoadedRef.current) return;
    const state = { personas: dupPairs, entities: entityDupPairs };
    try { localStorage.setItem("promeza_dupreview", JSON.stringify(state)); } catch {}
    const id = setTimeout(() => { window.AIRTABLE.saveAppState("dupReview", state).catch(() => {}); }, 1500);
    return () => clearTimeout(id);
  }, [dupPairs, entityDupPairs]);

  // Projects: SHARED across devices via Airtable (unlike the rest, which stay in
  // the local blob). Load the shared list once when data is ready and merge it in
  // (keeping any local-only projects), so every device sees the same projects.
  useEffect(() => {
    if (!dataReady || !data) return;
    let cancelled = false;
    (async () => {
      let remote = null;
      try { remote = await window.AIRTABLE.loadAppState("projects"); } catch {}
      if (Array.isArray(remote) && !cancelled) {
        setData(d => {
          const ids = new Set(remote.map(p => p.id));
          const localOnly = (d.projects || []).filter(p => !ids.has(p.id));
          return { ...d, projects: [...remote, ...localOnly] };
        });
      }
      projLoadedRef.current = true;
    })();
    return () => { cancelled = true; };
  }, [dataReady]); // eslint-disable-line react-hooks/exhaustive-deps

  // Persist projects to the shared store whenever they change (after initial load).
  useEffect(() => {
    if (!projLoadedRef.current || !data) return;
    const proj = data.projects || [];
    const id = setTimeout(() => { window.AIRTABLE.saveAppState("projects", proj).catch(() => {}); }, 1500);
    return () => clearTimeout(id);
  }, [data && data.projects]); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-logout on inactivity (1 hour)
  const INACTIVITY_MS = 60 * 60 * 1000;
  useEffect(() => {
    if (!userEmail) return;
    let timer = setTimeout(() => {
      clearSession();
      (window.CryptoUtils?.clearSessionKey ? window.CryptoUtils.clearSessionKey() : (localStorage.removeItem("promeza_sk"), sessionStorage.removeItem("promeza_sk")));
      setUserEmail(null);
    }, INACTIVITY_MS);
    const reset = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        clearSession();
        (window.CryptoUtils?.clearSessionKey ? window.CryptoUtils.clearSessionKey() : (localStorage.removeItem("promeza_sk"), sessionStorage.removeItem("promeza_sk")));
        setUserEmail(null);
      }, INACTIVITY_MS);
    };
    const events = ["mousedown", "keypress", "scroll", "touchstart", "click"];
    events.forEach(e => window.addEventListener(e, reset));
    return () => { clearTimeout(timer); events.forEach(e => window.removeEventListener(e, reset)); };
  }, [userEmail]);

  // NOTE: duplicate detection is O(nÂ²) â€” comparing every contact against every
  // other (~10 million comparisons for 4500 contacts) froze the page for 10-30s on
  // every load. It now runs ONLY on demand, when the user opens the Duplicados page
  // (see handleScanAll / the Duplicados view). Nothing heavy happens on load.

  useEffect(() => {
    if (!dataReady || !data || !userEmail || remindersShown) return;
    const today = new Date().toISOString().slice(0, 10);
    const todayMMDD = today.slice(5);
    const birthdaysToday = data.personas.filter(p => p.birthday && p.birthday.slice(5) === todayMMDD && p.status !== "inactivo");
    const overdueTasks = [];
    Object.entries(data.tasks || {}).forEach(([pid, tasks]) => {
      tasks.forEach(tk => {
        if (!tk.done && tk.due && tk.due < today) {
          const p = data.personas.find(x => x.id === pid);
          overdueTasks.push({ ...tk, personaName: p ? p.first + " " + p.last : "" });
        }
      });
    });
    if (birthdaysToday.length > 0 || overdueTasks.length > 0) {
      setShowReminders(true);
    }
    setRemindersShown(true);
  }, [dataReady, data, userEmail, remindersShown]);

  const [routeHistory, setRouteHistory] = useState([]);
  const suppressHashRef = useRef(false);   // we set location.hash ourselves — ignore the resulting hashchange
  const appliedHashRef = useRef(false);    // initial deep-link applied once after login
  const routeRef = useRef(route); routeRef.current = route;

  const setHash = (r) => {
    try { const h = routeToHash(r); if (h && ("#" + location.hash.replace(/^#/, "")) !== h) { suppressHashRef.current = true; location.hash = h; } } catch (e) {}
  };

  const go = (r) => {
    if (r.name === "new-person") { setModalPrefill(r.prefill || null); setModal("new-person"); return; }
    if (r.name === "new-entity") { setModalPrefill(r.prefill || null); setModal("new-entity"); return; }
    setRouteHistory(h => [...h.slice(-19), route]);
    setRoute(r);
    setHash(r);
    window.scrollTo({ top: 0 });
  };

  // ── URL / deep-linking ──
  // Each view/profile gets a hash URL (#person/ID, #entity/ID, #personas, …) so it
  // can be opened in a new tab (Ctrl/⌘+click) or shared. hashchange (new tab, back
  // button) navigates here; our own go()/goBack() set the hash and suppress the echo.
  useEffect(() => {
    const onHash = () => {
      if (suppressHashRef.current) { suppressHashRef.current = false; return; }
      const r = hashToRoute(location.hash);
      if (r && !sameRoute(r, routeRef.current)) { setRoute(r); window.scrollTo({ top: 0 }); }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  useEffect(() => {
    if (appliedHashRef.current || !dataReady || !data || !userEmail) return;
    appliedHashRef.current = true;
    const r = hashToRoute(location.hash);
    if (r && !sameRoute(r, routeRef.current)) setRoute(r);
  }, [dataReady, data, userEmail]);

  const goBack = (fallback) => {
    if (routeHistory.length === 0) {
      if (fallback) { setRoute(fallback); setQuery(""); window.scrollTo({ top: 0 }); }
      return;
    }
    const prev = routeHistory[routeHistory.length - 1];
    setRouteHistory(h => h.slice(0, -1));
    setRoute(prev);
    setHash(prev);
    setQuery("");
    window.scrollTo({ top: 0 });
  };

  const allTasksFlat = data ? Object.values(data.tasks || {}).flat() : [];
  const pendingTasks = allTasksFlat.filter(t => !t.done).length;
  const overdueCount = allTasksFlat.filter(t => t.due && !t.done && t.due < new Date().toISOString().slice(0, 10)).length;
  const completedGoals = data ? (data.goals || []).filter(g => {
    if (g.archived) return false;
    const GOAL_METRICS = window.GOAL_METRICS || [];
    const metric = GOAL_METRICS.find(m => m.id === g.metric);
    return metric && metric.compute(data) >= g.target;
  }).length : 0;
  const totalDups = dupPairs.filter(p => !p.dismissed).length + entityDupPairs.filter(p => !p.dismissed).length;
  // Ids that are in a PENDING duplicate pair (auto-detected OR manually marked) — used
  // so the "Revisar duplicado" task shows on a profile even when the pair was flagged
  // manually (different name/email/phone).
  const dupPersonaIds = React.useMemo(() => { const s = new Set(); (dupPairs || []).forEach(p => { if (!p.dismissed) { s.add(p.idA); s.add(p.idB); } }); return s; }, [dupPairs]);
  const dupEntityIds = React.useMemo(() => { const s = new Set(); (entityDupPairs || []).forEach(p => { if (!p.dismissed) { s.add(p.idA); s.add(p.idB); } }); return s; }, [entityDupPairs]);
  const counts = data ? { personas: data.personas.length, entities: data.entities.length, dups: totalDups, pendingTasks: pendingTasks || null, overdueCount, projects: (data.projects || []).length || null, completedGoals: completedGoals || null } : {};

  const addComment = (targetId, text) => {
    setData(d => {
      const next = { ...d, comments: { ...d.comments } };
      const list = next.comments[targetId] ? [...next.comments[targetId]] : [];
      list.unshift({ author: userEmail || "Usuario", date: new Date().toISOString().slice(0, 10), text });
      next.comments[targetId] = list;
      return next;
    });
  };

  const handleSavePerson = (form) => {
    const id = "p" + Date.now();
    const tags = form.tags ? form.tags.split(",").map(s => s.trim()).filter(Boolean) : [];
    const palette = ["#2F6BFF", "#0E7C66", "#B45309", "#7C3AED", "#BE185D", "#0369A1", "#15803D"];
    const color = palette[(form.first.charCodeAt(0) || 0) % palette.length];
    const newP = {
      id, first: form.first, last: form.last,
      role: form.role, roleOther: form.roleOther,
      emails: form.emails || [], phones: form.phones || [], email: (form.emails || [])[0]?.value || "", phone: (form.phones || [])[0]?.value || "",
      address: form.address, addressLabel: form.addressLabel || "domicilio", zip: form.zip, city: form.city, state: form.state, country: form.country,
      lat: 0, lng: 0,
      website: form.website, social: form.social,
      entities: form.entities.map(le => ({ id: le.id, role: le.role, roleOther: le.roleOther })),
      tags, language: form.language,
      gender: form.gender || "",
      status: form.stage === "inactivo" ? "inactivo" : "activo",
      stage: form.stage || "nuevo",
      source: form.source || "",
      nextAction: form.nextAction || "",
      birthday: form.birthday, lastContact: form.lastContact,
      color,
      uid: computeUID(id),
      _localSavedAt: new Date().toISOString(),
    };
    const createdAt = new Date().toISOString();
    setData(d => {
      const next = { ...d, personas: [newP, ...d.personas] };
      const pairs = findDuplicatePairs(next.personas, dupPairs);
      if (pairs.length > 0) {
        setDupPairs(prev => { const existing = new Set(prev.map(p => p.idA+"|"+p.idB)); return [...prev, ...pairs.filter(p => !existing.has(p.idA+"|"+p.idB))]; });
      }
      next.changelog = { ...(next.changelog || {}), [id]: [{ id: "cl" + id, date: createdAt, author: userEmail || "Usuario", changes: [{ field: "record", type: "created" }] }] };
      return next;
    });
    window.AIRTABLE.savePersona(newP, data.entities)
      .then(atId => { if (atId) setData(d => ({ ...d, personas: d.personas.map(p => p.id === id ? { ...p, _atId: atId } : p) })); })
      .catch(console.warn);
    setModal(null);
    setRoute({ name: "person", id });
  };

  const handleSaveEntity = (form) => {
    const id = "e" + Date.now();
    const tags = form.tags ? form.tags.split(",").map(s => s.trim()).filter(Boolean) : [];
    const newE = {
      id, name: form.name, type: form.type, denominacion: form.denominacion || "",
      emails: form.emails || [], phones: form.phones || [], email: (form.emails || [])[0]?.value || "", phone: (form.phones || [])[0]?.value || "",
      address: form.address, zip: form.zip, city: form.city, state: form.state, country: form.country,
      lat: 0, lng: 0,
      website: form.website, social: form.social,
      size: form.size ? parseInt(form.size) : null,
      founded: form.founded, parent: form.parent || null,
      schedule: form.schedule || [],
      language: form.language || "es",
      tags, status: "activo", uid: computeUID(id),
      _localSavedAt: new Date().toISOString(),
    };
    const createdAtE = new Date().toISOString();
    setData(d => {
      const next = { ...d, entities: [newE, ...d.entities] };
      next.changelog = { ...(next.changelog || {}), [id]: [{ id: "cl" + id, date: createdAtE, author: userEmail || "Usuario", changes: [{ field: "record", type: "created" }] }] };
      return next;
    });
    window.AIRTABLE.saveEntity(newE, data.entities)
      .then(atId => { if (atId) setData(d => ({ ...d, entities: d.entities.map(e => e.id === id ? { ...e, _atId: atId } : e) })); })
      .catch(console.warn);
    setModal(null);
    setRoute({ name: "entity", id });
  };

  const handleImportPersonas = (imported) => {
    setData(d => {
      const next = { ...d, personas: [...imported, ...d.personas] };
      const pairs = findDuplicatePairs(next.personas, dupPairs);
      if (pairs.length > 0) {
        setDupPairs(prev => { const existing = new Set(prev.map(p => p.idA+"|"+p.idB)); return [...prev, ...pairs.filter(p => !existing.has(p.idA+"|"+p.idB))]; });
        setRoute({ name: "duplicates" });
        window.scrollTo({ top: 0 });
      }
      return next;
    });
  };

  const handleImportEntities = (imported) => {
    setData(d => ({ ...d, entities: [...imported, ...d.entities] }));
  };

  const handleUpdatePerson = (id, updates) => {
    const localSavedAt = new Date().toISOString();
    const current = data.personas.find(p => p.id === id);
    const changes = current ? computeChanges(current, updates, PERSON_FIELD_LABELS) : [];
    const baseLog = (current && current.changelog) || data.changelog[id] || [];
    const newLog = changes.length > 0
      ? [{ id: "cl" + Date.now(), date: new Date().toISOString(), author: userEmail || "Usuario", changes }, ...baseLog]
      : baseLog;
    // changelog now lives INSIDE the record → savePersona persists it in _data, so the
    // history survives reloads/clean-slate and is shared with every device.
    const updated = current ? { ...current, ...updates, changelog: newLog, _localSavedAt: localSavedAt } : null;
    setData(d => {
      const cl = changes.length > 0 ? { ...d.changelog, [id]: newLog } : d.changelog;
      return { ...d, personas: d.personas.map(p => p.id === id ? { ...p, ...updates, changelog: newLog, _localSavedAt: localSavedAt } : p), changelog: cl };
    });
    if (updated) {
      window.AIRTABLE.savePersona(updated, data.entities)
        .then(atId => { if (atId) setData(d => ({ ...d, personas: d.personas.map(p => p.id === id ? { ...p, _atId: atId } : p) })); })
        .catch(console.warn);
    }
  };

  const handleUpdateEntity = (id, updates) => {
    const localSavedAt = new Date().toISOString();
    const current = data.entities.find(e => e.id === id);
    const changes = current ? computeChanges(current, updates, ENTITY_FIELD_LABELS) : [];
    const baseLog = (current && current.changelog) || data.changelog[id] || [];
    const newLog = changes.length > 0
      ? [{ id: "cl" + Date.now(), date: new Date().toISOString(), author: userEmail || "Usuario", changes }, ...baseLog]
      : baseLog;
    const updated = current ? { ...current, ...updates, changelog: newLog, _localSavedAt: localSavedAt } : null;
    setData(d => {
      const cl = changes.length > 0 ? { ...d.changelog, [id]: newLog } : d.changelog;
      return { ...d, entities: d.entities.map(e => e.id === id ? { ...e, ...updates, changelog: newLog, _localSavedAt: localSavedAt } : e), changelog: cl };
    });
    if (updated) {
      window.AIRTABLE.saveEntity(updated, data.entities)
        .then(atId => { if (atId) setData(d => ({ ...d, entities: d.entities.map(e => e.id === id ? { ...e, _atId: atId } : e) })); })
        .catch(console.warn);
    }
  };

  const handleEditPerson = (id) => { setEditingId(id); setModal("edit-person"); };
  const handleSaveEditPerson = (form) => {
    const tags = form.tags ? form.tags.split(",").map(s => s.trim()).filter(Boolean) : [];
    const status = form.stage === "inactivo" ? "inactivo" : "activo";
    const updates = { ...form, tags, status, entities: form.entities.map(le => ({ id: le.id, role: le.role, roleOther: le.roleOther })), email: (form.emails || [])[0]?.value || "", phone: (form.phones || [])[0]?.value || "" };
    handleUpdatePerson(editingId, updates);
    setModal(null);
    setEditingId(null);
  };
  const handleDeletePerson = (id) => {
    if (!confirm(lang === "es" ? "Â¿Eliminar esta persona? Esta acciÃ³n no se puede deshacer." : "Delete this person? This cannot be undone.")) return;
    const cfg = window.AIRTABLE.getConfig();
    if (cfg.pat && cfg.baseId) window.AIRTABLE.deleteRecord(cfg.personasTable || "PERSONAS PROMEZA CRM", id).catch(console.warn); recordDeletion(id);
    setData(d => ({ ...d, personas: d.personas.filter(p => p.id !== id) }));
    setRoute({ name: "personas" });
  };

  const handleEditEntity = (id) => { setEditingId(id); setModal("edit-entity"); };
  const handleSaveEditEntity = (form) => {
    const tags = form.tags ? form.tags.split(",").map(s => s.trim()).filter(Boolean) : [];
    handleUpdateEntity(editingId, { ...form, tags, size: form.size ? parseInt(form.size) : null, email: (form.emails || [])[0]?.value || "", phone: (form.phones || [])[0]?.value || "" });
    setModal(null);
    setEditingId(null);
  };
  const handleDeleteEntity = (id) => {
    if (!confirm(lang === "es" ? "Â¿Eliminar esta entidad? Esta acciÃ³n no se puede deshacer." : "Delete this entity? This cannot be undone.")) return;
    const cfg = window.AIRTABLE.getConfig();
    if (cfg.pat && cfg.baseId) window.AIRTABLE.deleteRecord(cfg.entidadesTable || "ENTIDADES PROMEZA CRM", id).catch(console.warn); recordDeletion(id);
    setData(d => ({ ...d, entities: d.entities.filter(e => e.id !== id) }));
    setRoute({ name: "entities" });
  };

  const addInteraction = (personId, interaction) => {
    setData(d => ({
      ...d,
      interactions: { ...d.interactions, [personId]: [interaction, ...(d.interactions[personId] || [])] },
    }));
  };

  const deleteInteraction = (personId, id) => {
    setData(d => ({
      ...d,
      interactions: { ...d.interactions, [personId]: (d.interactions[personId] || []).filter(i => i.id !== id) },
    }));
  };

  const addTask = (personId, task) => {
    setData(d => ({
      ...d,
      tasks: { ...d.tasks, [personId]: [...(d.tasks[personId] || []), task] },
    }));
  };

  const toggleTask = (personId, id) => {
    setData(d => ({
      ...d,
      tasks: { ...d.tasks, [personId]: (d.tasks[personId] || []).map(tk => tk.id === id ? { ...tk, done: !tk.done } : tk) },
    }));
  };

  const deleteTask = (personId, id) => {
    setData(d => ({
      ...d,
      tasks: { ...d.tasks, [personId]: (d.tasks[personId] || []).filter(tk => tk.id !== id) },
    }));
  };

  // Mark the "possible duplicate" task as resolved (reviewed). `resolved=false` re-opens
  // it. The flag lives on the record (_data) so it persists and syncs across devices.
  const handleResolveDuplicate = (personId, resolved = true) => {
    const cur = data.personas.find(p => p.id === personId);
    if (!cur) return;
    const updated = { ...cur, dupResolved: resolved, _localSavedAt: new Date().toISOString() };
    setData(d => ({ ...d, personas: d.personas.map(p => p.id === personId ? updated : p) }));
    window.AIRTABLE.savePersona(updated, data.entities).catch(console.warn);
  };
  const handleResolveEntityDuplicate = (entityId, resolved = true) => {
    const cur = data.entities.find(e => e.id === entityId);
    if (!cur) return;
    const updated = { ...cur, dupResolved: resolved, _localSavedAt: new Date().toISOString() };
    setData(d => ({ ...d, entities: d.entities.map(e => e.id === entityId ? updated : e) }));
    window.AIRTABLE.saveEntity(updated, data.entities).catch(console.warn);
  };

  const handleBulkAddTask = (personId, task) => {
    addTask(personId, task);
  };

  const addAttachment = (targetId, attachment) => {
    setData(d => ({
      ...d,
      attachments: { ...d.attachments, [targetId]: [...(d.attachments[targetId] || []), attachment] },
    }));
  };

  const deleteAttachment = (targetId, attId) => {
    setData(d => ({
      ...d,
      attachments: { ...d.attachments, [targetId]: (d.attachments[targetId] || []).filter(a => a.id !== attId) },
    }));
  };

  const addProject = (form) => {
    const id = "proj" + Date.now();
    setData(d => ({ ...d, projects: [{ id, ...form, members: [], createdAt: new Date().toISOString() }, ...d.projects] }));
    setRoute({ name: "project", id });
  };

  const updateProject = (id, updates) => {
    setData(d => ({ ...d, projects: d.projects.map(p => p.id === id ? { ...p, ...updates } : p) }));
  };

  const deleteProject = (id) => {
    setData(d => ({ ...d, projects: d.projects.filter(p => p.id !== id) }));
  };

  const addProjectMember = (projectId, member) => {
    setData(d => ({ ...d, projects: d.projects.map(p => p.id === projectId ? { ...p, members: [...(p.members || []), member] } : p) }));
  };

  const removeProjectMember = (projectId, personaId) => {
    setData(d => ({ ...d, projects: d.projects.map(p => p.id === projectId ? { ...p, members: (p.members || []).filter(m => m.personaId !== personaId) } : p) }));
  };

  const saveCampaign = (campaign) => {
    setData(d => ({ ...d, campaigns: [campaign, ...(d.campaigns || [])] }));
  };

  const addCalendarEvent = (evt) => {
    setData(d => ({ ...d, calendarEvents: [...(d.calendarEvents || []), { id: "cal" + Date.now(), ...evt }] }));
  };
  const deleteCalendarEvent = (id) => {
    setData(d => ({ ...d, calendarEvents: (d.calendarEvents || []).filter(e => e.id !== id) }));
  };

  const addGoal = (goal) => {
    const GOAL_METRICS = window.GOAL_METRICS || [];
    const metric = GOAL_METRICS.find(m => m.id === goal.metric);
    const initialValue = metric ? metric.compute(data) : 0;
    setData(d => ({ ...d, goals: [{ id: "goal" + Date.now(), ...goal, initialValue, createdAt: new Date().toISOString(), archived: false }, ...(d.goals || [])] }));
  };

  const updateGoal = (id, updates) => {
    setData(d => ({ ...d, goals: (d.goals || []).map(g => g.id === id ? { ...g, ...updates } : g) }));
  };

  const deleteGoal = (id) => {
    setData(d => ({ ...d, goals: (d.goals || []).filter(g => g.id !== id) }));
  };

  const handleBulkDeletePersonas = (ids) => {
    if (!confirm(lang === "es" ? `Â¿Eliminar ${ids.size} personas seleccionadas? Esta acciÃ³n no se puede deshacer.` : `Delete ${ids.size} selected people? This cannot be undone.`)) return;
    setData(d => ({ ...d, personas: d.personas.filter(p => !ids.has(p.id)) }));
  };

  const handleBulkUpdatePersonas = (ids, updates) => {
    setData(d => ({ ...d, personas: d.personas.map(p => ids.has(p.id) ? { ...p, ...updates } : p) }));
  };

  const addSegment = (segment) => {
    setData(d => ({ ...d, segments: [...(d.segments || []), { ...segment, id: "seg" + Date.now() }] }));
  };
  const deleteSegment = (id) => {
    setData(d => ({ ...d, segments: (d.segments || []).filter(s => s.id !== id) }));
  };

  const handleBulkAddTagPersonas = (ids, tag) => {
    setData(d => ({
      ...d,
      personas: d.personas.map(p => ids.has(p.id) ? { ...p, tags: [...new Set([...(p.tags || []), tag])] } : p),
    }));
  };

  // Persistent, cross-device action log (merges etc.) stored in the shared ESTADO
  // table (key "actionLog"). The per-record changelog is local-only and wiped on a
  // clean-slate reload; this survives and is visible from any device via "Historial".
  const logAction = async (type, detail) => {
    try {
      const cur = (await window.AIRTABLE.loadAppState("actionLog")) || [];
      cur.unshift({ ts: new Date().toISOString(), type, detail: detail || "", by: userEmail || "Usuario" });
      if (cur.length > 400) cur.length = 400;
      await window.AIRTABLE.saveAppState("actionLog", cur);
    } catch (e) { console.warn("logAction", e); }
  };
  // Record a deletion in the shared tombstone list so it propagates to every device.
  const recordDeletion = (id) => {
    if (!id) return;
    try { deletedIdsRef.current.add(id); } catch (e) {}
    (async () => {
      try {
        const cur = (await window.AIRTABLE.loadAppState("deletedIds")) || [];
        if (!cur.includes(id)) { cur.unshift(id); if (cur.length > 8000) cur.length = 8000; await window.AIRTABLE.saveAppState("deletedIds", cur); }
      } catch (e) { console.warn("recordDeletion", e); }
    })();
  };
  const openHistory = async () => {
    setHistoryOpen(true); setHistoryLog(null);
    try { setHistoryLog((await window.AIRTABLE.loadAppState("actionLog")) || []); }
    catch (e) { setHistoryLog([]); }
  };

  const handleMergeWithData = (keepId, dropId, mergedData) => {
    const _drop0 = data.personas.find(p => p.id === dropId);
    const _dropName0 = _drop0 ? (_drop0.first + " " + _drop0.last) : dropId;
    const _keep0 = data.personas.find(p => p.id === keepId);
    const mergeEntry = { id: "cl" + Date.now(), date: new Date().toISOString(), author: userEmail || "Usuario", changes: [{ field: "record", type: "merge", with: _dropName0 }] };
    const newLog = [mergeEntry, ...((_keep0 && _keep0.changelog) || data.changelog[keepId] || [])];
    // Stamp _localSavedAt so a sync landing before the Airtable write completes keeps
    // the merged version; carry the changelog INSIDE the record so it persists.
    const mergedKeep = { ...mergedData, changelog: newLog, _localSavedAt: new Date().toISOString() };
    setData(d => {
      const mergedComments = [
        ...(d.comments[keepId] || []),
        ...(d.comments[dropId] || []),
      ].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
      const newComments = { ...d.comments, [keepId]: mergedComments };
      delete newComments[dropId];
      const cl = { ...d.changelog, [keepId]: newLog };
      return {
        ...d,
        personas: d.personas.map(p => p.id === keepId ? mergedKeep : p).filter(p => p.id !== dropId),
        comments: newComments,
        changelog: cl,
      };
    });
    setDupPairs(ps => ps
      .map(p => (p.idA === keepId && p.idB === dropId) || (p.idA === dropId && p.idB === keepId) ? { ...p, dismissed: true } : p)
      .filter(p => p.idA !== dropId && p.idB !== dropId)
    );
    if (route.id === dropId) setRoute({ name: "person", id: keepId });
    // Persist the merge to Airtable: save the merged keeper, DELETE the duplicate.
    // Without this the merge is local-only and the next full sync re-adds the dropped
    // record (it still exists in Airtable) and reverts the keeper → "queda todo igual".
    window.AIRTABLE.savePersona(mergedKeep, data.entities).catch(console.warn);
    const cfg = window.AIRTABLE.getConfig();
    if (cfg.pat && cfg.baseId) window.AIRTABLE.deleteRecord(cfg.personasTable || "PERSONAS PROMEZA CRM", dropId).catch(console.warn); recordDeletion(dropId);
    const _dw = data.personas.find(p => p.id === dropId) || {};
    logAction("merge", `Fusionó contacto "${((_dw.first || "") + " " + (_dw.last || "")).trim()}" → "${((mergedData.first || "") + " " + (mergedData.last || "")).trim()}"`);
  };

  const handleMergePersonas = (idA, idB) => {
    const keep0 = data.personas.find(p => p.id === idA);
    const drop = data.personas.find(p => p.id === idB);
    if (!keep0 || !drop) return;
    const dropName = drop.first + " " + drop.last;
    const merged = {
      ...keep0,
      email: keep0.email || drop.email || "",
      phone: keep0.phone || drop.phone || "",
      address: keep0.address || drop.address || "",
      zip: keep0.zip || drop.zip || "",
      city: keep0.city || drop.city || "",
      state: keep0.state || drop.state || "",
      country: keep0.country || drop.country || "",
      website: keep0.website || drop.website || "",
      birthday: keep0.birthday || drop.birthday || "",
      lastContact: (keep0.lastContact || "") >= (drop.lastContact || "") ? keep0.lastContact : drop.lastContact,
      tags: [...new Set([...(keep0.tags || []), ...(drop.tags || [])])],
      entities: [
        ...(keep0.entities || []),
        ...(drop.entities || []).filter(de => !(keep0.entities || []).some(ke => ke.id === de.id)),
      ],
      social: {
        ig: keep0.social?.ig || drop.social?.ig || "",
        fb: keep0.social?.fb || drop.social?.fb || "",
        tiktok: keep0.social?.tiktok || drop.social?.tiktok || "",
        x: keep0.social?.x || drop.social?.x || "",
      },
      _localSavedAt: new Date().toISOString(),
    };
    const mergeEntry = { id: "cl" + Date.now(), date: new Date().toISOString(), author: userEmail || "Usuario", changes: [{ field: "record", type: "merge", with: dropName }] };
    const newLog = [mergeEntry, ...(keep0.changelog || data.changelog[idA] || [])];
    merged.changelog = newLog; // persist merge in the record's own history
    setData(d => {
      const mergedComments = [
        ...(d.comments[idA] || []),
        ...(d.comments[idB] || []),
      ].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
      const newComments = { ...d.comments, [idA]: mergedComments };
      delete newComments[idB];
      const cl = { ...d.changelog, [idA]: newLog };
      return {
        ...d,
        personas: d.personas.map(p => p.id === idA ? merged : p).filter(p => p.id !== idB),
        comments: newComments,
        changelog: cl,
      };
    });
    setDupPairs(ps => ps
      .map(p => (p.idA === idA && p.idB === idB) || (p.idA === idB && p.idB === idA) ? { ...p, dismissed: true } : p)
      .filter(p => p.idA !== idB && p.idB !== idB)
    );
    if (route.id === idB) setRoute({ name: "person", id: idA });
    // Persist to Airtable so the merge sticks (otherwise the next full sync re-adds
    // the dropped record and reverts the keeper → the user saw "queda todo igual").
    window.AIRTABLE.savePersona(merged, data.entities).catch(console.warn);
    const cfg = window.AIRTABLE.getConfig();
    if (cfg.pat && cfg.baseId) window.AIRTABLE.deleteRecord(cfg.personasTable || "PERSONAS PROMEZA CRM", idB).catch(console.warn); recordDeletion(idB);
    logAction("merge", `Fusionó contacto "${dropName.trim()}" → "${((keep0.first || "") + " " + (keep0.last || "")).trim()}"`);
  };

  const handleDismissDup = (pair) => {
    setDupPairs(ps => ps.map(p =>
      p.idA === pair.idA && p.idB === pair.idB ? { ...p, dismissed: true } : p
    ));
  };

  const handleUndismissDup = (pair) => {
    setDupPairs(ps => ps.map(p =>
      p.idA === pair.idA && p.idB === pair.idB ? { ...p, dismissed: false } : p
    ));
  };

  // ── Entity (medios) duplicate merge ──
  const handleMergeEntities = (idA, idB) => {
    const keep0 = data.entities.find(e => e.id === idA);
    const drop = data.entities.find(e => e.id === idB);
    if (!keep0 || !drop) return;
    const merged = {
      ...keep0,
      email: keep0.email || drop.email || "",
      phone: keep0.phone || drop.phone || "",
      address: keep0.address || drop.address || "",
      zip: keep0.zip || drop.zip || "",
      city: keep0.city || drop.city || "",
      state: keep0.state || drop.state || "",
      country: keep0.country || drop.country || "",
      website: keep0.website || drop.website || "",
      denominacion: keep0.denominacion || drop.denominacion || "",
      type: (keep0.type && keep0.type !== "otro") ? keep0.type : (drop.type || keep0.type || "otro"),
      tags: [...new Set([...(keep0.tags || []), ...(drop.tags || [])])],
      social: {
        ig: keep0.social?.ig || drop.social?.ig || "",
        fb: keep0.social?.fb || drop.social?.fb || "",
        tiktok: keep0.social?.tiktok || drop.social?.tiktok || "",
        x: keep0.social?.x || drop.social?.x || "",
      },
      _localSavedAt: new Date().toISOString(),
    };
    // Repoint any persona linked to the dropped entity → the kept entity, and remember
    // which personas changed so we can persist them.
    const repointed = [];
    (data.personas || []).forEach(p => {
      if (!(p.entities || []).some(le => le && le.id === idB)) return;
      const ents = [];
      (p.entities || []).forEach(le => {
        const nid = le.id === idB ? idA : le.id;
        if (!ents.some(x => x.id === nid)) ents.push({ ...le, id: nid });
      });
      repointed.push({ ...p, entities: ents, _localSavedAt: new Date().toISOString() });
    });
    const repointMap = Object.fromEntries(repointed.map(p => [p.id, p]));
    const entMergeEntry = { id: "cl" + Date.now(), date: new Date().toISOString(), author: userEmail || "Usuario", changes: [{ field: "record", type: "merge", with: drop.name }] };
    const entNewLog = [entMergeEntry, ...(keep0.changelog || data.changelog[idA] || [])];
    merged.changelog = entNewLog; // persist merge in the entity's own history
    setData(d => ({
      ...d,
      entities: d.entities.map(e => e.id === idA ? merged : e).filter(e => e.id !== idB),
      personas: d.personas.map(p => repointMap[p.id] || p),
      changelog: { ...d.changelog, [idA]: entNewLog },
    }));
    setEntityDupPairs(ps => ps
      .map(p => (p.idA === idA && p.idB === idB) || (p.idA === idB && p.idB === idA) ? { ...p, dismissed: true } : p)
      .filter(p => p.idA !== idB && p.idB !== idB)
    );
    if (route.name === "entity" && route.id === idB) setRoute({ name: "entity", id: idA });
    // Persist: save merged keeper + repointed personas, DELETE the dropped entity.
    window.AIRTABLE.saveEntity(merged, data.entities).catch(console.warn);
    repointed.forEach(p => window.AIRTABLE.savePersona(p, data.entities).catch(console.warn));
    const cfg = window.AIRTABLE.getConfig();
    if (cfg.pat && cfg.baseId) window.AIRTABLE.deleteRecord(cfg.entidadesTable || "ENTIDADES PROMEZA CRM", idB).catch(console.warn); recordDeletion(idB);
    logAction("merge", `Fusionó medio "${drop.name}" → "${keep0.name}"`);
  };

  // Merge two entities using the field-by-field data chosen in EntityMergeEditor.
  // keepId is the entity that stays; dropId is deleted; mergedData holds the picked values.
  const handleMergeEntitiesWithData = (keepId, dropId, mergedData) => {
    const keep0 = data.entities.find(e => e.id === keepId);
    const drop = data.entities.find(e => e.id === dropId);
    if (!keep0 || !drop) return;
    const entMergeEntry = { id: "cl" + Date.now(), date: new Date().toISOString(), author: userEmail || "Usuario", changes: [{ field: "record", type: "merge", with: drop.name }] };
    const entNewLog = [entMergeEntry, ...(keep0.changelog || data.changelog[keepId] || [])];
    const merged = { ...mergedData, id: keepId, changelog: entNewLog, _localSavedAt: new Date().toISOString() };
    // Repoint personas linked to the dropped entity → the kept one.
    const repointed = [];
    (data.personas || []).forEach(p => {
      if (!(p.entities || []).some(le => le && le.id === dropId)) return;
      const ents = [];
      (p.entities || []).forEach(le => { const nid = le.id === dropId ? keepId : le.id; if (!ents.some(x => x.id === nid)) ents.push({ ...le, id: nid }); });
      repointed.push({ ...p, entities: ents, _localSavedAt: new Date().toISOString() });
    });
    const repointMap = Object.fromEntries(repointed.map(p => [p.id, p]));
    setData(d => ({
      ...d,
      entities: d.entities.map(e => e.id === keepId ? merged : e).filter(e => e.id !== dropId),
      personas: d.personas.map(p => repointMap[p.id] || p),
      changelog: { ...d.changelog, [keepId]: entNewLog },
    }));
    setEntityDupPairs(ps => ps
      .map(p => (p.idA === keepId && p.idB === dropId) || (p.idA === dropId && p.idB === keepId) ? { ...p, dismissed: true } : p)
      .filter(p => p.idA !== dropId && p.idB !== dropId)
    );
    if (route.name === "entity" && route.id === dropId) setRoute({ name: "entity", id: keepId });
    window.AIRTABLE.saveEntity(merged, data.entities).catch(console.warn);
    repointed.forEach(p => window.AIRTABLE.savePersona(p, data.entities).catch(console.warn));
    const cfg = window.AIRTABLE.getConfig();
    if (cfg.pat && cfg.baseId) window.AIRTABLE.deleteRecord(cfg.entidadesTable || "ENTIDADES PROMEZA CRM", dropId).catch(console.warn); recordDeletion(dropId);
    logAction("merge", `Fusionó medio "${drop.name}" → "${merged.name}"`);
  };
  const handleDismissEntityDup = (pair) => {
    setEntityDupPairs(ps => ps.map(p => p.idA === pair.idA && p.idB === pair.idB ? { ...p, dismissed: true } : p));
  };
  const handleUndismissEntityDup = (pair) => {
    setEntityDupPairs(ps => ps.map(p => p.idA === pair.idA && p.idB === pair.idB ? { ...p, dismissed: false } : p));
  };

  const handleScanAll = () => {
    const pairs = findDuplicatePairs(data.personas, dupPairs);
    if (pairs.length > 0) {
      setDupPairs(prev => {
        const existing = new Set(prev.map(p => p.idA + "|" + p.idB));
        return [...prev, ...pairs.filter(p => !existing.has(p.idA + "|" + p.idB))];
      });
    }
    setRoute({ name: "duplicates" });
    window.scrollTo({ top: 0 });
  };

  const handleCreateManualDup = (idA, idB) => {
    if (!idA || !idB || idA === idB) return;
    const key = [idA, idB].sort().join("|");
    setDupPairs(prev => {
      if (prev.some(p => [p.idA, p.idB].sort().join("|") === key)) {
        // Pair already exists — un-dismiss it so it shows for review again
        return prev.map(p => ([p.idA, p.idB].sort().join("|") === key ? { ...p, dismissed: false } : p));
      }
      return [...prev, { idA, idB, score: 5, dismissed: false, manual: true }];
    });
  };

  const handleCreateManualEntityDup = (idA, idB) => {
    if (!idA || !idB || idA === idB) return;
    const key = [idA, idB].sort().join("|");
    setEntityDupPairs(prev => {
      if (prev.some(p => [p.idA, p.idB].sort().join("|") === key)) {
        return prev.map(p => ([p.idA, p.idB].sort().join("|") === key ? { ...p, dismissed: false } : p));
      }
      return [...prev, { idA, idB, score: 5, dismissed: false, kind: "entity", manual: true }];
    });
  };

  const handleCreateDemo = () => {
    const source = data.personas[0];
    if (!source) return;
    const demoId = "demo-" + Date.now();
    const demo = {
      ...source, id: demoId,
      last: source.last + " (copia)",
      city: source.city,
      status: "activo",
    };
    setData(d => {
      const next = { ...d, personas: [demo, ...d.personas] };
      const pairs = findDuplicatePairs(next.personas, dupPairs);
      if (pairs.length > 0) {
        setDupPairs(prev => {
          const existing = new Set(prev.map(p => p.idA + "|" + p.idB));
          return [...prev, ...pairs.filter(p => !existing.has(p.idA + "|" + p.idB))];
        });
      }
      return next;
    });
  };

  // Not ready yet
  if (!authChecked) return null;

  // Not logged in
  if (!userEmail) {
    return <AuthScreen onLogin={(email) => { setUserEmail(email); }} />;
  }

  // Session valid but sessionStorage key missing (page reload after tab close)
  if (needsUnlock) {
    return <UnlockScreen
      email={userEmail}
      onUnlock={async (newEmail) => {
        if (newEmail && newEmail !== userEmail) setUserEmail(newEmail);
        const key = await window.CryptoUtils.loadSessionKey();
        setCryptoKey(key);
        setNeedsUnlock(false);
        setDataReady(false);
        // Trigger re-init of data by toggling userEmail briefly isn't needed;
        // instead reload data directly
        try {
          const json = key ? await loadDecrypted(key) : null;
          if (json) {
            const parsed = JSON.parse(json);
            setData(processLoadedData(parsed));
          } else {
            const old = localStorage.getItem("promeza_data");
            if (old && key) {
              const parsed = JSON.parse(old);
              setData(processLoadedData(parsed));
              localStorage.removeItem("promeza_data");
            } else {
              setData(freshData());
            }
          }
        } catch (err) {
          console.error("Unlock data load error:", err);
          setData(freshData());
        }
        setDataReady(true);
      }}
      onLogout={() => { clearSession(); (window.CryptoUtils?.clearSessionKey ? window.CryptoUtils.clearSessionKey() : (localStorage.removeItem("promeza_sk"), sessionStorage.removeItem("promeza_sk"))); setUserEmail(null); }}
    />;
  }

  // Loading encrypted data
  if (!dataReady || !data) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", flexDirection: "column", gap: 12, color: "var(--ink-3)", fontSize: 13 }}>
        <div style={{ width: 32, height: 32, border: "3px solid var(--accent)", borderTopColor: "transparent", borderRadius: "50%", animation: "spin .7s linear infinite" }} />
        Cargando datos segurosâ€¦
      </div>
    );
  }

  let view;
  switch (route.name) {
    case "home": view = <ViewErrorBoundary key="home"><Home t={t} lang={lang} data={data} go={go} /></ViewErrorBoundary>; break;
    case "personas": view = <PersonasList t={t} lang={lang} data={data} go={go} route={route} onImportPersonas={handleImportPersonas} globalQ={query} onBulkDelete={handleBulkDeletePersonas} onBulkUpdateStatus={handleBulkUpdatePersonas} onBulkAddTag={handleBulkAddTagPersonas} onBulkAddTask={handleBulkAddTask} segments={data.segments || []} onAddSegment={addSegment} onDeleteSegment={deleteSegment} users={window.PROMEZA_USERS || []} currentUser={userEmail} />; break;
    case "pipeline": view = <PipelineView t={t} lang={lang} data={data} go={go} onUpdatePerson={handleUpdatePerson} />; break;
    case "entities": view = <EntitiesList t={t} lang={lang} data={data} go={go} route={route} onImportEntities={handleImportEntities} globalQ={query} />; break;
    case "person": view = <ViewErrorBoundary key={"person-" + route.id}><PersonProfile id={route.id} t={t} lang={lang} data={data} go={go} goBack={goBack} addComment={addComment}
      onUpdatePerson={handleUpdatePerson} onEditPerson={handleEditPerson} onDeletePerson={handleDeletePerson}
      interactions={data.interactions[route.id] || []}
      onAddInteraction={(item) => addInteraction(route.id, item)}
      onDeleteInteraction={(id) => deleteInteraction(route.id, id)}
      tasks={data.tasks[route.id] || []}
      onAddTask={(task) => addTask(route.id, task)}
      onToggleTask={(id) => toggleTask(route.id, id)}
      onDeleteTask={(id) => deleteTask(route.id, id)}
      onResolveDuplicate={(resolved) => handleResolveDuplicate(route.id, resolved)}
      inDupPair={dupPersonaIds.has(route.id)}
      changelog={data.changelog[route.id] || []}
      users={window.PROMEZA_USERS || []} currentUser={userEmail}
      attachments={data.attachments[route.id] || []}
      onAddAttachment={(att) => addAttachment(route.id, att)}
      onDeleteAttachment={(attId) => deleteAttachment(route.id, attId)}
    /></ViewErrorBoundary>; break;
    case "tasks": view = <GlobalTasksView t={t} lang={lang} data={data} go={go}
      tasks={data.tasks} users={window.PROMEZA_USERS || []} currentUser={userEmail}
      onAddTask={addTask} onToggleTask={toggleTask} onDeleteTask={deleteTask}
      dupCount={totalDups} dupPairs={dupPairs} entityDupPairs={entityDupPairs}
    />; break;
    case "my-tasks": view = <MyTasksView t={t} lang={lang} data={data} go={go}
      tasks={data.tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask}
      currentUser={userEmail} users={window.PROMEZA_USERS || []}
    />; break;
    case "entity": view = <ViewErrorBoundary key={"entity-" + route.id}><EntityProfile id={route.id} t={t} lang={lang} data={data} go={go} goBack={goBack} addComment={addComment} onUpdateEntity={handleUpdateEntity} onUpdatePerson={handleUpdatePerson} onEditEntity={handleEditEntity} onDeleteEntity={handleDeleteEntity} changelog={data.changelog[route.id] || []} attachments={data.attachments[route.id] || []} onAddAttachment={(att) => addAttachment(route.id, att)} onDeleteAttachment={(attId) => deleteAttachment(route.id, attId)} tasks={data.tasks[route.id] || []} onAddTask={(task) => addTask(route.id, task)} onToggleTask={(id) => toggleTask(route.id, id)} onDeleteTask={(id) => deleteTask(route.id, id)} onResolveDuplicate={(resolved) => handleResolveEntityDuplicate(route.id, resolved)} inDupPair={dupEntityIds.has(route.id)} users={window.PROMEZA_USERS || []} currentUser={userEmail} /></ViewErrorBoundary>; break;
    case "projects": view = <ProjectsListView lang={lang} data={data} go={go} onAddProject={addProject} />; break;
    case "project": view = <ProjectDetailView id={route.id} lang={lang} data={data} go={go} onUpdateProject={updateProject} onDeleteProject={deleteProject} onAddMember={addProjectMember} onRemoveMember={removeProjectMember} comments={data.comments[route.id] || []} onAddComment={(projectId, text) => addComment(projectId, text)} attachments={data.attachments[route.id] || []} onAddAttachment={(att) => addAttachment(route.id, att)} onDeleteAttachment={(attId) => deleteAttachment(route.id, attId)} />; break;
    case "campaigns": view = <CampaignsView lang={lang} data={data} go={go} onSaveCampaign={saveCampaign} />; break;
    case "calendar": view = <CalendarView lang={lang} data={data} go={go} onAddCalendarEvent={addCalendarEvent} onDeleteCalendarEvent={deleteCalendarEvent} onAddTask={addTask} />; break;
    case "goals": view = <GoalsView lang={lang} data={data} go={go} onAddGoal={addGoal} onUpdateGoal={updateGoal} onDeleteGoal={deleteGoal} />; break;
    case "county": view = <CountyView t={t} lang={lang} data={data} go={go} />; break;
    case "map": view = <MapPage t={t} lang={lang} data={data} go={go} />; break;
    case "duplicates": view = <DuplicatesPage pairs={dupPairs} entityPairs={entityDupPairs} data={data} onMerge={handleMergePersonas} onMergeWithData={handleMergeWithData} onMergeEntity={handleMergeEntities} onMergeEntityWithData={handleMergeEntitiesWithData} onDismiss={handleDismissDup} onUndismiss={handleUndismissDup} onDismissEntity={handleDismissEntityDup} onUndismissEntity={handleUndismissEntityDup} onScanAll={handleScanAll} onCreateDemo={handleCreateDemo} onCreateManual={handleCreateManualDup} onCreateManualEntity={handleCreateManualEntityDup} onOpenHistory={openHistory} initialSearch={route.q || ""} initialTab={route.tab || ""} t={t} lang={lang} />; break;
    default: view = <Home t={t} lang={lang} data={data} go={go} />;
  }

  return (
    <div className="app">
      {sideOpen && <div className="sidebar-overlay visible" onClick={() => setSideOpen(false)} />}
      <Sidebar route={route} go={go} t={t} counts={counts} mobileOpen={sideOpen} onClose={() => setSideOpen(false)} />
      <Topbar
        t={t} lang={lang} setLang={setLang}
        query={query} setQuery={setQuery}
        onSearchSubmit={() => { if (query.trim() && route.name !== "personas" && route.name !== "entities") setRoute({ name: "personas" }); }}
        onSettings={() => setModal("settings")}
        onLogout={() => { clearSession(); (window.CryptoUtils?.clearSessionKey ? window.CryptoUtils.clearSessionKey() : (localStorage.removeItem("promeza_sk"), sessionStorage.removeItem("promeza_sk"))); if (window.AIRTABLE) window.AIRTABLE.logAccess(userEmail, "Cierre de sesiÃ³n"); setUserEmail(null); }}
        userEmail={userEmail}
        data={data}
        go={go}
        onMenuToggle={() => setSideOpen(v => !v)}
        dupCount={counts.dups}
        onGoBack={goBack}
        canGoBack={routeHistory.length > 0}
        atSyncing={atSyncing}
        onSyncNow={syncFromAirtable}
      />
      {atSyncMsg && (
        <div onClick={() => setAtSyncMsg(null)} style={{
          position: "fixed", bottom: 16, left: "50%", transform: "translateX(-50%)",
          background: atSyncMsg.type === "ok" ? "#166534" : atSyncMsg.type === "warn" ? "#92400e" : "#991b1b",
          color: "#fff", padding: "8px 18px", borderRadius: 20, fontSize: 12.5, fontWeight: 500,
          zIndex: 9999, cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,.25)", maxWidth: "90vw", textAlign: "center",
        }}>
          {atSyncMsg.text}
        </div>
      )}
      <main className="main">{view}</main>

      {modal === "new-person" && (
        <NewPersonForm t={t} lang={lang} data={data} onClose={() => { setModal(null); setModalPrefill(null); }} onSave={handleSavePerson} prefillData={modalPrefill} />
      )}
      {modal === "new-entity" && (
        <NewEntityForm t={t} lang={lang} data={data} onClose={() => setModal(null)} onSave={handleSaveEntity} />
      )}
      {modal === "settings" && (
        <SettingsModal
          t={t} lang={lang} data={data} cryptoKey={cryptoKey}
          onClose={() => setModal(null)}
          onLogout={() => { clearSession(); (window.CryptoUtils?.clearSessionKey ? window.CryptoUtils.clearSessionKey() : (localStorage.removeItem("promeza_sk"), sessionStorage.removeItem("promeza_sk"))); setUserEmail(null); }}
          onRestoreData={setData}
          onForcePull={forcePullFromAirtable}
        />
      )}
      {historyOpen && (
        <div className="modal-veil" onClick={() => setHistoryOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(15,21,48,.45)", display: "grid", placeItems: "center", zIndex: 200, padding: 20 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "var(--bg)", borderRadius: 14, width: "min(640px, 96vw)", maxHeight: "82vh", display: "flex", flexDirection: "column", boxShadow: "var(--shadow-lg)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid var(--line)" }}>
              <div style={{ fontWeight: 800, fontSize: 16 }}>{lang === "es" ? "Historial de fusiones y acciones" : "Merge & action history"}</div>
              <button className="icon-btn" onClick={() => setHistoryOpen(false)}><Icon name="x" /></button>
            </div>
            <div style={{ padding: "12px 20px", overflowY: "auto" }}>
              {historyLog === null && <div className="empty">{lang === "es" ? "Cargando…" : "Loading…"}</div>}
              {historyLog !== null && historyLog.length === 0 && <div className="empty">{lang === "es" ? "Aún no hay acciones registradas. Las fusiones que hagas de ahora en adelante aparecerán aquí." : "No actions logged yet."}</div>}
              {historyLog !== null && historyLog.length > 0 && historyLog.map((e, i) => (
                <div key={i} style={{ display: "flex", gap: 10, padding: "9px 0", borderBottom: "1px solid var(--line)" }}>
                  <span style={{ fontSize: 15 }}>{e.type === "merge" ? "🔀" : "•"}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, color: "var(--ink-1)" }}>{e.detail}</div>
                    <div style={{ fontSize: 11, color: "var(--ink-4)", marginTop: 2 }}>{(e.by || "—")} · {e.ts ? new Date(e.ts).toLocaleString() : ""}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {modal === "edit-person" && editingId && (() => {
        const person = data.personas.find(p => p.id === editingId);
        if (!person) return null;
        return <NewPersonForm t={t} lang={lang} data={data} onClose={() => { setModal(null); setEditingId(null); }} onSave={handleSaveEditPerson} initialData={person} editMode />;
      })()}
      {modal === "edit-entity" && editingId && (() => {
        const entity = data.entities.find(e => e.id === editingId);
        if (!entity) return null;
        return <NewEntityForm t={t} lang={lang} data={data} onClose={() => { setModal(null); setEditingId(null); }} onSave={handleSaveEditEntity} initialData={entity} editMode />;
      })()}
      {showReminders && data && (
        <RemindersModal lang={lang} data={data} onClose={() => setShowReminders(false)} go={go} />
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
