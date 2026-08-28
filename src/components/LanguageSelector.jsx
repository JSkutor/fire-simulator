import React, { useState, useRef, useEffect } from "react";
import { LOCALES, SUPPORTED_LANGS } from "../i18n/useLocale";

export default function LanguageSelector({ locale }) {
  const { lang, getSwitchUrl } = locale;
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const current = LOCALES[lang] || LOCALES.en;

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="text-sm">{current.flag}</span>
        <span>{current.name}</span>
        <svg
          className={`w-3.5 h-3.5 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-1.5 w-44 rounded-xl border border-slate-200 bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 animate-in fade-in-50 duration-100">
          {SUPPORTED_LANGS.map((code) => {
            const item = LOCALES[code];
            const active = code === lang;
            return (
              <a
                key={code}
                href={getSwitchUrl(code)}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs transition ${
                  active
                    ? "bg-blue-50 font-bold text-blue-700"
                    : "text-slate-700 hover:bg-slate-100 font-medium"
                }`}
                onClick={() => setOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{item.flag}</span>
                  <span>{item.name}</span>
                </div>
                {active && (
                  <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
