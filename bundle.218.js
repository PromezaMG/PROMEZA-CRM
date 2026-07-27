
;/* ===== ui.jsx ===== */
// PROMEZA CRM — Icons + small UI helpers

const Icon = ({
  name,
  size = 16,
  className = ""
}) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "i " + className
  };
  switch (name) {
    case "home":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M3 11l9-8 9 8"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 10v10h14V10"
      }));
    case "users":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "9",
        cy: "8",
        r: "3.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M2 20c0-3.5 3-6 7-6s7 2.5 7 6"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "17",
        cy: "9",
        r: "2.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M22 19c0-2.5-2-4.5-5-4.5"
      }));
    case "building":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "4",
        y: "3",
        width: "16",
        height: "18",
        rx: "1.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M10 21v-3h4v3"
      }));
    case "map":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M9 4v14M15 6v14"
      }));
    case "search":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "11",
        cy: "11",
        r: "7"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m20 20-3.5-3.5"
      }));
    case "plus":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M12 5v14M5 12h14"
      }));
    case "phone":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"
      }));
    case "mail":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "5",
        width: "18",
        height: "14",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m3 7 9 6 9-6"
      }));
    case "globe":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
      }));
    case "pin":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "10",
        r: "2.5"
      }));
    case "calendar":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "5",
        width: "18",
        height: "16",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 9h18M8 3v4M16 3v4"
      }));
    case "tag":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M3 12V4h8l10 10-8 8z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "7.5",
        cy: "7.5",
        r: "1.2"
      }));
    case "more":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "5",
        cy: "12",
        r: "1.4"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "1.4"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "19",
        cy: "12",
        r: "1.4"
      }));
    case "settings":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"
      }));
    case "chev-down":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "m6 9 6 6 6-6"
      }));
    case "chev-right":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "m9 6 6 6-6 6"
      }));
    case "x":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M6 6l12 12M18 6 6 18"
      }));
    case "ig":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "5"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "17.3",
        cy: "6.7",
        r: ".7",
        fill: "currentColor"
      }));
    case "fb":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M14 22V13h3l1-4h-4V6.5c0-1.1.4-2 2-2h2V1h-3c-3 0-5 1.8-5 5v3H7v4h3v9z"
      }));
    case "tt":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M14 4c.5 2.5 2.5 4 5 4"
      }));
    case "x-tw":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M4 4l16 16M20 4 4 20"
      }));
    case "link":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1.5 1.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1.5-1.5"
      }));
    case "edit":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M4 20h4l11-11-4-4L4 16z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M14 5l5 5"
      }));
    case "trash":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"
      }));
    case "star":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "m12 3 2.6 5.6 6 .6-4.4 4 1.3 6L12 16l-5.5 3.2 1.3-6L3.4 9.2l6-.6z"
      }));
    case "filter":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M3 5h18l-7 9v5l-4 2v-7z"
      }));
    case "download":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M12 3v13M7 11l5 5 5-5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 20h18"
      }));
    case "sync":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M23 4v6h-6M1 20v-6h6"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
      }));
    case "lock":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "11",
        width: "18",
        height: "11",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M7 11V7a5 5 0 0 1 10 0v4"
      }));
    case "log-out":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
      }));
    case "check":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M20 6 9 17l-5-5"
      }));
    case "alert":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "13"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "17",
        x2: "12.01",
        y2: "17"
      }));
    case "upload":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      }), /*#__PURE__*/React.createElement("polyline", {
        points: "17 8 12 3 7 8"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "3",
        x2: "12",
        y2: "15"
      }));
    case "sun":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"
      }));
    case "copy":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("rect", {
        x: "9",
        y: "9",
        width: "13",
        height: "13",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
      }));
    case "git-merge":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "6",
        cy: "6",
        r: "2.5"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "6",
        cy: "18",
        r: "2.5"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "18",
        cy: "6",
        r: "2.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M6 8.5v7M8.5 6h5.5a2 2 0 0 1 2 2v3.5M13.5 18H6"
      }));
    case "chart":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M3 3v18h18"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M7 16l4-4 4 4 4-4"
      }));
    case "clock":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 7v5l3 3"
      }));
    case "folder":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }));
    case "shield":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M12 3l8 4v5c0 4.4-3.3 8.5-8 9.9C7.3 20.5 4 16.4 4 12V7z"
      }));
    case "zap":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M13 2L3 14h9l-1 8 10-12h-9z"
      }));
    case "bell":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M13.73 21a2 2 0 0 1-3.46 0"
      }));
    case "send":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("line", {
        x1: "22",
        y1: "2",
        x2: "11",
        y2: "13"
      }), /*#__PURE__*/React.createElement("polygon", {
        points: "22 2 15 22 11 13 2 9 22 2"
      }));
    case "target":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "5"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "1",
        fill: "currentColor"
      }));
    case "megaphone":
      return /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
        d: "M3 11v2a8 8 0 0 0 8 8v0"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M11 5H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6l7 4V1l-7 4z"
      }));
    default:
      return null;
  }
};
window.Icon = Icon;

// Fast name comparator: a cached Intl.Collator is ~7x faster than calling
// String.localeCompare(...,"es",{sensitivity:"base"}) per comparison, which was
// taking ~1.1s to sort 4500 contacts on every render/search.
const _nameCollator = new Intl.Collator("es", {
  sensitivity: "base"
});
window.nameCmp = (a, b) => _nameCollator.compare(a == null ? "" : a, b == null ? "" : b);

// ─── Searchable picker (type-to-find, A-Z, with copy phone / copy ID) ───
// Reusable combobox used to link a person to an entity (and vice versa).
// items: array with .id ; getLabel/getSub/getPhone: accessors.
const SearchPicker = ({
  items,
  value,
  onChange,
  getLabel,
  getSub,
  getPhone,
  placeholder,
  lang
}) => {
  const selected = (items || []).find(it => it.id === value) || null;
  const [query, setQuery] = React.useState(selected ? getLabel(selected) : "");
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState("");
  const boxRef = React.useRef(null);

  // Keep the text in sync when the selection changes from outside.
  React.useEffect(() => {
    setQuery(selected ? getLabel(selected) : "");
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  // Close the dropdown when clicking elsewhere.
  React.useEffect(() => {
    const onDoc = ev => {
      if (boxRef.current && !boxRef.current.contains(ev.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const norm = s => (s == null ? "" : String(s)).toLowerCase();
  const sorted = [...(items || [])].sort((a, b) => window.nameCmp(getLabel(a), getLabel(b)));
  const q = norm(query);
  const filtering = q && !(selected && q === norm(getLabel(selected)));
  const matches = (filtering ? sorted.filter(it => norm(getLabel(it)).includes(q) || getSub && norm(getSub(it)).includes(q) || getPhone && norm(getPhone(it)).includes(q) || norm(it.id).includes(q)) : sorted).slice(0, 40);
  const fallbackCopy = text => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand("copy");
    } catch (e) {}
    document.body.removeChild(ta);
  };
  const copy = (text, kind) => {
    if (!text) return;
    const done = () => {
      setCopied(kind);
      setTimeout(() => setCopied(""), 1300);
    };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, () => {
          fallbackCopy(text);
          done();
        });
      } else {
        fallbackCopy(text);
        done();
      }
    } catch (e) {
      fallbackCopy(text);
      done();
    }
  };
  const phone = selected && getPhone ? getPhone(selected) : "";
  return /*#__PURE__*/React.createElement("div", {
    ref: boxRef,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: ev => {
      setQuery(ev.target.value);
      setOpen(true);
      if (value) onChange("");
    },
    onFocus: ev => {
      setOpen(true);
      ev.target.select();
    },
    placeholder: placeholder || (lang === "es" ? "Escribe un nombre…" : "Type a name…"),
    style: {
      width: "100%"
    }
  }), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 2px)",
      left: 0,
      right: 0,
      background: "var(--bg)",
      border: "1px solid var(--line)",
      borderRadius: 8,
      boxShadow: "0 6px 20px rgba(0,0,0,.14)",
      zIndex: 300,
      maxHeight: 280,
      overflowY: "auto"
    }
  }, matches.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px",
      color: "var(--ink-4)",
      fontSize: 13
    }
  }, lang === "es" ? "Sin resultados" : "No results"), matches.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    onClick: () => {
      onChange(it.id);
      setQuery(getLabel(it));
      setOpen(false);
    },
    style: {
      padding: "9px 14px",
      cursor: "pointer",
      borderBottom: "1px solid var(--line)"
    },
    onMouseEnter: ev => ev.currentTarget.style.background = "var(--bg-soft)",
    onMouseLeave: ev => ev.currentTarget.style.background = ""
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13
    }
  }, getLabel(it)), getSub && getSub(it) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-3)",
      marginTop: 2
    }
  }, getSub(it))))), selected && !open && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginTop: 6,
      alignItems: "center"
    }
  }, phone && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-ghost",
    onClick: () => copy(phone, "phone")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 12
  }), " ", copied === "phone" ? lang === "es" ? "¡Teléfono copiado!" : "Phone copied!" : phone), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-ghost",
    onClick: () => copy(selected.id, "id")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "copy",
    size: 12
  }), " ", copied === "id" ? lang === "es" ? "¡ID copiado!" : "ID copied!" : "ID: " + selected.id)));
};
window.SearchPicker = SearchPicker;

// Helpers
window.fmtRole = (role, t) => t.roles[role] || role;
window.fmtType = (type, t) => t.types[type] || type;
window.initials = s => s.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
window.fmtDate = (iso, lang) => {
  if (!iso) return "—";
  try {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString(lang === "en" ? "en-US" : "es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  } catch (e) {
    return iso;
  }
};
window.fullName = p => [p.first, p.last].filter(Boolean).join(" ") || "";

// CSV export utility
window.exportCSV = (filename, headers, rows) => {
  const escape = v => {
    if (v == null || v === undefined) return "";
    const s = String(v);
    if (s.includes(",") || s.includes('"') || s.includes("\n")) {
      return '"' + s.replace(/"/g, '""') + '"';
    }
    return s;
  };
  const lines = [headers.map(h => escape(h.label)).join(","), ...rows.map(r => headers.map(h => escape(r[h.key])).join(","))];
  const blob = new Blob(["﻿" + lines.join("\r\n")], {
    type: "text/csv;charset=utf-8;"
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  // Audit log
  const session = window.getSession?.();
  if (window.AIRTABLE?.logAccess && session?.email) {
    window.AIRTABLE.logAccess(session.email, "Descarga CSV", filename);
  }
};

;/* ===== auth.jsx ===== */
// PROMEZA CRM — Authentication via Microsoft Entra ID (Azure AD)

// ─── Default MSAL config (pre-configured for promeza.com) ───

const DEFAULT_MSAL_CONFIG = {
  clientId: "20bf3e17-00ad-4316-ae9e-8a06ccb2d0bf",
  tenantId: "6477fab5-91da-4cc6-b4ea-ce35db0d6c51",
  authorizedEmails: "",
  extraKey: ""
};

// ─── Crypto utilities ───

const SESSION_CRYPTO_KEY = "promeza_sk";
const MSAL_CONFIG_KEY = "promeza_msal_cfg";
const PASS_HASH_KEY = "promeza_pass_hash";
const PASS_HASH_SALT = "promeza-crm-v1";
const sha256 = async str => {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
};
const deriveSharedKey = async (clientId, tenantId, extraKey = "") => {
  const material = [clientId, tenantId, extraKey.trim(), "promeza-v1"].filter(Boolean).join(":");
  const km = await crypto.subtle.importKey("raw", new TextEncoder().encode(material), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey({
    name: "PBKDF2",
    salt: new TextEncoder().encode("promeza-shared-2026"),
    iterations: 100000,
    hash: "SHA-256"
  }, km, {
    name: "AES-GCM",
    length: 256
  }, true, ["encrypt", "decrypt"]);
};

// SECURITY MODEL: the session key lives in sessionStorage (PER TAB). sessionStorage
// is wiped when the browser/window is closed, so a COLD START (fresh open, browser
// reopened) has no key → the app requires Microsoft sign-in again. This is what
// stops "anyone can open the app on this computer without logging in".
//
// To still support "open a profile in a NEW TAB without re-login", tabs share the
// key with each other over a BroadcastChannel: a new tab with no key asks its
// sibling tabs; a live tab answers with the key. If NO sibling is open (i.e. a real
// cold start), no answer comes → sign-in is required. The key is NEVER persisted to
// localStorage, so it cannot survive a browser restart.
const _KEY_CHAN = "promeza_key_share";
let _keyBC = null;
const _getKeyBC = () => {
  if (_keyBC) return _keyBC;
  try {
    _keyBC = new BroadcastChannel(_KEY_CHAN);
    // Answer sibling tabs' key requests with our own key (if we have one).
    _keyBC.onmessage = e => {
      if (e && e.data === "req") {
        try {
          const v = sessionStorage.getItem(SESSION_CRYPTO_KEY);
          if (v) _keyBC.postMessage({
            type: "key",
            v
          });
        } catch (_) {}
      }
    };
  } catch (_) {
    _keyBC = null;
  }
  return _keyBC;
};
// Ask any already-open tab for the session key (resolves to base64 or null after 600ms).
const _requestKeyFromSiblings = () => new Promise(resolve => {
  const bc = _getKeyBC();
  if (!bc) {
    resolve(null);
    return;
  }
  let done = false;
  const onMsg = e => {
    if (!done && e && e.data && e.data.type === "key" && e.data.v) {
      done = true;
      try {
        bc.removeEventListener("message", onMsg);
      } catch (_) {}
      resolve(e.data.v);
    }
  };
  try {
    bc.addEventListener("message", onMsg);
    bc.postMessage("req");
  } catch (_) {
    resolve(null);
    return;
  }
  setTimeout(() => {
    if (!done) {
      done = true;
      try {
        bc.removeEventListener("message", onMsg);
      } catch (_) {}
      resolve(null);
    }
  }, 600);
});
const storeSessionKey = async key => {
  const raw = await crypto.subtle.exportKey("raw", key);
  const b64 = btoa(String.fromCharCode(...new Uint8Array(raw)));
  sessionStorage.setItem(SESSION_CRYPTO_KEY, b64);
  _getKeyBC(); // make sure this tab can answer siblings from now on
  // Purge any key left in localStorage by the previous (less secure) scheme.
  try {
    localStorage.removeItem(SESSION_CRYPTO_KEY);
  } catch (e) {}
};
const loadSessionKey = async () => {
  let b64 = sessionStorage.getItem(SESSION_CRYPTO_KEY);
  if (!b64) {
    // No key in THIS tab — maybe we're a new tab opened from an already-signed-in
    // window. Ask siblings; if one answers we inherit the session (no re-login). If
    // none answer (cold start / browser reopened) we return null → sign-in required.
    b64 = await _requestKeyFromSiblings();
    if (b64) {
      try {
        sessionStorage.setItem(SESSION_CRYPTO_KEY, b64);
      } catch (e) {}
    }
  }
  _getKeyBC(); // register responder so THIS tab can later serve new tabs
  if (!b64) return null;
  try {
    const bytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
    return crypto.subtle.importKey("raw", bytes, {
      name: "AES-GCM",
      length: 256
    }, true, ["encrypt", "decrypt"]);
  } catch {
    return null;
  }
};

// Clear the session key from both stores (logout / inactivity timeout).
const clearSessionKey = () => {
  try {
    sessionStorage.removeItem(SESSION_CRYPTO_KEY);
  } catch (e) {}
  try {
    localStorage.removeItem(SESSION_CRYPTO_KEY);
  } catch (e) {}
};
const getMSALConfig = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(MSAL_CONFIG_KEY)) || {};
    return {
      ...DEFAULT_MSAL_CONFIG,
      ...stored
    };
  } catch {
    return {
      ...DEFAULT_MSAL_CONFIG
    };
  }
};
const buildMSALInstance = cfg => {
  if (!cfg.clientId || !cfg.tenantId) return null;
  const msalLib = window.msal || window.msalBrowser;
  if (!msalLib) {
    console.error("MSAL library not loaded");
    return null;
  }
  try {
    return new msalLib.PublicClientApplication({
      auth: {
        clientId: cfg.clientId,
        authority: `https://login.microsoftonline.com/${cfg.tenantId}`,
        redirectUri: window.location.origin + window.location.pathname
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
      }
    });
  } catch (e) {
    console.error("MSAL init error:", e);
    return null;
  }
};
window.CryptoUtils = {
  sha256,
  deriveSharedKey,
  storeSessionKey,
  loadSessionKey,
  clearSessionKey,
  getMSALConfig,
  buildMSALInstance,
  SESSION_CRYPTO_KEY,
  MSAL_CONFIG_KEY,
  PASS_HASH_KEY,
  PASS_HASH_SALT,
  encrypt: async (str, key) => {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const enc = await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv
    }, key, new TextEncoder().encode(str));
    const combined = new Uint8Array(12 + enc.byteLength);
    combined.set(iv, 0);
    combined.set(new Uint8Array(enc), 12);
    // Chunked btoa — spreading millions of args to String.fromCharCode causes stack overflow
    let bin = "";
    for (let i = 0; i < combined.length; i += 8192) {
      bin += String.fromCharCode(...combined.subarray(i, i + 8192));
    }
    return btoa(bin);
  },
  decrypt: async (b64, key) => {
    const str = atob(b64);
    const bytes = new Uint8Array(str.length);
    for (let i = 0; i < str.length; i++) bytes[i] = str.charCodeAt(i);
    const iv = bytes.slice(0, 12),
      data = bytes.slice(12);
    const dec = await crypto.subtle.decrypt({
      name: "AES-GCM",
      iv
    }, key, data);
    return new TextDecoder().decode(dec);
  },
  // Binary variants — store the raw encrypted bytes (Uint8Array) directly in
  // IndexedDB. This skips the base64 encode/decode that ran char-by-char over
  // megabytes and froze the UI ~1.8s per save (and would be ~5s at 12k contacts).
  // Only crypto.subtle (async, off the main thread) + TextEncoder/Decoder remain.
  encryptBytes: async (str, key) => {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const enc = await crypto.subtle.encrypt({
      name: "AES-GCM",
      iv
    }, key, new TextEncoder().encode(str));
    const combined = new Uint8Array(12 + enc.byteLength);
    combined.set(iv, 0);
    combined.set(new Uint8Array(enc), 12);
    return combined;
  },
  decryptBytes: async (bytes, key) => {
    const b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
    const iv = b.subarray(0, 12),
      data = b.subarray(12);
    const dec = await crypto.subtle.decrypt({
      name: "AES-GCM",
      iv
    }, key, data);
    return new TextDecoder().decode(dec);
  }
};

// ─── Session management ───

const SESSION_KEY = "promeza_session";
const SESSION_DURATION = 30 * 24 * 60 * 60 * 1000;
const getSession = () => {
  try {
    const s = JSON.parse(localStorage.getItem(SESSION_KEY));
    if (!s || s.expires < Date.now()) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }
    return s;
  } catch {
    return null;
  }
};
const saveSession = user => {
  localStorage.setItem(SESSION_KEY, JSON.stringify({
    email: user,
    expires: Date.now() + SESSION_DURATION
  }));
};
const clearSession = () => localStorage.removeItem(SESSION_KEY);

// ─── Brand logo ───

const AuthBrand = () => /*#__PURE__*/React.createElement("div", {
  className: "auth-brand"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 52,
    height: 52,
    borderRadius: 14,
    background: "linear-gradient(135deg, #0f172a 0%, #14532d 100%)",
    display: "grid",
    placeItems: "center",
    boxShadow: "0 0 18px rgba(132,204,22,.3)",
    flexShrink: 0
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: "26",
  height: "26",
  viewBox: "0 0 28 28",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M14 3C9.58 3 6 6.58 6 11c0 2.83 1.4 5.33 3.55 6.88V20a1 1 0 001 1h6.9a1 1 0 001-1v-2.12C20.6 16.33 22 13.83 22 11c0-4.42-3.58-8-8-8z",
  fill: "#a3e635",
  fillOpacity: ".9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.5 22h7",
  stroke: "#a3e635",
  strokeWidth: "1.8",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 25h5",
  stroke: "#a3e635",
  strokeWidth: "1.8",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 3v-2M7 5l-1.5-1.5M21 5l1.5-1.5M5 11H3M23 11h2",
  stroke: "#a3e635",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeOpacity: ".55"
}))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 20,
    fontWeight: 900,
    letterSpacing: "-.02em"
  }
}, "PROME", /*#__PURE__*/React.createElement("span", {
  style: {
    color: "#84cc16"
  }
}, "ZA")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: ".18em",
    color: "var(--ink-3)",
    textTransform: "uppercase",
    marginTop: 1
  }
}, "Base de Datos")));
const MicrosoftLogo = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 21 21",
  fill: "none",
  style: {
    flexShrink: 0
  }
}, /*#__PURE__*/React.createElement("rect", {
  x: "1",
  y: "1",
  width: "9",
  height: "9",
  fill: "#f25022"
}), /*#__PURE__*/React.createElement("rect", {
  x: "11",
  y: "1",
  width: "9",
  height: "9",
  fill: "#7fba00"
}), /*#__PURE__*/React.createElement("rect", {
  x: "1",
  y: "11",
  width: "9",
  height: "9",
  fill: "#00a4ef"
}), /*#__PURE__*/React.createElement("rect", {
  x: "11",
  y: "11",
  width: "9",
  height: "9",
  fill: "#ffb900"
}));

// ─── AuthScreen ───

const AuthScreen = ({
  onLogin
}) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const doMicrosoftLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const cfg = getMSALConfig();
      const msalLib = window.msal || window.msalBrowser;
      if (!msalLib) {
        setError("Error: librería MSAL no cargó. Recarga la página (Ctrl+Shift+R).");
        setLoading(false);
        return;
      }
      const msalInstance = buildMSALInstance(cfg);
      if (!msalInstance) {
        setError("Error de configuración (clientId/tenantId inválido).");
        setLoading(false);
        return;
      }

      // Process any pending redirect (#code= in URL) and clear stale interaction locks
      let response = null;
      try {
        response = await msalInstance.handleRedirectPromise();
      } catch {}
      if (!response) {
        response = await msalInstance.loginPopup({
          scopes: ["User.Read", "openid", "profile", "email"],
          prompt: "select_account"
        });
      }
      const email = (response.account?.username || "").toLowerCase();
      if (!email) {
        setError("No se pudo obtener el correo.");
        setLoading(false);
        return;
      }
      if (!email.endsWith("@promeza.com")) {
        setError("Solo se permiten cuentas @promeza.com.");
        setLoading(false);
        return;
      }
      const key = await deriveSharedKey(cfg.clientId, cfg.tenantId, cfg.extraKey || "");
      await storeSessionKey(key);
      saveSession(email);
      if (window.AIRTABLE) window.AIRTABLE.logAccess(email, "Inicio de sesión");
      onLogin(email);
    } catch (err) {
      console.error("MSAL login error:", err);
      const cancelled = err.errorCode?.includes("cancelled") || err.message?.includes("cancelled") || err.errorCode?.includes("user_cancelled");
      if (!cancelled) {
        const code = err.errorCode || err.name || "";
        const msg = err.message || "Inténtalo de nuevo.";
        setError(`Error: ${code ? "[" + code + "] " : ""}${msg}`);
      }
    }
    setLoading(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "auth-veil"
  }, /*#__PURE__*/React.createElement("div", {
    className: "auth-card"
  }, /*#__PURE__*/React.createElement(AuthBrand, null), /*#__PURE__*/React.createElement("div", {
    className: "auth-title"
  }, "Bienvenido"), /*#__PURE__*/React.createElement("div", {
    className: "auth-sub",
    style: {
      marginBottom: 24
    }
  }, "Inicia sesi\xF3n con tu cuenta ", /*#__PURE__*/React.createElement("strong", null, "@promeza.com")), error && /*#__PURE__*/React.createElement("div", {
    className: "auth-error",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 14
  }), " ", error), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-block auth-submit",
    onClick: doMicrosoftLogin,
    disabled: loading,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10
    }
  }, loading ? "Conectando…" : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MicrosoftLogo, null), " Iniciar sesi\xF3n con Microsoft")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 16,
      fontSize: 12,
      color: "var(--ink-4)"
    }
  }, "Si tienes Microsoft Authenticator activo,", /*#__PURE__*/React.createElement("br", null), "te pedir\xE1 el c\xF3digo autom\xE1ticamente."), /*#__PURE__*/React.createElement("div", {
    className: "auth-footer"
  }, "PROMEZA CRM v1.0 \xB7 ", new Date().getFullYear())));
};

// ─── UnlockScreen ───

const UnlockScreen = ({
  email,
  onUnlock,
  onLogout
}) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const displayName = email || "usuario";
  const cfg = getMSALConfig();
  const doReauth = async () => {
    setLoading(true);
    setError("");
    try {
      const msalInstance = buildMSALInstance(cfg);
      if (!msalInstance) {
        setError("Error de configuración (clientId/tenantId inválido).");
        setLoading(false);
        return;
      }
      // Process any pending redirect and clear stale interaction locks before popup
      let r = null;
      try {
        r = await msalInstance.handleRedirectPromise();
      } catch {}
      if (!r) {
        r = await msalInstance.loginPopup({
          scopes: ["User.Read", "openid"],
          prompt: "select_account"
        });
      }
      const account = r?.account;
      const loggedEmail = (account?.username || "").toLowerCase();
      if (!loggedEmail || !loggedEmail.endsWith("@promeza.com")) {
        setError("Solo se permiten cuentas @promeza.com.");
        setLoading(false);
        return;
      }
      const key = await deriveSharedKey(cfg.clientId, cfg.tenantId, cfg.extraKey || "");
      await storeSessionKey(key);
      // Update session to whoever just logged in (not necessarily same as stored email)
      saveSession(loggedEmail);
      onUnlock(loggedEmail);
    } catch (err) {
      if (!err.errorCode?.includes("cancelled") && !err.message?.includes("cancelled")) {
        setError("Error al verificar: " + (err.message || err.errorCode));
      }
    }
    setLoading(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "auth-veil"
  }, /*#__PURE__*/React.createElement("div", {
    className: "auth-card"
  }, /*#__PURE__*/React.createElement(AuthBrand, null), /*#__PURE__*/React.createElement("div", {
    className: "auth-title"
  }, "Iniciar sesi\xF3n"), /*#__PURE__*/React.createElement("div", {
    className: "auth-sub",
    style: {
      marginBottom: 24
    }
  }, "Elige tu cuenta ", /*#__PURE__*/React.createElement("strong", null, "@promeza.com"), " para continuar."), error && /*#__PURE__*/React.createElement("div", {
    className: "auth-error",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 14
  }), " ", error), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-block auth-submit",
    onClick: doReauth,
    disabled: loading,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10
    }
  }, loading ? "Verificando…" : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MicrosoftLogo, null), " Elegir cuenta Microsoft")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onLogout,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontSize: 12,
      color: "var(--ink-4)",
      fontFamily: "inherit",
      textDecoration: "underline"
    }
  }, "Cerrar sesi\xF3n completamente")), /*#__PURE__*/React.createElement("div", {
    className: "auth-footer"
  }, "PROMEZA CRM v1.0 \xB7 ", new Date().getFullYear())));
};
window.AuthScreen = AuthScreen;
window.UnlockScreen = UnlockScreen;
window.getSession = getSession;
window.saveSession = saveSession;
window.clearSession = clearSession;
window.getPasswords = () => ({});

;/* ===== shell.jsx ===== */
// PROMEZA CRM — Sidebar / Topbar shell

const Sidebar = ({
  route,
  go,
  t,
  counts,
  mobileOpen,
  onClose
}) => {
  const items = [{
    id: "home",
    label: t.nav.home,
    icon: "home"
  }, {
    id: "personas",
    label: t.nav.personas,
    icon: "users",
    count: counts.personas
  }, {
    id: "pipeline",
    label: "Directorio",
    icon: "chart"
  }, {
    id: "entities",
    label: t.nav.entities,
    icon: "building",
    count: counts.entities
  }, {
    id: "projects",
    label: t.nav.projects || "Proyectos",
    icon: "folder",
    count: counts.projects || null
  }, {
    id: "tasks",
    label: t.nav.tasks || "Tareas",
    icon: "check",
    count: counts.pendingTasks || null,
    countStyle: counts.overdueCount > 0 ? {
      background: "#ef4444"
    } : null
  }, {
    id: "my-tasks",
    label: t.nav.myTasks || "Mis tareas",
    icon: "clock"
  }, {
    id: "campaigns",
    label: t.nav.campaigns || "Campañas",
    icon: "megaphone"
  }, {
    id: "calendar",
    label: t.nav.calendar || "Calendario",
    icon: "calendar"
  }, {
    id: "duplicates",
    label: t.nav.duplicates || "Duplicados",
    icon: "copy",
    count: counts.dups || null,
    countStyle: {
      background: "#f59e0b"
    }
  }, {
    id: "map",
    label: t.nav.map,
    icon: "map"
  }];
  const handleNav = id => {
    go({
      name: id
    });
    if (onClose) onClose();
  };
  return /*#__PURE__*/React.createElement("aside", {
    className: "sidebar" + (mobileOpen ? " mobile-open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-mark"
  }, "P"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "brand-name"
  }, t.appName), /*#__PURE__*/React.createElement("div", {
    className: "brand-tag"
  }, t.appTag))), /*#__PURE__*/React.createElement("div", {
    className: "nav-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-label"
  }, "CRM"), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    className: "nav-item " + (route.name === it.id ? "active" : ""),
    onClick: () => handleNav(it.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon
  })), /*#__PURE__*/React.createElement("span", null, it.label), it.count != null && it.count > 0 && /*#__PURE__*/React.createElement("span", {
    className: "badge",
    style: it.countStyle || {}
  }, it.count)))), /*#__PURE__*/React.createElement("div", {
    className: "nav-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-label"
  }, t.common.add), /*#__PURE__*/React.createElement("div", {
    className: "nav-item",
    onClick: () => {
      go({
        name: "new-person"
      });
      if (onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  })), /*#__PURE__*/React.createElement("span", null, t.nav.newPerson)), /*#__PURE__*/React.createElement("div", {
    className: "nav-item",
    onClick: () => {
      go({
        name: "new-entity"
      });
      if (onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  })), /*#__PURE__*/React.createElement("span", null, t.nav.newEntity))), /*#__PURE__*/React.createElement("div", {
    className: "nav-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-label"
  }, "Calidad"), /*#__PURE__*/React.createElement("div", {
    className: "nav-item " + (route.name === "duplicates" ? "active" : ""),
    onClick: () => handleNav("duplicates")
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "copy"
  })), /*#__PURE__*/React.createElement("span", null, "Duplicados"), counts.dups > 0 && /*#__PURE__*/React.createElement("span", {
    className: "badge",
    style: {
      background: "#f59e0b",
      color: "#fff"
    }
  }, counts.dups))), /*#__PURE__*/React.createElement("div", {
    className: "side-cta"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-3)",
      padding: "0 4px 4px"
    }
  }, "v1.0 \xB7 ", new Date().toLocaleDateString())));
};

// ─── Notifications panel ───
const NotificationsPanel = ({
  data,
  lang,
  go,
  onClose,
  dupCount = 0
}) => {
  const today = new Date().toISOString().slice(0, 10);
  const in7 = new Date();
  in7.setDate(in7.getDate() + 7);
  const in7str = in7.toISOString().slice(0, 10);

  // Birthdays today / this week
  const todayDate = new Date();
  const dayOfYear = d => Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
  const todayDOY = dayOfYear(todayDate);
  const birthdayAlerts = data.personas.filter(p => p.birthday).map(p => {
    const [, m, d] = p.birthday.split("-").map(n => parseInt(n));
    const dt = new Date(todayDate.getFullYear(), m - 1, d);
    const diff = dayOfYear(dt) - todayDOY;
    return {
      p,
      diff
    };
  }).filter(({
    diff
  }) => diff >= 0 && diff <= 7).sort((a, b) => a.diff - b.diff);

  // Overdue tasks
  const overdueItems = [];
  Object.entries(data.tasks || {}).forEach(([pid, tasks]) => {
    tasks.filter(tk => !tk.done && tk.due && tk.due < today).forEach(tk => {
      const person = data.personas.find(p => p.id === pid);
      if (person) overdueItems.push({
        task: tk,
        person
      });
    });
  });
  overdueItems.sort((a, b) => a.task.due.localeCompare(b.task.due));

  // Upcoming projects (next 7 days)
  const upcomingProjects = (data.projects || []).filter(pr => pr.dateStart && pr.dateStart >= today && pr.dateStart <= in7str && pr.status !== "cancelado").sort((a, b) => a.dateStart.localeCompare(b.dateStart));

  // Bad contact info
  const badInfoPersonas = window.hasContactIssue ? data.personas.filter(p => window.hasContactIssue(p)).slice(0, 6) : [];
  const total = birthdayAlerts.length + overdueItems.length + upcomingProjects.length + (badInfoPersonas.length > 0 ? 1 : 0) + (dupCount > 0 ? 1 : 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 8px)",
      right: 0,
      width: 360,
      background: "var(--bg)",
      border: "1px solid var(--line)",
      borderRadius: 12,
      boxShadow: "var(--shadow-lg)",
      zIndex: 500,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, "Notificaciones ", total > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)",
      fontWeight: 400
    }
  }, "(", total, ")")), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 420,
      overflowY: "auto"
    }
  }, total === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 16px",
      textAlign: "center",
      color: "var(--ink-3)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      marginBottom: 8
    }
  }, "\u2713"), "Todo al d\xEDa \u2014 sin alertas"), dupCount > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px 4px",
      fontSize: 10.5,
      fontWeight: 700,
      color: "#7c3aed",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, "Posibles duplicados"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      background: "#faf5ff"
    },
    onClick: () => {
      go({
        name: "duplicates"
      });
      onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: "#ede9fe",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 15,
    style: {
      color: "#7c3aed"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13,
      color: "#7c3aed"
    }
  }, "Se ", dupCount === 1 ? "encontró" : "encontraron", " ", dupCount, " posible", dupCount !== 1 ? "s" : "", " duplicado", dupCount !== 1 ? "s" : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-3)"
    }
  }, lang === "es" ? "Revisar y fusionar →" : "Review and merge →")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      color: "#7c3aed"
    }
  }, dupCount))), upcomingProjects.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px 4px",
      fontSize: 10.5,
      fontWeight: 700,
      color: "var(--accent)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, "Proyectos esta semana"), upcomingProjects.map(pr => {
    const types = window.PROJECT_TYPES || [];
    const pt = types.find(t => t.id === pr.type) || {
      emoji: "📂",
      color: "#6366f1"
    };
    const daysUntil = Math.round((new Date(pr.dateStart + "T12:00:00") - new Date(today + "T12:00:00")) / 86400000);
    return /*#__PURE__*/React.createElement("div", {
      key: pr.id,
      style: {
        padding: "10px 16px",
        borderBottom: "1px solid var(--line)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer"
      },
      onClick: () => {
        go({
          name: "project",
          id: pr.id
        });
        onClose();
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 8,
        background: pt.color + "18",
        display: "grid",
        placeItems: "center",
        fontSize: 16,
        flexShrink: 0
      }
    }, pt.emoji), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, pr.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-3)"
      }
    }, fmtDate(pr.dateStart, lang))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: pt.color,
        flexShrink: 0
      }
    }, daysUntil === 0 ? "Hoy" : "+" + daysUntil + "d"));
  })), birthdayAlerts.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px 4px",
      fontSize: 10.5,
      fontWeight: 700,
      color: "var(--ink-4)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, "Cumplea\xF1os"), birthdayAlerts.map(({
    p,
    diff
  }) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      padding: "10px 16px",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer"
    },
    onClick: () => {
      go({
        name: "person",
        id: p.id
      });
      onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: p.color,
      width: 32,
      height: 32,
      fontSize: 11,
      flexShrink: 0
    }
  }, initials(fullName(p))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13
    }
  }, fullName(p)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-3)"
    }
  }, diff === 0 ? "Cumpleaños hoy" : "Cumpleaños en " + diff + " días")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, diff === 0 ? "🎂" : "🎉")))), badInfoPersonas.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px 4px",
      fontSize: 10.5,
      fontWeight: 700,
      color: "#f59e0b",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, "Informaci\xF3n por corregir \xB7 ", data.personas.filter(p => window.hasContactIssue && window.hasContactIssue(p)).length, " contactos"), badInfoPersonas.map(p => {
    const email = (p.email || "").trim();
    const phone = (p.phone || "").replace(/\D/g, "");
    const issues = [];
    if (!email && phone.length < 7) issues.push("Sin email ni teléfono");else {
      if (email && !email.includes("@")) issues.push("Email con formato incorrecto");
      if (p.emailStatus === "bad") issues.push("Email no funciona");
      if (p.phoneStatus === "bad") issues.push("Teléfono no funciona");
    }
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        padding: "9px 16px",
        borderBottom: "1px solid var(--line)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer"
      },
      onClick: () => {
        go({
          name: "person",
          id: p.id
        });
        onClose();
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "av-circle",
      style: {
        background: p.color,
        width: 30,
        height: 30,
        fontSize: 10,
        flexShrink: 0
      }
    }, initials(fullName(p))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 12.5
      }
    }, fullName(p)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#f59e0b",
        fontWeight: 500
      }
    }, issues.join(" · "))), /*#__PURE__*/React.createElement(Icon, {
      name: "alert",
      size: 13,
      style: {
        color: "#f59e0b",
        flexShrink: 0
      }
    }));
  }), data.personas.filter(p => window.hasContactIssue && window.hasContactIssue(p)).length > 6 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "7px 16px",
      fontSize: 11.5,
      color: "var(--ink-3)",
      textAlign: "center"
    }
  }, "+", data.personas.filter(p => window.hasContactIssue && window.hasContactIssue(p)).length - 6, " m\xE1s")), overdueItems.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px 4px",
      fontSize: 10.5,
      fontWeight: 700,
      color: "#ef4444",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, "Tareas vencidas"), overdueItems.slice(0, 5).map(({
    task,
    person
  }) => {
    const daysOver = Math.round((new Date(today) - new Date(task.due)) / 86400000);
    return /*#__PURE__*/React.createElement("div", {
      key: task.id,
      style: {
        padding: "10px 16px",
        borderBottom: "1px solid var(--line)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer"
      },
      onClick: () => {
        go({
          name: "person",
          id: person.id
        });
        onClose();
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 8,
        background: "#ef444414",
        display: "grid",
        placeItems: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 14
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 12.5,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, task.text), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-3)"
      }
    }, fullName(person))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: "var(--bad)",
        flexShrink: 0
      }
    }, "-", daysOver, "d"));
  }), overdueItems.length > 5 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px",
      fontSize: 12,
      color: "var(--ink-3)",
      textAlign: "center",
      cursor: "pointer"
    },
    onClick: () => {
      go({
        name: "tasks"
      });
      onClose();
    }
  }, "+", overdueItems.length - 5, " m\xE1s \u2192 Ver tareas"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      borderTop: "1px solid var(--line)",
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      flex: 1
    },
    onClick: () => {
      go({
        name: "projects"
      });
      onClose();
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "folder",
    size: 13
  }), " Proyectos"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      flex: 1
    },
    onClick: () => {
      go({
        name: "tasks"
      });
      onClose();
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13
  }), " Tareas")));
};
const Topbar = ({
  t,
  lang,
  setLang,
  query,
  setQuery,
  onSearchSubmit,
  onSettings,
  onLogout,
  userEmail,
  data,
  go,
  onMenuToggle,
  dupCount = 0,
  onGoBack,
  canGoBack,
  atSyncing = false,
  onSyncNow
}) => {
  const [showNotif, setShowNotif] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const notifRef = React.useRef(null);
  const searchRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const userInitials = userEmail ? userEmail.slice(0, 2).toUpperCase() : "??";
  const displayName = userEmail ? userEmail.split("@")[0].replace(".", " ") : "";
  const firstName = displayName.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  // Live search results
  const searchResults = React.useMemo(() => {
    const raw = (query || "").trim();
    if (!raw || raw.length < 2 || !data) return null;
    const q = raw.toLowerCase();
    const stripped = q.replace(/^#/, "");
    const norm = s => (s || "").toLowerCase();
    // VID / EID (the code shown on a profile, e.g. "EC552-873081", "P15-388031").
    // Checked BEFORE the phone check because its numeric suffix can look like a
    // phone number. Accepts any id prefix (ec###, pc###, e5, p15…), not just p/e.
    const vidP = p => p.id.toUpperCase() + "-" + Math.abs(p.id.charCodeAt(1) * 7919) % 999999;
    const vidE = e => e.id.toUpperCase() + "-" + Math.abs(e.id.charCodeAt(1) * 8819) % 999999;
    const looksVid = /^[a-z][a-z0-9-]*-\d+$/i.test(q);
    if (looksVid) {
      const personas = data.personas.filter(p => vidP(p).toLowerCase() === q).slice(0, 8);
      const entities = data.entities.filter(e => vidE(e).toLowerCase() === q).slice(0, 8);
      if (personas.length || entities.length) return {
        personas,
        entities,
        projects: [],
        personasTotal: personas.length,
        entitiesTotal: entities.length,
        total: personas.length + entities.length
      };
    }

    // Phone search by digits only — "(562) 209-9991", "562-209-9991" and "5622099991"
    // all match regardless of how the number is stored.
    const qDigits = q.replace(/\D/g, "");
    const phoneHit = x => qDigits.length >= 7 && (x.phones || []).map(ph => ph.value || "").concat([x.phone || ""]).join(" ").replace(/\D/g, "").includes(qDigits);

    // A 7+ digit query is a phone number — search phones, not the UID. (Skip if it
    // looked like a VID above.)
    if (!looksVid && qDigits.length >= 7) {
      const personas = data.personas.filter(phoneHit).slice(0, 8);
      const entities = data.entities.filter(phoneHit).slice(0, 4);
      return {
        personas,
        entities,
        projects: [],
        personasTotal: personas.length,
        entitiesTotal: entities.length,
        total: personas.length + entities.length
      };
    }

    // UID search: short pure digits (with or without #)
    if (/^\d+$/.test(stripped)) {
      const personas = data.personas.filter(p => (p.uid || "").startsWith(stripped)).slice(0, 8);
      const entities = data.entities.filter(e => (e.uid || "").startsWith(stripped)).slice(0, 4);
      return {
        personas,
        entities,
        projects: [],
        personasTotal: personas.length,
        entitiesTotal: entities.length,
        total: personas.length + entities.length
      };
    }

    // Multi-word search: ALL words must appear somewhere in the contact's fields.
    // "fabian garza" finds "Fabian Jesus Garza" because both words are present.
    const words = q.split(/\s+/).filter(Boolean);
    const allWords = haystack => words.every(w => haystack.includes(w));
    const searchStrP = p => [p.first, p.last, p.id, vidP(p), (p.emails || []).map(e => e.value || "").concat([p.email || ""]).join(" "), (p.phones || []).map(ph => ph.value || "").concat([p.phone || ""]).join(" "), p.city, p.county, p.state, p.country, (p.roles || []).join(" "), p.role, (p.tags || []).join(" ")].map(norm).join(" ");
    const matchP = p => {
      const s = searchStrP(p);
      // Exact phrase first, then all-words fallback
      return s.includes(q) || allWords(s);
    };
    const searchStrE = e => [e.name, e.id, vidE(e), (e.emails || []).map(em => em.value || "").concat([e.email || ""]).join(" "), e.city, e.county, e.state, e.country, (e.phones || []).map(ph => ph.value || "").concat([e.phone || ""]).join(" "), (e.tags || []).join(" ")].map(norm).join(" ");
    const matchE = e => {
      const s = searchStrE(e);
      return s.includes(q) || allWords(s);
    };
    const matchPr = pr => {
      const s = [pr.name, pr.description, pr.location].map(norm).join(" ");
      return s.includes(q) || allWords(s);
    };

    // Sort: exact full-name match first, then names that START with the query,
    // then any other match. This keeps the one you typed at the top even when many
    // records share the name (e.g. 14 "Fuente de Vida" churches).
    const exactNameFirst = (arr, nameFn) => {
      const eq = [],
        starts = [],
        other = [];
      arr.forEach(item => {
        const n = norm(nameFn(item));
        if (n === q) eq.push(item);else if (n.startsWith(q)) starts.push(item);else other.push(item);
      });
      return [...eq, ...starts, ...other];
    };
    const allMatchP = data.personas.filter(matchP);
    const allMatchE = data.entities.filter(matchE);
    const sorted = exactNameFirst(allMatchP, p => p.first + " " + p.last);
    const personas = sorted.slice(0, 8);
    const entities = exactNameFirst(allMatchE, e => e.name).slice(0, 6);
    const projects = (data.projects || []).filter(matchPr).slice(0, 3);
    return {
      personas,
      entities,
      projects,
      personasTotal: allMatchP.length,
      entitiesTotal: allMatchE.length,
      total: allMatchP.length + allMatchE.length + projects.length
    };
  }, [query, data]);
  const closeSearch = () => {
    setShowSearch(false);
  };
  const pick = route => {
    go(route);
    setQuery("");
    closeSearch();
  };
  // Navigate to a list but KEEP the query so the list stays filtered (globalQ).
  const viewAll = route => {
    go(route);
    closeSearch();
  };

  // Close search on outside click
  React.useEffect(() => {
    if (!showSearch) return;
    const handler = e => {
      if (searchRef.current && !searchRef.current.contains(e.target)) closeSearch();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showSearch]);

  // Close notifications on outside click
  React.useEffect(() => {
    if (!showNotif) return;
    const handler = e => {
      if (notifRef.current && !notifRef.current.contains(e.target)) setShowNotif(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showNotif]);

  // Count notifications
  const today = new Date().toISOString().slice(0, 10);
  const in7 = new Date();
  in7.setDate(in7.getDate() + 7);
  const in7str = in7.toISOString().slice(0, 10);
  const todayDate = new Date();
  const dayOfYear = d => Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
  const todayDOY = dayOfYear(todayDate);
  const notifCount = React.useMemo(() => {
    if (!data) return 0;
    let n = 0;
    n += (data.projects || []).filter(pr => pr.dateStart && pr.dateStart >= today && pr.dateStart <= in7str && pr.status !== "cancelado").length;
    n += data.personas.filter(p => {
      if (!p.birthday) return false;
      const [, m, d] = p.birthday.split("-").map(Number);
      const dt = new Date(todayDate.getFullYear(), m - 1, d);
      const diff = dayOfYear(dt) - todayDOY;
      return diff >= 0 && diff <= 7;
    }).length;
    n += Object.values(data.tasks || {}).flat().filter(tk => !tk.done && tk.due && tk.due < today).length;
    if (window.hasContactIssue && data.personas.some(p => window.hasContactIssue(p))) n += 1;
    if (dupCount > 0) n += 1;
    return Math.min(99, n);
  }, [data, today, dupCount]);
  const stages = window.PIPELINE_STAGES || [];
  const stageOf = p => p.stage || (p.status === "inactivo" ? "inactivo" : "conocido");
  return /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "menu-toggle",
    onClick: onMenuToggle,
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "5",
    x2: "17",
    y2: "5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "17",
    y2: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "15",
    x2: "17",
    y2: "15"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onGoBack,
    disabled: !canGoBack,
    title: "Atr\xE1s",
    style: {
      opacity: canGoBack ? 1 : 0.25,
      cursor: canGoBack ? "pointer" : "default",
      flexShrink: 0,
      transition: "opacity .2s"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "11 4 6 9 11 14"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "search",
    ref: searchRef,
    style: {
      position: "relative",
      flex: 1,
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "search-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  })), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    placeholder: t.placeholders.search,
    value: query,
    onChange: e => {
      setQuery(e.target.value);
      setShowSearch(true);
    },
    onFocus: () => {
      if (query.trim().length >= 2) setShowSearch(true);
    },
    onKeyDown: e => {
      if (e.key === "Enter") {
        // Smart destination: if the query matches more entities than contacts
        // (e.g. searching a church name), open the Entidades list instead of
        // Contactos. Keeps the query so the list stays filtered.
        const r = searchResults;
        if (r && r.entitiesTotal > 0 && r.entitiesTotal >= r.personasTotal) {
          viewAll({
            name: "entities"
          });
        } else {
          onSearchSubmit();
          closeSearch();
        }
      }
      if (e.key === "Escape") {
        setQuery("");
        closeSearch();
      }
    }
  }), query && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setQuery("");
      closeSearch();
    },
    style: {
      position: "absolute",
      right: 8,
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--ink-4)",
      padding: 2,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 13
  })), showSearch && searchResults && query.trim().length >= 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      left: 0,
      right: 0,
      background: "var(--bg)",
      border: "1px solid var(--line)",
      borderRadius: 12,
      boxShadow: "var(--shadow-lg)",
      zIndex: 600,
      maxHeight: 480,
      overflowY: "auto",
      animation: "popIn .15s ease-out"
    }
  }, searchResults.total === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 16px",
      textAlign: "center",
      color: "var(--ink-4)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      marginBottom: 6
    }
  }, "\uD83D\uDD0D"), "Sin resultados para \"", /*#__PURE__*/React.createElement("strong", null, query), "\"") : /*#__PURE__*/React.createElement(React.Fragment, null, searchResults.personas.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px 4px",
      fontSize: 10,
      fontWeight: 700,
      color: "var(--ink-4)",
      textTransform: "uppercase",
      letterSpacing: ".08em"
    }
  }, "Contactos \xB7 ", searchResults.personas.length), searchResults.personas.map(p => {
    const stage = stages.find(s => s.id === stageOf(p));
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        padding: "9px 16px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer",
        borderBottom: "1px solid var(--line)",
        transition: "background .1s"
      },
      onMouseEnter: e => e.currentTarget.style.background = "var(--bg-soft)",
      onMouseLeave: e => e.currentTarget.style.background = "",
      onClick: () => pick({
        name: "person",
        id: p.id
      })
    }, /*#__PURE__*/React.createElement("div", {
      className: "av-circle",
      style: {
        background: p.color,
        width: 34,
        height: 34,
        fontSize: 12,
        flexShrink: 0
      }
    }, initials(fullName(p))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 13
      }
    }, fullName(p)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-3)",
        display: "flex",
        gap: 6,
        flexWrap: "wrap"
      }
    }, p.role && /*#__PURE__*/React.createElement("span", null, fmtRole(p.role, t)), p.city && /*#__PURE__*/React.createElement("span", null, "\xB7 ", p.city), p.email && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ink-4)"
      }
    }, "\xB7 ", p.email), p.phone && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ink-4)"
      }
    }, "\xB7 ", p.phone))), stage && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        fontWeight: 700,
        padding: "2px 7px",
        borderRadius: 5,
        background: stage.color + "14",
        color: stage.color,
        whiteSpace: "nowrap",
        flexShrink: 0
      }
    }, stage.label));
  }), searchResults.total > 8 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "7px 16px",
      fontSize: 12,
      color: "var(--accent)",
      fontWeight: 600,
      cursor: "pointer",
      textAlign: "center"
    },
    onClick: () => {
      onSearchSubmit();
      closeSearch();
    }
  }, "Ver todos los resultados \u2192")), searchResults.entities.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px 4px",
      fontSize: 10,
      fontWeight: 700,
      color: "var(--ink-4)",
      textTransform: "uppercase",
      letterSpacing: ".08em"
    }
  }, "Entidades \xB7 ", searchResults.entitiesTotal), searchResults.entities.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    style: {
      padding: "9px 16px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      borderBottom: "1px solid var(--line)",
      transition: "background .1s"
    },
    onMouseEnter: ev => ev.currentTarget.style.background = "var(--bg-soft)",
    onMouseLeave: ev => ev.currentTarget.style.background = "",
    onClick: () => pick({
      name: "entity",
      id: e.id
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: "var(--accent-50)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13
    }
  }, e.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-3)",
      display: "flex",
      gap: 6
    }
  }, e.city && /*#__PURE__*/React.createElement("span", null, e.city), e.phone && /*#__PURE__*/React.createElement("span", null, "\xB7 ", e.phone), e.email && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-4)"
    }
  }, "\xB7 ", e.email))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-4)",
      flexShrink: 0
    }
  }, (t.types || {})[e.type] || e.type))), searchResults.entitiesTotal > searchResults.entities.length && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "9px 16px",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--accent)",
      cursor: "pointer",
      borderBottom: "1px solid var(--line)"
    },
    onClick: () => viewAll({
      name: "entities"
    })
  }, lang === "es" ? `Ver las ${searchResults.entitiesTotal} entidades →` : `See all ${searchResults.entitiesTotal} entities →`)), searchResults.projects.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px 4px",
      fontSize: 10,
      fontWeight: 700,
      color: "var(--ink-4)",
      textTransform: "uppercase",
      letterSpacing: ".08em"
    }
  }, "Proyectos \xB7 ", searchResults.projects.length), searchResults.projects.map(pr => {
    const types = window.PROJECT_TYPES || [];
    const pt = types.find(t => t.id === pr.type) || {
      emoji: "📂",
      color: "#6366f1"
    };
    return /*#__PURE__*/React.createElement("div", {
      key: pr.id,
      style: {
        padding: "9px 16px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer",
        borderBottom: "1px solid var(--line)",
        transition: "background .1s"
      },
      onMouseEnter: e => e.currentTarget.style.background = "var(--bg-soft)",
      onMouseLeave: e => e.currentTarget.style.background = "",
      onClick: () => pick({
        name: "project",
        id: pr.id
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: 9,
        background: pt.color + "18",
        display: "grid",
        placeItems: "center",
        fontSize: 17,
        flexShrink: 0
      }
    }, pt.emoji), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 13
      }
    }, pr.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-3)"
      }
    }, pr.dateStart ? fmtDate(pr.dateStart, lang) : "", pr.location ? " · " + pr.location : "")));
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "top-spacer"
  }), atSyncing ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontSize: 11.5,
      color: "var(--accent)",
      fontWeight: 500,
      padding: "4px 10px",
      background: "var(--accent-50)",
      borderRadius: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      border: "2px solid var(--accent)",
      borderTopColor: "transparent",
      borderRadius: "50%",
      animation: "spin .7s linear infinite",
      flexShrink: 0
    }
  }), lang === "en" ? "Syncing…" : "Sincronizando…") : onSyncNow && window.AIRTABLE?.getConfig()?.pat ? /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    onClick: onSyncNow,
    title: lang === "en" ? "Sync with Airtable" : "Sincronizar con Airtable",
    style: {
      fontSize: 11,
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sync",
    size: 12
  }), " ", lang === "en" ? "Sync" : "Sync") : null, /*#__PURE__*/React.createElement("div", {
    className: "lang-toggle topbar-lang"
  }, /*#__PURE__*/React.createElement("button", {
    className: lang === "es" ? "on" : "",
    onClick: () => setLang("es")
  }, "ES"), /*#__PURE__*/React.createElement("button", {
    className: lang === "en" ? "on" : "",
    onClick: () => setLang("en")
  }, "EN")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    },
    ref: notifRef
  }, /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    title: "Notificaciones",
    onClick: () => setShowNotif(v => !v),
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell"
  }), notifCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 4,
      right: 4,
      width: 16,
      height: 16,
      background: notifCount > 5 ? "var(--bad)" : "#f59e0b",
      borderRadius: "50%",
      fontSize: 9,
      fontWeight: 800,
      color: "#fff",
      display: "grid",
      placeItems: "center",
      lineHeight: 1
    }
  }, notifCount > 99 ? "99+" : notifCount)), showNotif && data && /*#__PURE__*/React.createElement(NotificationsPanel, {
    data: data,
    lang: lang,
    go: go,
    onClose: () => setShowNotif(false),
    dupCount: dupCount
  })), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    title: t.settings ? t.settings.title : "Settings",
    onClick: onSettings
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "user-pill",
    style: {
      cursor: "pointer"
    },
    onClick: () => setShowUserMenu(v => !v),
    title: userEmail
  }, /*#__PURE__*/React.createElement("div", {
    className: "av",
    style: {
      background: "var(--accent)"
    }
  }, userInitials), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      maxWidth: 90,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, firstName || userEmail)), showUserMenu && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1999
    },
    onClick: () => setShowUserMenu(false)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: "calc(100% + 8px)",
      zIndex: 2000,
      background: "var(--bg-card, #fff)",
      border: "1px solid var(--line)",
      borderRadius: 10,
      padding: "6px 0",
      minWidth: 210,
      boxShadow: "0 8px 32px rgba(0,0,0,.18)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px 10px",
      borderBottom: "1px solid var(--line)",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-3)",
      marginBottom: 1
    }
  }, "Sesi\xF3n activa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600
    }
  }, userEmail)), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setShowUserMenu(false);
      onSettings();
    },
    style: {
      width: "100%",
      textAlign: "left",
      padding: "8px 16px",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: 13,
      color: "var(--ink)",
      fontFamily: "inherit",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 14
  }), " Configuraci\xF3n"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setShowUserMenu(false);
      if (window.confirm("¿Cerrar sesión?")) onLogout && onLogout();
    },
    style: {
      width: "100%",
      textAlign: "left",
      padding: "8px 16px",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: 13,
      color: "#ef4444",
      fontFamily: "inherit",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 14
  }), " Cerrar sesi\xF3n")))));
};
window.Sidebar = Sidebar;
window.Topbar = Topbar;

;/* ===== map.jsx ===== */
// PROMEZA CRM — Map components

const _L = () => window.L;
const COUNTY_COLORS = ["#6366f1", "#0ea5e9", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6", "#14b8a6", "#f97316", "#ef4444", "#06b6d4"];
const useLeafletMap = (ref, opts) => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !_L()) return;
    if (mapRef.current) return;
    const map = _L().map(ref.current, {
      center: opts.center || [10, -60],
      zoom: opts.zoom || 2,
      zoomControl: opts.zoomControl !== false,
      scrollWheelZoom: true,
      attributionControl: false
    });
    _L().tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap, © CartoDB"
    }).addTo(map);
    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);
  return mapRef;
};

// Popup button that opens the full profile (so clicking a marker/list item shows
// the point on the map first, instead of immediately navigating away).
const _goBtn = label => `<button class="map-go-btn" style="margin-top:7px;width:100%;padding:6px 8px;border:1px solid #4f46e5;background:#4f46e5;color:#fff;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;">${label} →</button>`;
const MiniMap = ({
  personas = [],
  entities = [],
  focus = null,
  go = null,
  countyColorMap = null,
  selected = null
}) => {
  const ref = React.useRef(null);
  const mapRef = useLeafletMap(ref, {
    center: focus ? [focus.lat, focus.lng] : [10, -60],
    zoom: focus ? 13 : 2
  });
  const layerRef = React.useRef(null);
  const markersRef = React.useRef({});
  React.useEffect(() => {
    const L = _L();
    if (!L || !mapRef.current) return;
    if (layerRef.current) {
      layerRef.current.remove();
    }
    // Cluster thousands of points into groups so the map stays smooth. Falls back
    // to a plain layer group if the markercluster plugin failed to load.
    const clustered = !!L.markerClusterGroup;
    const layer = clustered ? L.markerClusterGroup({
      chunkedLoading: true,
      maxClusterRadius: 55,
      showCoverageOnHover: false,
      spiderfyOnMaxZoom: true,
      removeOutsideVisibleBounds: true
    }) : L.layerGroup();
    layer.addTo(mapRef.current);
    const points = [];
    const markers = {};
    const all = [];

    // Many contacts share a city-centroid coordinate (we geocode by city when no
    // ZIP). Stacked at the exact same point they can't be separated by zoom and
    // explode into a huge unusable spider. Spread them with a small DETERMINISTIC
    // offset (~±0.9 km) so they cluster normally and resolve into clickable points.
    // Not applied on the single-point profile map (focus mode).
    const hash = s => {
      let h = 2166136261;
      s = String(s || "");
      for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 16777619);
      }
      return h >>> 0;
    };
    const SPREAD = 0.018;
    const jLat = id => focus ? 0 : (hash(id) % 2000 / 2000 - 0.5) * SPREAD;
    const jLng = id => focus ? 0 : (hash(id + "#") % 2000 / 2000 - 0.5) * SPREAD;

    // Wire the "Ver perfil" button inside a popup once it opens.
    const wireGo = (m, dest) => {
      if (!go) return;
      m.on("popupopen", () => {
        const el = m.getPopup() && m.getPopup().getElement();
        const btn = el && el.querySelector(".map-go-btn");
        if (btn) btn.onclick = ev => {
          ev.preventDefault();
          go(dest);
        };
      });
    };
    entities.forEach(e => {
      if (!e.lat && !e.lng) return;
      const color = countyColorMap && e.county && countyColorMap[e.county] || "#0ea5e9";
      const ic = L.divIcon({
        html: `<div class="map-marker entity" style="border-color:${color};background:${color}22"></div>`,
        className: "",
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });
      const ll = [e.lat + jLat(e.id), e.lng + jLng(e.id)];
      const m = L.marker(ll, {
        icon: ic
      });
      m.bindPopup(`<div class="pop-title">${e.name || ""}</div><div class="pop-sub">${e.city || ""}${e.county ? " · " + e.county : ""}</div>${go ? _goBtn("Ver entidad") : ""}`);
      wireGo(m, {
        name: "entity",
        id: e.id
      });
      markers["entity:" + e.id] = m;
      all.push(m);
      points.push(ll);
    });
    personas.forEach(p => {
      if (!p.lat && !p.lng) return;
      const color = countyColorMap && p.county && countyColorMap[p.county] || p.color;
      const ic = L.divIcon({
        html: `<div class="map-marker" style="background:${color}"></div>`,
        className: "",
        iconSize: [16, 16],
        iconAnchor: [8, 8]
      });
      const ll = [p.lat + jLat(p.id), p.lng + jLng(p.id)];
      const m = L.marker(ll, {
        icon: ic
      });
      m.bindPopup(`<div class="pop-title">${(p.first || "") + " " + (p.last || "")}</div><div class="pop-sub">${p.city || ""}${p.county ? " · " + p.county : ""}${p.country ? ", " + p.country : ""}</div>${go ? _goBtn("Ver perfil") : ""}`);
      wireGo(m, {
        name: "person",
        id: p.id
      });
      markers["person:" + p.id] = m;
      all.push(m);
      points.push(ll);
    });

    // Bulk-add (markercluster's addLayers is far faster than per-marker addTo).
    if (clustered) layer.addLayers(all);else all.forEach(m => m.addTo(layer));
    layerRef.current = layer;
    markersRef.current = markers;
    if (focus) {
      mapRef.current.setView([focus.lat, focus.lng], 13);
    } else if (points.length > 0) {
      const bounds = L.latLngBounds(points);
      mapRef.current.fitBounds(bounds.pad(0.2), {
        animate: false
      });
    }
  }, [personas, entities, focus, countyColorMap]);

  // When a list item is selected, fly to its marker and open its popup (instead of
  // navigating away). Works through clustering via zoomToShowLayer.
  React.useEffect(() => {
    if (!selected || !mapRef.current) return;
    const m = markersRef.current[selected.kind + ":" + selected.id];
    if (!m) return;
    const layer = layerRef.current;
    if (layer && layer.zoomToShowLayer) {
      layer.zoomToShowLayer(m, () => m.openPopup());
    } else {
      mapRef.current.setView(m.getLatLng(), 14, {
        animate: true
      });
      m.openPopup();
    }
  }, [selected]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: "100%",
      height: "100%"
    }
  });
};
const MapPage = ({
  t,
  lang,
  data,
  go
}) => {
  const [showPersonas, setShowPersonas] = React.useState(true);
  const [showEntities, setShowEntities] = React.useState(true);
  const [sideTab, setSideTab] = React.useState("lista");
  const [selectedCounty, setSelectedCounty] = React.useState(null);
  const [focusItem, setFocusItem] = React.useState(null); // {kind,id} clicked in the list → center map
  const es = lang === "es";

  // Build county map
  const allCounties = React.useMemo(() => {
    const set = new Set();
    data.personas.forEach(p => {
      if (p.county) set.add(p.county);
    });
    data.entities.forEach(e => {
      if (e.county) set.add(e.county);
    });
    return [...set].sort();
  }, [data.personas, data.entities]);
  const countyColorMap = React.useMemo(() => {
    const map = {};
    allCounties.forEach((c, i) => {
      map[c] = COUNTY_COLORS[i % COUNTY_COLORS.length];
    });
    return map;
  }, [allCounties]);

  // Filter by county selection
  const personasFiltered = React.useMemo(() => {
    let p = data.personas;
    if (!showPersonas) return [];
    if (selectedCounty) p = p.filter(x => x.county === selectedCounty);
    return p;
  }, [data.personas, showPersonas, selectedCounty]);
  const entitiesFiltered = React.useMemo(() => {
    let e = data.entities;
    if (!showEntities) return [];
    if (selectedCounty) e = e.filter(x => x.county === selectedCounty);
    return e;
  }, [data.entities, showEntities, selectedCounty]);

  // Sidebar list — memoized so it is NOT rebuilt+resorted on every render (e.g. on
  // every click). Uses the cached collator (window.nameCmp); per-element
  // localeCompare on thousands of rows froze the page.
  const cmp = window.nameCmp || ((a, b) => (a || "").localeCompare(b || ""));
  const items = React.useMemo(() => [...entitiesFiltered.map(e => ({
    kind: "entity",
    id: e.id,
    name: e.name,
    sub: [e.city, e.county].filter(Boolean).join(" · "),
    lat: e.lat,
    lng: e.lng,
    color: countyColorMap && e.county ? countyColorMap[e.county] : "#0ea5e9",
    county: e.county
  })), ...personasFiltered.map(p => ({
    kind: "person",
    id: p.id,
    name: fullName(p),
    sub: [p.city, p.county].filter(Boolean).join(" · "),
    lat: p.lat,
    lng: p.lng,
    color: countyColorMap && p.county ? countyColorMap[p.county] : p.color,
    county: p.county
  }))].sort((a, b) => cmp(a.name, b.name)), [entitiesFiltered, personasFiltered, countyColorMap]);

  // Stable point arrays for the map — without memoizing, the inline .filter() made
  // a new array each render, so the map rebuilt all ~7000 markers on every click.
  const mapPersonas = React.useMemo(() => personasFiltered.filter(p => p.lat && p.lng), [personasFiltered]);
  const mapEntities = React.useMemo(() => entitiesFiltered.filter(e => e.lat && e.lng), [entitiesFiltered]);

  // County stats
  const countyStats = React.useMemo(() => {
    return allCounties.map((county, i) => {
      const personas = data.personas.filter(p => p.county === county);
      const entities = data.entities.filter(e => e.county === county);
      const cityCounts = {};
      personas.forEach(p => {
        if (p.city) cityCounts[p.city] = (cityCounts[p.city] || 0) + 1;
      });
      const topCities = Object.entries(cityCounts).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([c]) => c);
      return {
        county,
        personas,
        entities,
        topCities,
        color: COUNTY_COLORS[i % COUNTY_COLORS.length]
      };
    }).sort((a, b) => b.personas.length + b.entities.length - (a.personas.length + a.entities.length));
  }, [allCounties, data.personas, data.entities]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, t.nav.map), /*#__PURE__*/React.createElement("div", {
    className: "page-sub"
  }, selectedCounty ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      fontWeight: 600
    }
  }, selectedCounty, " \xB7 ", items.length, " ", es ? "registros" : "records") : `${personasFiltered.length + entitiesFiltered.length} ${es ? "ubicaciones" : "locations"}`)), /*#__PURE__*/React.createElement("div", {
    className: "page-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "chip " + (showEntities ? "on" : ""),
    onClick: () => setShowEntities(v => !v)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building"
  }), " ", t.nav.entities), /*#__PURE__*/React.createElement("button", {
    className: "chip " + (showPersonas ? "on" : ""),
    onClick: () => setShowPersonas(v => !v)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users"
  }), " ", t.nav.personas), selectedCounty && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      color: "var(--accent)",
      borderColor: "var(--accent)"
    },
    onClick: () => setSelectedCounty(null)
  }, "\xD7 ", es ? "Quitar filtro" : "Clear filter"))), /*#__PURE__*/React.createElement("div", {
    className: "map-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "map-side"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderBottom: "1px solid var(--line)"
    }
  }, [{
    id: "lista",
    label: es ? "Lista" : "List"
  }, {
    id: "condados",
    label: es ? "Condados" : "Counties",
    badge: allCounties.length
  }].map(tb => /*#__PURE__*/React.createElement("button", {
    key: tb.id,
    onClick: () => setSideTab(tb.id),
    style: {
      flex: 1,
      padding: "10px 4px",
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: 12.5,
      fontWeight: sideTab === tb.id ? 700 : 500,
      color: sideTab === tb.id ? "var(--accent)" : "var(--ink-3)",
      borderBottom: sideTab === tb.id ? "2px solid var(--accent)" : "2px solid transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 5
    }
  }, tb.label, tb.badge > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      background: sideTab === tb.id ? "var(--accent)" : "var(--line)",
      color: sideTab === tb.id ? "#fff" : "var(--ink-3)",
      borderRadius: 10,
      padding: "0 5px"
    }
  }, tb.badge)))), sideTab === "lista" && /*#__PURE__*/React.createElement("div", {
    className: "list"
  }, items.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      textAlign: "center",
      color: "var(--ink-4)",
      fontSize: 12
    }
  }, es ? "Sin ubicaciones" : "No locations"), items.slice(0, 400).map(it => {
    const isSel = focusItem && focusItem.kind === it.kind && focusItem.id === it.id;
    const hasCoords = it.lat && it.lng;
    return /*#__PURE__*/React.createElement("div", {
      key: it.kind + it.id,
      className: "row",
      style: {
        background: isSel ? "var(--accent-50)" : undefined
      },
      title: hasCoords ? es ? "Ver en el mapa" : "Show on map" : es ? "Sin ubicación" : "No location",
      onClick: () => {
        if (hasCoords) setFocusItem({
          kind: it.kind,
          id: it.id
        });else go({
          name: it.kind,
          id: it.id
        });
      }
    }, it.kind === "entity" ? /*#__PURE__*/React.createElement("div", {
      className: "ent-icon",
      style: {
        width: 28,
        height: 28,
        background: it.color + "22",
        border: "1.5px solid " + it.color + "66"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "building",
      style: {
        color: it.color
      }
    })) : /*#__PURE__*/React.createElement("div", {
      className: "av-circle",
      style: {
        width: 28,
        height: 28,
        fontSize: 11,
        background: it.color
      }
    }, initials(it.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, it.name), /*#__PURE__*/React.createElement("div", {
      className: "muted",
      style: {
        fontSize: 11
      }
    }, it.sub || "—")), /*#__PURE__*/React.createElement("button", {
      className: "icon-btn",
      title: es ? "Abrir perfil" : "Open profile",
      style: {
        flexShrink: 0,
        width: 28,
        height: 28
      },
      onClick: ev => {
        ev.stopPropagation();
        go({
          name: it.kind,
          id: it.id
        });
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chev-right"
    })));
  }), items.length > 400 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 14px",
      textAlign: "center",
      color: "var(--ink-4)",
      fontSize: 11
    }
  }, es ? `Mostrando 400 de ${items.length}. Usa el filtro de condado o la búsqueda para afinar.` : `Showing 400 of ${items.length}. Filter by county to narrow.`)), sideTab === "condados" && /*#__PURE__*/React.createElement("div", {
    className: "list",
    style: {
      padding: "8px 0"
    }
  }, allCounties.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 16px",
      color: "var(--ink-4)",
      fontSize: 12,
      textAlign: "center"
    }
  }, es ? "Sin datos de condado. Edita una persona y escribe la ciudad para auto-detectar." : "No county data. Edit a contact and enter a city to auto-detect."), selectedCounty && /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      cursor: "pointer",
      borderBottom: "1px solid var(--line)",
      background: "var(--accent-50)",
      padding: "8px 14px"
    },
    onClick: () => setSelectedCounty(null)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--ink-4)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 12.5,
      fontWeight: 600,
      color: "var(--ink-3)"
    }
  }, es ? "← Mostrar todos" : "← Show all")), countyStats.map(({
    county,
    personas,
    entities,
    topCities,
    color
  }) => {
    const isSelected = selectedCounty === county;
    const total = personas.length + entities.length;
    return /*#__PURE__*/React.createElement("div", {
      key: county,
      style: {
        padding: "10px 14px",
        borderBottom: "1px solid var(--line)",
        cursor: "pointer",
        background: isSelected ? color + "12" : "transparent",
        borderLeft: isSelected ? "3px solid " + color : "3px solid transparent",
        transition: "all .15s"
      },
      onClick: () => setSelectedCounty(isSelected ? null : county)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: color,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 13,
        flex: 1,
        color: isSelected ? color : "var(--ink)"
      }
    }, county), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        fontWeight: 800,
        color,
        letterSpacing: "-.02em"
      }
    }, total)), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingLeft: 18,
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, personas.length > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        color: "var(--ink-3)"
      }
    }, personas.length, " ", es ? "personas" : "people"), entities.length > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        color: "#0ea5e9"
      }
    }, entities.length, " ", es ? "entidades" : "entities")), topCities.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        paddingLeft: 18,
        marginTop: 4,
        display: "flex",
        gap: 4,
        flexWrap: "wrap"
      }
    }, topCities.map(city => /*#__PURE__*/React.createElement("span", {
      key: city,
      style: {
        fontSize: 10,
        background: color + "18",
        color,
        padding: "1px 6px",
        borderRadius: 4,
        fontWeight: 600
      }
    }, city))));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "map-canvas"
  }, /*#__PURE__*/React.createElement(MiniMap, {
    personas: mapPersonas,
    entities: mapEntities,
    go: go,
    countyColorMap: countyColorMap,
    selected: focusItem
  }), sideTab === "condados" && allCounties.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 16,
      right: 16,
      background: "rgba(255,255,255,.95)",
      backdropFilter: "blur(8px)",
      borderRadius: 10,
      padding: "10px 14px",
      boxShadow: "0 4px 20px rgba(0,0,0,.12)",
      zIndex: 1000,
      maxWidth: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: "var(--ink-4)",
      textTransform: "uppercase",
      letterSpacing: ".06em",
      marginBottom: 7
    }
  }, es ? "Leyenda" : "Legend"), countyStats.slice(0, 6).map(({
    county,
    color
  }) => /*#__PURE__*/React.createElement("div", {
    key: county,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 4,
      cursor: "pointer",
      opacity: selectedCounty && selectedCounty !== county ? 0.4 : 1
    },
    onClick: () => setSelectedCounty(selectedCounty === county ? null : county)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: "var(--ink-2)"
    }
  }, county))), countyStats.length > 6 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--ink-4)",
      marginTop: 3
    }
  }, "+", countyStats.length - 6, " m\xE1s")))));
};
window.MiniMap = MiniMap;
window.MapPage = MapPage;

;/* ===== home.jsx ===== */
// PROMEZA CRM — Dashboard / Home

const DonutChart = ({
  segments,
  size = 110
}) => {
  const cx = size / 2,
    cy = size / 2;
  const th = size * 0.19;
  const r = (size - th) / 2;
  const C = 2 * Math.PI * r;
  const total = segments.reduce((s, d) => s + d.value, 0);
  let cum = 0;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    fill: "none",
    stroke: "var(--line)",
    strokeWidth: th
  }), total > 0 && segments.map((seg, i) => {
    if (!seg.value) return null;
    const dash = seg.value / total * C;
    const off = C / 4 - cum;
    cum += dash;
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: cx,
      cy: cy,
      r: r,
      fill: "none",
      stroke: seg.color,
      strokeWidth: th - 2,
      strokeDasharray: `${dash} ${C - dash}`,
      strokeDashoffset: off
    });
  }), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy - 4,
    textAnchor: "middle",
    fontSize: size * 0.2,
    fontWeight: "800",
    fill: "var(--ink)"
  }, total), /*#__PURE__*/React.createElement("text", {
    x: cx,
    y: cy + 14,
    textAnchor: "middle",
    fontSize: size * 0.09,
    fill: "var(--ink-4)",
    fontWeight: "600"
  }, "TOTAL"));
};
const Home = ({
  t,
  lang,
  data,
  go
}) => {
  const {
    personas,
    entities
  } = data;
  const today = new Date().toISOString().slice(0, 10);
  const stageOf = p => p.stage || (p.status === "inactivo" ? "inhabilitado" : "activo");

  // Memoize all O(n) persona/entity computations — only rerun when contacts/entities actually change
  const personaStats = useMemo(() => {
    const entityTypeCounts = {};
    entities.forEach(e => {
      entityTypeCounts[e.type] = (entityTypeCounts[e.type] || 0) + 1;
    });
    const topEntityTypes = Object.entries(entityTypeCounts).sort((a, b) => b[1] - a[1]).slice(0, 6);
    const maxEntityType = topEntityTypes.length > 0 ? topEntityTypes[0][1] : 1;
    const entityContactCount = {};
    personas.forEach(p => (p.entities || []).forEach(e => {
      entityContactCount[e.id] = (entityContactCount[e.id] || 0) + 1;
    }));
    const topEntitiesByCount = entities.map(e => ({
      ...e,
      count: entityContactCount[e.id] || 0
    })).filter(e => e.count > 0).sort((a, b) => b.count - a.count).slice(0, 5);
    const maxEntityCount = topEntitiesByCount.length > 0 ? topEntitiesByCount[0].count : 1;
    const cityCounts = {};
    personas.forEach(p => {
      if (p.city) cityCounts[p.city] = (cityCounts[p.city] || 0) + 1;
    });
    const topCities = Object.entries(cityCounts).sort((a, b) => b[1] - a[1]).slice(0, 6);
    const maxCity = topCities.length > 0 ? Math.max(...topCities.map(([, c]) => c)) : 1;
    const stageActivo = personas.filter(p => stageOf(p) === "activo").length;
    const stageRevisar = personas.filter(p => stageOf(p) === "revisar").length;
    const inhabilitados = personas.filter(p => stageOf(p) === "inhabilitado").length;
    const activePersonas = personas.length - inhabilitados;
    const porRevisar = personas.filter(p => window.hasContactIssue ? window.hasContactIssue(p) : false).length;
    const recentPersonas = [...personas].sort((a, b) => (b.lastContact || "").localeCompare(a.lastContact || "")).slice(0, 6);
    const recentlyAdded = [...personas.map(p => ({
      type: "persona",
      item: p,
      date: p.lastContact || ""
    })), ...entities.map(e => ({
      type: "entity",
      item: e,
      date: e.lastContact || e.founded || ""
    }))].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);
    const todayDate = new Date();
    const dayOfYear = d => Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
    const todayDOY = dayOfYear(todayDate);
    const bdays = personas.filter(p => p.birthday).map(p => {
      const [, m, d] = p.birthday.split("-").map(n => parseInt(n));
      const dt = new Date(todayDate.getFullYear(), m - 1, d);
      let diff = dayOfYear(dt) - todayDOY;
      if (diff < 0) diff += 365;
      return {
        p,
        diff,
        dt
      };
    }).sort((a, b) => a.diff - b.diff).slice(0, 5);
    const entInactivas = entities.filter(e => (e.status || "activo") === "inactivo").length;
    const entActivas = entities.length - entInactivas;
    return {
      topEntityTypes,
      maxEntityType,
      topEntitiesByCount,
      maxEntityCount,
      topCities,
      maxCity,
      stageActivo,
      stageRevisar,
      inhabilitados: inhabilitados,
      activePersonas,
      porRevisar,
      entActivas,
      entInactivas,
      recentPersonas,
      recentlyAdded,
      bdays
    };
  }, [personas, entities]); // eslint-disable-line react-hooks/exhaustive-deps

  const {
    topEntityTypes,
    maxEntityType,
    topEntitiesByCount,
    maxEntityCount,
    topCities,
    maxCity,
    stageActivo,
    stageRevisar,
    inhabilitados,
    activePersonas,
    porRevisar,
    entActivas,
    entInactivas,
    recentPersonas,
    recentlyAdded,
    bdays
  } = personaStats;
  const stageInhabilitado = inhabilitados;
  const ENTITY_LABELS = {
    iglesia: "Iglesia",
    ong: "ONG",
    escuela: "Escuela",
    universidad: "Universidad",
    sinagoga: "Sinagoga",
    estudio: "Estudio",
    oficina: "Oficina",
    ministerio: "Ministerio"
  };

  // Tasks/projects/activity — depends on tasks/changelog/interactions, not personas
  const allTasks = useMemo(() => Object.values(data.tasks || {}).flat(), [data.tasks]);
  const pendingTasks = useMemo(() => allTasks.filter(tk => !tk.done).length, [allTasks]);
  const overdueTasks = useMemo(() => allTasks.filter(tk => !tk.done && tk.due && tk.due < today).length, [allTasks, today]);
  const projects = data.projects || [];
  const activeProjects = projects.filter(pr => pr.status === "activo").length;
  const overdueTasksList = useMemo(() => allTasks.filter(tk => !tk.done && tk.due && tk.due < today).sort((a, b) => a.due.localeCompare(b.due)).slice(0, 5).map(tk => {
    let personaName = "";
    for (const [pid, tasks] of Object.entries(data.tasks || {})) {
      if (tasks.some(t => t.id === tk.id)) {
        const p = personas.find(x => x.id === pid);
        if (p) personaName = fullName(p);
        break;
      }
    }
    return {
      ...tk,
      personaName
    };
  }), [allTasks, data.tasks, personas, today]); // eslint-disable-line react-hooks/exhaustive-deps

  const {
    activityByDay,
    maxActivity,
    totalActivity,
    last14
  } = useMemo(() => {
    const last14 = Array.from({
      length: 14
    }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - 13 + i);
      return d.toISOString().slice(0, 10);
    });
    const abd = {};
    last14.forEach(d => {
      abd[d] = 0;
    });
    Object.values(data.changelog || {}).flat().forEach(e => {
      const d = (e.date || "").slice(0, 10);
      if (abd[d] !== undefined) abd[d]++;
    });
    Object.values(data.interactions || {}).flat().forEach(e => {
      const d = (e.date || "").slice(0, 10);
      if (abd[d] !== undefined) abd[d]++;
    });
    return {
      activityByDay: abd,
      maxActivity: Math.max(1, ...Object.values(abd)),
      totalActivity: Object.values(abd).reduce((a, b) => a + b, 0),
      last14
    };
  }, [data.changelog, data.interactions]); // eslint-disable-line react-hooks/exhaustive-deps

  const in30 = new Date();
  in30.setDate(in30.getDate() + 30);
  const in30str = in30.toISOString().slice(0, 10);
  const upcomingProjects = projects.filter(pr => pr.dateStart && pr.dateStart >= today && pr.dateStart <= in30str && pr.status !== "cancelado").sort((a, b) => a.dateStart.localeCompare(b.dateStart)).slice(0, 5);
  const upcomingTasks = allTasks.filter(tk => !tk.done && tk.due && tk.due >= today && tk.due <= in30str).sort((a, b) => a.due.localeCompare(b.due)).slice(0, 3);
  const goals = (data.goals || []).filter(g => !g.archived);
  const getProjType = id => {
    const types = window.PROJECT_TYPES || [];
    return types.find(t => t.id === id) || {
      emoji: "📂",
      color: "#6366f1",
      label: id
    };
  };
  const stages = window.PIPELINE_STAGES || [];
  const KpiCard = ({
    label,
    value,
    sub,
    color,
    icon,
    route,
    delay = 0
  }) => /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-new",
    style: {
      animationDelay: delay + "ms",
      cursor: "pointer"
    },
    onClick: () => go({
      name: route
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 10,
      background: color + "18",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    style: {
      color
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: "var(--ink-4)",
      textTransform: "uppercase",
      letterSpacing: ".05em"
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      color,
      letterSpacing: "-.02em",
      lineHeight: 1
    }
  }, typeof value === "number" ? value.toLocaleString() : value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)",
      marginTop: 5,
      fontWeight: 500
    }
  }, sub));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "fadeIn .3s ease-out"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #14532d 100%)",
      borderRadius: 16,
      padding: "20px 28px",
      marginBottom: 20,
      boxShadow: "0 4px 24px rgba(0,0,0,.18)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      width: 56,
      height: 56,
      borderRadius: 14,
      background: "rgba(163,230,53,.12)",
      border: "1.5px solid rgba(163,230,53,.3)",
      display: "grid",
      placeItems: "center",
      boxShadow: "0 0 24px rgba(132,204,22,.25)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 3C9.58 3 6 6.58 6 11c0 2.83 1.4 5.33 3.55 6.88V20a1 1 0 001 1h6.9a1 1 0 001-1v-2.12C20.6 16.33 22 13.83 22 11c0-4.42-3.58-8-8-8z",
    fill: "#a3e635",
    fillOpacity: ".85"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 22h7",
    stroke: "#a3e635",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 25h5",
    stroke: "#a3e635",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 3v-2M7 5l-1.5-1.5M21 5l1.5-1.5M5 11H3M23 11h2",
    stroke: "#a3e635",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeOpacity: ".6"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 900,
      letterSpacing: "-.01em",
      color: "#f8fafc",
      lineHeight: 1.1
    }
  }, "PROME", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#a3e635"
    }
  }, "ZA")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".2em",
      color: "#a3e635",
      textTransform: "uppercase",
      marginTop: 2
    }
  }, "Marketing Group")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: "#f8fafc"
    }
  }, t.home.hello), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "#94a3b8",
      marginTop: 2
    }
  }, new Date().toLocaleDateString(lang === "en" ? "en-US" : "es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: {
      background: "rgba(255,255,255,.1)",
      border: "1px solid rgba(255,255,255,.15)",
      color: "#f8fafc"
    },
    onClick: () => go({
      name: "new-entity"
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t.nav.newEntity), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: {
      background: "#a3e635",
      color: "#0f172a",
      fontWeight: 700,
      border: "none"
    },
    onClick: () => go({
      name: "new-person"
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t.nav.newPerson))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: t.home.kpiPersonas,
    value: personas.length,
    sub: activePersonas + (lang === "en" ? " active" : " activas"),
    color: "var(--accent)",
    icon: "users",
    route: "personas",
    delay: 0
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: t.home.kpiEntidades,
    value: entities.length,
    sub: lang === "en" ? "Organizations" : "Organizaciones",
    color: "#0ea5e9",
    icon: "building",
    route: "entities",
    delay: 60
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: lang === "en" ? "Projects" : "Proyectos",
    value: projects.length,
    sub: activeProjects > 0 ? activeProjects + (lang === "en" ? " active" : " en curso") : lang === "en" ? "No active projects" : "Sin proyectos activos",
    color: activeProjects > 0 ? "#8b5cf6" : "var(--ink-4)",
    icon: "folder",
    route: "projects",
    delay: 120
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: lang === "en" ? "Tasks" : "Tareas",
    value: pendingTasks,
    sub: overdueTasks > 0 ? overdueTasks + (lang === "en" ? " overdue ⚠" : " vencidas ⚠") : lang === "en" ? "Up to date" : "Al día",
    color: overdueTasks > 0 ? "var(--bad)" : "var(--good)",
    icon: "check",
    route: "tasks",
    delay: 180
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: lang === "en" ? "Active" : "Activos",
    value: stageActivo,
    sub: (lang === "en" ? "of " : "de ") + personas.length + (lang === "en" ? " people" : " personas"),
    color: "#10b981",
    icon: "star",
    route: "pipeline",
    delay: 240
  })), overdueTasksList.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff5f5",
      border: "1px solid #fecaca",
      borderRadius: 12,
      padding: "12px 16px",
      marginBottom: 16,
      animation: "slideUp .3s ease-out"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 16,
    style: {
      color: "#ef4444"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 13.5,
      color: "#991b1b"
    }
  }, overdueTasksList.length, " ", lang === "en" ? "overdue task" + (overdueTasksList.length !== 1 ? "s" : "") : "tarea" + (overdueTasksList.length !== 1 ? "s" : "") + " vencida" + (overdueTasksList.length !== 1 ? "s" : "")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      marginLeft: "auto",
      fontSize: 11,
      background: "#fef2f2",
      borderColor: "#fecaca",
      color: "#b91c1c"
    },
    onClick: () => go({
      name: "tasks"
    })
  }, lang === "en" ? "View all" : "Ver todas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, overdueTasksList.map(tk => /*#__PURE__*/React.createElement("div", {
    key: tk.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 10px",
      background: "#fff",
      borderRadius: 7,
      border: "1px solid #fecaca",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 11,
    style: {
      color: "#ef4444",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, tk.text), tk.personaName && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#b91c1c",
      fontWeight: 600
    }
  }, "\xB7 ", tk.personaName), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "#ef4444",
      fontWeight: 700
    }
  }, fmtDate(tk.due, lang)))))), /*#__PURE__*/React.createElement("div", {
    className: "dash-grid-3",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      animation: "slideUp .35s ease-out"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, lang === "en" ? "Contact stages" : "Etapas de contacto"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      fontSize: 11
    },
    onClick: () => go({
      name: "pipeline"
    })
  }, "Pipeline \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px 16px",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DonutChart, {
    segments: [{
      value: stageActivo,
      color: "#10b981"
    }, {
      value: stageRevisar,
      color: "#f59e0b"
    }, {
      value: stageInhabilitado,
      color: "#94a3b8"
    }],
    size: 110
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, [{
    label: lang === "en" ? "Active" : "Activo",
    value: stageActivo,
    color: "#10b981"
  }, {
    label: lang === "en" ? "Review" : "Revisar",
    value: stageRevisar,
    color: "#f59e0b"
  }, {
    label: lang === "en" ? "Disabled" : "Inhabilitado",
    value: stageInhabilitado,
    color: "#94a3b8"
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 3,
      background: s.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-2)",
      flex: 1
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 800,
      color: s.color
    }
  }, s.value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-4)",
      minWidth: 30,
      textAlign: "right"
    }
  }, personas.length > 0 ? Math.round(s.value / personas.length * 100) + "%" : "0%")))))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      animation: "slideUp .35s ease-out .05s both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, lang === "en" ? "Entity types" : "Tipos de entidad"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      fontSize: 11
    },
    onClick: () => go({
      name: "entities"
    })
  }, lang === "en" ? "View →" : "Ver →")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px 14px"
    }
  }, topEntityTypes.map(([type, count]) => /*#__PURE__*/React.createElement("div", {
    key: type,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-3)",
      minWidth: 72,
      textAlign: "right",
      flexShrink: 0
    }
  }, ENTITY_LABELS[type] || type), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 8,
      background: "var(--line)",
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: count / maxEntityType * 100 + "%",
      background: "linear-gradient(90deg, #0ea5e9, #6366f1)",
      borderRadius: 4,
      transition: "width .6s ease"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--ink)",
      minWidth: 22,
      textAlign: "right"
    }
  }, count))), topEntityTypes.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-4)",
      textAlign: "center",
      padding: "24px 0"
    }
  }, lang === "en" ? "No entities" : "Sin entidades"), /*#__PURE__*/React.createElement("div", {
    onClick: () => go({
      name: "entities",
      preset: "inactivas"
    }),
    title: lang === "en" ? "Show inactive entities" : "Ver entidades inactivas",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 8,
      paddingTop: 10,
      borderTop: "1px solid var(--line)",
      cursor: "pointer",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 3,
      background: "#94a3b8",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "var(--ink-3)",
      fontWeight: 600
    }
  }, lang === "en" ? "No longer broadcasting / inactive" : "Ya no transmiten / inactivas"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 800,
      color: entInactivas > 0 ? "#64748b" : "var(--good)"
    }
  }, entInactivas), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-4)"
    }
  }, "\u203A")))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      animation: "slideUp .35s ease-out .1s both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, lang === "en" ? "Top entities" : "Top entidades"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      fontSize: 11
    },
    onClick: () => go({
      name: "entities"
    })
  }, lang === "en" ? "View all →" : "Ver todas →")), /*#__PURE__*/React.createElement("div", null, topEntitiesByCount.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "28px 0",
      fontSize: 12
    }
  }, lang === "en" ? "No data" : "Sin datos") : topEntitiesByCount.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    className: "hover-row",
    style: {
      animationDelay: i * 40 + "ms"
    },
    onClick: () => go({
      name: "entity",
      id: e.id
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 7,
      background: "var(--accent-50)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building",
    size: 13
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 12.5,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, e.name), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: "var(--line)",
      borderRadius: 2,
      marginTop: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: e.count / maxEntityCount * 100 + "%",
      background: "var(--accent)",
      borderRadius: 2,
      transition: "width .6s ease"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      color: "var(--accent)",
      minWidth: 24,
      textAlign: "right"
    }
  }, e.count)))))), /*#__PURE__*/React.createElement("div", {
    className: "dash-grid-2",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      animation: "slideUp .35s ease-out .15s both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, lang === "en" ? "Contact status" : "Estado de contactos"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      fontSize: 11
    },
    onClick: () => go({
      name: "personas"
    })
  }, lang === "en" ? "View list →" : "Ver lista →")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 12px 12px"
    }
  }, [{
    label: lang === "en" ? "Active" : "Activos",
    sub: lang === "en" ? "With active follow-up" : "Con seguimiento vigente",
    value: activePersonas,
    color: "var(--good)",
    icon: "users",
    preset: "activos"
  }, {
    label: lang === "en" ? "Disabled" : "Inhabilitados",
    sub: lang === "en" ? "Archived or inactive" : "Archivados o inactivos",
    value: inhabilitados,
    color: "var(--ink-4)",
    icon: "shield",
    preset: "inhabilitados"
  }, {
    label: lang === "en" ? "Under review" : "Por revisar",
    sub: lang === "en" ? "Information with issues" : "Información con problemas",
    value: porRevisar,
    color: porRevisar > 0 ? "#f59e0b" : "var(--good)",
    icon: "alert",
    preset: "revisar"
  }].map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: row.label,
    className: "status-row-card",
    style: {
      animationDelay: i * 60 + "ms"
    },
    onClick: () => go({
      name: "personas",
      preset: row.preset
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 9,
      background: row.color + "15",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: row.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 12.5,
      color: "var(--ink-2)"
    }
  }, row.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-4)",
      marginTop: 1
    }
  }, row.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      color: row.color,
      minWidth: 40,
      textAlign: "right",
      letterSpacing: "-.02em"
    }
  }, row.value.toLocaleString()))))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      animation: "slideUp .35s ease-out .2s both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, lang === "en" ? "Activity — last 14 days" : "Actividad — últimos 14 días"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      color: "var(--accent)",
      background: "var(--accent-50)",
      padding: "2px 8px",
      borderRadius: 6
    }
  }, totalActivity, " ", lang === "en" ? "records" : "registros")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 4,
      height: 80
    }
  }, last14.map((d, i) => {
    const v = activityByDay[d] || 0;
    const h = Math.max(3, Math.round(v / maxActivity * 72));
    const isToday = d === today;
    const dayLabel = new Date(d + "T12:00:00").getDate();
    return /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3
      },
      title: d + ": " + v + " eventos"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        height: h,
        background: isToday ? "var(--accent)" : v > 0 ? "var(--accent-100)" : "var(--line)",
        borderRadius: "4px 4px 0 0",
        transition: "height .6s cubic-bezier(.34,1.56,.64,1)",
        transitionDelay: i * 20 + "ms",
        boxShadow: isToday ? "0 0 8px rgba(79,70,229,.4)" : "none"
      }
    }), (i === 0 || i === 6 || i === 13) && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: "var(--ink-4)"
      }
    }, dayLabel));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      color: "var(--ink-4)",
      textTransform: "uppercase",
      letterSpacing: ".06em",
      marginBottom: 7
    }
  }, lang === "en" ? "Recently added" : "Recién registrados"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      marginBottom: 12
    }
  }, recentlyAdded.map(({
    type,
    item
  }, i) => /*#__PURE__*/React.createElement("div", {
    key: item.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "4px 0",
      cursor: "pointer",
      animation: "slideUp .3s ease-out both",
      animationDelay: 100 + i * 40 + "ms"
    },
    onClick: () => go({
      name: type === "persona" ? "person" : "entity",
      id: item.id
    })
  }, type === "persona" ? /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: item.color,
      width: 26,
      height: 26,
      fontSize: 9,
      flexShrink: 0
    }
  }, initials(fullName(item))) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 7,
      background: "var(--accent-50)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building",
    size: 12
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 12.5,
      fontWeight: 600,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, type === "persona" ? fullName(item) : item.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "var(--accent)",
      background: "var(--accent-50)",
      padding: "1px 6px",
      borderRadius: 5,
      flexShrink: 0,
      fontWeight: 700
    }
  }, "#", window.getUID ? window.getUID(item.id) : item.id)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      color: "var(--ink-4)",
      textTransform: "uppercase",
      letterSpacing: ".06em",
      marginBottom: 9
    }
  }, lang === "en" ? "Top cities" : "Top ciudades"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "5px 14px"
    }
  }, topCities.map(([city, count], i) => /*#__PURE__*/React.createElement("div", {
    key: city,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      borderRadius: 3,
      background: "linear-gradient(90deg, var(--accent), #818cf8)",
      width: Math.max(4, Math.round(count / maxCity * 50)),
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-2)",
      fontWeight: 500,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      flex: 1
    }
  }, city), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-4)"
    }
  }, count))))))), /*#__PURE__*/React.createElement("div", {
    className: "dash-grid-map",
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr 1fr",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      animation: "slideUp .35s ease-out .25s both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, t.home.coverageMap), /*#__PURE__*/React.createElement("div", {
    className: "card-meta"
  }, personas.length + entities.length, " ", lang === "en" ? "records" : "registros")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 268
    }
  }, /*#__PURE__*/React.createElement(MiniMap, {
    personas: personas,
    entities: entities,
    go: go
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      animation: "slideUp .35s ease-out .3s both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, lang === "en" ? "Next 30 days" : "Próximos 30 días"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      fontSize: 11
    },
    onClick: () => go({
      name: "calendar"
    })
  }, lang === "en" ? "Calendar →" : "Calendario →")), upcomingProjects.length === 0 && upcomingTasks.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "32px 0",
      fontSize: 12
    }
  }, lang === "en" ? "No upcoming events" : "Sin eventos próximos") : /*#__PURE__*/React.createElement("div", null, upcomingProjects.map((pr, i) => {
    const pt = getProjType(pr.type);
    const daysUntil = Math.round((new Date(pr.dateStart + "T12:00:00") - new Date(today + "T12:00:00")) / 86400000);
    return /*#__PURE__*/React.createElement("div", {
      key: pr.id,
      className: "hover-row",
      style: {
        animationDelay: i * 50 + "ms"
      },
      onClick: () => go({
        name: "project",
        id: pr.id
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 30,
        height: 30,
        borderRadius: 8,
        background: pt.color + "18",
        display: "grid",
        placeItems: "center",
        fontSize: 15,
        flexShrink: 0
      }
    }, pt.emoji), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 12.5,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, pr.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--ink-3)"
      }
    }, fmtDate(pr.dateStart, lang))), /*#__PURE__*/React.createElement("span", {
      className: "day-badge",
      style: {
        background: pt.color + "15",
        color: pt.color
      }
    }, daysUntil === 0 ? lang === "en" ? "Today" : "Hoy" : "+" + daysUntil + "d"));
  }), upcomingTasks.map((tk, i) => {
    let ownerName = "";
    for (const [pid, tasks] of Object.entries(data.tasks || {})) {
      if (tasks.some(t => t.id === tk.id)) {
        const p = personas.find(p => p.id === pid);
        if (p) ownerName = p.first;
        break;
      }
    }
    const daysUntil = Math.round((new Date(tk.due + "T12:00:00") - new Date(today + "T12:00:00")) / 86400000);
    return /*#__PURE__*/React.createElement("div", {
      key: tk.id,
      className: "hover-row",
      style: {
        animationDelay: (upcomingProjects.length + i) * 50 + "ms"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 30,
        height: 30,
        borderRadius: 8,
        background: "#f59e0b18",
        display: "grid",
        placeItems: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 13
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 12.5,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, tk.text), ownerName && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--ink-3)"
      }
    }, ownerName)), /*#__PURE__*/React.createElement("span", {
      className: "day-badge",
      style: {
        background: "#f59e0b15",
        color: "#f59e0b"
      }
    }, "+", daysUntil, "d"));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      animation: "slideUp .35s ease-out .35s both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, t.home.upcomingBdays)), bdays.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "32px 0",
      fontSize: 12
    }
  }, lang === "en" ? "No birthdays registered" : "Sin cumpleaños registrados") : bdays.map(({
    p,
    dt,
    diff
  }, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "hover-row",
    style: {
      animationDelay: i * 60 + "ms"
    },
    onClick: () => go({
      name: "person",
      id: p.id
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: p.color,
      flexShrink: 0
    }
  }, initials(fullName(p))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, fullName(p)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-3)"
    }
  }, dt.toLocaleDateString(lang === "en" ? "en-US" : "es-ES", {
    day: "numeric",
    month: "short"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "day-badge",
    style: {
      background: diff === 0 ? "#ef444415" : diff <= 7 ? "#f59e0b15" : "var(--bg-soft)",
      color: diff === 0 ? "var(--bad)" : diff <= 7 ? "#f59e0b" : "var(--ink-3)"
    }
  }, diff === 0 ? lang === "en" ? "Today" : "Hoy" : "+" + diff + "d"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      animation: "slideUp .35s ease-out .4s both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, lang === "en" ? "Recent contacts" : "Contactos recientes"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      fontSize: 11
    },
    onClick: () => go({
      name: "personas"
    })
  }, lang === "en" ? "View all →" : "Ver todos →")), /*#__PURE__*/React.createElement("div", null, recentPersonas.map((p, i) => {
    const stage = stages.find(s => s.id === stageOf(p));
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      className: "hover-row",
      style: {
        animationDelay: i * 40 + "ms"
      },
      onClick: () => go({
        name: "person",
        id: p.id
      })
    }, /*#__PURE__*/React.createElement("div", {
      className: "av-circle",
      style: {
        background: p.color,
        flexShrink: 0
      }
    }, initials(fullName(p))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13
      }
    }, fullName(p)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-3)"
      }
    }, fmtRole(p.role, t), p.city ? " · " + p.city : "")), stage && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        fontWeight: 700,
        padding: "2px 7px",
        borderRadius: 5,
        background: stage.color + "14",
        color: stage.color,
        whiteSpace: "nowrap",
        flexShrink: 0
      }
    }, window.stageLabel ? window.stageLabel(stage.id, lang) : stage.label), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 10.5,
        color: "var(--ink-4)",
        flexShrink: 0,
        minWidth: 60,
        textAlign: "right"
      }
    }, fmtDate(p.lastContact, lang)));
  })))));
};
window.Home = Home;

;/* ===== lists.jsx ===== */
// PROMEZA CRM — Personas list + Entities list (with CSV export + import)

// ─── CSV parser (handles quoted fields) ───
const parseCSV = text => {
  const lines = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
  const parse = line => {
    const cols = [];
    let cur = "",
      inQ = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"' && !inQ) {
        inQ = true;
      } else if (c === '"' && inQ && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else if (c === '"' && inQ) {
        inQ = false;
      } else if (c === ',' && !inQ) {
        cols.push(cur.trim());
        cur = "";
      } else cur += c;
    }
    cols.push(cur.trim());
    return cols;
  };
  const headers = parse(lines[0]).map(h => h.toLowerCase().trim());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const vals = parse(lines[i]);
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h] = vals[idx] || "";
    });
    rows.push(obj);
  }
  return {
    headers,
    rows
  };
};

// ─── Parse file to rows (CSV or XLSX) — reads ALL sheets ───
const parseFile = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  const ext = file.name.split(".").pop().toLowerCase();
  if (ext === "csv") {
    reader.onload = e => {
      try {
        resolve(parseCSV(e.target.result));
      } catch (err) {
        reject(err);
      }
    };
    reader.readAsText(file, "UTF-8");
  } else if (ext === "xlsx" || ext === "xls") {
    reader.onload = e => {
      try {
        const wb = XLSX.read(e.target.result, {
          type: "array"
        });
        const allRows = [];
        for (const sheetName of wb.SheetNames) {
          const ws = wb.Sheets[sheetName];
          const raw = XLSX.utils.sheet_to_json(ws, {
            header: 1,
            defval: ""
          });
          if (raw.length < 2) continue;
          if (!raw[0].some(cell => String(cell).trim())) continue; // skip fully empty header row
          const rawHeaders = raw[0].map(h => String(h).toLowerCase().trim());
          // Detect "A-B type": has "name" col without "first name", unnamed col right after = last name
          const nameIdx = rawHeaders.indexOf("name");
          const useUnnamedAsLastName = nameIdx >= 0 && !rawHeaders.includes("first name") && !rawHeaders.some(h => h === "last name") && nameIdx + 1 < rawHeaders.length && rawHeaders[nameIdx + 1] === "";
          for (const rawRow of raw.slice(1)) {
            const obj = {};
            // First occurrence wins — prevents empty/repeated header keys from overwriting real data
            rawHeaders.forEach((h, i) => {
              if (h && !Object.prototype.hasOwnProperty.call(obj, h)) {
                obj[h] = String(rawRow[i] || "").trim();
              }
            });
            // Inject last name from the unnamed column that follows "name" in A-B type sheets
            if (useUnnamedAsLastName && String(rawRow[nameIdx + 1] || "").trim()) {
              obj["last name"] = String(rawRow[nameIdx + 1] || "").trim();
            }
            if (Object.values(obj).some(v => v)) allRows.push(obj);
          }
        }
        resolve({
          headers: [],
          rows: allRows
        });
      } catch (err) {
        reject(err);
      }
    };
    reader.readAsArrayBuffer(file);
  } else {
    reject(new Error("Formato no soportado. Usa .csv, .xlsx o .xls"));
  }
});

// ─── Column matcher ───
const findCol = (rowObj, aliases) => {
  const keys = Object.keys(rowObj);
  for (const alias of aliases) {
    const match = keys.find(k => k === alias || k.replace(/[^a-z0-9]/g, "") === alias.replace(/[^a-z0-9]/g, ""));
    if (match !== undefined) return rowObj[match] || "";
  }
  return "";
};

// ─── Import Modal ───
const ImportModal = ({
  type,
  lang,
  onClose,
  onImport
}) => {
  const [dragging, setDragging] = React.useState(false);
  const [preview, setPreview] = React.useState(null);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const inputRef = React.useRef();
  const isPersona = type === "personas";
  const mapPersonaRow = (row, idx, totalExisting) => {
    const first = findCol(row, ["nombre", "first name", "name", "first", "given name"]);
    const last = findCol(row, ["apellido", "last name", "last", "surname"]);
    if (!first && !last) return null;
    const palette = ["#2F6BFF", "#0E7C66", "#B45309", "#7C3AED", "#BE185D", "#0369A1", "#15803D"];
    const color = palette[(first.charCodeAt(0) || 0) % palette.length];
    const ig = findCol(row, ["instagram"]);
    const fb = findCol(row, ["facebook"]);
    const tiktok = findCol(row, ["tiktok"]);
    const x = findCol(row, ["x", "twitter"]);
    const tagsRaw = findCol(row, ["etiquetas", "tags", "labels"]);
    const tagsList = tagsRaw ? tagsRaw.split(/[,;|]/).map(s => s.trim()).filter(Boolean) : [];
    // Personal phone first, then church/additional phone
    const phone1 = findCol(row, ["personal telephone", "teléfono", "telefono", "phone", "celular", "móvil", "movil", "telephone"]);
    const phone2 = findCol(row, ["church telephone", "church phone"]);
    const phones = [];
    if (phone1) phones.push({
      value: phone1,
      label: "Personal"
    });
    if (phone2) phones.push({
      value: phone2,
      label: "Iglesia"
    });
    // Primary email then secondary
    const email1 = findCol(row, ["email", "correo", "e-mail"]);
    const email2 = findCol(row, ["email 2", "email2", "correo 2", "correo2"]);
    const emails = [];
    if (email1) emails.push({
      value: email1,
      label: "Personal"
    });
    if (email2) emails.push({
      value: email2,
      label: "Alternativo"
    });
    return {
      id: "p" + (totalExisting + idx + 1),
      first,
      last,
      role: findCol(row, ["cargo", "role", "puesto", "title", "position"]) || "otro",
      roleOther: "",
      email: email1,
      phone: phone1,
      phones,
      emails,
      address: findCol(row, ["dirección", "direccion", "home address", "address"]),
      zip: findCol(row, ["zip code", "zip", "código postal", "codigo postal"]),
      city: findCol(row, ["ciudad", "city"]),
      state: findCol(row, ["estado/provincia", "state", "provincia"]),
      country: findCol(row, ["país", "pais", "country"]) || "USA",
      lat: 0,
      lng: 0,
      website: findCol(row, ["sitio web", "web", "website"]),
      social: {
        ig,
        fb,
        tiktok,
        x
      },
      entities: [],
      tags: tagsList,
      language: findCol(row, ["idioma", "language"]) || "es",
      status: "activo",
      stage: findCol(row, ["etapa pipeline", "etapa", "stage", "pipeline"]) || "activo",
      source: findCol(row, ["fuente", "source", "origen"]),
      nextAction: findCol(row, ["próxima acción", "proxima accion", "next action", "proximaaccion"]),
      birthday: findCol(row, ["cumpleaños", "cumpleanios", "birthday"]),
      lastContact: findCol(row, ["último contacto", "ultimo contacto", "last contact"]),
      color
    };
  };
  const mapEntityRow = (row, idx, totalExisting) => {
    // "church name" takes priority over generic "name" so person rows don't become entities
    const name = findCol(row, ["church name", "nombre", "entidad", "name"]);
    if (!name) return null;
    const ig = findCol(row, ["instagram"]);
    const fb = findCol(row, ["facebook"]);
    const tiktok = findCol(row, ["tiktok"]);
    const x = findCol(row, ["x", "twitter"]);
    const tagsRaw = findCol(row, ["etiquetas", "tags"]);
    const sizeRaw = findCol(row, ["members", "tamaño", "tamano", "size", "miembros"]);
    return {
      id: "e" + (totalExisting + idx + 1),
      name,
      type: findCol(row, ["tipo", "type"]) || "iglesia",
      email: findCol(row, ["email", "correo"]),
      phone: findCol(row, ["church telephone", "teléfono", "telefono", "telephone", "phone"]),
      address: findCol(row, ["adress church", "address church", "dirección", "direccion", "address"]),
      zip: findCol(row, ["zip code", "zip", "código postal", "codigo postal"]),
      city: findCol(row, ["ciudad", "city"]),
      state: findCol(row, ["estado/provincia", "state", "provincia"]),
      country: findCol(row, ["país", "pais", "country"]) || "USA",
      lat: 0,
      lng: 0,
      website: findCol(row, ["sitio web", "web", "website"]),
      social: {
        ig,
        fb,
        tiktok,
        x
      },
      size: sizeRaw ? parseInt(sizeRaw) || null : null,
      founded: findCol(row, ["año fundación", "ano fundacion", "founded", "fundacion"]),
      parent: null,
      tags: tagsRaw ? tagsRaw.split(/[,;|]/).map(s => s.trim()).filter(Boolean) : [],
      phones: [],
      emails: [],
      schedule: []
    };
  };
  const handleFile = async file => {
    setError("");
    setPreview(null);
    setLoading(true);
    try {
      const {
        rows
      } = await parseFile(file);
      const mapped = rows.map((r, i) => isPersona ? mapPersonaRow(r, i, 0) : mapEntityRow(r, i, 0)).filter(Boolean);
      if (!mapped.length) throw new Error("No se encontraron registros válidos. Revisa que el archivo tenga columnas Nombre/Apellido.");
      setPreview({
        file,
        rows: mapped
      });
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  const confirm = () => {
    if (preview) onImport(preview.rows);
  };
  const onDrop = e => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  };
  const label = isPersona ? "Contactos" : "Entidades";
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-veil",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      width: "min(520px,100%)"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload"
  }), " Importar ", label), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--accent-50)",
      border: "1px solid var(--accent-100)",
      borderRadius: 8,
      padding: "10px 14px",
      marginBottom: 16,
      fontSize: 12.5,
      color: "var(--ink-2)",
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Columnas reconocidas autom\xE1ticamente:"), /*#__PURE__*/React.createElement("br", null), isPersona ? "Nombre/First Name/Name, Apellido/Last Name, Title/Cargo, Email, Email 2, Personal Telephone/Teléfono, Church Telephone, Dirección, ZIP/Zip Code, Ciudad/City, State, Country, Church Name, Instagram, Facebook, TikTok, Etiquetas, Cumpleaños, Etapa Pipeline" : "Church Name/Nombre, Tipo, Email, Church Telephone/Teléfono, Dirección, ZIP/Zip Code, Ciudad, State, Country, Members/Tamaño, Website, Etiquetas"), /*#__PURE__*/React.createElement("div", {
    onClick: () => inputRef.current && inputRef.current.click(),
    onDragOver: e => {
      e.preventDefault();
      setDragging(true);
    },
    onDragLeave: () => setDragging(false),
    onDrop: onDrop,
    style: {
      border: "2px dashed " + (dragging ? "var(--accent)" : "var(--line)"),
      borderRadius: 10,
      padding: "32px 20px",
      textAlign: "center",
      cursor: "pointer",
      background: dragging ? "var(--accent-50)" : "var(--bg-soft)",
      transition: "all .15s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      marginBottom: 8
    }
  }, "\uD83D\uDCC2"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      marginBottom: 4
    }
  }, loading ? "Procesando…" : "Arrastra tu archivo aquí"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)"
    }
  }, "o haz clic para seleccionar \xB7 CSV, XLSX o XLS"), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "file",
    accept: ".csv,.xlsx,.xls",
    style: {
      display: "none"
    },
    onChange: e => e.target.files[0] && handleFile(e.target.files[0])
  })), error && /*#__PURE__*/React.createElement("div", {
    className: "auth-error",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 14
  }), " ", error), preview && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: "12px 14px",
      background: "#f0fdf4",
      border: "1px solid #bbf7d0",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: "#166534",
      marginBottom: 6
    }
  }, "\u2713 ", preview.rows.length, " ", label.toLowerCase(), " listas para importar"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#166534"
    }
  }, "Archivo: ", /*#__PURE__*/React.createElement("strong", null, preview.file.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 12,
      color: "var(--ink-3)"
    }
  }, "Primeros registros: ", preview.rows.slice(0, 3).map(r => isPersona ? r.first + " " + r.last : r.name).join(" · "), preview.rows.length > 3 && " ···"))), /*#__PURE__*/React.createElement("div", {
    className: "modal-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onClose
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    disabled: !preview,
    onClick: confirm
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " Importar ", preview ? preview.rows.length : "", " ", label.toLowerCase()))));
};

// ─── Shared filter field helpers ───
const FField = ({
  label,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: "field",
  style: {
    marginBottom: 0
  }
}, /*#__PURE__*/React.createElement("label", {
  style: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: ".05em",
    color: "var(--ink-3)",
    fontWeight: 600
  }
}, label), children);

// Row click: Ctrl/⌘+click or middle-click opens the profile in a NEW TAB (via the
// hash URL); a plain click navigates in place.
const openRoute = (e, go, r) => {
  if (e && (e.ctrlKey || e.metaKey || e.button === 1)) {
    if (e.preventDefault) e.preventDefault();
    const hash = window.PROMEZA_HASH ? window.PROMEZA_HASH(r) : "";
    try {
      window.open(location.pathname + location.search + hash, "_blank");
    } catch (_) {
      go(r);
    }
  } else if (!e || e.button === 0 || e.button === undefined) {
    go(r);
  }
};

// Remember Contactos filters across navigation: entering a profile and pressing
// Back restores the same filter / search / page instead of resetting to the full list.
const _personasFilters = {};
const PersonasList = ({
  t,
  lang,
  data,
  go,
  route,
  onImportPersonas,
  globalQ = "",
  onBulkDelete,
  onBulkUpdateStatus,
  onBulkAddTag,
  onBulkAddTask,
  segments,
  onAddSegment,
  onDeleteSegment,
  users,
  currentUser
}) => {
  const F = _personasFilters;
  const [role, setRole] = React.useState(Array.isArray(F.role) ? F.role : []); // multi-select role keys; [] = all
  const [issue, setIssue] = React.useState(F.issue !== undefined ? F.issue : false);
  const [genderF, setGenderF] = React.useState(F.genderF !== undefined ? F.genderF : "all");
  const [country, setCountry] = React.useState(F.country !== undefined ? F.country : "all");
  const [stateFilter, setStateFilter] = React.useState(F.stateFilter !== undefined ? F.stateFilter : "");
  const [status, setStatus] = React.useState(F.status !== undefined ? F.status : "all");
  const [stageFilter, setStageFilter] = React.useState(F.stageFilter !== undefined ? F.stageFilter : "all");
  const [langFilter, setLangFilter] = React.useState(F.langFilter !== undefined ? F.langFilter : "all");
  const [city, setCity] = React.useState(F.city !== undefined ? F.city : "");
  const [countyFilter, setCountyFilter] = React.useState(F.countyFilter !== undefined ? F.countyFilter : "");
  const [zip, setZip] = React.useState(F.zip !== undefined ? F.zip : "");
  const [tagFilter, setTagFilter] = React.useState(F.tagFilter !== undefined ? F.tagFilter : "");
  const [emailFilter, setEmailFilter] = React.useState(F.emailFilter !== undefined ? F.emailFilter : "");
  const [phoneFilter, setPhoneFilter] = React.useState(F.phoneFilter !== undefined ? F.phoneFilter : "");
  const [q, setQ] = React.useState(F.q !== undefined ? F.q : "");
  const [showFilters, setShowFilters] = React.useState(F.showFilters !== undefined ? F.showFilters : false);
  const [showImport, setShowImport] = React.useState(false);
  const [selected, setSelected] = React.useState(new Set());
  const [bulkTag, setBulkTag] = React.useState("");
  const [showBulkTagInput, setShowBulkTagInput] = React.useState(false);
  const [showBulkTaskForm, setShowBulkTaskForm] = React.useState(false);
  const [bulkTaskText, setBulkTaskText] = React.useState("");
  const [bulkTaskDue, setBulkTaskDue] = React.useState("");
  const [bulkTaskAssignee, setBulkTaskAssignee] = React.useState("");
  const [savingSegment, setSavingSegment] = React.useState(false);
  const [segmentName, setSegmentName] = React.useState("");
  const [page, setPage] = React.useState(F.page !== undefined ? F.page : 0);
  const PAGE_SIZE = 100;

  // Persist filters so they survive entering a profile and pressing Back.
  React.useEffect(() => {
    Object.assign(_personasFilters, {
      issue,
      genderF,
      role,
      country,
      stateFilter,
      status,
      stageFilter,
      langFilter,
      city,
      countyFilter,
      zip,
      tagFilter,
      emailFilter,
      phoneFilter,
      q,
      page,
      showFilters
    });
  }, [issue, genderF, role, country, stateFilter, status, stageFilter, langFilter, city, countyFilter, zip, tagFilter, emailFilter, phoneFilter, q, page, showFilters]);
  const countries = React.useMemo(() => ["all", ...new Set(data.personas.map(p => p.country).filter(Boolean))], [data.personas]);
  const STATE_NORM = {
    "Giorgia": "Georgia",
    "IDAHO": "Idaho",
    "Idaho": "Idaho",
    "Miami": "Florida",
    "m": null,
    "USA": null,
    "FL": "Florida",
    "CA": "California",
    "TX": "Texas",
    "NY": "New York",
    "GA": "Georgia",
    "PA": "Pennsylvania",
    "OH": "Ohio",
    "IL": "Illinois",
    "MI": "Michigan",
    "NJ": "New Jersey",
    "NC": "North Carolina",
    "VA": "Virginia",
    "WA": "Washington",
    "AZ": "Arizona",
    "TN": "Tennessee",
    "MO": "Missouri",
    "MD": "Maryland",
    "WI": "Wisconsin",
    "MN": "Minnesota",
    "CO": "Colorado",
    "AL": "Alabama",
    "SC": "South Carolina",
    "LA": "Louisiana",
    "KY": "Kentucky",
    "OR": "Oregon",
    "OK": "Oklahoma",
    "CT": "Connecticut",
    "UT": "Utah",
    "NV": "Nevada",
    "AR": "Arkansas",
    "MS": "Mississippi",
    "KS": "Kansas",
    "NM": "New Mexico",
    "NE": "Nebraska",
    "WV": "West Virginia",
    "ID": "Idaho",
    "HI": "Hawaii",
    "NH": "New Hampshire",
    "ME": "Maine",
    "RI": "Rhode Island",
    "MT": "Montana",
    "DE": "Delaware",
    "SD": "South Dakota",
    "ND": "North Dakota",
    "AK": "Alaska",
    "VT": "Vermont",
    "WY": "Wyoming",
    "DC": "District of Columbia"
  };
  const normState = s => {
    if (!s) return null;
    const n = STATE_NORM[s];
    return n === undefined ? s : n;
  };
  const states = React.useMemo(() => [...new Set(data.personas.map(p => normState(p.state)).filter(Boolean))].sort(), [data.personas]);
  const roles = ["all", ...Object.keys(t.roles)];
  const stageOf = p => p.stage || (p.status === "inactivo" ? "inhabilitado" : "activo");
  const rows = React.useMemo(() => data.personas.filter(p => {
    if (issue && !(window.hasContactIssue && window.hasContactIssue(p))) return false;
    if (genderF !== "all" && (p.gender || "") !== genderF) return false;
    if (role.length) {
      const pr = p.roles && p.roles.length ? p.roles : p.role ? [p.role] : [];
      if (!role.some(r => pr.includes(r))) return false;
    }
    if (country !== "all" && p.country !== country) return false;
    if (stateFilter && !(normState(p.state) || "").toLowerCase().includes(stateFilter.toLowerCase())) return false;
    if (status !== "all" && p.status !== status) return false;
    if (stageFilter !== "all" && stageOf(p) !== stageFilter) return false;
    if (langFilter !== "all" && p.language !== langFilter) return false;
    if (city && !(p.city || "").toLowerCase().includes(city.toLowerCase())) return false;
    if (countyFilter && !(p.county || "").toLowerCase().includes(countyFilter.toLowerCase())) return false;
    if (zip && !(p.zip || "").toLowerCase().includes(zip.toLowerCase())) return false;
    if (tagFilter && !(p.tags || []).some(tg => tg.toLowerCase().includes(tagFilter.toLowerCase()))) return false;
    const norm = s => (s || "").toLowerCase();
    const allEmails = [p.email || "", ...(p.emails || []).map(e => e.value || "")].join(" ").toLowerCase();
    const allPhones = [p.phone || "", ...(p.phones || []).map(ph => ph.value || "")].join(" ").toLowerCase();
    if (emailFilter && !allEmails.includes(emailFilter.toLowerCase())) return false;
    if (phoneFilter && !allPhones.includes(phoneFilter.toLowerCase())) return false;
    const checkQ = query => {
      if (!query) return true;
      const sq = query.trim().toLowerCase();
      // Phone search: compare digits only so "(562) 209-9991", "562-209-9991",
      // "5622099991" all match regardless of how the number is stored.
      const qDigits = sq.replace(/\D/g, "");
      if (qDigits.length >= 7 && allPhones.replace(/\D/g, "").includes(qDigits)) return true;
      const stripped = sq.replace(/^#/, "");
      if (/^\d+$/.test(stripped)) return (p.uid || "").startsWith(stripped);
      const searchStr = [norm(p.first), norm(p.last), allEmails, allPhones, norm(p.city), norm(p.county), norm(p.state), norm(p.country), norm(p.role), (p.roles || []).map(norm).join(" "), (p.tags || []).map(norm).join(" ")].join(" ");
      const words = sq.split(/\s+/).filter(Boolean);
      return searchStr.includes(sq) || words.every(w => searchStr.includes(w));
    };
    if (!checkQ(q) || !checkQ(globalQ)) return false;
    return true;
  }).sort((a, b) => {
    const fa = fullName(a),
      fb = fullName(b);
    if (!fa && !fb) return 0;
    if (!fa) return 1;
    if (!fb) return -1;
    return window.nameCmp(fa, fb);
  }), [data.personas, issue, genderF, role, country, stateFilter, status, stageFilter, langFilter, city, countyFilter, zip, tagFilter, emailFilter, phoneFilter, q, globalQ]); // eslint-disable-line react-hooks/exhaustive-deps

  const activeFilters = [issue, genderF !== "all", role.length > 0, country !== "all", stateFilter, status !== "all", stageFilter !== "all", langFilter !== "all", city, countyFilter, zip, tagFilter, emailFilter, phoneFilter, q].filter(Boolean).length;

  // Reset to page 0 whenever any filter or search changes
  React.useEffect(() => {
    setPage(0);
  }, [issue, genderF, role, country, stateFilter, status, stageFilter, langFilter, city, countyFilter, zip, tagFilter, emailFilter, phoneFilter, q, globalQ]); // eslint-disable-line react-hooks/exhaustive-deps

  // Apply a preset coming from the Home KPIs (e.g. "Por revisar"). Runs when the
  // route preset changes; resets filters then applies the requested one so the
  // list actually narrows instead of showing everyone.
  React.useEffect(() => {
    const preset = route && route.preset;
    if (!preset) return;
    setRole([]);
    setCountry("all");
    setStateFilter("");
    setStatus("all");
    setStageFilter("all");
    setLangFilter("all");
    setCity("");
    setCountyFilter("");
    setZip("");
    setTagFilter("");
    setEmailFilter("");
    setPhoneFilter("");
    setQ("");
    setIssue(false);
    setGenderF("all");
    setPage(0);
    if (preset === "revisar") setIssue(true);else if (preset === "activos") setStageFilter("activo");else if (preset === "inhabilitados") setStageFilter("inhabilitado");
  }, [route && route.preset]); // eslint-disable-line react-hooks/exhaustive-deps

  const totalPages = Math.ceil(rows.length / PAGE_SIZE);
  const pageRows = rows.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const clearFilters = () => {
    setIssue(false);
    setGenderF("all");
    setRole([]);
    setCountry("all");
    setStateFilter("");
    setStatus("all");
    setStageFilter("all");
    setLangFilter("all");
    setCity("");
    setCountyFilter("");
    setZip("");
    setTagFilter("");
    setEmailFilter("");
    setPhoneFilter("");
    setQ("");
  };
  const currentFilters = {
    issue,
    genderF,
    role,
    country,
    stateFilter,
    status,
    stageFilter,
    langFilter,
    city,
    countyFilter,
    zip,
    tagFilter,
    emailFilter,
    phoneFilter,
    q
  };
  const loadSegment = seg => {
    const f = seg.filters;
    setIssue(f.issue || false);
    setGenderF(f.genderF || "all");
    setRole(Array.isArray(f.role) ? f.role : []);
    setCountry(f.country || "all");
    setStateFilter(f.stateFilter || "");
    setStatus(f.status || "all");
    setStageFilter(f.stageFilter || "all");
    setLangFilter(f.langFilter || "all");
    setCity(f.city || "");
    setCountyFilter(f.countyFilter || "");
    setZip(f.zip || "");
    setTagFilter(f.tagFilter || "");
    setEmailFilter(f.emailFilter || "");
    setPhoneFilter(f.phoneFilter || "");
    setQ(f.q || "");
    setShowFilters(true);
  };
  const doSaveSegment = () => {
    if (!segmentName.trim()) return;
    onAddSegment && onAddSegment({
      name: segmentName.trim(),
      filters: currentFilters
    });
    setSegmentName("");
    setSavingSegment(false);
  };
  const entityById = React.useMemo(() => Object.fromEntries(data.entities.map(e => [e.id, e])), [data.entities]);
  const toggleSelect = (e, id) => {
    e.stopPropagation();
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);else next.add(id);
      return next;
    });
  };
  const toggleSelectAll = () => {
    setSelected(selected.size === rows.length ? new Set() : new Set(rows.map(p => p.id)));
  };
  const doExportCSV = () => {
    const headers = [{
      key: "id",
      label: "ID"
    }, {
      key: "nombre",
      label: "Nombre"
    }, {
      key: "apellido",
      label: "Apellido"
    }, {
      key: "cargo",
      label: "Cargo"
    }, {
      key: "email",
      label: "Email"
    }, {
      key: "telefono",
      label: "Teléfono"
    }, {
      key: "direccion",
      label: "Dirección"
    }, {
      key: "zip",
      label: "ZIP"
    }, {
      key: "ciudad",
      label: "Ciudad"
    }, {
      key: "condado",
      label: "Condado"
    }, {
      key: "estado",
      label: "Estado/Provincia"
    }, {
      key: "pais",
      label: "País"
    }, {
      key: "web",
      label: "Sitio web"
    }, {
      key: "instagram",
      label: "Instagram"
    }, {
      key: "facebook",
      label: "Facebook"
    }, {
      key: "tiktok",
      label: "TikTok"
    }, {
      key: "x",
      label: "X (Twitter)"
    }, {
      key: "entidades",
      label: "Entidades vinculadas"
    }, {
      key: "etiquetas",
      label: "Etiquetas"
    }, {
      key: "idioma",
      label: "Idioma"
    }, {
      key: "statusReg",
      label: "Estado"
    }, {
      key: "etapa",
      label: "Etapa Pipeline"
    }, {
      key: "fuente",
      label: "Fuente"
    }, {
      key: "proximaAccion",
      label: "Próxima acción"
    }, {
      key: "cumpleanos",
      label: "Cumpleaños"
    }, {
      key: "ultimoContacto",
      label: "Último contacto"
    }];
    const stageLabel = id => window.stageLabel ? window.stageLabel(id, lang) : (window.PIPELINE_STAGES || []).find(s => s.id === id)?.label || id || "";
    const sourceLabel = id => (window.CONTACT_SOURCES || []).find(s => s.id === id)?.label || id || "";
    // Export selected rows if any are checked; otherwise all filtered rows.
    const exportRows = selected.size > 0 ? rows.filter(p => selected.has(p.id)) : rows;
    const csvRows = exportRows.map(p => ({
      id: p.id,
      nombre: p.first,
      apellido: p.last,
      cargo: p.roles && p.roles.length ? p.roles.map(r => t.roles[r] || r).join(", ") : p.role === "otro" ? p.roleOther || "Otro" : t.roles[p.role] || p.role,
      email: p.email,
      telefono: p.phone,
      direccion: p.address,
      zip: p.zip,
      ciudad: p.city,
      condado: p.county,
      estado: p.state,
      pais: p.country,
      web: p.website,
      instagram: p.social && p.social.ig,
      facebook: p.social && p.social.fb,
      tiktok: p.social && p.social.tiktok,
      x: p.social && p.social.x,
      entidades: (p.entities || []).map(le => entityById[le.id] ? entityById[le.id].name : "").filter(Boolean).join(" | "),
      etiquetas: (p.tags || []).join(", "),
      idioma: p.language,
      statusReg: p.status,
      etapa: stageLabel(p.stage || (p.status === "inactivo" ? "inhabilitado" : "activo")),
      fuente: sourceLabel(p.source),
      proximaAccion: p.nextAction,
      cumpleanos: p.birthday,
      ultimoContacto: p.lastContact
    }));
    exportCSV("promeza-personas-" + new Date().toISOString().slice(0, 10) + ".csv", headers, csvRows);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, t.nav.personas), /*#__PURE__*/React.createElement("div", {
    className: "page-sub"
  }, rows.length, " ", t.common.count.toLowerCase(), activeFilters > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      fontWeight: 600
    }
  }, " \xB7 ", activeFilters, " ", lang === "es" ? "filtros activos" : "active filters"))), /*#__PURE__*/React.createElement("div", {
    className: "page-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn" + (showFilters || activeFilters > 0 ? " btn-primary" : ""),
    onClick: () => setShowFilters(v => !v)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter"
  }), " ", lang === "es" ? "Filtrar" : "Filter", activeFilters > 0 ? ` (${activeFilters})` : ""), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: doExportCSV,
    title: selected.size > 0 ? lang === "es" ? `Exportar ${selected.size} seleccionadas` : `Export ${selected.size} selected` : lang === "es" ? `Exportar ${rows.length} de ${data.personas.length} personas` : `Export ${rows.length} of ${data.personas.length} people`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download"
  }), " ", t.common.exportCSV, selected.size > 0 ? ` (${selected.size})` : rows.length < data.personas.length ? ` (${rows.length})` : ""), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => setShowImport(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload"
  }), " Importar"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => go({
      name: "new-person"
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t.nav.newPerson))), issue && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 12,
      padding: "9px 14px",
      background: "#fef3c7",
      border: "1px solid #fcd34d",
      borderRadius: 8,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 15
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontWeight: 600,
      color: "#92400e"
    }
  }, lang === "es" ? "Mostrando solo contactos por revisar (sin teléfono/correo o con datos con problemas)" : "Showing only contacts to review (missing or problematic contact info)"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setIssue(false)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }), " ", lang === "es" ? "Ver todos" : "Show all")), showFilters && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: 12,
      padding: "16px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "10px 16px",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(FField, {
    label: lang === "es" ? "Buscar (nombre, ciudad…)" : "Search (name, city…)"
  }, /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: t.placeholders.search
  })), /*#__PURE__*/React.createElement(FField, {
    label: "Email"
  }, /*#__PURE__*/React.createElement("input", {
    value: emailFilter,
    onChange: e => setEmailFilter(e.target.value),
    placeholder: "@gmail.com, nombre\u2026"
  })), /*#__PURE__*/React.createElement(FField, {
    label: lang === "es" ? "Teléfono" : "Phone"
  }, /*#__PURE__*/React.createElement("input", {
    value: phoneFilter,
    onChange: e => setPhoneFilter(e.target.value),
    placeholder: "+1 305\u2026"
  })), /*#__PURE__*/React.createElement(FField, {
    label: lang === "es" ? "Ciudad" : "City"
  }, /*#__PURE__*/React.createElement("input", {
    value: city,
    onChange: e => setCity(e.target.value),
    placeholder: "Miami, Bogot\xE1\u2026"
  })), /*#__PURE__*/React.createElement(FField, {
    label: lang === "es" ? "Estado" : "State"
  }, /*#__PURE__*/React.createElement("input", {
    value: stateFilter,
    onChange: e => setStateFilter(e.target.value),
    placeholder: "Florida, Texas\u2026"
  })), /*#__PURE__*/React.createElement(FField, {
    label: lang === "es" ? "Condado" : "County"
  }, /*#__PURE__*/React.createElement("input", {
    value: countyFilter,
    onChange: e => setCountyFilter(e.target.value),
    placeholder: lang === "es" ? "Ventura, Los Ángeles…" : "Ventura, Los Angeles…"
  })), /*#__PURE__*/React.createElement(FField, {
    label: "ZIP"
  }, /*#__PURE__*/React.createElement("input", {
    value: zip,
    onChange: e => setZip(e.target.value),
    placeholder: "33101\u2026"
  })), /*#__PURE__*/React.createElement(FField, {
    label: lang === "es" ? "País" : "Country"
  }, /*#__PURE__*/React.createElement("select", {
    value: country,
    onChange: e => setCountry(e.target.value)
  }, countries.map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c
  }, c === "all" ? lang === "es" ? "Todos" : "All" : c)))), /*#__PURE__*/React.createElement(FField, {
    label: t.common.language
  }, /*#__PURE__*/React.createElement("select", {
    value: langFilter,
    onChange: e => setLangFilter(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, lang === "es" ? "Todos" : "All"), /*#__PURE__*/React.createElement("option", {
    value: "es"
  }, "Espa\xF1ol"), /*#__PURE__*/React.createElement("option", {
    value: "en"
  }, "English"), /*#__PURE__*/React.createElement("option", {
    value: "pt"
  }, "Portugu\xEAs"))), /*#__PURE__*/React.createElement(FField, {
    label: lang === "es" ? "Sexo" : "Gender"
  }, /*#__PURE__*/React.createElement("select", {
    value: genderF,
    onChange: e => setGenderF(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, lang === "es" ? "Todos" : "All"), /*#__PURE__*/React.createElement("option", {
    value: "F"
  }, lang === "es" ? "Mujer" : "Female"), /*#__PURE__*/React.createElement("option", {
    value: "M"
  }, lang === "es" ? "Hombre" : "Male"), /*#__PURE__*/React.createElement("option", {
    value: ""
  }, lang === "es" ? "Sin especificar" : "Unspecified"))), /*#__PURE__*/React.createElement(FField, {
    label: t.common.tags
  }, /*#__PURE__*/React.createElement("input", {
    value: tagFilter,
    onChange: e => setTagFilter(e.target.value),
    placeholder: lang === "es" ? "vip, liderazgo…" : "vip, leadership…"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line)",
      paddingTop: 10,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".05em",
      minWidth: 52
    }
  }, t.common.role, ":"), roles.map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    className: "chip " + ((r === "all" ? role.length === 0 : role.includes(r)) ? "on" : ""),
    onClick: () => {
      if (r === "all") setRole([]);else setRole(prev => prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r]);
    }
  }, r === "all" ? t.common.all : t.roles[r]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".05em",
      minWidth: 52
    }
  }, lang === "en" ? "Stage:" : "Etapa:"), /*#__PURE__*/React.createElement("button", {
    className: "chip " + (stageFilter === "all" ? "on" : ""),
    onClick: () => setStageFilter("all")
  }, t.common.all), (window.PIPELINE_STAGES || []).map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    onClick: () => setStageFilter(s.id),
    style: {
      padding: "3px 10px",
      borderRadius: 20,
      border: "1.5px solid",
      borderColor: stageFilter === s.id ? s.color : "var(--line)",
      background: stageFilter === s.id ? s.bg : "transparent",
      color: stageFilter === s.id ? s.color : "var(--ink-3)",
      fontFamily: "inherit",
      fontSize: 12,
      fontWeight: 500,
      cursor: "pointer"
    }
  }, window.stageLabel ? window.stageLabel(s.id, lang) : s.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: clearFilters,
    disabled: activeFilters === 0,
    style: {
      opacity: activeFilters === 0 ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }), " ", lang === "es" ? "Limpiar" : "Clear"), activeFilters > 0 && !savingSegment && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setSavingSegment(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", lang === "es" ? "Guardar vista" : "Save view"), savingSegment && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: segmentName,
    onChange: e => setSegmentName(e.target.value),
    onKeyDown: e => e.key === "Enter" && doSaveSegment(),
    placeholder: lang === "es" ? "Nombre del segmento…" : "Segment name…",
    style: {
      fontSize: 12,
      padding: "4px 8px",
      borderRadius: 6,
      border: "1px solid var(--line)",
      fontFamily: "inherit"
    },
    autoFocus: true
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary",
    disabled: !segmentName.trim(),
    onClick: doSaveSegment
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    onClick: () => setSavingSegment(false)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink-1)"
    }
  }, rows.length), " ", lang === "es" ? "de" : "of", " ", data.personas.length))), (segments || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      alignItems: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-3)",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: ".05em"
    }
  }, lang === "es" ? "Vistas:" : "Views:"), (segments || []).map(seg => /*#__PURE__*/React.createElement("div", {
    key: seg.id,
    style: {
      display: "flex",
      alignItems: "center",
      background: "var(--accent-50)",
      borderRadius: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => loadSegment(seg),
    style: {
      padding: "3px 10px",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--accent)",
      fontFamily: "inherit"
    }
  }, seg.name), /*#__PURE__*/React.createElement("button", {
    onClick: () => onDeleteSegment && onDeleteSegment(seg.id),
    style: {
      padding: "3px 7px 3px 2px",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--ink-4)",
      fontFamily: "inherit"
    }
  }, "\xD7")))), showImport && /*#__PURE__*/React.createElement(ImportModal, {
    type: "personas",
    lang: lang,
    onClose: () => setShowImport(false),
    onImport: rows => {
      const withIds = rows.map((r, i) => ({
        ...r,
        id: "p" + (Date.now() + i)
      }));
      onImportPersonas(withIds);
      setShowImport(false);
    }
  }), selected.size === 0 && rows.length > 0 && activeFilters > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 16px",
      marginBottom: 12,
      background: "var(--accent-50)",
      border: "1px solid var(--accent-100)",
      borderRadius: 10,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-2)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, rows.length), " ", lang === "es" ? "personas coinciden con los filtros" : "people match the filters"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary",
    style: {
      marginLeft: "auto"
    },
    onClick: () => setSelected(new Set(rows.map(p => p.id)))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", lang === "es" ? `Seleccionar los ${rows.length}` : `Select all ${rows.length}`)), selected.size > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 24,
      left: "50%",
      transform: "translateX(-50%)",
      background: "#0f1530",
      color: "#fff",
      borderRadius: 12,
      padding: "12px 20px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      zIndex: 900,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap"
    }
  }, selected.size, " ", lang === "es" ? "seleccionadas" : "selected"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 20,
      background: "rgba(255,255,255,0.2)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      color: "#86efac",
      borderColor: "rgba(134,239,172,0.4)",
      background: "transparent"
    },
    onClick: () => {
      onBulkUpdateStatus && onBulkUpdateStatus(selected, {
        status: "activo"
      });
      setSelected(new Set());
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", lang === "es" ? "Activar" : "Activate"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      color: "#fca5a5",
      borderColor: "rgba(252,165,165,0.4)",
      background: "transparent"
    },
    onClick: () => {
      onBulkUpdateStatus && onBulkUpdateStatus(selected, {
        status: "inactivo"
      });
      setSelected(new Set());
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }), " ", lang === "es" ? "Inactivar" : "Deactivate"), !showBulkTagInput ? /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      color: "#fde68a",
      borderColor: "rgba(253,230,138,0.4)",
      background: "transparent"
    },
    onClick: () => setShowBulkTagInput(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tag"
  }), " ", lang === "es" ? "Etiquetar" : "Tag") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: bulkTag,
    onChange: e => setBulkTag(e.target.value),
    placeholder: lang === "es" ? "etiqueta…" : "tag…",
    style: {
      background: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.25)",
      color: "#fff",
      borderRadius: 6,
      padding: "4px 8px",
      fontSize: 13,
      width: 120,
      fontFamily: "inherit"
    },
    onKeyDown: e => {
      if (e.key === "Enter" && bulkTag.trim()) {
        onBulkAddTag && onBulkAddTag(selected, bulkTag.trim());
        setBulkTag("");
        setShowBulkTagInput(false);
        setSelected(new Set());
      }
      if (e.key === "Escape") {
        setShowBulkTagInput(false);
        setBulkTag("");
      }
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      color: "#fff",
      borderColor: "rgba(255,255,255,0.3)",
      background: "transparent"
    },
    disabled: !bulkTag.trim(),
    onClick: () => {
      onBulkAddTag && onBulkAddTag(selected, bulkTag.trim());
      setBulkTag("");
      setShowBulkTagInput(false);
      setSelected(new Set());
    }
  }, "OK"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      color: "rgba(255,255,255,0.5)",
      borderColor: "transparent",
      background: "transparent"
    },
    onClick: () => {
      setShowBulkTagInput(false);
      setBulkTag("");
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 13
  }))), !showBulkTaskForm ? /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      color: "#a5b4fc",
      borderColor: "rgba(165,180,252,0.4)",
      background: "transparent"
    },
    onClick: () => {
      setShowBulkTaskForm(true);
      setShowBulkTagInput(false);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", lang === "es" ? "Tarea" : "Task") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: bulkTaskText,
    onChange: e => setBulkTaskText(e.target.value),
    placeholder: lang === "es" ? "Descripción de la tarea…" : "Task description…",
    style: {
      background: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.25)",
      color: "#fff",
      borderRadius: 6,
      padding: "4px 8px",
      fontSize: 13,
      width: 200,
      fontFamily: "inherit"
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: bulkTaskDue,
    onChange: e => setBulkTaskDue(e.target.value),
    style: {
      background: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.25)",
      color: "#fff",
      borderRadius: 6,
      padding: "4px 8px",
      fontSize: 13,
      width: 130,
      fontFamily: "inherit"
    }
  }), (users || []).length > 0 && /*#__PURE__*/React.createElement("select", {
    value: bulkTaskAssignee,
    onChange: e => setBulkTaskAssignee(e.target.value),
    style: {
      background: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.25)",
      color: "#fff",
      borderRadius: 6,
      padding: "4px 8px",
      fontSize: 13,
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    style: {
      color: "#000"
    }
  }, lang === "es" ? "Sin asignar" : "Unassigned"), (users || []).map(u => /*#__PURE__*/React.createElement("option", {
    key: u.email,
    value: u.email,
    style: {
      color: "#000"
    }
  }, u.name))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      color: "#fff",
      borderColor: "rgba(255,255,255,0.3)",
      background: "transparent"
    },
    disabled: !bulkTaskText.trim(),
    onClick: () => {
      if (!bulkTaskText.trim()) return;
      const today = new Date().toISOString().slice(0, 10);
      selected.forEach(pid => {
        onBulkAddTask && onBulkAddTask(pid, {
          id: "t" + Date.now() + Math.random().toString(36).slice(2, 6),
          text: bulkTaskText.trim(),
          due: bulkTaskDue,
          done: false,
          createdAt: today,
          assignedTo: bulkTaskAssignee || null
        });
      });
      setBulkTaskText("");
      setBulkTaskDue("");
      setBulkTaskAssignee("");
      setShowBulkTaskForm(false);
      setSelected(new Set());
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", lang === "es" ? `Asignar a ${selected.size}` : `Assign to ${selected.size}`), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      color: "rgba(255,255,255,0.5)",
      borderColor: "transparent",
      background: "transparent"
    },
    onClick: () => {
      setShowBulkTaskForm(false);
      setBulkTaskText("");
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 13
  }))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      color: "#fca5a5",
      borderColor: "rgba(252,165,165,0.4)",
      background: "transparent"
    },
    onClick: () => {
      onBulkDelete && onBulkDelete(selected);
      setSelected(new Set());
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash"
  }), " ", lang === "es" ? "Eliminar" : "Delete"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      color: "rgba(255,255,255,0.45)",
      borderColor: "transparent",
      background: "transparent"
    },
    onClick: () => {
      setSelected(new Set());
      setShowBulkTaskForm(false);
      setShowBulkTagInput(false);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 32,
      paddingRight: 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: rows.length > 0 && selected.size === rows.length,
    ref: el => {
      if (el) el.indeterminate = selected.size > 0 && selected.size < rows.length;
    },
    onChange: toggleSelectAll,
    style: {
      cursor: "pointer"
    }
  })), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 280
    }
  }, t.common.profile), /*#__PURE__*/React.createElement("th", null, t.common.role), /*#__PURE__*/React.createElement("th", null, t.common.relatedEntities), /*#__PURE__*/React.createElement("th", null, t.common.contact), /*#__PURE__*/React.createElement("th", null, t.common.address), /*#__PURE__*/React.createElement("th", null, t.common.tags))), /*#__PURE__*/React.createElement("tbody", null, pageRows.map(p => /*#__PURE__*/React.createElement("tr", {
    key: p.id,
    onClick: e => openRoute(e, go, {
      name: "person",
      id: p.id
    }),
    onAuxClick: e => openRoute(e, go, {
      name: "person",
      id: p.id
    }),
    title: lang === "es" ? "Ctrl/⌘+clic para abrir en pestaña nueva" : "Ctrl/⌘+click to open in a new tab",
    style: {
      background: selected.has(p.id) ? "var(--accent-50)" : undefined
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      paddingRight: 0
    },
    onClick: e => toggleSelect(e, p.id)
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: selected.has(p.id),
    onChange: () => {},
    style: {
      cursor: "pointer"
    }
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: p.color
    }
  }, initials(fullName(p))), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: window.PROMEZA_HASH ? window.PROMEZA_HASH({
      name: "person",
      id: p.id
    }) : "#",
    onClick: e => {
      e.stopPropagation();
      if (e.ctrlKey || e.metaKey) return;
      e.preventDefault();
      go({
        name: "person",
        id: p.id
      });
    },
    onAuxClick: e => e.stopPropagation(),
    style: {
      fontWeight: 600,
      color: "inherit",
      textDecoration: "none"
    }
  }, fullName(p) || p.email || "(sin nombre)"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "#", window.getUID ? window.getUID(p.id) : p.id, " \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "status-dot " + (p.status === "inactivo" ? "off" : "")
  }), t.common[p.status === "inactivo" ? "inactivos" : "activos"])))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "role-pill"
  }, p.roles && p.roles.length ? p.roles.map(r => t.roles[r] || r).join(" · ") : p.role === "otro" ? p.roleOther || t.roles.otro : t.roles[p.role] || p.role)), /*#__PURE__*/React.createElement("td", null, !p.entities || p.entities.length === 0 ? /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, p.entities.slice(0, 2).map(le => {
    const ent = entityById[le.id];
    return ent ? /*#__PURE__*/React.createElement("span", {
      key: le.id,
      style: {
        fontSize: 12.5
      }
    }, ent.name) : null;
  }), p.entities.length > 2 && /*#__PURE__*/React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 11
    }
  }, "+", p.entities.length - 2))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5
    }
  }, p.email), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, p.phone)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5
    }
  }, p.city, p.county ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      marginLeft: 4,
      fontSize: 11,
      fontWeight: 600
    }
  }, "\xB7 ", p.county) : ""), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, p.country)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap"
    }
  }, (p.tags || []).map(tg => /*#__PURE__*/React.createElement("span", {
    key: tg,
    className: "tag-chip"
  }, tg)))))))), rows.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, t.common.noResults), totalPages > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "12px 16px",
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setPage(0),
    disabled: page === 0
  }, "\xAB"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setPage(p => p - 1),
    disabled: page === 0
  }, "\u2039"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-3)",
      minWidth: 120,
      textAlign: "center"
    }
  }, page * PAGE_SIZE + 1, "\u2013", Math.min((page + 1) * PAGE_SIZE, rows.length), " de ", rows.length), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setPage(p => p + 1),
    disabled: page >= totalPages - 1
  }, "\u203A"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setPage(totalPages - 1),
    disabled: page >= totalPages - 1
  }, "\xBB"))));
};
const _entitiesFilters = {};
const EntitiesList = ({
  t,
  lang,
  data,
  go,
  route,
  onImportEntities,
  globalQ = ""
}) => {
  const EF = _entitiesFilters;
  const [type, setType] = React.useState(Array.isArray(EF.type) ? EF.type : []); // multi-select entity types; [] = all
  const [langFilter, setLangFilter] = React.useState(EF.langFilter !== undefined ? EF.langFilter : "all");
  const [country, setCountry] = React.useState(EF.country !== undefined ? EF.country : "all");
  const [status, setStatus] = React.useState(EF.status !== undefined ? EF.status : "all");
  const [city, setCity] = React.useState(EF.city !== undefined ? EF.city : "");
  const [stateFilter, setStateFilter] = React.useState(EF.stateFilter !== undefined ? EF.stateFilter : "");
  const [countyFilter, setCountyFilter] = React.useState(EF.countyFilter !== undefined ? EF.countyFilter : "");
  const [zip, setZip] = React.useState(EF.zip !== undefined ? EF.zip : "");
  const [tagFilter, setTagFilter] = React.useState(EF.tagFilter !== undefined ? EF.tagFilter : "");
  const [emailFilter, setEmailFilter] = React.useState(EF.emailFilter !== undefined ? EF.emailFilter : "");
  const [phoneFilter, setPhoneFilter] = React.useState(EF.phoneFilter !== undefined ? EF.phoneFilter : "");
  const [dayFilter, setDayFilter] = React.useState(EF.dayFilter !== undefined ? EF.dayFilter : "all");
  const [q, setQ] = React.useState(EF.q !== undefined ? EF.q : "");
  const [showFilters, setShowFilters] = React.useState(EF.showFilters !== undefined ? EF.showFilters : false);
  const [showImport, setShowImport] = React.useState(false);
  const [page, setPage] = React.useState(EF.page !== undefined ? EF.page : 0);
  const [selected, setSelected] = React.useState(new Set());
  const E_PAGE_SIZE = 100;
  const toggleSelect = (ev, id) => {
    ev.stopPropagation();
    setSelected(prev => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);else n.add(id);
      return n;
    });
  };
  React.useEffect(() => {
    Object.assign(_entitiesFilters, {
      type,
      langFilter,
      country,
      status,
      city,
      stateFilter,
      countyFilter,
      zip,
      tagFilter,
      emailFilter,
      phoneFilter,
      dayFilter,
      q,
      showFilters,
      page
    });
  }, [type, langFilter, country, status, city, stateFilter, countyFilter, zip, tagFilter, emailFilter, phoneFilter, dayFilter, q, showFilters, page]);
  React.useEffect(() => {
    setPage(0);
  }, [type, langFilter, country, status, city, stateFilter, countyFilter, zip, tagFilter, emailFilter, phoneFilter, dayFilter, q]); // eslint-disable-line react-hooks/exhaustive-deps

  // Apply a preset from the Home dashboard (e.g. "inactivas" → entities that no
  // longer broadcast). Resets filters then applies the requested status.
  React.useEffect(() => {
    const preset = route && route.preset;
    if (!preset) return;
    setType([]);
    setLangFilter("all");
    setCountry("all");
    setStatus("all");
    setCity("");
    setStateFilter("");
    setCountyFilter("");
    setZip("");
    setTagFilter("");
    setEmailFilter("");
    setPhoneFilter("");
    setDayFilter("all");
    setQ("");
    setPage(0);
    if (preset === "inactivas") setStatus("inactivo");else if (preset === "activas") setStatus("activo");
  }, [route && route.preset]); // eslint-disable-line react-hooks/exhaustive-deps

  const types = ["all", ...Object.keys(t.types)];
  const countries = ["all", ...new Set(data.entities.map(e => e.country).filter(Boolean))];
  const E_STATE_NORM = {
    "Giorgia": "Georgia",
    "IDAHO": "Idaho",
    "Idaho": "Idaho",
    "Miami": "Florida",
    "m": null,
    "USA": null,
    "FL": "Florida",
    "CA": "California",
    "TX": "Texas",
    "NY": "New York",
    "GA": "Georgia",
    "PA": "Pennsylvania",
    "OH": "Ohio",
    "IL": "Illinois",
    "MI": "Michigan",
    "NJ": "New Jersey",
    "NC": "North Carolina",
    "VA": "Virginia",
    "WA": "Washington",
    "AZ": "Arizona",
    "TN": "Tennessee",
    "MO": "Missouri",
    "MD": "Maryland",
    "WI": "Wisconsin",
    "MN": "Minnesota",
    "CO": "Colorado",
    "AL": "Alabama",
    "SC": "South Carolina",
    "LA": "Louisiana",
    "KY": "Kentucky",
    "OR": "Oregon",
    "OK": "Oklahoma",
    "CT": "Connecticut",
    "UT": "Utah",
    "NV": "Nevada",
    "AR": "Arkansas",
    "MS": "Mississippi",
    "KS": "Kansas",
    "NM": "New Mexico",
    "NE": "Nebraska",
    "WV": "West Virginia",
    "ID": "Idaho",
    "HI": "Hawaii",
    "NH": "New Hampshire",
    "ME": "Maine",
    "RI": "Rhode Island",
    "MT": "Montana",
    "DE": "Delaware",
    "SD": "South Dakota",
    "ND": "North Dakota",
    "AK": "Alaska",
    "VT": "Vermont",
    "WY": "Wyoming",
    "DC": "District of Columbia"
  };
  const eNormState = s => {
    if (!s) return null;
    const n = E_STATE_NORM[s];
    return n === undefined ? s : n;
  };
  const personasByEntity = {};
  data.personas.forEach(p => (p.entities || []).forEach(le => {
    personasByEntity[le.id] = (personasByEntity[le.id] || 0) + 1;
  }));
  const rows = data.entities.filter(e => {
    if (type.length && !type.includes(e.type)) return false;
    if (langFilter !== "all" && (e.language || "es") !== langFilter) return false;
    if (country !== "all" && e.country !== country) return false;
    if (status !== "all" && (e.status || "activo") !== status) return false;
    if (city && !(e.city || "").toLowerCase().includes(city.toLowerCase())) return false;
    if (stateFilter && !(eNormState(e.state) || "").toLowerCase().includes(stateFilter.toLowerCase())) return false;
    if (countyFilter && !(e.county || "").toLowerCase().includes(countyFilter.toLowerCase())) return false;
    if (zip && !(e.zip || "").toLowerCase().includes(zip.toLowerCase())) return false;
    if (tagFilter && !(e.tags || []).some(tg => tg.toLowerCase().includes(tagFilter.toLowerCase()))) return false;
    const enorm = s => (s || "").toLowerCase();
    const eAllEmails = [e.email || "", ...(e.emails || []).map(em => em.value || "")].join(" ").toLowerCase();
    const eAllPhones = [e.phone || "", ...(e.phones || []).map(ph => ph.value || "")].join(" ").toLowerCase();
    if (emailFilter && !eAllEmails.includes(emailFilter.toLowerCase())) return false;
    if (phoneFilter && !eAllPhones.includes(phoneFilter.toLowerCase())) return false;
    if (dayFilter !== "all" && !(e.schedule || []).some(s => s.day === dayFilter)) return false;
    const checkQ = query => {
      if (!query) return true;
      const sq = query.trim().toLowerCase();
      const qDigits = sq.replace(/\D/g, "");
      if (qDigits.length >= 7 && eAllPhones.replace(/\D/g, "").includes(qDigits)) return true;
      const stripped = sq.replace(/^#/, "");
      if (/^\d+$/.test(stripped)) return (e.uid || "").startsWith(stripped);
      const searchStr = [enorm(e.name), eAllEmails, eAllPhones, enorm(e.city), enorm(e.county), enorm(e.state), enorm(e.country), (e.tags || []).map(enorm).join(" ")].join(" ");
      const words = sq.split(/\s+/).filter(Boolean);
      return searchStr.includes(sq) || words.every(w => searchStr.includes(w));
    };
    if (!checkQ(q) || !checkQ(globalQ)) return false;
    return true;
  }).sort((a, b) => window.nameCmp(a.name, b.name));
  const activeFilters = [type.length > 0, langFilter !== "all", country !== "all", status !== "all", city, stateFilter, countyFilter, zip, tagFilter, emailFilter, phoneFilter, dayFilter !== "all", q].filter(Boolean).length;
  const toggleSelectAll = () => setSelected(selected.size === rows.length ? new Set() : new Set(rows.map(e => e.id)));
  const clearFilters = () => {
    setType([]);
    setLangFilter("all");
    setCountry("all");
    setStatus("all");
    setCity("");
    setStateFilter("");
    setCountyFilter("");
    setZip("");
    setTagFilter("");
    setEmailFilter("");
    setPhoneFilter("");
    setDayFilter("all");
    setQ("");
  };
  const doExportCSV = () => {
    const headers = [{
      key: "id",
      label: "ID"
    }, {
      key: "nombre",
      label: "Nombre"
    }, {
      key: "tipo",
      label: "Tipo"
    }, {
      key: "email",
      label: "Email"
    }, {
      key: "telefono",
      label: "Teléfono"
    }, {
      key: "direccion",
      label: "Dirección"
    }, {
      key: "zip",
      label: "ZIP"
    }, {
      key: "ciudad",
      label: "Ciudad"
    }, {
      key: "condado",
      label: "Condado"
    }, {
      key: "estado",
      label: "Estado/Provincia"
    }, {
      key: "pais",
      label: "País"
    }, {
      key: "web",
      label: "Sitio web"
    }, {
      key: "instagram",
      label: "Instagram"
    }, {
      key: "facebook",
      label: "Facebook"
    }, {
      key: "tiktok",
      label: "TikTok"
    }, {
      key: "x",
      label: "X (Twitter)"
    }, {
      key: "tamano",
      label: "Tamaño (miembros)"
    }, {
      key: "fundacion",
      label: "Año fundación"
    }, {
      key: "etiquetas",
      label: "Etiquetas"
    }, {
      key: "personasVinculadas",
      label: "Contactos vinculados"
    }];
    const exportRows = selected.size > 0 ? rows.filter(e => selected.has(e.id)) : rows;
    const csvRows = exportRows.map(e => ({
      id: e.id,
      nombre: e.name,
      tipo: t.types[e.type] || e.type,
      email: e.email,
      telefono: e.phone,
      direccion: e.address,
      zip: e.zip,
      ciudad: e.city,
      condado: e.county,
      estado: e.state,
      pais: e.country,
      web: e.website,
      instagram: e.social && e.social.ig,
      facebook: e.social && e.social.fb,
      tiktok: e.social && e.social.tiktok,
      x: e.social && e.social.x,
      tamano: e.size,
      fundacion: e.founded,
      etiquetas: (e.tags || []).join(", "),
      personasVinculadas: personasByEntity[e.id] || 0
    }));
    exportCSV("promeza-entidades-" + new Date().toISOString().slice(0, 10) + ".csv", headers, csvRows);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, t.nav.entities), /*#__PURE__*/React.createElement("div", {
    className: "page-sub"
  }, rows.length, " ", t.common.count.toLowerCase(), activeFilters > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      fontWeight: 600
    }
  }, " \xB7 ", activeFilters, " ", lang === "es" ? "filtros activos" : "active filters"))), /*#__PURE__*/React.createElement("div", {
    className: "page-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn" + (showFilters || activeFilters > 0 ? " btn-primary" : ""),
    onClick: () => setShowFilters(v => !v)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter"
  }), " ", lang === "es" ? "Filtrar" : "Filter", activeFilters > 0 ? ` (${activeFilters})` : ""), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: doExportCSV,
    title: selected.size > 0 ? lang === "es" ? `Exportar ${selected.size} seleccionadas` : `Export ${selected.size} selected` : lang === "es" ? `Exportar ${rows.length} de ${data.entities.length} entidades` : `Export ${rows.length} of ${data.entities.length} entities`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download"
  }), " ", t.common.exportCSV, selected.size > 0 ? ` (${selected.size})` : rows.length < data.entities.length ? ` (${rows.length})` : ""), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => setShowImport(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload"
  }), " Importar"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => go({
      name: "new-entity"
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t.nav.newEntity))), showFilters && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginBottom: 12,
      padding: "16px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "10px 16px",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(FField, {
    label: lang === "es" ? "Buscar (nombre, ciudad…)" : "Search (name, city…)"
  }, /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: t.placeholders.search
  })), /*#__PURE__*/React.createElement(FField, {
    label: "Email"
  }, /*#__PURE__*/React.createElement("input", {
    value: emailFilter,
    onChange: e => setEmailFilter(e.target.value),
    placeholder: "@iglesia.com\u2026"
  })), /*#__PURE__*/React.createElement(FField, {
    label: lang === "es" ? "Teléfono" : "Phone"
  }, /*#__PURE__*/React.createElement("input", {
    value: phoneFilter,
    onChange: e => setPhoneFilter(e.target.value),
    placeholder: "+1 305\u2026"
  })), /*#__PURE__*/React.createElement(FField, {
    label: lang === "es" ? "Día de servicio" : "Service day"
  }, /*#__PURE__*/React.createElement("select", {
    value: dayFilter,
    onChange: e => setDayFilter(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, lang === "es" ? "Todos los días" : "All days"), /*#__PURE__*/React.createElement("option", {
    value: "domingo"
  }, lang === "es" ? "Domingo" : "Sunday"), /*#__PURE__*/React.createElement("option", {
    value: "lunes"
  }, lang === "es" ? "Lunes" : "Monday"), /*#__PURE__*/React.createElement("option", {
    value: "martes"
  }, lang === "es" ? "Martes" : "Tuesday"), /*#__PURE__*/React.createElement("option", {
    value: "miercoles"
  }, lang === "es" ? "Miércoles" : "Wednesday"), /*#__PURE__*/React.createElement("option", {
    value: "jueves"
  }, lang === "es" ? "Jueves" : "Thursday"), /*#__PURE__*/React.createElement("option", {
    value: "viernes"
  }, lang === "es" ? "Viernes" : "Friday"), /*#__PURE__*/React.createElement("option", {
    value: "sabado"
  }, lang === "es" ? "Sábado" : "Saturday"))), /*#__PURE__*/React.createElement(FField, {
    label: lang === "es" ? "Ciudad" : "City"
  }, /*#__PURE__*/React.createElement("input", {
    value: city,
    onChange: e => setCity(e.target.value),
    placeholder: "Miami, Bogot\xE1\u2026"
  })), /*#__PURE__*/React.createElement(FField, {
    label: lang === "es" ? "Estado" : "State"
  }, /*#__PURE__*/React.createElement("input", {
    value: stateFilter,
    onChange: e => setStateFilter(e.target.value),
    placeholder: "Florida, Texas\u2026"
  })), /*#__PURE__*/React.createElement(FField, {
    label: lang === "es" ? "Condado" : "County"
  }, /*#__PURE__*/React.createElement("input", {
    value: countyFilter,
    onChange: e => setCountyFilter(e.target.value),
    placeholder: lang === "es" ? "Ventura, Los Ángeles…" : "Ventura, Los Angeles…"
  })), /*#__PURE__*/React.createElement(FField, {
    label: "ZIP"
  }, /*#__PURE__*/React.createElement("input", {
    value: zip,
    onChange: e => setZip(e.target.value),
    placeholder: "33101\u2026"
  })), /*#__PURE__*/React.createElement(FField, {
    label: lang === "es" ? "País" : "Country"
  }, /*#__PURE__*/React.createElement("select", {
    value: country,
    onChange: e => setCountry(e.target.value)
  }, countries.map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c
  }, c === "all" ? lang === "es" ? "Todos" : "All" : c)))), /*#__PURE__*/React.createElement(FField, {
    label: t.common.tags
  }, /*#__PURE__*/React.createElement("input", {
    value: tagFilter,
    onChange: e => setTagFilter(e.target.value),
    placeholder: lang === "es" ? "hispana, matriz…" : "hispanic, main…"
  })), /*#__PURE__*/React.createElement(FField, {
    label: t.common.language
  }, /*#__PURE__*/React.createElement("select", {
    value: langFilter,
    onChange: e => setLangFilter(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, lang === "es" ? "Todos" : "All"), /*#__PURE__*/React.createElement("option", {
    value: "es"
  }, "Espa\xF1ol"), /*#__PURE__*/React.createElement("option", {
    value: "en"
  }, "English"), /*#__PURE__*/React.createElement("option", {
    value: "pt"
  }, "Portugu\xEAs")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line)",
      paddingTop: 10,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".05em",
      minWidth: 52
    }
  }, t.common.type, ":"), types.map(tp => /*#__PURE__*/React.createElement("button", {
    key: tp,
    className: "chip " + ((tp === "all" ? type.length === 0 : type.includes(tp)) ? "on" : ""),
    onClick: () => {
      if (tp === "all") setType([]);else setType(prev => prev.includes(tp) ? prev.filter(x => x !== tp) : [...prev, tp]);
    }
  }, tp === "all" ? t.common.all : t.types[tp]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".05em",
      minWidth: 52
    }
  }, t.common.status, ":"), ["all", "activo", "inactivo"].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: "chip " + (status === s ? "on" : ""),
    onClick: () => setStatus(s)
  }, s === "all" ? t.common.all : t.common[s === "activo" ? "activos" : "inactivos"])))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: clearFilters,
    disabled: activeFilters === 0,
    style: {
      opacity: activeFilters === 0 ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }), " ", lang === "es" ? "Limpiar filtros" : "Clear filters"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink-1)"
    }
  }, rows.length), " ", lang === "es" ? "de" : "of", " ", data.entities.length, " ", t.nav.entities.toLowerCase(), " ", lang === "es" ? "se exportarán" : "will be exported"))), showImport && /*#__PURE__*/React.createElement(ImportModal, {
    type: "entidades",
    lang: lang,
    onClose: () => setShowImport(false),
    onImport: rows => {
      const withIds = rows.map((r, i) => ({
        ...r,
        id: "e" + (Date.now() + i)
      }));
      onImportEntities(withIds);
      setShowImport(false);
    }
  }), selected.size > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 12,
      padding: "10px 16px",
      background: "var(--accent-50)",
      border: "1px solid var(--accent-100)",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 13
    }
  }, selected.size, " ", lang === "es" ? "seleccionadas" : "selected"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary",
    onClick: doExportCSV
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download"
  }), " ", lang === "es" ? "Exportar seleccionadas" : "Export selected"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      marginLeft: "auto"
    },
    onClick: () => setSelected(new Set())
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }), " ", lang === "es" ? "Limpiar selección" : "Clear selection")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 34
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: rows.length > 0 && selected.size === rows.length,
    ref: el => {
      if (el) el.indeterminate = selected.size > 0 && selected.size < rows.length;
    },
    onChange: toggleSelectAll
  })), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 320
    }
  }, t.common.profile), /*#__PURE__*/React.createElement("th", null, t.common.type), /*#__PURE__*/React.createElement("th", null, t.common.address), /*#__PURE__*/React.createElement("th", null, t.common.contact), /*#__PURE__*/React.createElement("th", null, t.common.relatedPersonas), /*#__PURE__*/React.createElement("th", null, t.common.size), /*#__PURE__*/React.createElement("th", null, "Horario"), /*#__PURE__*/React.createElement("th", null, t.common.tags))), /*#__PURE__*/React.createElement("tbody", null, rows.slice(page * E_PAGE_SIZE, (page + 1) * E_PAGE_SIZE).map(e => /*#__PURE__*/React.createElement("tr", {
    key: e.id,
    onClick: ev => openRoute(ev, go, {
      name: "entity",
      id: e.id
    }),
    onAuxClick: ev => openRoute(ev, go, {
      name: "entity",
      id: e.id
    }),
    title: lang === "es" ? "Ctrl/⌘+clic para abrir en pestaña nueva" : "Ctrl/⌘+click to open in a new tab",
    style: {
      background: selected.has(e.id) ? "var(--accent-50)" : undefined
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      paddingRight: 0
    },
    onClick: ev => toggleSelect(ev, e.id)
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: selected.has(e.id),
    onChange: ev => toggleSelect(ev, e.id),
    onClick: ev => ev.stopPropagation()
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ent-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: window.PROMEZA_HASH ? window.PROMEZA_HASH({
      name: "entity",
      id: e.id
    }) : "#",
    onClick: ev => {
      ev.stopPropagation();
      if (ev.ctrlKey || ev.metaKey) return;
      ev.preventDefault();
      go({
        name: "entity",
        id: e.id
      });
    },
    onAuxClick: ev => ev.stopPropagation(),
    style: {
      fontWeight: 600,
      color: "inherit",
      textDecoration: "none"
    }
  }, e.name), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "#", window.getUID ? window.getUID(e.id) : e.id, " \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "status-dot " + ((e.status || "activo") === "inactivo" ? "off" : "")
  }), t.common[(e.status || "activo") === "inactivo" ? "inactivos" : "activos"])))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "role-pill muted"
  }, t.types[e.type])), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5
    }
  }, e.city, e.county ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      marginLeft: 4,
      fontSize: 11,
      fontWeight: 600
    }
  }, "\xB7 ", e.county) : ""), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, e.state, ", ", e.country)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5
    }
  }, e.email), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, e.phone)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users"
  }), /*#__PURE__*/React.createElement("strong", null, personasByEntity[e.id] || 0))), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, e.size != null ? e.size.toLocaleString() : "—"), /*#__PURE__*/React.createElement("td", {
    style: {
      minWidth: 120
    }
  }, (() => {
    const sched = e.schedule || [];
    if (!sched.length) return /*#__PURE__*/React.createElement("span", {
      className: "muted"
    }, "\u2014");
    const DAY_SHORT = {
      domingo: "Dom",
      lunes: "Lun",
      martes: "Mar",
      miercoles: "Mié",
      jueves: "Jue",
      viernes: "Vie",
      sabado: "Sáb"
    };
    const DAY_ORDER = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    const fmt = t => {
      if (!t) return "";
      const [h, m] = t.split(":");
      const hr = parseInt(h);
      return (hr > 12 ? hr - 12 : hr || 12) + ":" + (m || "00") + (hr >= 12 ? " PM" : " AM");
    };
    const days = [...new Set(sched.map(s => s.day))].sort((a, b) => DAY_ORDER.indexOf(a) - DAY_ORDER.indexOf(b));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, days.map(day => {
      const slots = sched.filter(s => s.day === day);
      return /*#__PURE__*/React.createElement("div", {
        key: day,
        style: {
          fontSize: 11.5,
          lineHeight: 1.4
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          color: "var(--accent)",
          marginRight: 4
        }
      }, DAY_SHORT[day] || day), /*#__PURE__*/React.createElement("span", {
        className: "muted"
      }, slots.map(s => fmt(s.time)).filter(Boolean).join(" · ") || "—"));
    }));
  })()), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap"
    }
  }, (e.tags || []).map(tg => /*#__PURE__*/React.createElement("span", {
    key: tg,
    className: "tag-chip"
  }, tg)))))))), rows.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, t.common.noResults), Math.ceil(rows.length / E_PAGE_SIZE) > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "12px 16px",
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setPage(0),
    disabled: page === 0
  }, "\xAB"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setPage(p => p - 1),
    disabled: page === 0
  }, "\u2039"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-3)",
      minWidth: 140,
      textAlign: "center"
    }
  }, page * E_PAGE_SIZE + 1, "\u2013", Math.min((page + 1) * E_PAGE_SIZE, rows.length), " de ", rows.length.toLocaleString()), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setPage(p => p + 1),
    disabled: page >= Math.ceil(rows.length / E_PAGE_SIZE) - 1
  }, "\u203A"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setPage(Math.ceil(rows.length / E_PAGE_SIZE) - 1),
    disabled: page >= Math.ceil(rows.length / E_PAGE_SIZE) - 1
  }, "\xBB"))));
};
window.PersonasList = PersonasList;
window.EntitiesList = EntitiesList;

;/* ===== profile.jsx ===== */
// PROMEZA CRM — Profile pages (Person + Entity)

// ─── Smart alerts ───
const getPersonAlerts = (p, lang) => {
  const today = new Date().toISOString().slice(0, 10);
  const es = lang === "es";
  const out = [];
  if (p.emailStatus === "bad") out.push({
    level: "error",
    key: "ebad",
    icon: "alert",
    msg: es ? "Email no funciona o rebota" : "Email bouncing or invalid"
  });
  if (p.phoneStatus === "bad") out.push({
    level: "error",
    key: "pbad",
    icon: "alert",
    msg: es ? "Teléfono fuera de servicio" : "Phone not reachable"
  });
  if (!p.email) out.push({
    level: "warn",
    key: "noemail",
    icon: "mail",
    msg: es ? "Sin dirección de email" : "No email address"
  });
  if (!p.phone) out.push({
    level: "warn",
    key: "nophone",
    icon: "phone",
    msg: es ? "Sin número de teléfono" : "No phone number"
  });
  if (p.nextAction && p.nextAction < today && p.status !== "inactivo") {
    const d = Math.round((new Date(today) - new Date(p.nextAction)) / 86400000);
    out.push({
      level: "error",
      key: "overdue",
      icon: "calendar",
      msg: es ? `Acción vencida hace ${d} día${d !== 1 ? "s" : ""}` : `Action overdue by ${d} day${d !== 1 ? "s" : ""}`
    });
  }
  if (!p.nextAction && p.status !== "inactivo" && p.stage !== "inhabilitado") out.push({
    level: "info",
    key: "noact",
    icon: "calendar",
    msg: es ? "Sin próxima acción programada" : "No next action set"
  });
  if (p.lastContact && p.status !== "inactivo") {
    const d = Math.round((new Date(today) - new Date(p.lastContact)) / 86400000);
    if (d > 180) out.push({
      level: "warn",
      key: "stale",
      icon: "clock",
      msg: es ? `Sin contacto en ${d} días` : `No contact in ${d} days`
    });
  } else if (!p.lastContact && p.status !== "inactivo") {
    out.push({
      level: "info",
      key: "nolast",
      icon: "clock",
      msg: es ? "Sin registro de contacto previo" : "No contact history"
    });
  }
  if (p.birthday) {
    const bday = new Date(p.birthday);
    const yr = new Date(today).getFullYear();
    let bdThis = new Date(yr, bday.getMonth(), bday.getDate()).toISOString().slice(0, 10);
    if (bdThis < today) bdThis = new Date(yr + 1, bday.getMonth(), bday.getDate()).toISOString().slice(0, 10);
    const d = Math.round((new Date(bdThis) - new Date(today)) / 86400000);
    if (d <= 14) out.push({
      level: "good",
      key: "bday",
      icon: "star",
      msg: es ? d === 0 ? "🎂 ¡Cumpleaños hoy!" : `Cumpleaños en ${d} días` : d === 0 ? "🎂 Birthday today!" : `Birthday in ${d} days`
    });
  }
  if (!p.city && !p.country) out.push({
    level: "info",
    key: "noloc",
    icon: "pin",
    msg: es ? "Sin ubicación registrada" : "No location recorded"
  });
  return out;
};
const getCompleteness = p => {
  const checks = [!!p.email, !!p.phone, !!p.address, !!p.city, !!p.country, !!p.birthday, !!p.lastContact, (p.entities || []).length > 0, (p.tags || []).length > 0];
  return Math.round(checks.filter(Boolean).length / checks.length * 100);
};
const Tabs = ({
  tabs,
  active,
  onChange
}) => /*#__PURE__*/React.createElement("div", {
  className: "tabs"
}, tabs.map(t => /*#__PURE__*/React.createElement("div", {
  key: t.id,
  className: "tab " + (active === t.id ? "on" : ""),
  onClick: () => onChange(t.id)
}, t.label)));
const SocialRow = ({
  social
}) => {
  const items = [{
    k: "ig",
    icon: "ig",
    label: "Instagram"
  }, {
    k: "fb",
    icon: "fb",
    label: "Facebook"
  }, {
    k: "tiktok",
    icon: "tt",
    label: "TikTok"
  }, {
    k: "x",
    icon: "x-tw",
    label: "X"
  }];
  const has = items.some(i => social[i.k]);
  if (!has) return /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, items.map(i => social[i.k] ? /*#__PURE__*/React.createElement("div", {
    key: i.k,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i.icon
  }), /*#__PURE__*/React.createElement("span", null, social[i.k])) : null));
};
const Comments = ({
  items,
  t,
  lang,
  onAdd,
  onEdit,
  onDelete
}) => {
  const [val, setVal] = React.useState("");
  const [editIdx, setEditIdx] = React.useState(-1);
  const [editVal, setEditVal] = React.useState("");
  const startEdit = (i, text) => {
    setEditIdx(i);
    setEditVal(text);
  };
  const saveEdit = () => {
    if (editVal.trim() && onEdit) onEdit(editIdx, editVal.trim());
    setEditIdx(-1);
    setEditVal("");
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "comment-form"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: val,
    onChange: e => setVal(e.target.value),
    placeholder: t.common.writeComment
  }), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setVal("")
  }, t.common.cancel), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary",
    disabled: !val.trim(),
    onClick: () => {
      if (val.trim()) {
        onAdd(val.trim());
        setVal("");
      }
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t.common.post))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, items.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, t.common.noComments), items.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.id || i,
    className: "comment"
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: "#0f1530"
    }
  }, initials(c.author)), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "who"
  }, c.author), /*#__PURE__*/React.createElement("span", {
    className: "when"
  }, fmtDate(c.date, lang), c.edited ? lang === "es" ? " · editado" : " · edited" : ""), editIdx !== i && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    title: lang === "es" ? "Editar" : "Edit",
    style: {
      padding: 3
    },
    onClick: () => startEdit(i, c.text)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "edit",
    size: 13
  })), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    title: lang === "es" ? "Borrar" : "Delete",
    style: {
      padding: 3,
      color: "var(--bad)"
    },
    onClick: () => {
      if (window.confirm(lang === "es" ? "¿Borrar este comentario?" : "Delete this comment?")) onDelete && onDelete(i);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 13
  })))), editIdx === i ? /*#__PURE__*/React.createElement("div", {
    className: "comment-form",
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: editVal,
    onChange: e => setEditVal(e.target.value),
    autoFocus: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => {
      setEditIdx(-1);
      setEditVal("");
    }
  }, t.common.cancel), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary",
    disabled: !editVal.trim(),
    onClick: saveEdit
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", lang === "es" ? "Guardar" : "Save"))) : /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, c.text))))));
};

// ─── PERSON PROFILE ───

const ChangelogTab = ({
  changelog,
  lang
}) => {
  const entries = changelog || [];
  const fmtDate = iso => {
    try {
      return new Date(iso).toLocaleString(lang === "en" ? "en-US" : "es-ES", {
        dateStyle: "medium",
        timeStyle: "short"
      });
    } catch {
      return iso;
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, lang === "es" ? "Historial de cambios" : "Change history", /*#__PURE__*/React.createElement("span", {
    className: "muted mono",
    style: {
      fontSize: 11,
      marginLeft: 8
    }
  }, entries.length)), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, entries.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, lang === "es" ? "Sin cambios registrados" : "No changes recorded"), /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, entries.map((entry, i) => /*#__PURE__*/React.createElement("div", {
    key: entry.id || i,
    className: "comment"
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: "#0f1530"
    }
  }, initials(entry.author)), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "who"
  }, entry.author), /*#__PURE__*/React.createElement("span", {
    className: "when"
  }, fmtDate(entry.date))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, entry.changes.map((ch, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      fontSize: 12.5,
      color: "var(--ink-2)"
    }
  }, ch.type === "created" ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--good)"
    }
  }, "\u2713 ", lang === "es" ? "Registro creado" : "Record created") : ch.type === "merge" ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "#7c3aed"
    }
  }, "\u27F5 ", lang === "es" ? "Fusionado con" : "Merged with", ": ", ch.with) : ch.type === "tags" || ch.type === "entities" ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, ch.field), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      marginLeft: 6
    }
  }, lang === "es" ? "actualizado" : "updated")) : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, ch.field, ":"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-4)",
      margin: "0 5px"
    }
  }, ch.old || "—"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-4)"
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--good)",
      marginLeft: 5
    }
  }, ch.new || "—")))))))))));
};
const PersonProfile = ({
  id,
  t,
  lang,
  data,
  go,
  goBack,
  addComment,
  onEditComment,
  onDeleteComment,
  onUpdatePerson,
  onEditPerson,
  onDeletePerson,
  interactions,
  onAddInteraction,
  onDeleteInteraction,
  tasks,
  onAddTask,
  onToggleTask,
  onDeleteTask,
  onResolveDuplicate,
  inDupPair,
  changelog,
  users,
  currentUser,
  attachments,
  onAddAttachment,
  onDeleteAttachment
}) => {
  const p = data.personas.find(x => x.id === id);
  const [tab, setTab] = React.useState("details");
  const [copiedId, setCopiedId] = React.useState(false);
  const [linking, setLinking] = React.useState(false);
  const [linkEntityId, setLinkEntityId] = React.useState("");
  const [linkRole, setLinkRole] = React.useState("miembro");
  const [entitySearch, setEntitySearch] = React.useState("");
  const [showEntityDrop, setShowEntityDrop] = React.useState(false);
  const [showCallMenu, setShowCallMenu] = React.useState(false);
  const [showAllTags, setShowAllTags] = React.useState(false);
  const callMenuRef = React.useRef(null);
  React.useEffect(() => {
    if (!showCallMenu) return;
    const handler = e => {
      if (callMenuRef.current && !callMenuRef.current.contains(e.target)) setShowCallMenu(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showCallMenu]);
  if (!p) return /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, "Not found");
  const pEntities = p.entities || [];
  const availableEntities = data.entities.filter(e => !pEntities.some(le => le.id === e.id)).sort((a, b) => window.nameCmp(a.name, b.name));
  const doLinkEntity = () => {
    if (!linkEntityId) return;
    onUpdatePerson && onUpdatePerson(p.id, {
      entities: [...pEntities, {
        id: linkEntityId,
        role: linkRole,
        roleOther: ""
      }]
    });
    setLinking(false);
    setLinkEntityId("");
    setLinkRole("miembro");
  };
  const doUnlinkEntity = entityId => {
    onUpdatePerson && onUpdatePerson(p.id, {
      entities: pEntities.filter(le => le.id !== entityId)
    });
  };
  const linkedEntities = pEntities.map(le => ({
    link: le,
    entity: data.entities.find(e => e.id === le.id)
  })).filter(x => x.entity);

  // Does this contact have a real duplicate? Computed live (shares email or phone with
  // another contact) so it's always accurate and doesn't depend on a tag having synced.
  const hasDupRaw = React.useMemo(() => {
    const em = (p.email || "").toLowerCase().trim();
    const ph = (p.phone || "").replace(/\D/g, "");
    if (!em && ph.length < 7) return false;
    return (data.personas || []).some(o => o.id !== p.id && (em && (o.email || "").toLowerCase().trim() === em || ph.length >= 7 && (o.phone || "").replace(/\D/g, "") === ph));
  }, [p.id, p.email, p.phone, data.personas]);
  // Show the task if it shares email/phone OR is in a pending duplicate pair (incl.
  // manually-marked). Hide once the user marks it resolved.
  const hasDup = (hasDupRaw || inDupPair) && !p.dupResolved;
  const pendingTasks = (tasks || []).filter(tk => !tk.done).length + (hasDup ? 1 : 0);
  const personProjectCount = (data.projects || []).filter(pr => (pr.members || []).some(m => m.personaId === p.id)).length;
  const tabs = [{
    id: "details",
    label: t.common.details
  }, {
    id: "links",
    label: t.common.relatedEntities + " (" + linkedEntities.length + ")"
  }, {
    id: "projects",
    label: (lang === "es" ? "Proyectos" : "Projects") + (personProjectCount > 0 ? " (" + personProjectCount + ")" : "")
  }, {
    id: "interactions",
    label: (lang === "es" ? "Interacciones" : "Interactions") + " (" + (interactions || []).length + ")"
  }, {
    id: "tasks",
    label: (lang === "es" ? "Tareas" : "Tasks") + (pendingTasks > 0 ? " (" + pendingTasks + ")" : "")
  }, {
    id: "comments",
    label: t.common.comments + " (" + (data.comments[p.id] || []).length + ")"
  }, {
    id: "files",
    label: (lang === "es" ? "Archivos" : "Files") + ((attachments || []).length > 0 ? " (" + (attachments || []).length + ")" : "")
  }, {
    id: "history",
    label: lang === "es" ? "Cambios" : "Changes"
  }, {
    id: "map",
    label: t.common.map
  }];
  const personAlerts = getPersonAlerts(p, lang);
  const completeness = getCompleteness(p);
  const today = new Date().toISOString().slice(0, 10);
  const daysSinceContact = p.lastContact ? Math.round((new Date(today) - new Date(p.lastContact)) / 86400000) : null;
  const cycleEmailStatus = () => {
    const cycle = {
      "": "ok",
      "ok": "bad",
      "bad": ""
    };
    onUpdatePerson && onUpdatePerson(p.id, {
      emailStatus: cycle[p.emailStatus || ""]
    });
  };
  const cyclePhoneStatus = () => {
    const cycle = {
      "": "ok",
      "ok": "bad",
      "bad": ""
    };
    onUpdatePerson && onUpdatePerson(p.id, {
      phoneStatus: cycle[p.phoneStatus || ""]
    });
  };
  const alertColors = {
    error: {
      bg: "#fff5f5",
      border: "#fecaca",
      text: "#dc2626"
    },
    warn: {
      bg: "#fffbeb",
      border: "#fde68a",
      text: "#b45309"
    },
    info: {
      bg: "#f0f9ff",
      border: "#bae6fd",
      text: "#0369a1"
    },
    good: {
      bg: "#f0fdf4",
      border: "#bbf7d0",
      text: "#166534"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "fadeIn .2s ease-out"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => goBack ? goBack({
      name: "personas"
    }) : go({
      name: "personas"
    })
  }, "\u2190 ", t.common.back)), /*#__PURE__*/React.createElement("div", {
    className: "profile-head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle xl",
    style: {
      background: p.color
    }
  }, initials(fullName(p))), completeness < 100 && /*#__PURE__*/React.createElement("div", {
    title: `Perfil ${completeness}% completo`,
    style: {
      position: "absolute",
      bottom: -2,
      right: -2,
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: completeness >= 80 ? "var(--good)" : completeness >= 50 ? "var(--warn)" : "var(--bad)",
      border: "2px solid var(--bg)",
      display: "grid",
      placeItems: "center",
      fontSize: 8,
      fontWeight: 800,
      color: "#fff",
      cursor: "default"
    }
  }, completeness < 50 ? "!" : "")), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 4,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "name",
    style: {
      margin: 0,
      maxWidth: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, fullName(p)), /*#__PURE__*/React.createElement("span", {
    title: lang === "es" ? "Clic para copiar el código" : "Click to copy code",
    onClick: () => {
      try {
        navigator.clipboard.writeText(p.id);
        setCopiedId(true);
        setTimeout(() => setCopiedId(false), 1200);
      } catch (e) {}
    },
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 700,
      color: "var(--accent)",
      background: "var(--accent-50)",
      padding: "3px 10px",
      borderRadius: 6,
      letterSpacing: ".04em",
      flexShrink: 0,
      cursor: "pointer",
      whiteSpace: "nowrap",
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, "#", window.getUID ? window.getUID(p.id) : p.id, /*#__PURE__*/React.createElement(Icon, {
    name: "copy",
    size: 11
  }), copiedId && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--good)",
      fontWeight: 700
    }
  }, lang === "es" ? "¡copiado!" : "copied!"))), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, /*#__PURE__*/React.createElement("span", {
    className: "role-pill"
  }, p.roles ? p.roles.map(r => r === "otro" ? p.roleOther || t.roles.otro : t.roles[r] || r).join(" · ") : p.role === "otro" ? p.roleOther || t.roles.otro : t.roles[p.role] || p.role), (() => {
    const stageId = p.stage || (p.status === "inactivo" ? "inhabilitado" : "activo");
    const st = (window.PIPELINE_STAGES || []).find(s => s.id === stageId);
    return st ? /*#__PURE__*/React.createElement("span", {
      style: {
        padding: "3px 10px",
        borderRadius: 12,
        fontSize: 11.5,
        fontWeight: 700,
        letterSpacing: ".01em",
        background: st.bg,
        color: st.color,
        border: "1px solid " + st.color + "40"
      }
    }, st.label) : null;
  })(), p.city && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "pin"
  }), " ", p.city, p.county ? " · " + p.county : "", p.country ? ", " + p.country : ""), daysSinceContact !== null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: daysSinceContact > 180 ? "var(--bad)" : daysSinceContact > 90 ? "var(--warn)" : "var(--ink-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 12
  }), " ", daysSinceContact === 0 ? lang === "es" ? "contactado hoy" : "contacted today" : lang === "es" ? `${daysSinceContact}d sin contacto` : `${daysSinceContact}d no contact`)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vid"
  }, "VID ", p.id.toUpperCase(), "-", Math.abs(p.id.charCodeAt(1) * 7919) % 999999), completeness < 100 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 4,
      background: "var(--line)",
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: completeness + "%",
      height: "100%",
      background: completeness >= 80 ? "var(--good)" : completeness >= 50 ? "var(--warn)" : "var(--bad)",
      borderRadius: 4,
      transition: "width .3s"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-4)",
      fontFamily: "var(--font-mono)"
    }
  }, completeness, "%")))), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: p.emailStatus === "bad" ? {
      color: "var(--bad)",
      borderColor: "#fecaca",
      background: "#fff5f5"
    } : p.emailStatus === "ok" ? {
      color: "var(--good)",
      borderColor: "#bbf7d0",
      background: "#f0fdf4"
    } : {},
    onClick: () => p.email && (window.location.href = "mailto:" + p.email)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail"
  }), p.emailStatus === "bad" ? lang === "es" ? "No funciona" : "Not working" : "Email", p.emailStatus === "ok" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700
    }
  }, "\u2713")), /*#__PURE__*/React.createElement("button", {
    onClick: cycleEmailStatus,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontSize: 10.5,
      padding: "0 2px",
      fontFamily: "inherit",
      textAlign: "left",
      color: p.emailStatus === "ok" ? "var(--good)" : p.emailStatus === "bad" ? "var(--bad)" : "var(--ink-4)"
    }
  }, p.emailStatus === "ok" ? "✓ Verificado" : p.emailStatus === "bad" ? "⚠ Marcar OK" : "· Marcar como verificado")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    },
    ref: callMenuRef
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: p.phoneStatus === "bad" ? {
      color: "var(--bad)",
      borderColor: "#fecaca",
      background: "#fff5f5"
    } : p.phoneStatus === "ok" ? {
      color: "var(--good)",
      borderColor: "#bbf7d0",
      background: "#f0fdf4"
    } : {},
    onClick: () => p.phone && setShowCallMenu(v => !v)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone"
  }), p.phoneStatus === "bad" ? lang === "es" ? "No funciona" : "Not working" : lang === "es" ? "Llamar" : "Call", p.phoneStatus === "ok" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700
    }
  }, "\u2713"), p.phone && /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    fill: "currentColor",
    style: {
      marginLeft: 2,
      opacity: .6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 3.5l3 3 3-3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), showCallMenu && p.phone && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 4px)",
      left: 0,
      background: "var(--bg)",
      border: "1px solid var(--line)",
      borderRadius: 10,
      boxShadow: "var(--shadow-lg)",
      zIndex: 200,
      minWidth: 180,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "6px 4px",
      borderBottom: "1px solid var(--line)",
      fontSize: 10.5,
      color: "var(--ink-3)",
      fontWeight: 600,
      textAlign: "center",
      letterSpacing: ".05em",
      textTransform: "uppercase"
    }
  }, "Llamar a ", p.first), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 4,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: {
      justifyContent: "flex-start",
      gap: 8,
      padding: "9px 12px"
    },
    onClick: () => {
      window.location.href = "tel:" + p.phone;
      setShowCallMenu(false);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 14
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 12.5
    }
  }, "Tel\xE9fono"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-3)",
      fontFamily: "var(--font-mono)"
    }
  }, p.phone))), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: {
      justifyContent: "flex-start",
      gap: 8,
      padding: "9px 12px",
      color: "#2D8CFF",
      borderColor: "#2D8CFF30",
      background: "#eff6ff"
    },
    onClick: () => {
      window.open(p.zoom || "https://zoom.us/", "_blank");
      setShowCallMenu(false);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 40 40",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "40",
    height: "40",
    rx: "9",
    fill: "#2D8CFF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 14a3 3 0 013-3h14a3 3 0 013 3v12a3 3 0 01-3 3H10a3 3 0 01-3-3V14z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27 17l6-4v14l-6-4V17z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 12.5
    }
  }, "Zoom"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-3)"
    }
  }, p.zoom ? "Abrir enlace guardado" : "Abrir Zoom")))))), p.phone && /*#__PURE__*/React.createElement("button", {
    className: "btn",
    title: "WhatsApp",
    style: {
      padding: "0 10px",
      color: "#25D366",
      borderColor: "#25D36640",
      background: "#f0fdf4"
    },
    onClick: () => window.open("https://wa.me/" + p.phone.replace(/\D/g, ""), "_blank")
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: cyclePhoneStatus,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontSize: 10.5,
      padding: "0 2px",
      fontFamily: "inherit",
      textAlign: "left",
      color: p.phoneStatus === "ok" ? "var(--good)" : p.phoneStatus === "bad" ? "var(--bad)" : "var(--ink-4)"
    }
  }, p.phoneStatus === "ok" ? "✓ Verificado" : p.phoneStatus === "bad" ? "⚠ Marcar OK" : "· Marcar como verificado")), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: {
      color: "var(--good)",
      borderColor: "var(--good)"
    },
    onClick: () => onUpdatePerson && onUpdatePerson(p.id, {
      lastContact: new Date().toISOString().slice(0, 10)
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", lang === "es" ? "Contactado hoy" : "Contacted today"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => onEditPerson && onEditPerson(p.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "edit"
  }), " ", t.common.edit), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: p.status !== "inactivo" ? {
      color: "var(--bad)",
      borderColor: "var(--bad)"
    } : {
      color: "var(--good)",
      borderColor: "var(--good)"
    },
    onClick: () => {
      const goInactive = p.status !== "inactivo";
      onUpdatePerson && onUpdatePerson(p.id, {
        status: goInactive ? "inactivo" : "activo",
        stage: goInactive ? "inhabilitado" : "activo"
      });
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.status === "inactivo" ? "check" : "x"
  }), p.status === "inactivo" ? lang === "es" ? "Reactivar" : "Reactivate" : lang === "es" ? "Inactivar" : "Deactivate"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: {
      color: "var(--bad)",
      borderColor: "var(--bad)"
    },
    onClick: () => onDeletePerson && onDeletePerson(p.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash"
  }), " ", lang === "es" ? "Eliminar" : "Delete"))), p.tags && p.tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      alignItems: "center",
      margin: "10px 2px 14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".05em",
      color: "var(--ink-4)",
      marginRight: 2
    }
  }, lang === "es" ? "Etiquetas" : "Tags"), (showAllTags ? p.tags : p.tags.slice(0, 12)).map(tg => /*#__PURE__*/React.createElement("span", {
    key: tg,
    className: "tag-chip"
  }, tg)), p.tags.length > 12 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowAllTags(v => !v),
    style: {
      border: "none",
      background: "var(--accent-50)",
      color: "var(--accent)",
      fontFamily: "inherit",
      fontSize: 11,
      fontWeight: 700,
      padding: "2px 9px",
      borderRadius: 4,
      cursor: "pointer"
    }
  }, showAllTags ? lang === "es" ? "− menos" : "− less" : "+" + (p.tags.length - 12) + (lang === "es" ? " más" : " more"))), personAlerts.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginBottom: 14
    }
  }, personAlerts.map(al => {
    const c = alertColors[al.level];
    return /*#__PURE__*/React.createElement("div", {
      key: al.key,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "5px 10px",
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 600,
        background: c.bg,
        border: "1px solid " + c.border,
        color: c.text
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: al.icon,
      size: 12
    }), al.msg);
  })), /*#__PURE__*/React.createElement(Tabs, {
    tabs: tabs,
    active: tab,
    onChange: setTab
  }), tab === "details" && /*#__PURE__*/React.createElement("div", {
    className: "profile-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, t.common.contact), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, /*#__PURE__*/React.createElement("dl", {
    className: "kv"
  }, /*#__PURE__*/React.createElement("dt", null, "Email"), /*#__PURE__*/React.createElement("dd", null, (() => {
    const list = [...new Set([...(p.emails || []).map(e => e && e.value).filter(Boolean), p.email].filter(Boolean))];
    return list.length ? list.map((v, i) => {
      const lbl = (p.emails || []).find(e => e && e.value === v);
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 2
        }
      }, /*#__PURE__*/React.createElement("a", {
        href: "mailto:" + v
      }, v), lbl && lbl.label ? /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          color: "var(--ink-4)"
        }
      }, "\xB7 ", lbl.label) : null);
    }) : /*#__PURE__*/React.createElement("span", {
      className: "muted"
    }, "\u2014");
  })()), /*#__PURE__*/React.createElement("dt", null, lang === "es" ? "Teléfono" : "Phone"), /*#__PURE__*/React.createElement("dd", null, (() => {
    const list = [...new Set([...(p.phones || []).map(ph => ph && ph.value).filter(Boolean), p.phone].filter(Boolean))];
    return list.length ? list.map((v, i) => {
      const lbl = (p.phones || []).find(ph => ph && ph.value === v);
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 2
        }
      }, /*#__PURE__*/React.createElement("a", {
        href: "tel:" + v,
        className: "mono"
      }, v), lbl && lbl.label ? /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          color: "var(--ink-4)"
        }
      }, "\xB7 ", lbl.label) : null);
    }) : /*#__PURE__*/React.createElement("span", {
      className: "muted"
    }, "\u2014");
  })()), /*#__PURE__*/React.createElement("dt", null, t.common.web), /*#__PURE__*/React.createElement("dd", null, p.website ? /*#__PURE__*/React.createElement("a", {
    href: "https://" + p.website,
    target: "_blank",
    rel: "noopener"
  }, p.website) : /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014")), /*#__PURE__*/React.createElement("dt", null, t.common.social), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement(SocialRow, {
    social: p.social || {}
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, (() => {
    const labels = {
      domicilio: lang === "es" ? "Domicilio / Casa" : "Home / House",
      iglesia: lang === "es" ? "Dirección Iglesia" : "Church Address",
      trabajo: lang === "es" ? "Trabajo / Oficina" : "Work / Office",
      ministerio: lang === "es" ? "Dirección Ministerio" : "Ministry Address",
      otro: lang === "es" ? "Otra dirección" : "Other address"
    };
    return labels[p.addressLabel] || t.common.address;
  })()), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, /*#__PURE__*/React.createElement("dl", {
    className: "kv"
  }, /*#__PURE__*/React.createElement("dt", null, lang === "es" ? "Calle" : "Street"), /*#__PURE__*/React.createElement("dd", null, p.address || /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014")), /*#__PURE__*/React.createElement("dt", null, "ZIP"), /*#__PURE__*/React.createElement("dd", {
    className: "mono"
  }, p.zip || /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014")), /*#__PURE__*/React.createElement("dt", null, lang === "es" ? "Ciudad" : "City"), /*#__PURE__*/React.createElement("dd", null, p.city), /*#__PURE__*/React.createElement("dt", null, lang === "es" ? "Estado" : "State"), /*#__PURE__*/React.createElement("dd", null, p.state), p.county && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("dt", null, lang === "es" ? "Condado" : "County"), /*#__PURE__*/React.createElement("dd", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "#ede9fe",
      color: "#7c3aed",
      borderRadius: 6,
      padding: "1px 8px",
      fontSize: 12,
      fontWeight: 600
    }
  }, p.county))), /*#__PURE__*/React.createElement("dt", null, lang === "es" ? "País" : "Country"), /*#__PURE__*/React.createElement("dd", null, p.country)))), (p.extraAddresses || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, lang === "es" ? "Direcciones adicionales" : "Additional addresses", " ", /*#__PURE__*/React.createElement("span", {
    className: "muted mono",
    style: {
      fontSize: 11
    }
  }, p.extraAddresses.length)), /*#__PURE__*/React.createElement("div", {
    className: "section-body",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, p.extraAddresses.map((addr, i) => /*#__PURE__*/React.createElement("div", {
    key: addr.id || i,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 2,
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 14
  })), /*#__PURE__*/React.createElement("div", null, addr.label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 12.5,
      marginBottom: 2,
      color: "var(--ink-2)"
    }
  }, addr.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink)"
    }
  }, addr.address), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)"
    }
  }, [addr.city, addr.state, addr.zip, addr.country].filter(Boolean).join(", "))))))), /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, lang === "es" ? "Datos adicionales" : "Additional data"), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, /*#__PURE__*/React.createElement("dl", {
    className: "kv"
  }, /*#__PURE__*/React.createElement("dt", null, t.common.birthday), /*#__PURE__*/React.createElement("dd", null, fmtDate(p.birthday, lang)), /*#__PURE__*/React.createElement("dt", null, t.common.lastContact), /*#__PURE__*/React.createElement("dd", null, fmtDate(p.lastContact, lang)), /*#__PURE__*/React.createElement("dt", null, lang === "es" ? "Próxima acción" : "Next action"), /*#__PURE__*/React.createElement("dd", null, p.nextAction ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: p.nextAction < new Date().toISOString().slice(0, 10) ? "var(--bad)" : "var(--accent)"
    }
  }, fmtDate(p.nextAction, lang)) : /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014")), /*#__PURE__*/React.createElement("dt", null, lang === "es" ? "Fuente" : "Source"), /*#__PURE__*/React.createElement("dd", null, p.source ? (window.CONTACT_SOURCES || []).find(s => s.id === p.source)?.label || p.source : /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014")), /*#__PURE__*/React.createElement("dt", null, t.common.language), /*#__PURE__*/React.createElement("dd", null, p.language === "en" ? "English" : "Español"), /*#__PURE__*/React.createElement("dt", null, lang === "es" ? "Sexo" : "Gender"), /*#__PURE__*/React.createElement("dd", null, p.gender === "F" ? lang === "es" ? "Mujer" : "Female" : p.gender === "M" ? lang === "es" ? "Hombre" : "Male" : /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014")), /*#__PURE__*/React.createElement("dt", null, t.common.tags), /*#__PURE__*/React.createElement("dd", null, p.tags && p.tags.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap"
    }
  }, p.tags.map(tg => /*#__PURE__*/React.createElement("span", {
    key: tg,
    className: "tag-chip"
  }, tg))) : /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014")))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, t.common.relatedEntities, " ", /*#__PURE__*/React.createElement("span", {
    className: "muted mono",
    style: {
      fontSize: 11
    }
  }, linkedEntities.length)), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, linkedEntities.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 13
    }
  }, lang === "es" ? "Sin entidad vinculada" : "No linked entity"), linkedEntities.map(({
    link,
    entity
  }) => /*#__PURE__*/React.createElement("div", {
    key: link.id,
    className: "link-row",
    onClick: () => go({
      name: "entity",
      id: entity.id
    }),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ent-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, entity.name), /*#__PURE__*/React.createElement("div", {
    className: "row-sub"
  }, t.types[entity.type], " \xB7 ", entity.city)), /*#__PURE__*/React.createElement("span", {
    className: "role-pill"
  }, link.role === "otro" ? link.roleOther || t.roles.otro : t.roles[link.role]))))), /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, t.common.map), /*#__PURE__*/React.createElement("div", {
    className: "mini-map",
    style: {
      borderRadius: 0,
      borderLeft: 0,
      borderRight: 0,
      borderBottom: 0,
      height: 220
    }
  }, /*#__PURE__*/React.createElement(MiniMap, {
    personas: [p],
    entities: linkedEntities.map(x => x.entity),
    focus: p.lat ? {
      lat: p.lat,
      lng: p.lng
    } : null
  }))))), tab === "links" && /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, t.common.relatedEntities, !linking && availableEntities.length > 0 && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => {
      setLinking(true);
      setLinkEntityId(availableEntities[0]?.id || "");
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", lang === "es" ? "Vincular entidad" : "Link entity")), linking && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "flex-end",
      padding: "12px 16px",
      background: "var(--bg-soft)",
      borderBottom: "1px solid var(--line)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0,
      flex: "1 1 240px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11
    }
  }, lang === "es" ? "Buscar entidad" : "Search entity"), /*#__PURE__*/React.createElement("input", {
    value: entitySearch,
    onChange: e => {
      setEntitySearch(e.target.value);
      setShowEntityDrop(true);
      setLinkEntityId("");
    },
    onFocus: () => setShowEntityDrop(true),
    placeholder: lang === "es" ? "Nombre de la entidad…" : "Entity name…",
    style: {
      width: "100%"
    }
  }), showEntityDrop && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 2px)",
      left: 0,
      right: 0,
      background: "var(--bg)",
      border: "1px solid var(--line)",
      borderRadius: 8,
      boxShadow: "0 6px 20px rgba(0,0,0,.12)",
      zIndex: 200,
      maxHeight: 260,
      overflowY: "auto"
    }
  }, availableEntities.filter(e => !entitySearch.trim() || e.name.toLowerCase().includes(entitySearch.toLowerCase()) || (e.city || "").toLowerCase().includes(entitySearch.toLowerCase())).slice(0, 10).map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    onClick: () => {
      setLinkEntityId(e.id);
      setEntitySearch(e.name);
      setShowEntityDrop(false);
    },
    style: {
      padding: "10px 14px",
      cursor: "pointer",
      borderBottom: "1px solid var(--line)",
      transition: "background .1s"
    },
    onMouseEnter: ev => ev.currentTarget.style.background = "var(--bg-soft)",
    onMouseLeave: ev => ev.currentTarget.style.background = ""
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13
    }
  }, e.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-3)",
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 2
    }
  }, e.city && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 10
  }), " ", e.city, e.state ? ", " + e.state : ""), e.phone && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 10
  }), " ", e.phone), e.type && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      fontWeight: 600
    }
  }, t.types[e.type] || e.type)))), availableEntities.filter(e => !entitySearch.trim() || e.name.toLowerCase().includes(entitySearch.toLowerCase())).length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px",
      color: "var(--ink-4)",
      fontSize: 13
    }
  }, lang === "es" ? "Sin resultados" : "No results"))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0,
      flex: "1 1 140px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11
    }
  }, lang === "es" ? "Cargo" : "Role"), /*#__PURE__*/React.createElement("select", {
    value: linkRole,
    onChange: e => setLinkRole(e.target.value)
  }, Object.keys(t.roles).map(k => /*#__PURE__*/React.createElement("option", {
    key: k,
    value: k
  }, t.roles[k])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      paddingBottom: 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary",
    disabled: !linkEntityId,
    onClick: doLinkEntity
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", lang === "es" ? "Vincular" : "Link"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => {
      setLinking(false);
      setEntitySearch("");
      setLinkEntityId("");
    }
  }, lang === "es" ? "Cancelar" : "Cancel"))), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, linkedEntities.length === 0 && !linking && /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, t.common.none), linkedEntities.map(({
    link,
    entity
  }) => /*#__PURE__*/React.createElement("div", {
    key: link.id,
    className: "link-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ent-icon",
    style: {
      cursor: "pointer"
    },
    onClick: () => go({
      name: "entity",
      id: entity.id
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grow",
    style: {
      cursor: "pointer"
    },
    onClick: () => go({
      name: "entity",
      id: entity.id
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, entity.name), /*#__PURE__*/React.createElement("div", {
    className: "row-sub"
  }, t.types[entity.type], " \xB7 ", entity.city, ", ", entity.country)), /*#__PURE__*/React.createElement("span", {
    className: "role-pill"
  }, link.role === "otro" ? link.roleOther || t.roles.otro : t.roles[link.role]), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      color: "var(--bad)"
    },
    onClick: () => doUnlinkEntity(entity.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  })))))), tab === "projects" && /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, lang === "es" ? "Proyectos" : "Projects", /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => go({
      name: "projects"
    })
  }, lang === "es" ? "Ver todos →" : "View all →")), /*#__PURE__*/React.createElement(PersonProjectsTab, {
    personId: p.id,
    lang: lang,
    data: data,
    go: go
  })), tab === "interactions" && /*#__PURE__*/React.createElement(InteractionsTab, {
    personId: p.id,
    interactions: interactions,
    onAdd: onAddInteraction,
    onDelete: onDeleteInteraction,
    lang: lang
  }), tab === "tasks" && /*#__PURE__*/React.createElement(TasksTab, {
    personId: p.id,
    tasks: tasks,
    onAddTask: onAddTask,
    onToggleTask: onToggleTask,
    onDeleteTask: onDeleteTask,
    lang: lang,
    users: users,
    currentUser: currentUser,
    hasDuplicate: hasDup,
    go: go,
    onResolveDuplicate: onResolveDuplicate,
    dupTab: "personas"
  }), tab === "comments" && /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, t.common.comments), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, /*#__PURE__*/React.createElement(Comments, {
    items: data.comments[p.id] || [],
    t: t,
    lang: lang,
    onAdd: text => addComment(p.id, text),
    onEdit: (i, text) => onEditComment && onEditComment(p.id, i, text),
    onDelete: i => onDeleteComment && onDeleteComment(p.id, i)
  }))), tab === "files" && /*#__PURE__*/React.createElement(AttachmentsTab, {
    targetId: p.id,
    attachments: attachments || [],
    onAdd: onAddAttachment,
    onDelete: onDeleteAttachment,
    lang: lang,
    currentUser: currentUser
  }), tab === "history" && /*#__PURE__*/React.createElement(ChangelogTab, {
    changelog: changelog,
    lang: lang
  }), tab === "map" && /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, t.common.map), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 480
    }
  }, /*#__PURE__*/React.createElement(MiniMap, {
    personas: [p],
    entities: linkedEntities.map(x => x.entity),
    focus: p.lat ? {
      lat: p.lat,
      lng: p.lng
    } : null,
    go: go
  }))));
};

// ─── ENTITY PROFILE ───

const EntityProfile = ({
  id,
  t,
  lang,
  data,
  go,
  goBack,
  addComment,
  onEditComment,
  onDeleteComment,
  onUpdateEntity,
  onUpdatePerson,
  onEditEntity,
  onDeleteEntity,
  changelog,
  attachments,
  onAddAttachment,
  onDeleteAttachment,
  tasks,
  onAddTask,
  onToggleTask,
  onDeleteTask,
  onResolveDuplicate,
  inDupPair,
  users,
  currentUser
}) => {
  const e = data.entities.find(x => x.id === id);
  const [tab, setTab] = React.useState("details");
  const [linking, setLinking] = React.useState(false);
  const [linkPersonId, setLinkPersonId] = React.useState("");
  const [linkRole, setLinkRole] = React.useState("miembro");
  const [copiedId, setCopiedId] = React.useState(false);
  const [showAllTags, setShowAllTags] = React.useState(false);
  if (!e) return /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, "Not found");
  const linkedPeople = data.personas.map(p => ({
    p,
    link: (p.entities || []).find(le => le.id === e.id)
  })).filter(x => x.link);
  const children = data.entities.filter(c => c.parent === e.id);
  const parent = e.parent ? data.entities.find(x => x.id === e.parent) : null;
  const linkedPersonIds = new Set(linkedPeople.map(x => x.p.id));
  const availablePersons = data.personas.filter(p => !linkedPersonIds.has(p.id)).sort((a, b) => window.nameCmp(fullName(a), fullName(b)));
  const doLinkPerson = () => {
    if (!linkPersonId) return;
    const target = data.personas.find(p => p.id === linkPersonId);
    if (!target) return;
    onUpdatePerson && onUpdatePerson(linkPersonId, {
      entities: [...(target.entities || []), {
        id: e.id,
        role: linkRole,
        roleOther: ""
      }]
    });
    setLinking(false);
    setLinkPersonId("");
    setLinkRole("miembro");
  };
  const doUnlinkPerson = personId => {
    const target = data.personas.find(p => p.id === personId);
    if (!target) return;
    onUpdatePerson && onUpdatePerson(personId, {
      entities: (target.entities || []).filter(le => le.id !== e.id)
    });
  };

  // Does this entity have a duplicate? (another entity with same name, email or phone)
  const hasDupRaw = React.useMemo(() => {
    const nm = (e.name || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ").trim();
    const em = (e.email || "").toLowerCase().trim();
    const ph = (e.phone || "").replace(/\D/g, "");
    if (!nm && !em && ph.length < 7) return false;
    return (data.entities || []).some(o => o.id !== e.id && (nm && (o.name || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ").trim() === nm || em && (o.email || "").toLowerCase().trim() === em || ph.length >= 7 && (o.phone || "").replace(/\D/g, "") === ph));
  }, [e.id, e.name, e.email, e.phone, data.entities]);
  const hasDup = (hasDupRaw || inDupPair) && !e.dupResolved;
  const pendingTasks = (tasks || []).filter(tk => !tk.done).length + (hasDup ? 1 : 0);
  const tabs = [{
    id: "details",
    label: t.common.details
  }, {
    id: "people",
    label: t.common.relatedPersonas + " (" + linkedPeople.length + ")"
  }, {
    id: "tasks",
    label: (lang === "es" ? "Tareas" : "Tasks") + (pendingTasks > 0 ? " (" + pendingTasks + ")" : "")
  }, {
    id: "comments",
    label: t.common.comments + " (" + (data.comments[e.id] || []).length + ")"
  }, {
    id: "files",
    label: (lang === "es" ? "Archivos" : "Files") + ((attachments || []).length > 0 ? " (" + (attachments || []).length + ")" : "")
  }, {
    id: "history",
    label: lang === "es" ? "Cambios" : "Changes"
  }, {
    id: "map",
    label: t.common.map
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => goBack ? goBack({
      name: "entities"
    }) : go({
      name: "entities"
    })
  }, "\u2190 ", t.common.back)), /*#__PURE__*/React.createElement("div", {
    className: "profile-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ent-icon xl"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building",
    className: "i-lg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "name",
    style: {
      margin: 0
    }
  }, e.name), /*#__PURE__*/React.createElement("span", {
    title: lang === "es" ? "Clic para copiar el código" : "Click to copy code",
    onClick: () => {
      try {
        navigator.clipboard.writeText(e.id);
        setCopiedId(true);
        setTimeout(() => setCopiedId(false), 1200);
      } catch (err) {}
    },
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 700,
      color: "var(--accent)",
      background: "var(--accent-50)",
      padding: "3px 10px",
      borderRadius: 6,
      letterSpacing: ".04em",
      flexShrink: 0,
      cursor: "pointer",
      whiteSpace: "nowrap",
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, "#", window.getUID ? window.getUID(e.id) : e.id, /*#__PURE__*/React.createElement(Icon, {
    name: "copy",
    size: 11
  }), copiedId && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--good)",
      fontWeight: 700
    }
  }, lang === "es" ? "¡copiado!" : "copied!"))), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, /*#__PURE__*/React.createElement("span", {
    className: "role-pill"
  }, t.types[e.type]), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "status-dot " + ((e.status || "activo") === "inactivo" ? "off" : "")
  }), t.common[(e.status || "activo") === "inactivo" ? "inactivos" : "activos"]), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "pin"
  }), " ", e.city, ", ", e.country), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "users"
  }), " ", linkedPeople.length, " ", t.common.relatedPersonas.toLowerCase()), e.size && /*#__PURE__*/React.createElement("span", null, e.size.toLocaleString(), " ", t.common.members)), /*#__PURE__*/React.createElement("div", {
    className: "vid",
    style: {
      marginTop: 6
    }
  }, "EID ", e.id.toUpperCase(), "-", Math.abs(e.id.charCodeAt(1) * 8819) % 999999)), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, e.email && /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => window.location.href = "mailto:" + e.email
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail"
  }), " Email"), e.website && /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => window.open("https://" + e.website, "_blank")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe"
  }), " Web"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => go({
      name: "new-person",
      prefill: {
        entityId: e.id
      }
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", lang === "es" ? "Agregar persona" : "Add person"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => onEditEntity && onEditEntity(e.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "edit"
  }), " ", t.common.edit), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: (e.status || "activo") !== "inactivo" ? {
      color: "var(--bad)",
      borderColor: "var(--bad)"
    } : {
      color: "var(--good)",
      borderColor: "var(--good)"
    },
    onClick: () => onUpdateEntity && onUpdateEntity(e.id, {
      status: (e.status || "activo") === "inactivo" ? "activo" : "inactivo"
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: (e.status || "activo") === "inactivo" ? "check" : "x"
  }), (e.status || "activo") === "inactivo" ? lang === "es" ? "Reactivar" : "Reactivate" : lang === "es" ? "Inactivar" : "Deactivate"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: {
      color: "var(--bad)",
      borderColor: "var(--bad)"
    },
    onClick: () => onDeleteEntity && onDeleteEntity(e.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash"
  }), " ", lang === "es" ? "Eliminar" : "Delete"))), e.tags && e.tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      alignItems: "center",
      margin: "10px 2px 14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".05em",
      color: "var(--ink-4)",
      marginRight: 2
    }
  }, lang === "es" ? "Etiquetas" : "Tags"), (showAllTags ? e.tags : e.tags.slice(0, 12)).map(tg => /*#__PURE__*/React.createElement("span", {
    key: tg,
    className: "tag-chip"
  }, tg)), e.tags.length > 12 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowAllTags(v => !v),
    style: {
      border: "none",
      background: "var(--accent-50)",
      color: "var(--accent)",
      fontFamily: "inherit",
      fontSize: 11,
      fontWeight: 700,
      padding: "2px 9px",
      borderRadius: 4,
      cursor: "pointer"
    }
  }, showAllTags ? lang === "es" ? "− menos" : "− less" : "+" + (e.tags.length - 12) + (lang === "es" ? " más" : " more"))), /*#__PURE__*/React.createElement(Tabs, {
    tabs: tabs,
    active: tab,
    onChange: setTab
  }), tab === "details" && /*#__PURE__*/React.createElement("div", {
    className: "profile-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, t.common.contact), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, /*#__PURE__*/React.createElement("dl", {
    className: "kv"
  }, /*#__PURE__*/React.createElement("dt", null, "Email"), /*#__PURE__*/React.createElement("dd", null, e.email || /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014")), /*#__PURE__*/React.createElement("dt", null, lang === "es" ? "Teléfono" : "Phone"), /*#__PURE__*/React.createElement("dd", null, e.phone || /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014")), /*#__PURE__*/React.createElement("dt", null, t.common.web), /*#__PURE__*/React.createElement("dd", null, e.website ? /*#__PURE__*/React.createElement("a", {
    href: "https://" + e.website,
    target: "_blank",
    rel: "noopener"
  }, e.website) : /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014")), /*#__PURE__*/React.createElement("dt", null, t.common.social), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement(SocialRow, {
    social: e.social || {}
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, t.common.address), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, /*#__PURE__*/React.createElement("dl", {
    className: "kv"
  }, /*#__PURE__*/React.createElement("dt", null, lang === "es" ? "Calle" : "Street"), /*#__PURE__*/React.createElement("dd", null, e.address), /*#__PURE__*/React.createElement("dt", null, "ZIP"), /*#__PURE__*/React.createElement("dd", {
    className: "mono"
  }, e.zip), /*#__PURE__*/React.createElement("dt", null, lang === "es" ? "Ciudad" : "City"), /*#__PURE__*/React.createElement("dd", null, e.city), /*#__PURE__*/React.createElement("dt", null, lang === "es" ? "Estado" : "State"), /*#__PURE__*/React.createElement("dd", null, e.state), /*#__PURE__*/React.createElement("dt", null, lang === "es" ? "País" : "Country"), /*#__PURE__*/React.createElement("dd", null, e.country)))), /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, lang === "es" ? "Información general" : "General info"), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, /*#__PURE__*/React.createElement("dl", {
    className: "kv"
  }, /*#__PURE__*/React.createElement("dt", null, t.common.type), /*#__PURE__*/React.createElement("dd", null, t.types[e.type]), e.idioma && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("dt", null, lang === "es" ? "Idioma" : "Language"), /*#__PURE__*/React.createElement("dd", null, {
    hispana: "Hispana / Español",
    ingles: "Inglés",
    bilingue: "Bilingüe",
    otro: "Otro"
  }[e.idioma] || e.idioma)), /*#__PURE__*/React.createElement("dt", null, t.common.size), /*#__PURE__*/React.createElement("dd", null, e.size ? e.size.toLocaleString() + " " + t.common.members : /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014")), /*#__PURE__*/React.createElement("dt", null, t.common.founded), /*#__PURE__*/React.createElement("dd", null, e.founded || /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014")), /*#__PURE__*/React.createElement("dt", null, t.common.parent), /*#__PURE__*/React.createElement("dd", null, parent ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: ev => {
      ev.preventDefault();
      go({
        name: "entity",
        id: parent.id
      });
    }
  }, parent.name) : /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014")), /*#__PURE__*/React.createElement("dt", null, t.common.tags), /*#__PURE__*/React.createElement("dd", null, e.tags && e.tags.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap"
    }
  }, e.tags.map(tg => /*#__PURE__*/React.createElement("span", {
    key: tg,
    className: "tag-chip"
  }, tg))) : /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "\u2014")))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 14
  }), " ", lang === "es" ? "Horario de servicios" : "Service schedule"), /*#__PURE__*/React.createElement("div", {
    className: "section-body",
    style: {
      paddingTop: 8
    }
  }, !e.schedule || e.schedule.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-4)",
      fontSize: 13,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, lang === "es" ? "Sin horario configurado" : "No schedule set"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      fontSize: 11,
      padding: "2px 8px"
    },
    onClick: () => onEditEntity && onEditEntity(e.id)
  }, "+ ", lang === "es" ? "Agregar" : "Add")) : (() => {
    const DAY_LABELS = {
      domingo: "Domingo",
      lunes: "Lunes",
      martes: "Martes",
      miercoles: "Miércoles",
      jueves: "Jueves",
      viernes: "Viernes",
      sabado: "Sábado"
    };
    const DAY_ORDER_P = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    const fmt = t => {
      if (!t) return "";
      const [h, m] = t.split(":");
      const hr = parseInt(h);
      return (hr > 12 ? hr - 12 : hr || 12) + ":" + m + " " + (hr >= 12 ? "PM" : "AM");
    };
    const days = [...new Set((e.schedule || []).map(s => s.day))].sort((a, b) => DAY_ORDER_P.indexOf(a) - DAY_ORDER_P.indexOf(b));
    return days.map(day => {
      const slots = (e.schedule || []).filter(s => s.day === day);
      return /*#__PURE__*/React.createElement("div", {
        key: day,
        style: {
          marginBottom: 8,
          padding: "10px 14px",
          borderRadius: 10,
          background: "var(--bg-soft, #f8f9fc)",
          border: "1px solid var(--line)"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 700,
          fontSize: 13,
          color: "var(--accent)",
          marginBottom: slots.length ? 6 : 0
        }
      }, DAY_LABELS[day] || day), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexWrap: "wrap",
          gap: 6
        }
      }, slots.map((s, i) => /*#__PURE__*/React.createElement("span", {
        key: i,
        style: {
          display: "inline-block",
          padding: "3px 10px",
          borderRadius: 20,
          background: "var(--accent)",
          color: "#fff",
          fontSize: 12,
          fontWeight: 700,
          fontFamily: "var(--font-mono, monospace)"
        }
      }, fmt(s.time) || "—"))));
    });
  })())), /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, t.common.relatedPersonas, " ", /*#__PURE__*/React.createElement("span", {
    className: "muted mono",
    style: {
      fontSize: 11
    }
  }, linkedPeople.length)), /*#__PURE__*/React.createElement("div", {
    className: "section-body",
    style: {
      paddingTop: 4
    }
  }, linkedPeople.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 13
    }
  }, t.common.none), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, linkedPeople.slice(0, 8).map(({
    p,
    link
  }) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "link-row",
    onClick: () => go({
      name: "person",
      id: p.id
    }),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: p.color
    }
  }, initials(fullName(p))), /*#__PURE__*/React.createElement("div", {
    className: "grow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, fullName(p)), /*#__PURE__*/React.createElement("div", {
    className: "row-sub"
  }, p.email)), /*#__PURE__*/React.createElement("span", {
    className: "role-pill"
  }, link.role === "otro" ? link.roleOther || t.roles.otro : t.roles[link.role]))), linkedPeople.length > 8 && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    onClick: () => setTab("people")
  }, lang === "es" ? "Ver todas" : "See all", " (", linkedPeople.length, ")")))), (parent || children.length > 0) && /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, lang === "es" ? "Jerarquía" : "Hierarchy"), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tree"
  }, parent && /*#__PURE__*/React.createElement("div", {
    className: "tree-node",
    style: {
      cursor: "pointer"
    },
    onClick: () => go({
      name: "entity",
      id: parent.id
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building"
  }), " ", parent.name), /*#__PURE__*/React.createElement("div", {
    className: parent ? "tree-children" : ""
  }, /*#__PURE__*/React.createElement("div", {
    className: "tree-node cur"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building"
  }), " ", e.name), children.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "tree-children"
  }, children.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    className: "tree-node",
    style: {
      cursor: "pointer"
    },
    onClick: () => go({
      name: "entity",
      id: c.id
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building"
  }), " ", c.name))))))), /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, t.common.map), /*#__PURE__*/React.createElement("div", {
    className: "mini-map",
    style: {
      borderRadius: 0,
      borderLeft: 0,
      borderRight: 0,
      borderBottom: 0,
      height: 220
    }
  }, /*#__PURE__*/React.createElement(MiniMap, {
    entities: [e],
    personas: linkedPeople.map(x => x.p),
    focus: e.lat ? {
      lat: e.lat,
      lng: e.lng
    } : null
  }))))), tab === "people" && /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("span", null, t.common.relatedPersonas, " ", /*#__PURE__*/React.createElement("span", {
    className: "muted mono",
    style: {
      fontSize: 11,
      marginLeft: 6
    }
  }, linkedPeople.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, availablePersons.length > 0 && !linking && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => {
      setLinking(true);
      setLinkPersonId("");
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", lang === "es" ? "Vincular existente" : "Link existing"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary",
    onClick: () => go({
      name: "new-person",
      prefill: {
        entityId: e.id
      }
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", lang === "es" ? "Nueva persona aquí" : "New person here"))), linking && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "flex-end",
      padding: "12px 16px",
      background: "var(--bg-soft)",
      borderBottom: "1px solid var(--line)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0,
      flex: "1 1 240px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11
    }
  }, lang === "es" ? "Persona" : "Person"), /*#__PURE__*/React.createElement(SearchPicker, {
    items: availablePersons,
    value: linkPersonId,
    onChange: setLinkPersonId,
    getLabel: p => fullName(p) || "",
    getSub: p => [p.email, p.city && p.city + (p.state ? ", " + p.state : ""), p.phone || p.phones && p.phones[0] && p.phones[0].value].filter(Boolean).join(" · "),
    getPhone: p => p.phone || p.phones && p.phones[0] && p.phones[0].value || "",
    lang: lang,
    placeholder: lang === "es" ? "Escribe el nombre de la persona…" : "Type person name…"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0,
      flex: "1 1 140px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11
    }
  }, lang === "es" ? "Cargo" : "Role"), /*#__PURE__*/React.createElement("select", {
    value: linkRole,
    onChange: e2 => setLinkRole(e2.target.value)
  }, Object.keys(t.roles).map(k => /*#__PURE__*/React.createElement("option", {
    key: k,
    value: k
  }, t.roles[k])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      paddingBottom: 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary",
    disabled: !linkPersonId,
    onClick: doLinkPerson
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", lang === "es" ? "Vincular" : "Link"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setLinking(false)
  }, lang === "es" ? "Cancelar" : "Cancel"))), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, linkedPeople.length === 0 && !linking && /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, t.common.none), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, linkedPeople.map(({
    p,
    link
  }) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "link-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: p.color,
      cursor: "pointer"
    },
    onClick: () => go({
      name: "person",
      id: p.id
    })
  }, initials(fullName(p))), /*#__PURE__*/React.createElement("div", {
    className: "grow",
    style: {
      cursor: "pointer"
    },
    onClick: () => go({
      name: "person",
      id: p.id
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, fullName(p)), /*#__PURE__*/React.createElement("div", {
    className: "row-sub"
  }, p.email, " \xB7 ", p.city)), /*#__PURE__*/React.createElement("span", {
    className: "role-pill"
  }, link.role === "otro" ? link.roleOther || t.roles.otro : t.roles[link.role]), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      color: "var(--bad)"
    },
    onClick: () => doUnlinkPerson(p.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))))))), tab === "tasks" && /*#__PURE__*/React.createElement(TasksTab, {
    personId: e.id,
    tasks: tasks,
    onAddTask: onAddTask,
    onToggleTask: onToggleTask,
    onDeleteTask: onDeleteTask,
    lang: lang,
    users: users,
    currentUser: currentUser,
    hasDuplicate: hasDup,
    go: go,
    onResolveDuplicate: onResolveDuplicate,
    dupTab: "entidades"
  }), tab === "comments" && /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, t.common.comments), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, /*#__PURE__*/React.createElement(Comments, {
    items: data.comments[e.id] || [],
    t: t,
    lang: lang,
    onAdd: text => addComment(e.id, text),
    onEdit: (i, text) => onEditComment && onEditComment(e.id, i, text),
    onDelete: i => onDeleteComment && onDeleteComment(e.id, i)
  }))), tab === "files" && /*#__PURE__*/React.createElement(AttachmentsTab, {
    targetId: e.id,
    attachments: attachments || [],
    onAdd: onAddAttachment,
    onDelete: onDeleteAttachment,
    lang: lang,
    currentUser: undefined
  }), tab === "history" && /*#__PURE__*/React.createElement(ChangelogTab, {
    changelog: changelog,
    lang: lang
  }), tab === "map" && /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, t.common.map), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 480
    }
  }, /*#__PURE__*/React.createElement(MiniMap, {
    entities: [e],
    personas: linkedPeople.map(x => x.p),
    focus: e.lat ? {
      lat: e.lat,
      lng: e.lng
    } : null,
    go: go
  }))));
};
window.PersonProfile = PersonProfile;
window.EntityProfile = EntityProfile;

;/* ===== forms.jsx ===== */
// PROMEZA CRM — Forms: New Person / New Entity (modal style)

const TextField = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  full,
  optional,
  hint,
  onBlur
}) => /*#__PURE__*/React.createElement("div", {
  className: "field" + (full ? " full" : "")
}, /*#__PURE__*/React.createElement("label", null, label, optional && /*#__PURE__*/React.createElement("span", {
  style: {
    marginLeft: 6,
    color: "var(--ink-4)",
    fontWeight: 400,
    textTransform: "none",
    letterSpacing: 0
  }
}, "(opcional)")), /*#__PURE__*/React.createElement("input", {
  type: type,
  value: value || "",
  onChange: e => onChange(e.target.value),
  placeholder: placeholder,
  onBlur: onBlur
}), hint && /*#__PURE__*/React.createElement("div", {
  className: "muted",
  style: {
    fontSize: 11
  }
}, hint));
const SelectField = ({
  label,
  value,
  onChange,
  options,
  full
}) => /*#__PURE__*/React.createElement("div", {
  className: "field" + (full ? " full" : "")
}, /*#__PURE__*/React.createElement("label", null, label), /*#__PURE__*/React.createElement("select", {
  value: value || "",
  onChange: e => onChange(e.target.value)
}, options.map(o => /*#__PURE__*/React.createElement("option", {
  key: o.value,
  value: o.value
}, o.label))));
const PHONE_LABELS = ["Personal", "Trabajo", "WhatsApp", "Casa", "Oficina", "Otro"];
const EMAIL_LABELS = ["Personal", "Trabajo", "Otro"];
const MultiContactField = ({
  label,
  entries,
  onChange,
  type = "phone",
  lang
}) => {
  const labels = type === "phone" ? PHONE_LABELS : EMAIL_LABELS;
  const placeholder = type === "phone" ? "+1 305 555 0000" : "correo@dominio.com";
  const inputType = type === "email" ? "email" : "tel";
  const add = () => onChange([...entries, {
    value: "",
    label: labels[0]
  }]);
  const remove = i => onChange(entries.filter((_, idx) => idx !== i));
  const upd = (i, key, val) => onChange(entries.map((e, idx) => idx === i ? {
    ...e,
    [key]: val
  } : e));
  return /*#__PURE__*/React.createElement("div", {
    className: "field full"
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: add,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--accent)",
      fontSize: 12,
      fontWeight: 600,
      padding: "0 2px",
      fontFamily: "inherit"
    }
  }, "+ Agregar")), entries.length === 0 && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: add,
    style: {
      width: "100%",
      padding: "9px 12px",
      border: "1px dashed var(--line)",
      borderRadius: 8,
      background: "transparent",
      cursor: "pointer",
      color: "var(--ink-3)",
      fontSize: 13,
      fontFamily: "inherit",
      textAlign: "left"
    }
  }, "+ ", label), entries.map((entry, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 6,
      marginTop: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: entry.label,
    onChange: e => upd(i, "label", e.target.value),
    style: {
      flexShrink: 0,
      width: 110,
      padding: "8px 10px",
      border: "1px solid var(--line)",
      borderRadius: 8,
      background: "var(--bg)",
      fontSize: 13,
      fontFamily: "inherit",
      color: "var(--ink-1)"
    }
  }, labels.map(l => /*#__PURE__*/React.createElement("option", {
    key: l,
    value: l
  }, l))), /*#__PURE__*/React.createElement("input", {
    type: inputType,
    value: entry.value,
    onChange: e => upd(i, "value", e.target.value),
    placeholder: placeholder,
    style: {
      flex: 1,
      padding: "8px 12px",
      border: "1px solid var(--line)",
      borderRadius: 8,
      background: "var(--bg)",
      fontSize: 13,
      fontFamily: "inherit",
      color: "var(--ink-1)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => remove(i),
    style: {
      flexShrink: 0,
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--ink-4)",
      fontSize: 18,
      padding: "0 4px",
      lineHeight: 1
    }
  }, "\xD7"))));
};

// ─── Roles Multi-Select Field ───

const RolesField = ({
  roles,
  onChange,
  t
}) => {
  const toggle = key => {
    if (roles.includes(key)) {
      const next = roles.filter(r => r !== key);
      onChange(next.length ? next : ["miembro"]);
    } else {
      onChange([...roles, key]);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "field full"
  }, /*#__PURE__*/React.createElement("label", null, t.common.role, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      color: "var(--ink-4)",
      fontWeight: 400,
      textTransform: "none",
      letterSpacing: 0,
      fontSize: 11
    }
  }, "(uno o varios)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, Object.keys(t.roles).map(key => /*#__PURE__*/React.createElement("button", {
    key: key,
    type: "button",
    onClick: () => toggle(key),
    style: {
      padding: "5px 11px",
      borderRadius: 20,
      border: "1.5px solid " + (roles.includes(key) ? "var(--accent)" : "var(--line)"),
      background: roles.includes(key) ? "var(--accent)" : "transparent",
      color: roles.includes(key) ? "#fff" : "var(--ink-3)",
      cursor: "pointer",
      fontSize: 12,
      fontWeight: 600,
      fontFamily: "inherit",
      transition: "all .15s"
    }
  }, t.roles[key]))));
};

// ─── Schedule Field (for entities) ───

const SCHEDULE_DAYS = [{
  key: "domingo",
  short: "Dom",
  label: "Domingo"
}, {
  key: "lunes",
  short: "Lun",
  label: "Lunes"
}, {
  key: "martes",
  short: "Mar",
  label: "Martes"
}, {
  key: "miercoles",
  short: "Mié",
  label: "Miércoles"
}, {
  key: "jueves",
  short: "Jue",
  label: "Jueves"
}, {
  key: "viernes",
  short: "Vie",
  label: "Viernes"
}, {
  key: "sabado",
  short: "Sáb",
  label: "Sábado"
}];
const DAY_ORDER = SCHEDULE_DAYS.map(d => d.key);
const ScheduleField = ({
  schedule,
  onChange
}) => {
  const has = day => schedule.some(s => s.day === day);
  // Toggle: add first slot or remove all slots for that day
  const toggle = day => {
    if (has(day)) onChange(schedule.filter(s => s.day !== day));else onChange([...schedule, {
      day,
      time: ""
    }].sort((a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day)));
  };
  // Add another time slot for an already-selected day
  const addSlot = day => onChange([...schedule, {
    day,
    time: ""
  }].sort((a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day)));
  // Remove a specific slot by its array index
  const removeSlot = idx => onChange(schedule.filter((_, i) => i !== idx));
  const setTime = (idx, time) => onChange(schedule.map((s, i) => i === idx ? {
    ...s,
    time
  } : s));

  // Group entries by day for display
  const byDay = DAY_ORDER.filter(has).map(day => ({
    day,
    dayObj: SCHEDULE_DAYS.find(d => d.key === day),
    entries: schedule.map((s, i) => ({
      ...s,
      idx: i
    })).filter(s => s.day === day)
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "field full"
  }, /*#__PURE__*/React.createElement("label", null, "Horario de servicios \xB7 Opcional"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginBottom: byDay.length ? 10 : 0
    }
  }, SCHEDULE_DAYS.map(({
    key,
    short
  }) => /*#__PURE__*/React.createElement("button", {
    key: key,
    type: "button",
    onClick: () => toggle(key),
    style: {
      padding: "5px 11px",
      border: "1.5px solid " + (has(key) ? "var(--accent)" : "var(--line)"),
      borderRadius: 20,
      background: has(key) ? "var(--accent)" : "transparent",
      color: has(key) ? "#fff" : "var(--ink-3)",
      cursor: "pointer",
      fontSize: 12,
      fontWeight: 600,
      fontFamily: "inherit",
      transition: "all .15s"
    }
  }, short))), byDay.map(({
    day,
    dayObj,
    entries
  }) => /*#__PURE__*/React.createElement("div", {
    key: day,
    style: {
      marginBottom: 8,
      padding: "8px 10px",
      background: "var(--bg-2, #f8f8fa)",
      borderRadius: 8,
      border: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: entries.length ? 8 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--accent)",
      textTransform: "capitalize"
    }
  }, dayObj?.label || day), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => addSlot(day),
    style: {
      fontSize: 11,
      color: "var(--accent)",
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      padding: 0,
      fontWeight: 600
    }
  }, "+ hora")), entries.map(({
    idx,
    time
  }) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "time",
    value: time || "",
    onChange: e => setTime(idx, e.target.value),
    style: {
      flex: 1,
      padding: "6px 10px",
      border: "1px solid var(--line)",
      borderRadius: 8,
      background: "var(--bg)",
      fontSize: 13,
      fontFamily: "inherit",
      color: "var(--ink-1)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => removeSlot(idx),
    style: {
      color: "var(--ink-4)",
      border: "none",
      background: "none",
      cursor: "pointer",
      fontSize: 18,
      lineHeight: 1,
      padding: "0 2px"
    }
  }, "\xD7"))))));
};

// ─── New Person ───

const NewPersonForm = ({
  t,
  lang,
  data,
  onClose,
  onSave,
  initialData,
  editMode,
  prefillData
}) => {
  const [form, setForm] = React.useState(() => initialData ? {
    first: initialData.first || "",
    last: initialData.last || "",
    roles: initialData.roles || (initialData.role ? [initialData.role] : ["miembro"]),
    roleOther: initialData.roleOther || "",
    emails: initialData.emails || (initialData.email ? [{
      value: initialData.email,
      label: "Personal"
    }] : []),
    phones: initialData.phones || (initialData.phone ? [{
      value: initialData.phone,
      label: "Personal"
    }] : []),
    address: initialData.address || "",
    zip: initialData.zip || "",
    city: initialData.city || "",
    state: initialData.state || "",
    country: initialData.country || "",
    county: initialData.county || "",
    website: initialData.website || "",
    social: initialData.social || {
      ig: "",
      fb: "",
      tiktok: "",
      x: ""
    },
    entities: initialData.entities || [],
    tags: Array.isArray(initialData.tags) ? initialData.tags.join(", ") : initialData.tags || "",
    language: initialData.language || "es",
    gender: initialData.gender || "",
    status: initialData.status || "activo",
    stage: initialData.stage || (initialData.status === "inactivo" ? "inactivo" : "conocido"),
    source: initialData.source || "",
    nextAction: initialData.nextAction || "",
    birthday: initialData.birthday || "",
    lastContact: initialData.lastContact || "",
    extraAddresses: initialData.extraAddresses || [],
    addressLabel: initialData.addressLabel || "domicilio"
  } : {
    first: "",
    last: "",
    roles: ["miembro"],
    roleOther: "",
    emails: [],
    phones: [],
    address: "",
    zip: "",
    city: "",
    state: "",
    country: "",
    county: "",
    addressLabel: "domicilio",
    website: "",
    social: {
      ig: "",
      fb: "",
      tiktok: "",
      x: ""
    },
    entities: prefillData?.entityId ? [{
      id: prefillData.entityId,
      role: prefillData.entityRole || "miembro",
      roleOther: "",
      comment: ""
    }] : [],
    tags: "",
    language: "es",
    gender: "",
    status: "activo",
    stage: "nuevo",
    source: "",
    nextAction: "",
    birthday: "",
    lastContact: "",
    extraAddresses: []
  });
  const set = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));
  const setSoc = (k, v) => setForm(f => ({
    ...f,
    social: {
      ...f.social,
      [k]: v
    }
  }));
  const [countyLoading, setCountyLoading] = React.useState(false);
  const lookupCounty = async (city, state) => {
    if (!city) return;
    const q = [city, state].filter(Boolean).join(", ");
    setCountyLoading(true);
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&addressdetails=1&limit=1`, {
        headers: {
          "Accept-Language": "es"
        }
      });
      const results = await res.json();
      if (results.length && results[0].address) {
        const addr = results[0].address;
        const county = addr.county || addr.state_district || addr.region || "";
        if (county) set("county", county);
      }
    } catch (e) {}
    setCountyLoading(false);
  };
  const addAddress = () => set("extraAddresses", [...(form.extraAddresses || []), {
    id: "addr" + Date.now(),
    label: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: ""
  }]);
  const removeAddress = idx => set("extraAddresses", form.extraAddresses.filter((_, i) => i !== idx));
  const updateAddress = (idx, k, v) => set("extraAddresses", form.extraAddresses.map((a, i) => i === idx ? {
    ...a,
    [k]: v
  } : a));
  const roleOpts = Object.keys(t.roles).map(k => ({
    value: k,
    label: t.roles[k]
  }));
  const langOpts = [{
    value: "es",
    label: "Español"
  }, {
    value: "en",
    label: "English"
  }, {
    value: "pt",
    label: "Português"
  }];
  const statusOpts = [{
    value: "activo",
    label: t.common.activos
  }, {
    value: "inactivo",
    label: t.common.inactivos
  }];
  const addEntityLink = () => set("entities", [...form.entities, {
    id: data.entities[0]?.id || "",
    role: "miembro",
    roleOther: "",
    comment: ""
  }]);
  const removeEntityLink = idx => set("entities", form.entities.filter((_, i) => i !== idx));
  const updateEntityLink = (idx, k, v) => set("entities", form.entities.map((e, i) => i === idx ? {
    ...e,
    [k]: v
  } : e));
  const addrLabels = [lang === "es" ? "Domicilio" : "Home", lang === "es" ? "Iglesia" : "Church", lang === "es" ? "Trabajo" : "Work", lang === "es" ? "Ministerio" : "Ministry", lang === "es" ? "Otro" : "Other"];
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-veil",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, editMode ? lang === "es" ? "Editar persona" : "Edit person" : t.forms.newPersonTitle), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, t.forms.basic)), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 8px",
      fontSize: 12,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, t.forms.basic), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement(TextField, {
    label: t.forms.first,
    value: form.first,
    onChange: v => set("first", v),
    placeholder: "Marcos"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: t.forms.last,
    value: form.last,
    onChange: v => set("last", v),
    placeholder: "Rivera"
  }), /*#__PURE__*/React.createElement(RolesField, {
    roles: form.roles,
    onChange: v => set("roles", v),
    t: t
  }), form.roles.includes("otro") && /*#__PURE__*/React.createElement(TextField, {
    label: t.common.roleOther,
    value: form.roleOther,
    onChange: v => set("roleOther", v),
    placeholder: "Coordinador, Director\u2026"
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "18px 0 8px",
      fontSize: 12,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, t.forms.contact), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement(MultiContactField, {
    label: "Email(s)",
    entries: form.emails,
    onChange: v => set("emails", v),
    type: "email",
    lang: lang
  }), /*#__PURE__*/React.createElement(MultiContactField, {
    label: lang === "es" ? "Teléfono(s)" : "Phone(s)",
    entries: form.phones,
    onChange: v => set("phones", v),
    type: "phone",
    lang: lang
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "18px 0 8px"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: 12,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, lang === "es" ? "Dirección" : "Address"), /*#__PURE__*/React.createElement("select", {
    value: form.addressLabel,
    onChange: e => set("addressLabel", e.target.value),
    style: {
      fontSize: 12,
      padding: "3px 8px",
      border: "1px solid var(--line)",
      borderRadius: 6,
      background: "var(--bg)",
      color: "var(--accent)",
      fontWeight: 600,
      fontFamily: "inherit",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "domicilio"
  }, lang === "es" ? "Domicilio / Casa" : "Home"), /*#__PURE__*/React.createElement("option", {
    value: "iglesia"
  }, lang === "es" ? "Iglesia" : "Church"), /*#__PURE__*/React.createElement("option", {
    value: "trabajo"
  }, lang === "es" ? "Trabajo / Oficina" : "Work / Office"), /*#__PURE__*/React.createElement("option", {
    value: "ministerio"
  }, lang === "es" ? "Ministerio" : "Ministry"), /*#__PURE__*/React.createElement("option", {
    value: "otro"
  }, lang === "es" ? "Otro" : "Other"))), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement(TextField, {
    full: true,
    label: lang === "es" ? "Dirección completa" : "Full address",
    value: form.address,
    onChange: v => set("address", v),
    placeholder: "Calle, n\xFAmero, depto."
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "ZIP",
    value: form.zip,
    onChange: v => set("zip", v)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: lang === "es" ? "Ciudad" : "City",
    value: form.city,
    onChange: v => set("city", v),
    onBlur: () => lookupCounty(form.city, form.state)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: lang === "es" ? "Estado / Provincia" : "State / Province",
    value: form.state,
    onChange: v => set("state", v),
    onBlur: () => lookupCounty(form.city, form.state)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: lang === "es" ? "País" : "Country",
    value: form.country,
    onChange: v => set("country", v)
  }), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, lang === "es" ? "Condado / Región" : "County / Region", countyLoading && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      color: "var(--accent)",
      fontSize: 10,
      fontWeight: 400
    }
  }, "detectando\u2026"), form.county && !countyLoading && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      color: "var(--good)",
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u25CF auto")), /*#__PURE__*/React.createElement("input", {
    value: form.county || "",
    onChange: e => set("county", e.target.value),
    placeholder: lang === "es" ? "Se detecta al ingresar ciudad" : "Auto-detected from city"
  }))), (form.extraAddresses || []).map((addr, idx) => /*#__PURE__*/React.createElement("div", {
    key: addr.id || idx,
    className: "entity-block",
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 14
  }), /*#__PURE__*/React.createElement("select", {
    value: addr.label,
    onChange: e => updateAddress(idx, "label", e.target.value),
    style: {
      border: "none",
      background: "transparent",
      fontFamily: "inherit",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--ink)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, lang === "es" ? "Tipo de dirección…" : "Address type…"), addrLabels.map(l => /*#__PURE__*/React.createElement("option", {
    key: l,
    value: l
  }, l)))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    onClick: () => removeAddress(idx),
    style: {
      color: "var(--bad)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 13
  }), " ", lang === "es" ? "Quitar" : "Remove")), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement(TextField, {
    full: true,
    label: lang === "es" ? "Dirección" : "Address",
    value: addr.address,
    onChange: v => updateAddress(idx, "address", v),
    placeholder: "Calle, n\xFAmero\u2026"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "ZIP",
    value: addr.zip,
    onChange: v => updateAddress(idx, "zip", v)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: lang === "es" ? "Ciudad" : "City",
    value: addr.city,
    onChange: v => updateAddress(idx, "city", v)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: lang === "es" ? "Estado" : "State",
    value: addr.state,
    onChange: v => updateAddress(idx, "state", v)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: lang === "es" ? "País" : "Country",
    value: addr.country,
    onChange: v => updateAddress(idx, "country", v)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    onClick: addAddress
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", lang === "es" ? "Agregar otra dirección" : "Add another address")), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "18px 0 8px",
      fontSize: 12,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, t.forms.affiliation, " ", /*#__PURE__*/React.createElement("span", {
    className: "muted",
    style: {
      fontWeight: 400,
      textTransform: "none",
      letterSpacing: 0,
      marginLeft: 4
    }
  }, "\xB7 ", t.common.optional)), form.entities.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 13,
      padding: "4px 2px"
    }
  }, t.forms.noEntity), form.entities.map((le, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "entity-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13
    }
  }, lang === "es" ? "Entidad" : "Entity", " #", i + 1), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    onClick: () => removeEntityLink(i)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }), " ", t.forms.removeEntity)), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field full"
  }, /*#__PURE__*/React.createElement("label", null, lang === "es" ? "Entidad" : "Entity"), /*#__PURE__*/React.createElement(SearchPicker, {
    items: data.entities,
    value: le.id,
    onChange: v => updateEntityLink(i, "id", v),
    getLabel: e => e.name || "",
    getSub: e => [e.city && e.city + (e.state ? ", " + e.state : ""), e.phone || e.phones && e.phones[0] && e.phones[0].value].filter(Boolean).join(" · "),
    getPhone: e => e.phone || e.phones && e.phones[0] && e.phones[0].value || "",
    lang: lang,
    placeholder: lang === "es" ? "Escribe el nombre de la entidad…" : "Type entity name…"
  })), /*#__PURE__*/React.createElement(SelectField, {
    label: lang === "es" ? "Cargo en la entidad" : "Role at entity",
    value: le.role,
    onChange: v => updateEntityLink(i, "role", v),
    options: roleOpts
  }), le.role === "otro" && /*#__PURE__*/React.createElement(TextField, {
    label: t.common.roleOther,
    value: le.roleOther,
    onChange: v => updateEntityLink(i, "roleOther", v)
  }), /*#__PURE__*/React.createElement(TextField, {
    full: true,
    label: t.common.comments,
    value: le.comment,
    onChange: v => updateEntityLink(i, "comment", v),
    placeholder: lang === "es" ? "Notas sobre la afiliación" : "Notes about the affiliation"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: addEntityLink
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t.forms.addEntity)), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "18px 0 8px",
      fontSize: 12,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, t.forms.socialBlock), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement(TextField, {
    full: true,
    label: t.common.web,
    value: form.website,
    onChange: v => set("website", v),
    placeholder: "dominio.com"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Instagram",
    value: form.social.ig,
    onChange: v => setSoc("ig", v),
    placeholder: "@usuario"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Facebook",
    value: form.social.fb,
    onChange: v => setSoc("fb", v),
    placeholder: "usuario"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "TikTok",
    value: form.social.tiktok,
    onChange: v => setSoc("tiktok", v),
    placeholder: "@usuario"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "X (Twitter)",
    value: form.social.x,
    onChange: v => setSoc("x", v),
    placeholder: "@usuario"
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "18px 0 8px",
      fontSize: 12,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, "Pipeline CRM"), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field full"
  }, /*#__PURE__*/React.createElement("label", null, lang === "es" ? "Etapa en el pipeline" : "Pipeline stage"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, (window.PIPELINE_STAGES || []).map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    type: "button",
    onClick: () => set("stage", s.id),
    style: {
      padding: "5px 12px",
      borderRadius: 20,
      border: "1.5px solid",
      borderColor: form.stage === s.id ? s.color : "var(--line)",
      background: form.stage === s.id ? s.bg : "transparent",
      color: form.stage === s.id ? s.color : "var(--ink-3)",
      fontFamily: "inherit",
      fontSize: 12.5,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, s.label)))), /*#__PURE__*/React.createElement(SelectField, {
    label: lang === "es" ? "Fuente del contacto" : "Contact source",
    value: form.source,
    onChange: v => set("source", v),
    options: [{
      value: "",
      label: lang === "es" ? "— Sin especificar —" : "— Not specified —"
    }, ...(window.CONTACT_SOURCES || []).map(s => ({
      value: s.id,
      label: s.label
    }))]
  }), /*#__PURE__*/React.createElement(TextField, {
    type: "date",
    label: lang === "es" ? "Próxima acción" : "Next action date",
    value: form.nextAction,
    onChange: v => set("nextAction", v)
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "18px 0 8px",
      fontSize: 12,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, t.forms.extra), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement(TextField, {
    label: t.common.tags,
    value: form.tags,
    onChange: v => set("tags", v),
    placeholder: "liderazgo, vip",
    hint: lang === "es" ? "Separadas por coma" : "Comma separated"
  }), /*#__PURE__*/React.createElement(SelectField, {
    label: t.common.language,
    value: form.language,
    onChange: v => set("language", v),
    options: langOpts
  }), /*#__PURE__*/React.createElement(SelectField, {
    label: lang === "es" ? "Sexo" : "Gender",
    value: form.gender,
    onChange: v => set("gender", v),
    options: [{
      value: "",
      label: lang === "es" ? "— Sin especificar —" : "— Not specified —"
    }, {
      value: "F",
      label: lang === "es" ? "Mujer" : "Female"
    }, {
      value: "M",
      label: lang === "es" ? "Hombre" : "Male"
    }]
  }), /*#__PURE__*/React.createElement(TextField, {
    type: "date",
    label: t.common.birthday,
    value: form.birthday,
    onChange: v => set("birthday", v)
  }), /*#__PURE__*/React.createElement(TextField, {
    type: "date",
    label: t.common.lastContact,
    value: form.lastContact,
    onChange: v => set("lastContact", v)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onClose
  }, t.common.cancel), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => onSave(form),
    disabled: !form.first && !form.last
  }, editMode ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", lang === "es" ? "Guardar cambios" : "Save changes") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t.forms.saveCreate)))));
};

// ─── New Entity ───

const NewEntityForm = ({
  t,
  lang,
  data,
  onClose,
  onSave,
  initialData,
  editMode
}) => {
  const [form, setForm] = React.useState(() => initialData ? {
    name: initialData.name || "",
    type: initialData.type || "iglesia",
    typeOther: initialData.typeOther || "",
    denominacion: initialData.denominacion || "",
    emails: initialData.emails || (initialData.email ? [{
      value: initialData.email,
      label: "Personal"
    }] : []),
    phones: initialData.phones || (initialData.phone ? [{
      value: initialData.phone,
      label: "Personal"
    }] : []),
    address: initialData.address || "",
    zip: initialData.zip || "",
    city: initialData.city || "",
    state: initialData.state || "",
    country: initialData.country || "",
    county: initialData.county || "",
    website: initialData.website || "",
    social: initialData.social || {
      ig: "",
      fb: "",
      tiktok: "",
      x: ""
    },
    size: initialData.size ? String(initialData.size) : "",
    founded: initialData.founded || "",
    parent: initialData.parent || "",
    tags: Array.isArray(initialData.tags) ? initialData.tags.join(", ") : initialData.tags || "",
    schedule: initialData.schedule || [],
    idioma: initialData.idioma || "",
    language: initialData.language || "es"
  } : {
    name: "",
    type: "iglesia",
    typeOther: "",
    denominacion: "",
    emails: [],
    phones: [],
    address: "",
    zip: "",
    city: "",
    state: "",
    country: "",
    county: "",
    website: "",
    social: {
      ig: "",
      fb: "",
      tiktok: "",
      x: ""
    },
    size: "",
    founded: "",
    parent: "",
    tags: "",
    schedule: [],
    idioma: "",
    language: "es"
  });
  const set = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));
  const setSoc = (k, v) => setForm(f => ({
    ...f,
    social: {
      ...f.social,
      [k]: v
    }
  }));
  const [countyLoading, setCountyLoading] = React.useState(false);
  const lookupCounty = async (city, state) => {
    if (!city) return;
    const q = [city, state].filter(Boolean).join(", ");
    setCountyLoading(true);
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&addressdetails=1&limit=1`, {
        headers: {
          "Accept-Language": "es"
        }
      });
      const results = await res.json();
      if (results.length && results[0].address) {
        const addr = results[0].address;
        const county = addr.county || addr.state_district || addr.region || "";
        if (county) set("county", county);
      }
    } catch (e) {}
    setCountyLoading(false);
  };
  const typeOpts = Object.keys(t.types).map(k => ({
    value: k,
    label: t.types[k]
  }));
  const parentOpts = [{
    value: "",
    label: lang === "es" ? "— Ninguna —" : "— None —"
  }, ...data.entities.map(e => ({
    value: e.id,
    label: e.name
  })).sort((a, b) => window.nameCmp(a.label, b.label))];
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-veil",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, editMode ? lang === "es" ? "Editar entidad" : "Edit entity" : t.forms.newEntityTitle), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, t.forms.basic)), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 8px",
      fontSize: 12,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, t.forms.basic), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement(TextField, {
    full: true,
    label: t.forms.entityName,
    value: form.name,
    onChange: v => set("name", v),
    placeholder: lang === "es" ? "Iglesia / Fundación / Estudio…" : "Church / Foundation / Studio…"
  }), /*#__PURE__*/React.createElement(SelectField, {
    label: t.common.type,
    value: form.type,
    onChange: v => set("type", v),
    options: typeOpts
  }), (form.type === "iglesia" || form.type === "sinagoga") && /*#__PURE__*/React.createElement(TextField, {
    label: lang === "es" ? "Denominación · Opcional" : "Denomination · Optional",
    value: form.denominacion,
    onChange: v => set("denominacion", v),
    placeholder: lang === "es" ? "Ej: Bautista, Católica, Adventista…" : "E.g. Baptist, Catholic, Adventist…"
  }), form.type === "otro" && /*#__PURE__*/React.createElement(TextField, {
    label: lang === "es" ? "Especificar tipo" : "Specify type",
    value: form.typeOther,
    onChange: v => set("typeOther", v)
  }), /*#__PURE__*/React.createElement(SelectField, {
    label: t.common.parent + " · " + t.common.optional,
    value: form.parent,
    onChange: v => set("parent", v),
    options: parentOpts
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "18px 0 8px",
      fontSize: 12,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, t.forms.contact), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement(MultiContactField, {
    label: "Email(s)",
    entries: form.emails,
    onChange: v => set("emails", v),
    type: "email",
    lang: lang
  }), /*#__PURE__*/React.createElement(MultiContactField, {
    label: lang === "es" ? "Teléfono(s)" : "Phone(s)",
    entries: form.phones,
    onChange: v => set("phones", v),
    type: "phone",
    lang: lang
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "18px 0 8px",
      fontSize: 12,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, t.forms.addressBlock), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement(TextField, {
    full: true,
    label: lang === "es" ? "Dirección completa" : "Full address",
    value: form.address,
    onChange: v => set("address", v)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "ZIP",
    value: form.zip,
    onChange: v => set("zip", v)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: lang === "es" ? "Ciudad" : "City",
    value: form.city,
    onChange: v => set("city", v),
    onBlur: () => lookupCounty(form.city, form.state)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: lang === "es" ? "Estado / Provincia" : "State / Province",
    value: form.state,
    onChange: v => set("state", v),
    onBlur: () => lookupCounty(form.city, form.state)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: lang === "es" ? "País" : "Country",
    value: form.country,
    onChange: v => set("country", v)
  }), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, lang === "es" ? "Condado / Región" : "County / Region", countyLoading && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      color: "var(--accent)",
      fontSize: 10,
      fontWeight: 400
    }
  }, "detectando\u2026"), form.county && !countyLoading && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      color: "var(--good)",
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u25CF auto")), /*#__PURE__*/React.createElement("input", {
    value: form.county || "",
    onChange: e => set("county", e.target.value),
    placeholder: lang === "es" ? "Se detecta al ingresar ciudad" : "Auto-detected from city"
  }))), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "18px 0 8px",
      fontSize: 12,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, t.forms.socialBlock), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement(TextField, {
    full: true,
    label: t.common.web,
    value: form.website,
    onChange: v => set("website", v),
    placeholder: "dominio.com"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Instagram",
    value: form.social.ig,
    onChange: v => setSoc("ig", v)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Facebook",
    value: form.social.fb,
    onChange: v => setSoc("fb", v)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "TikTok",
    value: form.social.tiktok,
    onChange: v => setSoc("tiktok", v)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "X (Twitter)",
    value: form.social.x,
    onChange: v => setSoc("x", v)
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "18px 0 8px",
      fontSize: 12,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, t.forms.extra), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement(TextField, {
    label: t.common.size + " (" + t.common.members + ")",
    type: "number",
    value: form.size,
    onChange: v => set("size", v)
  }), /*#__PURE__*/React.createElement(TextField, {
    label: t.common.founded,
    value: form.founded,
    onChange: v => set("founded", v),
    placeholder: "2014"
  }), /*#__PURE__*/React.createElement(SelectField, {
    label: lang === "es" ? "Idioma" : "Language",
    value: form.language,
    onChange: v => set("language", v),
    options: [{
      value: "es",
      label: "Español"
    }, {
      value: "en",
      label: "English"
    }, {
      value: "pt",
      label: "Português"
    }]
  }), /*#__PURE__*/React.createElement(TextField, {
    full: true,
    label: t.common.tags,
    value: form.tags,
    onChange: v => set("tags", v),
    placeholder: "matriz, hispana",
    hint: lang === "es" ? "Separadas por coma" : "Comma separated"
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "18px 0 8px",
      fontSize: 12,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, "Horarios"), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement(ScheduleField, {
    schedule: form.schedule,
    onChange: v => set("schedule", v)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onClose
  }, t.common.cancel), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => onSave(form),
    disabled: !form.name
  }, editMode ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", lang === "es" ? "Guardar cambios" : "Save changes") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t.forms.saveCreate)))));
};
window.NewPersonForm = NewPersonForm;
window.NewEntityForm = NewEntityForm;

;/* ===== duplicates.jsx ===== */
// PROMEZA CRM — Duplicate detection and merge review

const _norm = s => (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ").trim();
const _phone = s => (s || "").replace(/\D/g, "");

// Blocking approach: group ids by shared email / phone / name (O(n)), then only
// pair WITHIN each group. The old O(n²) double loop did ~n²/2 comparisons — at
// ~18k records that's ~160M string-normalizations on the main thread and froze the
// page on every create/import/scan. This is O(n + pairs). Groups larger than
// GROUP_CAP (a shared org email or a very common name) are skipped — those are not
// real duplicate clusters and would otherwise explode the pair count.
const GROUP_CAP = 30;
const _pushId = (map, key, id) => {
  let a = map.get(key);
  if (!a) {
    a = [];
    map.set(key, a);
  }
  a.push(id);
};
const findDuplicatePairs = (personas, existingPairs = []) => {
  const dismissed = new Set(existingPairs.filter(p => p.dismissed).map(p => p.idA + "|" + p.idB));
  const byEmail = new Map(),
    byPhone = new Map(),
    byName = new Map();
  for (let i = 0; i < personas.length; i++) {
    const p = personas[i];
    const e = _norm(p.email);
    if (e) _pushId(byEmail, e, p.id);
    const ph = _phone(p.phone);
    if (ph.length >= 7) _pushId(byPhone, ph, p.id);
    const n = _norm((p.first || "") + " " + (p.last || ""));
    if (n && n !== " ") _pushId(byName, n, p.id);
  }
  const scores = new Map();
  const addGroups = (map, w) => {
    for (const ids of map.values()) {
      const k = ids.length;
      if (k < 2 || k > GROUP_CAP) continue;
      for (let i = 0; i < k; i++) for (let j = i + 1; j < k; j++) {
        const a = ids[i],
          b = ids[j];
        if (a === b) continue;
        const key = a < b ? a + "|" + b : b + "|" + a;
        scores.set(key, (scores.get(key) || 0) + w);
      }
    }
  };
  addGroups(byEmail, 3);
  addGroups(byPhone, 3);
  addGroups(byName, 2);
  const pairs = [];
  for (const [key, s] of scores) {
    if (s < 2 || dismissed.has(key)) continue;
    const idx = key.indexOf("|");
    pairs.push({
      idA: key.slice(0, idx),
      idB: key.slice(idx + 1),
      score: s,
      dismissed: false
    });
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
      const a = entities[i],
        b = entities[j];
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
      if (score >= 2) pairs.push({
        idA: a.id,
        idB: b.id,
        score,
        dismissed: false,
        kind: "entity"
      });
    }
  }
  return pairs.sort((a, b) => b.score - a.score);
};
window.findEntityDuplicatePairs = findEntityDuplicatePairs;

// Check if persona has contact info issues
const hasContactIssue = p => {
  const email = (p.email || "").trim();
  const phone = (p.phone || "").replace(/\D/g, "");
  if (!email && phone.length < 7) return true; // no way to contact
  if (email && !email.includes("@")) return true; // bad email format
  if (p.emailStatus === "bad") return true; // marked not working
  if (p.phoneStatus === "bad") return true; // marked not working
  return false;
};
window.hasContactIssue = hasContactIssue;

// ─── Side-by-side field row ───

const DupField = ({
  label,
  a,
  b
}) => {
  const na = (a || "").toString().trim();
  const nb = (b || "").toString().trim();
  const diff = na !== nb && (na || nb);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "90px 1fr 1fr",
      gap: 10,
      padding: "7px 0",
      borderBottom: "1px solid var(--line)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: ".05em",
      color: "var(--ink-4)",
      paddingTop: 2
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: diff ? "var(--accent-700)" : "var(--ink-1)",
      fontWeight: diff ? 600 : 400
    }
  }, na || /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-5)"
    }
  }, "\u2014")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: diff ? "var(--accent-700)" : "var(--ink-1)",
      fontWeight: diff ? 600 : 400
    }
  }, nb || /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-5)"
    }
  }, "\u2014")));
};

// ─── Merge Editor — field-by-field selection ───

const MergeEditor = ({
  pA,
  pB,
  data,
  onConfirm,
  onCancel,
  t,
  lang
}) => {
  const FIELDS = [{
    key: "first",
    label: lang === "es" ? "Nombre" : "First name",
    group: "basic"
  }, {
    key: "last",
    label: lang === "es" ? "Apellido" : "Last name",
    group: "basic"
  }, {
    key: "role",
    label: lang === "es" ? "Cargo" : "Role",
    group: "basic",
    fmt: v => t.roles[v] || v
  }, {
    key: "email",
    label: "Email",
    group: "contact"
  }, {
    key: "phone",
    label: lang === "es" ? "Teléfono" : "Phone",
    group: "contact"
  }, {
    key: "address",
    label: lang === "es" ? "Dirección" : "Address",
    group: "location"
  }, {
    key: "zip",
    label: "ZIP",
    group: "location"
  }, {
    key: "city",
    label: lang === "es" ? "Ciudad" : "City",
    group: "location"
  }, {
    key: "state",
    label: lang === "es" ? "Estado" : "State",
    group: "location"
  }, {
    key: "country",
    label: lang === "es" ? "País" : "Country",
    group: "location"
  }, {
    key: "website",
    label: "Web",
    group: "social"
  }, {
    key: "social.ig",
    label: "Instagram",
    group: "social"
  }, {
    key: "social.fb",
    label: "Facebook",
    group: "social"
  }, {
    key: "social.tiktok",
    label: "TikTok",
    group: "social"
  }, {
    key: "social.x",
    label: "X (Twitter)",
    group: "social"
  }, {
    key: "birthday",
    label: lang === "es" ? "Cumpleaños" : "Birthday",
    group: "extra"
  }, {
    key: "lastContact",
    label: lang === "es" ? "Ú. contacto" : "Last contact",
    group: "extra"
  }, {
    key: "language",
    label: lang === "es" ? "Idioma" : "Language",
    group: "extra",
    fmt: v => v === "en" ? "English" : "Español"
  }, {
    key: "status",
    label: lang === "es" ? "Estado" : "Status",
    group: "extra",
    fmt: v => t.common[v === "inactivo" ? "inactivos" : "activos"] || v
  }];
  const GROUPS = [{
    id: "basic",
    label: lang === "es" ? "Datos básicos" : "Basic info"
  }, {
    id: "contact",
    label: lang === "es" ? "Contacto" : "Contact"
  }, {
    id: "location",
    label: lang === "es" ? "Ubicación" : "Location"
  }, {
    id: "social",
    label: "Social & Web"
  }, {
    id: "extra",
    label: lang === "es" ? "Adicional" : "Additional"
  }];
  const getVal = (p, key) => {
    if (key.includes(".")) {
      const [obj, k] = key.split(".");
      return p[obj]?.[k] || "";
    }
    return p[key] || "";
  };
  const [sels, setSels] = React.useState(() => {
    const s = {};
    FIELDS.forEach(f => {
      const av = getVal(pA, f.key),
        bv = getVal(pB, f.key);
      s[f.key] = !bv && av ? "A" : !av && bv ? "B" : "A";
    });
    return s;
  });
  const [keepSide, setKeepSide] = React.useState("A");

  // Only sets the per-field DATA source; does NOT change the base profile (the
  // record/ID that's kept). This lets you keep B as the winner but pull all its
  // data from A, or any mix.
  const setAll = side => {
    const n = {};
    FIELDS.forEach(f => n[f.key] = side);
    setSels(n);
  };
  const pickVal = key => {
    if (key.includes(".")) {
      const [obj, k] = key.split(".");
      return sels[key] === "B" ? pB[obj]?.[k] || "" : pA[obj]?.[k] || "";
    }
    return sels[key] === "B" ? pB[key] || "" : pA[key] || "";
  };
  const handleConfirm = () => {
    const base = keepSide === "A" ? pA : pB;
    const merged = {
      ...base,
      first: pickVal("first"),
      last: pickVal("last"),
      role: pickVal("role"),
      roleOther: pickVal("role") === "otro" ? sels.role === "B" ? pB.roleOther : pA.roleOther : "",
      email: pickVal("email"),
      phone: pickVal("phone"),
      address: pickVal("address"),
      zip: pickVal("zip"),
      city: pickVal("city"),
      state: pickVal("state"),
      country: pickVal("country"),
      website: pickVal("website"),
      birthday: pickVal("birthday"),
      lastContact: pickVal("lastContact"),
      language: pickVal("language"),
      status: pickVal("status"),
      social: {
        ig: pickVal("social.ig"),
        fb: pickVal("social.fb"),
        tiktok: pickVal("social.tiktok"),
        x: pickVal("social.x")
      },
      tags: [...new Set([...(pA.tags || []), ...(pB.tags || [])])],
      entities: [...(pA.entities || []), ...(pB.entities || []).filter(de => !(pA.entities || []).some(ke => ke.id === de.id))]
    };
    onConfirm(keepSide === "A" ? pA.id : pB.id, keepSide === "A" ? pB.id : pA.id, merged);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-veil",
    style: {
      zIndex: 1300
    },
    onClick: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      width: "min(840px,100%)"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, lang === "es" ? "Elegir datos del perfil fusionado" : "Choose data for merged profile"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)",
      marginTop: 2
    }
  }, lang === "es" ? "1) Elige el perfil que se queda (ID).  2) Elige el dato de cada campo. Son independientes: el perfil 2 puede quedarse y aun así tomar datos del perfil 1." : "1) Pick which profile stays (ID).  2) Pick each field's value. They're independent: profile 2 can be kept while still taking data from profile 1.")), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onCancel
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "90px 1fr 1fr",
      gap: 10,
      marginBottom: 14,
      paddingBottom: 14,
      borderBottom: "2px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".05em",
      color: "var(--ink-4)"
    }
  }, lang === "es" ? "Se queda" : "Keeps", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 9,
      fontWeight: 500,
      textTransform: "none",
      letterSpacing: 0,
      color: "var(--ink-4)",
      marginTop: 2
    }
  }, lang === "es" ? "el otro se borra" : "other is deleted"))), [{
    side: "A",
    p: pA
  }, {
    side: "B",
    p: pB
  }].map(({
    side,
    p
  }) => /*#__PURE__*/React.createElement("div", {
    key: side,
    onClick: () => setKeepSide(side),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 12px",
      borderRadius: 8,
      cursor: "pointer",
      border: "2px solid " + (keepSide === side ? "var(--accent)" : "var(--line)"),
      background: keepSide === side ? "var(--accent-50)" : "transparent",
      transition: "border-color .15s, background .15s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: p.color,
      flexShrink: 0
    }
  }, initials(fullName(p))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13
    }
  }, fullName(p)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--ink-4)",
      fontFamily: "var(--font-mono)"
    }
  }, "ID conservado: ", p.id)), keepSide === side && /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "90px 1fr 1fr",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".05em",
      color: "var(--ink-4)"
    }
  }, lang === "es" ? "Datos: todos de…" : "Data: all from…")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setAll("A"),
    style: {
      width: "100%"
    }
  }, "\u2190 ", lang === "es" ? "Datos de A" : "Data from A"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setAll("B"),
    style: {
      width: "100%"
    }
  }, lang === "es" ? "Datos de B" : "Data from B", " \u2192")), GROUPS.map(group => {
    const gFields = FIELDS.filter(f => f.group === group.id).filter(f => getVal(pA, f.key) || getVal(pB, f.key));
    if (!gFields.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: group.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: ".06em",
        color: "var(--ink-4)",
        margin: "16px 0 6px"
      }
    }, group.label), gFields.map(f => {
      const aRaw = getVal(pA, f.key),
        bRaw = getVal(pB, f.key);
      const aDisp = f.fmt ? f.fmt(aRaw) : aRaw;
      const bDisp = f.fmt ? f.fmt(bRaw) : bRaw;
      const same = aRaw === bRaw;
      return /*#__PURE__*/React.createElement("div", {
        key: f.key,
        style: {
          display: "grid",
          gridTemplateColumns: "90px 1fr 1fr",
          gap: 8,
          marginBottom: 5
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 10.5,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: ".05em",
          color: "var(--ink-4)",
          display: "flex",
          alignItems: "center"
        }
      }, f.label), [{
        side: "A",
        disp: aDisp,
        raw: aRaw
      }, {
        side: "B",
        disp: bDisp,
        raw: bRaw
      }].map(({
        side,
        disp,
        raw
      }) => {
        const sel = sels[f.key] === side;
        return /*#__PURE__*/React.createElement("div", {
          key: side,
          onClick: () => !same && setSels(s => ({
            ...s,
            [f.key]: side
          })),
          style: {
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: "7px 10px",
            borderRadius: 7,
            fontSize: 13,
            border: "2px solid " + (same ? "var(--line)" : sel ? "var(--accent)" : "var(--line)"),
            background: same ? "transparent" : sel ? "var(--accent-50)" : "var(--bg-soft)",
            cursor: same ? "default" : "pointer",
            color: raw ? sel && !same ? "var(--accent-700)" : "var(--ink-1)" : "var(--ink-5)",
            fontWeight: sel && !same ? 600 : 400,
            transition: "border-color .1s, background .1s"
          }
        }, !same && /*#__PURE__*/React.createElement("div", {
          style: {
            width: 14,
            height: 14,
            borderRadius: "50%",
            flexShrink: 0,
            border: "2px solid " + (sel ? "var(--accent)" : "var(--ink-4)"),
            background: sel ? "var(--accent)" : "transparent"
          }
        }), /*#__PURE__*/React.createElement("span", null, disp || /*#__PURE__*/React.createElement("em", {
          style: {
            color: "var(--ink-5)",
            fontStyle: "italic",
            fontWeight: 400
          }
        }, lang === "es" ? "vacío" : "empty")), same && /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 10,
            color: "var(--ink-4)",
            marginLeft: "auto"
          }
        }, "=", lang === "es" ? "igual" : "same"));
      }));
    }));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: "10px 14px",
      background: "var(--bg-soft)",
      borderRadius: 8,
      fontSize: 12,
      color: "var(--ink-3)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, lang === "es" ? "Se combinan siempre:" : "Always combined:"), " ", lang === "es" ? "Etiquetas (unión) · Entidades vinculadas (unión) · Comentarios (todos)" : "Tags (union) · Linked entities (union) · Comments (all)")), /*#__PURE__*/React.createElement("div", {
    className: "modal-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onCancel
  }, t.common.cancel), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: handleConfirm
  }, "\uD83D\uDD00 ", lang === "es" ? "Fusionar con estos datos" : "Merge with these selections"))));
};

// ─── Entity Merge Editor — field-by-field selection for media / entities ───

const EntityMergeEditor = ({
  eA,
  eB,
  t,
  lang,
  onConfirm,
  onCancel
}) => {
  const es = lang === "es";
  const typeLabel = v => t.types && t.types[v] || v || "";
  const FIELDS = [{
    key: "name",
    label: es ? "Nombre" : "Name",
    group: "basic"
  }, {
    key: "type",
    label: es ? "Tipo" : "Type",
    group: "basic",
    fmt: typeLabel
  }, {
    key: "denominacion",
    label: es ? "Denominación" : "Denom.",
    group: "basic"
  }, {
    key: "email",
    label: "Email",
    group: "contact"
  }, {
    key: "phone",
    label: es ? "Teléfono" : "Phone",
    group: "contact"
  }, {
    key: "website",
    label: "Web",
    group: "contact"
  }, {
    key: "address",
    label: es ? "Dirección" : "Address",
    group: "location"
  }, {
    key: "zip",
    label: "ZIP",
    group: "location"
  }, {
    key: "city",
    label: es ? "Ciudad" : "City",
    group: "location"
  }, {
    key: "state",
    label: es ? "Estado" : "State",
    group: "location"
  }, {
    key: "country",
    label: es ? "País" : "Country",
    group: "location"
  }, {
    key: "social.ig",
    label: "Instagram",
    group: "social"
  }, {
    key: "social.fb",
    label: "Facebook",
    group: "social"
  }, {
    key: "social.tiktok",
    label: "TikTok",
    group: "social"
  }, {
    key: "social.x",
    label: "X (Twitter)",
    group: "social"
  }];
  const GROUPS = [{
    id: "basic",
    label: es ? "Datos básicos" : "Basic info"
  }, {
    id: "contact",
    label: es ? "Contacto" : "Contact"
  }, {
    id: "location",
    label: es ? "Ubicación" : "Location"
  }, {
    id: "social",
    label: "Social & Web"
  }];
  const getVal = (e, key) => {
    if (key.includes(".")) {
      const [o, k] = key.split(".");
      return e[o] && e[o][k] || "";
    }
    return e[key] || "";
  };
  const [sels, setSels] = React.useState(() => {
    const s = {};
    FIELDS.forEach(f => {
      const av = getVal(eA, f.key),
        bv = getVal(eB, f.key);
      s[f.key] = !bv && av ? "A" : !av && bv ? "B" : "A";
    });
    return s;
  });
  const [keepSide, setKeepSide] = React.useState("A");
  const setAll = side => {
    const n = {};
    FIELDS.forEach(f => n[f.key] = side);
    setSels(n);
  };
  const pickVal = key => {
    if (key.includes(".")) {
      const [o, k] = key.split(".");
      return sels[key] === "B" ? eB[o] && eB[o][k] || "" : eA[o] && eA[o][k] || "";
    }
    return sels[key] === "B" ? eB[key] || "" : eA[key] || "";
  };
  const handleConfirm = () => {
    const base = keepSide === "A" ? eA : eB;
    const merged = {
      ...base,
      name: pickVal("name"),
      type: pickVal("type"),
      denominacion: pickVal("denominacion"),
      email: pickVal("email"),
      phone: pickVal("phone"),
      website: pickVal("website"),
      address: pickVal("address"),
      zip: pickVal("zip"),
      city: pickVal("city"),
      state: pickVal("state"),
      country: pickVal("country"),
      social: {
        ig: pickVal("social.ig"),
        fb: pickVal("social.fb"),
        tiktok: pickVal("social.tiktok"),
        x: pickVal("social.x")
      },
      tags: [...new Set([...(eA.tags || []), ...(eB.tags || [])])]
    };
    onConfirm(keepSide === "A" ? eA.id : eB.id, keepSide === "A" ? eB.id : eA.id, merged);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-veil",
    style: {
      zIndex: 1300
    },
    onClick: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      width: "min(840px,100%)"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, es ? "Elegir datos del medio fusionado" : "Choose data for merged entity"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)",
      marginTop: 2
    }
  }, es ? "1) Elige el medio que se queda.  2) Elige el dato de cada campo." : "1) Pick which entity stays.  2) Pick each field's value.")), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onCancel
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "90px 1fr 1fr",
      gap: 10,
      marginBottom: 14,
      paddingBottom: 14,
      borderBottom: "2px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".05em",
      color: "var(--ink-4)"
    }
  }, es ? "Se queda" : "Keeps", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 9,
      fontWeight: 500,
      textTransform: "none",
      letterSpacing: 0,
      color: "var(--ink-4)",
      marginTop: 2
    }
  }, es ? "el otro se borra" : "other is deleted"))), [{
    side: "A",
    e: eA
  }, {
    side: "B",
    e: eB
  }].map(({
    side,
    e
  }) => /*#__PURE__*/React.createElement("div", {
    key: side,
    onClick: () => setKeepSide(side),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 12px",
      borderRadius: 8,
      cursor: "pointer",
      border: "2px solid " + (keepSide === side ? "var(--accent)" : "var(--line)"),
      background: keepSide === side ? "var(--accent-50)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      flexShrink: 0
    }
  }, "\uD83C\uDFE2"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13
    }
  }, e.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--ink-4)",
      fontFamily: "var(--font-mono)"
    }
  }, "ID conservado: ", e.id)), keepSide === side && /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "90px 1fr 1fr",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".05em",
      color: "var(--ink-4)"
    }
  }, es ? "Datos: todos de…" : "Data: all from…")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setAll("A"),
    style: {
      width: "100%"
    }
  }, "\u2190 ", es ? "Datos de A" : "Data from A"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setAll("B"),
    style: {
      width: "100%"
    }
  }, es ? "Datos de B" : "Data from B", " \u2192")), GROUPS.map(group => {
    const gFields = FIELDS.filter(f => f.group === group.id).filter(f => getVal(eA, f.key) || getVal(eB, f.key));
    if (!gFields.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: group.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: ".06em",
        color: "var(--ink-4)",
        margin: "16px 0 6px"
      }
    }, group.label), gFields.map(f => {
      const aRaw = getVal(eA, f.key),
        bRaw = getVal(eB, f.key);
      const aDisp = f.fmt ? f.fmt(aRaw) : aRaw,
        bDisp = f.fmt ? f.fmt(bRaw) : bRaw;
      const same = aRaw === bRaw;
      return /*#__PURE__*/React.createElement("div", {
        key: f.key,
        style: {
          display: "grid",
          gridTemplateColumns: "90px 1fr 1fr",
          gap: 8,
          marginBottom: 5
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 10.5,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: ".05em",
          color: "var(--ink-4)",
          display: "flex",
          alignItems: "center"
        }
      }, f.label), [{
        side: "A",
        disp: aDisp,
        raw: aRaw
      }, {
        side: "B",
        disp: bDisp,
        raw: bRaw
      }].map(({
        side,
        disp,
        raw
      }) => {
        const sel = sels[f.key] === side;
        return /*#__PURE__*/React.createElement("div", {
          key: side,
          onClick: () => !same && setSels(s => ({
            ...s,
            [f.key]: side
          })),
          style: {
            display: "flex",
            alignItems: "center",
            gap: 7,
            padding: "7px 10px",
            borderRadius: 7,
            fontSize: 13,
            border: "2px solid " + (same ? "var(--line)" : sel ? "var(--accent)" : "var(--line)"),
            background: same ? "transparent" : sel ? "var(--accent-50)" : "var(--bg-soft)",
            cursor: same ? "default" : "pointer",
            color: raw ? sel && !same ? "var(--accent-700)" : "var(--ink-1)" : "var(--ink-5)",
            fontWeight: sel && !same ? 600 : 400
          }
        }, !same && /*#__PURE__*/React.createElement("div", {
          style: {
            width: 14,
            height: 14,
            borderRadius: "50%",
            flexShrink: 0,
            border: "2px solid " + (sel ? "var(--accent)" : "var(--ink-4)"),
            background: sel ? "var(--accent)" : "transparent"
          }
        }), /*#__PURE__*/React.createElement("span", null, disp || /*#__PURE__*/React.createElement("em", {
          style: {
            color: "var(--ink-5)",
            fontStyle: "italic",
            fontWeight: 400
          }
        }, es ? "vacío" : "empty")), same && /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 10,
            color: "var(--ink-4)",
            marginLeft: "auto"
          }
        }, "=", es ? "igual" : "same"));
      }));
    }));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: "10px 14px",
      background: "var(--bg-soft)",
      borderRadius: 8,
      fontSize: 12,
      color: "var(--ink-3)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, es ? "Se combinan siempre:" : "Always combined:"), " ", es ? "Etiquetas (unión) · Contactos vinculados se mueven al medio que se queda." : "Tags (union) · Linked contacts move to the kept entity.")), /*#__PURE__*/React.createElement("div", {
    className: "modal-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onCancel
  }, t.common.cancel), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: handleConfirm
  }, "\uD83D\uDD00 ", es ? "Fusionar con estos datos" : "Merge with these selections"))));
};

// ─── Duplicate Review Modal ───

const DuplicateReviewModal = ({
  pairs,
  data,
  onMerge,
  onDismiss,
  onClose,
  t,
  lang
}) => {
  const active = pairs.filter(p => !p.dismissed);
  if (active.length === 0) {
    onClose();
    return null;
  }
  const cur = active[0];
  const pA = data.personas.find(p => p.id === cur.idA);
  const pB = data.personas.find(p => p.id === cur.idB);
  if (!pA || !pB) {
    onDismiss(cur);
    return null;
  }
  const entName = le => {
    const ent = data.entities.find(e => e.id === le.id);
    return ent ? ent.name : le.id;
  };
  const scoreLabel = cur.score >= 6 ? lang === "es" ? "Muy probable" : "Very likely" : cur.score >= 3 ? lang === "es" ? "Probable" : "Likely" : lang === "es" ? "Posible" : "Possible";
  const scoreColor = cur.score >= 6 ? "var(--bad)" : cur.score >= 3 ? "#d97706" : "var(--ink-3)";
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-veil",
    style: {
      zIndex: 1200
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      width: "min(820px,100%)"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, lang === "es" ? "Revisar posibles duplicados" : "Review possible duplicates", /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 10,
      fontSize: 12,
      fontWeight: 500,
      color: "var(--ink-3)"
    }
  }, active.length, " ", lang === "es" ? "por revisar" : "remaining")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: scoreColor,
      fontWeight: 600,
      marginTop: 2
    }
  }, "\u26A0 ", lang === "es" ? "Coincidencia:" : "Match:", " ", scoreLabel, cur.score >= 3 && " · " + (lang === "es" ? "Mismo email o teléfono" : "Same email or phone"))), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "90px 1fr 1fr",
      gap: 10,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: pA.color,
      flexShrink: 0
    }
  }, initials(fullName(pA))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, fullName(pA)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--ink-4)",
      fontFamily: "var(--font-mono)"
    }
  }, "ID ", pA.id))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: pB.color,
      flexShrink: 0
    }
  }, initials(fullName(pB))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, fullName(pB)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--ink-4)",
      fontFamily: "var(--font-mono)"
    }
  }, "ID ", pB.id)))), /*#__PURE__*/React.createElement(DupField, {
    label: lang === "es" ? "Nombre" : "Name",
    a: fullName(pA),
    b: fullName(pB)
  }), /*#__PURE__*/React.createElement(DupField, {
    label: lang === "es" ? "Cargo" : "Role",
    a: t.roles[pA.role] || pA.roleOther || pA.role,
    b: t.roles[pB.role] || pB.roleOther || pB.role
  }), /*#__PURE__*/React.createElement(DupField, {
    label: "Email",
    a: pA.email,
    b: pB.email
  }), /*#__PURE__*/React.createElement(DupField, {
    label: lang === "es" ? "Teléfono" : "Phone",
    a: pA.phone,
    b: pB.phone
  }), /*#__PURE__*/React.createElement(DupField, {
    label: lang === "es" ? "Ciudad" : "City",
    a: pA.city,
    b: pB.city
  }), /*#__PURE__*/React.createElement(DupField, {
    label: lang === "es" ? "País" : "Country",
    a: pA.country,
    b: pB.country
  }), /*#__PURE__*/React.createElement(DupField, {
    label: lang === "es" ? "Cumpleaños" : "Birthday",
    a: pA.birthday,
    b: pB.birthday
  }), /*#__PURE__*/React.createElement(DupField, {
    label: lang === "es" ? "Ú. contacto" : "Last contact",
    a: pA.lastContact,
    b: pB.lastContact
  }), /*#__PURE__*/React.createElement(DupField, {
    label: "Tags",
    a: (pA.tags || []).join(", "),
    b: (pB.tags || []).join(", ")
  }), /*#__PURE__*/React.createElement(DupField, {
    label: lang === "es" ? "Entidades" : "Entities",
    a: (pA.entities || []).map(entName).join(", "),
    b: (pB.entities || []).map(entName).join(", ")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: "10px 14px",
      background: "var(--bg-soft)",
      borderRadius: 8,
      fontSize: 12,
      color: "var(--ink-3)",
      lineHeight: 1.6
    }
  }, lang === "es" ? "Al fusionar se combinan los campos (priorizando los no vacíos), se unen etiquetas y vínculos de entidades, y se eliminará el registro con ID menor. Los campos resaltados son diferentes entre los dos registros." : "On merge, fields are combined (non-empty preferred), tags and entity links are joined, and the lower-ID record is removed. Highlighted fields differ between the two records.")), /*#__PURE__*/React.createElement("div", {
    className: "modal-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: {
      marginRight: "auto"
    },
    onClick: onClose
  }, lang === "es" ? "Revisar después" : "Review later"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => onDismiss(cur)
  }, "\uD83D\uDC65 ", lang === "es" ? "Son personas distintas" : "Different people"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => onMerge(cur.idA, cur.idB)
  }, "\uD83D\uDD00 ", lang === "es" ? "Fusionar — es la misma persona" : "Merge — same person"))));
};

// ─── Duplicates Page ───

const DuplicatesPage = ({
  pairs,
  entityPairs = [],
  data,
  onMerge,
  onMergeWithData,
  onMergeEntity,
  onMergeEntityWithData,
  onDismiss,
  onUndismiss,
  onDismissEntity,
  onUndismissEntity,
  onScanAll,
  onCreateDemo,
  onCreateManual,
  onCreateManualEntity,
  onOpenHistory,
  initialSearch = "",
  initialTab = "",
  t,
  lang
}) => {
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
  const [manA, setManA] = React.useState(null); // selected persona A
  const [manB, setManB] = React.useState(null); // selected persona B
  const [qA, setQA] = React.useState("");
  const [qB, setQB] = React.useState("");
  const [visP, setVisP] = React.useState(40); // # of active contact pairs rendered (paginate — 2000 cards froze the page)
  const [visE, setVisE] = React.useState(40); // # of active entity pairs rendered
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
  const personaById = React.useMemo(() => {
    const m = Object.create(null);
    (data.personas || []).forEach(p => {
      m[p.id] = p;
    });
    return m;
  }, [data.personas]);
  const entityById = React.useMemo(() => {
    const m = Object.create(null);
    (data.entities || []).forEach(e => {
      m[e.id] = e;
    });
    return m;
  }, [data.entities]);
  const searchP = q => {
    const sq = (q || "").trim().toLowerCase();
    if (sq.length < 2) return [];
    const sqAl = sq.replace(/[^a-z0-9]/g, ""); // digits/letters only (match codes/phones with dashes)
    return data.personas.filter(p => {
      const code = (window.getUID ? window.getUID(p.id) : p.id) || "";
      const phones = [p.phone, ...(p.phones || []).map(x => x && x.value)].filter(Boolean).join(" ");
      const emails = [p.email, ...(p.emails || []).map(x => x && x.value)].filter(Boolean).join(" ");
      const s = (fullName(p) + " " + emails + " " + phones + " " + p.id + " " + (p.uid || "") + " " + code).toLowerCase();
      if (s.includes(sq)) return true;
      return sqAl.length >= 2 && s.replace(/[^a-z0-9]/g, "").includes(sqAl);
    }).slice(0, 8);
  };
  const searchE = q => {
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
    const nm = isEnt ? rec.name || "" : fullName(rec);
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
  const toggle = key => setExpanded(k => k === key ? null : key);
  const ScoreBadge = ({
    score
  }) => {
    const label = score >= 6 ? lang === "es" ? "Mismo email/tel." : "Same email/phone" : score >= 3 ? lang === "es" ? "Mismo teléfono" : "Same phone" : lang === "es" ? "Mismo nombre" : "Same name";
    const color = score >= 6 ? "#dc2626" : score >= 3 ? "#d97706" : "#6b7280";
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color,
        background: color + "18",
        padding: "2px 7px",
        borderRadius: 20
      }
    }, "\u26A0 ", label);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, lang === "es" ? "Duplicados" : "Duplicates"), /*#__PURE__*/React.createElement("div", {
    className: "page-sub"
  }, active.length > 0 ? `${active.length} ${lang === "es" ? "pares pendientes de revisión" : "pairs pending review"}` : lang === "es" ? "Sin duplicados pendientes" : "No pending duplicates")), /*#__PURE__*/React.createElement("div", {
    className: "page-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn" + ((dupTab === "entidades" ? showManualEnt : showManual) ? " btn-primary" : ""),
    onClick: () => dupTab === "entidades" ? setShowManualEnt(v => !v) : setShowManual(v => !v)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", dupTab === "entidades" ? es ? "Marcar medio duplicado manual" : "Add manual entity duplicate" : es ? "Marcar duplicado manual" : "Add manual duplicate"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onScanAll
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  }), " ", lang === "es" ? "Escanear base completa" : "Scan full database"), onOpenHistory && /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onOpenHistory
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock"
  }), " ", lang === "es" ? "Historial" : "History"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: dupSearch,
    onChange: e => {
      setDupSearch(e.target.value);
      setVisP(40);
      setVisE(40);
    },
    placeholder: es ? "Buscar en duplicados: nombre, correo, teléfono, código…" : "Search duplicates: name, email, phone, code…",
    style: {
      width: "100%",
      padding: "9px 12px 9px 34px",
      border: "1px solid var(--line)",
      borderRadius: 8,
      fontFamily: "inherit",
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 11,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--ink-4)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 15
  })), dupSearch && /*#__PURE__*/React.createElement("button", {
    onClick: () => setDupSearch(""),
    style: {
      position: "absolute",
      right: 8,
      top: "50%",
      transform: "translateY(-50%)",
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--ink-4)",
      fontSize: 16
    }
  }, "\xD7")), dsq && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-3)",
      marginBottom: 12
    }
  }, active.length + entActive.length > 0 ? `${active.length + entActive.length} ${es ? "resultado(s) para" : "result(s) for"} "${dupSearch}"` : es ? `Sin duplicados para "${dupSearch}" — esa persona/medio no tiene duplicado pendiente.` : `No duplicates for "${dupSearch}".`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm" + (dupTab === "personas" ? " btn-primary" : ""),
    onClick: () => setDupTab("personas")
  }, es ? "Contactos" : "Contacts", " (", active.length, ")"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm" + (dupTab === "entidades" ? " btn-primary" : ""),
    onClick: () => setDupTab("entidades")
  }, es ? "Entidades / Medios" : "Entities / Media", " (", entActive.length, ")")), dupTab === "personas" && /*#__PURE__*/React.createElement(React.Fragment, null, showManual && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "16px 20px",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      marginBottom: 4
    }
  }, es ? "Marcar dos contactos como duplicados" : "Mark two contacts as duplicates"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)",
      marginBottom: 12
    }
  }, es ? "Busca y elige los dos contactos que son la misma persona. Aparecerán abajo para revisarlos y fusionarlos." : "Search and pick the two contacts that are the same person. They'll appear below to review and merge."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, [{
    q: qA,
    setQ: setQA,
    pick: manA,
    setPick: setManA,
    label: "A"
  }, {
    q: qB,
    setQ: setQB,
    pick: manB,
    setPick: setManB,
    label: "B"
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.label
  }, col.pick ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 10px",
      border: "2px solid var(--accent)",
      borderRadius: 8,
      background: "var(--accent-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: col.pick.color,
      width: 30,
      height: 30,
      fontSize: 12
    }
  }, initials(fullName(col.pick))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13
    }
  }, fullName(col.pick)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-4)"
    }
  }, col.pick.email || col.pick.phone || col.pick.id)), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: () => {
      col.setPick(null);
      col.setQ("");
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: col.q,
    onChange: e => col.setQ(e.target.value),
    placeholder: es ? "Nombre, código, teléfono, correo…" : "Name, code, phone, email…",
    style: {
      width: "100%",
      padding: "8px 10px",
      border: "1px solid var(--line)",
      borderRadius: 8,
      fontFamily: "inherit",
      fontSize: 13
    }
  }), col.q.trim().length >= 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      border: "1px solid var(--line)",
      borderRadius: 8,
      overflow: "hidden",
      maxHeight: 220,
      overflowY: "auto"
    }
  }, searchP(col.q).length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      fontSize: 12,
      color: "var(--ink-4)"
    }
  }, es ? "Sin resultados" : "No results"), searchP(col.q).map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "hover-row",
    style: {
      padding: "7px 10px",
      cursor: "pointer"
    },
    onClick: () => {
      col.setPick(p);
      col.setQ("");
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: p.color,
      width: 26,
      height: 26,
      fontSize: 11
    }
  }, initials(fullName(p))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, fullName(p)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-4)"
    }
  }, p.email || p.phone || "—"))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => {
      setManA(null);
      setManB(null);
      setQA("");
      setQB("");
      setShowManual(false);
    }
  }, t.common.cancel), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    disabled: !manA || !manB || manA.id === manB.id,
    style: {
      opacity: !manA || !manB || manA && manB && manA.id === manB.id ? 0.5 : 1
    },
    onClick: () => {
      onCreateManual(manA.id, manB.id);
      setManA(null);
      setManB(null);
      setQA("");
      setQB("");
    }
  }, "\uD83D\uDD17 ", es ? "Marcar como duplicado" : "Mark as duplicate")), manA && manB && manA.id === manB.id && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 12,
      color: "var(--bad)"
    }
  }, es ? "Elige dos contactos distintos." : "Pick two different contacts.")), active.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "48px 24px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44,
      marginBottom: 12
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 6
    }
  }, lang === "es" ? "No hay duplicados pendientes" : "No pending duplicates"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-3)",
      fontSize: 13,
      marginBottom: 24,
      maxWidth: 440,
      margin: "0 auto 24px"
    }
  }, lang === "es" ? "Los duplicados se detectan automáticamente al agregar o importar personas. También puedes escanear toda la base en cualquier momento." : "Duplicates are detected automatically when adding or importing people. You can also scan the full database at any time."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onScanAll
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  }), " ", lang === "es" ? "Escanear toda la base" : "Scan full database"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onCreateDemo
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "copy"
  }), " ", lang === "es" ? "Crear ejemplo de prueba" : "Create test example"))), active.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, active.slice(0, visP).map(pair => {
    const pA = personaById[pair.idA];
    const pB = personaById[pair.idB];
    if (!pA || !pB) return null;
    const key = pair.idA + pair.idB;
    const isOpen = expanded === key;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: "card",
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 16px",
        cursor: "pointer",
        userSelect: "none"
      },
      onClick: () => toggle(key)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "av-circle",
      style: {
        background: pA.color
      }
    }, initials(fullName(pA))), /*#__PURE__*/React.createElement("div", {
      className: "av-circle",
      style: {
        background: pB.color,
        marginLeft: -10,
        boxShadow: "0 0 0 2px var(--bg)"
      }
    }, initials(fullName(pB)))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13
      }
    }, fullName(pA), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ink-4)",
        fontWeight: 400
      }
    }, "vs"), " ", fullName(pB)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 3
      }
    }, /*#__PURE__*/React.createElement(ScoreBadge, {
      score: pair.score
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        flexShrink: 0
      }
    }, !isOpen && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-sm",
      style: {
        color: "var(--ink-3)"
      },
      onClick: e => {
        e.stopPropagation();
        onDismiss(pair);
      }
    }, lang === "es" ? "Son distintos" : "Different"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-sm btn-primary",
      onClick: e => {
        e.stopPropagation();
        setMergingPair(pair);
      }
    }, "\u270E ", lang === "es" ? "Elegir datos" : "Choose data")), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ink-4)",
        fontSize: 12
      }
    }, isOpen ? "▲" : "▼"))), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--line)",
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "90px 1fr 1fr",
        gap: 10,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "av-circle",
      style: {
        background: pA.color,
        flexShrink: 0
      }
    }, initials(fullName(pA))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14
      }
    }, fullName(pA)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "var(--ink-4)",
        fontFamily: "var(--font-mono)"
      }
    }, "ID ", pA.id))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "av-circle",
      style: {
        background: pB.color,
        flexShrink: 0
      }
    }, initials(fullName(pB))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14
      }
    }, fullName(pB)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "var(--ink-4)",
        fontFamily: "var(--font-mono)"
      }
    }, "ID ", pB.id)))), /*#__PURE__*/React.createElement(DupField, {
      label: lang === "es" ? "Nombre" : "Name",
      a: fullName(pA),
      b: fullName(pB)
    }), /*#__PURE__*/React.createElement(DupField, {
      label: lang === "es" ? "Cargo" : "Role",
      a: t.roles[pA.role] || pA.roleOther || pA.role,
      b: t.roles[pB.role] || pB.roleOther || pB.role
    }), /*#__PURE__*/React.createElement(DupField, {
      label: "Email",
      a: pA.email,
      b: pB.email
    }), /*#__PURE__*/React.createElement(DupField, {
      label: lang === "es" ? "Teléfono" : "Phone",
      a: pA.phone,
      b: pB.phone
    }), /*#__PURE__*/React.createElement(DupField, {
      label: lang === "es" ? "Ciudad" : "City",
      a: pA.city,
      b: pB.city
    }), /*#__PURE__*/React.createElement(DupField, {
      label: lang === "es" ? "País" : "Country",
      a: pA.country,
      b: pB.country
    }), /*#__PURE__*/React.createElement(DupField, {
      label: lang === "es" ? "Cumpleaños" : "Birthday",
      a: pA.birthday,
      b: pB.birthday
    }), /*#__PURE__*/React.createElement(DupField, {
      label: lang === "es" ? "Ú. contacto" : "Last contact",
      a: pA.lastContact,
      b: pB.lastContact
    }), /*#__PURE__*/React.createElement(DupField, {
      label: "Tags",
      a: (pA.tags || []).join(", "),
      b: (pB.tags || []).join(", ")
    }), /*#__PURE__*/React.createElement(DupField, {
      label: lang === "es" ? "Entidades" : "Entities",
      a: (pA.entities || []).map(le => {
        const e = entityById[le.id];
        return e ? e.name : le.id;
      }).join(", "),
      b: (pB.entities || []).map(le => {
        const e = entityById[le.id];
        return e ? e.name : le.id;
      }).join(", ")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        padding: "10px 14px",
        background: "var(--bg-soft)",
        borderRadius: 8,
        fontSize: 12,
        color: "var(--ink-3)",
        marginBottom: 14
      }
    }, lang === "es" ? "Fusionar combina los datos (prefiere campos no vacíos), une etiquetas, vínculos y comentarios, y elimina el registro duplicado." : "Merge combines data (non-empty fields preferred), joins tags, links and comments, and removes the duplicate record."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: () => {
        onDismiss(pair);
        setExpanded(null);
      }
    }, "\uD83D\uDC65 ", lang === "es" ? "Son personas distintas" : "Different people"), /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: () => {
        onMerge(pair.idA, pair.idB);
        setExpanded(null);
      }
    }, "\uD83D\uDD00 ", lang === "es" ? "Fusionar (auto)" : "Auto-merge"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: () => setMergingPair(pair)
    }, "\u270E ", lang === "es" ? "Elegir datos →" : "Choose data →"))));
  }), active.length > visP && /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: {
      alignSelf: "center",
      marginTop: 4
    },
    onClick: () => setVisP(v => v + 40)
  }, es ? `Ver más (${active.length - visP} restantes)` : `Show more (${active.length - visP} left)`)), dismissed.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".06em",
      color: "var(--ink-4)",
      marginBottom: 8
    }
  }, lang === "es" ? "Revisados — personas distintas" : "Reviewed — different people", " (", dismissed.length, ")"), dismissed.map(pair => {
    const pA = personaById[pair.idA];
    const pB = personaById[pair.idB];
    if (!pA || !pB) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: pair.idA + pair.idB,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 14px",
        background: "var(--bg-soft)",
        borderRadius: 8,
        marginBottom: 6,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--good)"
      }
    }, "\u2713"), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: "var(--ink-3)"
      }
    }, fullName(pA), " \xB7 ", fullName(pB)), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-sm btn-ghost",
      onClick: () => onUndismiss(pair)
    }, lang === "es" ? "Deshacer" : "Undo"));
  }))), dupTab === "entidades" && showManualEnt && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "16px 20px",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      marginBottom: 4
    }
  }, es ? "Marcar dos medios/entidades como duplicados" : "Mark two entities as duplicates"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)",
      marginBottom: 12
    }
  }, es ? "Busca y elige los dos medios que son el mismo. Aparecerán abajo para revisarlos y fusionarlos." : "Search and pick the two entities that are the same."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, [{
    q: qEA,
    setQ: setQEA,
    pick: manEA,
    setPick: setManEA
  }, {
    q: qEB,
    setQ: setQEB,
    pick: manEB,
    setPick: setManEB
  }].map((col, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci
  }, col.pick ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 10px",
      border: "2px solid var(--accent)",
      borderRadius: 8,
      background: "var(--accent-50)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\uD83C\uDFE2"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13
    }
  }, col.pick.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-4)"
    }
  }, col.pick.city || col.pick.email || col.pick.id)), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: () => {
      col.setPick(null);
      col.setQ("");
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: col.q,
    onChange: e => col.setQ(e.target.value),
    placeholder: es ? "Nombre del medio, ciudad, código…" : "Entity name, city, code…",
    style: {
      width: "100%",
      padding: "8px 10px",
      border: "1px solid var(--line)",
      borderRadius: 8,
      fontFamily: "inherit",
      fontSize: 13
    }
  }), col.q.trim().length >= 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      border: "1px solid var(--line)",
      borderRadius: 8,
      overflow: "hidden",
      maxHeight: 220,
      overflowY: "auto"
    }
  }, searchE(col.q).length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      fontSize: 12,
      color: "var(--ink-4)"
    }
  }, es ? "Sin resultados" : "No results"), searchE(col.q).map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    className: "hover-row",
    style: {
      padding: "7px 10px",
      cursor: "pointer",
      display: "flex",
      gap: 8,
      alignItems: "center"
    },
    onClick: () => {
      col.setPick(e);
      col.setQ("");
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\uD83C\uDFE2"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 12.5,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, e.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-4)"
    }
  }, e.city || e.email || "—"))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => {
      setManEA(null);
      setManEB(null);
      setQEA("");
      setQEB("");
      setShowManualEnt(false);
    }
  }, t.common.cancel), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    disabled: !manEA || !manEB || manEA && manEB && manEA.id === manEB.id,
    style: {
      opacity: !manEA || !manEB || manEA && manEB && manEA.id === manEB.id ? 0.5 : 1
    },
    onClick: () => {
      onCreateManualEntity && onCreateManualEntity(manEA.id, manEB.id);
      setManEA(null);
      setManEB(null);
      setQEA("");
      setQEB("");
    }
  }, "\uD83D\uDD17 ", es ? "Marcar como duplicado" : "Mark as duplicate")), manEA && manEB && manEA.id === manEB.id && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 12,
      color: "var(--bad)"
    }
  }, es ? "Elige dos medios distintos." : "Pick two different entities.")), dupTab === "entidades" && entActive.length === 0 && !showManualEnt && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "40px 24px",
      textAlign: "center",
      color: "var(--ink-3)",
      fontSize: 13
    }
  }, es ? "No hay medios / entidades duplicados detectados." : "No duplicate media / entities detected."), dupTab === "entidades" && entityPairs.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      marginBottom: 4
    }
  }, es ? "Medios / entidades duplicados" : "Duplicate media / entities"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)",
      marginBottom: 12
    }
  }, entActive.length, " ", es ? "pares pendientes de revisión" : "pairs pending review"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, entActive.slice(0, visE).map(pair => {
    const eA = entityById[pair.idA];
    const eB = entityById[pair.idB];
    if (!eA || !eB) return null;
    const ekey = "ent-" + pair.idA + pair.idB;
    const isOpen = expanded === ekey;
    const typeLabel = e => t.types && t.types[e.type] || e.type || "—";
    return /*#__PURE__*/React.createElement("div", {
      key: pair.idA + pair.idB,
      className: "card",
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 16px",
        cursor: "pointer",
        flexWrap: "wrap"
      },
      onClick: () => toggle(ekey)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 200
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 13
      }
    }, eA.name, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ink-4)",
        fontWeight: 400
      }
    }, "vs"), " ", eB.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-3)",
        marginTop: 3
      }
    }, [typeLabel(eA), eA.city, eA.email, eA.phone].filter(Boolean).join(" · ") || "—", "  ·  ", [typeLabel(eB), eB.city, eB.email, eB.phone].filter(Boolean).join(" · ") || "—")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexShrink: 0,
        alignItems: "center"
      }
    }, !isOpen && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-sm",
      onClick: e => {
        e.stopPropagation();
        onDismissEntity && onDismissEntity(pair);
      }
    }, es ? "Son distintos" : "Different"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-sm btn-primary",
      onClick: e => {
        e.stopPropagation();
        setMergingEntPair(pair);
      }
    }, "\u270E ", es ? "Elegir datos" : "Choose data")), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ink-4)",
        fontSize: 12
      }
    }, isOpen ? "▲" : "▼"))), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--line)",
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "90px 1fr 1fr",
        gap: 10,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 13.5
      }
    }, eA.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "var(--ink-4)",
        fontFamily: "var(--font-mono)"
      }
    }, "ID ", eA.id)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 13.5
      }
    }, eB.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "var(--ink-4)",
        fontFamily: "var(--font-mono)"
      }
    }, "ID ", eB.id))), /*#__PURE__*/React.createElement(DupField, {
      label: es ? "Nombre" : "Name",
      a: eA.name,
      b: eB.name
    }), /*#__PURE__*/React.createElement(DupField, {
      label: es ? "Tipo" : "Type",
      a: typeLabel(eA),
      b: typeLabel(eB)
    }), /*#__PURE__*/React.createElement(DupField, {
      label: "Email",
      a: eA.email,
      b: eB.email
    }), /*#__PURE__*/React.createElement(DupField, {
      label: es ? "Teléfono" : "Phone",
      a: eA.phone,
      b: eB.phone
    }), /*#__PURE__*/React.createElement(DupField, {
      label: es ? "Ciudad" : "City",
      a: eA.city,
      b: eB.city
    }), /*#__PURE__*/React.createElement(DupField, {
      label: es ? "Estado" : "State",
      a: eA.state,
      b: eB.state
    }), /*#__PURE__*/React.createElement(DupField, {
      label: es ? "País" : "Country",
      a: eA.country,
      b: eB.country
    }), /*#__PURE__*/React.createElement(DupField, {
      label: "Web",
      a: eA.website,
      b: eB.website
    }), /*#__PURE__*/React.createElement(DupField, {
      label: es ? "Dirección" : "Address",
      a: eA.address,
      b: eB.address
    }), /*#__PURE__*/React.createElement(DupField, {
      label: "Tags",
      a: (eA.tags || []).join(", "),
      b: (eB.tags || []).join(", ")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        padding: "10px 14px",
        background: "var(--bg-soft)",
        borderRadius: 8,
        fontSize: 12,
        color: "var(--ink-3)",
        marginBottom: 14
      }
    }, es ? "Fusionar combina los datos (prefiere lo no vacío), une etiquetas y contactos vinculados, y elimina el duplicado." : "Merge combines data, joins tags & linked contacts, and removes the duplicate."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: () => {
        onDismissEntity && onDismissEntity(pair);
        setExpanded(null);
      }
    }, "\uD83C\uDFE2 ", es ? "Son medios distintos" : "Different"), /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: () => {
        onMergeEntity && onMergeEntity(pair.idA, pair.idB);
        setExpanded(null);
      }
    }, "\uD83D\uDD00 ", es ? "Fusionar (auto)" : "Auto-merge"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: () => {
        setMergingEntPair(pair);
        setExpanded(null);
      }
    }, "\u270E ", es ? "Elegir datos →" : "Choose data →"))));
  }), entActive.length > visE && /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: {
      alignSelf: "center",
      marginTop: 4
    },
    onClick: () => setVisE(v => v + 40)
  }, es ? `Ver más (${entActive.length - visE} restantes)` : `Show more`)), entityPairs.filter(p => p.dismissed).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".06em",
      color: "var(--ink-4)",
      marginBottom: 8
    }
  }, es ? "Revisados — medios distintos" : "Reviewed — different", " (", entityPairs.filter(p => p.dismissed).length, ")"), entityPairs.filter(p => p.dismissed).map(pair => {
    const eA = entityById[pair.idA];
    const eB = entityById[pair.idB];
    if (!eA || !eB) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: pair.idA + pair.idB,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 14px",
        background: "var(--bg-soft)",
        borderRadius: 8,
        marginBottom: 6,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--good)"
      }
    }, "\u2713"), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: "var(--ink-3)"
      }
    }, eA.name, " \xB7 ", eB.name), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-sm btn-ghost",
      onClick: () => onUndismissEntity && onUndismissEntity(pair)
    }, es ? "Deshacer" : "Undo"));
  }))), mergingPair && (() => {
    const pA = personaById[mergingPair.idA];
    const pB = personaById[mergingPair.idB];
    if (!pA || !pB) {
      setMergingPair(null);
      return null;
    }
    return /*#__PURE__*/React.createElement(MergeEditor, {
      pA: pA,
      pB: pB,
      data: data,
      onConfirm: (keepId, dropId, mergedData) => {
        onMergeWithData(keepId, dropId, mergedData);
        setMergingPair(null);
        setExpanded(null);
      },
      onCancel: () => setMergingPair(null),
      t: t,
      lang: lang
    });
  })(), mergingEntPair && (() => {
    const eA = entityById[mergingEntPair.idA];
    const eB = entityById[mergingEntPair.idB];
    if (!eA || !eB) {
      setMergingEntPair(null);
      return null;
    }
    return /*#__PURE__*/React.createElement(EntityMergeEditor, {
      eA: eA,
      eB: eB,
      onConfirm: (keepId, dropId, mergedData) => {
        (onMergeEntityWithData || onMergeEntity)(keepId, dropId, mergedData);
        setMergingEntPair(null);
        setExpanded(null);
      },
      onCancel: () => setMergingEntPair(null),
      t: t,
      lang: lang
    });
  })());
};
window.findDuplicatePairs = findDuplicatePairs;
window.DuplicateReviewModal = DuplicateReviewModal;
window.DuplicatesPage = DuplicatesPage;

;/* ===== interactions.jsx ===== */
// PROMEZA CRM — Interactions timeline + Tasks

const INTERACTION_TYPES = [{
  id: "llamada",
  label: "Llamada",
  icon: "phone",
  color: "#2F6BFF"
}, {
  id: "email",
  label: "Email",
  icon: "mail",
  color: "#0E7C66"
}, {
  id: "whatsapp",
  label: "WhatsApp",
  icon: "phone",
  color: "#25D366"
}, {
  id: "visita",
  label: "Visita",
  icon: "pin",
  color: "#B45309"
}, {
  id: "reunion",
  label: "Reunión",
  icon: "users",
  color: "#7C3AED"
}, {
  id: "otro",
  label: "Otro",
  icon: "more",
  color: "#64748b"
}];
const RESULT_OPTS = [{
  id: "",
  label: "—",
  color: "var(--ink-3)"
}, {
  id: "positivo",
  label: "Positivo",
  color: "#16a34a"
}, {
  id: "neutro",
  label: "Neutro",
  color: "#d97706"
}, {
  id: "negativo",
  label: "Negativo",
  color: "#dc2626"
}];
const InteractionsTab = ({
  personId,
  interactions,
  onAdd,
  onDelete,
  lang
}) => {
  const [showForm, setShowForm] = React.useState(false);
  const [type, setType] = React.useState("llamada");
  const [date, setDate] = React.useState(new Date().toISOString().slice(0, 10));
  const [notes, setNotes] = React.useState("");
  const [result, setResult] = React.useState("");
  const items = (interactions || []).slice().sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  const doAdd = () => {
    if (!notes.trim()) return;
    onAdd({
      id: "i" + Date.now(),
      type,
      date,
      notes: notes.trim(),
      result
    });
    setNotes("");
    setResult("");
    setShowForm(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", null, lang === "es" ? "Historial de interacciones" : "Interaction history", /*#__PURE__*/React.createElement("span", {
    className: "muted mono",
    style: {
      fontSize: 11,
      marginLeft: 8
    }
  }, items.length)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary",
    onClick: () => setShowForm(v => !v)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", lang === "es" ? "Registrar" : "Log")), showForm && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      background: "var(--bg-soft)",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginBottom: 12
    }
  }, INTERACTION_TYPES.map(tp => /*#__PURE__*/React.createElement("button", {
    key: tp.id,
    onClick: () => setType(tp.id),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      padding: "5px 12px",
      borderRadius: 20,
      border: "1.5px solid",
      borderColor: type === tp.id ? tp.color : "var(--line)",
      background: type === tp.id ? tp.color + "18" : "transparent",
      color: type === tp.id ? tp.color : "var(--ink-2)",
      fontFamily: "inherit",
      fontSize: 12.5,
      fontWeight: 500,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: tp.icon,
    size: 13
  }), " ", tp.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11
    }
  }, lang === "es" ? "Fecha" : "Date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: date,
    onChange: e => setDate(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11
    }
  }, lang === "es" ? "Resultado" : "Result"), /*#__PURE__*/React.createElement("select", {
    value: result,
    onChange: e => setResult(e.target.value)
  }, RESULT_OPTS.map(r => /*#__PURE__*/React.createElement("option", {
    key: r.id,
    value: r.id
  }, r.label))))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11
    }
  }, lang === "es" ? "Notas" : "Notes"), /*#__PURE__*/React.createElement("textarea", {
    value: notes,
    onChange: e => setNotes(e.target.value),
    placeholder: lang === "es" ? "¿Qué se habló? ¿Cómo respondió?" : "What was discussed? How did they respond?",
    style: {
      minHeight: 72,
      resize: "vertical"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setShowForm(false)
  }, lang === "es" ? "Cancelar" : "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary",
    disabled: !notes.trim(),
    onClick: doAdd
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", lang === "es" ? "Guardar" : "Save"))), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, items.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "24px 0"
    }
  }, lang === "es" ? "Sin interacciones registradas" : "No interactions logged yet"), /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, items.map((item, idx) => {
    const tp = INTERACTION_TYPES.find(t => t.id === item.type) || INTERACTION_TYPES[5];
    const res = RESULT_OPTS.find(r => r.id === item.result);
    return /*#__PURE__*/React.createElement("div", {
      key: item.id || idx,
      className: "comment"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        background: tp.color + "18",
        border: "1.5px solid " + tp.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        color: tp.color
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: tp.icon,
      size: 14
    })), /*#__PURE__*/React.createElement("div", {
      className: "body",
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "head",
      style: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 13,
        color: tp.color
      }
    }, tp.label), res && res.id && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        padding: "1px 8px",
        borderRadius: 10,
        background: res.color + "20",
        color: res.color
      }
    }, res.label)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "when"
    }, fmtDate(item.date, lang)), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-sm btn-ghost",
      style: {
        padding: "1px 6px",
        color: "var(--ink-4)"
      },
      onClick: () => {
        if (confirm(lang === "es" ? "¿Eliminar esta interacción?" : "Delete this interaction?")) {
          onDelete(item.id);
        }
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      size: 13
    })))), /*#__PURE__*/React.createElement("div", {
      className: "text",
      style: {
        whiteSpace: "pre-line",
        marginTop: 4
      }
    }, item.notes)));
  }))));
};
const TasksTab = ({
  personId,
  tasks,
  onAddTask,
  onToggleTask,
  onDeleteTask,
  lang,
  users,
  currentUser,
  hasDuplicate,
  go,
  onResolveDuplicate,
  dupTab
}) => {
  const [text, setText] = React.useState("");
  const [due, setDue] = React.useState("");
  const [assignedTo, setAssignedTo] = React.useState(currentUser || "");
  const items = tasks || [];
  const today = new Date().toISOString().slice(0, 10);
  const pending = items.filter(t => !t.done).sort((a, b) => {
    const da = a.due || "9999-12-31",
      db = b.due || "9999-12-31";
    return da < db ? -1 : da > db ? 1 : 0;
  });
  const done = items.filter(t => t.done);
  const isOverdue = task => task.due && !task.done && task.due < today;
  const userLabel = email => {
    const u = (users || []).find(x => x.email === email);
    return u ? u.name.split(" ")[0] : (email || "").split("@")[0];
  };
  const doAdd = () => {
    if (!text.trim()) return;
    onAddTask({
      id: "t" + Date.now(),
      text: text.trim(),
      due,
      done: false,
      createdAt: today,
      assignedTo: assignedTo || null
    });
    setText("");
    setDue("");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, lang === "es" ? "Tareas y seguimiento" : "Tasks & follow-up", pending.length + (hasDuplicate ? 1 : 0) > 0 && /*#__PURE__*/React.createElement("span", {
    className: "badge",
    style: {
      background: pending.some(isOverdue) ? "#ef4444" : "var(--accent)",
      color: "#fff",
      marginLeft: 8
    }
  }, pending.length + (hasDuplicate ? 1 : 0))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderBottom: "1px solid var(--line)",
      background: "var(--bg-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11
    }
  }, lang === "es" ? "Nueva tarea" : "New task"), /*#__PURE__*/React.createElement("input", {
    value: text,
    onChange: e => setText(e.target.value),
    onKeyDown: e => e.key === "Enter" && doAdd(),
    placeholder: lang === "es" ? "Ej: Llamar para hacer seguimiento…" : "E.g. Call for follow-up…"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0,
      width: 130
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11
    }
  }, lang === "es" ? "Fecha límite" : "Due date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: due,
    onChange: e => setDue(e.target.value)
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      flexShrink: 0
    },
    disabled: !text.trim(),
    onClick: doAdd
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }))), (users || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: "8px 0 0"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11
    }
  }, lang === "es" ? "Asignado a" : "Assigned to"), /*#__PURE__*/React.createElement("select", {
    value: assignedTo,
    onChange: e => setAssignedTo(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, lang === "es" ? "— Sin asignar —" : "— Unassigned —"), (users || []).map(u => /*#__PURE__*/React.createElement("option", {
    key: u.email,
    value: u.email
  }, u.name))))), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, items.length === 0 && !hasDuplicate && /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "24px 0"
    }
  }, lang === "es" ? "Sin tareas asignadas" : "No tasks assigned"), hasDuplicate && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      padding: "10px 12px",
      marginBottom: 8,
      borderRadius: 8,
      background: "#fff7ed",
      border: "1px solid #fed7aa"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: false,
    title: lang === "es" ? "Marcar como resuelto" : "Mark as resolved",
    onChange: () => onResolveDuplicate && onResolveDuplicate(true),
    style: {
      marginTop: 3,
      cursor: "pointer",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: "#9a3412"
    }
  }, lang === "es" ? "Revisar posible duplicado" : "Review possible duplicate"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "#b45309",
      marginTop: 2
    }
  }, lang === "es" ? "Comparte correo o teléfono con otro registro. Al fusionarlo o marcarlo como resuelto, esta tarea desaparece." : "Shares email/phone with another record.")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      flexShrink: 0
    },
    onClick: () => go && go({
      name: "duplicates",
      q: personId,
      tab: dupTab || "personas"
    })
  }, lang === "es" ? "Ver" : "View")), pending.map(task => /*#__PURE__*/React.createElement("div", {
    key: task.id,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      padding: "10px 0",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: false,
    onChange: () => onToggleTask(task.id),
    style: {
      marginTop: 3,
      cursor: "pointer",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 500,
      color: isOverdue(task) ? "var(--bad)" : "var(--ink-1)"
    }
  }, task.text), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      marginTop: 3,
      flexWrap: "wrap"
    }
  }, task.due && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: isOverdue(task) ? "var(--bad)" : "var(--ink-3)",
      fontWeight: isOverdue(task) ? 600 : 400
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 11
  }), " ", fmtDate(task.due, lang), isOverdue(task) && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 4
    }
  }, lang === "es" ? "¡Vencida!" : "Overdue!")), task.assignedTo && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      padding: "1px 7px",
      borderRadius: 10,
      background: "var(--accent-50)",
      color: "var(--accent)",
      fontWeight: 500
    }
  }, userLabel(task.assignedTo)))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      padding: "1px 6px",
      color: "var(--ink-4)",
      flexShrink: 0
    },
    onClick: () => onDeleteTask(task.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 13
  })))), done.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: ".05em",
      color: "var(--ink-4)",
      marginBottom: 8
    }
  }, lang === "es" ? "Completadas" : "Completed", " (", done.length, ")"), done.map(task => /*#__PURE__*/React.createElement("div", {
    key: task.id,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      padding: "8px 0",
      borderBottom: "1px solid var(--line)",
      opacity: 0.55
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: true,
    onChange: () => onToggleTask(task.id),
    style: {
      marginTop: 3,
      cursor: "pointer",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textDecoration: "line-through",
      fontSize: 13.5,
      color: "var(--ink-3)"
    }
  }, task.text), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      padding: "1px 6px",
      color: "var(--ink-4)",
      flexShrink: 0
    },
    onClick: () => onDeleteTask(task.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 13
  })))))));
};
window.InteractionsTab = InteractionsTab;
window.TasksTab = TasksTab;

;/* ===== tasks.jsx ===== */
// PROMEZA CRM — Global tasks view

// ─── Batch Task Modal ───
const BatchTaskModal = ({
  t,
  lang,
  data,
  onAddTask,
  users,
  currentUser,
  onClose
}) => {
  const [bRole, setBRole] = React.useState("all");
  const [bStage, setBStage] = React.useState("all");
  const [bCity, setBCity] = React.useState("");
  const [bState, setBState] = React.useState("");
  const [bTag, setBTag] = React.useState("");
  const [bText, setBText] = React.useState("");
  const [bDue, setBDue] = React.useState("");
  const [bAssignee, setBAssignee] = React.useState(currentUser || "");
  const [done, setDone] = React.useState(false);
  const es = lang === "es";
  const stages = window.PIPELINE_STAGES || [];
  const stageOf = p => p.stage || (p.status === "inactivo" ? "inactivo" : "conocido");
  const hasFilter = bRole !== "all" || bStage !== "all" || bCity || bState || bTag;
  const matching = React.useMemo(() => {
    if (!hasFilter) return [];
    return data.personas.filter(p => {
      if (bRole !== "all" && p.role !== bRole) return false;
      if (bStage !== "all" && stageOf(p) !== bStage) return false;
      if (bCity && !(p.city || "").toLowerCase().includes(bCity.toLowerCase())) return false;
      if (bState) {
        const s = bState.toLowerCase();
        const allStates = [p.state, ...(p.extraAddresses || []).map(a => a.state)];
        if (!allStates.some(st => (st || "").toLowerCase().includes(s))) return false;
      }
      if (bTag && !(p.tags || []).some(tg => tg.toLowerCase().includes(bTag.toLowerCase()))) return false;
      return true;
    });
  }, [bRole, bStage, bCity, bState, bTag, data.personas, hasFilter]);
  const assign = () => {
    if (!bText.trim() || matching.length === 0) return;
    const today = new Date().toISOString().slice(0, 10);
    matching.forEach(p => {
      onAddTask(p.id, {
        id: "t" + Date.now() + Math.random().toString(36).slice(2, 6),
        text: bText.trim(),
        due: bDue,
        done: false,
        createdAt: today,
        assignedTo: bAssignee || null
      });
    });
    setDone(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-veil",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      width: "min(580px,100%)"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, es ? "Asignación masiva de tareas" : "Batch task assignment"), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "32px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      marginBottom: 12
    }
  }, "\u2705"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, es ? `Tarea asignada a ${matching.length} personas` : `Task assigned to ${matching.length} people`), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      marginTop: 20
    },
    onClick: onClose
  }, es ? "Cerrar" : "Close")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, es ? "Paso 1 — Filtra el grupo destinatario" : "Step 1 — Filter the target group"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, es ? "Cargo" : "Role"), /*#__PURE__*/React.createElement("select", {
    value: bRole,
    onChange: e => setBRole(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, es ? "Todos los cargos" : "All roles"), Object.keys(t.roles).map(k => /*#__PURE__*/React.createElement("option", {
    key: k,
    value: k
  }, t.roles[k])))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, es ? "Etapa" : "Stage"), /*#__PURE__*/React.createElement("select", {
    value: bStage,
    onChange: e => setBStage(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, es ? "Todas las etapas" : "All stages"), stages.map(s => /*#__PURE__*/React.createElement("option", {
    key: s.id,
    value: s.id
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, es ? "Ciudad" : "City"), /*#__PURE__*/React.createElement("input", {
    value: bCity,
    onChange: e => setBCity(e.target.value),
    placeholder: "Miami, Bogot\xE1\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, es ? "Estado / Provincia" : "State / Province"), /*#__PURE__*/React.createElement("input", {
    value: bState,
    onChange: e => setBState(e.target.value),
    placeholder: "FL, CA, CDMX\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0,
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement("label", null, es ? "Etiqueta" : "Tag"), /*#__PURE__*/React.createElement("input", {
    value: bTag,
    onChange: e => setBTag(e.target.value),
    placeholder: es ? "vip, liderazgo, jóvenes…" : "vip, leadership, youth…"
  }))), !hasFilter ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px",
      borderRadius: 8,
      background: "var(--bg-soft)",
      border: "1px solid var(--line)",
      fontSize: 12.5,
      color: "var(--ink-3)",
      textAlign: "center"
    }
  }, es ? "Aplica al menos un filtro para seleccionar el grupo" : "Apply at least one filter to select a group") : matching.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px",
      borderRadius: 8,
      background: "var(--bg-soft)",
      border: "1px solid var(--line)",
      fontSize: 12.5,
      color: "var(--ink-4)",
      textAlign: "center"
    }
  }, es ? "Sin resultados para estos filtros" : "No results for these filters") : /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 8,
      border: "1px solid #bbf7d0",
      background: "#f0fdf4",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 12px",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: "#166534"
    }
  }, matching.length, " ", es ? "personas seleccionadas" : "people selected"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: -4
    }
  }, matching.slice(0, 6).map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    title: p.first + " " + p.last,
    className: "av-circle",
    style: {
      width: 24,
      height: 24,
      fontSize: 9,
      background: p.color,
      marginLeft: -6,
      border: "2px solid #f0fdf4"
    }
  }, initials(p.first + " " + p.last))), matching.length > 6 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: "#166534",
      color: "#fff",
      fontSize: 9,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: -6,
      border: "2px solid #f0fdf4"
    }
  }, "+", matching.length - 6))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap",
      padding: "0 12px 8px"
    }
  }, matching.slice(0, 8).map(p => /*#__PURE__*/React.createElement("span", {
    key: p.id,
    style: {
      fontSize: 11,
      background: "#dcfce7",
      color: "#166534",
      padding: "1px 7px",
      borderRadius: 10,
      fontWeight: 500
    }
  }, p.first, " ", p.last)), matching.length > 8 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "#166534"
    }
  }, "+", matching.length - 8, " ", es ? "más" : "more"))), hasFilter && matching.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".06em",
      borderTop: "1px solid var(--line)",
      paddingTop: 12
    }
  }, es ? "Paso 2 — Define la tarea" : "Step 2 — Define the task"), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, es ? "Descripción de la tarea" : "Task description", " *"), /*#__PURE__*/React.createElement("input", {
    value: bText,
    onChange: e => setBText(e.target.value),
    placeholder: es ? "¿Qué hay que hacer?" : "What needs to be done?",
    autoFocus: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, es ? "Fecha límite" : "Due date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: bDue,
    onChange: e => setBDue(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, es ? "Asignado a" : "Assigned to"), /*#__PURE__*/React.createElement("select", {
    value: bAssignee,
    onChange: e => setBAssignee(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, es ? "Sin asignar" : "Unassigned"), (users || []).map(u => /*#__PURE__*/React.createElement("option", {
    key: u.email,
    value: u.email
  }, u.name)))))))), !done && /*#__PURE__*/React.createElement("div", {
    className: "modal-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onClose
  }, es ? "Cancelar" : "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    disabled: !bText.trim() || matching.length === 0 || !hasFilter,
    onClick: assign
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", es ? `Asignar a ${matching.length} persona${matching.length !== 1 ? "s" : ""}` : `Assign to ${matching.length} person${matching.length !== 1 ? "s" : ""}`))));
};

// ─── Global tasks view ───
const GlobalTasksView = ({
  t,
  lang,
  data,
  go,
  tasks,
  onAddTask,
  onToggleTask,
  onDeleteTask,
  users,
  currentUser,
  dupCount = 0,
  dupPairs = [],
  entityDupPairs = []
}) => {
  const [filterAssignee, setFilterAssignee] = React.useState("all");
  const [filterStatus, setFilterStatus] = React.useState("pending");
  const [filterPersona, setFilterPersona] = React.useState("all");
  const [filterState, setFilterState] = React.useState("");
  const [filterZip, setFilterZip] = React.useState("");
  const [showForm, setShowForm] = React.useState(false);
  const [showBatch, setShowBatch] = React.useState(false);
  const [form, setForm] = React.useState({
    personaId: "",
    text: "",
    due: "",
    assignedTo: currentUser || ""
  });
  const today = new Date().toISOString().slice(0, 10);

  // Flatten all tasks with personaId
  const allTasks = React.useMemo(() => {
    const out = [];
    for (const [personaId, tlist] of Object.entries(tasks || {})) {
      for (const task of tlist || []) {
        out.push({
          ...task,
          personaId
        });
      }
    }
    return out;
  }, [tasks]);
  const isOverdue = task => task.due && !task.done && task.due < today;
  const filtered = allTasks.filter(task => {
    if (filterStatus === "pending" && task.done) return false;
    if (filterStatus === "done" && !task.done) return false;
    if (filterStatus === "overdue" && !isOverdue(task)) return false;
    if (filterAssignee !== "all" && task.assignedTo !== filterAssignee) return false;
    if (filterPersona !== "all" && task.personaId !== filterPersona) return false;
    if (filterState || filterZip) {
      const persona = data.personas.find(p => p.id === task.personaId);
      if (!persona) return false;
      const allAddrs = [{
        state: persona.state,
        zip: persona.zip
      }, ...(persona.extraAddresses || []).map(a => ({
        state: a.state,
        zip: a.zip
      }))];
      if (filterState) {
        const s = filterState.toLowerCase();
        if (!allAddrs.some(a => (a.state || "").toLowerCase().includes(s))) return false;
      }
      if (filterZip) {
        if (!allAddrs.some(a => (a.zip || "").toLowerCase().includes(filterZip.toLowerCase()))) return false;
      }
    }
    return true;
  }).sort((a, b) => {
    if (!a.done && b.done) return -1;
    if (a.done && !b.done) return 1;
    const da = a.due || "9999-12-31",
      db = b.due || "9999-12-31";
    return da < db ? -1 : da > db ? 1 : 0;
  });

  // Virtual "Revisar duplicado" tasks — one per pending duplicate pair (the ones
  // generated in the Duplicados section). Not stored; injected so they show here too.
  const DUP_SHOWN_CAP = 500;
  const dupTasks = React.useMemo(() => {
    if (filterStatus === "done" || filterAssignee !== "all" || filterPersona !== "all") return [];
    const pById = Object.create(null);
    (data.personas || []).forEach(p => {
      pById[p.id] = p;
    });
    const eById = Object.create(null);
    (data.entities || []).forEach(e => {
      eById[e.id] = e;
    });
    const out = [];
    for (const pair of dupPairs || []) {
      if (pair.dismissed) continue;
      const a = pById[pair.idA],
        b = pById[pair.idB];
      if (!a || !b) continue;
      const na = ((a.first || "") + " " + (a.last || "")).trim(),
        nb = ((b.first || "") + " " + (b.last || "")).trim();
      out.push({
        id: "dup-" + pair.idA + pair.idB,
        personaId: pair.idA,
        done: false,
        _isDup: true,
        _label: na || pair.idA,
        _goRoute: {
          name: "person",
          id: pair.idA
        },
        text: "Revisar posible duplicado: " + (na || pair.idA) + " ↔ " + (nb || pair.idB)
      });
      if (out.length >= DUP_SHOWN_CAP) break;
    }
    for (const pair of entityDupPairs || []) {
      if (pair.dismissed || out.length >= DUP_SHOWN_CAP) continue;
      const a = eById[pair.idA],
        b = eById[pair.idB];
      if (!a || !b) continue;
      out.push({
        id: "dup-" + pair.idA + pair.idB,
        personaId: pair.idA,
        done: false,
        _isDup: true,
        _isEnt: true,
        _label: a.name,
        _goRoute: {
          name: "entity",
          id: pair.idA
        },
        text: "Revisar posible duplicado (medio): " + a.name + " ↔ " + b.name
      });
    }
    return out;
  }, [dupPairs, entityDupPairs, data.personas, data.entities, filterStatus, filterAssignee, filterPersona]);
  const displayed = [...dupTasks, ...filtered];
  const pendingCount = allTasks.filter(t => !t.done).length;
  const overdueCount = allTasks.filter(isOverdue).length;
  const userLabel = email => {
    const u = (users || []).find(x => x.email === email);
    return u ? u.name.split(" ")[0] : (email || "").split("@")[0];
  };
  const personaName = id => {
    const p = data.personas.find(x => x.id === id);
    return p ? p.first + " " + p.last : "?";
  };
  const doAddTask = () => {
    if (!form.personaId || !form.text.trim()) return;
    onAddTask(form.personaId, {
      id: "t" + Date.now(),
      text: form.text.trim(),
      due: form.due,
      done: false,
      createdAt: today,
      assignedTo: form.assignedTo || null
    });
    setForm({
      personaId: form.personaId,
      text: "",
      due: "",
      assignedTo: currentUser || ""
    });
    setShowForm(false);
  };

  // Personas that have at least one task
  const personasWithTasks = [...new Set(allTasks.map(t => t.personaId))].map(id => data.personas.find(p => p.id === id)).filter(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860,
      margin: "0 auto",
      padding: "0 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 700
    }
  }, lang === "es" ? "Tareas" : "Tasks"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-3)",
      marginTop: 2
    }
  }, pendingCount, " ", lang === "es" ? "pendientes" : "pending", overdueCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      color: "var(--bad)",
      fontWeight: 600
    }
  }, "\xB7 ", overdueCount, " ", lang === "es" ? "vencidas" : "overdue"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setShowBatch(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users"
  }), " ", lang === "es" ? "Asignar en lote" : "Batch assign"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: () => setShowForm(v => !v)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", lang === "es" ? "Nueva tarea" : "New task"))), dupCount > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 16px",
      marginBottom: 14,
      background: "#faf5ff",
      border: "1.5px solid #e9d5ff",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      background: "#ede9fe",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 15,
    style: {
      color: "#7c3aed"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13.5,
      color: "#7c3aed"
    }
  }, "Se ", dupCount === 1 ? "encontró" : "encontraron", " ", dupCount, " posible", dupCount !== 1 ? "s" : "", " duplicado", dupCount !== 1 ? "s" : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)"
    }
  }, lang === "es" ? "Revisa y fusiona los registros repetidos." : "Review and merge duplicate records.")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      background: "#7c3aed",
      color: "#fff",
      borderColor: "#7c3aed",
      flexShrink: 0
    },
    onClick: () => go({
      name: "duplicates"
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 12
  }), " ", lang === "es" ? "Revisar duplicados →" : "Review duplicates →")), showBatch && /*#__PURE__*/React.createElement(BatchTaskModal, {
    t: t,
    lang: lang,
    data: data,
    onAddTask: onAddTask,
    users: users,
    currentUser: currentUser,
    onClose: () => setShowBatch(false)
  }), showForm && /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h3", null, lang === "es" ? "Nueva tarea" : "New task"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      background: "var(--bg-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11
    }
  }, lang === "es" ? "Contacto" : "Contact", " *"), /*#__PURE__*/React.createElement("select", {
    value: form.personaId,
    onChange: e => setForm(f => ({
      ...f,
      personaId: e.target.value
    }))
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, lang === "es" ? "— Selecciona —" : "— Select —"), data.personas.map(p => /*#__PURE__*/React.createElement("option", {
    key: p.id,
    value: p.id
  }, p.first, " ", p.last)))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11
    }
  }, lang === "es" ? "Asignado a" : "Assigned to"), /*#__PURE__*/React.createElement("select", {
    value: form.assignedTo,
    onChange: e => setForm(f => ({
      ...f,
      assignedTo: e.target.value
    }))
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, lang === "es" ? "— Sin asignar —" : "— Unassigned —"), (users || []).map(u => /*#__PURE__*/React.createElement("option", {
    key: u.email,
    value: u.email
  }, u.name))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 10,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11
    }
  }, lang === "es" ? "Descripción" : "Description", " *"), /*#__PURE__*/React.createElement("input", {
    value: form.text,
    onChange: e => setForm(f => ({
      ...f,
      text: e.target.value
    })),
    onKeyDown: e => e.key === "Enter" && doAddTask(),
    placeholder: lang === "es" ? "¿Qué hay que hacer?" : "What needs to be done?"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0,
      width: 140
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11
    }
  }, lang === "es" ? "Fecha límite" : "Due date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: form.due,
    onChange: e => setForm(f => ({
      ...f,
      due: e.target.value
    }))
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: "flex-end",
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setShowForm(false)
  }, lang === "es" ? "Cancelar" : "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary",
    disabled: !form.personaId || !form.text.trim(),
    onClick: doAddTask
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", lang === "es" ? "Guardar" : "Save")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 14,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      background: "var(--bg-soft)",
      borderRadius: 8,
      padding: 3
    }
  }, [{
    id: "pending",
    label: lang === "es" ? "Pendientes" : "Pending"
  }, {
    id: "done",
    label: lang === "es" ? "Completadas" : "Done"
  }, {
    id: "overdue",
    label: lang === "es" ? "Vencidas" : "Overdue"
  }, {
    id: "all",
    label: lang === "es" ? "Todas" : "All"
  }].map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.id,
    onClick: () => setFilterStatus(opt.id),
    style: {
      padding: "4px 10px",
      borderRadius: 6,
      border: "none",
      cursor: "pointer",
      fontSize: 12,
      fontWeight: 500,
      fontFamily: "inherit",
      background: filterStatus === opt.id ? "var(--bg)" : "transparent",
      color: filterStatus === opt.id ? "var(--ink-1)" : "var(--ink-3)",
      boxShadow: filterStatus === opt.id ? "0 1px 3px rgba(0,0,0,.1)" : "none"
    }
  }, opt.label))), /*#__PURE__*/React.createElement("select", {
    value: filterAssignee,
    onChange: e => setFilterAssignee(e.target.value),
    style: {
      fontSize: 12.5,
      padding: "4px 8px",
      borderRadius: 6,
      border: "1px solid var(--line)",
      background: "var(--bg)",
      color: "var(--ink-1)",
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, lang === "es" ? "Todos los responsables" : "All assignees"), /*#__PURE__*/React.createElement("option", {
    value: ""
  }, lang === "es" ? "Sin asignar" : "Unassigned"), (users || []).map(u => /*#__PURE__*/React.createElement("option", {
    key: u.email,
    value: u.email
  }, u.name))), personasWithTasks.length > 0 && /*#__PURE__*/React.createElement("select", {
    value: filterPersona,
    onChange: e => setFilterPersona(e.target.value),
    style: {
      fontSize: 12.5,
      padding: "4px 8px",
      borderRadius: 6,
      border: "1px solid var(--line)",
      background: "var(--bg)",
      color: "var(--ink-1)",
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, lang === "es" ? "Todos los contactos" : "All contacts"), personasWithTasks.map(p => /*#__PURE__*/React.createElement("option", {
    key: p.id,
    value: p.id
  }, p.first, " ", p.last))), /*#__PURE__*/React.createElement("input", {
    value: filterState,
    onChange: e => setFilterState(e.target.value),
    placeholder: lang === "es" ? "Estado / Provincia…" : "State / Province…",
    style: {
      fontSize: 12.5,
      padding: "4px 8px",
      borderRadius: 6,
      border: "1px solid var(--line)",
      background: "var(--bg)",
      color: "var(--ink-1)",
      fontFamily: "inherit",
      width: 150
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: filterZip,
    onChange: e => setFilterZip(e.target.value),
    placeholder: "ZIP\u2026",
    style: {
      fontSize: 12.5,
      padding: "4px 8px",
      borderRadius: 6,
      border: "1px solid var(--line)",
      background: "var(--bg)",
      color: "var(--ink-1)",
      fontFamily: "inherit",
      width: 90
    }
  }), (filterState || filterZip) && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    onClick: () => {
      setFilterState("");
      setFilterZip("");
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 12
  }))), /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-body",
    style: {
      padding: 0
    }
  }, displayed.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "28px 0"
    }
  }, lang === "es" ? "Sin tareas para mostrar" : "No tasks to show"), displayed.map(task => {
    const overdue = isOverdue(task);
    return /*#__PURE__*/React.createElement("div", {
      key: task.id + task.personaId,
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        padding: "12px 16px",
        borderBottom: "1px solid var(--line)",
        opacity: task.done ? 0.55 : 1,
        background: task._isDup ? "#fff7ed" : overdue ? "rgba(239,68,68,.04)" : undefined
      }
    }, task._isDup ? /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: 1,
        fontSize: 16,
        flexShrink: 0
      },
      title: lang === "es" ? "Duplicado por revisar" : "Duplicate to review"
    }, "\u26A0") : /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: !!task.done,
      onChange: () => onToggleTask(task.personaId, task.id),
      style: {
        marginTop: 3,
        cursor: "pointer",
        width: 16,
        height: 16,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 500,
        textDecoration: task.done ? "line-through" : "none",
        color: overdue ? "var(--bad)" : "var(--ink-1)"
      }
    }, task.text.startsWith("Revisar posible duplicado") && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        marginRight: 6,
        background: "#ede9fe",
        color: "#7c3aed",
        borderRadius: 5,
        padding: "1px 7px",
        fontSize: 11,
        fontWeight: 700,
        verticalAlign: "middle"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 11
    }), " DUP"), task.text), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center",
        marginTop: 5,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      style: {
        padding: "1px 6px",
        fontSize: 11.5,
        color: "var(--accent)",
        fontWeight: 600,
        height: "auto"
      },
      onClick: () => go(task._isDup ? task._goRoute : {
        name: "person",
        id: task.personaId
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: task._isEnt ? "building" : "users",
      size: 11
    }), " ", task._isDup ? task._label : personaName(task.personaId)), task.due && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: overdue ? "var(--bad)" : "var(--ink-3)",
        fontWeight: overdue ? 600 : 400
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 11
    }), " ", fmtDate(task.due, lang), overdue && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 4
      }
    }, lang === "es" ? "¡Vencida!" : "Overdue!")), !task._isDup && task.assignedTo && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        padding: "1px 7px",
        borderRadius: 10,
        background: "var(--accent-50)",
        color: "var(--accent)",
        fontWeight: 500
      }
    }, userLabel(task.assignedTo)), !task._isDup && !task.assignedTo && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "var(--ink-4)"
      }
    }, lang === "es" ? "Sin asignar" : "Unassigned"), task.text.startsWith("Revisar posible duplicado") && /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      style: {
        padding: "1px 8px",
        fontSize: 11,
        color: "#7c3aed",
        borderColor: "#ede9fe",
        background: "#ede9fe",
        height: "auto"
      },
      onClick: () => go(task._isDup && task._goRoute ? {
        name: "duplicates",
        q: task._goRoute.id,
        tab: task._isEnt ? "entidades" : "personas"
      } : {
        name: "duplicates"
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 11
    }), " ", lang === "es" ? "Revisar duplicados →" : "Review duplicates →"))), !task._isDup && /*#__PURE__*/React.createElement("button", {
      className: "btn btn-sm btn-ghost",
      style: {
        padding: "1px 6px",
        color: "var(--ink-4)",
        flexShrink: 0
      },
      onClick: () => onDeleteTask(task.personaId, task.id)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      size: 13
    })));
  }))));
};
window.GlobalTasksView = GlobalTasksView;

// ─── My Tasks — personal dashboard ───

const MyTasksView = ({
  t,
  lang,
  data,
  go,
  tasks,
  onToggleTask,
  onDeleteTask,
  currentUser,
  users
}) => {
  const today = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().slice(0, 10);
  const in7 = new Date();
  in7.setDate(in7.getDate() + 7);
  const in7str = in7.toISOString().slice(0, 10);
  const myTasks = React.useMemo(() => {
    const out = [];
    for (const [personaId, tlist] of Object.entries(tasks || {})) {
      for (const task of tlist || []) {
        if (task.assignedTo === currentUser) out.push({
          ...task,
          personaId
        });
      }
    }
    return out;
  }, [tasks, currentUser]);
  const personaName = id => {
    const p = data.personas.find(x => x.id === id);
    return p ? p.first + " " + p.last : "?";
  };
  const groups = [{
    id: "overdue",
    label: lang === "es" ? "Vencidas" : "Overdue",
    color: "var(--bad)",
    tasks: myTasks.filter(t => !t.done && t.due && t.due < today)
  }, {
    id: "today",
    label: lang === "es" ? "Hoy" : "Today",
    color: "#f59e0b",
    tasks: myTasks.filter(t => !t.done && t.due === today)
  }, {
    id: "week",
    label: lang === "es" ? "Esta semana" : "This week",
    color: "var(--accent)",
    tasks: myTasks.filter(t => !t.done && t.due && t.due > today && t.due <= in7str)
  }, {
    id: "later",
    label: lang === "es" ? "Más adelante" : "Later",
    color: "var(--ink-3)",
    tasks: myTasks.filter(t => !t.done && (!t.due || t.due > in7str))
  }, {
    id: "done",
    label: lang === "es" ? "Completadas" : "Done",
    color: "var(--good)",
    tasks: myTasks.filter(t => t.done)
  }];
  const pending = myTasks.filter(t => !t.done).length;
  const overdue = myTasks.filter(t => !t.done && t.due && t.due < today).length;
  const userLabel = email => {
    const u = (users || []).find(x => x.email === email);
    return u ? u.name : (email || "").split("@")[0];
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, lang === "es" ? "Mis tareas" : "My tasks"), /*#__PURE__*/React.createElement("div", {
    className: "page-sub"
  }, userLabel(currentUser), " \xB7 ", pending, " ", lang === "es" ? "pendientes" : "pending", overdue > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--bad)",
      fontWeight: 600,
      marginLeft: 8
    }
  }, "\xB7 ", overdue, " ", lang === "es" ? "vencidas" : "overdue")))), myTasks.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "60px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      marginBottom: 8
    }
  }, "\u2705"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, lang === "es" ? "Sin tareas asignadas" : "No tasks assigned to you"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      marginTop: 4
    }
  }, lang === "es" ? "Las tareas que te asignen aparecerán aquí" : "Tasks assigned to you will appear here")), groups.map(group => group.tasks.length === 0 ? null : /*#__PURE__*/React.createElement("div", {
    key: group.id,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: group.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: group.color,
      textTransform: "uppercase",
      letterSpacing: ".06em"
    }
  }, group.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: group.color,
      background: group.color + "18",
      borderRadius: 10,
      padding: "1px 7px"
    }
  }, group.tasks.length)), /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-body",
    style: {
      padding: 0
    }
  }, group.tasks.map(task => {
    const isOverdue = task.due && !task.done && task.due < today;
    const persona = data.personas.find(p => p.id === task.personaId);
    return /*#__PURE__*/React.createElement("div", {
      key: task.id,
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        padding: "13px 16px",
        borderBottom: "1px solid var(--line)",
        opacity: task.done ? 0.5 : 1,
        background: isOverdue ? "rgba(220,38,38,.03)" : "transparent"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: !!task.done,
      onChange: () => onToggleTask(task.personaId, task.id),
      style: {
        marginTop: 3,
        cursor: "pointer",
        width: 16,
        height: 16,
        flexShrink: 0,
        accentColor: "var(--accent)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        textDecoration: task.done ? "line-through" : "none",
        color: isOverdue ? "var(--bad)" : "var(--ink)",
        marginBottom: 4
      }
    }, task.text), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, persona && /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      style: {
        height: "auto",
        padding: "1px 7px",
        fontSize: 11.5,
        color: "var(--accent)",
        fontWeight: 600
      },
      onClick: () => go({
        name: "person",
        id: task.personaId
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 11
    }), " ", persona.first, " ", persona.last, persona.city && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ink-3)",
        fontWeight: 400
      }
    }, " \xB7 ", persona.city)), task.due && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: isOverdue ? "var(--bad)" : "var(--ink-3)",
        fontWeight: isOverdue ? 600 : 400,
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 11
    }), " ", fmtDate(task.due, lang)))), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-sm btn-ghost",
      style: {
        color: "var(--ink-4)",
        flexShrink: 0
      },
      onClick: () => onDeleteTask(task.personaId, task.id)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      size: 13
    })));
  }))))));
};
window.MyTasksView = MyTasksView;

;/* ===== pipeline.jsx ===== */
// PROMEZA CRM — Pipeline / Directorio de Contactos

const PipelineView = ({
  t,
  lang,
  data,
  go,
  onUpdatePerson
}) => {
  const [tab, setTab] = React.useState("activos");
  const [search, setSearch] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("all"); // all | personas | entidades
  const today = new Date().toISOString().slice(0, 10);
  const stages = window.PIPELINE_STAGES || [];
  const stageOf = p => p.stage || (p.status === "inactivo" ? "inhabilitado" : "activo");
  const getUID = window.getUID || (id => id);
  const norm = s => (s || "").toLowerCase();
  const matchesSearch = (name, extra = "") => {
    const q = search.trim().toLowerCase();
    return !q || norm(name).includes(q) || norm(extra).includes(q);
  };

  // ─── Counts for tabs ───
  const activePersonas = data.personas.filter(p => p.status !== "inactivo");
  const activeEntities = data.entities.filter(e => (e.status || "activo") !== "inactivo");
  const inactivePersonas = data.personas.filter(p => p.status === "inactivo");
  const inactiveEntities = data.entities.filter(e => (e.status || "activo") === "inactivo");
  const reviewPersonas = data.personas.filter(p => window.hasContactIssue ? window.hasContactIssue(p) : false);
  const TABS = [{
    id: "activos",
    label: lang === "en" ? "Active" : "Activos",
    count: activePersonas.length + activeEntities.length
  }, {
    id: "inhabilitados",
    label: lang === "en" ? "Disabled" : "Inhabilitados",
    count: inactivePersonas.length + inactiveEntities.length
  }, {
    id: "revision",
    label: lang === "en" ? "Under Review" : "Por Revisión",
    count: reviewPersonas.length
  }];

  // ─── Filtered sets ───
  const filteredActivePersonas = activePersonas.filter(p => (typeFilter === "all" || typeFilter === "personas") && matchesSearch(fullName(p), p.role + " " + p.city));
  const filteredActiveEntities = activeEntities.filter(e => (typeFilter === "all" || typeFilter === "entidades") && matchesSearch(e.name, e.city + " " + e.type));
  const filteredInactivePersonas = inactivePersonas.filter(p => (typeFilter === "all" || typeFilter === "personas") && matchesSearch(fullName(p), p.city));
  const filteredInactiveEntities = inactiveEntities.filter(e => (typeFilter === "all" || typeFilter === "entidades") && matchesSearch(e.name, e.city));
  const filteredReview = reviewPersonas.filter(p => matchesSearch(fullName(p), p.email + " " + p.phone));

  // Render at most this many cards at once. Rendering thousands of cards (one per
  // contact/entity) froze the page on every navigation. "Ver más" loads more.
  const [showCount, setShowCount] = React.useState(60);
  const RENDER_CAP = showCount;
  // Precompute personas-per-entity ONCE (was O(n²): filtering all personas per card).
  const personaCountByEntity = React.useMemo(() => {
    const m = {};
    (data.personas || []).forEach(p => (p.entities || []).forEach(le => {
      m[le.id] = (m[le.id] || 0) + 1;
    }));
    return m;
  }, [data.personas]);
  const CapNote = ({
    total
  }) => total > RENDER_CAP ? /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1",
      padding: "12px 2px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setShowCount(c => c + 200)
  }, "Ver m\xE1s \u2014 mostrando ", RENDER_CAP.toLocaleString(), " de ", total.toLocaleString())) : null;

  // ─── Card components ───
  const PersonaCard = ({
    p
  }) => {
    const sid = stageOf(p);
    const stage = stages.find(s => s.id === sid);
    const isOverdue = p.nextAction && p.nextAction < today;
    const mainEntity = p.entities && p.entities.length > 0 ? data.entities.find(e => e.id === p.entities[0].id) : null;
    const daysUntil = p.nextAction ? Math.round((new Date(p.nextAction) - new Date(today)) / 86400000) : null;
    const pendingTasks = (data.tasks?.[p.id] || []).filter(tk => !tk.done).length;
    const overdueTasks = (data.tasks?.[p.id] || []).filter(tk => !tk.done && tk.due && tk.due < today).length;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: isOverdue ? "#fff8f8" : "var(--bg)",
        borderRadius: 12,
        border: "1px solid " + (isOverdue ? "#fecaca" : "var(--line)"),
        borderLeft: "4px solid " + (stage ? stage.color : "var(--line)"),
        padding: "13px 14px 11px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        boxShadow: "0 1px 3px rgba(0,0,0,.05)",
        transition: "box-shadow .15s, transform .15s",
        cursor: "pointer"
      },
      onMouseEnter: e => {
        e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,.09)";
        e.currentTarget.style.transform = "translateY(-1px)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.boxShadow = "";
        e.currentTarget.style.transform = "";
      },
      onClick: () => go({
        name: "person",
        id: p.id
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "av-circle",
      style: {
        background: p.color,
        width: 36,
        height: 36,
        fontSize: 12,
        flexShrink: 0
      }
    }, initials(fullName(p))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 13,
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, fullName(p)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        color: "var(--accent)",
        background: "var(--accent-50)",
        padding: "1px 5px",
        borderRadius: 4,
        flexShrink: 0,
        fontWeight: 700
      }
    }, "#", getUID(p.id))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-3)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, t.roles[p.role] || p.role, mainEntity ? " · " + mainEntity.name : "", p.city ? " · " + p.city : ""))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: stage ? stage.color : "var(--ink-4)",
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("select", {
      value: sid,
      onChange: e => {
        e.stopPropagation();
        const next = e.target.value;
        onUpdatePerson(p.id, {
          stage: next,
          status: next === "inactivo" ? "inactivo" : "activo"
        });
      },
      onClick: e => e.stopPropagation(),
      style: {
        flex: 1,
        border: "none",
        background: "transparent",
        fontFamily: "inherit",
        fontSize: 12,
        fontWeight: 600,
        color: stage ? stage.color : "var(--ink-3)",
        cursor: "pointer",
        outline: "none",
        padding: 0
      }
    }, stages.map(s => /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, window.stageLabel ? window.stageLabel(s.id, lang) : s.label))), pendingTasks > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        fontWeight: 700,
        color: overdueTasks > 0 ? "var(--bad)" : "var(--ink-3)",
        background: overdueTasks > 0 ? "#fee2e2" : "var(--bg-soft)",
        padding: "1px 6px",
        borderRadius: 5
      }
    }, overdueTasks > 0 ? "⚠" : "✓", " ", pendingTasks, " ", lang === "en" ? "task" + (pendingTasks !== 1 ? "s" : "") : "tarea" + (pendingTasks !== 1 ? "s" : ""))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, p.nextAction ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: "3px 7px",
        borderRadius: 6,
        background: isOverdue ? "#fee2e2" : "var(--accent-50)",
        color: isOverdue ? "var(--bad)" : "var(--accent)",
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 11
    }), fmtDate(p.nextAction, lang), isOverdue && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10
      }
    }, " \xB7 ", Math.abs(daysUntil), "d vencida")) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "var(--ink-4)",
        fontStyle: "italic"
      }
    }, "Sin pr\xF3x. acci\xF3n"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        color: "var(--ink-4)"
      }
    }, p.lastContact ? fmtDate(p.lastContact, lang) : "—")));
  };
  const EntityCard = ({
    e
  }) => {
    const personaCount = personaCountByEntity[e.id] || 0;
    const types = window.PROJECT_TYPES || [];
    const daysSince = e.lastContact ? Math.round((new Date(today) - new Date(e.lastContact)) / 86400000) : null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--bg)",
        borderRadius: 12,
        border: "1px solid var(--line)",
        borderLeft: "4px solid #0ea5e9",
        padding: "13px 14px 11px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        boxShadow: "0 1px 3px rgba(0,0,0,.05)",
        transition: "box-shadow .15s, transform .15s",
        cursor: "pointer"
      },
      onMouseEnter: ev => {
        ev.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,.09)";
        ev.currentTarget.style.transform = "translateY(-1px)";
      },
      onMouseLeave: ev => {
        ev.currentTarget.style.boxShadow = "";
        ev.currentTarget.style.transform = "";
      },
      onClick: () => go({
        name: "entity",
        id: e.id
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 36,
        borderRadius: 9,
        background: "#0ea5e915",
        display: "grid",
        placeItems: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "building",
      size: 16,
      style: {
        color: "#0ea5e9"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 13,
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, e.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        color: "#0ea5e9",
        background: "#f0f9ff",
        padding: "1px 5px",
        borderRadius: 4,
        flexShrink: 0,
        fontWeight: 700
      }
    }, "#", getUID(e.id))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-3)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, (t.types || {})[e.type] || e.type, e.city ? " · " + e.city : "", e.country ? ", " + e.country : ""))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, e.size && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "var(--ink-3)",
        background: "var(--bg-soft)",
        padding: "2px 7px",
        borderRadius: 5
      }
    }, e.size.toLocaleString(), " miembros"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "#0ea5e9",
        background: "#f0f9ff",
        padding: "2px 7px",
        borderRadius: 5,
        fontWeight: 600
      }
    }, personaCount, " contacto", personaCount !== 1 ? "s" : ""), daysSince !== null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        color: "var(--ink-4)",
        marginLeft: "auto"
      }
    }, daysSince === 0 ? "hoy" : daysSince + "d atrás")));
  };
  const ReviewCard = ({
    p
  }) => {
    const email = (p.email || "").trim();
    const phone = (p.phone || "").replace(/\D/g, "");
    const issues = [];
    if (!email && phone.length < 7) issues.push("Sin email ni teléfono");else {
      if (email && !email.includes("@")) issues.push("Email con formato incorrecto");
      if (p.emailStatus === "bad") issues.push("Email no funciona");
      if (p.phoneStatus === "bad") issues.push("Teléfono no funciona");
      if (!phone || phone.length < 7) issues.push("Sin teléfono");
      if (!email) issues.push("Sin email");
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--bg)",
        borderRadius: 12,
        border: "1px solid #fde68a",
        borderLeft: "4px solid #f59e0b",
        padding: "13px 14px 11px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        boxShadow: "0 1px 3px rgba(0,0,0,.05)",
        transition: "box-shadow .15s, transform .15s",
        cursor: "pointer"
      },
      onMouseEnter: e => {
        e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,.09)";
        e.currentTarget.style.transform = "translateY(-1px)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.boxShadow = "";
        e.currentTarget.style.transform = "";
      },
      onClick: () => go({
        name: "person",
        id: p.id
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "av-circle",
      style: {
        background: p.color,
        width: 36,
        height: 36,
        fontSize: 12,
        flexShrink: 0
      }
    }, initials(fullName(p))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 13,
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", null, fullName(p)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        color: "#f59e0b",
        background: "#fffbeb",
        padding: "1px 5px",
        borderRadius: 4,
        flexShrink: 0,
        fontWeight: 700
      }
    }, "#", getUID(p.id))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-3)"
      }
    }, t.roles[p.role] || p.role, p.city ? " · " + p.city : ""))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 5
      }
    }, issues.map(issue => /*#__PURE__*/React.createElement("span", {
      key: issue,
      style: {
        fontSize: 11.5,
        fontWeight: 600,
        color: "#92400e",
        background: "#fef3c7",
        padding: "2px 8px",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert",
      size: 11
    }), " ", issue))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        justifyContent: "space-between",
        fontSize: 11,
        color: "var(--ink-4)"
      }
    }, /*#__PURE__*/React.createElement("span", null, p.email || "—"), /*#__PURE__*/React.createElement("span", null, p.phone || "—")));
  };
  const SectionHeader = ({
    label,
    count,
    icon
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 10,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 7,
      background: "var(--bg-soft)",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: "var(--ink-2)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--ink-4)",
      background: "var(--bg-soft)",
      padding: "1px 8px",
      borderRadius: 10
    }
  }, count));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, "Directorio"), /*#__PURE__*/React.createElement("div", {
    className: "page-sub"
  }, activePersonas.length, " personas \xB7 ", activeEntities.length, " entidades activas")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--ink-4)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14
  })), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "Buscar por nombre, ciudad\u2026",
    style: {
      paddingLeft: 32,
      width: 220,
      height: 36,
      fontSize: 13,
      borderRadius: 8,
      border: "1px solid var(--line)",
      background: "var(--bg)",
      fontFamily: "inherit",
      color: "var(--ink)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      marginBottom: 16,
      borderBottom: "1px solid var(--line)",
      paddingBottom: 0
    }
  }, TABS.map(tb => /*#__PURE__*/React.createElement("button", {
    key: tb.id,
    onClick: () => setTab(tb.id),
    style: {
      padding: "8px 16px",
      border: "none",
      background: "none",
      fontFamily: "inherit",
      fontSize: 13.5,
      fontWeight: tab === tb.id ? 700 : 500,
      color: tab === tb.id ? "var(--accent)" : "var(--ink-3)",
      borderBottom: tab === tb.id ? "2px solid var(--accent)" : "2px solid transparent",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: -1,
      transition: "color .15s"
    }
  }, tb.label, tb.count > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      background: tab === tb.id ? "var(--accent-50)" : "var(--bg-soft)",
      color: tab === tb.id ? "var(--accent)" : "var(--ink-3)",
      padding: "1px 7px",
      borderRadius: 10
    }
  }, tb.count)))), (tab === "activos" || tab === "inhabilitados") && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 16
    }
  }, [{
    id: "all",
    label: "Todo"
  }, {
    id: "personas",
    label: "Personas"
  }, {
    id: "entidades",
    label: "Entidades"
  }].map(f => /*#__PURE__*/React.createElement("button", {
    key: f.id,
    onClick: () => setTypeFilter(f.id),
    style: {
      padding: "4px 12px",
      borderRadius: 999,
      border: "1.5px solid",
      borderColor: typeFilter === f.id ? "var(--accent)" : "var(--line)",
      background: typeFilter === f.id ? "var(--accent-50)" : "var(--bg)",
      color: typeFilter === f.id ? "var(--accent)" : "var(--ink-3)",
      fontFamily: "inherit",
      fontSize: 12,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, f.label))), tab === "activos" && /*#__PURE__*/React.createElement("div", null, (typeFilter === "all" || typeFilter === "personas") && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    label: "Personas activas",
    count: filteredActivePersonas.length,
    icon: "users"
  }), filteredActivePersonas.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "24px 0",
      fontSize: 12
    }
  }, "Sin resultados") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 10
    }
  }, filteredActivePersonas.slice(0, RENDER_CAP).map(p => /*#__PURE__*/React.createElement(PersonaCard, {
    key: p.id,
    p: p
  })), /*#__PURE__*/React.createElement(CapNote, {
    total: filteredActivePersonas.length
  }))), (typeFilter === "all" || typeFilter === "entidades") && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    label: "Entidades activas",
    count: filteredActiveEntities.length,
    icon: "building"
  }), filteredActiveEntities.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "24px 0",
      fontSize: 12
    }
  }, "Sin resultados") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 10
    }
  }, filteredActiveEntities.slice(0, RENDER_CAP).map(e => /*#__PURE__*/React.createElement(EntityCard, {
    key: e.id,
    e: e
  })), /*#__PURE__*/React.createElement(CapNote, {
    total: filteredActiveEntities.length
  })))), tab === "inhabilitados" && /*#__PURE__*/React.createElement("div", null, (typeFilter === "all" || typeFilter === "personas") && filteredInactivePersonas.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    label: "Personas inhabilitadas",
    count: filteredInactivePersonas.length,
    icon: "users"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 10
    }
  }, filteredInactivePersonas.slice(0, RENDER_CAP).map(p => /*#__PURE__*/React.createElement(PersonaCard, {
    key: p.id,
    p: p
  })), /*#__PURE__*/React.createElement(CapNote, {
    total: filteredInactivePersonas.length
  }))), (typeFilter === "all" || typeFilter === "entidades") && filteredInactiveEntities.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    label: "Entidades inhabilitadas",
    count: filteredInactiveEntities.length,
    icon: "building"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 10
    }
  }, filteredInactiveEntities.slice(0, RENDER_CAP).map(e => /*#__PURE__*/React.createElement(EntityCard, {
    key: e.id,
    e: e
  })), /*#__PURE__*/React.createElement(CapNote, {
    total: filteredInactiveEntities.length
  }))), filteredInactivePersonas.length === 0 && filteredInactiveEntities.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "60px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      marginBottom: 8
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", null, "No hay registros inhabilitados"))), tab === "revision" && /*#__PURE__*/React.createElement("div", null, filteredReview.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "60px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      marginBottom: 8
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", null, "Toda la informaci\xF3n de contacto est\xE1 en orden")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12,
      padding: "10px 14px",
      background: "#fffbeb",
      border: "1px solid #fde68a",
      borderRadius: 10,
      fontSize: 12.5,
      color: "#92400e",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 13
  }), " ", filteredReview.length, " contacto", filteredReview.length !== 1 ? "s" : "", " con informaci\xF3n incompleta o incorrecta. Haz clic en cada uno para corregir."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 10
    }
  }, filteredReview.slice(0, RENDER_CAP).map(p => /*#__PURE__*/React.createElement(ReviewCard, {
    key: p.id,
    p: p
  })), /*#__PURE__*/React.createElement(CapNote, {
    total: filteredReview.length
  })))));
};
window.PipelineView = PipelineView;

;/* ===== projects.jsx ===== */
// PROMEZA CRM — Projects

window.PROJECT_TYPES = [{
  id: "prensa",
  label: "Rueda de prensa",
  color: "#3b82f6",
  emoji: "🎙"
}, {
  id: "pelicula",
  label: "Película / Serie",
  color: "#8b5cf6",
  emoji: "🎬"
}, {
  id: "documental",
  label: "Documental",
  color: "#6366f1",
  emoji: "🎥"
}, {
  id: "concierto",
  label: "Concierto / Show",
  color: "#f59e0b",
  emoji: "🎵"
}, {
  id: "conferencia",
  label: "Conferencia",
  color: "#0ea5e9",
  emoji: "🎤"
}, {
  id: "virtual",
  label: "Evento virtual",
  color: "#14b8a6",
  emoji: "💻"
}, {
  id: "lanzamiento",
  label: "Lanzamiento",
  color: "#ef4444",
  emoji: "🚀"
}, {
  id: "tour",
  label: "Tour / Gira",
  color: "#f97316",
  emoji: "✈"
}, {
  id: "taller",
  label: "Taller / Workshop",
  color: "#84cc16",
  emoji: "📚"
}, {
  id: "otro",
  label: "Otro",
  color: "#94a3b8",
  emoji: "📋"
}];
window.PROJECT_STATUSES = [{
  id: "planificado",
  label: "Planificado",
  color: "#6366f1",
  bg: "#eef2ff"
}, {
  id: "activo",
  label: "En curso",
  color: "#059669",
  bg: "#f0fdf4"
}, {
  id: "completado",
  label: "Completado",
  color: "#0369a1",
  bg: "#f0f9ff"
}, {
  id: "cancelado",
  label: "Cancelado",
  color: "#94a3b8",
  bg: "#f8fafc"
}];
const PROJECT_ROLES = ["Artista principal", "Vocero", "Productor", "Director", "Actor / Actriz", "Presentador", "Invitado especial", "Colaborador", "Organizador", "Miembro del equipo", "Otro"];
const getProjType = id => {
  const types = window.PROJECT_TYPES || [];
  return types.find(t => t.id === id) || types[types.length - 1] || {
    id: "otro",
    label: "Otro",
    color: "#94a3b8",
    emoji: "📋"
  };
};
const getProjStatus = id => {
  const statuses = window.PROJECT_STATUSES || [];
  return statuses.find(s => s.id === id) || statuses[0] || {
    id: "planificado",
    label: "Planificado",
    color: "#6366f1",
    bg: "#eef2ff"
  };
};

// ─── New / Edit Project Form ───
const NewProjectForm = ({
  lang,
  data,
  onClose,
  onSave,
  initialData
}) => {
  const isEdit = !!initialData;
  const [form, setForm] = React.useState({
    name: initialData?.name || "",
    type: initialData?.type || "prensa",
    dateStart: initialData?.dateStart || "",
    dateEnd: initialData?.dateEnd || "",
    status: initialData?.status || "planificado",
    location: initialData?.location || "",
    attendanceCount: initialData?.attendanceCount || "",
    description: initialData?.description || "",
    driveUrl: initialData?.driveUrl || "",
    tags: (initialData?.tags || []).join(", ")
  });
  const set = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));
  const es = lang === "es";
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-veil",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      width: "min(580px,100%)"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, isEdit ? "Editar proyecto" : "Nuevo proyecto"), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Nombre del proyecto *"), /*#__PURE__*/React.createElement("input", {
    value: form.name,
    onChange: e => set("name", e.target.value),
    placeholder: "ej. Rueda de prensa enero 2026",
    autoFocus: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Tipo"), /*#__PURE__*/React.createElement("select", {
    value: form.type,
    onChange: e => set("type", e.target.value)
  }, (window.PROJECT_TYPES || []).map(pt => /*#__PURE__*/React.createElement("option", {
    key: pt.id,
    value: pt.id
  }, pt.emoji, " ", pt.label)))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Estado"), /*#__PURE__*/React.createElement("select", {
    value: form.status,
    onChange: e => set("status", e.target.value)
  }, (window.PROJECT_STATUSES || []).map(ps => /*#__PURE__*/React.createElement("option", {
    key: ps.id,
    value: ps.id
  }, ps.label)))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Fecha inicio"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: form.dateStart,
    onChange: e => set("dateStart", e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Fecha fin"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: form.dateEnd,
    onChange: e => set("dateEnd", e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Lugar / Plataforma"), /*#__PURE__*/React.createElement("input", {
    value: form.location,
    onChange: e => set("location", e.target.value),
    placeholder: "Teatro Nacional, Zoom, YouTube Live\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Asistentes totales"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    value: form.attendanceCount,
    onChange: e => set("attendanceCount", e.target.value),
    placeholder: "0"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Descripci\xF3n / Notas"), /*#__PURE__*/React.createElement("textarea", {
    value: form.description,
    onChange: e => set("description", e.target.value),
    rows: 3,
    placeholder: "Detalles, objetivos, contexto\u2026",
    style: {
      fontFamily: "inherit",
      fontSize: 13,
      resize: "vertical"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Enlace / Drive ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-4)",
      fontWeight: 400
    }
  }, "(carpeta, documento\u2026)")), /*#__PURE__*/React.createElement("input", {
    value: form.driveUrl,
    onChange: e => set("driveUrl", e.target.value),
    placeholder: "https://drive.google.com/\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Etiquetas ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-4)",
      fontWeight: 400
    }
  }, "(separadas por coma)")), /*#__PURE__*/React.createElement("input", {
    value: form.tags,
    onChange: e => set("tags", e.target.value),
    placeholder: "ministerio, internacional\u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onClose
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    disabled: !form.name.trim(),
    onClick: () => {
      onSave({
        ...form,
        attendanceCount: form.attendanceCount ? parseInt(form.attendanceCount) : null,
        tags: form.tags.split(",").map(s => s.trim()).filter(Boolean)
      });
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", isEdit ? "Guardar cambios" : "Crear proyecto"))));
};

// ─── Projects List ───
const ProjectsListView = ({
  lang,
  data,
  go,
  onAddProject
}) => {
  const [search, setSearch] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [showForm, setShowForm] = React.useState(false);
  const projects = data.projects || [];
  const filtered = projects.filter(pr => {
    if (typeFilter !== "all" && pr.type !== typeFilter) return false;
    if (statusFilter !== "all" && pr.status !== statusFilter) return false;
    if (search.trim() && !pr.name.toLowerCase().includes(search.toLowerCase()) && !(pr.description || "").toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });
  const countByType = {};
  (window.PROJECT_TYPES || []).forEach(pt => {
    countByType[pt.id] = projects.filter(pr => pr.type === pt.id).length;
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, "Proyectos"), /*#__PURE__*/React.createElement("div", {
    className: "page-sub"
  }, projects.length, " proyecto", projects.length !== 1 ? "s" : "")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--ink-4)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14
  })), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "Buscar proyecto\u2026",
    style: {
      paddingLeft: 32,
      width: 200,
      height: 36,
      fontSize: 13,
      borderRadius: 8,
      border: "1px solid var(--line)",
      background: "var(--bg)",
      fontFamily: "inherit",
      color: "var(--ink)"
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => setShowForm(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " Nuevo proyecto"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 12,
      flexWrap: "wrap"
    }
  }, [{
    id: "all",
    label: "Todos",
    count: projects.length
  }].concat((window.PROJECT_STATUSES || []).map(ps => ({
    ...ps,
    count: projects.filter(pr => pr.status === ps.id).length
  }))).map(ps => /*#__PURE__*/React.createElement("button", {
    key: ps.id,
    onClick: () => setStatusFilter(ps.id),
    style: {
      padding: "5px 13px",
      borderRadius: 999,
      border: "1.5px solid",
      fontFamily: "inherit",
      fontSize: 12.5,
      fontWeight: 600,
      cursor: "pointer",
      borderColor: statusFilter === ps.id ? ps.color || "var(--accent)" : ps.color ? ps.color + "40" : "var(--line)",
      background: statusFilter === ps.id ? ps.bg || "var(--accent-50)" : "var(--bg)",
      color: statusFilter === ps.id ? ps.color || "var(--accent-700)" : "var(--ink-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800
    }
  }, ps.count), " ", ps.label))), (window.PROJECT_TYPES || []).some(pt => countByType[pt.id] > 0) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setTypeFilter("all"),
    style: {
      padding: "4px 11px",
      borderRadius: 6,
      border: "1px solid",
      borderColor: typeFilter === "all" ? "var(--accent)" : "var(--line)",
      background: typeFilter === "all" ? "var(--accent-50)" : "var(--bg)",
      color: typeFilter === "all" ? "var(--accent)" : "var(--ink-3)",
      fontFamily: "inherit",
      fontSize: 12,
      cursor: "pointer",
      fontWeight: 500
    }
  }, "Todos los tipos"), (window.PROJECT_TYPES || []).filter(pt => countByType[pt.id] > 0).map(pt => /*#__PURE__*/React.createElement("button", {
    key: pt.id,
    onClick: () => setTypeFilter(typeFilter === pt.id ? "all" : pt.id),
    style: {
      padding: "4px 11px",
      borderRadius: 6,
      border: "1px solid",
      borderColor: typeFilter === pt.id ? pt.color : "var(--line)",
      background: typeFilter === pt.id ? pt.color + "18" : "var(--bg)",
      color: typeFilter === pt.id ? pt.color : "var(--ink-2)",
      fontFamily: "inherit",
      fontSize: 12,
      cursor: "pointer",
      fontWeight: 500
    }
  }, pt.emoji, " ", pt.label, " \xB7 ", countByType[pt.id]))), filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "60px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      marginBottom: 8
    }
  }, "\uD83D\uDCC2"), /*#__PURE__*/React.createElement("div", null, projects.length === 0 ? "Aún no hay proyectos. ¡Crea el primero!" : "Sin resultados para esta búsqueda."), projects.length === 0 && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      marginTop: 14
    },
    onClick: () => setShowForm(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " Nuevo proyecto")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: 14
    }
  }, filtered.map(pr => {
    const pt = getProjType(pr.type);
    const ps = getProjStatus(pr.status);
    const memberCount = (pr.members || []).length;
    return /*#__PURE__*/React.createElement("a", {
      key: pr.id,
      href: window.PROMEZA_HASH ? window.PROMEZA_HASH({
        name: "project",
        id: pr.id
      }) : "#",
      onClick: e => {
        if (e.ctrlKey || e.metaKey || e.button === 1) return;
        e.preventDefault();
        go({
          name: "project",
          id: pr.id
        });
      },
      style: {
        display: "block",
        textDecoration: "none",
        color: "inherit",
        background: "var(--bg)",
        borderRadius: 12,
        border: "1px solid var(--line)",
        borderLeft: "4px solid " + pt.color,
        padding: "16px",
        cursor: "pointer",
        boxShadow: "var(--shadow-sm)",
        transition: "box-shadow .15s, transform .15s"
      },
      onMouseEnter: e => {
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
        e.currentTarget.style.transform = "translateY(-2px)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
        e.currentTarget.style.transform = "";
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: pt.color
      }
    }, pt.emoji, " ", pt.label), /*#__PURE__*/React.createElement("span", {
      style: {
        padding: "2px 9px",
        borderRadius: 8,
        fontSize: 11.5,
        fontWeight: 700,
        background: ps.bg,
        color: ps.color
      }
    }, ps.label)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 15,
        marginBottom: 6,
        lineHeight: 1.3
      }
    }, pr.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--ink-3)",
        display: "flex",
        flexDirection: "column",
        gap: 3
      }
    }, (pr.dateStart || pr.dateEnd) && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 11
    }), pr.dateStart ? fmtDate(pr.dateStart, lang) : "", pr.dateStart && pr.dateEnd && pr.dateStart !== pr.dateEnd ? " — " + fmtDate(pr.dateEnd, lang) : ""), pr.location && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "pin",
      size: 11
    }), " ", pr.location)), (pr.tags || []).length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 4,
        flexWrap: "wrap",
        marginTop: 8
      }
    }, pr.tags.map(tg => /*#__PURE__*/React.createElement("span", {
      key: tg,
      className: "tag-chip"
    }, tg))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        paddingTop: 10,
        borderTop: "1px solid var(--line)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, (pr.members || []).slice(0, 5).map((m, i) => {
      const person = data.personas.find(p => p.id === m.personaId);
      return person ? /*#__PURE__*/React.createElement("div", {
        key: m.personaId,
        style: {
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: person.color,
          display: "grid",
          placeItems: "center",
          fontSize: 9,
          fontWeight: 700,
          color: "#fff",
          marginLeft: i > 0 ? -6 : 0,
          border: "2px solid var(--bg)",
          position: "relative",
          zIndex: 5 - i
        }
      }, initials(fullName(person))) : null;
    }), memberCount > 5 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        color: "var(--ink-3)",
        marginLeft: 4
      }
    }, "+", memberCount - 5)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        fontSize: 11.5,
        color: "var(--ink-3)",
        fontWeight: 600
      }
    }, pr.attendanceCount != null && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 11
    }), " ", pr.attendanceCount), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 11
    }), " ", memberCount, " registrados"))));
  })), showForm && /*#__PURE__*/React.createElement(NewProjectForm, {
    lang: lang,
    data: data,
    onClose: () => setShowForm(false),
    onSave: form => {
      onAddProject(form);
      setShowForm(false);
    }
  }));
};

// ─── Project Detail ───
const ProjectDetailView = ({
  id,
  lang,
  data,
  go,
  onUpdateProject,
  onDeleteProject,
  onAddMember,
  onRemoveMember,
  comments,
  onAddComment,
  attachments,
  onAddAttachment,
  onDeleteAttachment
}) => {
  const pr = (data.projects || []).find(p => p.id === id);
  const [tab, setTab] = React.useState("participantes");
  const [showEdit, setShowEdit] = React.useState(false);
  const [addingMember, setAddingMember] = React.useState(false);
  const [memberSearch, setMemberSearch] = React.useState("");
  const [memberPersonaId, setMemberPersonaId] = React.useState("");
  const [memberRole, setMemberRole] = React.useState(PROJECT_ROLES[0]);
  const [showMemberDrop, setShowMemberDrop] = React.useState(false);
  const [commentText, setCommentText] = React.useState("");
  const today = new Date().toISOString().slice(0, 10);
  if (!pr) return /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("div", null, "Proyecto no encontrado"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      marginTop: 10
    },
    onClick: () => go({
      name: "projects"
    })
  }, "\u2190 Volver"));
  const pt = getProjType(pr.type);
  const ps = getProjStatus(pr.status);
  const members = (pr.members || []).map(m => ({
    ...m,
    person: data.personas.find(p => p.id === m.personaId)
  })).filter(m => m.person);
  const availablePersonas = data.personas.filter(p => !(pr.members || []).some(m => m.personaId === p.id));
  const projectComments = comments || [];
  const projectAttachments = attachments || [];
  const filteredAvail = availablePersonas.filter(p => !memberSearch.trim() || (p.first + " " + p.last).toLowerCase().includes(memberSearch.toLowerCase()) || (p.city || "").toLowerCase().includes(memberSearch.toLowerCase()) || (p.role || "").toLowerCase().includes(memberSearch.toLowerCase()));
  const doAddMember = () => {
    if (!memberPersonaId) return;
    onAddMember(pr.id, {
      personaId: memberPersonaId,
      role: memberRole,
      addedAt: today
    });
    setAddingMember(false);
    setMemberSearch("");
    setMemberPersonaId("");
    setMemberRole(PROJECT_ROLES[0]);
  };
  const doPostComment = () => {
    if (!commentText.trim()) return;
    onAddComment && onAddComment(pr.id, commentText.trim());
    setCommentText("");
  };
  const tabs = [{
    id: "participantes",
    label: "Participantes (" + members.length + ")"
  }, {
    id: "archivos",
    label: "Archivos" + (projectAttachments.length > 0 ? " (" + projectAttachments.length + ")" : "")
  }, {
    id: "comentarios",
    label: "Comentarios" + (projectComments.length > 0 ? " (" + projectComments.length + ")" : "")
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "fadeIn .2s ease-out"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => go({
      name: "projects"
    })
  }, "\u2190 Proyectos")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg)",
      border: "1px solid var(--line)",
      borderRadius: 14,
      borderLeft: "5px solid " + pt.color,
      padding: "20px 22px",
      marginBottom: 18,
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 14,
      background: pt.color + "18",
      display: "grid",
      placeItems: "center",
      fontSize: 28,
      flexShrink: 0
    }
  }, pt.emoji), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: pt.color
    }
  }, pt.label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "2px 10px",
      borderRadius: 8,
      fontSize: 12,
      fontWeight: 700,
      background: ps.bg,
      color: ps.color
    }
  }, ps.label)), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: "-.02em",
      lineHeight: 1.2
    }
  }, pr.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      flexWrap: "wrap",
      marginTop: 10,
      fontSize: 12.5
    }
  }, (pr.dateStart || pr.dateEnd) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--ink-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 13
  }), /*#__PURE__*/React.createElement("span", null, pr.dateStart ? fmtDate(pr.dateStart, lang) : "", pr.dateStart && pr.dateEnd && pr.dateStart !== pr.dateEnd ? " — " + fmtDate(pr.dateEnd, lang) : "")), pr.location && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--ink-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 13
  }), " ", /*#__PURE__*/React.createElement("span", null, pr.location)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--accent)",
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 13
  }), " ", /*#__PURE__*/React.createElement("span", null, members.length, " registrados")), pr.attendanceCount != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--good)",
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 13
  }), " ", /*#__PURE__*/React.createElement("span", null, pr.attendanceCount, " asistentes totales")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      flexShrink: 0
    }
  }, pr.driveUrl && /*#__PURE__*/React.createElement("a", {
    className: "btn btn-sm btn-primary",
    href: pr.driveUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    title: lang === "es" ? "Abrir carpeta / Drive" : "Open folder / Drive",
    style: {
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "folder",
    size: 13
  }), " ", lang === "es" ? "Abrir Drive" : "Open Drive"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    title: "Exportar participantes a CSV",
    onClick: () => {
      const rows = (pr.members || []).map(m => {
        const p = data.personas.find(x => x.id === m.personaId);
        if (!p) return null;
        return {
          nombre: p.first,
          apellido: p.last,
          rol: m.role,
          email: p.email || "",
          telefono: p.phone || "",
          ciudad: p.city || "",
          pais: p.country || "",
          addedAt: m.addedAt || ""
        };
      }).filter(Boolean);
      exportCSV(pr.name.replace(/[^a-z0-9]/gi, "_") + "_participantes.csv", [{
        key: "nombre",
        label: "Nombre"
      }, {
        key: "apellido",
        label: "Apellido"
      }, {
        key: "rol",
        label: "Rol"
      }, {
        key: "email",
        label: "Email"
      }, {
        key: "telefono",
        label: "Teléfono"
      }, {
        key: "ciudad",
        label: "Ciudad"
      }, {
        key: "pais",
        label: "País"
      }, {
        key: "addedAt",
        label: "Fecha agregado"
      }], rows);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 13
  }), " Exportar"), /*#__PURE__*/React.createElement("select", {
    value: pr.status,
    onChange: e => onUpdateProject(pr.id, {
      status: e.target.value
    }),
    style: {
      height: 34,
      padding: "0 10px",
      borderRadius: 8,
      border: "1px solid var(--line)",
      background: "var(--bg)",
      fontFamily: "inherit",
      fontSize: 12.5,
      color: ps.color,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, (window.PROJECT_STATUSES || []).map(s => /*#__PURE__*/React.createElement("option", {
    key: s.id,
    value: s.id
  }, s.label))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setShowEdit(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "edit"
  }), " Editar"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      color: "var(--bad)",
      borderColor: "var(--bad)"
    },
    onClick: () => {
      if (confirm("¿Eliminar este proyecto?")) {
        onDeleteProject(pr.id);
        go({
          name: "projects"
        });
      }
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash"
  })))), (pr.tags || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      flexWrap: "wrap",
      marginTop: 12
    }
  }, pr.tags.map(tg => /*#__PURE__*/React.createElement("span", {
    key: tg,
    className: "tag-chip"
  }, tg))), pr.description && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      paddingTop: 14,
      borderTop: "1px solid var(--line)",
      fontSize: 13.5,
      color: "var(--ink-2)",
      lineHeight: 1.65,
      whiteSpace: "pre-wrap"
    }
  }, pr.description)), /*#__PURE__*/React.createElement(Tabs, {
    tabs: tabs,
    active: tab,
    onChange: setTab
  }), tab === "participantes" && /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, "Participantes", !addingMember && availablePersonas.length > 0 && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => setAddingMember(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " Agregar persona")), addingMember && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "flex-end",
      padding: "14px 16px",
      background: "var(--bg-soft)",
      borderBottom: "1px solid var(--line)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0,
      flex: "2 1 220px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11
    }
  }, "Buscar persona"), /*#__PURE__*/React.createElement("input", {
    value: memberSearch,
    onChange: e => {
      setMemberSearch(e.target.value);
      setShowMemberDrop(true);
      setMemberPersonaId("");
    },
    onFocus: () => setShowMemberDrop(true),
    placeholder: "Nombre, ciudad, cargo\u2026",
    style: {
      width: "100%"
    }
  }), showMemberDrop && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 2px)",
      left: 0,
      right: 0,
      background: "var(--bg)",
      border: "1px solid var(--line)",
      borderRadius: 8,
      boxShadow: "0 6px 20px rgba(0,0,0,.12)",
      zIndex: 200,
      maxHeight: 240,
      overflowY: "auto"
    }
  }, filteredAvail.slice(0, 10).map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => {
      setMemberPersonaId(p.id);
      setMemberSearch(fullName(p));
      setShowMemberDrop(false);
    },
    style: {
      padding: "9px 13px",
      cursor: "pointer",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      alignItems: "center",
      gap: 10
    },
    onMouseEnter: ev => ev.currentTarget.style.background = "var(--bg-soft)",
    onMouseLeave: ev => ev.currentTarget.style.background = ""
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: p.color,
      width: 30,
      height: 30,
      fontSize: 11,
      flexShrink: 0
    }
  }, initials(fullName(p))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13
    }
  }, fullName(p)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-3)"
    }
  }, p.role, p.city ? " · " + p.city : "")))), filteredAvail.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px",
      color: "var(--ink-4)",
      fontSize: 13
    }
  }, "Sin resultados"))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0,
      flex: "1 1 160px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11
    }
  }, "Rol en el proyecto"), /*#__PURE__*/React.createElement("select", {
    value: memberRole,
    onChange: e => setMemberRole(e.target.value)
  }, PROJECT_ROLES.map(r => /*#__PURE__*/React.createElement("option", {
    key: r,
    value: r
  }, r)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      paddingBottom: 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary",
    disabled: !memberPersonaId,
    onClick: doAddMember
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " Agregar"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: () => {
      setAddingMember(false);
      setMemberSearch("");
      setMemberPersonaId("");
    }
  }, "Cancelar"))), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, members.length === 0 && !addingMember ? /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "32px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      marginBottom: 8
    }
  }, "\uD83D\uDC65"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-3)"
    }
  }, "A\xFAn no hay participantes. \xA1Agrega el primero!")) : members.map(({
    person: p,
    role: mRole,
    addedAt
  }) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "link-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: p.color,
      width: 38,
      height: 38,
      fontSize: 13,
      flexShrink: 0,
      cursor: "pointer"
    },
    onClick: () => go({
      name: "person",
      id: p.id
    })
  }, initials(fullName(p))), /*#__PURE__*/React.createElement("div", {
    className: "grow",
    style: {
      cursor: "pointer"
    },
    onClick: () => go({
      name: "person",
      id: p.id
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "title",
    style: {
      fontWeight: 700
    }
  }, fullName(p)), /*#__PURE__*/React.createElement("div", {
    className: "row-sub"
  }, p.role !== "otro" ? p.role : p.roleOther || "", p.city ? " · " + p.city : "")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "2px 9px",
      borderRadius: 6,
      background: pt.color + "14",
      color: pt.color,
      fontSize: 11.5,
      fontWeight: 600
    }
  }, mRole), addedAt && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-4)"
    }
  }, fmtDate(addedAt, lang))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      color: "var(--bad)"
    },
    onClick: () => onRemoveMember(pr.id, p.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  })))))), tab === "archivos" && /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, "Archivos y fotos"), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, /*#__PURE__*/React.createElement(AttachmentsTab, {
    attachments: projectAttachments,
    onAdd: onAddAttachment,
    onDelete: onDeleteAttachment,
    lang: lang
  }))), tab === "comentarios" && /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", null, "Comentarios"), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "comment-form",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: commentText,
    onChange: e => setCommentText(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) doPostComment();
    },
    placeholder: "Escribe un comentario\u2026 (Ctrl+Enter para publicar)"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary",
    disabled: !commentText.trim(),
    onClick: doPostComment
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " Publicar"))), projectComments.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "24px 0"
    }
  }, "Sin comentarios a\xFAn.") : projectComments.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "12px 0",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: "var(--accent)",
      width: 32,
      height: 32,
      fontSize: 11,
      flexShrink: 0
    }
  }, (c.author || "?").slice(0, 2).toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink-2)"
    }
  }, c.author), " \xB7 ", fmtDate(c.date, lang)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--ink)",
      lineHeight: 1.55,
      whiteSpace: "pre-wrap"
    }
  }, c.text)))))), showEdit && /*#__PURE__*/React.createElement(NewProjectForm, {
    lang: lang,
    data: data,
    initialData: pr,
    onClose: () => setShowEdit(false),
    onSave: form => {
      onUpdateProject(pr.id, form);
      setShowEdit(false);
    }
  }));
};

// ─── Person projects tab (inside PersonProfile) ───
const PersonProjectsTab = ({
  personId,
  lang,
  data,
  go
}) => {
  const personProjects = (data.projects || []).filter(pr => (pr.members || []).some(m => m.personaId === personId));
  if (personProjects.length === 0) return /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "40px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      marginBottom: 8
    }
  }, "\uD83D\uDCC2"), /*#__PURE__*/React.createElement("div", null, "Esta persona no ha participado en ning\xFAn proyecto a\xFAn."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    style: {
      marginTop: 12
    },
    onClick: () => go({
      name: "projects"
    })
  }, "Ver proyectos \u2192"));
  return /*#__PURE__*/React.createElement("div", {
    className: "section-body",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, personProjects.map(pr => {
    const pt = getProjType(pr.type);
    const ps = getProjStatus(pr.status);
    const member = (pr.members || []).find(m => m.personaId === personId);
    return /*#__PURE__*/React.createElement("a", {
      key: pr.id,
      href: window.PROMEZA_HASH ? window.PROMEZA_HASH({
        name: "project",
        id: pr.id
      }) : "#",
      onClick: e => {
        if (e.ctrlKey || e.metaKey || e.button === 1) return;
        e.preventDefault();
        go({
          name: "project",
          id: pr.id
        });
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 14px",
        borderRadius: 10,
        border: "1px solid var(--line)",
        background: "var(--bg)",
        cursor: "pointer",
        textDecoration: "none",
        color: "inherit",
        borderLeft: "3px solid " + pt.color,
        transition: "box-shadow .12s"
      },
      onMouseEnter: e => e.currentTarget.style.boxShadow = "var(--shadow-sm)",
      onMouseLeave: e => e.currentTarget.style.boxShadow = ""
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 24
      }
    }, pt.emoji), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 13.5
      }
    }, pr.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--ink-3)",
        marginTop: 2,
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: pt.color,
        fontWeight: 600
      }
    }, pt.label), pr.dateStart && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 11
    }), " ", fmtDate(pr.dateStart, lang)))), member && member.role && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: "2px 9px",
        borderRadius: 6,
        background: pt.color + "14",
        color: pt.color,
        fontSize: 12,
        fontWeight: 600,
        whiteSpace: "nowrap"
      }
    }, member.role), /*#__PURE__*/React.createElement("span", {
      style: {
        padding: "2px 8px",
        borderRadius: 6,
        fontSize: 11.5,
        fontWeight: 600,
        background: ps.bg,
        color: ps.color
      }
    }, ps.label));
  }));
};
window.ProjectsListView = ProjectsListView;
window.ProjectDetailView = ProjectDetailView;
window.PersonProjectsTab = PersonProjectsTab;
window.NewProjectForm = NewProjectForm;

;/* ===== attachments.jsx ===== */
// PROMEZA CRM — File Attachments tab

const MAX_FILE_MB = 3;
const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024;
const MIME_ICONS = {
  "application/pdf": "📄",
  "image/png": "🖼️",
  "image/jpeg": "🖼️",
  "image/jpg": "🖼️",
  "image/gif": "🖼️",
  "image/webp": "🖼️",
  "image/heic": "🖼️"
};
const fileIcon = type => MIME_ICONS[type] || "📎";
const fmtBytes = b => {
  if (b < 1024) return b + " B";
  if (b < 1024 * 1024) return (b / 1024).toFixed(1) + " KB";
  return (b / (1024 * 1024)).toFixed(1) + " MB";
};
const AttachmentsTab = ({
  targetId,
  attachments,
  onAdd,
  onDelete,
  lang,
  currentUser
}) => {
  const [dragging, setDragging] = React.useState(false);
  const [error, setError] = React.useState("");
  const [uploading, setUploading] = React.useState(false);
  const inputRef = React.useRef();
  const totalBytes = (attachments || []).reduce((s, a) => s + (a.size || 0), 0);
  const storageWarning = totalBytes > 4 * 1024 * 1024;
  const handleFiles = async files => {
    setError("");
    setUploading(true);
    try {
      const results = [];
      for (const file of Array.from(files)) {
        if (file.size > MAX_FILE_BYTES) {
          setError(lang === "es" ? `"${file.name}" supera el límite de ${MAX_FILE_MB} MB` : `"${file.name}" exceeds the ${MAX_FILE_MB} MB limit`);
          return;
        }
        const data = await new Promise((res, rej) => {
          const reader = new FileReader();
          reader.onload = e => res(e.target.result);
          reader.onerror = rej;
          reader.readAsDataURL(file);
        });
        results.push({
          id: "att" + Date.now() + Math.random().toString(36).slice(2, 6),
          name: file.name,
          type: file.type,
          size: file.size,
          data,
          createdAt: new Date().toISOString().slice(0, 10),
          author: currentUser || "Usuario"
        });
      }
      results.forEach(att => onAdd(att));
    } catch (err) {
      setError(lang === "es" ? "Error al leer el archivo" : "Error reading file");
    } finally {
      setUploading(false);
    }
  };
  const onDrop = e => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
  };
  const doDownload = att => {
    const a = document.createElement("a");
    a.href = att.data;
    a.download = att.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", null, lang === "es" ? "Archivos adjuntos" : "Attachments", /*#__PURE__*/React.createElement("span", {
    className: "muted mono",
    style: {
      fontSize: 11,
      marginLeft: 8
    }
  }, (attachments || []).length)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary",
    onClick: () => inputRef.current && inputRef.current.click()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload"
  }), " ", lang === "es" ? "Adjuntar" : "Attach")), /*#__PURE__*/React.createElement("div", {
    className: "section-body"
  }, storageWarning && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff7ed",
      border: "1px solid #fed7aa",
      borderRadius: 8,
      padding: "8px 12px",
      fontSize: 12,
      color: "#c2410c",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 13
  }), " ", lang === "es" ? `Uso de almacenamiento: ${fmtBytes(totalBytes)}. Cerca del límite de localStorage (~5 MB por dominio).` : `Storage used: ${fmtBytes(totalBytes)}. Near localStorage limit (~5 MB per domain).`), /*#__PURE__*/React.createElement("div", {
    onClick: () => inputRef.current && inputRef.current.click(),
    onDragOver: e => {
      e.preventDefault();
      setDragging(true);
    },
    onDragLeave: () => setDragging(false),
    onDrop: onDrop,
    style: {
      border: "2px dashed " + (dragging ? "var(--accent)" : "var(--line)"),
      borderRadius: 10,
      padding: "20px",
      textAlign: "center",
      cursor: "pointer",
      background: dragging ? "var(--accent-50)" : "var(--bg-soft)",
      marginBottom: 14,
      transition: "all .15s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      marginBottom: 4
    }
  }, "\uD83D\uDCCE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-3)",
      fontWeight: 500
    }
  }, uploading ? lang === "es" ? "Cargando…" : "Loading…" : lang === "es" ? "Arrastra archivos aquí o haz clic para seleccionar" : "Drop files here or click to select"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-4)",
      marginTop: 2
    }
  }, "PDF, im\xE1genes \u2014 m\xE1x. ", MAX_FILE_MB, " MB por archivo"), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "file",
    multiple: true,
    accept: ".pdf,.png,.jpg,.jpeg,.gif,.webp,.heic",
    style: {
      display: "none"
    },
    onChange: e => e.target.files.length && handleFiles(e.target.files)
  })), error && /*#__PURE__*/React.createElement("div", {
    className: "auth-error",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 14
  }), " ", error), (attachments || []).length === 0 && !error && /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, lang === "es" ? "Sin archivos adjuntos" : "No attachments"), (attachments || []).map(att => /*#__PURE__*/React.createElement("div", {
    key: att.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 14px",
      borderRadius: 8,
      border: "1px solid var(--line)",
      marginBottom: 8,
      background: "var(--bg)"
    }
  }, att.type && att.type.startsWith("image/") ? /*#__PURE__*/React.createElement("img", {
    src: att.data,
    alt: att.name,
    style: {
      width: 44,
      height: 44,
      objectFit: "cover",
      borderRadius: 6,
      border: "1px solid var(--line)",
      flexShrink: 0,
      cursor: "pointer"
    },
    onClick: () => window.open(att.data, "_blank")
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 26,
      flexShrink: 0
    }
  }, fileIcon(att.type)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, att.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-3)"
    }
  }, fmtBytes(att.size), " \xB7 ", att.createdAt, " \xB7 ", att.author)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      flexShrink: 0
    },
    title: lang === "es" ? "Descargar" : "Download",
    onClick: () => doDownload(att)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 14
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      color: "var(--bad)",
      flexShrink: 0
    },
    title: lang === "es" ? "Eliminar" : "Delete",
    onClick: () => {
      if (confirm(lang === "es" ? `¿Eliminar "${att.name}"?` : `Delete "${att.name}"?`)) {
        onDelete(att.id);
      }
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 14
  }))))));
};
window.AttachmentsTab = AttachmentsTab;

;/* ===== campaigns.jsx ===== */
// PROMEZA CRM — Email Campaigns

var {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;
const ROLE_OPTIONS = [{
  id: "",
  label: "Todos los cargos"
}, {
  id: "pastor",
  label: "Pastor"
}, {
  id: "lider",
  label: "Líder"
}, {
  id: "adorador",
  label: "Adorador"
}, {
  id: "miembro",
  label: "Miembro"
}, {
  id: "influencer",
  label: "Influencer"
}, {
  id: "otro",
  label: "Otro"
}];

// ─── Helpers ───

const applyFilters = (personas, filters) => {
  return personas.filter(p => {
    if (filters.role && p.role !== filters.role) return false;
    if (filters.stage && (p.stage || "conocido") !== filters.stage) return false;
    if (filters.city && !(p.city || "").toLowerCase().includes(filters.city.toLowerCase())) return false;
    if (filters.tag && !(p.tags || []).some(t => t.toLowerCase().includes(filters.tag.toLowerCase()))) return false;
    if (filters.emailOnly && !p.email) return false;
    return true;
  });
};
const interpolate = (body, persona) => body.replace(/\{\{nombre\}\}/g, persona.first || "").replace(/\{\{apellido\}\}/g, persona.last || "");

// ─── Status Badge ───

const StatusBadge = ({
  status
}) => {
  const isDraft = status === "draft";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "2px 10px",
      borderRadius: 999,
      fontSize: 11.5,
      fontWeight: 600,
      background: isDraft ? "var(--bg-soft)" : "var(--accent-50)",
      color: isDraft ? "var(--ink-3)" : "var(--accent-700)",
      border: "1px solid " + (isDraft ? "var(--line)" : "var(--accent-100)"),
      letterSpacing: "0.02em"
    }
  }, isDraft ? "Borrador" : "Enviada");
};

// ─── Campaign Card ───

const CampaignCard = ({
  campaign,
  lang
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "16px 20px",
      display: "flex",
      alignItems: "flex-start",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 10,
      flexShrink: 0,
      background: "var(--accent-50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, campaign.name), /*#__PURE__*/React.createElement(StatusBadge, {
    status: campaign.status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-3)",
      marginBottom: 8,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, campaign.subject), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      flexWrap: "wrap"
    }
  }, campaign.sentAt && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-4)",
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 12
  }), fmtDate(campaign.sentAt.slice(0, 10), lang)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-4)",
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 12
  }), campaign.recipientCount || 0, " destinatarios"), campaign.status === "sent" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--good)",
      display: "flex",
      alignItems: "center",
      gap: 4,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12
  }), campaign.sentCount || 0, " enviados"))));
};

// ─── Audience Preview ───

const AudiencePreview = ({
  personas,
  filters
}) => {
  const matched = useMemo(() => applyFilters(personas, filters), [personas, filters]);
  const preview = matched.slice(0, 8);
  const withEmail = matched.filter(p => p.email).length;
  const withoutEmail = matched.length - withEmail;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13
    }
  }, "Audiencia"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: matched.length === 0 ? "var(--ink-4)" : "var(--accent-700)",
      background: matched.length === 0 ? "var(--bg-soft)" : "var(--accent-50)",
      border: "1px solid " + (matched.length === 0 ? "var(--line)" : "var(--accent-100)"),
      borderRadius: 999,
      padding: "2px 12px"
    }
  }, matched.length, " ", matched.length === 1 ? "persona" : "personas")), matched.length > 0 && withoutEmail > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "7px 10px",
      borderRadius: 8,
      marginBottom: 10,
      background: "#fff5f5",
      border: "1px solid #fecaca",
      fontSize: 12,
      color: "var(--bad)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 13
  }), withoutEmail, " ", withoutEmail === 1 ? "persona no tiene" : "personas no tienen", " email registrado y no ", withoutEmail === 1 ? "recibirá" : "recibirán", " el mensaje."), matched.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "24px 0",
      color: "var(--ink-4)",
      fontSize: 13,
      border: "1px dashed var(--line)",
      borderRadius: 10
    }
  }, "Ninguna persona coincide con los filtros") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, preview.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "6px 10px",
      borderRadius: 8,
      background: p.email ? "var(--bg-soft)" : "#fff5f5",
      border: "1px solid " + (p.email ? "var(--line)" : "#fecaca")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: p.color || "var(--accent)",
      width: 28,
      height: 28,
      fontSize: 11,
      flexShrink: 0
    }
  }, initials(fullName(p))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 12.5,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, fullName(p)), p.email ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-3)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, p.email) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--bad)",
      fontStyle: "italic"
    }
  }, "Sin email")))), matched.length > 8 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-4)",
      textAlign: "center",
      paddingTop: 4
    }
  }, "+ ", matched.length - 8, " m\xE1s")));
};

// ─── New Campaign Form ───

const NewCampaignForm = ({
  data,
  lang,
  onSaveCampaign,
  onBack
}) => {
  const stages = window.PIPELINE_STAGES || [];
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [filters, setFilters] = useState({
    role: "",
    stage: "",
    city: "",
    tag: "",
    emailOnly: true
  });
  const [sending, setSending] = useState(false);
  const [sendProgress, setSendProgress] = useState({
    sent: 0,
    total: 0,
    errors: 0
  });
  const [sendDone, setSendDone] = useState(false);
  const [error, setError] = useState("");
  const recipients = useMemo(() => applyFilters(data.personas, filters), [data.personas, filters]);
  const recipientsWithEmail = recipients.filter(p => p.email);
  const firstRecipient = recipientsWithEmail[0] || recipients[0];
  const previewText = firstRecipient ? interpolate(body, firstRecipient) : body;
  const ejsCfg = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("promeza_ejs") || "{}");
    } catch {
      return {};
    }
  }, []);
  const ejsReady = ejsCfg.serviceId && ejsCfg.templateId && ejsCfg.publicKey;
  const canSend = ejsReady && recipientsWithEmail.length > 0 && name.trim() && subject.trim() && body.trim() && !sending;
  const handleSend = async () => {
    if (!canSend) return;
    setError("");
    setSending(true);
    setSendProgress({
      sent: 0,
      total: recipientsWithEmail.length,
      errors: 0
    });
    setSendDone(false);
    let sent = 0;
    let errors = 0;
    for (const p of recipientsWithEmail) {
      const msg = interpolate(body, p);
      try {
        await window.emailjs.send(ejsCfg.serviceId, ejsCfg.templateId, {
          to_email: p.email,
          subject,
          message: msg,
          nombre: p.first,
          apellido: p.last
        }, ejsCfg.publicKey);
        sent++;
      } catch (e) {
        errors++;
      }
      setSendProgress({
        sent,
        total: recipientsWithEmail.length,
        errors
      });
      await new Promise(r => setTimeout(r, 300));
    }
    const campaign = {
      id: "camp" + Date.now(),
      name: name.trim(),
      subject: subject.trim(),
      body,
      filters,
      sentAt: new Date().toISOString(),
      recipientCount: recipients.length,
      sentCount: sent,
      status: "sent"
    };
    onSaveCampaign(campaign);
    setSending(false);
    setSendDone(true);
  };
  const setFilter = (key, val) => setFilters(f => ({
    ...f,
    [key]: val
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onBack,
    style: {
      padding: "6px 12px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chev-right",
    size: 14,
    style: {
      transform: "rotate(180deg)"
    }
  }), "Volver"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, "Nueva campa\xF1a"), /*#__PURE__*/React.createElement("div", {
    className: "page-sub"
  }, "Crea y env\xEDa un email masivo personalizado")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(280px, 380px) 1fr",
      gap: 20,
      alignItems: "start"
    },
    className: "campaigns-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      marginBottom: 16,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter",
    size: 15
  }), "Audiencia"), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", null, "Cargo"), /*#__PURE__*/React.createElement("select", {
    value: filters.role,
    onChange: e => setFilter("role", e.target.value)
  }, ROLE_OPTIONS.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.id,
    value: o.id
  }, o.label)))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", null, "Etapa del pipeline"), /*#__PURE__*/React.createElement("select", {
    value: filters.stage,
    onChange: e => setFilter("stage", e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Todas las etapas"), stages.map(s => /*#__PURE__*/React.createElement("option", {
    key: s.id,
    value: s.id
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", null, "Ciudad"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: filters.city,
    onChange: e => setFilter("city", e.target.value),
    placeholder: "Ej: Miami, Bogot\xE1\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", null, "Etiqueta"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: filters.tag,
    onChange: e => setFilter("tag", e.target.value),
    placeholder: "Ej: liderazgo, jovenes\u2026"
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      cursor: "pointer",
      fontSize: 13,
      marginBottom: 20,
      color: "var(--ink-2)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: filters.emailOnly,
    onChange: e => setFilter("emailOnly", e.target.checked),
    style: {
      width: 15,
      height: 15,
      cursor: "pointer",
      accentColor: "var(--accent)"
    }
  }), "Solo con email registrado"), /*#__PURE__*/React.createElement(AudiencePreview, {
    personas: data.personas,
    filters: filters
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      marginBottom: 16,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "edit",
    size: 15
  }), "Redactar"), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", null, "Nombre interno de la campa\xF1a"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "Ej: Invitaci\xF3n conferencia 2025"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", null, "Asunto del email"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: subject,
    onChange: e => setSubject(e.target.value),
    placeholder: "Ej: Te esperamos este domingo"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("label", null, "Cuerpo del mensaje"), /*#__PURE__*/React.createElement("textarea", {
    value: body,
    onChange: e => setBody(e.target.value),
    placeholder: "Hola {{nombre}},\n\nEsperamos contar con tu presencia…",
    style: {
      minHeight: 160,
      resize: "vertical",
      fontFamily: "inherit",
      lineHeight: 1.6
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-4)",
      marginBottom: 16
    }
  }, "Usa ", /*#__PURE__*/React.createElement("code", {
    style: {
      background: "var(--accent-50)",
      padding: "0 4px",
      borderRadius: 3,
      fontSize: 11
    }
  }, "{{nombre}}"), " y", " ", /*#__PURE__*/React.createElement("code", {
    style: {
      background: "var(--accent-50)",
      padding: "0 4px",
      borderRadius: 3,
      fontSize: 11
    }
  }, "{{apellido}}"), " ", "para personalizar el mensaje por destinatario."), body.trim() && /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 10,
      border: "1px solid var(--line)",
      background: "var(--bg-soft)",
      padding: "12px 14px",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      color: "var(--ink-4)",
      marginBottom: 6,
      textTransform: "uppercase",
      letterSpacing: "0.06em"
    }
  }, "Vista previa ", firstRecipient ? `— ${fullName(firstRecipient)}` : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-2)",
      whiteSpace: "pre-wrap",
      lineHeight: 1.7
    }
  }, previewText || /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--ink-4)"
    }
  }, "El cuerpo del mensaje aparecer\xE1 aqu\xED."))), !ejsReady && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 8,
      padding: "10px 14px",
      borderRadius: 8,
      marginBottom: 14,
      background: "#fff5f5",
      border: "1px solid #fecaca",
      fontSize: 12.5,
      color: "var(--bad)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    size: 14,
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", null, "Configura EmailJS en ", /*#__PURE__*/React.createElement("strong", null, "Ajustes"), " antes de enviar campa\xF1as.")), error && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 14px",
      borderRadius: 8,
      marginBottom: 14,
      background: "#fff5f5",
      border: "1px solid #fecaca",
      fontSize: 12.5,
      color: "var(--bad)"
    }
  }, error), sendDone && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 14px",
      borderRadius: 8,
      marginBottom: 14,
      background: "#f0fdf4",
      border: "1px solid #bbf7d0",
      fontSize: 13,
      color: "#166534",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14
  }), "Campa\xF1a enviada: ", sendProgress.sent, " de ", sendProgress.total, " emails enviados correctamente.", sendProgress.errors > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: "var(--bad)",
      marginLeft: 4
    }
  }, "(", sendProgress.errors, " errores)")), sending && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 6,
      fontSize: 12.5,
      color: "var(--ink-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 13
  }), "Enviando\u2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--accent)"
    }
  }, sendProgress.sent, " / ", sendProgress.total, " enviados")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 999,
      background: "var(--line)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      borderRadius: 999,
      background: "var(--accent)",
      width: sendProgress.total > 0 ? sendProgress.sent / sendProgress.total * 100 + "%" : "0%",
      transition: "width 0.3s ease"
    }
  })), sendProgress.errors > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--bad)",
      marginTop: 4
    }
  }, sendProgress.errors, " ", sendProgress.errors === 1 ? "error" : "errores", " de env\xEDo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      justifyContent: "flex-end"
    }
  }, recipientsWithEmail.length > 0 && !sending && !sendDone && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-3)"
    }
  }, "Se enviar\xE1 a ", recipientsWithEmail.length, " ", recipientsWithEmail.length === 1 ? "persona" : "personas"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: handleSend,
    disabled: !canSend || sendDone,
    style: {
      opacity: !canSend || sendDone ? 0.5 : 1,
      cursor: !canSend || sendDone ? "not-allowed" : "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15
  }), sending ? "Enviando…" : sendDone ? "Enviada" : "Enviar campaña"))))), /*#__PURE__*/React.createElement("style", null, `
        @media (max-width: 768px) {
          .campaigns-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `));
};

// ─── CampaignsView (main) ───

const CampaignsView = ({
  lang,
  data,
  go,
  onSaveCampaign
}) => {
  const [mode, setMode] = useState("list"); // "list" | "new"

  const campaigns = (data.campaigns || []).slice().sort((a, b) => (b.sentAt || "").localeCompare(a.sentAt || ""));
  if (mode === "new") {
    return /*#__PURE__*/React.createElement(NewCampaignForm, {
      data: data,
      lang: lang,
      onSaveCampaign: campaign => {
        onSaveCampaign(campaign);
        setMode("list");
      },
      onBack: () => setMode("list")
    });
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, "Campa\xF1as de email"), /*#__PURE__*/React.createElement("div", {
    className: "page-sub"
  }, campaigns.length > 0 ? `${campaigns.length} ${campaigns.length === 1 ? "campaña enviada" : "campañas enviadas"}` : "Envía emails personalizados a tu base de contactos")), /*#__PURE__*/React.createElement("div", {
    className: "page-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => setMode("new")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), "Nueva campa\xF1a"))), campaigns.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty",
    style: {
      padding: "80px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: 16,
      background: "var(--accent-50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 16px",
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 6
    }
  }, "A\xFAn no hay campa\xF1as"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-3)",
      fontSize: 13.5,
      marginBottom: 20,
      maxWidth: 340,
      textAlign: "center"
    }
  }, "Crea tu primera campa\xF1a para enviar emails personalizados a tus contactos."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => setMode("new")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), "Crear primera campa\xF1a")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, campaigns.map(c => /*#__PURE__*/React.createElement(CampaignCard, {
    key: c.id,
    campaign: c,
    lang: lang
  }))));
};
window.CampaignsView = CampaignsView;

;/* ===== calendar.jsx ===== */
// PROMEZA CRM — Calendar view (monthly, projects + tasks + custom events)

const EVENT_COLORS = ["#6366f1", "#0ea5e9", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6", "#ef4444", "#14b8a6"];
const CalendarView = ({
  lang,
  data,
  go,
  onAddCalendarEvent,
  onDeleteCalendarEvent,
  onAddTask
}) => {
  var {
    useState,
    useMemo
  } = React;
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [addForm, setAddForm] = useState({
    type: "event",
    title: "",
    color: "#6366f1",
    personaId: "",
    note: ""
  });
  const [showAddPanel, setShowAddPanel] = useState(false);
  const es = lang !== "en";
  const weekStartsMonday = es;
  const DOW_LABELS_ES = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  const DOW_LABELS_EN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dowLabels = weekStartsMonday ? DOW_LABELS_ES : DOW_LABELS_EN;
  const monthName = new Date(year, month, 1).toLocaleDateString(es ? "es-ES" : "en-US", {
    month: "long",
    year: "numeric"
  });
  const monthNameCap = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  const prevMonth = () => {
    if (month === 0) {
      setYear(y => y - 1);
      setMonth(11);
    } else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) {
      setYear(y => y + 1);
      setMonth(0);
    } else setMonth(m => m + 1);
  };
  const goToday = () => {
    setYear(today.getFullYear());
    setMonth(today.getMonth());
  };
  const calendarDays = useMemo(() => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();
    let startDow = firstDay.getDay();
    if (weekStartsMonday) startDow = (startDow + 6) % 7;
    const days = [];
    for (let i = 0; i < startDow; i++) days.push(null);
    for (let d = 1; d <= totalDays; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      days.push({
        day: d,
        dateStr
      });
    }
    while (days.length % 7 !== 0) days.push(null);
    return days;
  }, [year, month, weekStartsMonday]);
  const eventsByDate = useMemo(() => {
    const map = {};
    const addEvent = (dateStr, evt) => {
      if (!dateStr) return;
      if (!map[dateStr]) map[dateStr] = [];
      map[dateStr].push(evt);
    };

    // Projects: start date
    const projectTypes = window.PROJECT_TYPES || [];
    (data.projects || []).forEach(pr => {
      if (!pr.dateStart) return;
      const pt = projectTypes.find(t => t.id === pr.type) || {
        color: "#6366f1",
        emoji: "📂"
      };
      addEvent(pr.dateStart, {
        kind: "project",
        id: pr.id,
        label: (pt.emoji ? pt.emoji + " " : "") + pr.name,
        color: pt.color,
        sub: es ? "Inicio" : "Start"
      });
      if (pr.dateEnd && pr.dateEnd !== pr.dateStart) {
        addEvent(pr.dateEnd, {
          kind: "project",
          id: pr.id,
          label: (pt.emoji ? pt.emoji + " " : "") + pr.name,
          color: pt.color + "99",
          sub: es ? "Fin" : "End"
        });
      }
    });

    // Tasks with due dates
    Object.entries(data.tasks || {}).forEach(([personaId, tasks]) => {
      (tasks || []).forEach(task => {
        if (!task.due || task.done) return;
        const persona = data.personas.find(p => p.id === personaId);
        addEvent(task.due, {
          kind: "task",
          id: task.id,
          ownerId: personaId,
          label: task.text,
          color: "#f59e0b",
          sub: persona ? persona.first + " " + persona.last : ""
        });
      });
    });

    // Custom calendar events
    (data.calendarEvents || []).forEach(evt => {
      addEvent(evt.date, {
        kind: "cal",
        id: evt.id,
        label: evt.title,
        color: evt.color || "#6366f1",
        note: evt.note
      });
    });
    return map;
  }, [data.projects, data.tasks, data.calendarEvents, data.personas, es]);
  const handleDayClick = dateStr => {
    setSelectedDate(dateStr);
    setAddForm({
      type: "event",
      title: "",
      color: "#6366f1",
      personaId: "",
      note: ""
    });
    setShowAddPanel(true);
  };
  const handleEventClick = (e, evt) => {
    e.stopPropagation();
    if (evt.kind === "project") go({
      name: "project",
      id: evt.id
    });else if (evt.kind === "task") go({
      name: "person",
      id: evt.ownerId
    });
  };
  const handleAdd = () => {
    if (!addForm.title.trim()) return;
    if (addForm.type === "task") {
      if (!addForm.personaId) return;
      onAddTask && onAddTask(addForm.personaId, {
        id: "t" + Date.now(),
        text: addForm.title.trim(),
        due: selectedDate,
        done: false,
        createdAt: todayStr,
        assignedTo: null
      });
    } else {
      onAddCalendarEvent && onAddCalendarEvent({
        title: addForm.title.trim(),
        date: selectedDate,
        color: addForm.color,
        note: addForm.note
      });
    }
    setShowAddPanel(false);
    setSelectedDate(null);
  };
  const handleDeleteCalEvent = (e, id) => {
    e.stopPropagation();
    onDeleteCalendarEvent && onDeleteCalendarEvent(id);
  };
  const selectedEvents = selectedDate ? eventsByDate[selectedDate] || [] : [];
  const fmtSelectedDate = ds => {
    if (!ds) return "";
    const d = new Date(ds + "T12:00:00");
    return d.toLocaleDateString(es ? "es-ES" : "en-US", {
      weekday: "long",
      day: "numeric",
      month: "long"
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, es ? "Calendario" : "Calendar"), /*#__PURE__*/React.createElement("div", {
    className: "page-sub"
  }, es ? "Proyectos, tareas y eventos por fecha" : "Projects, tasks and events by date")), /*#__PURE__*/React.createElement("div", {
    className: "page-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm",
    onClick: goToday
  }, es ? "Hoy" : "Today"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: showAddPanel ? "1fr 300px" : "1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 16px",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    onClick: prevMonth,
    style: {
      padding: "4px 10px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, monthNameCap), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    onClick: nextMonth,
    style: {
      padding: "4px 10px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      borderBottom: "1px solid var(--line)"
    }
  }, dowLabels.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      textAlign: "center",
      padding: "8px 4px",
      fontSize: 11,
      fontWeight: 700,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".04em"
    }
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)"
    }
  }, calendarDays.map((cell, idx) => {
    if (!cell) return /*#__PURE__*/React.createElement("div", {
      key: "e-" + idx,
      style: {
        minHeight: 100,
        borderRight: idx % 7 === 6 ? "none" : "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        background: "var(--bg-soft)",
        ...(idx % 7 === 6 ? {
          borderRight: "none"
        } : {})
      }
    });
    const {
      day,
      dateStr
    } = cell;
    const isToday = dateStr === todayStr;
    const isSelected = dateStr === selectedDate;
    const events = eventsByDate[dateStr] || [];
    const visible = events.slice(0, 3);
    const more = events.length - 3;
    return /*#__PURE__*/React.createElement("div", {
      key: dateStr,
      onClick: () => handleDayClick(dateStr),
      style: {
        minHeight: 100,
        borderRight: idx % 7 === 6 ? "none" : "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "5px 4px 4px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        background: isSelected ? "var(--accent-50)" : "var(--bg)",
        cursor: "pointer",
        transition: "background .1s",
        outline: isSelected ? "2px solid var(--accent)" : "none",
        outlineOffset: "-2px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 22,
        height: 22,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 11.5,
        fontWeight: isToday ? 700 : 400,
        color: isToday ? "#fff" : "var(--ink)",
        background: isToday ? "var(--accent)" : "transparent"
      }
    }, day)), visible.map((evt, ei) => /*#__PURE__*/React.createElement("div", {
      key: evt.id + "-" + ei,
      onClick: e => handleEventClick(e, evt),
      title: evt.label,
      style: {
        borderRadius: 3,
        padding: "1px 4px",
        fontSize: 10,
        fontWeight: 500,
        color: "#fff",
        background: evt.color,
        cursor: "pointer",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "15px"
      }
    }, evt.kind === "task" ? "✓ " : evt.kind === "cal" ? "● " : "", evt.label)), more > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9.5,
        color: "var(--ink-3)",
        fontWeight: 600,
        paddingLeft: 2
      }
    }, "+", more, " ", es ? "más" : "more"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      borderTop: "1px solid var(--line)",
      display: "flex",
      flexWrap: "wrap",
      gap: 12
    }
  }, [...(window.PROJECT_TYPES || []).filter(pt => (data.projects || []).some(pr => pr.type === pt.id)).map(pt => ({
    color: pt.color,
    label: pt.label
  })), ...(Object.values(data.tasks || {}).flat().some(t => !t.done && t.due) ? [{
    color: "#f59e0b",
    label: es ? "Tareas" : "Tasks"
  }] : []), ...((data.calendarEvents || []).length > 0 ? [{
    color: "#6366f1",
    label: es ? "Eventos" : "Events"
  }] : [])].map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontSize: 11,
      color: "var(--ink-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: item.color
    }
  }), item.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      fontSize: 11,
      color: "var(--ink-4)"
    }
  }, es ? "Clic en un día para agregar" : "Click a day to add"))), showAddPanel && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "var(--accent-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13,
      color: "var(--accent)",
      textTransform: "capitalize"
    }
  }, fmtSelectedDate(selectedDate)), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: () => {
      setShowAddPanel(false);
      setSelectedDate(null);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  }))), selectedEvents.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--line)"
    }
  }, selectedEvents.map((evt, i) => /*#__PURE__*/React.createElement("div", {
    key: evt.id + i,
    style: {
      padding: "8px 14px",
      borderBottom: i < selectedEvents.length - 1 ? "1px solid var(--line)" : "none",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: evt.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 500,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, evt.label), evt.sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-4)"
    }
  }, evt.sub)), evt.kind === "project" && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      padding: "1px 6px",
      fontSize: 10.5
    },
    onClick: () => go({
      name: "project",
      id: evt.id
    })
  }, "Ver \u2192"), evt.kind === "task" && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      padding: "1px 6px",
      fontSize: 10.5
    },
    onClick: () => go({
      name: "person",
      id: evt.ownerId
    })
  }, "Ver \u2192"), evt.kind === "cal" && /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    style: {
      color: "var(--ink-4)"
    },
    onClick: e => handleDeleteCalEvent(e, evt.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 12
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".05em"
    }
  }, es ? "Agregar" : "Add"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, [{
    id: "event",
    label: es ? "Evento" : "Event"
  }, {
    id: "task",
    label: es ? "Tarea" : "Task"
  }].map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.id,
    onClick: () => setAddForm(f => ({
      ...f,
      type: opt.id
    })),
    style: {
      flex: 1,
      padding: "5px 8px",
      borderRadius: 7,
      border: "1.5px solid",
      borderColor: addForm.type === opt.id ? "var(--accent)" : "var(--line)",
      background: addForm.type === opt.id ? "var(--accent-50)" : "transparent",
      color: addForm.type === opt.id ? "var(--accent)" : "var(--ink-3)",
      fontFamily: "inherit",
      fontSize: 12,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, opt.label))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 10.5
    }
  }, addForm.type === "task" ? es ? "Descripción" : "Description" : es ? "Título" : "Title", " *"), /*#__PURE__*/React.createElement("input", {
    value: addForm.title,
    onChange: e => setAddForm(f => ({
      ...f,
      title: e.target.value
    })),
    onKeyDown: e => e.key === "Enter" && handleAdd(),
    placeholder: addForm.type === "task" ? es ? "¿Qué hay que hacer?" : "What needs to be done?" : es ? "Nombre del evento…" : "Event name…",
    autoFocus: true
  })), addForm.type === "task" && /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 10.5
    }
  }, es ? "Contacto" : "Contact", " *"), /*#__PURE__*/React.createElement("select", {
    value: addForm.personaId,
    onChange: e => setAddForm(f => ({
      ...f,
      personaId: e.target.value
    }))
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, es ? "— Selecciona —" : "— Select —"), data.personas.map(p => /*#__PURE__*/React.createElement("option", {
    key: p.id,
    value: p.id
  }, p.first, " ", p.last)))), addForm.type === "event" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: "var(--ink-3)",
      textTransform: "uppercase",
      letterSpacing: ".05em",
      display: "block",
      marginBottom: 5
    }
  }, es ? "Color" : "Color"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, EVENT_COLORS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    onClick: () => setAddForm(f => ({
      ...f,
      color: c
    })),
    style: {
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: c,
      cursor: "pointer",
      border: addForm.color === c ? "3px solid var(--ink)" : "2px solid transparent",
      transition: "border .1s"
    }
  })))), addForm.type === "event" && /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 10.5
    }
  }, es ? "Nota (opcional)" : "Note (optional)"), /*#__PURE__*/React.createElement("input", {
    value: addForm.note,
    onChange: e => setAddForm(f => ({
      ...f,
      note: e.target.value
    })),
    placeholder: es ? "Descripción breve…" : "Brief description…"
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    disabled: !addForm.title.trim() || addForm.type === "task" && !addForm.personaId,
    onClick: handleAdd,
    style: {
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 13
  }), " ", es ? "Agregar" : "Add")))));
};
window.CalendarView = CalendarView;

;/* ===== goals.jsx ===== */
// PROMEZA CRM — Metas y seguimiento

var {
  useState,
  useEffect,
  useMemo
} = React;

// ─── Metric definitions ───────────────────────────────────────────────────────

const GOAL_METRICS = [{
  id: "personas_total",
  label: "Total de personas registradas",
  icon: "👥",
  compute: data => data.personas.length
}, {
  id: "personas_activas",
  label: "Personas activas (no archivadas)",
  icon: "✅",
  compute: data => data.personas.filter(p => (p.stage || "x") !== "inactivo" && p.status !== "inactivo").length
}, {
  id: "activos_stage",
  label: "Personas activas",
  icon: "⭐",
  compute: data => data.personas.filter(p => p.stage === "activo").length
}, {
  id: "en_proceso",
  label: "Personas en seguimiento activo",
  icon: "🔄",
  compute: data => data.personas.filter(p => p.stage === "seguimiento").length
}, {
  id: "proyectos_completados",
  label: "Proyectos completados",
  icon: "📋",
  compute: data => (data.projects || []).filter(p => p.status === "completado").length
}, {
  id: "proyectos_total",
  label: "Total de proyectos",
  icon: "📁",
  compute: data => (data.projects || []).length
}, {
  id: "entidades_total",
  label: "Total de entidades vinculadas",
  icon: "🏛️",
  compute: data => data.entities.length
}, {
  id: "participantes_total",
  label: "Total de participantes en proyectos",
  icon: "👤",
  compute: data => new Set((data.projects || []).flatMap(pr => (pr.members || []).map(m => m.personaId))).size
}];

// ─── Category definitions ─────────────────────────────────────────────────────

const GOAL_CATEGORIES = [{
  id: "crecimiento",
  label: "Crecimiento de base",
  icon: "📈",
  color: "#6366f1",
  desc: "Ampliar el número de contactos registrados"
}, {
  id: "conversion",
  label: "Conversión",
  icon: "⭐",
  color: "#10b981",
  desc: "Avanzar personas en el proceso de compromiso"
}, {
  id: "proyectos",
  label: "Proyectos",
  icon: "📁",
  color: "#8b5cf6",
  desc: "Metas relacionadas a eventos y proyectos"
}, {
  id: "alcance",
  label: "Alcance ministerial",
  icon: "🌐",
  color: "#0ea5e9",
  desc: "Cobertura geográfica y entidades"
}];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const today = () => new Date().toISOString().slice(0, 10);
const fmtNum = n => typeof n === "number" ? n.toLocaleString("es") : "—";
const fmtDateShort = iso => {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  return `${parseInt(d)} ${months[parseInt(m) - 1]} ${y}`;
};
const daysUntil = iso => {
  if (!iso) return null;
  return Math.round((new Date(iso) - new Date(today())) / 86400000);
};
const deadlineLabel = iso => {
  const d = daysUntil(iso);
  if (d === null) return null;
  if (d < 0) return {
    text: `Venció ${fmtDateShort(iso)}`,
    color: "var(--bad)"
  };
  if (d === 0) return {
    text: "Vence hoy",
    color: "#f59e0b"
  };
  if (d === 1) return {
    text: "Vence mañana",
    color: "#f59e0b"
  };
  if (d < 30) return {
    text: `${d} días restantes`,
    color: "#f59e0b"
  };
  return {
    text: `Hasta ${fmtDateShort(iso)}`,
    color: "var(--ink-3)"
  };
};
const progressColor = pct => {
  if (pct >= 100) return "var(--good)";
  if (pct >= 75) return "#3b82f6";
  if (pct >= 50) return "#f59e0b";
  return "var(--bad)";
};

// ─── NewGoalForm modal ────────────────────────────────────────────────────────

const NewGoalForm = ({
  data,
  onClose,
  onSave
}) => {
  const [step, setStep] = useState(0); // 0 = category, 1 = details
  const [form, setForm] = useState({
    category: "",
    title: "",
    metric: GOAL_METRICS[0].id,
    target: "",
    deadline: "",
    description: ""
  });
  const [error, setError] = useState("");
  const set = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));
  const selectedCategory = GOAL_CATEGORIES.find(c => c.id === form.category);
  const selectedMetric = GOAL_METRICS.find(m => m.id === form.metric) || GOAL_METRICS[0];
  const currentValue = useMemo(() => selectedMetric.compute(data), [selectedMetric, data]);
  const handleNext = () => {
    if (!form.category) {
      setError("Selecciona una categoría.");
      return;
    }
    setError("");
    setStep(1);
  };
  const handleSave = () => {
    if (!form.title.trim()) {
      setError("El título es obligatorio.");
      return;
    }
    if (!form.target || isNaN(Number(form.target)) || Number(form.target) <= 0) {
      setError("El objetivo debe ser un número mayor que 0.");
      return;
    }
    if (!form.deadline) {
      setError("La fecha límite es obligatoria.");
      return;
    }
    setError("");
    onSave({
      title: form.title.trim(),
      description: form.description.trim(),
      category: form.category,
      metric: form.metric,
      target: Number(form.target),
      deadline: form.deadline
    });
    onClose();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-veil",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      width: "min(540px, 100%)",
      animation: "popIn .18s ease"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, step === 1 && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      padding: "3px 8px"
    },
    onClick: () => setStep(0)
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, step === 0 ? "Nueva meta — Categoría" : "Nueva meta — Detalles")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    style: {
      padding: "3px 8px"
    },
    onClick: onClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "modal-body",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, error && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff5f5",
      border: "1px solid #fecaca",
      borderRadius: 8,
      padding: "10px 14px",
      fontSize: 13,
      color: "#991b1b"
    }
  }, error), step === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-3)"
    }
  }, "\xBFQu\xE9 tipo de objetivo quieres establecer?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, GOAL_CATEGORIES.map(cat => {
    const selected = form.category === cat.id;
    return /*#__PURE__*/React.createElement("button", {
      key: cat.id,
      onClick: () => set("category", cat.id),
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 6,
        padding: "14px 16px",
        borderRadius: 10,
        border: selected ? `2px solid ${cat.color}` : "2px solid var(--line)",
        background: selected ? cat.color + "12" : "var(--bg-soft)",
        cursor: "pointer",
        textAlign: "left",
        transition: "all .15s",
        outline: "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22
      }
    }, cat.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 13,
        color: selected ? cat.color : "var(--ink)"
      }
    }, cat.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "var(--ink-3)",
        lineHeight: 1.4
      }
    }, cat.desc));
  })), selectedCategory && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 14px",
      borderRadius: 8,
      background: selectedCategory.color + "12",
      border: `1px solid ${selectedCategory.color}40`,
      fontSize: 13,
      color: "var(--ink-2)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: selectedCategory.color
    }
  }, selectedCategory.icon, " ", selectedCategory.label), " ", "\u2014 ", selectedCategory.desc)), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, selectedCategory && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 12px",
      borderRadius: 20,
      background: selectedCategory.color + "18",
      border: `1px solid ${selectedCategory.color}40`,
      fontSize: 12,
      fontWeight: 600,
      color: selectedCategory.color,
      width: "fit-content"
    }
  }, selectedCategory.icon, " ", selectedCategory.label), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "\xBFQu\xE9 quieres lograr? *"), /*#__PURE__*/React.createElement("input", {
    value: form.title,
    onChange: e => set("title", e.target.value),
    placeholder: "ej. \"Llegar a 500 aliados este trimestre\"",
    autoFocus: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "M\xE9trica que mide este objetivo"), /*#__PURE__*/React.createElement("select", {
    value: form.metric,
    onChange: e => set("metric", e.target.value)
  }, GOAL_METRICS.map(m => /*#__PURE__*/React.createElement("option", {
    key: m.id,
    value: m.id
  }, m.icon, " ", m.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      padding: "8px 12px",
      borderRadius: 8,
      background: "var(--accent-50)",
      fontSize: 12,
      color: "var(--ink-2)",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, selectedMetric.icon), /*#__PURE__*/React.createElement("span", null, "Valor actual:", " ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--accent)"
    }
  }, fmtNum(currentValue)), " ", "\u2014 ", selectedMetric.label.toLowerCase()))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Meta num\xE9rica *"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    value: form.target,
    onChange: e => set("target", e.target.value),
    placeholder: String(currentValue + 50)
  }), form.target && !isNaN(Number(form.target)) && Number(form.target) > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 11,
      color: "var(--ink-3)"
    }
  }, "Necesitas", " ", /*#__PURE__*/React.createElement("strong", null, "+", Math.max(0, Number(form.target) - currentValue)), " ", "m\xE1s desde hoy")), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Fecha l\xEDmite *"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: form.deadline,
    onChange: e => set("deadline", e.target.value),
    min: today()
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Descripci\xF3n / notas (opcional)"), /*#__PURE__*/React.createElement("textarea", {
    value: form.description,
    onChange: e => set("description", e.target.value),
    placeholder: "Contexto, criterios de \xE9xito, pasos clave...",
    rows: 3,
    style: {
      resize: "vertical"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "modal-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onClose
  }, "Cancelar"), step === 0 ? /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: handleNext
  }, "Continuar \u2192") : /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: handleSave
  }, "\u2713 Guardar meta"))));
};

// ─── GoalCard ─────────────────────────────────────────────────────────────────

const GoalCard = ({
  goal,
  data,
  onDelete
}) => {
  const [barReady, setBarReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setBarReady(true), 60);
    return () => clearTimeout(t);
  }, []);
  const metricDef = GOAL_METRICS.find(m => m.id === goal.metric) || GOAL_METRICS[0];
  const category = GOAL_CATEGORIES.find(c => c.id === goal.category) || GOAL_CATEGORIES[0];
  const current = metricDef.compute(data);
  const initial = typeof goal.initialValue === "number" ? goal.initialValue : current;
  const gained = current - initial;
  const pct = goal.target > 0 ? Math.min(100, Math.round(current / goal.target * 100)) : 0;
  const done = current >= goal.target;
  const dl = deadlineLabel(goal.deadline);
  const barColor = progressColor(pct);
  const handleDelete = () => {
    if (!confirm("¿Eliminar esta meta? Esta acción no se puede deshacer.")) return;
    onDelete(goal.id);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      borderLeft: `3px solid ${category.color}`,
      animation: "fadeIn .25s ease",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 16px 0",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "3px 10px",
      borderRadius: 20,
      background: category.color + "18",
      border: `1px solid ${category.color}40`,
      fontSize: 11,
      fontWeight: 700,
      color: category.color,
      letterSpacing: "0.02em"
    }
  }, category.icon, " ", category.label), dl && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: dl.color,
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, "\uD83D\uDCC5 ", dl.text)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px 16px",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      fontWeight: 800,
      lineHeight: 1,
      color: done ? "var(--good)" : "var(--ink)",
      fontVariantNumeric: "tabular-nums"
    }
  }, fmtNum(current)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 4,
      display: "flex",
      flexDirection: "column",
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: "var(--ink-3)"
    }
  }, metricDef.icon, " ", metricDef.label), done ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      padding: "2px 8px",
      borderRadius: 12,
      background: "#f0fdf4",
      border: "1px solid #bbf7d0",
      fontSize: 11,
      fontWeight: 700,
      color: "var(--good)",
      width: "fit-content"
    }
  }, "\u2713 \xA1Meta alcanzada!") : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: barColor
    }
  }, pct, "% completado"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)",
      display: "flex",
      alignItems: "center",
      gap: 6,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Inicio: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink-2)"
    }
  }, fmtNum(initial))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--line)"
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("span", null, "Ahora: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, fmtNum(current))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--line)"
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("span", null, "Meta: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: category.color
    }
  }, fmtNum(goal.target)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 4,
      background: "var(--line)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: barReady ? pct + "%" : "0%",
      background: barColor,
      borderRadius: 4,
      transition: "width .8s cubic-bezier(.34,1.56,.64,1)"
    }
  })), gained !== 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontSize: 11,
      color: "var(--ink-4)"
    }
  }, "Desde que se cre\xF3 esta meta:", " ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: gained > 0 ? "var(--good)" : "var(--bad)"
    }
  }, gained > 0 ? "+" : "", fmtNum(gained)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line)",
      paddingTop: 10,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 1.3
    }
  }, goal.title), goal.description && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 12,
      color: "var(--ink-3)",
      lineHeight: 1.5
    }
  }, goal.description)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    onClick: handleDelete,
    title: "Eliminar meta",
    style: {
      color: "var(--ink-4)",
      padding: "4px 8px",
      flexShrink: 0,
      opacity: 0.6
    },
    onMouseEnter: e => e.currentTarget.style.opacity = "1",
    onMouseLeave: e => e.currentTarget.style.opacity = "0.6"
  }, "\uD83D\uDDD1"))));
};

// ─── GoalsView ────────────────────────────────────────────────────────────────

const GoalsView = ({
  lang,
  data,
  go,
  onAddGoal,
  onUpdateGoal,
  onDeleteGoal
}) => {
  const [showForm, setShowForm] = useState(false);
  const [archivedOpen, setArchivedOpen] = useState(false);
  const [filterCat, setFilterCat] = useState("all");
  const goals = data.goals || [];
  const activeGoals = goals.filter(g => !g.archived);
  const archivedGoals = goals.filter(g => g.archived);
  const todayStr = today();
  const stats = useMemo(() => {
    const completed = activeGoals.filter(g => {
      const m = GOAL_METRICS.find(x => x.id === g.metric);
      return m && m.compute(data) >= g.target;
    });
    const overdue = activeGoals.filter(g => {
      const m = GOAL_METRICS.find(x => x.id === g.metric);
      const isDone = m && m.compute(data) >= g.target;
      return !isDone && g.deadline && g.deadline < todayStr;
    });
    return {
      active: activeGoals.length,
      completed: completed.length,
      overdue: overdue.length
    };
  }, [activeGoals, data, todayStr]);
  const filteredGoals = filterCat === "all" ? activeGoals : activeGoals.filter(g => g.category === filterCat);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "fadeIn .2s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, "Metas y seguimiento"), /*#__PURE__*/React.createElement("div", {
    className: "page-sub"
  }, "Visualiza el progreso del ministerio hacia sus objetivos")), /*#__PURE__*/React.createElement("div", {
    className: "page-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => setShowForm(true)
  }, "+ Nueva meta"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 22,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, [{
    label: "Metas activas",
    value: stats.active,
    color: "var(--accent)",
    bg: "var(--accent-50)"
  }, {
    label: "Completadas",
    value: stats.completed,
    color: "var(--good)",
    bg: "#f0fdf4"
  }, {
    label: "Vencidas",
    value: stats.overdue,
    color: stats.overdue > 0 ? "var(--bad)" : "var(--ink-4)",
    bg: stats.overdue > 0 ? "#fff5f5" : "var(--bg-soft)"
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 16px",
      borderRadius: 20,
      background: s.bg,
      border: `1px solid ${s.color}30`,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      color: s.color
    }
  }, s.value), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-3)",
      fontWeight: 500
    }
  }, s.label)))), activeGoals.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: `btn btn-sm ${filterCat === "all" ? "btn-primary" : "btn-ghost"}`,
    onClick: () => setFilterCat("all")
  }, "Todas"), GOAL_CATEGORIES.filter(cat => activeGoals.some(g => g.category === cat.id)).map(cat => /*#__PURE__*/React.createElement("button", {
    key: cat.id,
    className: "btn btn-sm btn-ghost",
    onClick: () => setFilterCat(cat.id),
    style: filterCat === cat.id ? {
      background: cat.color + "18",
      border: `1px solid ${cat.color}60`,
      color: cat.color,
      fontWeight: 700
    } : {}
  }, cat.icon, " ", cat.label))), activeGoals.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "56px 24px",
      textAlign: "center",
      animation: "slideUp .25s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      marginBottom: 12
    }
  }, "\uD83C\uDFAF"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 6
    }
  }, "A\xFAn no hay metas definidas"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-3)",
      fontSize: 14,
      maxWidth: 380,
      margin: "0 auto 20px"
    }
  }, "Las metas te permiten hacer seguimiento al progreso real del ministerio \u2014 cu\xE1ntas personas se est\xE1n sumando, cu\xE1ntos est\xE1n comprometidos, qu\xE9 proyectos avanzan."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => setShowForm(true)
  }, "+ Crear primera meta")) : filteredGoals.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: "32px 24px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-3)",
      fontSize: 14
    }
  }, "No hay metas en esta categor\xEDa.", " ", /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-ghost",
    onClick: () => setFilterCat("all")
  }, "Ver todas"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
      gap: 16,
      marginBottom: 28
    }
  }, filteredGoals.map(goal => /*#__PURE__*/React.createElement(GoalCard, {
    key: goal.id,
    goal: goal,
    data: data,
    onDelete: onDeleteGoal
  }))), archivedGoals.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginTop: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head",
    style: {
      cursor: "pointer",
      userSelect: "none"
    },
    onClick: () => setArchivedOpen(o => !o)
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-title",
    style: {
      color: "var(--ink-3)",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, archivedOpen ? "▾" : "▸"), "Metas archivadas (", archivedGoals.length, ")")), archivedOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      gap: 14,
      padding: "0 16px 16px",
      animation: "slideUp .2s ease"
    }
  }, archivedGoals.map(goal => /*#__PURE__*/React.createElement(GoalCard, {
    key: goal.id,
    goal: goal,
    data: data,
    onDelete: onDeleteGoal
  })))), showForm && /*#__PURE__*/React.createElement(NewGoalForm, {
    data: data,
    onClose: () => setShowForm(false),
    onSave: onAddGoal
  }));
};

// ─── Exports ──────────────────────────────────────────────────────────────────

window.GoalsView = GoalsView;
window.GOAL_METRICS = GOAL_METRICS;

;/* ===== county.jsx ===== */
// PROMEZA CRM — County view (por condado)

const CountyView = ({
  t,
  lang,
  data,
  go
}) => {
  const [selected, setSelected] = React.useState(null);
  const [tab, setTab] = React.useState("personas");
  const es = lang === "es";

  // Build county groups for personas
  const personasByCounty = React.useMemo(() => {
    const map = {};
    data.personas.forEach(p => {
      const key = p.county || (p.state ? es ? "Sin condado — " + p.state : "No county — " + p.state : es ? "Sin condado" : "No county");
      if (!map[key]) map[key] = [];
      map[key].push(p);
    });
    return map;
  }, [data.personas, lang]);

  // Build county groups for entities
  const entitiesByCounty = React.useMemo(() => {
    const map = {};
    data.entities.forEach(e => {
      const key = e.county || (e.state ? es ? "Sin condado — " + e.state : "No county — " + e.state : es ? "Sin condado" : "No county");
      if (!map[key]) map[key] = [];
      map[key].push(e);
    });
    return map;
  }, [data.entities, lang]);

  // All unique counties across both
  const allCounties = React.useMemo(() => {
    const keys = new Set([...Object.keys(personasByCounty), ...Object.keys(entitiesByCounty)]);
    return [...keys].sort((a, b) => {
      const pa = (personasByCounty[a] || []).length + (entitiesByCounty[a] || []).length;
      const pb = (personasByCounty[b] || []).length + (entitiesByCounty[b] || []).length;
      return pb - pa;
    });
  }, [personasByCounty, entitiesByCounty]);
  const totalPersonas = data.personas.length;
  const totalEntities = data.entities.length;
  const countyColors = ["#6366f1", "#0ea5e9", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6", "#14b8a6", "#f97316"];
  const colorFor = i => countyColors[i % countyColors.length];
  const stageOf = p => p.stage || (p.status === "inactivo" ? "inactivo" : "conocido");
  const stages = window.PIPELINE_STAGES || [];
  if (selected) {
    const personas = personasByCounty[selected] || [];
    const entities = entitiesByCounty[selected] || [];
    const colorIdx = allCounties.indexOf(selected);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        animation: "fadeIn .2s ease-out"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      onClick: () => setSelected(null)
    }, "\u2190 ", es ? "Todos los condados" : "All counties")), /*#__PURE__*/React.createElement("div", {
      className: "page-head",
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      className: "page-title",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 14,
        height: 14,
        borderRadius: "50%",
        background: colorFor(colorIdx),
        display: "inline-block"
      }
    }), selected), /*#__PURE__*/React.createElement("div", {
      className: "page-sub"
    }, personas.length, " ", es ? "personas" : "people", " \xB7 ", entities.length, " ", es ? "entidades" : "entities"))), /*#__PURE__*/React.createElement("div", {
      className: "tabs",
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "tab " + (tab === "personas" ? "on" : ""),
      onClick: () => setTab("personas")
    }, es ? "Personas" : "People", " (", personas.length, ")"), /*#__PURE__*/React.createElement("div", {
      className: "tab " + (tab === "entities" ? "on" : ""),
      onClick: () => setTab("entities")
    }, es ? "Entidades" : "Entities", " (", entities.length, ")")), tab === "personas" && /*#__PURE__*/React.createElement("div", {
      className: "card"
    }, personas.length === 0 && /*#__PURE__*/React.createElement("div", {
      className: "empty",
      style: {
        padding: 24
      }
    }, es ? "Sin personas en este condado" : "No people in this county"), personas.map((p, i) => {
      const stageId = stageOf(p);
      const st = stages.find(s => s.id === stageId);
      return /*#__PURE__*/React.createElement("div", {
        key: p.id,
        className: "hover-row",
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 16px",
          cursor: "pointer",
          borderBottom: i < personas.length - 1 ? "1px solid var(--line)" : "none",
          animation: "slideUp .2s ease-out both",
          animationDelay: i * 20 + "ms"
        },
        onClick: () => go({
          name: "person",
          id: p.id
        })
      }, /*#__PURE__*/React.createElement("div", {
        className: "av-circle",
        style: {
          background: p.color,
          flexShrink: 0
        }
      }, initials(fullName(p))), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 600,
          fontSize: 13.5
        }
      }, fullName(p)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11.5,
          color: "var(--ink-4)",
          marginTop: 1
        }
      }, p.role === "otro" ? p.roleOther || t.roles.otro : t.roles[p.role] || p.role, p.city && " · " + p.city)), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 6,
          alignItems: "center"
        }
      }, st && /*#__PURE__*/React.createElement("span", {
        style: {
          padding: "2px 8px",
          borderRadius: 10,
          fontSize: 11,
          fontWeight: 700,
          background: st.bg,
          color: st.color
        }
      }, st.label), p.email && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          color: "var(--ink-4)"
        }
      }, p.email)), /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-right",
        size: 14,
        style: {
          color: "var(--ink-4)",
          flexShrink: 0
        }
      }));
    })), tab === "entities" && /*#__PURE__*/React.createElement("div", {
      className: "card"
    }, entities.length === 0 && /*#__PURE__*/React.createElement("div", {
      className: "empty",
      style: {
        padding: 24
      }
    }, es ? "Sin entidades en este condado" : "No entities in this county"), entities.map((e, i) => /*#__PURE__*/React.createElement("div", {
      key: e.id,
      className: "hover-row",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 16px",
        cursor: "pointer",
        borderBottom: i < entities.length - 1 ? "1px solid var(--line)" : "none",
        animation: "slideUp .2s ease-out both",
        animationDelay: i * 20 + "ms"
      },
      onClick: () => go({
        name: "entity",
        id: e.id
      })
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 36,
        borderRadius: 9,
        background: "#0ea5e918",
        display: "grid",
        placeItems: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "building",
      size: 16,
      style: {
        color: "#0ea5e9"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13.5
      }
    }, e.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-4)",
        marginTop: 1
      }
    }, t.types[e.type] || e.type, e.city && " · " + e.city)), e.phone && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-3)"
      }
    }, e.phone), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 14,
      style: {
        color: "var(--ink-4)",
        flexShrink: 0
      }
    })))));
  }

  // ─── Main county grid ───
  return /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "fadeIn .2s ease-out"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, es ? "Por condado" : "By county"), /*#__PURE__*/React.createElement("div", {
    className: "page-sub"
  }, allCounties.length, " ", es ? "condados / regiones" : "counties / regions", " \xB7 ", totalPersonas, " ", es ? "personas" : "people", " \xB7 ", totalEntities, " ", es ? "entidades" : "entities"))), allCounties.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 48,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      marginBottom: 12
    }
  }, "\uD83D\uDDFA\uFE0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      marginBottom: 6
    }
  }, es ? "Sin datos de condado" : "No county data yet"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--ink-4)",
      fontSize: 13
    }
  }, es ? "Al agregar o editar una persona con ciudad, el sistema detecta el condado automáticamente." : "When adding or editing a person with a city, the system auto-detects the county.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 14,
      marginBottom: 24
    }
  }, allCounties.map((county, i) => {
    const personas = personasByCounty[county] || [];
    const entities = entitiesByCounty[county] || [];
    const total = personas.length + entities.length;
    const color = colorFor(i);
    const activos = personas.filter(p => stageOf(p) !== "inactivo").length;
    const maxTotal = Math.max(...allCounties.map(c => (personasByCounty[c] || []).length + (entitiesByCounty[c] || []).length), 1);
    const pct = Math.round(total / maxTotal * 100);

    // City breakdown within county
    const cityCounts = {};
    personas.forEach(p => {
      if (p.city) cityCounts[p.city] = (cityCounts[p.city] || 0) + 1;
    });
    const topCities = Object.entries(cityCounts).sort((a, b) => b[1] - a[1]).slice(0, 3);
    return /*#__PURE__*/React.createElement("div", {
      key: county,
      className: "card hover-row",
      style: {
        padding: "16px 18px",
        cursor: "pointer",
        animation: "slideUp .3s ease-out both",
        animationDelay: i * 40 + "ms"
      },
      onClick: () => setSelected(county)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 10,
        background: color + "18",
        display: "grid",
        placeItems: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, "\uD83D\uDDFA\uFE0F")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14,
        color: "var(--ink)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, county), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-4)",
        marginTop: 2
      }
    }, personas.length, " ", es ? "personas" : "people", " \xB7 ", entities.length, " ", es ? "entidades" : "entities")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 800,
        color,
        letterSpacing: "-.02em"
      }
    }, total)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 5,
        background: "var(--line)",
        borderRadius: 3,
        overflow: "hidden",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: pct + "%",
        background: color,
        borderRadius: 3,
        transition: "width .6s cubic-bezier(.34,1.56,.64,1)",
        transitionDelay: i * 40 + 200 + "ms"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginBottom: topCities.length > 0 ? 10 : 0
      }
    }, personas.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "var(--ink-3)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: "var(--good)"
      }
    }, activos), " ", es ? "activos" : "active"), personas.length > 0 && personas.filter(p => window.hasContactIssue && window.hasContactIssue(p)).length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: "#f59e0b",
        fontWeight: 600
      }
    }, "\u26A0 ", personas.filter(p => window.hasContactIssue && window.hasContactIssue(p)).length, " ", es ? "por revisar" : "to review")), topCities.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 5,
        flexWrap: "wrap"
      }
    }, topCities.map(([city, cnt]) => /*#__PURE__*/React.createElement("span", {
      key: city,
      style: {
        fontSize: 11,
        background: color + "15",
        color,
        padding: "1px 7px",
        borderRadius: 5,
        fontWeight: 600
      }
    }, city, " ", cnt > 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: .7
      }
    }, "\xB7", cnt)))));
  })), allCounties.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-title"
  }, es ? "Resumen por condado" : "County summary")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      borderBottom: "2px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "left",
      padding: "8px 16px",
      fontSize: 11,
      fontWeight: 700,
      color: "var(--ink-4)",
      textTransform: "uppercase",
      letterSpacing: ".05em"
    }
  }, es ? "Condado" : "County"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "center",
      padding: "8px 12px",
      fontSize: 11,
      fontWeight: 700,
      color: "var(--ink-4)",
      textTransform: "uppercase",
      letterSpacing: ".05em"
    }
  }, es ? "Personas" : "People"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "center",
      padding: "8px 12px",
      fontSize: 11,
      fontWeight: 700,
      color: "var(--ink-4)",
      textTransform: "uppercase",
      letterSpacing: ".05em"
    }
  }, es ? "Activos" : "Active"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "center",
      padding: "8px 12px",
      fontSize: 11,
      fontWeight: 700,
      color: "var(--ink-4)",
      textTransform: "uppercase",
      letterSpacing: ".05em"
    }
  }, es ? "Entidades" : "Entities"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "left",
      padding: "8px 16px",
      fontSize: 11,
      fontWeight: 700,
      color: "var(--ink-4)",
      textTransform: "uppercase",
      letterSpacing: ".05em"
    }
  }, es ? "Ciudades principales" : "Top cities"))), /*#__PURE__*/React.createElement("tbody", null, allCounties.map((county, i) => {
    const personas = personasByCounty[county] || [];
    const entities = entitiesByCounty[county] || [];
    const activos = personas.filter(p => stageOf(p) !== "inactivo").length;
    const cityCounts = {};
    personas.forEach(p => {
      if (p.city) cityCounts[p.city] = (cityCounts[p.city] || 0) + 1;
    });
    const topCities = Object.entries(cityCounts).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([c]) => c);
    return /*#__PURE__*/React.createElement("tr", {
      key: county,
      className: "hover-row",
      style: {
        borderBottom: "1px solid var(--line)",
        cursor: "pointer"
      },
      onClick: () => setSelected(county)
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "10px 16px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: colorFor(i),
        display: "inline-block",
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, county))), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "center",
        padding: "10px 12px",
        fontWeight: 700,
        color: "var(--accent)"
      }
    }, personas.length), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "center",
        padding: "10px 12px",
        fontWeight: 700,
        color: "var(--good)"
      }
    }, activos), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "center",
        padding: "10px 12px",
        color: "#0ea5e9",
        fontWeight: 700
      }
    }, entities.length), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "10px 16px",
        color: "var(--ink-3)",
        fontSize: 12
      }
    }, topCities.join(", ") || "—"));
  })))));
};
window.CountyView = CountyView;

;/* ===== app.jsx ===== */
// PROMEZA CRM â€” App root with auth + settings modal

var {
  useState,
  useMemo,
  useEffect,
  useRef
} = React;

// â”€â”€â”€ Large storage (IndexedDB) â”€â”€â”€
// The encrypted dataset outgrew localStorage's ~5MB limit (QuotaExceededError).
// IndexedDB allows far more, so the big blob lives here instead.
const idbReady = () => new Promise((resolve, reject) => {
  try {
    const req = indexedDB.open("promeza_db", 1);
    req.onupgradeneeded = () => {
      try {
        req.result.createObjectStore("kv");
      } catch (e) {}
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  } catch (e) {
    reject(e);
  }
});
const idbGet = async key => {
  try {
    const db = await idbReady();
    return await new Promise(resolve => {
      const g = db.transaction("kv", "readonly").objectStore("kv").get(key);
      g.onsuccess = () => resolve(g.result === undefined ? null : g.result);
      g.onerror = () => resolve(null);
    });
  } catch (e) {
    return null;
  }
};
const idbSet = async (key, val) => {
  try {
    const db = await idbReady();
    return await new Promise(resolve => {
      const tx = db.transaction("kv", "readwrite");
      tx.objectStore("kv").put(val, key);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => resolve(false);
    });
  } catch (e) {
    return false;
  }
};
// Read the encrypted blob from IndexedDB, migrating any old localStorage copy once.
const DATA_BYTES_KEY = "promeza_data_bytes";
// Load and decrypt the dataset. Stored as raw encrypted bytes in IndexedDB (no
// base64 â€” that char-by-char conversion over megabytes was the main freeze).
// Migrates any older base64 copy (IDB or localStorage) once, then drops it.
const loadDecrypted = async key => {
  try {
    const bytes = await idbGet(DATA_BYTES_KEY);
    if (bytes) return await window.CryptoUtils.decryptBytes(bytes, key);
    let b64 = await idbGet("promeza_data_enc");
    if (!b64) {
      try {
        b64 = localStorage.getItem("promeza_data_enc");
      } catch (e) {}
    }
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
  } catch (e) {
    return null;
  }
};
// Encrypt + store as raw bytes. crypto.subtle is async/off-thread; no base64.
const saveEncrypted = async (json, key) => {
  try {
    return await idbSet(DATA_BYTES_KEY, await window.CryptoUtils.encryptBytes(json, key));
  } catch (e) {
    return false;
  }
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
let _saveWorker = null,
  _saveMsgId = 0;
const _saveWaiters = {};
const getSaveWorker = () => {
  if (_saveWorker) return _saveWorker;
  try {
    const w = new Worker(URL.createObjectURL(new Blob([SAVE_WORKER_SRC], {
      type: "text/javascript"
    })));
    w.onmessage = e => {
      const cb = _saveWaiters[e.data.id];
      if (cb) {
        delete _saveWaiters[e.data.id];
        cb(e.data);
      }
    };
    w.onerror = () => {}; // per-call timeout handles hangs
    _saveWorker = w;
  } catch (e) {
    _saveWorker = null;
  }
  return _saveWorker;
};
const encryptViaWorker = (obj, keyRaw) => new Promise((resolve, reject) => {
  const w = getSaveWorker();
  if (!w) return reject(new Error("no worker"));
  const id = ++_saveMsgId;
  const to = setTimeout(() => {
    if (_saveWaiters[id]) {
      delete _saveWaiters[id];
      reject(new Error("worker timeout"));
    }
  }, 20000);
  _saveWaiters[id] = msg => {
    clearTimeout(to);
    msg.ok ? resolve(msg.bytes) : reject(new Error(msg.err));
  };
  w.postMessage({
    id,
    obj,
    keyRaw
  });
});
// Save via worker; fall back to main-thread on any failure.
const saveEncryptedObj = async (obj, key, keyRaw) => {
  if (keyRaw) {
    try {
      const bytes = await encryptViaWorker(obj, keyRaw);
      return await idbSet(DATA_BYTES_KEY, bytes);
    } catch (e) {/* fall through */}
  }
  return saveEncrypted(JSON.stringify(obj), key);
};
// ── Route <-> URL hash helpers (deep-linking / open-in-new-tab) ──
const _ROUTE_WITH_ID = {
  person: 1,
  entity: 1,
  project: 1
};
const routeToHash = r => {
  if (!r || !r.name) return "";
  return "#" + r.name + (_ROUTE_WITH_ID[r.name] && r.id ? "/" + encodeURIComponent(r.id) : "");
};
const hashToRoute = h => {
  const s = (h || "").replace(/^#\/?/, "").trim();
  if (!s) return null;
  const i = s.indexOf("/");
  const name = i === -1 ? s : s.slice(0, i);
  const id = i === -1 ? null : decodeURIComponent(s.slice(i + 1));
  if (!name) return null;
  return id ? {
    name,
    id
  } : {
    name
  };
};
const sameRoute = (a, b) => !!a && !!b && a.name === b.name && (a.id || "") === (b.id || "");
if (typeof window !== "undefined") window.PROMEZA_HASH = routeToHash;
const clearStoredData = async () => {
  try {
    await idbSet(DATA_BYTES_KEY, null);
  } catch (e) {}
  try {
    await idbSet("promeza_data_enc", null);
  } catch (e) {}
  try {
    localStorage.removeItem("promeza_data_enc");
  } catch (e) {}
};

// Cheap content signature of the Airtable data. The periodic sync uses it to skip
// the expensive merge + full re-render + re-encrypt when nothing actually changed
// (the common case) â€” that recurring work was freezing the UI mid-use.
const atSignature = d => {
  if (!d) return "";
  let h = 0;
  const acc = s => {
    s = s == null ? "" : "" + s;
    for (let i = 0; i < s.length; i++) h = Math.imul(31, h) + s.charCodeAt(i) | 0;
  };
  // Hash the FULL record (every field), not a hand-picked subset. The old version
  // listed specific fields and even referenced fields that don't exist in the model
  // (titulo/roles/gender instead of role), so editing an uncovered field (role, notes,
  // website, state, zip, language, entity type, denominación…) left the signature
  // unchanged → the 2-min sync thought "nothing changed" and never propagated the edit
  // to other devices. We strip local-only annotations (leading "_", uid) so the
  // signature reflects Airtable content identically on every device; being extra
  // sensitive only risks an occasional redundant (but harmless) merge.
  const clean = o => {
    if (!o || typeof o !== "object") return o;
    const c = {};
    for (const k in o) {
      if (k.charCodeAt(0) !== 95 && k !== "uid") c[k] = o[k];
    }
    return c;
  };
  (d.personas || []).forEach(p => acc(JSON.stringify(clean(p))));
  (d.entities || []).forEach(e => acc(JSON.stringify(clean(e))));
  return (d.personas ? d.personas.length : 0) + ":" + (d.entities ? d.entities.length : 0) + ":" + h;
};

// Church entities whose imported NAME is actually a phone number. Correct
// name/email/zip come from the source spreadsheet (Churches in USA.xlsx),
// matched by phone digits. data_churches.js missed a couple, so these are explicit.
const ENTITY_PHONE_FIX = {
  "8187470347": {
    name: "Iglesia Siervos de Dios",
    email: "mart.medina542@gmail.com",
    zip: "91324"
  },
  "7145431460": {
    name: "Iglesia de Dios Pentecostal MI",
    email: "pastor.samuelmejia@gmail.com",
    zip: "92706"
  },
  "7143658341": {
    name: "Iglesia Fe y Amistad Cristiana",
    email: "joelbac@yahoo.com",
    zip: "92703"
  },
  "13038706055": {
    name: "Iglesia Mosaico de Aurora",
    email: "reidhettich@gmail.com",
    zip: "80010"
  },
  "8058746063": {
    name: "Iglesia Llamada Final Oxnard",
    email: "info@oasis1079.com",
    zip: "93033"
  },
  "5625078614": {
    name: "Iglesia Mi Fortaleza / Plymouth Church",
    email: "edgardomorenov@gmail.com",
    zip: "90601"
  }
};

// â”€â”€â”€ Settings Modal â”€â”€â”€

const SettingsModal = ({
  t,
  lang,
  data,
  cryptoKey,
  onClose,
  onLogout,
  onRestoreData,
  onForcePull
}) => {
  const [ejsCfg, setEjsCfg] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("promeza_ejs")) || {};
    } catch {
      return {};
    }
  });
  const [atCfg, setAtCfg] = useState(() => window.AIRTABLE.getConfig());
  const [syncStatus, setSyncStatus] = useState("");
  const [syncing, setSyncing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState("airtable");
  const [secMsg, setSecMsg] = useState(null);
  const [secLoading, setSecLoading] = useState(false);
  const [authorizedEmails, setAuthorizedEmails] = useState(() => {
    try {
      return (JSON.parse(localStorage.getItem(window.CryptoUtils?.MSAL_CONFIG_KEY)) || {}).authorizedEmails || "";
    } catch {
      return "";
    }
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
      segments: data.segments || []
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "promeza-backup-" + new Date().toISOString().slice(0, 10) + ".json";
    a.click();
    URL.revokeObjectURL(url);
  };
  const doImport = file => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (!parsed.personas || !parsed.entities) {
          setBackupMsg({
            type: "err",
            text: lang === "es" ? "Archivo invÃ¡lido: faltan personas o entidades" : "Invalid file: missing personas or entities"
          });
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
            segments: parsed.segments || []
          });
          setBackupMsg({
            type: "ok",
            text: lang === "es" ? `âœ“ Datos restaurados: ${parsed.personas.length} personas, ${parsed.entities.length} entidades` : `âœ“ Data restored: ${parsed.personas.length} people, ${parsed.entities.length} entities`
          });
        }
      } catch {
        setBackupMsg({
          type: "err",
          text: lang === "es" ? "Error al leer el archivo" : "Error reading file"
        });
      }
    };
    reader.readAsText(file);
  };
  const st = t.settings || {};
  const tabs = [{
    id: "airtable",
    label: "Airtable"
  }, {
    id: "emailjs",
    label: "EmailJS"
  }, {
    id: "security",
    label: "Seguridad"
  }, {
    id: "account",
    label: lang === "es" ? "Cuenta" : "Account"
  }, {
    id: "backup",
    label: lang === "es" ? "Respaldo" : "Backup"
  }];
  const doChangePassword = async () => {
    setSecMsg(null);
    if (!curPass || !newPass || !confirmPass) {
      setSecMsg({
        type: "err",
        text: "Completa todos los campos."
      });
      return;
    }
    if (newPass !== confirmPass) {
      setSecMsg({
        type: "err",
        text: "Las contraseÃ±as nuevas no coinciden."
      });
      return;
    }
    if (newPass.length < 8) {
      setSecMsg({
        type: "err",
        text: "MÃ­nimo 8 caracteres."
      });
      return;
    }
    setSecLoading(true);
    try {
      const result = await window.CryptoUtils.changePassword(curPass, newPass, data);
      if (result.error) {
        setSecMsg({
          type: "err",
          text: result.error
        });
      } else {
        setSecMsg({
          type: "ok",
          text: "ContraseÃ±a cambiada correctamente."
        });
        setCurPass("");
        setNewPass("");
        setConfirmPass("");
      }
    } catch (err) {
      setSecMsg({
        type: "err",
        text: "Error: " + err.message
      });
    }
    setSecLoading(false);
  };
  const saveAll = () => {
    localStorage.setItem("promeza_ejs", JSON.stringify(ejsCfg));
    window.AIRTABLE.saveConfig(atCfg);
    // Save authorized emails into MSAL config
    const msalKey = window.CryptoUtils?.MSAL_CONFIG_KEY || "promeza_msal_cfg";
    const msalCfg = (() => {
      try {
        return JSON.parse(localStorage.getItem(msalKey)) || {};
      } catch {
        return {};
      }
    })();
    localStorage.setItem(msalKey, JSON.stringify({
      ...msalCfg,
      authorizedEmails
    }));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };
  const doSync = async () => {
    setSyncing(true);
    setSyncStatus("");
    try {
      const result = await window.AIRTABLE.syncAll(data);
      setSyncStatus("âœ“ " + (st.syncDone || "Sync completed") + " â€” " + result.personas.created + " personas creadas, " + result.personas.updated + " actualizadas Â· " + result.entities.created + " entidades creadas, " + result.entities.updated + " actualizadas");
    } catch (err) {
      setSyncStatus("âš  " + (st.syncError || "Error:") + " " + err.message);
    }
    setSyncing(false);
  };
  const lastSync = window.AIRTABLE.getLastSync();
  const lastSyncFmt = lastSync ? new Date(lastSync).toLocaleString(lang === "en" ? "en-US" : "es-ES") : st.never || "Nunca";
  const Field = ({
    label,
    value,
    onChange,
    type = "text",
    placeholder,
    mono,
    hint
  }) => /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", null, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value || "",
    onChange: e => onChange(e.target.value),
    placeholder: placeholder,
    style: mono ? {
      fontFamily: "var(--font-mono)",
      fontSize: 12
    } : {}
  }), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-4)",
      marginTop: 3,
      lineHeight: 1.4
    }
  }, hint));
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-veil",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      width: "min(640px,100%)"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16
    }
  }, st.title || "ConfiguraciÃ³n"), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderBottom: "1px solid var(--line)"
    }
  }, tabs.map(tb => /*#__PURE__*/React.createElement("button", {
    key: tb.id,
    onClick: () => setTab(tb.id),
    style: {
      padding: "10px 16px",
      border: 0,
      background: "transparent",
      fontFamily: "inherit",
      fontSize: 13,
      fontWeight: 500,
      color: tab === tb.id ? "var(--accent-700)" : "var(--ink-3)",
      borderBottom: "2px solid " + (tab === tb.id ? "var(--accent)" : "transparent"),
      cursor: "pointer"
    }
  }, tb.label))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, tab === "airtable" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#f0fdf4",
      border: "1px solid #bbf7d0",
      borderRadius: 8,
      padding: "12px 16px",
      marginBottom: 16,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: "#10b981",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    style: {
      color: "#fff"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: "#166534"
    }
  }, lang === "es" ? "Conectado a la base compartida" : "Connected to shared base"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#166534",
      opacity: 0.8
    }
  }, "PROMEZA CRM \xC2\xB7 app0MYHVyhTYFsDqV"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-soft)",
      borderRadius: 8,
      padding: "10px 14px",
      marginBottom: 14,
      fontSize: 12,
      color: "var(--ink-3)"
    }
  }, st.lastSync || "Ãšltima sync:", " ", /*#__PURE__*/React.createElement("strong", null, lastSyncFmt)), syncStatus && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12,
      padding: "10px 14px",
      borderRadius: 8,
      fontSize: 12.5,
      background: syncStatus.startsWith("âœ“") ? "#f0fdf4" : "#fff5f5",
      color: syncStatus.startsWith("âœ“") ? "#166534" : "#991b1b",
      border: "1px solid " + (syncStatus.startsWith("âœ“") ? "#bbf7d0" : "#fecaca")
    }
  }, syncStatus), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      width: "100%"
    },
    disabled: syncing,
    onClick: doSync
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sync"
  }), " ", syncing ? "Enviandoâ€¦" : "â¬† Enviar mis datos a Airtable"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: {
      width: "100%",
      fontWeight: 600
    },
    disabled: syncing,
    onClick: () => {
      if (onForcePull) {
        onClose();
        onForcePull();
      }
    }
  }, "\xE2\xAC\u2021 Recibir cambios de Airtable"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-4)",
      lineHeight: 1.5,
      padding: "4px 2px"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "\xE2\xAC\u2020 Enviar"), " = sube TUS datos a Airtable (hazlo desde la MacBook).", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "\xE2\xAC\u2021 Recibir"), " = descarga lo que hay en Airtable (hazlo desde Windows)."))), tab === "emailjs" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--accent-50)",
      border: "1px solid var(--accent-100)",
      borderRadius: 8,
      padding: "10px 14px",
      marginBottom: 16,
      fontSize: 12.5,
      color: "var(--ink-2)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, lang === "es" ? "EmailJS se usa para recuperar contraseÃ±a." : "EmailJS is used for password recovery."), " ", lang === "es" ? "Crea una cuenta gratis en" : "Create a free account at", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.emailjs.com/",
    target: "_blank",
    rel: "noopener"
  }, "emailjs.com"), " ", lang === "es" ? "y una plantilla con la variable" : "and a template with the variable", " ", /*#__PURE__*/React.createElement("code", {
    style: {
      background: "var(--accent-100)",
      padding: "0 4px",
      borderRadius: 3
    }
  }, "{{code}}")), /*#__PURE__*/React.createElement(Field, {
    label: "Service ID",
    value: ejsCfg.serviceId,
    onChange: v => setEjsCfg(c => ({
      ...c,
      serviceId: v
    })),
    placeholder: "service_xxxxxxx",
    mono: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Template ID",
    value: ejsCfg.templateId,
    onChange: v => setEjsCfg(c => ({
      ...c,
      templateId: v
    })),
    placeholder: "template_xxxxxxx",
    mono: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Public Key",
    value: ejsCfg.publicKey,
    onChange: v => setEjsCfg(c => ({
      ...c,
      publicKey: v
    })),
    placeholder: "xxxxxxxxxxxxxxxxxxxx",
    mono: true
  })), tab === "security" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-soft)",
      borderRadius: 10,
      padding: "12px 16px",
      marginBottom: 18,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--accent-700)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0110 0v4"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Microsoft Entra ID \xC2\xB7 AES-256"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)"
    }
  }, "Auto-cierre: 1 hora de inactividad \xC2\xB7 Solo @promeza.com"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 6
    }
  }, "Correos autorizados"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-3)",
      marginBottom: 8
    }
  }, "Deja vac\xC3\xADo para permitir cualquier cuenta @promeza.com. Si escribes correos espec\xC3\xADficos, solo ellos podr\xC3\xA1n entrar."), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: authorizedEmails,
    onChange: e => setAuthorizedEmails(e.target.value),
    placeholder: "vanessa@promeza.com\nbetty@promeza.com\njuan@promeza.com",
    rows: 4,
    style: {
      width: "100%",
      fontFamily: "var(--mono, monospace)",
      fontSize: 12,
      resize: "vertical"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-4)",
      marginBottom: 18
    }
  }, "Un correo por l\xC3\xADnea o separados por coma. Se guarda al presionar \"Guardar configuraci\xC3\xB3n\"."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Registro de accesos"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: {
      fontSize: 11,
      padding: "3px 10px"
    },
    onClick: () => setAccessLog(window.AIRTABLE?.getAccessLog() || [])
  }, "Actualizar")), accessLog.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-3)",
      textAlign: "center",
      padding: "20px 0"
    }
  }, "Sin registros a\xC3\xBAn") : /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 260,
      overflowY: "auto",
      border: "1px solid var(--line)",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--bg-soft)",
      position: "sticky",
      top: 0
    }
  }, ["Fecha", "Usuario", "AcciÃ³n", "Dispositivo", "Localidad"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "6px 10px",
      textAlign: "left",
      fontWeight: 600,
      color: "var(--ink-2)",
      borderBottom: "1px solid var(--line)",
      whiteSpace: "nowrap"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, accessLog.map((e, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "5px 10px",
      color: "var(--ink-3)",
      whiteSpace: "nowrap"
    }
  }, new Date(e.ts).toLocaleString("es")), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "5px 10px",
      fontWeight: 500
    }
  }, (e.email || "").split("@")[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "5px 10px"
    }
  }, e.action), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "5px 10px",
      color: "var(--ink-3)"
    }
  }, e.device), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "5px 10px",
      color: "var(--ink-3)"
    }
  }, e.location)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      borderTop: "1px solid var(--line)",
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: {
      color: "var(--bad)",
      borderColor: "var(--bad)"
    },
    onClick: () => {
      if (window.confirm("Â¿Cerrar esta sesiÃ³n?")) {
        clearSession();
        window.CryptoUtils?.clearSessionKey ? window.CryptoUtils.clearSessionKey() : (localStorage.removeItem("promeza_sk"), sessionStorage.removeItem("promeza_sk"));
        onLogout();
      }
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out"
  }), " Cerrar esta sesi\xC3\xB3n"))), tab === "account" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-soft)",
      borderRadius: 10,
      padding: "14px 16px",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      marginBottom: 4
    }
  }, lang === "es" ? "Cuenta activa" : "Active account"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: "var(--accent)"
    }
  }, "P"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "Promeza"))), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    style: {
      color: "var(--bad)",
      borderColor: "var(--bad)"
    },
    onClick: () => {
      if (confirm(st.logoutConfirm || "Â¿Cerrar sesiÃ³n?")) {
        clearSession();
        onLogout();
      }
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out"
  }), " ", st.logout || "Cerrar sesiÃ³n")), tab === "backup" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 4
    }
  }, lang === "es" ? "Exportar datos" : "Export data"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-3)",
      marginBottom: 10
    }
  }, lang === "es" ? "Descarga una copia completa de todos tus datos como archivo JSON. GuÃ¡rdala en un lugar seguro." : "Download a complete copy of all your data as a JSON file. Keep it in a safe place."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-soft)",
      borderRadius: 8,
      padding: "10px 14px",
      marginBottom: 10,
      fontSize: 12,
      color: "var(--ink-3)"
    }
  }, data.personas.length, " ", lang === "es" ? "personas" : "people", " \xC2\xB7 ", data.entities.length, " ", lang === "es" ? "entidades" : "entities", " \xC2\xB7 ", (data.projects || []).length, " ", lang === "es" ? "proyectos" : "projects"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: doExport
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download"
  }), " ", lang === "es" ? "Descargar backup JSON" : "Download JSON backup")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line)",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 4
    }
  }, lang === "es" ? "Importar / Restaurar" : "Import / Restore"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff5f5",
      border: "1px solid #fecaca",
      borderRadius: 8,
      padding: "10px 14px",
      marginBottom: 10,
      fontSize: 12,
      color: "#991b1b"
    }
  }, "\xE2\u0161\xA0 ", lang === "es" ? "Esto reemplazarÃ¡ TODOS los datos actuales." : "This will replace ALL current data."), /*#__PURE__*/React.createElement("label", {
    className: "btn",
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload"
  }), " ", lang === "es" ? "Seleccionar archivo de respaldoâ€¦" : "Select backup fileâ€¦", /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: ".json",
    style: {
      display: "none"
    },
    onChange: e => {
      doImport(e.target.files[0]);
      e.target.value = "";
    }
  }))), backupMsg && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: "10px 14px",
      borderRadius: 8,
      fontSize: 12.5,
      background: backupMsg.type === "ok" ? "#f0fdf4" : "#fff5f5",
      color: backupMsg.type === "ok" ? "#166534" : "#991b1b",
      border: "1px solid " + (backupMsg.type === "ok" ? "#bbf7d0" : "#fecaca")
    }
  }, backupMsg.text))), /*#__PURE__*/React.createElement("div", {
    className: "modal-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onClose
  }, t.common.cancel), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: saveAll
  }, saved ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", st.saved || "Guardado") : st.save || "Guardar configuraciÃ³n"))));
};

// â”€â”€â”€ Changelog helpers â”€â”€â”€

const PERSON_FIELD_LABELS = {
  first: "Nombre",
  last: "Apellido",
  email: "Email",
  phone: "TelÃ©fono",
  role: "Cargo",
  status: "Estado",
  address: "DirecciÃ³n",
  city: "Ciudad",
  state: "Estado/Prov.",
  country: "PaÃ­s",
  zip: "ZIP",
  website: "Sitio web",
  birthday: "CumpleaÃ±os",
  lastContact: "Ãšltimo contacto",
  language: "Idioma",
  tags: "Etiquetas",
  entities: "Entidades",
  stage: "Etapa",
  source: "Fuente",
  nextAction: "PrÃ³xima acciÃ³n"
};
const ENTITY_FIELD_LABELS = {
  name: "Nombre",
  type: "Tipo",
  denominacion: "DenominaciÃ³n",
  email: "Email",
  phone: "TelÃ©fono",
  address: "DirecciÃ³n",
  city: "Ciudad",
  state: "Estado/Prov.",
  country: "PaÃ­s",
  zip: "ZIP",
  website: "Sitio web",
  founded: "AÃ±o fundaciÃ³n",
  size: "TamaÃ±o",
  tags: "Etiquetas",
  status: "Estado"
};
const computeChanges = (oldObj, updates, fieldLabels) => {
  const changes = [];
  for (const key of Object.keys(updates)) {
    const label = fieldLabels[key];
    if (!label) continue;
    const oldVal = oldObj[key];
    const newVal = updates[key];
    if (key === "tags" || key === "entities") {
      if (JSON.stringify(oldVal) !== JSON.stringify(newVal)) changes.push({
        field: label,
        type: key
      });
    } else {
      const o = String(oldVal ?? ""),
        n = String(newVal ?? "");
      if (o !== n) changes.push({
        field: label,
        old: o,
        new: n
      });
    }
  }
  return changes;
};

// â”€â”€â”€ Reminders Modal â”€â”€â”€

const RemindersModal = ({
  lang,
  data,
  onClose,
  go
}) => {
  const today = new Date().toISOString().slice(0, 10);
  const todayMMDD = today.slice(5);
  const birthdaysToday = data.personas.filter(p => p.birthday && p.birthday.slice(5) === todayMMDD && p.status !== "inactivo");
  const overdueTasks = [];
  Object.entries(data.tasks || {}).forEach(([pid, tasks]) => {
    tasks.forEach(tk => {
      if (!tk.done && tk.due && tk.due < today) {
        const p = data.personas.find(x => x.id === pid);
        overdueTasks.push({
          ...tk,
          personaName: p ? p.first + " " + (p.last || "") : ""
        });
      }
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-veil",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      width: "min(480px,100%)"
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, lang === "es" ? "Recordatorios de hoy" : "Today's reminders"), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, birthdaysToday.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: "#f59e0b",
      marginBottom: 8,
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, "\xF0\u0178\u017D\u201A ", lang === "es" ? "CumpleaÃ±os hoy" : "Birthdays today"), birthdaysToday.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "hover-row",
    onClick: () => {
      go({
        name: "person",
        id: p.id
      });
      onClose();
    },
    style: {
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "av-circle",
    style: {
      background: p.color,
      width: 32,
      height: 32,
      fontSize: 11,
      flexShrink: 0
    }
  }, ((p.first || "")[0] || "") + (p.last ? p.last[0] || "" : "")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, p.first, " ", p.last), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-3)"
    }
  }, p.role)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\xF0\u0178\u017D\u201A")))), overdueTasks.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: "#ef4444",
      marginBottom: 8,
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, "\xE2\u0161\xA0 ", overdueTasks.length, " ", lang === "es" ? "tarea" + (overdueTasks.length !== 1 ? "s vencidas" : " vencida") : "overdue task" + (overdueTasks.length !== 1 ? "s" : "")), overdueTasks.slice(0, 5).map(tk => /*#__PURE__*/React.createElement("div", {
    key: tk.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "7px 10px",
      background: "#fff5f5",
      borderRadius: 7,
      marginBottom: 4,
      border: "1px solid #fecaca"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    style: {
      color: "#ef4444",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 12.5,
      fontWeight: 500
    }
  }, tk.text), tk.personaName && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "#b91c1c",
      fontWeight: 600
    }
  }, tk.personaName), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontFamily: "var(--font-mono)",
      color: "#ef4444",
      fontWeight: 700
    }
  }, tk.due))), overdueTasks.length > 5 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-3)",
      textAlign: "center",
      marginTop: 4
    }
  }, "+", overdueTasks.length - 5, " ", lang === "es" ? "mÃ¡s" : "more")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: "flex-end",
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => {
      go({
        name: "tasks"
      });
      onClose();
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  }), " ", lang === "es" ? "Ver tareas" : "View tasks"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onClose
  }, lang === "es" ? "Entendido" : "Got it")))));
};

// â”€â”€â”€ Error Boundary â€” prevents a view crash from blanking the whole page â”€â”€â”€

class ViewErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(e) {
    return {
      error: e
    };
  }
  componentDidCatch(e) {
    console.error("View crash:", e);
  }
  render() {
    if (this.state.error) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
          gap: 16,
          padding: 32,
          textAlign: "center"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 32
        }
      }, "\xE2\u0161\xA0\xEF\xB8\x8F"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 16,
          fontWeight: 700,
          color: "var(--ink)"
        }
      }, "Algo sali\xC3\xB3 mal en esta vista"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: "var(--ink-4)",
          maxWidth: 400
        }
      }, String(this.state.error)), /*#__PURE__*/React.createElement("button", {
        onClick: () => this.setState({
          error: null
        }),
        style: {
          padding: "10px 20px",
          background: "var(--accent)",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: 600,
          fontSize: 14
        }
      }, "Reintentar"));
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
  const [route, setRoute] = useState({
    name: "home"
  });
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
  const computeUID = id => {
    let h = 0;
    for (let i = 0; i < id.length; i++) h = Math.imul(31, h) + id.charCodeAt(i) | 0;
    return String(Math.abs(h) % 9000000 + 1000000);
  };
  const withUIDs = arr => arr.map(x => x.uid ? x : {
    ...x,
    uid: computeUID(x.id)
  });
  const [cryptoKey, setCryptoKey] = useState(null);
  const [dataReady, setDataReady] = useState(false);
  const [data, setData] = useState(null);
  const [needsUnlock, setNeedsUnlock] = useState(false);
  const freshData = () => {
    const pd = window.PROMEZA_DATA || {};
    return {
      personas: withUIDs([...(pd.personas || [])]),
      entities: withUIDs([...(pd.entities || [])]),
      comments: {
        ...(pd.comments || {})
      },
      interactions: {},
      tasks: {
        ...(pd.tasks || {})
      },
      changelog: {},
      segments: [],
      attachments: {},
      projects: [],
      campaigns: [],
      goals: [],
      calendarEvents: []
    };
  };
  const processLoadedData = (parsed, fast = false) => {
    // Normalize fields only â€” do NOT merge PROMEZA_DATA into existing data.
    // PROMEZA_DATA is only used as a fallback when localStorage has no real data.
    const hasDigit = v => /\d/.test(String(v || ""));

    // Strip float suffix: "91706.0" â†’ "91706", "35815.0" â†’ "35815"
    const stripFloat = v => String(v || "").replace(/^(\d+)\.0+$/, "$1").trim();

    // Clean a phone string: strip float suffix, reject if no digits remain
    const normalizePhoneStr = v => {
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
        result = parts.map((v, i) => ({
          value: v,
          label: i === 0 ? "Personal" : "Otro"
        }));
      }
      if (phone2) {
        const p2 = normalizePhoneStr(String(phone2).trim());
        if (p2 && !result.some(ph => ph.value === p2)) result.push({
          value: p2,
          label: "Otro"
        });
      }
      return result;
    };

    // Build emails array: existing emails[] OR legacy email string. Also merges email2.
    const buildEmails = (emails, email, email2) => {
      const result = Array.isArray(emails) && emails.length > 0 ? [...emails] : email && email.trim() ? [{
        value: email.trim(),
        label: "Personal"
      }] : [];
      if (email2 && email2.trim()) {
        const e2 = email2.trim();
        if (!result.some(e => (e.value || "").toLowerCase() === e2.toLowerCase())) {
          result.push({
            value: e2,
            label: "Otro"
          });
        }
      }
      return result;
    };

    // Zip: strip float suffix, then move city-names in zip field to city.
    const fixZipCity = (zip, city) => {
      const z = stripFloat(zip);
      const c = String(city || "").trim();
      if (z && !hasDigit(z)) return {
        zip: "",
        city: c || z
      };
      return {
        zip: z,
        city: c
      };
    };

    // FAST PATH (cache load): data restored from the encrypted local cache was already
    // normalized when it was saved, so re-running the per-record phone/email/zip rebuild
    // over ~24k records on every open is wasted work that keeps the app blank longer.
    // When `fast` is set, records that already look normalized (have phones[]/emails[]
    // arrays) are passed through untouched. Fresh Airtable loads / imports still get the
    // full normalization (fast=false).
    const outPersonas = withUIDs(parsed.personas || []).map(p => {
      if (fast && Array.isArray(p.phones) && Array.isArray(p.emails)) {
        return {
          ...p,
          entities: p.entities || [],
          tags: p.tags || []
        };
      }
      const {
        zip,
        city
      } = fixZipCity(p.zip, p.city);
      return {
        ...p,
        phone: normalizePhoneStr(p.phone),
        phones: buildPhones(p.phones, p.phone, p.phone2),
        emails: buildEmails(p.emails, p.email, p.email2),
        entities: p.entities || [],
        tags: p.tags || [],
        zip,
        city
      };
    });
    const outEntities = withUIDs(parsed.entities || []).map(e => {
      if (fast && Array.isArray(e.phones) && Array.isArray(e.emails)) {
        return {
          ...e,
          schedule: e.schedule || [],
          tags: e.tags || []
        };
      }
      const {
        zip,
        city
      } = fixZipCity(e.zip, e.city);
      return {
        ...e,
        phone: normalizePhoneStr(e.phone),
        phones: buildPhones(e.phones, e.phone, e.phone2),
        emails: buildEmails(e.emails, e.email, e.email2),
        schedule: e.schedule || [],
        tags: e.tags || [],
        zip,
        city
      };
    });
    // PERSIST HISTORY: each record now carries its own `changelog` inside _data (so it
    // survives reloads/clean-slate and is shared across devices via Airtable). Rebuild
    // the top-level changelog map from the records, keeping whichever copy has MORE
    // entries (a device that saw more history wins) so nothing is lost.
    const changelog = {
      ...(parsed.changelog || {})
    };
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
      calendarEvents: parsed.calendarEvents || []
    };
  };
  const [atSyncing, setAtSyncing] = useState(false);
  const [atSyncMsg, setAtSyncMsg] = useState(null); // { type:"ok"|"warn"|"err", text }
  const lastSyncSigRef = useRef(""); // signature of last-applied Airtable data (skip no-op syncs)
  const dupLoadedRef = useRef(false); // duplicate-review state has been loaded (don't save before then)
  const projLoadedRef = useRef(false); // shared projects have been loaded from Airtable
  const keyRawRef = useRef(null); // raw AES key bytes for the off-thread save worker
  const savingRef = useRef(false); // a save is in flight (avoid overlapping heavy saves)
  const lastVisSyncRef = useRef(0); // throttle sync-on-tab-focus
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
    const canonicalById = new Map((window.PROMEZA_DATA && window.PROMEZA_DATA.personas || []).map(p => [p.id, p]));

    // Detect roles that got corrupted by the import (a city/county landed in the
    // role field, e.g. ["San Francisco"], ["Kern"]). A role is only "valid" if
    // every entry is a known role key. Corrupted ones are restored from data.js.
    const VALID_ROLES = new Set(["pastor", "co-pastor", "copastor", "lider", "lÃ­der", "miembro", "tesorero", "ujier", "adorador", "musico", "mÃºsico", "comunicador", "influencer", "presidente", "vicepresidente", "fundador", "secretario", "diacono", "diÃ¡cono", "maestro", "director-ministerio", "voluntario", "evangelista", "misionero", "otro"]);
    const rolesLookValid = arr => Array.isArray(arr) && arr.length > 0 && arr.every(r => VALID_ROLES.has((r || "").toLowerCase().trim()));
    // A name that looks like an imported interaction note (date + text), not a real name.
    const looksLikeNote = s => !s || /\d{1,2}\/\d{1,2}|Spoke |Talked |services on|Cannot Go|movie project|told (him|her)/i.test(s);

    // Merge helper: pick the non-empty value, preferring the base entity's value
    const pick = (base, fallback) => base && base.length > 0 ? base : fallback || [];
    const pickStr = (base, fallback) => base || fallback || "";

    // Some church entities were imported column-shifted: the NAME field holds the
    // phone number (e.g. "(805) 874-6063"). Match by phone digits to data_churches.js
    // to restore the real name and contact fields.
    const churchByPhone = {};
    (window.PROMEZA_CHURCHES && window.PROMEZA_CHURCHES.entities || []).forEach(e => {
      const d = (e.phone || "").replace(/\D/g, "");
      if (d.length >= 7 && !churchByPhone[d]) churchByPhone[d] = e;
    });
    const looksLikePhone = s => /^[\s(+]*\d[\d()+\-. ]{6,}$/.test((s || "").trim());
    const fixEntityName = e => {
      if (!e || !looksLikePhone(e.name)) return e;
      const d = (e.name || "").replace(/\D/g, "");
      const f = ENTITY_PHONE_FIX[d];
      if (f) return {
        ...e,
        name: f.name,
        phone: e.name,
        phones: [{
          value: e.name,
          label: "Principal"
        }],
        email: f.email,
        emails: f.email ? [{
          value: f.email,
          label: "Principal"
        }] : [],
        zip: f.zip,
        type: e.type || "iglesia"
      };
      const src = churchByPhone[d];
      if (!src) return e;
      return {
        ...e,
        name: src.name,
        phone: e.phone || src.phone,
        email: e.email || src.email,
        city: e.city || src.city,
        state: e.state || src.state,
        zip: e.zip || src.zip,
        type: e.type || src.type || "iglesia"
      };
    };
    const mergedPersonas = prev.personas.map(local => {
      const remote = atPersonaMap.get(local.id);
      if (!remote) return isGhost(local, trustPersonas) ? null : local;
      if (local._localSavedAt && local._localSavedAt > prevLastLoad) {
        // Local was edited after the last Airtable load â†’ keep local, update _atId
        return {
          ...local,
          _atId: remote._atId || local._atId
        };
      }
      // Remote is source of truth, but use data.js for identity fields on p5xxx contacts
      // (Airtable was synced from corrupted data and may have wrong names/titles)
      const canonical = local.id && local.id.match(/^p\d+$/) ? canonicalById.get(local.id) : null;
      // Only trust data.js identity fields when its name looks clean â€” never let a
      // stale/corrupted data.js (note text in the name) override a clean Airtable value.
      const canonClean = canonical && !looksLikeNote(canonical.first);
      // Helper: pick first non-empty value
      const geo = (...vs) => vs.find(v => v !== undefined && v !== null && v !== "") || "";
      return {
        ...remote,
        _atId: remote._atId || local._atId,
        first: canonClean ? canonical.first || remote.first : remote.first,
        last: canonClean ? canonical.last !== undefined ? canonical.last : remote.last : remote.last,
        titulo: canonClean ? canonical.titulo || remote.titulo : remote.titulo,
        // Restore a corrupted role (city/county stuck in the role field) from data.js,
        // but keep the remote role when it is a genuine, valid role.
        roles: canonical && canonical.roles && !rolesLookValid(remote.roles) ? canonical.roles : remote.roles,
        roleOther: canonical && canonical.roles && !rolesLookValid(remote.roles) ? canonical.roleOther || "" : remote.roleOther,
        // Airtable's contact columns are column-shifted for p#### imports (e.g. the
        // phone field holds a name like "Claudio"). data.js is authoritative â€” restore
        // phone/email/website from it so search and display use the real values.
        phone: canonClean ? canonical.phone !== undefined ? canonical.phone : remote.phone : remote.phone,
        phone2: canonClean ? canonical.phone2 !== undefined ? canonical.phone2 : remote.phone2 : remote.phone2,
        email: canonClean ? canonical.email !== undefined ? canonical.email : remote.email : remote.email,
        email2: canonClean ? canonical.email2 !== undefined ? canonical.email2 : remote.email2 : remote.email2,
        website: canonClean ? canonical.website || remote.website : remote.website,
        // Geographic fields: Airtable often has these empty â€” use canonical (data.js) or local as fallback
        state: canonical ? geo(canonical.state, remote.state, local.state) : geo(remote.state, local.state),
        city: canonical ? geo(canonical.city, remote.city, local.city) : geo(remote.city, local.city),
        county: canonical ? geo(canonical.county, remote.county, local.county) : geo(remote.county, local.county),
        zip: canonical ? geo(canonical.zip, remote.zip, local.zip) : geo(remote.zip, local.zip),
        phones: canonClean ? [canonical.phone, canonical.phone2].filter(v => v && /\d/.test(v)).map((v, i) => ({
          value: v,
          label: i === 0 ? "Personal" : "Otro"
        })) : pick(remote.phones, local.phones),
        emails: canonClean ? [canonical.email, canonical.email2].filter(v => v && v.indexOf("@") >= 0).map((v, i) => ({
          value: v,
          label: i === 0 ? "Personal" : "Otro"
        })) : pick(remote.emails, local.emails),
        addressLabel: remote.addressLabel || local.addressLabel || "domicilio"
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
          emails: pick(local.emails, remote.emails)
        };
      }
      // Remote is source of truth, but never blank out complex fields if only one side has them
      return fixEntityName({
        ...remote,
        _atId: remote._atId || local._atId,
        schedule: pick(remote.schedule, local.schedule),
        denominacion: pickStr(remote.denominacion, local.denominacion),
        phones: pick(remote.phones, local.phones),
        emails: pick(remote.emails, local.emails)
      });
    }).filter(Boolean);
    const localEntityIds = new Set(prev.entities.map(e => e.id));
    const remoteOnlyEntities = atData.entities.filter(e => !localEntityIds.has(e.id)).map(e => fixEntityName({
      ...e,
      schedule: e.schedule || [],
      phones: e.phones || [],
      emails: e.emails || []
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
    const changelog = {
      ...prev.changelog
    };
    [...finalPersonas, ...finalEntities].forEach(r => {
      if (Array.isArray(r.changelog) && r.changelog.length > (changelog[r.id] || []).length) changelog[r.id] = r.changelog;
    });
    return {
      ...prev,
      personas: finalPersonas,
      entities: finalEntities,
      changelog
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
        try {
          localStorage.setItem("promeza_delta_since", nowIso);
        } catch (e) {}
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
          const pn = trustP ? d.personas.filter(p => _pIds.has(p.id) || !p._atId || p._localSavedAt && p._localSavedAt > _cut) : d.personas;
          const en = trustE ? d.entities.filter(e => _eIds.has(e.id) || !e._atId || e._localSavedAt && e._localSavedAt > _cut) : d.entities;
          if (pn.length === d.personas.length && en.length === d.entities.length) return d;
          return {
            ...d,
            personas: pn,
            entities: en
          };
        });
        const sig = atSignature(atData);
        if (sig === lastSyncSigRef.current) {
          // Airtable unchanged since last sync â€” skip the heavy merge/re-render/
          // re-encrypt so the UI doesn't freeze while the user is working.
          return;
        }
        lastSyncSigRef.current = sig;
        // Refresh the shared tombstone list so deletions from other devices are applied.
        try {
          const ids = await window.AIRTABLE.loadAppState("deletedIds");
          if (Array.isArray(ids)) ids.forEach(id => deletedIdsRef.current.add(id));
        } catch (e) {}
        setData(prev => mergeFromAirtable(atData, prev, prevLastLoad, true));
        setAtSyncMsg({
          type: "ok",
          text: "â†“ Airtable: " + atData.personas.length + " personas Â· " + atData.entities.length + " entidades"
        });
      } else if (atData) {
        setAtSyncMsg({
          type: "warn",
          text: "âš  Airtable vacÃ­o â€” haz 'Sincronizar todo' desde la MacBook primero"
        });
      } else {
        setAtSyncMsg({
          type: "err",
          text: "âœ— No se pudo leer Airtable â€” revisa conexiÃ³n"
        });
      }
    }).catch(e => {
      setAtSyncMsg({
        type: "err",
        text: "âœ— Error Airtable: " + e.message
      });
      console.warn("syncFromAirtable error:", e);
    }).finally(() => {
      setAtSyncing(false);
      syncInFlightRef.current = false;
    });
  };

  // DELTA sync: pull ONLY records changed since the last sync (via the "Ultima
  // modificacion" field). Cheap — this is what runs in the background so working in the
  // app doesn't hitch. Never removes records (deletions still propagate via the full
  // clean reload); merge keeps local edits newer than the remote change.
  const deltaSyncFromAirtable = () => {
    const since = lastSyncTimeRef.current;
    if (!since) {
      syncFromAirtable();
      return;
    } // no baseline yet → do a full pull
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
        try {
          localStorage.setItem("promeza_delta_since", nowIso);
        } catch (e) {}
        if (changed.personas.length > 0 || changed.entities.length > 0) {
          setData(prev => mergeFromAirtable(changed, prev, prevLastLoad));
          setAtSyncMsg({
            type: "ok",
            text: "â†“ " + (changed.personas.length + changed.entities.length) + " cambios de Airtable"
          });
        }
      }
    }).catch(e => {
      console.warn("deltaSync error:", e);
    }).finally(() => {
      setAtSyncing(false);
      syncInFlightRef.current = false;
    });
  };
  const forcePullFromAirtable = () => {
    setAtSyncing(true);
    setAtSyncMsg(null);
    window.AIRTABLE.loadData().then(atData => {
      if (atData && (atData.personas.length > 0 || atData.entities.length > 0)) {
        setData(prev => ({
          ...prev,
          personas: [...atData.personas, ...prev.personas.filter(p => !atData.personas.some(a => a.id === p.id))],
          entities: [...atData.entities.map(e => ({
            ...e,
            schedule: e.schedule || [],
            phones: e.phones || [],
            emails: e.emails || []
          })), ...prev.entities.filter(e => !atData.entities.some(a => a.id === e.id))]
        }));
        setAtSyncMsg({
          type: "ok",
          text: "âœ“ Recibido: " + atData.personas.length + " personas Â· " + atData.entities.length + " entidades"
        });
      } else if (atData) {
        setAtSyncMsg({
          type: "warn",
          text: "âš  Airtable no tiene datos â€” primero sincroniza desde la MacBook"
        });
      } else {
        setAtSyncMsg({
          type: "err",
          text: "âœ— No se pudo conectar a Airtable"
        });
      }
    }).catch(e => {
      setAtSyncMsg({
        type: "err",
        text: "âœ— Error: " + e.message
      });
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
      if (!key) {
        setNeedsUnlock(true);
        setDataReady(true);
        return;
      }
      setCryptoKey(key);

      // â”€â”€ One-time CLEAN SLATE (2026-06-25 rebuild) â”€â”€
      // The database was rebuilt clean from the source spreadsheet. Load ONLY from
      // Airtable (ignore the old local cache AND the bundled data.js seed) so every
      // device shows the clean base. Runs once per browser.
      if (!localStorage.getItem('promeza_cleanslate_v190')) {
        try {
          const at = await window.AIRTABLE.loadData();
          if (at && (at.personas || []).length > 200) {
            const fresh = processLoadedData({
              personas: at.personas,
              entities: at.entities,
              tasks: {},
              interactions: {},
              projects: [],
              campaigns: [],
              calendarEvents: [],
              comments: {},
              attachments: {},
              changelog: {},
              goals: [],
              segments: []
            });
            try {
              delete window.PROMEZA_DATA;
            } catch (e) {}
            try {
              delete window.PROMEZA_CHURCHES;
            } catch (e) {}
            localStorage.setItem('promeza_cleanslate_v190', '1');
            try {
              const bytes = await window.CryptoUtils.encryptBytes(JSON.stringify(fresh), key);
              await idbSet('promeza_data_bytes', bytes);
            } catch (e) {}
            setData(fresh);
            setDataReady(true);
            console.log('PROMEZA: clean-slate loaded ' + fresh.personas.length + ' contacts from Airtable');
            return;
          }
        } catch (e) {
          console.warn('clean-slate load failed, using normal flow', e);
        }
      }
      try {
        const json = await loadDecrypted(key);
        if (json) {
          const loaded = processLoadedData(JSON.parse(json), true);
          // â”€â”€ Self-heal stale pre-rebuild data â”€â”€
          // A device that never ran the clean-slate rebuild can keep the OLD contacts
          // (ids p#### / e####) ALONGSIDE the new clean ones (pc#### / ec####), which
          // inflates the count (~11k seen in Brazil). The clean database uses ONLY
          // pc####/ec####, so any p####/e#### record is leftover stale data â€” drop it
          // once. Preserves local notes/tasks (unlike the full clean-slate reload).
          if (!localStorage.getItem('promeza_purgeold_v154')) {
            const hasStale = (loaded.personas || []).some(p => /^p\d+$/.test(p.id)) || (loaded.entities || []).some(e => /^e\d+$/.test(e.id));
            if (hasStale) {
              const bp = loaded.personas.length,
                be = loaded.entities.length;
              loaded.personas = loaded.personas.filter(p => !/^p\d+$/.test(p.id));
              loaded.entities = loaded.entities.filter(e => !/^e\d+$/.test(e.id));
              console.log('PROMEZA: purged stale pre-rebuild records: -' + (bp - loaded.personas.length) + ' personas, -' + (be - loaded.entities.length) + ' entities');
              try {
                const bytes = await window.CryptoUtils.encryptBytes(JSON.stringify(loaded), key);
                await idbSet('promeza_data_bytes', bytes);
              } catch (e) {}
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
              const exN = new Set(loaded.personas.map(p => ((p.first || '') + (p.last || '')).toLowerCase().replace(/\s/g, '')));
              const exE = new Set(loaded.entities.map(e => (e.name || '').toLowerCase().trim()));
              const newP = (cd.personas || []).filter(p => !exN.has(((p.first || '') + (p.last || '')).toLowerCase().replace(/\s/g, '')));
              const newE = (cd.entities || []).filter(e => !exE.has((e.name || '').toLowerCase().trim()));
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
                  website: src.website || p.website
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
                  return {
                    ...p,
                    first: src.first,
                    last: src.last,
                    titulo: src.titulo,
                    roles: src.roles,
                    role: src.role,
                    church: src.church
                  };
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
                const storedEmails = [p.email, p.email2, ...(p.emails || []).map(e => e.value || '')].filter(e => e && e.includes('@')).map(e => e.toLowerCase().trim());
                let src = null;
                for (const se of storedEmails) {
                  if (srcByEmail.has(se)) {
                    src = srcByEmail.get(se);
                    break;
                  }
                }
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
                  website: src.website || p.website
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
                  website: src.website || p.website
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
              const IMP_NOTES = [{
                id: 'p7166',
                notes: '9/18 - Cannot Go'
              }, {
                id: 'p7212',
                notes: '6/13 - CH He has services on Tuesdays.'
              }, {
                id: 'p7238',
                notes: '7/24 - Talked to Pastor Efren and told him about the movie projects we will be hosting. This ministry does not attend the movie theatres.'
              }, {
                id: 'p7302',
                notes: '7/21 - Spoke with sister Carmen. She will talk to her pastor about the movie projects. She was interested in these projects.'
              }, {
                id: 'p7314',
                notes: '7/24 - Talked to Pastor Mainor and told him about the movie projects we will be hosting. He was not open to give his email address.'
              }, {
                id: 'p7323',
                notes: '7/24 - Spoke with sister Mariela and told her about the new movie projects.'
              }];
              loaded.interactions = loaded.interactions || {};
              IMP_NOTES.forEach(n => {
                const list = loaded.interactions[n.id] || [];
                if (!list.some(it => (it.notes || '') === n.notes)) {
                  loaded.interactions[n.id] = [{
                    id: 'iimp_' + n.id,
                    type: 'otro',
                    date: '',
                    notes: n.notes,
                    result: ''
                  }, ...list];
                }
              });
              localStorage.setItem('promeza_notes_v116', '1');
              console.log('PROMEZA: restored 6 import notes as interactions (v116)');
            }
            // v117: fix roles corrupted by the import (a city/county landed in the
            // role field, e.g. "San Francisco", "Kern") â€” restore from data.js.
            if (!localStorage.getItem('promeza_roles_v117') && window.PROMEZA_DATA) {
              const VALID_R = new Set(["pastor", "co-pastor", "copastor", "lider", "lÃ­der", "miembro", "tesorero", "ujier", "adorador", "musico", "mÃºsico", "comunicador", "influencer", "presidente", "vicepresidente", "fundador", "secretario", "diacono", "diÃ¡cono", "maestro", "director-ministerio", "voluntario", "evangelista", "misionero", "otro"]);
              const okRoles = arr => Array.isArray(arr) && arr.length > 0 && arr.every(r => VALID_R.has((r || "").toLowerCase().trim()));
              const srcRoles = new Map((window.PROMEZA_DATA.personas || []).map(p => [p.id, p]));
              let rFixed = 0;
              loaded.personas = loaded.personas.map(p => {
                if (!p.id || !p.id.match(/^p\d+$/) || okRoles(p.roles)) return p;
                const src = srcRoles.get(p.id);
                if (!src || !src.roles) return p;
                rFixed++;
                return {
                  ...p,
                  roles: src.roles,
                  roleOther: src.roleOther || ""
                };
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
                  roleOther: src.roleOther !== undefined ? src.roleOther : p.roleOther
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
                    roleOther: s.roleOther !== undefined ? s.roleOther : p.roleOther
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
              const tk = {
                ...loaded.tasks
              };
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
                  const phones = [s.phone, s.phone2].filter(v => v && /\d/.test(v)).map((v, i) => ({
                    value: v,
                    label: i === 0 ? "Personal" : "Otro"
                  }));
                  const emails = [s.email, s.email2].filter(v => v && v.indexOf("@") >= 0).map((v, i) => ({
                    value: v,
                    label: i === 0 ? "Personal" : "Otro"
                  }));
                  return {
                    ...p,
                    phone: s.phone !== undefined ? s.phone : p.phone,
                    phone2: s.phone2 !== undefined ? s.phone2 : p.phone2,
                    email: s.email !== undefined ? s.email : p.email,
                    email2: s.email2 !== undefined ? s.email2 : p.email2,
                    website: s.website || p.website,
                    phones,
                    emails
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
              (window.PROMEZA_CHURCHES && window.PROMEZA_CHURCHES.entities || []).forEach(e => {
                const d = (e.phone || "").replace(/\D/g, "");
                if (d.length >= 7 && !byPhone[d]) byPhone[d] = e;
              });
              const isPhoneName = s => /^[\s(+]*\d[\d()+\-. ]{6,}$/.test((s || "").trim());
              let eFix = 0;
              loaded.entities = (loaded.entities || []).map(e => {
                if (!isPhoneName(e.name)) return e;
                const d = (e.name || "").replace(/\D/g, "");
                const f = ENTITY_PHONE_FIX[d];
                if (f) {
                  eFix++;
                  return {
                    ...e,
                    name: f.name,
                    phone: e.name,
                    phones: [{
                      value: e.name,
                      label: "Principal"
                    }],
                    email: f.email,
                    emails: f.email ? [{
                      value: f.email,
                      label: "Principal"
                    }] : [],
                    zip: f.zip,
                    type: e.type || "iglesia"
                  };
                }
                const src = byPhone[d];
                if (!src) return e;
                eFix++;
                return {
                  ...e,
                  name: src.name,
                  phone: e.phone || src.phone,
                  email: e.email || src.email,
                  city: e.city || src.city,
                  state: e.state || src.state,
                  zip: e.zip || src.zip,
                  type: e.type || src.type || "iglesia"
                };
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
              const isJunk = n => {
                n = (n || "").trim();
                return !n || !/^\p{L}/u.test(n) || noteRx.test(n);
              };
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
              const isJunkE = n => {
                n = (n || "").trim();
                return !n || !/^\p{L}/u.test(n);
              };
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
              const isJunkE2 = n => {
                n = (n || "").trim();
                return !n || !/^\p{L}/u.test(n) || /@/.test(n);
              };
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
      } catch (err) {
        console.error("Data load error:", err);
      }

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
        segments: seed.segments || []
      };
      // Normalize phone/email arrays expected by UI components
      let seeded;
      try {
        seeded = processLoadedData(seedData);
      } catch (e) {
        console.error("processLoadedData seed error:", e);
        seeded = seedData;
      }
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
    if (!cryptoKey) {
      keyRawRef.current = null;
      return;
    }
    crypto.subtle.exportKey("raw", cryptoKey).then(buf => {
      keyRawRef.current = new Uint8Array(buf);
    }).catch(() => {
      keyRawRef.current = null;
    });
  }, [cryptoKey]);
  useEffect(() => {
    if (!data || !cryptoKey) return;
    // Save when browser is idle. The heavy stringify+encode+encrypt runs off the
    // main thread in a Web Worker (saveEncryptedObj), so it no longer freezes the
    // UI; falls back to the main thread if the worker is unavailable. savingRef
    // prevents overlapping heavy saves — if one is in flight we retry after it.
    const doSave = () => {
      if (savingRef.current) {
        timer = setTimeout(doSave, 1500);
        return;
      }
      savingRef.current = true;
      saveEncryptedObj(data, cryptoKey, keyRawRef.current).catch(console.error).finally(() => {
        savingRef.current = false;
      });
    };
    let timer;
    if (typeof requestIdleCallback !== "undefined") {
      timer = requestIdleCallback(doSave, {
        timeout: 4000
      });
    } else {
      timer = setTimeout(doSave, 2000);
    }
    return () => {
      if (typeof requestIdleCallback !== "undefined") cancelIdleCallback(timer);else clearTimeout(timer);
    };
  }, [data, cryptoKey]);

  // Cross-tab sync: when another tab saves to localStorage, reload data here
  useEffect(() => {
    if (!cryptoKey || !dataReady) return;
    const onStorage = async e => {
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
    const runFull = () => {
      if (document.visibilityState === "visible") {
        lastVisSyncRef.current = Date.now();
        syncFromAirtable();
      }
    };
    const runDelta = () => {
      if (document.visibilityState === "visible") {
        lastVisSyncRef.current = Date.now();
        deltaSyncFromAirtable();
      }
    };
    // OPEN SPEED: the first sync is now a LIGHT delta (only records changed since the
    // baseline) so opening feels fast. The heavy FULL pull (~230 paged HTTP calls +
    // merge of every record, which briefly hitches the UI) is deferred to 40s — after
    // the app has settled and the user is already working — instead of firing at 3s and
    // competing with the fresh open.
    const first = setTimeout(runDelta, 4000);
    const firstFull = setTimeout(runFull, 40000);
    // Every 2 min: usually a cheap DELTA pull, but every 4th tick (~8 min) a FULL pull.
    // The full pull is the SAFETY NET — it catches changes the delta missed (e.g. a bulk
    // edit that didn't bump "Ultima modificacion", or a delta baseline gap) AND runs the
    // ghost purge. This is what guarantees everything eventually shows on every device.
    let _tick = 0;
    const interval = setInterval(() => {
      _tick++;
      if (_tick % 4 === 0) runFull();else runDelta();
    }, 120000);
    // Sync when the tab regains focus, throttled to once/2min. (A full pull is ~160
    // paged HTTP calls at 16k records — doing it on every focus, as an earlier 20s
    // throttle did, made the whole app crawl.) On-open + this + the 4-min timer keep
    // it automatic without hammering; the syncInFlightRef guard prevents overlap.
    const onVis = () => {
      if (document.visibilityState === "visible" && Date.now() - lastVisSyncRef.current > 120000) runDelta();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      clearTimeout(first);
      clearTimeout(firstFull);
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [dataReady]); // eslint-disable-line react-hooks/exhaustive-deps

  // Duplicate-review state: SHARED across devices via Airtable (+ localStorage for
  // instant same-device reload). Without this, a scan done on the tablet never
  // reached the computer (dupPairs was in-memory only). Load once when data is ready.
  useEffect(() => {
    if (!dataReady) return;
    let cancelled = false;
    (async () => {
      let local = null;
      try {
        local = JSON.parse(localStorage.getItem("promeza_dupreview") || "null");
      } catch {}
      if (local && !cancelled) {
        if (Array.isArray(local.personas)) setDupPairs(local.personas);
        if (Array.isArray(local.entities)) setEntityDupPairs(local.entities);
      }
      let remote = null;
      try {
        remote = await window.AIRTABLE.loadAppState("dupReview");
      } catch {}
      if (remote && !cancelled) {
        // Remote is the shared truth; prefer it when present.
        if (Array.isArray(remote.personas)) setDupPairs(remote.personas);
        if (Array.isArray(remote.entities)) setEntityDupPairs(remote.entities);
      }
      dupLoadedRef.current = true;
    })();
    return () => {
      cancelled = true;
    };
  }, [dataReady]);

  // Load the shared tombstone list (deleted ids) and purge any local "ghost" records
  // that were deleted on another device (merges/deletes that didn't propagate here).
  useEffect(() => {
    if (!dataReady) return;
    let cancelled = false;
    (async () => {
      let ids = null;
      try {
        ids = await window.AIRTABLE.loadAppState("deletedIds");
      } catch (e) {}
      if (cancelled || !Array.isArray(ids) || ids.length === 0) return;
      ids.forEach(id => deletedIdsRef.current.add(id));
      setData(d => {
        if (!d) return d;
        const pn = d.personas.filter(p => !deletedIdsRef.current.has(p.id));
        const en = d.entities.filter(e => !deletedIdsRef.current.has(e.id));
        if (pn.length === d.personas.length && en.length === d.entities.length) return d;
        return {
          ...d,
          personas: pn,
          entities: en
        };
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [dataReady]);

  // Persist duplicate-review state on change (after the initial load). Saves to
  // localStorage immediately and to Airtable (debounced) so all devices share it.
  useEffect(() => {
    if (!dupLoadedRef.current) return;
    const state = {
      personas: dupPairs,
      entities: entityDupPairs
    };
    try {
      localStorage.setItem("promeza_dupreview", JSON.stringify(state));
    } catch {}
    const id = setTimeout(() => {
      window.AIRTABLE.saveAppState("dupReview", state).catch(() => {});
    }, 1500);
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
      try {
        remote = await window.AIRTABLE.loadAppState("projects");
      } catch {}
      if (Array.isArray(remote) && !cancelled) {
        setData(d => {
          const ids = new Set(remote.map(p => p.id));
          const localOnly = (d.projects || []).filter(p => !ids.has(p.id));
          return {
            ...d,
            projects: [...remote, ...localOnly]
          };
        });
      }
      projLoadedRef.current = true;
    })();
    return () => {
      cancelled = true;
    };
  }, [dataReady]); // eslint-disable-line react-hooks/exhaustive-deps

  // Persist projects to the shared store whenever they change (after initial load).
  useEffect(() => {
    if (!projLoadedRef.current || !data) return;
    const proj = data.projects || [];
    const id = setTimeout(() => {
      window.AIRTABLE.saveAppState("projects", proj).catch(() => {});
    }, 1500);
    return () => clearTimeout(id);
  }, [data && data.projects]); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-logout on inactivity (1 hour)
  const INACTIVITY_MS = 60 * 60 * 1000;
  useEffect(() => {
    if (!userEmail) return;
    let timer = setTimeout(() => {
      clearSession();
      window.CryptoUtils?.clearSessionKey ? window.CryptoUtils.clearSessionKey() : (localStorage.removeItem("promeza_sk"), sessionStorage.removeItem("promeza_sk"));
      setUserEmail(null);
    }, INACTIVITY_MS);
    const reset = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        clearSession();
        window.CryptoUtils?.clearSessionKey ? window.CryptoUtils.clearSessionKey() : (localStorage.removeItem("promeza_sk"), sessionStorage.removeItem("promeza_sk"));
        setUserEmail(null);
      }, INACTIVITY_MS);
    };
    const events = ["mousedown", "keypress", "scroll", "touchstart", "click"];
    events.forEach(e => window.addEventListener(e, reset));
    return () => {
      clearTimeout(timer);
      events.forEach(e => window.removeEventListener(e, reset));
    };
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
          overdueTasks.push({
            ...tk,
            personaName: p ? p.first + " " + p.last : ""
          });
        }
      });
    });
    if (birthdaysToday.length > 0 || overdueTasks.length > 0) {
      setShowReminders(true);
    }
    setRemindersShown(true);
  }, [dataReady, data, userEmail, remindersShown]);
  const [routeHistory, setRouteHistory] = useState([]);
  const suppressHashRef = useRef(false); // we set location.hash ourselves — ignore the resulting hashchange
  const appliedHashRef = useRef(false); // initial deep-link applied once after login
  const routeRef = useRef(route);
  routeRef.current = route;
  const setHash = r => {
    try {
      const h = routeToHash(r);
      if (h && "#" + location.hash.replace(/^#/, "") !== h) {
        suppressHashRef.current = true;
        location.hash = h;
      }
    } catch (e) {}
  };
  const go = r => {
    if (r.name === "new-person") {
      setModalPrefill(r.prefill || null);
      setModal("new-person");
      return;
    }
    if (r.name === "new-entity") {
      setModalPrefill(r.prefill || null);
      setModal("new-entity");
      return;
    }
    setRouteHistory(h => [...h.slice(-19), route]);
    setRoute(r);
    setHash(r);
    window.scrollTo({
      top: 0
    });
  };

  // ── URL / deep-linking ──
  // Each view/profile gets a hash URL (#person/ID, #entity/ID, #personas, …) so it
  // can be opened in a new tab (Ctrl/⌘+click) or shared. hashchange (new tab, back
  // button) navigates here; our own go()/goBack() set the hash and suppress the echo.
  useEffect(() => {
    const onHash = () => {
      if (suppressHashRef.current) {
        suppressHashRef.current = false;
        return;
      }
      const r = hashToRoute(location.hash);
      if (r && !sameRoute(r, routeRef.current)) {
        setRoute(r);
        window.scrollTo({
          top: 0
        });
      }
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
  const goBack = fallback => {
    if (routeHistory.length === 0) {
      if (fallback) {
        setRoute(fallback);
        setQuery("");
        window.scrollTo({
          top: 0
        });
      }
      return;
    }
    const prev = routeHistory[routeHistory.length - 1];
    setRouteHistory(h => h.slice(0, -1));
    setRoute(prev);
    setHash(prev);
    setQuery("");
    window.scrollTo({
      top: 0
    });
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
  const dupPersonaIds = React.useMemo(() => {
    const s = new Set();
    (dupPairs || []).forEach(p => {
      if (!p.dismissed) {
        s.add(p.idA);
        s.add(p.idB);
      }
    });
    return s;
  }, [dupPairs]);
  const dupEntityIds = React.useMemo(() => {
    const s = new Set();
    (entityDupPairs || []).forEach(p => {
      if (!p.dismissed) {
        s.add(p.idA);
        s.add(p.idB);
      }
    });
    return s;
  }, [entityDupPairs]);
  const counts = data ? {
    personas: data.personas.length,
    entities: data.entities.length,
    dups: totalDups,
    pendingTasks: pendingTasks || null,
    overdueCount,
    projects: (data.projects || []).length || null,
    completedGoals: completedGoals || null
  } : {};
  const addComment = (targetId, text) => {
    setData(d => {
      const next = {
        ...d,
        comments: {
          ...d.comments
        }
      };
      const list = next.comments[targetId] ? [...next.comments[targetId]] : [];
      list.unshift({
        id: "cm" + Date.now(),
        author: userEmail || "Usuario",
        date: new Date().toISOString().slice(0, 10),
        text
      });
      next.comments[targetId] = list;
      return next;
    });
  };
  const editComment = (targetId, index, text) => {
    setData(d => {
      const next = {
        ...d,
        comments: {
          ...d.comments
        }
      };
      const list = next.comments[targetId] ? [...next.comments[targetId]] : [];
      if (list[index]) list[index] = {
        ...list[index],
        text,
        edited: true,
        editedDate: new Date().toISOString().slice(0, 10)
      };
      next.comments[targetId] = list;
      return next;
    });
  };
  const deleteComment = (targetId, index) => {
    setData(d => {
      const next = {
        ...d,
        comments: {
          ...d.comments
        }
      };
      const list = next.comments[targetId] ? [...next.comments[targetId]] : [];
      list.splice(index, 1);
      next.comments[targetId] = list;
      return next;
    });
  };
  const handleSavePerson = form => {
    const id = "p" + Date.now();
    const tags = form.tags ? form.tags.split(",").map(s => s.trim()).filter(Boolean) : [];
    const palette = ["#2F6BFF", "#0E7C66", "#B45309", "#7C3AED", "#BE185D", "#0369A1", "#15803D"];
    const color = palette[(form.first.charCodeAt(0) || 0) % palette.length];
    const newP = {
      id,
      first: form.first,
      last: form.last,
      role: form.role,
      roleOther: form.roleOther,
      emails: form.emails || [],
      phones: form.phones || [],
      email: (form.emails || [])[0]?.value || "",
      phone: (form.phones || [])[0]?.value || "",
      address: form.address,
      addressLabel: form.addressLabel || "domicilio",
      zip: form.zip,
      city: form.city,
      state: form.state,
      country: form.country,
      lat: 0,
      lng: 0,
      website: form.website,
      social: form.social,
      entities: form.entities.map(le => ({
        id: le.id,
        role: le.role,
        roleOther: le.roleOther
      })),
      tags,
      language: form.language,
      gender: form.gender || "",
      status: form.stage === "inactivo" ? "inactivo" : "activo",
      stage: form.stage || "nuevo",
      source: form.source || "",
      nextAction: form.nextAction || "",
      birthday: form.birthday,
      lastContact: form.lastContact,
      color,
      uid: computeUID(id),
      _localSavedAt: new Date().toISOString()
    };
    const createdAt = new Date().toISOString();
    setData(d => {
      const next = {
        ...d,
        personas: [newP, ...d.personas]
      };
      const pairs = findDuplicatePairs(next.personas, dupPairs);
      if (pairs.length > 0) {
        setDupPairs(prev => {
          const existing = new Set(prev.map(p => p.idA + "|" + p.idB));
          return [...prev, ...pairs.filter(p => !existing.has(p.idA + "|" + p.idB))];
        });
      }
      next.changelog = {
        ...(next.changelog || {}),
        [id]: [{
          id: "cl" + id,
          date: createdAt,
          author: userEmail || "Usuario",
          changes: [{
            field: "record",
            type: "created"
          }]
        }]
      };
      return next;
    });
    window.AIRTABLE.savePersona(newP, data.entities).then(atId => {
      if (atId) setData(d => ({
        ...d,
        personas: d.personas.map(p => p.id === id ? {
          ...p,
          _atId: atId
        } : p)
      }));
    }).catch(console.warn);
    setModal(null);
    setRoute({
      name: "person",
      id
    });
  };
  const handleSaveEntity = form => {
    const id = "e" + Date.now();
    const tags = form.tags ? form.tags.split(",").map(s => s.trim()).filter(Boolean) : [];
    const newE = {
      id,
      name: form.name,
      type: form.type,
      denominacion: form.denominacion || "",
      emails: form.emails || [],
      phones: form.phones || [],
      email: (form.emails || [])[0]?.value || "",
      phone: (form.phones || [])[0]?.value || "",
      address: form.address,
      zip: form.zip,
      city: form.city,
      state: form.state,
      country: form.country,
      lat: 0,
      lng: 0,
      website: form.website,
      social: form.social,
      size: form.size ? parseInt(form.size) : null,
      founded: form.founded,
      parent: form.parent || null,
      schedule: form.schedule || [],
      language: form.language || "es",
      tags,
      status: "activo",
      uid: computeUID(id),
      _localSavedAt: new Date().toISOString()
    };
    const createdAtE = new Date().toISOString();
    setData(d => {
      const next = {
        ...d,
        entities: [newE, ...d.entities]
      };
      next.changelog = {
        ...(next.changelog || {}),
        [id]: [{
          id: "cl" + id,
          date: createdAtE,
          author: userEmail || "Usuario",
          changes: [{
            field: "record",
            type: "created"
          }]
        }]
      };
      return next;
    });
    window.AIRTABLE.saveEntity(newE, data.entities).then(atId => {
      if (atId) setData(d => ({
        ...d,
        entities: d.entities.map(e => e.id === id ? {
          ...e,
          _atId: atId
        } : e)
      }));
    }).catch(console.warn);
    setModal(null);
    setRoute({
      name: "entity",
      id
    });
  };
  const handleImportPersonas = imported => {
    setData(d => {
      const next = {
        ...d,
        personas: [...imported, ...d.personas]
      };
      const pairs = findDuplicatePairs(next.personas, dupPairs);
      if (pairs.length > 0) {
        setDupPairs(prev => {
          const existing = new Set(prev.map(p => p.idA + "|" + p.idB));
          return [...prev, ...pairs.filter(p => !existing.has(p.idA + "|" + p.idB))];
        });
        setRoute({
          name: "duplicates"
        });
        window.scrollTo({
          top: 0
        });
      }
      return next;
    });
  };
  const handleImportEntities = imported => {
    setData(d => ({
      ...d,
      entities: [...imported, ...d.entities]
    }));
  };
  const handleUpdatePerson = (id, updates) => {
    const localSavedAt = new Date().toISOString();
    const current = data.personas.find(p => p.id === id);
    const changes = current ? computeChanges(current, updates, PERSON_FIELD_LABELS) : [];
    const baseLog = current && current.changelog || data.changelog[id] || [];
    const newLog = changes.length > 0 ? [{
      id: "cl" + Date.now(),
      date: new Date().toISOString(),
      author: userEmail || "Usuario",
      changes
    }, ...baseLog] : baseLog;
    // changelog now lives INSIDE the record → savePersona persists it in _data, so the
    // history survives reloads/clean-slate and is shared with every device.
    const updated = current ? {
      ...current,
      ...updates,
      changelog: newLog,
      _localSavedAt: localSavedAt
    } : null;
    setData(d => {
      const cl = changes.length > 0 ? {
        ...d.changelog,
        [id]: newLog
      } : d.changelog;
      return {
        ...d,
        personas: d.personas.map(p => p.id === id ? {
          ...p,
          ...updates,
          changelog: newLog,
          _localSavedAt: localSavedAt
        } : p),
        changelog: cl
      };
    });
    if (updated) {
      window.AIRTABLE.savePersona(updated, data.entities).then(atId => {
        if (atId) setData(d => ({
          ...d,
          personas: d.personas.map(p => p.id === id ? {
            ...p,
            _atId: atId
          } : p)
        }));
      }).catch(console.warn);
    }
  };
  const handleUpdateEntity = (id, updates) => {
    const localSavedAt = new Date().toISOString();
    const current = data.entities.find(e => e.id === id);
    const changes = current ? computeChanges(current, updates, ENTITY_FIELD_LABELS) : [];
    const baseLog = current && current.changelog || data.changelog[id] || [];
    const newLog = changes.length > 0 ? [{
      id: "cl" + Date.now(),
      date: new Date().toISOString(),
      author: userEmail || "Usuario",
      changes
    }, ...baseLog] : baseLog;
    const updated = current ? {
      ...current,
      ...updates,
      changelog: newLog,
      _localSavedAt: localSavedAt
    } : null;
    setData(d => {
      const cl = changes.length > 0 ? {
        ...d.changelog,
        [id]: newLog
      } : d.changelog;
      return {
        ...d,
        entities: d.entities.map(e => e.id === id ? {
          ...e,
          ...updates,
          changelog: newLog,
          _localSavedAt: localSavedAt
        } : e),
        changelog: cl
      };
    });
    if (updated) {
      window.AIRTABLE.saveEntity(updated, data.entities).then(atId => {
        if (atId) setData(d => ({
          ...d,
          entities: d.entities.map(e => e.id === id ? {
            ...e,
            _atId: atId
          } : e)
        }));
      }).catch(console.warn);
    }
  };
  const handleEditPerson = id => {
    setEditingId(id);
    setModal("edit-person");
  };
  const handleSaveEditPerson = form => {
    const tags = form.tags ? form.tags.split(",").map(s => s.trim()).filter(Boolean) : [];
    const status = form.stage === "inactivo" ? "inactivo" : "activo";
    const updates = {
      ...form,
      tags,
      status,
      entities: form.entities.map(le => ({
        id: le.id,
        role: le.role,
        roleOther: le.roleOther
      })),
      email: (form.emails || [])[0]?.value || "",
      phone: (form.phones || [])[0]?.value || ""
    };
    handleUpdatePerson(editingId, updates);
    setModal(null);
    setEditingId(null);
  };
  const handleDeletePerson = id => {
    if (!confirm(lang === "es" ? "Â¿Eliminar esta persona? Esta acciÃ³n no se puede deshacer." : "Delete this person? This cannot be undone.")) return;
    const cfg = window.AIRTABLE.getConfig();
    if (cfg.pat && cfg.baseId) window.AIRTABLE.deleteRecord(cfg.personasTable || "PERSONAS PROMEZA CRM", id).catch(console.warn);
    recordDeletion(id);
    setData(d => ({
      ...d,
      personas: d.personas.filter(p => p.id !== id)
    }));
    setRoute({
      name: "personas"
    });
  };
  const handleEditEntity = id => {
    setEditingId(id);
    setModal("edit-entity");
  };
  const handleSaveEditEntity = form => {
    const tags = form.tags ? form.tags.split(",").map(s => s.trim()).filter(Boolean) : [];
    handleUpdateEntity(editingId, {
      ...form,
      tags,
      size: form.size ? parseInt(form.size) : null,
      email: (form.emails || [])[0]?.value || "",
      phone: (form.phones || [])[0]?.value || ""
    });
    setModal(null);
    setEditingId(null);
  };
  const handleDeleteEntity = id => {
    if (!confirm(lang === "es" ? "Â¿Eliminar esta entidad? Esta acciÃ³n no se puede deshacer." : "Delete this entity? This cannot be undone.")) return;
    const cfg = window.AIRTABLE.getConfig();
    if (cfg.pat && cfg.baseId) window.AIRTABLE.deleteRecord(cfg.entidadesTable || "ENTIDADES PROMEZA CRM", id).catch(console.warn);
    recordDeletion(id);
    setData(d => ({
      ...d,
      entities: d.entities.filter(e => e.id !== id)
    }));
    setRoute({
      name: "entities"
    });
  };
  const addInteraction = (personId, interaction) => {
    setData(d => ({
      ...d,
      interactions: {
        ...d.interactions,
        [personId]: [interaction, ...(d.interactions[personId] || [])]
      }
    }));
  };
  const deleteInteraction = (personId, id) => {
    setData(d => ({
      ...d,
      interactions: {
        ...d.interactions,
        [personId]: (d.interactions[personId] || []).filter(i => i.id !== id)
      }
    }));
  };
  const addTask = (personId, task) => {
    setData(d => ({
      ...d,
      tasks: {
        ...d.tasks,
        [personId]: [...(d.tasks[personId] || []), task]
      }
    }));
  };
  const toggleTask = (personId, id) => {
    setData(d => ({
      ...d,
      tasks: {
        ...d.tasks,
        [personId]: (d.tasks[personId] || []).map(tk => tk.id === id ? {
          ...tk,
          done: !tk.done
        } : tk)
      }
    }));
  };
  const deleteTask = (personId, id) => {
    setData(d => ({
      ...d,
      tasks: {
        ...d.tasks,
        [personId]: (d.tasks[personId] || []).filter(tk => tk.id !== id)
      }
    }));
  };

  // Mark the "possible duplicate" task as resolved (reviewed). `resolved=false` re-opens
  // it. The flag lives on the record (_data) so it persists and syncs across devices.
  // Strip any "Revisar duplicado(s)" / "Revisar posible duplicado" tag left over from
  // the bulk tagging script, so resolving a duplicate also clears the tag chip.
  const stripDupTag = tags => (tags || []).filter(tg => !/revisar.*duplicad/i.test(String(tg || "")));
  const handleResolveDuplicate = (personId, resolved = true) => {
    const cur = data.personas.find(p => p.id === personId);
    if (!cur) return;
    const updated = {
      ...cur,
      dupResolved: resolved,
      _localSavedAt: new Date().toISOString()
    };
    if (resolved) updated.tags = stripDupTag(cur.tags);
    setData(d => ({
      ...d,
      personas: d.personas.map(p => p.id === personId ? updated : p)
    }));
    window.AIRTABLE.savePersona(updated, data.entities).catch(console.warn);
  };
  const handleResolveEntityDuplicate = (entityId, resolved = true) => {
    const cur = data.entities.find(e => e.id === entityId);
    if (!cur) return;
    const updated = {
      ...cur,
      dupResolved: resolved,
      _localSavedAt: new Date().toISOString()
    };
    if (resolved) updated.tags = stripDupTag(cur.tags);
    setData(d => ({
      ...d,
      entities: d.entities.map(e => e.id === entityId ? updated : e)
    }));
    window.AIRTABLE.saveEntity(updated, data.entities).catch(console.warn);
  };
  const handleBulkAddTask = (personId, task) => {
    addTask(personId, task);
  };
  const addAttachment = (targetId, attachment) => {
    setData(d => ({
      ...d,
      attachments: {
        ...d.attachments,
        [targetId]: [...(d.attachments[targetId] || []), attachment]
      }
    }));
  };
  const deleteAttachment = (targetId, attId) => {
    setData(d => ({
      ...d,
      attachments: {
        ...d.attachments,
        [targetId]: (d.attachments[targetId] || []).filter(a => a.id !== attId)
      }
    }));
  };
  const addProject = form => {
    const id = "proj" + Date.now();
    setData(d => ({
      ...d,
      projects: [{
        id,
        ...form,
        members: [],
        createdAt: new Date().toISOString()
      }, ...d.projects]
    }));
    setRoute({
      name: "project",
      id
    });
  };
  const updateProject = (id, updates) => {
    setData(d => ({
      ...d,
      projects: d.projects.map(p => p.id === id ? {
        ...p,
        ...updates
      } : p)
    }));
  };
  const deleteProject = id => {
    setData(d => ({
      ...d,
      projects: d.projects.filter(p => p.id !== id)
    }));
  };
  const addProjectMember = (projectId, member) => {
    setData(d => ({
      ...d,
      projects: d.projects.map(p => p.id === projectId ? {
        ...p,
        members: [...(p.members || []), member]
      } : p)
    }));
  };
  const removeProjectMember = (projectId, personaId) => {
    setData(d => ({
      ...d,
      projects: d.projects.map(p => p.id === projectId ? {
        ...p,
        members: (p.members || []).filter(m => m.personaId !== personaId)
      } : p)
    }));
  };
  const saveCampaign = campaign => {
    setData(d => ({
      ...d,
      campaigns: [campaign, ...(d.campaigns || [])]
    }));
  };
  const addCalendarEvent = evt => {
    setData(d => ({
      ...d,
      calendarEvents: [...(d.calendarEvents || []), {
        id: "cal" + Date.now(),
        ...evt
      }]
    }));
  };
  const deleteCalendarEvent = id => {
    setData(d => ({
      ...d,
      calendarEvents: (d.calendarEvents || []).filter(e => e.id !== id)
    }));
  };
  const addGoal = goal => {
    const GOAL_METRICS = window.GOAL_METRICS || [];
    const metric = GOAL_METRICS.find(m => m.id === goal.metric);
    const initialValue = metric ? metric.compute(data) : 0;
    setData(d => ({
      ...d,
      goals: [{
        id: "goal" + Date.now(),
        ...goal,
        initialValue,
        createdAt: new Date().toISOString(),
        archived: false
      }, ...(d.goals || [])]
    }));
  };
  const updateGoal = (id, updates) => {
    setData(d => ({
      ...d,
      goals: (d.goals || []).map(g => g.id === id ? {
        ...g,
        ...updates
      } : g)
    }));
  };
  const deleteGoal = id => {
    setData(d => ({
      ...d,
      goals: (d.goals || []).filter(g => g.id !== id)
    }));
  };
  const handleBulkDeletePersonas = ids => {
    if (!confirm(lang === "es" ? `Â¿Eliminar ${ids.size} personas seleccionadas? Esta acciÃ³n no se puede deshacer.` : `Delete ${ids.size} selected people? This cannot be undone.`)) return;
    setData(d => ({
      ...d,
      personas: d.personas.filter(p => !ids.has(p.id))
    }));
  };
  const handleBulkUpdatePersonas = (ids, updates) => {
    setData(d => ({
      ...d,
      personas: d.personas.map(p => ids.has(p.id) ? {
        ...p,
        ...updates
      } : p)
    }));
  };
  const addSegment = segment => {
    setData(d => ({
      ...d,
      segments: [...(d.segments || []), {
        ...segment,
        id: "seg" + Date.now()
      }]
    }));
  };
  const deleteSegment = id => {
    setData(d => ({
      ...d,
      segments: (d.segments || []).filter(s => s.id !== id)
    }));
  };
  const handleBulkAddTagPersonas = (ids, tag) => {
    setData(d => ({
      ...d,
      personas: d.personas.map(p => ids.has(p.id) ? {
        ...p,
        tags: [...new Set([...(p.tags || []), tag])]
      } : p)
    }));
  };

  // Persistent, cross-device action log (merges etc.) stored in the shared ESTADO
  // table (key "actionLog"). The per-record changelog is local-only and wiped on a
  // clean-slate reload; this survives and is visible from any device via "Historial".
  const logAction = async (type, detail) => {
    try {
      const cur = (await window.AIRTABLE.loadAppState("actionLog")) || [];
      cur.unshift({
        ts: new Date().toISOString(),
        type,
        detail: detail || "",
        by: userEmail || "Usuario"
      });
      if (cur.length > 400) cur.length = 400;
      await window.AIRTABLE.saveAppState("actionLog", cur);
    } catch (e) {
      console.warn("logAction", e);
    }
  };
  // Record a deletion in the shared tombstone list so it propagates to every device.
  const recordDeletion = id => {
    if (!id) return;
    try {
      deletedIdsRef.current.add(id);
    } catch (e) {}
    (async () => {
      try {
        const cur = (await window.AIRTABLE.loadAppState("deletedIds")) || [];
        if (!cur.includes(id)) {
          cur.unshift(id);
          if (cur.length > 8000) cur.length = 8000;
          await window.AIRTABLE.saveAppState("deletedIds", cur);
        }
      } catch (e) {
        console.warn("recordDeletion", e);
      }
    })();
  };
  const openHistory = async () => {
    setHistoryOpen(true);
    setHistoryLog(null);
    try {
      setHistoryLog((await window.AIRTABLE.loadAppState("actionLog")) || []);
    } catch (e) {
      setHistoryLog([]);
    }
  };
  const handleMergeWithData = (keepId, dropId, mergedData) => {
    const _drop0 = data.personas.find(p => p.id === dropId);
    const _dropName0 = _drop0 ? _drop0.first + " " + _drop0.last : dropId;
    const _keep0 = data.personas.find(p => p.id === keepId);
    const mergeEntry = {
      id: "cl" + Date.now(),
      date: new Date().toISOString(),
      author: userEmail || "Usuario",
      changes: [{
        field: "record",
        type: "merge",
        with: _dropName0
      }]
    };
    const newLog = [mergeEntry, ...(_keep0 && _keep0.changelog || data.changelog[keepId] || [])];
    // Stamp _localSavedAt so a sync landing before the Airtable write completes keeps
    // the merged version; carry the changelog INSIDE the record so it persists.
    const mergedKeep = {
      ...mergedData,
      tags: stripDupTag(mergedData.tags),
      changelog: newLog,
      _localSavedAt: new Date().toISOString()
    };
    setData(d => {
      const mergedComments = [...(d.comments[keepId] || []), ...(d.comments[dropId] || [])].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
      const newComments = {
        ...d.comments,
        [keepId]: mergedComments
      };
      delete newComments[dropId];
      const cl = {
        ...d.changelog,
        [keepId]: newLog
      };
      return {
        ...d,
        personas: d.personas.map(p => p.id === keepId ? mergedKeep : p).filter(p => p.id !== dropId),
        comments: newComments,
        changelog: cl
      };
    });
    setDupPairs(ps => ps.map(p => p.idA === keepId && p.idB === dropId || p.idA === dropId && p.idB === keepId ? {
      ...p,
      dismissed: true
    } : p).filter(p => p.idA !== dropId && p.idB !== dropId));
    if (route.id === dropId) setRoute({
      name: "person",
      id: keepId
    });
    // Persist the merge to Airtable: save the merged keeper, DELETE the duplicate.
    // Without this the merge is local-only and the next full sync re-adds the dropped
    // record (it still exists in Airtable) and reverts the keeper → "queda todo igual".
    window.AIRTABLE.savePersona(mergedKeep, data.entities).catch(console.warn);
    const cfg = window.AIRTABLE.getConfig();
    if (cfg.pat && cfg.baseId) window.AIRTABLE.deleteRecord(cfg.personasTable || "PERSONAS PROMEZA CRM", dropId).catch(console.warn);
    recordDeletion(dropId);
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
      tags: stripDupTag([...new Set([...(keep0.tags || []), ...(drop.tags || [])])]),
      entities: [...(keep0.entities || []), ...(drop.entities || []).filter(de => !(keep0.entities || []).some(ke => ke.id === de.id))],
      social: {
        ig: keep0.social?.ig || drop.social?.ig || "",
        fb: keep0.social?.fb || drop.social?.fb || "",
        tiktok: keep0.social?.tiktok || drop.social?.tiktok || "",
        x: keep0.social?.x || drop.social?.x || ""
      },
      _localSavedAt: new Date().toISOString()
    };
    const mergeEntry = {
      id: "cl" + Date.now(),
      date: new Date().toISOString(),
      author: userEmail || "Usuario",
      changes: [{
        field: "record",
        type: "merge",
        with: dropName
      }]
    };
    const newLog = [mergeEntry, ...(keep0.changelog || data.changelog[idA] || [])];
    merged.changelog = newLog; // persist merge in the record's own history
    setData(d => {
      const mergedComments = [...(d.comments[idA] || []), ...(d.comments[idB] || [])].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
      const newComments = {
        ...d.comments,
        [idA]: mergedComments
      };
      delete newComments[idB];
      const cl = {
        ...d.changelog,
        [idA]: newLog
      };
      return {
        ...d,
        personas: d.personas.map(p => p.id === idA ? merged : p).filter(p => p.id !== idB),
        comments: newComments,
        changelog: cl
      };
    });
    setDupPairs(ps => ps.map(p => p.idA === idA && p.idB === idB || p.idA === idB && p.idB === idA ? {
      ...p,
      dismissed: true
    } : p).filter(p => p.idA !== idB && p.idB !== idB));
    if (route.id === idB) setRoute({
      name: "person",
      id: idA
    });
    // Persist to Airtable so the merge sticks (otherwise the next full sync re-adds
    // the dropped record and reverts the keeper → the user saw "queda todo igual").
    window.AIRTABLE.savePersona(merged, data.entities).catch(console.warn);
    const cfg = window.AIRTABLE.getConfig();
    if (cfg.pat && cfg.baseId) window.AIRTABLE.deleteRecord(cfg.personasTable || "PERSONAS PROMEZA CRM", idB).catch(console.warn);
    recordDeletion(idB);
    logAction("merge", `Fusionó contacto "${dropName.trim()}" → "${((keep0.first || "") + " " + (keep0.last || "")).trim()}"`);
  };
  const handleDismissDup = pair => {
    setDupPairs(ps => ps.map(p => p.idA === pair.idA && p.idB === pair.idB ? {
      ...p,
      dismissed: true
    } : p));
  };
  const handleUndismissDup = pair => {
    setDupPairs(ps => ps.map(p => p.idA === pair.idA && p.idB === pair.idB ? {
      ...p,
      dismissed: false
    } : p));
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
      type: keep0.type && keep0.type !== "otro" ? keep0.type : drop.type || keep0.type || "otro",
      tags: stripDupTag([...new Set([...(keep0.tags || []), ...(drop.tags || [])])]),
      social: {
        ig: keep0.social?.ig || drop.social?.ig || "",
        fb: keep0.social?.fb || drop.social?.fb || "",
        tiktok: keep0.social?.tiktok || drop.social?.tiktok || "",
        x: keep0.social?.x || drop.social?.x || ""
      },
      _localSavedAt: new Date().toISOString()
    };
    // Repoint any persona linked to the dropped entity → the kept entity, and remember
    // which personas changed so we can persist them.
    const repointed = [];
    (data.personas || []).forEach(p => {
      if (!(p.entities || []).some(le => le && le.id === idB)) return;
      const ents = [];
      (p.entities || []).forEach(le => {
        const nid = le.id === idB ? idA : le.id;
        if (!ents.some(x => x.id === nid)) ents.push({
          ...le,
          id: nid
        });
      });
      repointed.push({
        ...p,
        entities: ents,
        _localSavedAt: new Date().toISOString()
      });
    });
    const repointMap = Object.fromEntries(repointed.map(p => [p.id, p]));
    const entMergeEntry = {
      id: "cl" + Date.now(),
      date: new Date().toISOString(),
      author: userEmail || "Usuario",
      changes: [{
        field: "record",
        type: "merge",
        with: drop.name
      }]
    };
    const entNewLog = [entMergeEntry, ...(keep0.changelog || data.changelog[idA] || [])];
    merged.changelog = entNewLog; // persist merge in the entity's own history
    setData(d => ({
      ...d,
      entities: d.entities.map(e => e.id === idA ? merged : e).filter(e => e.id !== idB),
      personas: d.personas.map(p => repointMap[p.id] || p),
      changelog: {
        ...d.changelog,
        [idA]: entNewLog
      }
    }));
    setEntityDupPairs(ps => ps.map(p => p.idA === idA && p.idB === idB || p.idA === idB && p.idB === idA ? {
      ...p,
      dismissed: true
    } : p).filter(p => p.idA !== idB && p.idB !== idB));
    if (route.name === "entity" && route.id === idB) setRoute({
      name: "entity",
      id: idA
    });
    // Persist: save merged keeper + repointed personas, DELETE the dropped entity.
    window.AIRTABLE.saveEntity(merged, data.entities).catch(console.warn);
    repointed.forEach(p => window.AIRTABLE.savePersona(p, data.entities).catch(console.warn));
    const cfg = window.AIRTABLE.getConfig();
    if (cfg.pat && cfg.baseId) window.AIRTABLE.deleteRecord(cfg.entidadesTable || "ENTIDADES PROMEZA CRM", idB).catch(console.warn);
    recordDeletion(idB);
    logAction("merge", `Fusionó medio "${drop.name}" → "${keep0.name}"`);
  };

  // Merge two entities using the field-by-field data chosen in EntityMergeEditor.
  // keepId is the entity that stays; dropId is deleted; mergedData holds the picked values.
  const handleMergeEntitiesWithData = (keepId, dropId, mergedData) => {
    const keep0 = data.entities.find(e => e.id === keepId);
    const drop = data.entities.find(e => e.id === dropId);
    if (!keep0 || !drop) return;
    const entMergeEntry = {
      id: "cl" + Date.now(),
      date: new Date().toISOString(),
      author: userEmail || "Usuario",
      changes: [{
        field: "record",
        type: "merge",
        with: drop.name
      }]
    };
    const entNewLog = [entMergeEntry, ...(keep0.changelog || data.changelog[keepId] || [])];
    const merged = {
      ...mergedData,
      id: keepId,
      tags: stripDupTag(mergedData.tags),
      changelog: entNewLog,
      _localSavedAt: new Date().toISOString()
    };
    // Repoint personas linked to the dropped entity → the kept one.
    const repointed = [];
    (data.personas || []).forEach(p => {
      if (!(p.entities || []).some(le => le && le.id === dropId)) return;
      const ents = [];
      (p.entities || []).forEach(le => {
        const nid = le.id === dropId ? keepId : le.id;
        if (!ents.some(x => x.id === nid)) ents.push({
          ...le,
          id: nid
        });
      });
      repointed.push({
        ...p,
        entities: ents,
        _localSavedAt: new Date().toISOString()
      });
    });
    const repointMap = Object.fromEntries(repointed.map(p => [p.id, p]));
    setData(d => ({
      ...d,
      entities: d.entities.map(e => e.id === keepId ? merged : e).filter(e => e.id !== dropId),
      personas: d.personas.map(p => repointMap[p.id] || p),
      changelog: {
        ...d.changelog,
        [keepId]: entNewLog
      }
    }));
    setEntityDupPairs(ps => ps.map(p => p.idA === keepId && p.idB === dropId || p.idA === dropId && p.idB === keepId ? {
      ...p,
      dismissed: true
    } : p).filter(p => p.idA !== dropId && p.idB !== dropId));
    if (route.name === "entity" && route.id === dropId) setRoute({
      name: "entity",
      id: keepId
    });
    window.AIRTABLE.saveEntity(merged, data.entities).catch(console.warn);
    repointed.forEach(p => window.AIRTABLE.savePersona(p, data.entities).catch(console.warn));
    const cfg = window.AIRTABLE.getConfig();
    if (cfg.pat && cfg.baseId) window.AIRTABLE.deleteRecord(cfg.entidadesTable || "ENTIDADES PROMEZA CRM", dropId).catch(console.warn);
    recordDeletion(dropId);
    logAction("merge", `Fusionó medio "${drop.name}" → "${merged.name}"`);
  };
  const handleDismissEntityDup = pair => {
    setEntityDupPairs(ps => ps.map(p => p.idA === pair.idA && p.idB === pair.idB ? {
      ...p,
      dismissed: true
    } : p));
  };
  const handleUndismissEntityDup = pair => {
    setEntityDupPairs(ps => ps.map(p => p.idA === pair.idA && p.idB === pair.idB ? {
      ...p,
      dismissed: false
    } : p));
  };
  const handleScanAll = () => {
    const pairs = findDuplicatePairs(data.personas, dupPairs);
    if (pairs.length > 0) {
      setDupPairs(prev => {
        const existing = new Set(prev.map(p => p.idA + "|" + p.idB));
        return [...prev, ...pairs.filter(p => !existing.has(p.idA + "|" + p.idB))];
      });
    }
    setRoute({
      name: "duplicates"
    });
    window.scrollTo({
      top: 0
    });
  };
  const handleCreateManualDup = (idA, idB) => {
    if (!idA || !idB || idA === idB) return;
    const key = [idA, idB].sort().join("|");
    setDupPairs(prev => {
      if (prev.some(p => [p.idA, p.idB].sort().join("|") === key)) {
        // Pair already exists — un-dismiss it so it shows for review again
        return prev.map(p => [p.idA, p.idB].sort().join("|") === key ? {
          ...p,
          dismissed: false
        } : p);
      }
      return [...prev, {
        idA,
        idB,
        score: 5,
        dismissed: false,
        manual: true
      }];
    });
  };
  const handleCreateManualEntityDup = (idA, idB) => {
    if (!idA || !idB || idA === idB) return;
    const key = [idA, idB].sort().join("|");
    setEntityDupPairs(prev => {
      if (prev.some(p => [p.idA, p.idB].sort().join("|") === key)) {
        return prev.map(p => [p.idA, p.idB].sort().join("|") === key ? {
          ...p,
          dismissed: false
        } : p);
      }
      return [...prev, {
        idA,
        idB,
        score: 5,
        dismissed: false,
        kind: "entity",
        manual: true
      }];
    });
  };
  const handleCreateDemo = () => {
    const source = data.personas[0];
    if (!source) return;
    const demoId = "demo-" + Date.now();
    const demo = {
      ...source,
      id: demoId,
      last: source.last + " (copia)",
      city: source.city,
      status: "activo"
    };
    setData(d => {
      const next = {
        ...d,
        personas: [demo, ...d.personas]
      };
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
    return /*#__PURE__*/React.createElement(AuthScreen, {
      onLogin: email => {
        setUserEmail(email);
      }
    });
  }

  // Session valid but sessionStorage key missing (page reload after tab close)
  if (needsUnlock) {
    return /*#__PURE__*/React.createElement(UnlockScreen, {
      email: userEmail,
      onUnlock: async newEmail => {
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
      },
      onLogout: () => {
        clearSession();
        window.CryptoUtils?.clearSessionKey ? window.CryptoUtils.clearSessionKey() : (localStorage.removeItem("promeza_sk"), sessionStorage.removeItem("promeza_sk"));
        setUserEmail(null);
      }
    });
  }

  // Loading encrypted data
  if (!dataReady || !data) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
        gap: 12,
        color: "var(--ink-3)",
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        border: "3px solid var(--accent)",
        borderTopColor: "transparent",
        borderRadius: "50%",
        animation: "spin .7s linear infinite"
      }
    }), "Cargando datos seguros\xE2\u20AC\xA6");
  }
  let view;
  switch (route.name) {
    case "home":
      view = /*#__PURE__*/React.createElement(ViewErrorBoundary, {
        key: "home"
      }, /*#__PURE__*/React.createElement(Home, {
        t: t,
        lang: lang,
        data: data,
        go: go
      }));
      break;
    case "personas":
      view = /*#__PURE__*/React.createElement(PersonasList, {
        t: t,
        lang: lang,
        data: data,
        go: go,
        route: route,
        onImportPersonas: handleImportPersonas,
        globalQ: query,
        onBulkDelete: handleBulkDeletePersonas,
        onBulkUpdateStatus: handleBulkUpdatePersonas,
        onBulkAddTag: handleBulkAddTagPersonas,
        onBulkAddTask: handleBulkAddTask,
        segments: data.segments || [],
        onAddSegment: addSegment,
        onDeleteSegment: deleteSegment,
        users: window.PROMEZA_USERS || [],
        currentUser: userEmail
      });
      break;
    case "pipeline":
      view = /*#__PURE__*/React.createElement(PipelineView, {
        t: t,
        lang: lang,
        data: data,
        go: go,
        onUpdatePerson: handleUpdatePerson
      });
      break;
    case "entities":
      view = /*#__PURE__*/React.createElement(EntitiesList, {
        t: t,
        lang: lang,
        data: data,
        go: go,
        route: route,
        onImportEntities: handleImportEntities,
        globalQ: query
      });
      break;
    case "person":
      view = /*#__PURE__*/React.createElement(ViewErrorBoundary, {
        key: "person-" + route.id
      }, /*#__PURE__*/React.createElement(PersonProfile, {
        id: route.id,
        t: t,
        lang: lang,
        data: data,
        go: go,
        goBack: goBack,
        addComment: addComment,
        onEditComment: editComment,
        onDeleteComment: deleteComment,
        onUpdatePerson: handleUpdatePerson,
        onEditPerson: handleEditPerson,
        onDeletePerson: handleDeletePerson,
        interactions: data.interactions[route.id] || [],
        onAddInteraction: item => addInteraction(route.id, item),
        onDeleteInteraction: id => deleteInteraction(route.id, id),
        tasks: data.tasks[route.id] || [],
        onAddTask: task => addTask(route.id, task),
        onToggleTask: id => toggleTask(route.id, id),
        onDeleteTask: id => deleteTask(route.id, id),
        onResolveDuplicate: resolved => handleResolveDuplicate(route.id, resolved),
        inDupPair: dupPersonaIds.has(route.id),
        changelog: data.changelog[route.id] || [],
        users: window.PROMEZA_USERS || [],
        currentUser: userEmail,
        attachments: data.attachments[route.id] || [],
        onAddAttachment: att => addAttachment(route.id, att),
        onDeleteAttachment: attId => deleteAttachment(route.id, attId)
      }));
      break;
    case "tasks":
      view = /*#__PURE__*/React.createElement(GlobalTasksView, {
        t: t,
        lang: lang,
        data: data,
        go: go,
        tasks: data.tasks,
        users: window.PROMEZA_USERS || [],
        currentUser: userEmail,
        onAddTask: addTask,
        onToggleTask: toggleTask,
        onDeleteTask: deleteTask,
        dupCount: totalDups,
        dupPairs: dupPairs,
        entityDupPairs: entityDupPairs
      });
      break;
    case "my-tasks":
      view = /*#__PURE__*/React.createElement(MyTasksView, {
        t: t,
        lang: lang,
        data: data,
        go: go,
        tasks: data.tasks,
        onToggleTask: toggleTask,
        onDeleteTask: deleteTask,
        currentUser: userEmail,
        users: window.PROMEZA_USERS || []
      });
      break;
    case "entity":
      view = /*#__PURE__*/React.createElement(ViewErrorBoundary, {
        key: "entity-" + route.id
      }, /*#__PURE__*/React.createElement(EntityProfile, {
        id: route.id,
        t: t,
        lang: lang,
        data: data,
        go: go,
        goBack: goBack,
        addComment: addComment,
        onEditComment: editComment,
        onDeleteComment: deleteComment,
        onUpdateEntity: handleUpdateEntity,
        onUpdatePerson: handleUpdatePerson,
        onEditEntity: handleEditEntity,
        onDeleteEntity: handleDeleteEntity,
        changelog: data.changelog[route.id] || [],
        attachments: data.attachments[route.id] || [],
        onAddAttachment: att => addAttachment(route.id, att),
        onDeleteAttachment: attId => deleteAttachment(route.id, attId),
        tasks: data.tasks[route.id] || [],
        onAddTask: task => addTask(route.id, task),
        onToggleTask: id => toggleTask(route.id, id),
        onDeleteTask: id => deleteTask(route.id, id),
        onResolveDuplicate: resolved => handleResolveEntityDuplicate(route.id, resolved),
        inDupPair: dupEntityIds.has(route.id),
        users: window.PROMEZA_USERS || [],
        currentUser: userEmail
      }));
      break;
    case "projects":
      view = /*#__PURE__*/React.createElement(ProjectsListView, {
        lang: lang,
        data: data,
        go: go,
        onAddProject: addProject
      });
      break;
    case "project":
      view = /*#__PURE__*/React.createElement(ProjectDetailView, {
        id: route.id,
        lang: lang,
        data: data,
        go: go,
        onUpdateProject: updateProject,
        onDeleteProject: deleteProject,
        onAddMember: addProjectMember,
        onRemoveMember: removeProjectMember,
        comments: data.comments[route.id] || [],
        onAddComment: (projectId, text) => addComment(projectId, text),
        attachments: data.attachments[route.id] || [],
        onAddAttachment: att => addAttachment(route.id, att),
        onDeleteAttachment: attId => deleteAttachment(route.id, attId)
      });
      break;
    case "campaigns":
      view = /*#__PURE__*/React.createElement(CampaignsView, {
        lang: lang,
        data: data,
        go: go,
        onSaveCampaign: saveCampaign
      });
      break;
    case "calendar":
      view = /*#__PURE__*/React.createElement(CalendarView, {
        lang: lang,
        data: data,
        go: go,
        onAddCalendarEvent: addCalendarEvent,
        onDeleteCalendarEvent: deleteCalendarEvent,
        onAddTask: addTask
      });
      break;
    case "goals":
      view = /*#__PURE__*/React.createElement(GoalsView, {
        lang: lang,
        data: data,
        go: go,
        onAddGoal: addGoal,
        onUpdateGoal: updateGoal,
        onDeleteGoal: deleteGoal
      });
      break;
    case "county":
      view = /*#__PURE__*/React.createElement(CountyView, {
        t: t,
        lang: lang,
        data: data,
        go: go
      });
      break;
    case "map":
      view = /*#__PURE__*/React.createElement(MapPage, {
        t: t,
        lang: lang,
        data: data,
        go: go
      });
      break;
    case "duplicates":
      view = /*#__PURE__*/React.createElement(DuplicatesPage, {
        pairs: dupPairs,
        entityPairs: entityDupPairs,
        data: data,
        onMerge: handleMergePersonas,
        onMergeWithData: handleMergeWithData,
        onMergeEntity: handleMergeEntities,
        onMergeEntityWithData: handleMergeEntitiesWithData,
        onDismiss: handleDismissDup,
        onUndismiss: handleUndismissDup,
        onDismissEntity: handleDismissEntityDup,
        onUndismissEntity: handleUndismissEntityDup,
        onScanAll: handleScanAll,
        onCreateDemo: handleCreateDemo,
        onCreateManual: handleCreateManualDup,
        onCreateManualEntity: handleCreateManualEntityDup,
        onOpenHistory: openHistory,
        initialSearch: route.q || "",
        initialTab: route.tab || "",
        t: t,
        lang: lang
      });
      break;
    default:
      view = /*#__PURE__*/React.createElement(Home, {
        t: t,
        lang: lang,
        data: data,
        go: go
      });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, sideOpen && /*#__PURE__*/React.createElement("div", {
    className: "sidebar-overlay visible",
    onClick: () => setSideOpen(false)
  }), /*#__PURE__*/React.createElement(Sidebar, {
    route: route,
    go: go,
    t: t,
    counts: counts,
    mobileOpen: sideOpen,
    onClose: () => setSideOpen(false)
  }), /*#__PURE__*/React.createElement(Topbar, {
    t: t,
    lang: lang,
    setLang: setLang,
    query: query,
    setQuery: setQuery,
    onSearchSubmit: () => {
      if (query.trim() && route.name !== "personas" && route.name !== "entities") setRoute({
        name: "personas"
      });
    },
    onSettings: () => setModal("settings"),
    onLogout: () => {
      clearSession();
      window.CryptoUtils?.clearSessionKey ? window.CryptoUtils.clearSessionKey() : (localStorage.removeItem("promeza_sk"), sessionStorage.removeItem("promeza_sk"));
      if (window.AIRTABLE) window.AIRTABLE.logAccess(userEmail, "Cierre de sesiÃ³n");
      setUserEmail(null);
    },
    userEmail: userEmail,
    data: data,
    go: go,
    onMenuToggle: () => setSideOpen(v => !v),
    dupCount: counts.dups,
    onGoBack: goBack,
    canGoBack: routeHistory.length > 0,
    atSyncing: atSyncing,
    onSyncNow: syncFromAirtable
  }), atSyncMsg && /*#__PURE__*/React.createElement("div", {
    onClick: () => setAtSyncMsg(null),
    style: {
      position: "fixed",
      bottom: 16,
      left: "50%",
      transform: "translateX(-50%)",
      background: atSyncMsg.type === "ok" ? "#166534" : atSyncMsg.type === "warn" ? "#92400e" : "#991b1b",
      color: "#fff",
      padding: "8px 18px",
      borderRadius: 20,
      fontSize: 12.5,
      fontWeight: 500,
      zIndex: 9999,
      cursor: "pointer",
      boxShadow: "0 2px 12px rgba(0,0,0,.25)",
      maxWidth: "90vw",
      textAlign: "center"
    }
  }, atSyncMsg.text), /*#__PURE__*/React.createElement("main", {
    className: "main"
  }, view), modal === "new-person" && /*#__PURE__*/React.createElement(NewPersonForm, {
    t: t,
    lang: lang,
    data: data,
    onClose: () => {
      setModal(null);
      setModalPrefill(null);
    },
    onSave: handleSavePerson,
    prefillData: modalPrefill
  }), modal === "new-entity" && /*#__PURE__*/React.createElement(NewEntityForm, {
    t: t,
    lang: lang,
    data: data,
    onClose: () => setModal(null),
    onSave: handleSaveEntity
  }), modal === "settings" && /*#__PURE__*/React.createElement(SettingsModal, {
    t: t,
    lang: lang,
    data: data,
    cryptoKey: cryptoKey,
    onClose: () => setModal(null),
    onLogout: () => {
      clearSession();
      window.CryptoUtils?.clearSessionKey ? window.CryptoUtils.clearSessionKey() : (localStorage.removeItem("promeza_sk"), sessionStorage.removeItem("promeza_sk"));
      setUserEmail(null);
    },
    onRestoreData: setData,
    onForcePull: forcePullFromAirtable
  }), historyOpen && /*#__PURE__*/React.createElement("div", {
    className: "modal-veil",
    onClick: () => setHistoryOpen(false),
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(15,21,48,.45)",
      display: "grid",
      placeItems: "center",
      zIndex: 200,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--bg)",
      borderRadius: 14,
      width: "min(640px, 96vw)",
      maxHeight: "82vh",
      display: "flex",
      flexDirection: "column",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 20px",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 16
    }
  }, lang === "es" ? "Historial de fusiones y acciones" : "Merge & action history"), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: () => setHistoryOpen(false)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 20px",
      overflowY: "auto"
    }
  }, historyLog === null && /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, lang === "es" ? "Cargando…" : "Loading…"), historyLog !== null && historyLog.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, lang === "es" ? "Aún no hay acciones registradas. Las fusiones que hagas de ahora en adelante aparecerán aquí." : "No actions logged yet."), historyLog !== null && historyLog.length > 0 && historyLog.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      padding: "9px 0",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, e.type === "merge" ? "🔀" : "•"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-1)"
    }
  }, e.detail), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-4)",
      marginTop: 2
    }
  }, e.by || "—", " \xB7 ", e.ts ? new Date(e.ts).toLocaleString() : ""))))))), modal === "edit-person" && editingId && (() => {
    const person = data.personas.find(p => p.id === editingId);
    if (!person) return null;
    return /*#__PURE__*/React.createElement(NewPersonForm, {
      t: t,
      lang: lang,
      data: data,
      onClose: () => {
        setModal(null);
        setEditingId(null);
      },
      onSave: handleSaveEditPerson,
      initialData: person,
      editMode: true
    });
  })(), modal === "edit-entity" && editingId && (() => {
    const entity = data.entities.find(e => e.id === editingId);
    if (!entity) return null;
    return /*#__PURE__*/React.createElement(NewEntityForm, {
      t: t,
      lang: lang,
      data: data,
      onClose: () => {
        setModal(null);
        setEditingId(null);
      },
      onSave: handleSaveEditEntity,
      initialData: entity,
      editMode: true
    });
  })(), showReminders && data && /*#__PURE__*/React.createElement(RemindersModal, {
    lang: lang,
    data: data,
    onClose: () => setShowReminders(false),
    go: go
  }));
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));
