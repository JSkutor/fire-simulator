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
  const yearInputClass = `w-full sm:w-16 rounded border px-2 py-2 text-center text-base sm:py-1.5 sm:text-sm ${
    isRangeInvalid ? "border-rose-400 bg-rose-50" : "border-slate-300"
  }`;

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_2rem] items-center gap-2 py-3 sm:flex sm:flex-wrap sm:py-2">
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
      <span className="text-slate-400 text-sm sm:ml-1">년차</span>

      <button
        type="button"
        onClick={onRemove}
        className="flex h-8 w-8 items-center justify-center justify-self-end rounded-full text-lg leading-none text-slate-400 transition hover:bg-rose-50 hover:text-rose-500 sm:order-last sm:ml-auto sm:h-7 sm:w-7 sm:text-base"
        aria-label="구간 삭제"
      >
        ×
      </button>

      <div className="col-span-5 flex items-center gap-2 sm:contents">
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
          className={`min-w-0 flex-1 rounded border-2 px-2 py-2 text-right text-base sm:w-28 sm:flex-none sm:py-1.5 sm:text-sm ${borderColor} focus:outline-none`}
        />
        <span className="shrink-0 text-sm text-slate-500">만원/년</span>

        {isSaving && (
          <span className="ml-auto rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 sm:ml-1">
            저축
          </span>
        )}
        {isSpending && (
          <span className="ml-auto rounded-full bg-rose-100 px-2 py-0.5 text-xs font-medium text-rose-700 sm:ml-1">
            지출
          </span>
        )}
      </div>
    </div>
  );
}
