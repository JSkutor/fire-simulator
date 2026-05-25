import React, { useMemo, useState } from "react";
import InputCard from "./components/InputCard";
import PeriodTable from "./components/PeriodTable";
import FireBanner from "./components/FireBanner";
import MetricCard from "./components/MetricCard";
import WealthChart from "./components/WealthChart";
import { calcWealth, WITHDRAW_RATE } from "./utils/calc";
import { fmtKRW, fmtManwon } from "./utils/format";
import AnimationTestBoard from "./components/AnimationTestBoard";

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

  // hoveredYear === 0: 그래프 밖, fireYear 미설정 또는 FIRE 전 구간
  const isWithdrawalProjected =
    hoveredYear === 0 || !fireYear || hoveredYear < fireYear;

  // test url
  if (import.meta.env.DEV && window.location.pathname.endsWith("/test")) {
    return <AnimationTestBoard />;
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto p-3 sm:p-4 md:p-8 space-y-4 md:space-y-6">
        {/* 헤더 */}
        <header className="pt-2 px-1">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            경제적 자립, 언제?
          </h1>
          <p className="text-sm leading-relaxed text-slate-500 mt-1">
            복리의 마법과 마르지 않는 현금흐름 시뮬레이션
          </p>
        </header>

        {/* 4. 자산 규모 지표 */}
        <section>
          <h2 className="text-xs font-semibold text-slate-500 mb-2 ml-1">
            자산 규모 · {hoveredYear}년차
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <MetricCard
              title="명목 자산"
              subtitle="미래 액면가 기준"
              value={cur.nominal}
              formatter={fmtKRW}
              accent="blue"
            />
            <MetricCard
              title="실질 자산"
              subtitle="현재 구매력 기준"
              value={cur.real}
              formatter={fmtKRW}
              accent="green"
            />
          </div>
        </section>

        {/* 5. 월 현금흐름 지표 */}
        <section>
          {/* <h2 className="text-xs font-semibold text-slate-500 mb-2 ml-1"> 
          월 인출액 (FIRE 이전은 실제 월 인출 없음) · {hoveredYear}년차
          </h2> */}

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 ml-1">
            <h2 className="text-xs font-semibold text-slate-500 shrink-0">
              월 인출액 · {hoveredYear}년차
            </h2>
            <div className="flex items-center gap-1 text-slate-400 text-[11px]">
              <svg
                className="w-3.5 h-3.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={
                  1.25
                } /* 얇고 부드러운 느낌을 위해 strokeWidth를 줄였습니다 (기존 1.5) */
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9 9 0 100-18 9 9 0 000 18z M12 11v6 M12 8a0.75 0.75 0 110-1.5 0.75 0.75 0 010 1.5z" /* 더 부드럽고 자연스러운 Info 아이콘 형태 */
                />
              </svg>
              FIRE 이전 실제 인출 없음
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <MetricCard
              title="명목 인출액"
              subtitle="미래 액면가 기준"
              value={flowN}
              formatter={(v) => `월 ${fmtManwon(v)}`}
              accent="orange"
              isProjected={isWithdrawalProjected}
            />
            <MetricCard
              title="실질 인출액"
              subtitle="현재 구매력 기준"
              value={flowR}
              formatter={(v) => `월 ${fmtManwon(v)}`}
              accent="amber"
              isProjected={isWithdrawalProjected}
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
