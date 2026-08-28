import React from "react";

export default function GuideSection({ locale, onApplyPreset }) {
  const { t } = locale;

  if (!t.guides || t.guides.length === 0) return null;

  return (
    <section className="space-y-6 pt-4">
      {/* Section Header */}
      <div className="text-center md:text-left space-y-1.5 px-1">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
          <span>{t.guideSectionBadge}</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
          {t.guideSectionTitle}
        </h2>
        <p className="text-sm text-slate-500 max-w-2xl">
          {t.guideSectionSubtitle}
        </p>
      </div>

      {/* Preset Quick Loader */}
      {t.presets && t.presets.length > 0 && onApplyPreset && (
        <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-blue-50/30 p-4 md:p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              {t.presetsTitle}
            </div>
            <span className="text-[11px] text-slate-400">
              {locale.isEn ? "1-Click Setup" : "원클릭 세팅"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {t.presets.map((preset) => (
              <div
                key={preset.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
              >
                <div className="space-y-1">
                  <div className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                    {preset.name}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {preset.desc}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onApplyPreset(preset)}
                  className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-50 py-1.5 px-3 text-xs font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white active:scale-98"
                >
                  <span>{t.presetApply}</span>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Guide Cards */}
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        {t.guides.map((guide, idx) => (
          <article
            key={guide.id}
            id={guide.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7 shadow-sm transition hover:shadow-md space-y-4"
          >
            {/* Guide Header */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-blue-600">
                <span className="rounded bg-blue-100/80 px-1.5 py-0.5 text-blue-700">
                  {guide.badge || `0${idx + 1}`}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                {guide.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 font-medium">
                {guide.subtitle}
              </p>
            </div>

            {/* Guide Content */}
            <div className="space-y-2.5 text-sm leading-relaxed text-slate-700">
              {guide.content.map((paragraph, pIdx) => {
                // Parse simple markdown bold **text**
                const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                return (
                  <p key={pIdx}>
                    {parts.map((part, partIdx) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return (
                          <strong
                            key={partIdx}
                            className="font-semibold text-slate-900"
                          >
                            {part.slice(2, -2)}
                          </strong>
                        );
                      }
                      return part;
                    })}
                  </p>
                );
              })}
            </div>

            {/* Key Takeaways Box */}
            {guide.takeaways && guide.takeaways.length > 0 && (
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 text-xs space-y-2 text-emerald-950">
                <div className="flex items-center gap-1.5 font-bold text-emerald-800 uppercase tracking-wide">
                  <svg
                    className="w-4 h-4 text-emerald-600 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    {locale.isEn ? "Key Takeaway" : "핵심 요약 & 실전 팁"}
                  </span>
                </div>
                <ul className="space-y-1.5 pl-5 list-disc text-emerald-900/90 leading-relaxed">
                  {guide.takeaways.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
