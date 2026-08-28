import React from "react";

export default function InputCard({
  base,
  setBase,
  rate,
  setRate,
  inflation,
  setInflation,
  locale,
}) {
  const { t, lang, inflation: defaultInflation } = locale;

  const formatInputValue = (val) => {
    if (val === 0) return "";
    return Number(val).toLocaleString(lang === "en" ? "en-US" : lang === "ko" ? "ko-KR" : undefined);
  };

  const currentInflationPct = Number(((inflation ?? defaultInflation) * 100).toFixed(1));

  const presets = [
    { label: t.inflationPresets?.target || "2.0%", value: 0.02 },
    { label: t.inflationPresets?.avg || "2.5%", value: 0.025 },
    { label: t.inflationPresets?.high || "3.5%", value: 0.035 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-5">
      <h2 className="text-sm font-semibold text-slate-500 mb-4">{t.inputTitle}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Base Asset */}
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            {t.baseAssetLabel}
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={formatInputValue(base)}
            placeholder={t.baseAssetPlaceholder}
            onChange={(e) => {
              const raw = e.target.value.replace(/[^0-9]/g, "");
              setBase(raw ? Number(raw) : 0);
            }}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:py-2 sm:text-sm font-semibold text-slate-800"
          />
          <p className="text-xs leading-relaxed text-slate-400 mt-1">
            {t.baseAssetHint}
          </p>
        </div>

        {/* Return Rate */}
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            {t.rateLabel}
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.1"
              value={rate === 0 || rate === "0" ? "" : rate}
              placeholder="0"
              onChange={(e) => setRate(Number(e.target.value) || 0)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:py-2 sm:text-sm font-semibold text-slate-800"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-medium">%</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-400 mt-1">
            {rate >= 10 ? "🔥 고수익 추구" : rate >= 6 ? "📊 글로벌 지수 평균" : "🛡️ 안정형"}
          </p>
        </div>

        {/* Inflation Rate & Presets */}
        <div className="sm:col-span-2 md:col-span-1">
          <label className="block text-xs font-medium text-slate-600 mb-1">
            {t.inflationLabel || "인플레이션 (%)"}
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.1"
              value={currentInflationPct === 0 ? "" : currentInflationPct}
              placeholder="2.0"
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setInflation(Number.isFinite(val) ? val / 100 : defaultInflation);
              }}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:py-2 sm:text-sm font-semibold text-slate-800"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 font-medium">%</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {presets.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setInflation(p.value)}
                className={`text-[11px] px-2 py-0.5 rounded-md border transition font-medium ${
                  Math.abs(currentInflationPct - p.value * 100) < 0.05
                    ? "bg-blue-50 border-blue-300 text-blue-700 font-semibold"
                    : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
