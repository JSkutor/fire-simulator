import React from "react";
import PeriodRow from "./PeriodRow";
import { normalizePeriod } from "../utils/periodValidation";

export default function PeriodTable({ periods, setPeriods }) {
  const updateRow = (idx, next) => {
    const arr = periods.slice();
    arr[idx] = next;
    setPeriods(arr);
  };
  const removeRow = (idx) => {
    setPeriods(periods.filter((_, i) => i !== idx));
  };
  const addRow = () => {
    const normalizedPeriods = periods.map((period) => normalizePeriod(period));
    const last = normalizedPeriods[normalizedPeriods.length - 1];
    const start = last ? Math.min(40, last.end + 1) : 0;
    const end = Math.min(40, start + 4);
    setPeriods([...normalizedPeriods, { start, end, amount: 0 }]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h2 className="text-sm font-semibold text-slate-500">
          저축 / 지출 구간
        </h2>
        <button
          type="button"
          onClick={addRow}
          className="shrink-0 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700 sm:py-1.5"
        >
          + 구간 추가
        </button>
      </div>

      {periods.length === 0 ? (
        <p className="text-sm text-slate-400 py-4 text-center">
          구간이 없습니다
        </p>
      ) : (
        <div className="divide-y divide-slate-100">
          {periods.map((p, i) => (
            <PeriodRow
              key={i}
              period={p}
              onChange={(next) => updateRow(i, next)}
              onRemove={() => removeRow(i)}
            />
          ))}
        </div>
      )}
      <p className="text-xs leading-relaxed text-slate-400 mt-3">
        * 양수 = 저축, 음수 = 지출. 겹치는 구간은 합산됩니다.
      </p>
      <p className="text-xs leading-relaxed text-slate-400 mt-1">
        * 입력 금액은 현재 가치 기준이며, 실제 입출금은 매년 물가 상승률을
        반영해 계산됩니다.
      </p>
    </div>
  );
}
