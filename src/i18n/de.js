// Deutsch (German) 번역 리소스
export default {
  lang: "de",
  currency: "EUR",

  // Header & Nav
  title: "Finanzielle Freiheit: Wann?",
  subtitle: "Zinseszins & nachhaltiger Cashflow-Simulator für FIRE",
  shareBtn: "Einstellungen teilen",
  copied: "Kopiert!",
  shareTitle: "Aktuelle Konfiguration als URL teilen",
  languageLabel: "Sprache",

  // Presets
  presetsTitle: "Empfohlene Simulations-Presets",
  presetApply: "Anwenden",
  presetApplied: "Preset angewendet!",
  presets: [
    {
      id: "standard",
      name: "Standard 4% Zinseszins-Modell",
      desc: "Startkapital 50.000 €, 20.000 €/Jahr für 15 Jahre sparen bei 7% Rendite, FIRE ab Jahr 15.",
      base: 50000,
      rate: 7,
      periods: [{ start: 0, end: 15, amount: 20000 }],
      fireYear: 15,
    },
    {
      id: "lean",
      name: "Aggressives Lean FIRE",
      desc: "Startkapital 20.000 €, 35.000 €/Jahr für 10 Jahre intensiv sparen bei 9% Rendite, FIRE ab Jahr 10.",
      base: 20000,
      rate: 9,
      periods: [{ start: 0, end: 10, amount: 35000 }],
      fireYear: 10,
    },
    {
      id: "coast",
      name: "Coast / Barista FIRE",
      desc: "5 Jahre lang 18.000 €/Jahr sparen, danach 10 Jahre nur 4.000 €/Jahr beitragen, FIRE ab Jahr 15.",
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
  metricSectionTitle: (year) => `Vermögensprojektion · Jahr ${year}`,
  cashflowSectionTitle: (year) => `Monatlicher Cashflow · Jahr ${year}`,
  cashflowNote: "Keine Entnahmen vor Erreichen von FIRE",

  // MetricCard labels
  nominalAsset: "Nominales Vermögen",
  nominalAssetSub: "Zukünftiger Nennwert",
  realAsset: "Reales Vermögen",
  realAssetSub: "Heutige Kaufkraft",
  nominalWithdraw: "Nominale Entnahme",
  nominalWithdrawSub: "Zukünftiger Nennwert",
  realWithdraw: "Reale Entnahme",
  realWithdrawSub: "Heutige Kaufkraft",

  // InputCard
  inputTitle: "Grundeinstellungen",
  baseAssetLabel: "Startvermögen (€)",
  baseAssetPlaceholder: "30.000",
  baseAssetHint: "z.B. 30000 = 30.000 €",
  rateLabel: "Jährliche Rendite (%)",
  inflationLabel: "Angenommene Inflation (%)",
  inflationHint: (pct) => `Inflation ${pct}%`,
  inflationPresets: {
    target: "EZB-Ziel (2,0%)",
    avg: "Langzeit-Schnitt (2,5%)",
    high: "Hohe Inflation (3,5%)",
  },

  // PeriodTable
  periodTitle: "Spar- und Ausgabephasen",
  periodAdd: "+ Phase hinzufügen",
  periodEmpty: "Keine Phasen definiert",
  periodNote1: "* Positiv = Sparen, negativ = Ausgaben. Überlappende Phasen werden summiert.",
  periodNote2:
    "* Beträge entsprechen heutigen Werten; tatsächliche Zahlungsströme werden jährlich inflationsbereinigt.",

  // PeriodRow
  yearStart: "Startjahr",
  yearEnd: "Endjahr",
  yearUnit: "Jahre",
  periodRemove: "Phase löschen",
  amountLabel: "Jährliche Spar- oder Ausgaberate",
  amountUnit: "€/Jahr",
  savingBadge: "Sparen",
  spendingBadge: "Ausgabe",

  // WealthChart
  chartTitle: "Vermögenswachstum",
  chartGuide: "Klicken Sie in den Chart, um Ihr FIRE-Startjahr festzulegen",
  chartMobileYear: (year) => `Jahr ${year} ausgewählt`,
  chartXLabel: "Jahr",
  mobileSelectYear: "Ausgewähltes Jahr",
  mobileYearDisplay: (year) => `Jahr ${year}`,
  mobileSliderLabel: "Jahr auswählen",
  mobileSliderValueText: (year) => `Jahr ${year}`,
  mobileFireBtnDisabled: "Jahr 0 nicht wählbar",
  mobileFireBtnClear: "FIRE aufheben",
  mobileFireBtnSet: "Als FIRE-Jahr festlegen",

  // Legend
  legendNominal: "Nominal",
  legendReal: "Real",
  legendNominalPre: "Nominal (vor FIRE)",
  legendNominalPost: "Nominal (nach FIRE)",
  legendRealPre: "Real (vor FIRE)",
  legendRealPost: "Real (nach FIRE)",

  // Chart notes
  chartNote1:
    "* Der Nominalwert zeigt den zukünftigen Kontostand; der Realwert spiegelt die inflationsbereinigte Kaufkraft wider.",
  chartNote2:
    "* Inflation 2,0% = Langfristiges Ziel der Europäischen Zentralbank (EZB)",

  // ChartTooltip
  tooltipYear: (year) => `Jahr ${year}`,
  tooltipFireBadge: "🔥 FIRE Meilenstein",
  tooltipAfterFire: "Im Ruhestand",
  tooltipNominal: "Nominales Vermögen",
  tooltipReal: "Reales Vermögen",
  tooltipNominalWithdraw: "Nominale Entnahme",
  tooltipNominalWithdrawProjected: "Prognostizierte Entnahme",
  tooltipRealWithdraw: "Reale Entnahme",
  tooltipRealWithdrawProjected: "Prognostizierte reale Entnahme",
  tooltipFlow: "Spar-/Ausgaberate",
  tooltipAnnualWithdraw: "4% jährliche Entnahme",
  tooltipHintSet: "Klick → Als FIRE festlegen",
  tooltipHintClear: "Klick → FIRE aufheben",
  tooltipHintChange: "Klick → FIRE-Jahr ändern",

  // FireBanner
  fireLabel: (year) => `FIRE Start: Jahr ${year}`,
  fireDesc: "Ab diesem Zeitpunkt werden jährlich 4% des Portfolios entnommen",
  fireClear: "Aufheben",

  // Guides Section
  guideSectionBadge: "FIRE Deep Dive",
  guideSectionTitle: "Lebenszyklus-Cashflows und die Mathematik der finanziellen Freiheit",
  guideSectionSubtitle:
    "Erfahren Sie, wie Zinseszins, Inflation, flexible Phasen und die 4%-Regel nachhaltige Unabhängigkeit ermöglichen.",

  guides: [
    {
      id: "rule-of-four-percent",
      badge: "Regel #1",
      title: "Die 4%-Regel & mehrstufige Cashflow-Projektion",
      subtitle: "Über statische Backtests hinaus: Modellieren Sie Ihren individuellen 40-Jahre-Pfad",
      content: [
        "In der FIRE-Bewegung gilt die **'4%-Regel'** als bewährter Richtwert: Ein Vermögen vom **25-fachen der Jahresausgaben** ermöglicht finanzielle Freiheit.",
        "Klassische Rechner simulieren oft nur starre historische Renditen mit festen Beträgen. Im echten Leben verändern sich Einnahmen und Ausgaben durch Sabbaticals, Gehaltssprünge oder Teilzeitarbeit (Barista FIRE) jedoch dynamisch.",
        "Unser Simulator nutzt ein **deterministisches 40-Jahre-Cashflow-Modell**: Er kombiniert flexible Spar-/Ausgabephasen mit einer **dynamischen 4%-Entnahme** vom Jahresanfangsbestand. So passen sich Entnahmen flexibel an Marktphasen an und schützen vor Vermögensverfall.",
      ],
      takeaways: [
        "FIRE-Zielvermögen: Jährliche Lebenshaltungskosten × 25.",
        "Phasenweises Sparen ermöglicht realistische Lebensplanungen (Sabbatical, Nebeneinkommen).",
        "Monatlicher passiver Cashflow = (Jahresanfangsbestand × 4%) ÷ 12.",
      ],
    },
    {
      id: "nominal-vs-real",
      badge: "Regel #2",
      title: "Nominales vs. Reales Vermögen: Die versteckte Steuer der Inflation",
      subtitle: "Warum 2.000.000 € in 30 Jahren nicht die gleiche Kaufkraft wie heute haben",
      content: [
        "Zinseszinskurven wachsen exponentiell, doch ohne Inflationsbereinigung entsteht eine gefährliche Illusion. Bei 2,0% Inflation verdoppeln sich die Lebenshaltungskosten ca. alle 35 Jahre.",
        "Ein Depot von **2.000.000 € im Jahr 30** entspricht einer Kaufkraft von nur ca. **1.104.000 € in heutigen Preisen**. Die **grüne Kurve (Reales Vermögen)** zieht die Inflation vollständig ab, damit Sie Ihre echte zukünftige Kaufkraft beurteilen können.",
      ],
      takeaways: [
        "Nominal (Blaue Kurve): Der Betrag, der künftig auf dem Kontoauszug steht.",
        "Real (Grüne Kurve): Die reale Kaufkraft in heutigen Preisen.",
        "Formel: Reales Vermögen = Nominalwert ÷ (1 + Inflation)^Jahre.",
      ],
    },
    {
      id: "sequence-of-returns",
      badge: "Regel #3",
      title: "Das Renditereihenfolge-Risiko (Sequence of Returns Risk)",
      subtitle: "Warum die ersten 3 Jahre des Ruhestands über 40 Jahre entscheiden",
      content: [
        "Selbst bei einer durchschnittlichen Rendite von 7% kann ein Börsencrash in den ersten 3 Jahren nach Rentenbeginn das Vermögen dauerhaft schädigen, wenn Anteile zu Tiefstpreisen verkauft werden müssen.",
        "Um dies abzufedern, nutzen smarte Investoren **1–2 Jahre Notgroschen in bar**, Nebeneinkommen oder vorübergehende Ausgabenkürzungen. Nutzen Sie unsere Phasen-Tabelle, um solche Sicherheitsnetz-Szenarien durchzuspielen.",
      ],
      takeaways: [
        "Frühe Markteinbrüche sind wesentlich gefährlicher als späte Krisen.",
        "Ein Cash-Puffer von 12–24 Monaten verhindert Aktienverkäufe im Bärenmarkt.",
        "Flexible Ausgabenplanung sichert den langfristigen Portfolio-Erhalt.",
      ],
    },
  ],

  // FAQ Section
  faqSectionBadge: "Häufige Fragen",
  faqSectionTitle: "FIRE Simulator FAQ",
  faqSectionSubtitle: "Berechnungsmethodik, Annahmen und Datenschutz im Überblick.",
  faqs: [
    {
      question: "Ist dieser Simulator ein historischer Backtest-Rechner?",
      answer:
        "Nein. Statt vergangene Börsenzyklen statistisch auszuwerten, berechnet dieses Tool einen deterministischen Vorwärts-Cashflow über 40 Jahre basierend auf Ihren persönlichen Rendite-, Spar- und Inflationsannahmen.",
    },
    {
      question: "Wie wird der monatliche Entnahmebetrag berechnet?",
      answer:
        "Ab dem gewählten FIRE-Jahr werden zu Jahresbeginn 4% des Depotbestands für Lebenshaltungskosten entnommen. Geteilt durch 12 ergibt sich der monatliche Nominalbetrag sowie der inflationsbereinigte reale Wert.",
    },
    {
      question: "Was ist der Unterschied zwischen realem und nominalem Vermögen?",
      answer:
        "Nominal ist der reine Ziffernbetrag auf dem Konto. Real ist der inflationsbereinigte Wert, der zeigt, was Sie sich im Supermarkt und bei der Miete im Vergleich zu heute tatsächlich leisten können.",
    },
    {
      question: "Wie werden Spar- und Ausgabephasen verzinst?",
      answer:
        "Die Phasen-Beträge werden jährlich um die Inflation erhöht. Für die unterjährige Verzinsung kontinuierlicher Zahlungsströme nutzt der Simulator die Mittelwert-Verzinsungsformel `flow × √(1 + r)`.",
    },
    {
      question: "Werden meine Finanzdaten auf Servern gespeichert?",
      answer:
        "Nein. Alle Berechnungen laufen zu 100% lokal in Ihrem Browser. Keine persönlichen Daten werden übertragen oder gespeichert.",
    },
  ],

  // Footer
  disclaimer: "Historische Renditen und mathematische Projektionen stellen keine Anlageberatung dar.",
  githubLabel: "GitHub Repository",

  // Language banner
  langBannerText: "This page is also available in other languages.",
  langBannerLink: "Sprache wechseln",
  langBannerClose: "Schließen",
};
