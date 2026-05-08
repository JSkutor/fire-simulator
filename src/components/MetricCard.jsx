import React from 'react';

export default function MetricCard({ title, subtitle, value, accent = 'slate' }) {
  const colors = {
    slate: 'text-slate-900',
    blue: 'text-blue-600',
    green: 'text-emerald-600',
    orange: 'text-orange-600',
    amber: 'text-amber-600',
  };
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
      <div className="flex items-baseline justify-between mb-1">
        <span className="text-xs font-semibold text-slate-500">{title}</span>
        {subtitle && <span className="text-[11px] text-slate-400">{subtitle}</span>}
      </div>
      <div className={`text-2xl font-bold tabular-nums ${colors[accent] || colors.slate}`}>
        {value}
      </div>
    </div>
  );
}
