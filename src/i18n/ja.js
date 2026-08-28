// 日本語 (Japanese) 번역 리소스
export default {
  lang: "ja",
  currency: "JPY",

  // Header & Nav
  title: "経済的自立、いつ？",
  subtitle: "複利の力と尽きないキャッシュフローシミュレーション",
  shareBtn: "設定を共有",
  copied: "コピー完了！",
  shareTitle: "現在の設定をURLで共有",
  languageLabel: "言語",

  // Presets
  presetsTitle: "おすすめシミュレーションプリセット",
  presetApply: "適用する",
  presetApplied: "プリセットを適用しました！",
  presets: [
    {
      id: "standard",
      name: "標準複利 & 4%取崩しモデル",
      desc: "初期500万円、年240万円（月20万）15年積立、年利7%、15年目リタイア。",
      base: 5000000,
      rate: 7,
      periods: [{ start: 0, end: 15, amount: 240 }],
      fireYear: 15,
    },
    {
      id: "lean",
      name: "超速早期退職（Lean FIRE）",
      desc: "初期200万円、年360万円（月30万）10年集中積立、年利9%、10年目早期リタイア。",
      base: 2000000,
      rate: 9,
      periods: [{ start: 0, end: 10, amount: 360 }],
      fireYear: 10,
    },
    {
      id: "coast",
      name: "バリスタ / コーストFIRE",
      desc: "初期5年間年200万円集中積立後、10年間は年50万円の軽微な積立で複利維持、15年目リタイア。",
      base: 3000000,
      rate: 7.5,
      periods: [
        { start: 0, end: 5, amount: 200 },
        { start: 5, end: 15, amount: 50 },
      ],
      fireYear: 15,
    },
  ],

  // Metric section titles
  metricSectionTitle: (year) => `資産シミュレーション · ${year}年目`,
  cashflowSectionTitle: (year) => `月間キャッシュフロー予測 · ${year}年目`,
  cashflowNote: "FIRE前は実際の取崩しなし",

  // MetricCard labels
  nominalAsset: "名目資産",
  nominalAssetSub: "将来の額面基準",
  realAsset: "実質資産",
  realAssetSub: "現在の購買力基準",
  nominalWithdraw: "名目取崩し額",
  nominalWithdrawSub: "将来の額面基準",
  realWithdraw: "実質取崩し額",
  realWithdrawSub: "現在の購買力基準",

  // InputCard
  inputTitle: "基本入力",
  baseAssetLabel: "初期資産 (円)",
  baseAssetPlaceholder: "10,000,000",
  baseAssetHint: "例) 30000000 = 3000万円",
  rateLabel: "年間運用利回り (%)",
  inflationLabel: "想定インフレ率 (%)",
  inflationHint: (pct) => `インフレ率 ${pct}%`,
  inflationPresets: {
    target: "日銀目標 (1.5%)",
    avg: "長期平均 (2.0%)",
    high: "高インフレ (3.0%)",
  },

  // PeriodTable
  periodTitle: "貯蓄 / 支出期間",
  periodAdd: "+ 期間を追加",
  periodEmpty: "設定された期間はありません",
  periodNote1: "※ 正数 = 貯蓄(積立)、負数 = 支出。重複期間は合算されます。",
  periodNote2:
    "※ 入力金額は現在価値基準であり、実際の入出金は毎年のインフレ率を反映して計算されます。",

  // PeriodRow
  yearStart: "開始年",
  yearEnd: "終了年",
  yearUnit: "年目",
  periodRemove: "期間を削除",
  amountLabel: "年間貯蓄または支出額",
  amountUnit: "万円/年",
  savingBadge: "貯蓄",
  spendingBadge: "支出",

  // WealthChart
  chartTitle: "資産成長曲線",
  chartGuide: "グラフをクリックしてFIRE達成時期を指定してください",
  chartMobileYear: (year) => `${year}年目を選択`,
  chartXLabel: "年目",
  mobileSelectYear: "選択した年",
  mobileYearDisplay: (year) => `${year}年目`,
  mobileSliderLabel: "選択年",
  mobileSliderValueText: (year) => `${year}年目`,
  mobileFireBtnDisabled: "0年目は指定不可",
  mobileFireBtnClear: "FIRE解除",
  mobileFireBtnSet: "この年をFIREに設定",

  // Legend
  legendNominal: "名目資産",
  legendReal: "実質資産",
  legendNominalPre: "名目 (リタイア前)",
  legendNominalPost: "名目 (リタイア後)",
  legendRealPre: "実質 (リタイア前)",
  legendRealPost: "実質 (リタイア後)",

  // Chart notes
  chartNote1:
    "※ 名目価値は将来の通帳に印字される金額、実質価値は物価上昇を差し引いた現在の購買力です。",
  chartNote2:
    "※ インフレ率 1.5% = 日本の標準想定物価上昇率",

  // ChartTooltip
  tooltipYear: (year) => `${year}年目`,
  tooltipFireBadge: "🔥 FIRE達成時期",
  tooltipAfterFire: "リタイア後",
  tooltipNominal: "名目資産",
  tooltipReal: "実質資産",
  tooltipNominalWithdraw: "名目取崩額",
  tooltipNominalWithdrawProjected: "名目想定取崩額",
  tooltipRealWithdraw: "実質取崩額",
  tooltipRealWithdrawProjected: "実質想定取崩額",
  tooltipFlow: "貯蓄/支出",
  tooltipAnnualWithdraw: "4%年間取崩し",
  tooltipHintSet: "クリック → FIRE時点に設定",
  tooltipHintClear: "クリック → FIRE設定を解除",
  tooltipHintChange: "クリック → FIRE時点を変更",

  // FireBanner
  fireLabel: (year) => `FIRE達成時点: ${year}年目`,
  fireDesc: "この時点から毎年資産残高の4%取崩しが反映されます",
  fireClear: "解除",

  // Guides Section (SEO Content)
  guideSectionBadge: "FIRE深層ガイド",
  guideSectionTitle: "生涯キャッシュフローモデルとFIREの金融原則",
  guideSectionSubtitle:
    "複利成長、インフレによる購買力変化、多段階の貯蓄・支出と4%ルールの仕組みを解説します。",

  guides: [
    {
      id: "rule-of-four-percent",
      badge: "原則 1",
      title: "4%取崩しルールと多段階キャッシュフローの原理",
      subtitle: "過去のバックテストを超えて、自分だけの40年複利軌道を描く方法",
      content: [
        "FIRE運動で広く用いられる**「4%ルール」**は、年間生活費の約4%を資産から取り崩して生活するという代表的な経済的自立の基準です。一般に**「年間生活費の25倍」**の資産を築くことがゴールとなります。",
        "従来の計算機は過去データに依存した静的な確率を示すものが多いですが、実際の人生では転職、休職、副業、段階的リタイアなど**時期によって収支がダイナミックに変化**します。",
        "当シミュレーターは、**「期間別貯蓄・支出フロー」**と**「年初残高の4%定率取崩し」**を組み合わせた**40年将来キャッシュフローモデル**を採用しています。相場上昇時は生活費が増え、下落時は自動で引き締めが働くため資産枯渇を防ぎ、毎月の実質手取り額を直感的に予測できます。",
      ],
      takeaways: [
        "目標資産ベンチマーク: 年間生活費 × 25倍。",
        "期間ごとの収支設定で、転職・独立・副業など現実的なライフイベントを再現。",
        "月間パッシブキャッシュフロー = (当該年の年初総資産 × 4%) ÷ 12ヶ月。",
      ],
    },
    {
      id: "nominal-vs-real",
      badge: "原則 2",
      title: "名目資産 vs 実質資産: インフレの罠と真の購買力",
      subtitle: "30年後の1億円は、現在の1億円と同じではありません",
      content: [
        "複利計算で将来の数字が大きく見えても、インフレを考慮しないと深刻な見落としが生じます。年1.5%の物価上昇でも30年間で購買力は約35%目減りします。",
        "グラフの**緑色の曲線（実質資産）**はインフレ率を割り引いた「現在の物価水準での真の価値」を示しています。将来リタイアした際に本当に暮らしていけるかを評価するには、必ず実質資産を確認することが不可欠です。",
      ],
      takeaways: [
        "名目資産（青い線）: 将来の通帳に印字される額面金額。",
        "実質資産（緑の線）: 物価上昇を控除した現在の購買力。",
        "計算式: 実質価値 = 名目価値 ÷ (1 + インフレ率)^経過年数。",
      ],
    },
    {
      id: "sequence-of-returns",
      badge: "原則 3",
      title: "リタイア初期の最大のリスク: 収益率の順序リスク (SRR)",
      subtitle: "退職後1〜3年の市場環境が40年の成否を左右する",
      content: [
        "長期平均利回りが年7%であっても、退職直後の初期3年間に大幅な下落相場を迎えると、生活費のための資産売却により元本が大きく毀損し、複利の回復力が失われます（収益率の順序リスク）。",
        "これを防ぐため、**1〜2年分の生活防衛資金（現金クッション）**を確保したり、初期支出を抑える柔軟な支出調整が有効です。当ツールの期間設定機能を活用して、下落時の生活防衛シミュレーションを行ってみてください。",
      ],
      takeaways: [
        "リタイア初期の大暴落での底値売りが資産枯渇の最大の要因。",
        "12〜24ヶ月分の安全資金を持つことで下落相場を乗り切る。",
        "期間ごとの柔軟な貯蓄・支出計画で不測の事態に備える。",
      ],
    },
  ],

  // FAQ Section
  faqSectionBadge: "よくある質問",
  faqSectionTitle: "FIREシミュレーター FAQ",
  faqSectionSubtitle: "計算方式、複利・取崩しの前提、データプライバシーについてお答えします。",
  faqs: [
    {
      question: "このシミュレーターはトリニティ研究の過去検証ツールですか？",
      answer:
        "いいえ。過去データを再演して破産確率を出すツールではなく、ユーザーが設定した利回り・収支フロー・インフレ率に基づき、今後40年間の資産推移と月間取崩し額をリアルタイム計算する「将来確定型キャッシュフローシミュレーター」です。",
    },
    {
      question: "FIRE後の月間取崩し額はどのように計算されますか？",
      answer:
        "指定したFIRE達成年以降、毎年の年初資産残高の4%を年間生活費として取り崩します。これを12分割して「月間名目取崩額」を算出し、インフレ率で割り引いた現在の購買力基準の「月間実質取崩額」を同時に表示します。",
    },
    {
      question: "名目資産と実質資産はどう違いますか？",
      answer:
        "名目資産は設定した利回りで成長する将来の額面数字です。実質資産は設定インフレ率を割り引いて計算した「現在の買い出し・家賃基準での本当の価値」です。",
    },
    {
      question: "貯蓄・支出期間(Periods)は複利にどう反映されますか？",
      answer:
        "期間に設定した金額は「現在価値」基準です。シミュレーター内では毎年のインフレ率に応じて実際の金額が段階的に増額調整され、年中平均で発生する収支を近似する中間点複利式 `flow × √(1 + r)` が適用されます。",
    },
    {
      question: "入力した財務データはサーバーに保存されますか？",
      answer:
        "一切保存されません。すべての計算はブラウザのローカル環境内でのみ実行されます。「共有」ボタンで生成されるURLもブラウザのアドレスバー用パラメータとしてのみ作成されます。",
    },
  ],

  // Footer
  disclaimer: "過去の実績や数学的試算は将来の投資成果を保証するものではありません。",
  githubLabel: "GitHub リポジトリ",

  // Language banner
  langBannerText: "他の言語バージョンもご利用いただけます。",
  langBannerLink: "言語を切り替える",
  langBannerClose: "閉じる",
};
