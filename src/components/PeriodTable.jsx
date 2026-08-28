import React from "react";
import PeriodRow from "./PeriodRow";
import { normalizePeriod } from "../utils/periodValidation";
import { trackPeriodAdded, trackPeriodRemoved } from "../utils/analytics";

export default function PeriodTable({ periods, setPeriods, locale }) {
  const { t } = locale;

  const updateRow = (idx, next) => {
    const arr = periods.slice();
    arr[idx] = next;
    setPeriods(arr);
  };
  const removeRow = (idx) => {
    const nextArr = periods.filter((_, i) => i !== idx);
    setPeriods(nextArr);
    trackPeriodRemoved(nextArr.length);
  };
  const addRow = () => {
    const normalizedPeriods = periods.map((period) => normalizePeriod(period));
    const last = normalizedPeriods[normalizedPeriods.length - 1];
    const start = last ? Math.min(40, last.end + 1) : 0;
    const end = Math.min(40, start + 4);
    const nextArr = [...normalizedPeriods, { start, end, amount: 0 }];
    setPeriods(nextArr);
    trackPeriodAdded(nextArr.length);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h2 className="text-sm font-semibold text-slate-500">
          {t.periodTitle}
        </h2>
        <button
          type="button"
          onClick={addRow}
          className="shrink-0 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700 sm:py-1.5"
        >
          {t.periodAdd}
        </button>
      </div>

      {periods.length === 0 ? (
        <p className="text-sm text-slate-400 py-4 text-center">
          {t.periodEmpty}
        </p>
      ) : (
        <div className="divide-y divide-slate-100">
          {periods.map((p, i) => (
            <PeriodRow
              key={i}
              period={p}
              onChange={(next) => updateRow(i, next)}
              onRemove={() => removeRow(i)}
              locale={locale}
            />
          ))}
        </div>
      )}
      <p className="text-xs leading-relaxed text-slate-400 mt-3">
        {t.periodNote1}
      </p>
      <p className="text-xs leading-relaxed text-slate-400 mt-1">
        {t.periodNote2}
      </p>
    </div>
  );
}
