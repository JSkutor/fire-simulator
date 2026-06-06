// English translation resource
export default {
  lang: "en",
  currency: "USD",

  // Header
  title: "Financial Independence: When?",
  subtitle: "Compounding magic and endless cash flow simulation",
  shareBtn: "Share",
  copied: "Copied!",
  shareTitle: "Share your current settings via URL",

  // Metric section titles
  metricSectionTitle: (year) => `Wealth Projection · Year ${year}`,
  cashflowSectionTitle: (year) => `Monthly Cash Flow · Year ${year}`,
  cashflowNote: "No actual withdrawals before FIRE",

  // MetricCard labels
  nominalAsset: "Nominal Wealth",
  nominalAssetSub: "Future face value",
  realAsset: "Real Wealth",
  realAssetSub: "Today's purchasing power",
  nominalWithdraw: "Nominal Withdrawal",
  nominalWithdrawSub: "Future face value",
  realWithdraw: "Real Withdrawal",
  realWithdrawSub: "Today's purchasing power",

  // InputCard
  inputTitle: "Basic Inputs",
  baseAssetLabel: "Starting Net Worth ($)",
  baseAssetPlaceholder: "30,000",
  baseAssetHint: "e.g. 30000 = $30K",
  rateLabel: "Annual Return (%)",
  inflationHint: (pct) => `Inflation fixed at ${pct}%`,

  // PeriodTable
  periodTitle: "Savings & Spending Periods",
  periodAdd: "+ Add Period",
  periodEmpty: "No periods defined",
  periodNote1:
    "* Positive = savings, negative = spending. Overlapping periods are summed.",
  periodNote2:
    "* Amounts are in today's dollars; actual cash flows are adjusted for inflation each year.",

  // PeriodRow
  yearStart: "Start year",
  yearEnd: "End year",
  yearUnit: "yr",
  periodRemove: "Remove period",
  amountLabel: "Annual savings or spending amount",
  amountUnit: "$/yr",
  savingBadge: "Save",
  spendingBadge: "Spend",

  // WealthChart
  chartTitle: "Wealth Growth Curve",
  chartGuide: "Click the chart to set your FIRE year",
  chartMobileYear: (year) => `Year ${year} selected`,
  chartXLabel: "Year",
  mobileSelectYear: "Selected Year",
  mobileYearDisplay: (year) => `Year ${year}`,
  mobileSliderLabel: "Selected year",
  mobileSliderValueText: (year) => `Year ${year}`,
  mobileFireBtnDisabled: "Cannot set Year 0",
  mobileFireBtnClear: "Clear FIRE",
  mobileFireBtnSet: "Set this year as FIRE",

  // Legend
  legendNominal: "Nominal",
  legendReal: "Real",
  legendNominalPre: "Nominal (pre-FIRE)",
  legendNominalPost: "Nominal (post-FIRE)",
  legendRealPre: "Real (pre-FIRE)",
  legendRealPost: "Real (post-FIRE)",

  // Chart notes
  chartNote1:
    "* Nominal value is the raw dollar amount; real value is adjusted for inflation to reflect today's purchasing power.",
  chartNote2:
    "* Inflation 2.0% = U.S. Fed long-term target (PCE index, Federal Reserve)",

  // ChartTooltip
  tooltipYear: (year) => `Year ${year}`,
  tooltipFireBadge: "🔥 FIRE Year",
  tooltipAfterFire: "Post-FIRE",
  tooltipNominal: "Nominal Wealth",
  tooltipReal: "Real Wealth",
  tooltipNominalWithdraw: "Nominal Withdrawal",
  tooltipNominalWithdrawProjected: "Projected Nominal Withdrawal",
  tooltipRealWithdraw: "Real Withdrawal",
  tooltipRealWithdrawProjected: "Projected Real Withdrawal",
  tooltipFlow: "Savings / Spending",
  tooltipAnnualWithdraw: "4% Annual Withdrawal",
  tooltipHintSet: "Click → Set FIRE year",
  tooltipHintClear: "Click → Clear FIRE year",
  tooltipHintChange: "Click → Change FIRE year",

  // FireBanner
  fireLabel: (year) => `FIRE Year: Year ${year}`,
  fireDesc:
    "From this point, 4% of your portfolio is withdrawn annually",
  fireClear: "Clear",

  // Footer
  disclaimer: "Past returns do not guarantee future results",
  githubLabel: "GitHub repository",

  // Language banner (shown on EN page to KO users)
  langBannerText: "한국어 버전이 있습니다.",
  langBannerLink: "한국어로 전환",
  langBannerClose: "닫기",
};
