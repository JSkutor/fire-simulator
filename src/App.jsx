import React, { useEffect, useMemo, useRef, useState } from "react";
import InputCard from "./components/InputCard";
import PeriodTable from "./components/PeriodTable";
import FireBanner from "./components/FireBanner";
import MetricCard from "./components/MetricCard";
import WealthChart from "./components/WealthChart";
import { calcWealth, WITHDRAW_RATE } from "./utils/calc";
import { fmtKRW, fmtManwon } from "./utils/format";
import { decodeParamsToState, copyShareURL } from "./utils/urlShare";
import AnimationTestBoard from "./components/AnimationTestBoard";

export default function App() {
  const [base, setBase] = useState(30000000);
  const [rate, setRate] = useState(7);
  const [periods, setPeriods] = useState([{ start: 0, end: 20, amount: 1200 }]);
  const [fireYear, setFireYear] = useState(null);
  const [hoveredYear, setHoveredYear] = useState(0);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  // 마운트 시 URL 파라미터에서 상태 복원
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (Array.from(params.keys()).length > 0) {
      const restored = decodeParamsToState(params);
      setBase(restored.base);

      setRate(restored.rate);
      setPeriods(restored.periods);
      if (restored.fireYear != null) setFireYear(restored.fireYear);
    }
  }, []);

  // 공유 버튼 핸들러
  const handleShare = async () => {
    const ok = await copyShareURL(base, rate, periods, fireYear);
    if (ok) {
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    }
  };

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
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                경제적 자립, 언제?
              </h1>
              <p className="text-sm leading-relaxed text-slate-500 mt-1">
                복리의 마법과 마르지 않는 현금흐름 시뮬레이션
              </p>
            </div>
            <button
              type="button"
              onClick={handleShare}
              className="shrink-0 mt-1 flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-100 active:scale-95 sm:py-1.5"
              title="현재 설정을 URL로 공유"
            >
              {copied ? (
                <>
                  <svg
                    className="w-3.5 h-3.5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-emerald-600">복사됨!</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                  <span>입력값 공유</span>
                </>
              )}
            </button>
          </div>
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

        <footer className="flex flex-col items-center gap-2 py-6 text-xs text-slate-400">
          <p>과거 수익률이 미래 수익을 보장하지 않습니다</p>
          <a
            href="https://github.com/JSkutor/fire-simulator"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="GitHub 저장소"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>JSkutor/fire-simulator</span>
          </a>
        </footer>
      </div>
    </div>
  );
}
