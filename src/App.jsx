import React, { useEffect, useMemo, useRef, useState } from "react";
import InputCard from "./components/InputCard";
import PeriodTable from "./components/PeriodTable";
import FireBanner from "./components/FireBanner";
import MetricCard from "./components/MetricCard";
import WealthChart from "./components/WealthChart";
import LanguageSelector from "./components/LanguageSelector";
import GuideSection from "./components/GuideSection";
import FaqSection from "./components/FaqSection";
import { calcWealth, WITHDRAW_RATE } from "./utils/calc";
import { getFormatters } from "./utils/format";
import { decodeParamsToState, copyShareURL } from "./utils/urlShare";
import { useLocale, detectBrowserLang, LOCALES } from "./i18n/useLocale";
import AnimationTestBoard from "./components/AnimationTestBoard";

function LanguageBanner({ locale }) {
  const { lang, getSwitchUrl } = locale;
  const [targetLang, setTargetLang] = useState(null);

  useEffect(() => {
    const browserLang = detectBrowserLang();
    if (!browserLang) return; // 이미 닫음 또는 미감지
    if (browserLang !== lang && LOCALES[browserLang]) {
      setTargetLang(browserLang);
    }
  }, [lang]);

  if (!targetLang) return null;

  const targetConfig = LOCALES[targetLang];
  const targetPath = getSwitchUrl(targetLang);

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm shadow-sm">
      <div className="flex items-center gap-2 text-blue-900 font-medium">
        <span className="text-base">{targetConfig.flag}</span>
        <span>
          {targetConfig.name} ({targetConfig.lang.toUpperCase()}) version available.
        </span>
        <a
          href={targetPath}
          className="font-bold text-blue-600 underline underline-offset-2 hover:text-blue-800 ml-1"
        >
          Switch to {targetConfig.name} →
        </a>
      </div>
      <button
        type="button"
        onClick={() => {
          setTargetLang(null);
          localStorage.setItem("fire-sim-lang-dismissed", "1");
        }}
        className="shrink-0 rounded-md p-1 text-blue-400 hover:bg-blue-100 hover:text-blue-600 transition"
        aria-label="Close language banner"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default function App() {
  const locale = useLocale();
  const { t, scale, defaults, inflation: defaultInflation } = locale;
  const fmt = getFormatters(locale);

  const [base, setBase] = useState(defaults.base);
  const [rate, setRate] = useState(defaults.rate);
  const [inflation, setInflation] = useState(defaultInflation);
  const [periods, setPeriods] = useState(defaults.periods);
  const [fireYear, setFireYear] = useState(null);
  const [hoveredYear, setHoveredYear] = useState(0);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);
  const topRef = useRef(null);

  // 로케일 변경 시 기본 인플레이션 동기화
  useEffect(() => {
    setInflation(defaultInflation);
  }, [defaultInflation]);

  // 마운트 시 URL 파라미터에서 상태 복원
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (Array.from(params.keys()).length > 0) {
      const restored = decodeParamsToState(params, defaults);
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

  // 프리셋 적용 핸들러
  const handleApplyPreset = (preset) => {
    if (!preset) return;
    setBase(preset.base);
    setRate(preset.rate);
    setPeriods(preset.periods);
    setFireYear(preset.fireYear != null ? preset.fireYear : null);

    // 차트 상단으로 부드럽게 스크롤
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const data = useMemo(
    () => calcWealth(base, rate, periods, fireYear, { inflation, scale }),
    [base, rate, periods, fireYear, inflation, scale],
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
    <div className="min-h-screen" ref={topRef}>
      <div className="max-w-5xl mx-auto p-3 sm:p-4 md:p-8 space-y-4 md:space-y-6">
        {/* 언어 감지 배너 */}
        <LanguageBanner locale={locale} />

        {/* 헤더 */}
        <header className="pt-2 px-1">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                {t.title}
              </h1>
              <p className="text-sm leading-relaxed text-slate-500 mt-1">
                {t.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 self-start shrink-0">
              <LanguageSelector locale={locale} />

              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 active:scale-95 shadow-sm"
                title={t.shareTitle}
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
                    <span className="text-emerald-600 font-semibold">{t.copied}</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-3.5 h-3.5 text-slate-500"
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
                    <span>{t.shareBtn}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* 4. 자산 규모 지표 */}
        <section>
          <h2 className="text-xs font-semibold text-slate-500 mb-2 ml-1">
            {t.metricSectionTitle(hoveredYear)}
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <MetricCard
              title={t.nominalAsset}
              subtitle={t.nominalAssetSub}
              value={cur.nominal}
              formatter={fmt.fmtValue}
              accent="blue"
            />
            <MetricCard
              title={t.realAsset}
              subtitle={t.realAssetSub}
              value={cur.real}
              formatter={fmt.fmtValue}
              accent="green"
            />
          </div>
        </section>

        {/* 5. 월 현금흐름 지표 */}
        <section>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 ml-1">
            <h2 className="text-xs font-semibold text-slate-500 shrink-0">
              {t.cashflowSectionTitle(hoveredYear)}
            </h2>
            <div className="flex items-center gap-1 text-slate-400 text-[11px]">
              <svg
                className="w-3.5 h-3.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.25}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9 9 0 100-18 9 9 0 000 18z M12 11v6 M12 8a0.75 0.75 0 110-1.5 0.75 0.75 0 010 1.5z"
                />
              </svg>
              {t.cashflowNote}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <MetricCard
              title={t.nominalWithdraw}
              subtitle={t.nominalWithdrawSub}
              value={flowN}
              formatter={fmt.fmtMonthly}
              accent="orange"
              isProjected={isWithdrawalProjected}
            />
            <MetricCard
              title={t.realWithdraw}
              subtitle={t.realWithdrawSub}
              value={flowR}
              formatter={fmt.fmtMonthly}
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
          locale={locale}
          fmt={fmt}
        />

        {/* 3. FIRE 배너 */}
        <FireBanner fireYear={fireYear} onClear={() => setFireYear(null)} locale={locale} />

        {/* 1. 기본 입력 (인플레이션 조절 포함) */}
        <InputCard
          base={base}
          setBase={setBase}
          rate={rate}
          setRate={setRate}
          inflation={inflation}
          setInflation={setInflation}
          locale={locale}
        />

        {/* 2. 저축/지출 구간 */}
        <PeriodTable periods={periods} setPeriods={setPeriods} locale={locale} />

        {/* 7. 금융 심층 가이드 (SEO Content) */}
        <GuideSection locale={locale} onApplyPreset={handleApplyPreset} />

        {/* 8. 자주 묻는 질문 FAQ (SEO Rich Snippets) */}
        <FaqSection locale={locale} />

        <footer className="flex flex-col items-center gap-3 py-8 text-xs text-slate-400 border-t border-slate-200/60 mt-8">
          <p className="text-center">{t.disclaimer}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/JSkutor/fire-simulator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors font-medium"
              aria-label={t.githubLabel}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
            <span>•</span>
            <span className="text-slate-500 font-medium">WhenCanIFIRE © 2026</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
