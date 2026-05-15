import React, { useMemo, useState } from "react";
import InputCard from "./components/InputCard";
import PeriodTable from "./components/PeriodTable";
import FireBanner from "./components/FireBanner";
import MetricCard from "./components/MetricCard";
import WealthChart from "./components/WealthChart";
import { calcWealth, WITHDRAW_RATE } from "./utils/calc";
import { fmtKRW, fmtManwon } from "./utils/format";

export default function App() {
  const [base, setBase] = useState(30000000);
  const [rate, setRate] = useState(7);
  const [periods, setPeriods] = useState([{ start: 0, end: 20, amount: 1200 }]);
  const [fireYear, setFireYear] = useState(null);
  const [hoveredYear, setHoveredYear] = useState(0);

  const data = useMemo(
    () => calcWealth(base, rate, periods, fireYear),
    [base, rate, periods, fireYear],
  );

  const cur = data[hoveredYear] || data[0];
  const flowN = (cur.nominal * WITHDRAW_RATE) / 12;
  const flowR = (cur.real * WITHDRAW_RATE) / 12;

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-6">
        {/* 헤더 */}
        <header className="pt-2">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            경제적 자립, 언제?
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            복리의 마법과 마르지 않는 현금흐름 시뮬레이션
          </p>
        </header>

        {/* 4. 자산 규모 지표 */}
        <section>
          <h2 className="text-xs font-semibold text-slate-500 mb-2 ml-1">
            자산 규모 · {hoveredYear}년차
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MetricCard
              title="명목 자산"
              subtitle="미래 액면가 기준"
              value={fmtKRW(cur.nominal)}
              accent="blue"
            />
            <MetricCard
              title="실질 자산"
              subtitle="현재 구매력 기준"
              value={fmtKRW(cur.real)}
              accent="green"
            />
          </div>
        </section>

        {/* 5. 월 현금흐름 지표 */}
        <section>
          {/* <h2 className="text-xs font-semibold text-slate-500 mb-2 ml-1"> 
          월 인출액 (FIRE 이전은 실제 월 인출 없음) · {hoveredYear}년차
          </h2> */}

          <div className="flex items-center gap-2 mb-2 ml-1">
            <h2 className="text-xs font-semibold text-slate-500 shrink-0">
              월 인출액 · {hoveredYear}년차
            </h2>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-xs font-medium">
              <svg
                className="w-3 h-3 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              FIRE 이전 실제 인출 없음
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MetricCard
              title="명목 인출액"
              subtitle="미래 액면가 기준"
              value={`월 ${fmtManwon(flowN)}`}
              accent="orange"
            />
            <MetricCard
              title="실질 인출액"
              subtitle="현재 구매력 기준"
              value={`월 ${fmtManwon(flowR)}`}
              accent="amber"
            />
          </div>
        </section>

        {/* 6. 차트 */}
        <WealthChart
          data={data}
          fireYear={fireYear}
          hoveredYear={hoveredYear}
          setHoveredYear={setHoveredYear}
          setFireYear={setFireYear}
        />

        {/* 3. FIRE 배너 */}
        <FireBanner fireYear={fireYear} onClear={() => setFireYear(null)} />

        {/* 1. 기본 입력 */}
        <InputCard
          base={base}
          setBase={setBase}
          rate={rate}
          setRate={setRate}
        />

        {/* 2. 저축/지출 구간 */}
        <PeriodTable periods={periods} setPeriods={setPeriods} />

        <footer className="text-center text-xs text-slate-400 py-6">
          개인 자산 시뮬레이션 · 투자 권유 아님
        </footer>
      </div>
    </div>
  );
}
