import React, { useState, useRef, useEffect } from "react";
import { LOCALES, SUPPORTED_LANGS } from "../i18n/useLocale";
import { trackLanguageSwitched } from "../utils/analytics";

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

  const handleSelectLang = (code) => {
    trackLanguageSwitched(lang, code);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-slate-600 shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <svg
          className="w-3.5 h-3.5 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        <span className="text-xs">{current.flag}</span>
        <span className="font-semibold text-slate-700">{current.name}</span>
        <svg
          className={`w-3 h-3 text-slate-400 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-1.5 w-44 rounded-xl border border-slate-200 bg-white p-1 shadow-lg ring-1 ring-black/5 animate-in fade-in-50 duration-100">
          <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
            Select Language
          </div>
          {SUPPORTED_LANGS.map((code) => {
            const item = LOCALES[code];
            const active = code === lang;
            return (
              <a
                key={code}
                href={getSwitchUrl(code)}
                className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition ${
                  active
                    ? "bg-blue-50 font-bold text-blue-700"
                    : "text-slate-700 hover:bg-slate-100 font-medium"
                }`}
                onClick={() => handleSelectLang(code)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{item.flag}</span>
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
