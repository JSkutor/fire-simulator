// 繁體中文 (Traditional Chinese - Taiwan / Hong Kong) 번역 리소스
export default {
  lang: "zh",
  currency: "TWD",

  // Header & Nav
  title: "財務自由，何時？",
  subtitle: "複利的威力與源源不絕的現金流試算",
  shareBtn: "分享設定",
  copied: "已複製！",
  shareTitle: "透過網址分享目前設定",
  languageLabel: "語言",

  // Presets
  presetsTitle: "推薦試算範本",
  presetApply: "套用",
  presetApplied: "已套用範本！",
  presets: [
    {
      id: "standard",
      name: "標準複利 & 4%提領模型",
      desc: "初始100萬元，年儲蓄60萬元（月存5萬）持續15年，年化報酬率7%，第15年退休。",
      base: 1000000,
      rate: 7,
      periods: [{ start: 0, end: 15, amount: 60 }],
      fireYear: 15,
    },
    {
      id: "lean",
      name: "極速早期退休（Lean FIRE）",
      desc: "初始50萬元，年儲蓄96萬元（月存8萬）集中儲蓄10年，年化報酬率9%，第10年提早退休。",
      base: 500000,
      rate: 9,
      periods: [{ start: 0, end: 10, amount: 96 }],
      fireYear: 10,
    },
    {
      id: "coast",
      name: "咖啡師 / 半退休（Coast FIRE）",
      desc: "前5年每年衝刺儲蓄50萬元，後10年每年僅輕鬆存入10萬元，維持複利滾動，第15年退休。",
      base: 800000,
      rate: 7.5,
      periods: [
        { start: 0, end: 5, amount: 50 },
        { start: 5, end: 15, amount: 10 },
      ],
      fireYear: 15,
    },
  ],

  // Metric section titles
  metricSectionTitle: (year) => `資產試算 · 第 ${year} 年`,
  cashflowSectionTitle: (year) => `每月現金流預測 · 第 ${year} 年`,
  cashflowNote: "FIRE前無實際提領",

  // MetricCard labels
  nominalAsset: "名目資產",
  nominalAssetSub: "未來帳面面額",
  realAsset: "實質資產",
  realAssetSub: "今日實質購買力",
  nominalWithdraw: "名目提領額",
  nominalWithdrawSub: "未來帳面面額",
  realWithdraw: "實質提領額",
  realWithdrawSub: "今日實質購買力",

  // InputCard
  inputTitle: "基本輸入",
  baseAssetLabel: "初始本金 (元)",
  baseAssetPlaceholder: "1,000,000",
  baseAssetHint: "例) 1000000 = 100萬元",
  rateLabel: "年化投資報酬率 (%)",
  inflationLabel: "預期通膨率 (%)",
  inflationHint: (pct) => `通膨率 ${pct}%`,
  inflationPresets: {
    target: "央行目標 (2.0%)",
    avg: "長期平均 (2.2%)",
    high: "高通膨情境 (3.2%)",
  },

  // PeriodTable
  periodTitle: "儲蓄 / 支出階段",
  periodAdd: "+ 新增階段",
  periodEmpty: "尚未設定任何階段",
  periodNote1: "※ 正數 = 儲蓄，負數 = 支出。重疊區間將自動合併計算。",
  periodNote2:
    "※ 輸入金額以今日價值為準；實際現金流將按每年通膨率逐年調整計算。",

  // PeriodRow
  yearStart: "起始年份",
  yearEnd: "結束年份",
  yearUnit: "年",
  periodRemove: "刪除階段",
  amountLabel: "年度儲蓄或支出金額",
  amountUnit: "萬元/年",
  savingBadge: "儲蓄",
  spendingBadge: "支出",

  // WealthChart
  chartTitle: "資產成長曲線",
  chartGuide: "點擊圖表以設定您的 FIRE 退休年份",
  chartMobileYear: (year) => `已選擇第 ${year} 年`,
  chartXLabel: "年",
  mobileSelectYear: "選擇年份",
  mobileYearDisplay: (year) => `第 ${year} 年`,
  mobileSliderLabel: "選擇年份",
  mobileSliderValueText: (year) => `第 ${year} 年`,
  mobileFireBtnDisabled: "第 0 年不可設定",
  mobileFireBtnClear: "解除 FIRE",
  mobileFireBtnSet: "將此年設為 FIRE",

  // Legend
  legendNominal: "名目資產",
  legendReal: "實質資產",
  legendNominalPre: "名目（退休前）",
  legendNominalPost: "名目（退休後）",
  legendRealPre: "實質（退休前）",
  legendRealPost: "實質（退休後）",

  // Chart notes
  chartNote1:
    "※ 名目價值為未來銀行帳戶顯示的金額，實質價值為扣除物價上漲後的今日實質購買力。",
  chartNote2: "※ 預設通膨率 2.0% = 亞洲主要市場長期物價目標",

  // ChartTooltip
  tooltipYear: (year) => `第 ${year} 年`,
  tooltipFireBadge: "🔥 FIRE 退休年",
  tooltipAfterFire: "退休後",
  tooltipNominal: "名目資產",
  tooltipReal: "實質資產",
  tooltipNominalWithdraw: "名目提領額",
  tooltipNominalWithdrawProjected: "預估名目提領",
  tooltipRealWithdraw: "實質提領額",
  tooltipRealWithdrawProjected: "預估實質提領",
  tooltipFlow: "儲蓄/支出",
  tooltipAnnualWithdraw: "4% 年度提領",
  tooltipHintSet: "點擊 → 設為 FIRE 退休點",
  tooltipHintClear: "點擊 → 解除 FIRE 設定",
  tooltipHintChange: "點擊 → 更改 FIRE 退休點",

  // FireBanner
  fireLabel: (year) => `FIRE 退休年份：第 ${year} 年`,
  fireDesc: "自此年份起，每年初將自資產總額中提領 4% 作為生活費用",
  fireClear: "解除",

  // Guides Section
  guideSectionBadge: "FIRE 深度指南",
  guideSectionTitle: "生涯現金流模型與 FIRE 財務自由核心法則",
  guideSectionSubtitle:
    "深入解析複利成長、通膨購買力折減、多階段動態收支與 4% 法則的試算原理。",

  guides: [
    {
      id: "rule-of-four-percent",
      badge: "原則 1",
      title: "4% 提領法則與多階段現金流試算的原理",
      subtitle: "跳脫單純的過去回測，打造專屬於您的 40 年客製化複利曲線",
      content: [
        "在 FIRE（財務自由、提早退休）運動中，**「4% 法則」**是公認的核心基準——意即累積達**「年支出 25 倍」**的資產庫，即可享有源源不絕的被動收入。",
        "傳統計算機多依賴過去歷史數據給出固定的成功機率，然而真實人生充滿變化：升遷加薪、留學進修、斜槓副業或提早半退休（Barista FIRE），**每個階段的收支都在動態改變**。",
        "本試算器採用**40年向前預測的現金流模型**，結合「多階段自訂收支」與「每年初依總資產動態提領 4%」。多頭市場時提領金額自然增長，空頭市場時則彈性減少提領以保護本金，並直接算出未來每月可動用的被動現金流（`年提領額 ÷ 12`）。",
      ],
      takeaways: [
        "FIRE 目標資產基準：年度總生活費 × 25 倍。",
        "透過自訂分段收支，完美模擬轉職、留職停薪、副業等真實生涯情境。",
        "每月被動現金流 = (該年初總資產 × 4%) ÷ 12 個月。",
      ],
    },
    {
      id: "nominal-vs-real",
      badge: "原則 2",
      title: "名目資產 vs. 實質資產：看不見的隱形稅——通貨膨脹",
      subtitle: "30 年後的 3,000 萬元，與今天的 3,000 萬元截然不同",
      content: [
        "複利帶來的指數成長令人驚艷，但若忽略通膨將產生巨大盲點。若以每年 2.0% 通膨計算，物價約每 35 年就會翻倍。",
        "這代表 **第 30 年的 3,000 萬元**，其真實購買力僅相當於 **今日約 1,650 萬元**。圖表中的**綠色曲線（實質資產）**已完全扣除物價上漲影響，讓您精準評估退休後的實際生活水準。",
      ],
      takeaways: [
        "名目價值（藍線）：未來存摺上顯示的實際面額數字。",
        "實質價值（綠線）：扣除通膨後，換算為今日物價的實質購買力。",
        "計算公式：實質價值 = 名目價值 ÷ (1 + 通膨率)^年數。",
      ],
    },
    {
      id: "sequence-of-returns",
      badge: "原則 3",
      title: "退休初期的頭號大敵：報酬率順序風險 (SRR)",
      subtitle: "退休後最初 1～3 年的市場走勢，將決定未來 40 年的成敗",
      content: [
        "即使長年平均報酬率達到 7%，若剛退休的前 3 年遭遇 20% 以上的股市大跌，被迫在低檔變賣資產支應生活費將永久傷害本金與複利的修復力。",
        "為抵禦此風險，聰明的投資人會備妥 **1～2 年的生活預備金（現金緩衝）**，或在空頭期間彈性降低生活開銷。善用本試算器的階段設定功能，即可親自驗證現金緩衝的保護效果。",
      ],
      takeaways: [
        "退休初期在谷底被迫賣出資產是導致破產的首要原因。",
        "持有 12～24 個月的安全現金緩衝，可有效化解空頭賣股壓力。",
        "彈性的收支規劃能確保資產在極端市況下依然長青。",
      ],
    },
  ],

  // FAQ Section
  faqSectionBadge: "常見問題",
  faqSectionTitle: "FIRE 試算器 FAQ",
  faqSectionSubtitle: "為您解答計算公式、複利假設與資料隱私的疑問。",
  faqs: [
    {
      question: "這個試算器是三一研究（Trinity Study）的歷史回測工具嗎？",
      answer:
        "不是。本工具並非重演過去歷史股價來計算破產機率，而是依據您所設定的報酬率、多階段收支及通膨率，即時推算未來 40 年資產複利增長與每月可提領金額的「向前動態現金流試算器」。",
    },
    {
      question: "FIRE 達成後的每月提領額是如何計算的？",
      answer:
        "自您指定的 FIRE 年份起，每年初將自剩餘總資產中提領 4% 作為全年生活費。將其除以 12 即可得出名目每月提領額，並同步扣除通膨折現為今日購買力的實質每月提領額。",
    },
    {
      question: "實質資產與名目資產有何不同？",
      answer:
        "名目資產是帳戶上的數字；實質資產則是透過公式 `實質 = 名目 ÷ (1 + 通膨率)^年份` 扣除通膨後的真實購買力價值。",
    },
    {
      question: "儲蓄與支出階段（Periods）如何計入複利？",
      answer:
        "階段金額以今日購買力為準，程式會隨年份自動計入通膨調整。為反映全年持續發生的金流，採用年中複利折算公式 `flow × √(1 + r)` 計算。",
    },
    {
      question: "我輸入的財務資料會被儲存至伺服器嗎？",
      answer:
        "完全不會。100% 所有計算皆在您的瀏覽器本機端執行。按下「分享」產生的網址也僅為瀏覽器網址列參數，絕不上傳至任何外部伺服器。",
    },
  ],

  // Footer
  disclaimer: "過去績效與數學模型試算不代表未來實際投資成果。",
  githubLabel: "GitHub 專案原始碼",

  // Language banner
  langBannerText: "亦提供其他語言版本。",
  langBannerLink: "切換語言",
  langBannerClose: "關閉",
};
