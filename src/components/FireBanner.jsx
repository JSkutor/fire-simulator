import React from "react";

export default function FireBanner({ fireYear, onClear }) {
  if (fireYear === null) return null;
  return (
    <div className="bg-gradient-to-r from-orange-50 to-rose-50 border border-orange-300 rounded-2xl p-4 flex items-center justify-between">
      <div className="text-sm text-orange-900">
        <span className="text-base mr-1">🔥</span>
        <span className="font-semibold">FIRE 시점: {fireYear}년차</span>
        <span className="text-orange-700 ml-2">
          — 이 시점부터 매년 자산 잔액의 4% 인출이 반영됩니다
        </span>
      </div>
      <button
        onClick={onClear}
        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white border border-orange-300 text-orange-700 hover:bg-orange-100 transition"
      >
        해제
      </button>
    </div>
  );
}
