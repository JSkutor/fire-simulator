import React from "react";
import { INFLATION } from "../utils/calc";

export default function InputCard({ base, setBase, rate, setRate }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
      <h2 className="text-sm font-semibold text-slate-500 mb-4">기본 입력</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-slate-500 mb-1">
            기초자산 (원)
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={base.toLocaleString("ko-KR")}
            onChange={(e) => {
              const raw = e.target.value.replace(/[^0-9]/g, "");
              setBase(raw ? Number(raw) : 0);
            }}
            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
          <p className="text-xs text-slate-400 mt-1">예) 300000000 = 3억원</p>
        </div>
        <div>
          <label className="block text-xs text-slate-500 mb-1">
            연간 전체자산 수익률 (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value) || 0)}
            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          />
          <p className="text-xs text-slate-400 mt-1">
            인플레이션 {(INFLATION * 100).toFixed(1)}% 고정
          </p>
        </div>
      </div>
    </div>
  );
}
