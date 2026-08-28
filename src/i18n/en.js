// English translation resource
export default {
  lang: "en",
  currency: "USD",

  // Header & Nav
  title: "Financial Independence: When?",
  subtitle: "Compounding magic and endless cash flow simulation",
  shareBtn: "Share",
  copied: "Copied!",
  shareTitle: "Share your current settings via URL",
  languageLabel: "Language",

  // Presets
  presetsTitle: "Quick Simulation Presets",
  presetApply: "Apply",
  presetApplied: "Preset applied!",
  presets: [
    {
      id: "standard",
      name: "Standard Compound & 4% Withdrawal",
      desc: "Starting $50k, saving $20k/yr for 15 yrs at 7% return, retiring Year 15.",
      base: 50000,
      rate: 7,
      periods: [{ start: 0, end: 15, amount: 20000 }],
      fireYear: 15,
    },
    {
      id: "lean",
      name: "Aggressive Early FIRE",
      desc: "Starting $20k, saving $35k/yr aggressively for 10 yrs at 9% return, retiring Year 10.",
      base: 20000,
      rate: 9,
      periods: [{ start: 0, end: 10, amount: 35000 }],
      fireYear: 10,
    },
    {
      id: "coast",
      name: "Coast / Barista FIRE",
      desc: "Frontload $18k/yr for 5 yrs, coast with $4k/yr for 10 yrs, retiring Year 15.",
      base: 40000,
      rate: 7.5,
      periods: [
        { start: 0, end: 5, amount: 18000 },
        { start: 5, end: 15, amount: 4000 },
      ],
      fireYear: 15,
    },
  ],

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
  inflationLabel: "Assumed Inflation Rate (%)",
  inflationHint: (pct) => `Inflation ${pct}%`,
  inflationPresets: {
    target: "Fed Target (2.0%)",
    avg: "Long-term Avg (2.5%)",
    high: "High Inflation (3.5%)",
  },

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

  // Guides Section (SEO Content)
  guideSectionBadge: "Deep Dive Guides",
  guideSectionTitle: "Mastering Multi-Stage Cash Flow & FIRE Math",
  guideSectionSubtitle:
    "Explore how compound growth, inflation drag, dynamic 4% withdrawals, and phased cash flows shape financial independence.",

  guides: [
    {
      id: "rule-of-four-percent",
      badge: "Rule #1",
      title: "The 4% Rule & Multi-Stage Cash Flow Simulation",
      subtitle: "Moving beyond historical backtests to model your custom 40-year wealth trajectory",
      content: [
        "In the FIRE movement, the **'4% Rule'** serves as a cornerstone benchmark—stating that accumulating roughly **25× your annual expenses** provides a sustainable capital base for financial independence.",
        "While traditional calculators often rely on retrospective historical backtesting to output a static failure probability, real lives are dynamic. Careers involve sabbatical years, income jumps, business launches, and phased partial retirements (Barista FIRE).",
        "This simulator applies a **40-year deterministic forward cash flow model** combining **multi-phase savings/spending** with a **4% dynamic withdrawal rule** from the beginning-of-year asset balance. This self-adjusts with market growth and directly projects your accessible monthly passive income (`Monthly Cash Flow = Annual Withdrawal ÷ 12`) across any year.",
      ],
      takeaways: [
        "Core FIRE Benchmark: Target Net Worth = Annual Living Expenses × 25.",
        "Multi-stage savings/spending accurately reflects career transitions, sabbaticals, and side incomes.",
        "Monthly passive cash flow = (Beginning-of-year Portfolio Balance × 4%) ÷ 12.",
      ],
    },
    {
      id: "nominal-vs-real",
      badge: "Rule #2",
      title: "Nominal vs. Real Wealth: Beating the Silent Tax of Inflation",
      subtitle: "Why $2,000,000 in 30 years won't buy what $2,000,000 buys today",
      content: [
        "Compound growth looks exponential, but unadjusted face-value figures can be dangerously misleading. With a modest 2.0% annual inflation (the U.S. Federal Reserve target), general prices double roughly every 35 years.",
        "This means a future portfolio of **$2,000,000 in Year 30** holds the real purchasing power of approximately **$1,104,000 in today's dollars**. In our chart, the **green curve (Real Wealth)** strips out inflation so you can evaluate whether your future passive income will genuinely cover your lifestyle.",
      ],
      takeaways: [
        "Nominal Value (Blue Curve): The actual dollar balance printed on your bank statement in the future.",
        "Real Value (Green Curve): Future balance discounted to today's purchasing power.",
        "Formula: Real Value = Nominal Value ÷ (1 + Inflation Rate)^Years.",
      ],
    },
    {
      id: "sequence-of-returns",
      badge: "Rule #3",
      title: "Sequence of Returns Risk (SRR) & Cash Flow Buffers",
      subtitle: "Why the first 3 years of retirement determine portfolio survival",
      content: [
        "Two retirees with identical average annual returns of 7% can experience vastly different outcomes depending entirely on **when** bad market years occur. If a 25% market crash happens during Year 1 to Year 3 of retirement, selling depressed shares to fund living expenses permanently locks in losses.",
        "To mitigate this risk, successful FIRE practitioners utilize **cash buffers (1–2 years of expenses)**, flexible part-time income (Barista FIRE), or staged spending reductions during early retirement dips. Use our **Savings & Spending Periods** table to model temporary expense cuts or side-income injections.",
      ],
      takeaways: [
        "Early bear markets are far more destructive than bear markets occurring 20 years into retirement.",
        "Having 12–24 months of cash equivalents prevents selling equities at the bottom.",
        "Staged savings/spending modeling helps you simulate safety cushions under real market shocks.",
      ],
    },
  ],

  // FAQ Section
  faqSectionBadge: "FAQ",
  faqSectionTitle: "Frequently Asked Questions",
  faqSectionSubtitle:
    "Clear answers on simulation methodology, compound interest formulas, and data privacy.",
  faqs: [
    {
      question: "Is this simulator a historical Trinity Study backtesting tool?",
      answer:
        "No. Rather than replaying historical stock market drawdowns to compute statistical failure probabilities, this tool is a deterministic Forward Cash Flow Simulator. It models your projected 40-year wealth trajectory, inflation-adjusted purchasing power, and monthly passive income based on your customized return rates and multi-phase cash flows.",
    },
    {
      question: "How is the monthly withdrawal calculated after FIRE?",
      answer:
        "From your chosen FIRE milestone year onward, 4% of the beginning-of-year portfolio balance is withdrawn for living expenses. We divide this by 12 to display your monthly nominal cash flow, alongside its inflation-discounted real value in today's purchasing power.",
    },
    {
      question: "How does the simulator calculate Real vs. Nominal wealth?",
      answer:
        "Nominal wealth compounds each year at your selected Annual Return rate (e.g. 7%) plus/minus your active savings or spending. Real wealth discounts this nominal sum by the long-term inflation rate (2.0% for USD, 2.3% for KRW) using the formula: Real = Nominal / (1 + inflation)^year.",
    },
    {
      question: "How are savings and spending periods compounded?",
      answer:
        "Amounts in the Savings & Spending Periods table are in today's purchasing power and are inflation-adjusted each year. To reflect continuous annual cash flows, the simulator applies a mid-year compounding formula `flow × √(1 + r)`. Overlapping periods are summed automatically.",
    },
    {
      question: "Is my personal financial information stored on your servers?",
      answer:
        "No. 100% of all calculations, inputs, and simulations run entirely within your client web browser. We do not store, track, or collect your financial data on any server. When you click 'Share', your parameters are encoded purely into the URL query string on your own device.",
    },
  ],

  // Footer
  disclaimer: "Past performance and mathematical projections do not guarantee future investment returns.",
  githubLabel: "GitHub repository",

  // Language banner (shown on EN page to KO users)
  langBannerText: "한국어로 보시겠습니까?",
  langBannerLink: "한국어 버전으로 이동",
  langBannerClose: "닫기",
};

