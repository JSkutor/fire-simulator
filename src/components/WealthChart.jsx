import React, { useMemo } from "react";
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

export default function WealthChart({
  data,
  fireYear,
  hoveredYear,
  setHoveredYear,
  setFireYear,
}) {
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

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-slate-500">자산 성장 곡선</h2>
        <span className="text-xs text-slate-400">
          그래프를 클릭해 FIRE 시점을 지정하세요
        </span>
      </div>

      <div style={{ width: "100%", height: 420, cursor: "crosshair" }}>
        <ResponsiveContainer>
          <ComposedChart
            data={chartData}
            margin={{ top: 30, right: 20, left: 0, bottom: 10 }}
            onClick={handleClick}
            onMouseMove={handleMove}
            onMouseLeave={() => setHoveredYear(0)}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="year"
              ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40]}
              tick={{ fontSize: 12, fill: "#64748b" }}
              label={{
                value: "년차",
                position: "insideBottomRight",
                offset: -5,
                fill: "#94a3b8",
                fontSize: 12,
              }}
            />
            <YAxis
              tickFormatter={fmtAxis}
              tick={{ fontSize: 12, fill: "#64748b" }}
              width={70}
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
                  strokeWidth={2.5}
                  dot={false}
                  activeDot={{ r: 5 }}
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
                  activeDot={{ r: 5 }}
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
                  strokeWidth={2.5}
                  dot={false}
                  activeDot={{ r: 5 }}
                  connectNulls={false}
                  isAnimationActive={false}
                />
                <Line
                  type="monotone"
                  dataKey="nominalPost"
                  name="명목 (은퇴 후)"
                  stroke="#f97316"
                  strokeWidth={2.5}
                  strokeDasharray="6 4"
                  dot={false}
                  activeDot={{ r: 5 }}
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
                  activeDot={{ r: 5 }}
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
                  activeDot={{ r: 5 }}
                  connectNulls={false}
                  isAnimationActive={false}
                />
                <ReferenceLine
                  x={fireYear}
                  stroke="#f97316"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  label={{
                    value: "🔥 FIRE",
                    position: "top",
                    fill: "#ea580c",
                    fontSize: 12,
                    fontWeight: 600,
                    offset: 10,
                  }}
                />
              </>
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* 범례 */}
      <div className="flex flex-wrap gap-4 mt-4 text-xs">
        {fireYear === null ? (
          <>
            <LegendDot color="#2563eb" label="명목 자산" />
            <LegendDot color="#10b981" label="실질 자산" dashed />
          </>
        ) : (
          <>
            <LegendDot color="#2563eb" label="명목 (은퇴 전)" />
            <LegendDot color="#f97316" label="명목 (은퇴 후)" dashed />
            <LegendDot color="#10b981" label="실질 (은퇴 전)" dashed />
            <LegendDot color="#eab308" label="실질 (은퇴 후)" dashed />
          </>
        )}
      </div>

      <p className="text-xs text-slate-400 mt-3">
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
