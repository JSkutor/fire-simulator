// 한국어 번역 리소스
export default {
  lang: "ko",
  currency: "KRW",

  // Header
  title: "경제적 자립, 언제?",
  subtitle: "복리의 마법과 마르지 않는 현금흐름 시뮬레이션",
  shareBtn: "입력값 공유",
  copied: "복사됨!",
  shareTitle: "현재 설정을 URL로 공유",

  // Metric section titles
  metricSectionTitle: (year) => `자산 시뮬레이션 · ${year}년차`,
  cashflowSectionTitle: (year) => `월 현금흐름 예측 · ${year}년차`,
  cashflowNote: "FIRE 이전 실제 인출 없음",

  // MetricCard labels
  nominalAsset: "명목 자산",
  nominalAssetSub: "미래 액면가 기준",
  realAsset: "실질 자산",
  realAssetSub: "현재 구매력 기준",
  nominalWithdraw: "명목 인출액",
  nominalWithdrawSub: "미래 액면가 기준",
  realWithdraw: "실질 인출액",
  realWithdrawSub: "현재 구매력 기준",

  // InputCard
  inputTitle: "기본 입력",
  baseAssetLabel: "기초자산 (원)",
  baseAssetPlaceholder: "10,000,000",
  baseAssetHint: "예) 30000000 = 3천만원",
  rateLabel: "연간 전체자산 수익률 (%)",
  inflationHint: (pct) => `인플레이션 ${pct}% 고정`,

  // PeriodTable
  periodTitle: "저축 / 지출 구간",
  periodAdd: "+ 구간 추가",
  periodEmpty: "구간이 없습니다",
  periodNote1: "* 양수 = 저축, 음수 = 지출. 겹치는 구간은 합산됩니다.",
  periodNote2:
    "* 입력 금액은 현재 가치 기준이며, 실제 입출금은 매년 물가 상승률을 반영해 계산됩니다.",

  // PeriodRow
  yearStart: "시작 년차",
  yearEnd: "종료 년차",
  yearUnit: "년차",
  periodRemove: "구간 삭제",
  amountLabel: "연간 저축 또는 지출 금액",
  amountUnit: "만원/년",
  savingBadge: "저축",
  spendingBadge: "지출",

  // WealthChart
  chartTitle: "자산 성장 곡선",
  chartGuide: "그래프를 클릭해 FIRE 시점을 지정하세요",
  chartMobileYear: (year) => `${year}년차 선택`,
  chartXLabel: "년차",
  mobileSelectYear: "선택 연도",
  mobileYearDisplay: (year) => `${year}년차`,
  mobileSliderLabel: "선택 연도",
  mobileSliderValueText: (year) => `${year}년차`,
  mobileFireBtnDisabled: "0년차는 지정 불가",
  mobileFireBtnClear: "FIRE 해제",
  mobileFireBtnSet: "이 연도를 FIRE로 지정",

  // Legend
  legendNominal: "명목 자산",
  legendReal: "실질 자산",
  legendNominalPre: "명목 (은퇴 전)",
  legendNominalPost: "명목 (은퇴 후)",
  legendRealPre: "실질 (은퇴 전)",
  legendRealPost: "실질 (은퇴 후)",

  // Chart notes
  chartNote1:
    "* 명목 가치는 숫자 그대로의 금액, 실질 가치는 물가 상승을 반영해 현재 구매력으로 환산한 금액입니다.",
  chartNote2:
    "* 인플레이션 2.3% = 한국 CPI 연평균 (2005~2024년, 통계청·World Bank 기준)",

  // ChartTooltip
  tooltipYear: (year) => `${year}년차`,
  tooltipFireBadge: "🔥 FIRE 시점",
  tooltipAfterFire: "은퇴 후",
  tooltipNominal: "명목 자산",
  tooltipReal: "실질 자산",
  tooltipNominalWithdraw: "명목 인출액",
  tooltipNominalWithdrawProjected: "명목 예상 인출액",
  tooltipRealWithdraw: "실질 인출액",
  tooltipRealWithdrawProjected: "실질 예상 인출액",
  tooltipFlow: "저축/지출",
  tooltipAnnualWithdraw: "4% 연간 인출",
  tooltipHintSet: "클릭 → FIRE 시점 설정",
  tooltipHintClear: "클릭 → FIRE 시점 해제",
  tooltipHintChange: "클릭 → FIRE 시점 변경",

  // FireBanner
  fireLabel: (year) => `FIRE 시점: ${year}년차`,
  fireDesc: "이 시점부터 매년 자산 잔액의 4% 인출이 반영됩니다",
  fireClear: "해제",

  // Footer
  disclaimer: "과거 수익률이 미래 수익을 보장하지 않습니다",
  githubLabel: "GitHub 저장소",

  // Language banner (shown on KO page to EN users)
  langBannerText: "English version is available.",
  langBannerLink: "Switch to English",
  langBannerClose: "Close",
};
