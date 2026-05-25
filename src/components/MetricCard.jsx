import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";

export default function MetricCard({
  title,
  subtitle,
  value,
  formatter,
  accent = "slate",
  isProjected = false, // 상태를 제어할 prop 추가 (true일 경우 옅어짐)
}) {
  // isProjected 상태에 따라 텍스트 색상의 투명도를 다르게 적용합니다.
  const textColors = {
    slate: isProjected ? "text-slate-900/40" : "text-slate-900",
    blue: isProjected ? "text-blue-600/40" : "text-blue-600",
    green: isProjected ? "text-emerald-600/40" : "text-emerald-600",
    orange: isProjected ? "text-orange-600/40" : "text-orange-600",
    amber: isProjected ? "text-amber-600/40" : "text-amber-600",
  };

  // 이전 value 값을 저장하기 위한 ref 생성 (초기값 0)
  const prevValueRef = useRef(0);

  // 컴포넌트가 렌더링된 직후, 현재 value를 prevValueRef에 저장합니다.
  // 다음 렌더링 때 이 값은 '이전 값'으로 사용됩니다.
  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return (
    <div className="min-w-0 bg-white rounded-2xl shadow-sm border border-slate-200 p-3 sm:p-5">
      <div className="flex min-w-0 items-baseline justify-between gap-2 mb-1">
        {/* 타이틀과 서브타이틀도 전체적인 톤을 맞추기 위해 살짝 흐리게 처리합니다 */}
        <span
          className={`min-w-0 text-xs font-semibold transition-colors duration-300 ${isProjected ? "text-slate-400" : "text-slate-500"}`}
        >
          {title}
        </span>
        {subtitle && (
          <span
            className={`hidden shrink-0 text-[11px] transition-colors duration-300 sm:inline ${isProjected ? "text-slate-300" : "text-slate-400"}`}
          >
            {subtitle}
          </span>
        )}
      </div>
      <div
        className={`break-keep text-lg font-bold leading-tight tabular-nums transition-colors duration-300 sm:text-2xl ${textColors[accent] || textColors.slate}`}
      >
        <CountUp
          start={prevValueRef.current}
          end={value}
          duration={0.4}
          useEasing={true}
          formattingFn={formatter} // 매 프레임마다 숫자가 이 함수를 거쳐서 렌더링됩니다.
        />
      </div>
    </div>
  );
}
