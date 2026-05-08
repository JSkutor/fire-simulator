import React from 'react';

export default function PeriodRow({ period, onChange, onRemove }) {
  const amount = Number(period.amount) || 0;
  const isSaving = amount > 0;
  const isSpending = amount < 0;
  const borderColor = isSaving
    ? 'border-emerald-400'
    : isSpending
    ? 'border-rose-400'
    : 'border-slate-300';

  return (
    <div className="flex flex-wrap items-center gap-2 py-2">
      <input
        type="number"
        min="1"
        max="40"
        value={period.start}
        onChange={(e) => onChange({ ...period, start: Number(e.target.value) })}
        className="w-16 px-2 py-1.5 rounded border border-slate-300 text-sm text-center"
      />
      <span className="text-slate-400 text-sm">~</span>
      <input
        type="number"
        min="1"
        max="40"
        value={period.end}
        onChange={(e) => onChange({ ...period, end: Number(e.target.value) })}
        className="w-16 px-2 py-1.5 rounded border border-slate-300 text-sm text-center"
      />
      <span className="text-slate-400 text-sm ml-1">년차</span>

      <input
        type="number"
        value={period.amount}
        onChange={(e) => onChange({ ...period, amount: Number(e.target.value) })}
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
