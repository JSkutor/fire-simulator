import React from "react";
import { fmtKRW, fmtManwon } from "../utils/format";
import { WITHDRAW_RATE } from "../utils/calc";

export default function ChartTooltip({ active, payload, fireYear }) {
  if (!active || !payload || !payload.length) return null;
  const p = payload[0].payload;

  const fireSet = Number.isFinite(fireYear) && fireYear >= 0;
  const isFire = fireSet && p.year === fireYear;
  const isAfter = fireSet && p.year >= fireYear;
  const flowMonthN = (p.nominal * WITHDRAW_RATE) / 12;
  const flowMonthR = (p.real * WITHDRAW_RATE) / 12;

  let hint;
  if (!fireSet) hint = "클릭 → FIRE 시점 설정";
  else if (isFire) hint = "클릭 → FIRE 시점 해제";
  else hint = "클릭 → FIRE 시점 변경";

  return (
    <div className="min-w-[200px] max-w-[calc(100vw-2rem)] rounded-xl border border-slate-200 bg-white/95 p-3 text-xs shadow-lg backdrop-blur sm:min-w-[220px]">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-slate-900 text-sm">{p.year}년차</span>
        {isFire && (
          <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 font-semibold text-[10px]">
            🔥 FIRE 시점
          </span>
        )}
        {!isFire && isAfter && (
          <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-semibold text-[10px]">
            은퇴 후
          </span>
        )}
      </div>

      <div className="space-y-1">
        <Row
          label="명목 자산"
          value={fmtKRW(p.nominal)}
          color="text-blue-600"
        />
        <Row
          label="실질 자산"
          value={fmtKRW(p.real)}
          color="text-emerald-600"
        />
      </div>

      <hr className="my-2 border-slate-200" />

      <div className="space-y-1">
        <Row
          label={isAfter ? "명목 인출액" : "명목 예상 인출액"}
          value={`월 ${fmtManwon(flowMonthN)}`}
          color="text-slate-700"
        />
        <Row
          label={isAfter ? "실질 인출액" : "실질 예상 인출액"}
          value={`월 ${fmtManwon(flowMonthR)}`}
          color="text-slate-700"
        />
      </div>

      {(p.flow !== 0 || isAfter) && <hr className="my-2 border-slate-200" />}

      {p.flow !== 0 && (
        <Row
          label="저축/지출"
          value={fmtManwon(p.flow, true)}
          color={p.flow > 0 ? "text-emerald-600" : "text-rose-600"}
        />
      )}
      {isAfter && (
        <Row
          label="4% 연간 인출"
          value={`-${fmtManwon(p.withdrawal)}`}
          color="text-orange-600"
        />
      )}

      <hr className="my-2 border-slate-200" />
      <div className="text-[11px] text-slate-400 italic">{hint}</div>
    </div>
  );
}

function Row({ label, value, color }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-slate-500">{label}</span>
      <span className={`font-semibold tabular-nums ${color}`}>{value}</span>
    </div>
  );
}
