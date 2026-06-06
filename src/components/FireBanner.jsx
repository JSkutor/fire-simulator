import React from "react";

export default function FireBanner({ fireYear, onClear, locale }) {
  const { t } = locale;

  if (fireYear === null) return null;
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-orange-300 bg-gradient-to-r from-orange-50 to-rose-50 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 text-sm leading-relaxed text-orange-900">
        <span className="mr-1 text-base">🔥</span>
        <span className="font-semibold">{t.fireLabel(fireYear)}</span>
        <span className="block text-orange-700 sm:ml-2 sm:inline">
          {t.fireDesc}
        </span>
      </div>
      <button
        type="button"
        onClick={onClear}
        className="self-start rounded-lg border border-orange-300 bg-white px-3 py-2 text-sm font-medium text-orange-700 transition hover:bg-orange-100 sm:py-1.5"
      >
        {t.fireClear}
      </button>
    </div>
  );
}
