// Français (French) 번역 리소스
export default {
  lang: "fr",
  currency: "EUR",

  // Header & Nav
  title: "Indépendance Financière : Quand ?",
  subtitle: "Intérêts composés et simulateur de flux de trésorerie pour le mouvement FIRE",
  shareBtn: "Partager la simulation",
  copied: "Copié !",
  shareTitle: "Partager la configuration actuelle par URL",
  languageLabel: "Langue",

  // Presets
  presetsTitle: "Scénarios recommandés",
  presetApply: "Appliquer",
  presetApplied: "Scénario appliqué !",
  presets: [
    {
      id: "standard",
      name: "Modèle standard 4% et intérêts composés",
      desc: "Capital initial 50 000 €, épargne de 20 000 €/an pendant 15 ans à 7% de rendement, retraite à l'an 15.",
      base: 50000,
      rate: 7,
      periods: [{ start: 0, end: 15, amount: 20000 }],
      fireYear: 15,
    },
    {
      id: "lean",
      name: "FIRE rapide et intensif (Lean FIRE)",
      desc: "Capital initial 20 000 €, épargne intensive de 35 000 €/an pendant 10 ans à 9% de rendement, retraite à l'an 10.",
      base: 20000,
      rate: 9,
      periods: [{ start: 0, end: 10, amount: 35000 }],
      fireYear: 10,
    },
    {
      id: "coast",
      name: "Coast / Barista FIRE",
      desc: "Épargne de 18 000 €/an pendant 5 ans, puis contribution légère de 4 000 €/an pendant 10 ans, retraite à l'an 15.",
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
  metricSectionTitle: (year) => `Projection patrimoniale · An ${year}`,
  cashflowSectionTitle: (year) => `Rente mensuelle estimée · An ${year}`,
  cashflowNote: "Aucun retrait avant d'atteindre FIRE",

  // MetricCard labels
  nominalAsset: "Patrimoine nominal",
  nominalAssetSub: "Valeur faciale future",
  realAsset: "Patrimoine réel",
  realAssetSub: "Pouvoir d'achat actuel",
  nominalWithdraw: "Retrait nominal",
  nominalWithdrawSub: "Valeur faciale future",
  realWithdraw: "Retrait réel",
  realWithdrawSub: "Pouvoir d'achat actuel",

  // InputCard
  inputTitle: "Paramètres de base",
  baseAssetLabel: "Patrimoine de départ (€)",
  baseAssetPlaceholder: "30 000",
  baseAssetHint: "ex. 30000 = 30 000 €",
  rateLabel: "Rendement annuel moyen (%)",
  inflationLabel: "Inflation estimée (%)",
  inflationHint: (pct) => `Inflation ${pct}%`,
  inflationPresets: {
    target: "Cible BCE (2,0%)",
    avg: "Moyenne historique (2,5%)",
    high: "Forte inflation (3,5%)",
  },

  // PeriodTable
  periodTitle: "Phases d'épargne et de dépenses",
  periodAdd: "+ Ajouter une phase",
  periodEmpty: "Aucune phase définie",
  periodNote1: "* Positif = épargne, négatif = dépenses. Les phases superposées s'additionnent.",
  periodNote2:
    "* Montants en pouvoir d'achat actuel ; les flux sont ajustés de l'inflation chaque année.",

  // PeriodRow
  yearStart: "Année début",
  yearEnd: "Année fin",
  yearUnit: "ans",
  periodRemove: "Supprimer",
  amountLabel: "Montant annuel épargné ou dépensé",
  amountUnit: "€/an",
  savingBadge: "Épargne",
  spendingBadge: "Dépense",

  // WealthChart
  chartTitle: "Trajectoire de croissance patrimoniale",
  chartGuide: "Cliquez sur le graphique pour définir votre année de départ FIRE",
  chartMobileYear: (year) => `Année ${year} sélectionnée`,
  chartXLabel: "Année",
  mobileSelectYear: "Année sélectionnée",
  mobileYearDisplay: (year) => `Année ${year}`,
  mobileSliderLabel: "Sélectionner une année",
  mobileSliderValueText: (year) => `Année ${year}`,
  mobileFireBtnDisabled: "Année 0 non sélectionnable",
  mobileFireBtnClear: "Annuler FIRE",
  mobileFireBtnSet: "Définir comme année FIRE",

  // Legend
  legendNominal: "Nominal",
  legendReal: "Réel",
  legendNominalPre: "Nominal (avant FIRE)",
  legendNominalPost: "Nominal (après FIRE)",
  legendRealPre: "Réel (avant FIRE)",
  legendRealPost: "Réel (après FIRE)",

  // Chart notes
  chartNote1:
    "* La valeur nominale est le montant brut affiché ; la valeur réelle déduit l'inflation pour refléter le pouvoir d'achat actuel.",
  chartNote2: "* Inflation 2,0% = Objectif à long terme de la Banque Centrale Européenne",

  // ChartTooltip
  tooltipYear: (year) => `Année ${year}`,
  tooltipFireBadge: "🔥 Étape FIRE",
  tooltipAfterFire: "À la retraite",
  tooltipNominal: "Patrimoine nominal",
  tooltipReal: "Patrimoine réel",
  tooltipNominalWithdraw: "Retrait nominal",
  tooltipNominalWithdrawProjected: "Retrait nominal estimé",
  tooltipRealWithdraw: "Retrait réel",
  tooltipRealWithdrawProjected: "Retrait réel estimé",
  tooltipFlow: "Épargne / Dépense",
  tooltipAnnualWithdraw: "Retrait annuel de 4%",
  tooltipHintSet: "Cliquer → Définir comme FIRE",
  tooltipHintClear: "Cliquer → Annuler FIRE",
  tooltipHintChange: "Cliquer → Changer l'année FIRE",

  // FireBanner
  fireLabel: (year) => `Départ FIRE : Année ${year}`,
  fireDesc: "À partir de cette année, 4% du portefeuille est retiré chaque année",
  fireClear: "Annuler",

  // Guides Section
  guideSectionBadge: "Guide approfondi FIRE",
  guideSectionTitle: "Modèle de flux de trésorerie et mathématiques de la liberté financière",
  guideSectionSubtitle:
    "Comprenez les intérêts composés, l'impact de l'inflation et la mécanique de la règle des 4%.",

  guides: [
    {
      id: "rule-of-four-percent",
      badge: "Règle #1",
      title: "La règle des 4% et la simulation multi-phases",
      subtitle: "Au-delà des simples backtests : modélisez votre trajectoire sur 40 ans",
      content: [
        "Dans le mouvement FIRE, la **'règle des 4%'** sert de référence : accumuler **25 fois ses dépenses annuelles** constitue le socle d'un capital pérenne.",
        "Alors que les calculateurs classiques se contentent souvent d'extrapoler le passé, la vie réelle fluctue avec des reconversions, des congés sabbatiques ou du travail à temps partiel (Barista FIRE).",
        "Ce simulateur applique un **modèle déterministe sur 40 ans** combinant des phases d'épargne sur-mesure avec un **retrait dynamique de 4% sur le solde de début d'année**. Cela protège votre capital lors des baisses et calcule votre véritable rente mensuelle.",
      ],
      takeaways: [
        "Objectif FIRE : Dépenses annuelles × 25.",
        "Les phases personnalisées permettent de modéliser congés sabbatiques, revenus d'appoint et transitions professionnelles.",
        "Rente passive mensuelle = (Capital en début d'année × 4%) ÷ 12.",
      ],
    },
    {
      id: "nominal-vs-real",
      badge: "Règle #2",
      title: "Patrimoine nominal vs réel : L'impôt invisible de l'inflation",
      subtitle: "Pourquoi 2 000 000 € dans 30 ans ne vaudront pas 2 000 000 € aujourd'hui",
      content: [
        "Les intérêts composés créent une croissance exponentielle, mais négliger l'inflation mène à de graves erreurs. Avec une inflation de 2,0%, le coût de la vie double tous les 35 ans environ.",
        "Un portefeuille de **2 000 000 € dans 30 ans** aura le pouvoir d'achat de seulement **1 104 000 € d'aujourd'hui**. La **courbe verte (Patrimoine réel)** déduit entièrement l'inflation pour vous donner une vision exacte de votre niveau de vie futur.",
      ],
      takeaways: [
        "Nominal (Courbe bleue) : Le montant chiffré sur votre relevé bancaire futur.",
        "Réel (Courbe verte) : Le pouvoir d'achat réel en euros d'aujourd'hui.",
        "Formule : Valeur réelle = Valeur nominale ÷ (1 + Inflation)^Années.",
      ],
    },
    {
      id: "sequence-of-returns",
      badge: "Règle #3",
      title: "Le risque de séquence des rendements (Sequence of Returns Risk)",
      subtitle: "Pourquoi les 3 premières années de retraite déterminent votre avenir financier",
      content: [
        "Même avec un rendement moyen de 7%, subir une forte baisse boursière au cours des 3 premières années de retraite peut compromettre durablement la pérennité du capital si vous vendez des actifs au plus bas.",
        "Pour parer à cela, conservez **1 à 2 ans de dépenses en liquidités (matelas de sécurité)** ou adaptez temporairement vos dépenses. Utilisez notre tableau de phases pour simuler ces coussins de sécurité.",
      ],
      takeaways: [
        "Les krachs précoces sont bien plus destructeurs que les baisses tardives.",
        "Un matelas de 12 à 24 mois évite de liquider des actions au creux de la vague.",
        "Une gestion flexible des dépenses garantit la longévité de votre portefeuille.",
      ],
    },
  ],

  // FAQ Section
  faqSectionBadge: "Foire Aux Questions",
  faqSectionTitle: "FAQ du simulateur FIRE",
  faqSectionSubtitle: "Méthodologie de calcul, hypothèses et protection de vos données.",
  faqs: [
    {
      question: "Ce simulateur est-il un simple outil de backtest historique ?",
      answer:
        "Non. Plutôt que de rejouer des crises passées, il s'agit d'un simulateur de flux de trésorerie sur 40 ans qui projette votre patrimoine et votre rente mensuelle en fonction de vos propres prévisions de rendement et d'inflation.",
    },
    {
      question: "Comment est calculée la rente mensuelle après FIRE ?",
      answer:
        "À partir de l'année FIRE choisie, 4% du solde de début d'année est prélevé pour financer vos dépenses. Ce montant est divisé par 12 pour afficher la rente mensuelle brute et son équivalent en pouvoir d'achat réel.",
    },
    {
      question: "Quelle est la différence entre patrimoine réel et nominal ?",
      answer:
        "Le nominal est le montant chiffré sur votre compte ; le réel déduit l'inflation cumulée pour refléter ce que vous pourrez concrètement acheter en prix d'aujourd'hui.",
    },
    {
      question: "Comment sont capitalisées les phases d'épargne et de dépenses ?",
      answer:
        "Les montants sont ajustés chaque année selon l'inflation. Pour refléter des flux continus tout au long de l'année, le simulateur applique une capitalisation à mi-période `flux × √(1 + r)`.",
    },
    {
      question: "Mes données financières sont-elles envoyées sur un serveur ?",
      answer:
        "Absolument pas. 100% des calculs s'exécutent localement dans votre navigateur web. Aucune donnée n'est stockée ni transmise.",
    },
  ],

  // Footer
  disclaimer: "Les rendements passés et les projections mathématiques ne constituent pas un conseil en investissement.",
  githubLabel: "Dépôt GitHub",

  // Language banner
  langBannerText: "Disponible également dans d'autres langues.",
  langBannerLink: "Changer de langue",
  langBannerClose: "Fermer",
};
