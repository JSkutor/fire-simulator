import React, { useEffect, useMemo, useState } from "react";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import ChartTooltip from "./ChartTooltip";
import { fmtAxis } from "../utils/format";
import { YEARS } from "../utils/calc";

export default function WealthChart({
  data,
  fireYear,
  hoveredYear,
  setHoveredYear,
  setFireYear,
}) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const yearProgress = (hoveredYear / YEARS) * 100;
  const xTicks = isMobile
    ? [0, 10, 20, 30, 40]
    : [0, 5, 10, 15, 20, 25, 30, 35, 40];
  const chartMargin = isMobile
    ? { top: 24, right: 8, left: -10, bottom: 4 }
    : { top: 30, right: 20, left: 0, bottom: 10 };
  const axisFontSize = isMobile ? 11 : 12;
  const yAxisWidth = isMobile ? 54 : 70;

  // FIRE 분리용 데이터 가공
  const chartData = useMemo(() => {
    return data.map((d) => {
      if (fireYear === null) {
        return {
          ...d,
          nominalPre: d.nominal,
          nominalPost: null,
          realPre: d.real,
          realPost: null,
        };
      }
      const onFire = d.year === fireYear;
      const before = d.year < fireYear;
      const after = d.year > fireYear;
      return {
        ...d,
        nominalPre: before || onFire ? d.nominal : null,
        nominalPost: after || onFire ? d.nominal : null,
        realPre: before || onFire ? d.real : null,
        realPost: after || onFire ? d.real : null,
      };
    });
  }, [data, fireYear]);

  const handleClick = (state) => {
    if (
      state &&
      state.activeLabel !== undefined &&
      state.activeLabel !== null
    ) {
      const y = Number(state.activeLabel);
      if (y === 0) return; // 0년차는 FIRE 지정 불가
      if (fireYear === y) setFireYear(null);
      else setFireYear(y);
    }
  };

  const handleMove = (state) => {
    if (
      state &&
      state.activeLabel !== undefined &&
      state.activeLabel !== null
    ) {
      setHoveredYear(Number(state.activeLabel));
    }
  };

  const handleFireToggle = () => {
    if (hoveredYear === 0) return;
    if (fireYear === hoveredYear) setFireYear(null);
    else setFireYear(hoveredYear);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h2 className="text-sm font-semibold text-slate-500">자산 성장 곡선</h2>
        <span className="hidden text-xs text-slate-400 md:inline">
          그래프를 클릭해 FIRE 시점을 지정하세요
        </span>
        <span className="text-xs font-medium text-slate-400 md:hidden">
          {hoveredYear}년차 선택
        </span>
      </div>

      <div
        className="h-[300px] sm:h-[340px] md:h-[420px]"
        style={{ width: "100%", cursor: isMobile ? "default" : "crosshair" }}
      >
        <ResponsiveContainer>
          <ComposedChart
            data={chartData}
            margin={chartMargin}
            onClick={handleClick}
            onMouseMove={handleMove}
            onMouseLeave={() => setHoveredYear(fireYear ?? 0)}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              vertical={!isMobile}
            />
            <XAxis
              dataKey="year"
              ticks={xTicks}
              tick={{ fontSize: axisFontSize, fill: "#64748b" }}
              label={{
                value: "년차",
                position: "insideBottomRight",
                offset: -5,
                fill: "#94a3b8",
                fontSize: axisFontSize,
              }}
            />
            <YAxis
              tickFormatter={fmtAxis}
              tick={{ fontSize: axisFontSize, fill: "#64748b" }}
              width={yAxisWidth}
            />
            <Tooltip
              content={<ChartTooltip fireYear={fireYear} />}
              cursor={{ stroke: "#94a3b8", strokeDasharray: "3 3" }}
              // fire 배지 잘림 이슈로 밑에 추가.
              allowEscapeViewBox={{ x: false, y: true }}
              wrapperStyle={{
                zIndex: 50,
                outline: "none",
                pointerEvents: "none",
              }}
              offset={16}
            />

            {fireYear === null ? (
              <>
                <Line
                  type="monotone"
                  dataKey="nominalPre"
                  name="명목 자산"
                  stroke="#2563eb"
                  strokeWidth={isMobile ? 2 : 2.5}
                  dot={false}
                  activeDot={{ r: isMobile ? 4 : 5 }}
                  isAnimationActive={false}
                />
                <Line
                  type="monotone"
                  dataKey="realPre"
                  name="실질 자산"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="5 4"
                  dot={false}
                  activeDot={{ r: isMobile ? 4 : 5 }}
                  isAnimationActive={false}
                />
              </>
            ) : (
              <>
                <Line
                  type="monotone"
                  dataKey="nominalPre"
                  name="명목 (은퇴 전)"
                  stroke="#2563eb"
                  strokeWidth={isMobile ? 2 : 2.5}
                  dot={false}
                  activeDot={{ r: isMobile ? 4 : 5 }}
                  connectNulls={false}
                  isAnimationActive={false}
                />
                <Line
                  type="monotone"
                  dataKey="nominalPost"
                  name="명목 (은퇴 후)"
                  stroke="#f97316"
                  strokeWidth={isMobile ? 2 : 2.5}
                  dot={false}
                  activeDot={{ r: isMobile ? 4 : 5 }}
                  connectNulls={false}
                  isAnimationActive={false}
                />
                <Line
                  type="monotone"
                  dataKey="realPre"
                  name="실질 (은퇴 전)"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="5 4"
                  dot={false}
                  activeDot={{ r: isMobile ? 4 : 5 }}
                  connectNulls={false}
                  isAnimationActive={false}
                />
                <Line
                  type="monotone"
                  dataKey="realPost"
                  name="실질 (은퇴 후)"
                  stroke="#eab308"
                  strokeWidth={2}
                  strokeDasharray="3 3"
                  dot={false}
                  activeDot={{ r: isMobile ? 4 : 5 }}
                  connectNulls={false}
                  isAnimationActive={false}
                />
                <ReferenceLine
                  x={fireYear}
                  stroke="#f97316"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  label={{
                    value: isMobile ? "FIRE" : "🔥 FIRE",
                    position: "top",
                    fill: "#ea580c",
                    fontSize: axisFontSize,
                    fontWeight: 600,
                    offset: isMobile ? 6 : 10,
                  }}
                />
              </>
            )}
            {isMobile && hoveredYear > 0 && hoveredYear !== fireYear && (
              <ReferenceLine
                x={hoveredYear}
                stroke="#2563eb"
                strokeWidth={1.25}
                strokeDasharray="3 3"
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 md:hidden">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold text-slate-500">
            선택 연도
          </span>
          <span className="text-sm font-bold tabular-nums text-slate-900">
            {hoveredYear}년차
          </span>
        </div>
        <input
          type="range"
          min="0"
          max={YEARS}
          step="1"
          value={hoveredYear}
          onChange={(e) => setHoveredYear(Number(e.target.value))}
          aria-label="선택 연도"
          aria-valuetext={`${hoveredYear}년차`}
          className="year-slider mt-3 w-full"
          style={{ "--year-progress": `${yearProgress}%` }}
        />
        <div className="mt-2 flex justify-between text-[10px] font-medium text-slate-400">
          <span>0</span>
          <span>10</span>
          <span>20</span>
          <span>30</span>
          <span>40</span>
        </div>
        <button
          type="button"
          onClick={handleFireToggle}
          disabled={hoveredYear === 0}
          className={`mt-3 w-full rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
            hoveredYear === 0
              ? "cursor-not-allowed bg-slate-200 text-slate-400"
              : fireYear === hoveredYear
                ? "border border-orange-300 bg-white text-orange-700"
                : "bg-slate-900 text-white hover:bg-slate-700"
          }`}
        >
          {hoveredYear === 0
            ? "0년차는 지정 불가"
            : fireYear === hoveredYear
              ? "FIRE 해제"
              : "이 연도를 FIRE로 지정"}
        </button>
      </div>

      {/* 범례 */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-xs">
        {fireYear === null ? (
          <>
            <LegendDot color="#2563eb" label="명목 자산" />
            <LegendDot color="#10b981" label="실질 자산" dashed />
          </>
        ) : (
          <>
            <LegendDot color="#2563eb" label="명목 (은퇴 전)" />
            <LegendDot color="#f97316" label="명목 (은퇴 후)" />
            <LegendDot color="#10b981" label="실질 (은퇴 전)" dashed />
            <LegendDot color="#eab308" label="실질 (은퇴 후)" dashed />
          </>
        )}
      </div>

      <p className="text-xs leading-relaxed text-slate-400 mt-3">
        * 명목 가치는 숫자 그대로의 금액, 실질 가치는 물가 상승을 반영해 현재
        구매력으로 환산한 금액입니다.
      </p>
      <p className="text-xs leading-relaxed text-slate-400 mt-2">
        * 인플레이션 2.3% = 한국 CPI 연평균 (2005~2024년, 통계청·World Bank
        기준)
      </p>
    </div>
  );
}

function LegendDot({ color, label, dashed = false }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="inline-block w-6 h-0"
        style={{
          borderTop: `${dashed ? "2px dashed" : "2px solid"} ${color}`,
        }}
      />
      <span className="text-slate-600">{label}</span>
    </div>
  );
}

function useMediaQuery(query) {
  const getMatches = () =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false;
  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const media = window.matchMedia(query);
    const handleChange = () => setMatches(media.matches);
    handleChange();

    if (media.addEventListener) {
      media.addEventListener("change", handleChange);
      return () => media.removeEventListener("change", handleChange);
    }

    media.addListener(handleChange);
    return () => media.removeListener(handleChange);
  }, [query]);

  return matches;
}
