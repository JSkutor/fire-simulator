import React from "react";
import {
  hasInvalidYearRange,
  normalizePeriod,
  parseNumberInput,
} from "../utils/periodValidation";

export default function PeriodRow({ period, onChange, onRemove }) {
  const amount = Number(period.amount) || 0;
  const isSaving = amount > 0;
  const isSpending = amount < 0;
  const isRangeInvalid = hasInvalidYearRange(period);
  const borderColor = isSaving
    ? "border-emerald-400"
    : isSpending
      ? "border-rose-400"
      : "border-slate-300";
  const yearInputClass = `w-16 px-2 py-1.5 rounded border text-sm text-center ${
    isRangeInvalid ? "border-rose-400 bg-rose-50" : "border-slate-300"
  }`;

  return (
    <div className="flex flex-wrap items-center gap-2 py-2">
      <input
        type="number"
        min="0"
        max="40"
        step="1"
        aria-label="시작 년차"
        value={period.start}
        onChange={(e) =>
          onChange({
            ...period,
            start: parseNumberInput(e.target.value),
          })
        }
        onBlur={() => onChange(normalizePeriod(period, "start"))}
        className={yearInputClass}
      />
      <span className="text-slate-400 text-sm">~</span>
      <input
        type="number"
        min="0"
        max="40"
        step="1"
        aria-label="종료 년차"
        value={period.end}
        onChange={(e) =>
          onChange({ ...period, end: parseNumberInput(e.target.value) })
        }
        onBlur={() => onChange(normalizePeriod(period, "end"))}
        className={yearInputClass}
      />
      <span className="text-slate-400 text-sm ml-1">년차</span>

      <input
        type="number"
        value={
          period.amount === 0 || period.amount === "0" ? "" : period.amount
        }
        onChange={(e) =>
          onChange({ ...period, amount: parseNumberInput(e.target.value) })
        }
        onBlur={() => onChange(normalizePeriod(period))}
        aria-label="연간 저축 또는 지출 금액"
        className={`w-28 px-2 py-1.5 rounded border-2 text-sm text-right ${borderColor} focus:outline-none`}
      />
      <span className="text-slate-500 text-sm">만원/년</span>

      {isSaving && (
        <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-emerald-100 text-emerald-700 font-medium">
          저축
        </span>
      )}
      {isSpending && (
        <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-rose-100 text-rose-700 font-medium">
          지출
        </span>
      )}

      <button
        onClick={onRemove}
        className="ml-auto w-7 h-7 flex items-center justify-center rounded-full text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition"
        aria-label="구간 삭제"
      >
        ×
      </button>
    </div>
  );
}
