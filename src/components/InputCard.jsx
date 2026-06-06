import React from "react";

export default function InputCard({ base, setBase, rate, setRate, locale }) {
  const { t, isEn, inflation } = locale;

  const formatInputValue = (val) => {
    if (val === 0) return "";
    return isEn
      ? val.toLocaleString("en-US")
      : val.toLocaleString("ko-KR");
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-5">
      <h2 className="text-sm font-semibold text-slate-500 mb-4">{t.inputTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-slate-500 mb-1">
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
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:py-2 sm:text-sm"
          />
          <p className="text-xs leading-relaxed text-slate-400 mt-1">
            {t.baseAssetHint}
          </p>
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">
            {t.rateLabel}
          </label>
          <input
            type="number"
            step="0.1"
            value={rate === 0 || rate === "0" ? "" : rate}
            placeholder="0"
            onChange={(e) => setRate(Number(e.target.value) || 0)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:py-2 sm:text-sm"
          />
          <p className="text-xs leading-relaxed text-slate-400 mt-1">
            {t.inflationHint((inflation * 100).toFixed(1))}
          </p>
        </div>
      </div>
    </div>
  );
}
