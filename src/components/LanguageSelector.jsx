import React from "react";
import { LOCALES } from "../i18n/useLocale";

export default function LanguageSelector({ locale }) {
  const { lang, isEn, getSwitchUrl } = locale;

  return (
    <div className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50/80 p-0.5 text-xs shadow-sm">
      <a
        href={getSwitchUrl("en")}
        className={`flex items-center gap-1 rounded-md px-2 py-1 font-medium transition-all ${
          isEn
            ? "bg-white text-blue-600 shadow-sm"
            : "text-slate-500 hover:text-slate-800"
        }`}
        title="English"
      >
        <span>🇺🇸</span>
        <span>EN</span>
      </a>
      <a
        href={getSwitchUrl("ko")}
        className={`flex items-center gap-1 rounded-md px-2 py-1 font-medium transition-all ${
          !isEn
            ? "bg-white text-blue-600 shadow-sm"
            : "text-slate-500 hover:text-slate-800"
        }`}
        title="한국어"
      >
        <span>🇰🇷</span>
        <span>KO</span>
      </a>
    </div>
  );
}
