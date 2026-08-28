// Español (Spanish) 번역 리소스
export default {
  lang: "es",
  currency: "EUR",

  // Header & Nav
  title: "Libertad Financiera: ¿Cuándo?",
  subtitle: "Interés compuesto y simulador de flujo de caja continuo para FIRE",
  shareBtn: "Compartir ajustes",
  copied: "¡Copiado!",
  shareTitle: "Compartir configuración actual vía URL",
  languageLabel: "Idioma",

  // Presets
  presetsTitle: "Preajustes recomendados",
  presetApply: "Aplicar",
  presetApplied: "¡Preajuste aplicado!",
  presets: [
    {
      id: "standard",
      name: "Modelo estándar de 4% e interés compuesto",
      desc: "Capital inicial 50.000 €, ahorro de 20.000 €/año durante 15 años al 7% de rentabilidad, retiro en el año 15.",
      base: 50000,
      rate: 7,
      periods: [{ start: 0, end: 15, amount: 20000 }],
      fireYear: 15,
    },
    {
      id: "lean",
      name: "FIRE rápido y agresivo (Lean FIRE)",
      desc: "Capital inicial 20.000 €, ahorro de 35.000 €/año durante 10 años al 9% de rentabilidad, retiro en el año 10.",
      base: 20000,
      rate: 9,
      periods: [{ start: 0, end: 10, amount: 35000 }],
      fireYear: 10,
    },
    {
      id: "coast",
      name: "Coast / Barista FIRE",
      desc: "Ahorro intensivo de 18.000 €/año durante 5 años, luego 4.000 €/año durante 10 años, retiro en el año 15.",
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
  metricSectionTitle: (year) => `Proyección de patrimonio · Año ${year}`,
  cashflowSectionTitle: (year) => `Flujo de caja mensual · Año ${year}`,
  cashflowNote: "Sin retiros antes de alcanzar FIRE",

  // MetricCard labels
  nominalAsset: "Patrimonio nominal",
  nominalAssetSub: "Valor facial futuro",
  realAsset: "Patrimonio real",
  realAssetSub: "Poder adquisitivo actual",
  nominalWithdraw: "Retiro nominal",
  nominalWithdrawSub: "Valor facial futuro",
  realWithdraw: "Retiro real",
  realWithdrawSub: "Poder adquisitivo actual",

  // InputCard
  inputTitle: "Parámetros básicos",
  baseAssetLabel: "Patrimonio inicial (€)",
  baseAssetPlaceholder: "30.000",
  baseAssetHint: "ej. 30000 = 30.000 €",
  rateLabel: "Rentabilidad anual esperada (%)",
  inflationLabel: "Inflación estimada (%)",
  inflationHint: (pct) => `Inflación ${pct}%`,
  inflationPresets: {
    target: "Objetivo BCE (2,0%)",
    avg: "Media histórica (2,5%)",
    high: "Alta inflación (3,5%)",
  },

  // PeriodTable
  periodTitle: "Fases de ahorro y gasto",
  periodAdd: "+ Añadir fase",
  periodEmpty: "No hay fases definidas",
  periodNote1: "* Positivo = ahorro, negativo = gasto. Las fases solapadas se suman.",
  periodNote2:
    "* Los importes son en poder adquisitivo actual; los flujos reales se ajustan anualmente por inflación.",

  // PeriodRow
  yearStart: "Año inicio",
  yearEnd: "Año fin",
  yearUnit: "años",
  periodRemove: "Eliminar fase",
  amountLabel: "Ahorro o gasto anual",
  amountUnit: "€/año",
  savingBadge: "Ahorro",
  spendingBadge: "Gasto",

  // WealthChart
  chartTitle: "Curva de crecimiento patrimonial",
  chartGuide: "Haz clic en el gráfico para definir tu año de retiro FIRE",
  chartMobileYear: (year) => `Año ${year} seleccionado`,
  chartXLabel: "Año",
  mobileSelectYear: "Año seleccionado",
  mobileYearDisplay: (year) => `Año ${year}`,
  mobileSliderLabel: "Seleccionar año",
  mobileSliderValueText: (year) => `Año ${year}`,
  mobileFireBtnDisabled: "Año 0 no seleccionable",
  mobileFireBtnClear: "Desactivar FIRE",
  mobileFireBtnSet: "Fijar este año como FIRE",

  // Legend
  legendNominal: "Nominal",
  legendReal: "Real",
  legendNominalPre: "Nominal (antes de FIRE)",
  legendNominalPost: "Nominal (después de FIRE)",
  legendRealPre: "Real (antes de FIRE)",
  legendRealPost: "Real (después de FIRE)",

  // Chart notes
  chartNote1:
    "* El valor nominal muestra el saldo futuro; el valor real descuenta la inflación para reflejar el poder de compra de hoy.",
  chartNote2:
    "* Inflación 2,0% = Objetivo a largo plazo del Banco Central Europeo",

  // ChartTooltip
  tooltipYear: (year) => `Año ${year}`,
  tooltipFireBadge: "🔥 Hito FIRE",
  tooltipAfterFire: "Retirado",
  tooltipNominal: "Patrimonio nominal",
  tooltipReal: "Patrimonio real",
  tooltipNominalWithdraw: "Retiro nominal",
  tooltipNominalWithdrawProjected: "Retiro nominal proyectado",
  tooltipRealWithdraw: "Retiro real",
  tooltipRealWithdrawProjected: "Retiro real proyectado",
  tooltipFlow: "Ahorro/Gasto",
  tooltipAnnualWithdraw: "Retiro anual 4%",
  tooltipHintSet: "Clic → Fijar año FIRE",
  tooltipHintClear: "Clic → Desactivar FIRE",
  tooltipHintChange: "Clic → Cambiar año FIRE",

  // FireBanner
  fireLabel: (year) => `Año FIRE: Año ${year}`,
  fireDesc: "A partir de este punto se retira anualmente el 4% del saldo de la cartera",
  fireClear: "Desactivar",

  // Guides Section
  guideSectionBadge: "Guía a fondo de FIRE",
  guideSectionTitle: "Flujos de caja y la matemática de la libertad financiera",
  guideSectionSubtitle:
    "Comprende el interés compuesto, la inflación, las fases de ahorro y la regla del 4%.",

  guides: [
    {
      id: "rule-of-four-percent",
      badge: "Regla #1",
      title: "La regla del 4% y la simulación de flujo de caja multietapa",
      subtitle: "Más allá de los backtests estáticos: proyecta tu trayectoria personalizada a 40 años",
      content: [
        "En el movimiento FIRE, la **'regla del 4%'** establece que acumular **25 veces tus gastos anuales** proporciona una base de capital sostenible para la jubilación anticipada.",
        "A diferencia de los simuladores tradicionales que solo ofrecen probabilidades estáticas basadas en el pasado, la vida real es dinámica: ascensos, años sabáticos, ingresos pasivos o retiro parcial (Barista FIRE).",
        "Este simulador utiliza un **modelo determinista a 40 años** que combina fases dinámicas con un **retiro del 4% sobre el saldo inicial anual**, protegiendo el capital durante caídas y calculando tu renta mensual pasiva real.",
      ],
      takeaways: [
        "Patrimonio objetivo FIRE: Gastos anuales × 25.",
        "Las fases personalizadas permiten modelar años sabáticos, ingresos extra y cambios profesionales.",
        "Flujo de caja mensual pasivo = (Saldo a inicio de año × 4%) ÷ 12.",
      ],
    },
    {
      id: "nominal-vs-real",
      badge: "Regla #2",
      title: "Patrimonio nominal vs. real: El impuesto silencioso de la inflación",
      subtitle: "Por qué 2.000.000 € en 30 años no comprarán lo mismo que 2.000.000 € hoy",
      content: [
        "El interés compuesto crece exponencialmente, pero ignorar la inflación crea una ilusión peligrosa. Con una inflación del 2,0%, el coste de la vida se duplica cada 35 años aproximadamente.",
        "Una cartera de **2.000.000 € en el año 30** tendrá un poder adquisitivo equivalente a unos **1.104.000 € de hoy**. La **curva verde (Patrimonio real)** descuenta la inflación para mostrar tu capacidad de compra auténtica.",
      ],
      takeaways: [
        "Valor nominal (Línea azul): El saldo que verás en tu cuenta bancaria.",
        "Valor real (Línea verde): El poder adquisitivo real en precios de hoy.",
        "Fórmula: Valor real = Valor nominal ÷ (1 + Inflación)^Años.",
      ],
    },
    {
      id: "sequence-of-returns",
      badge: "Regla #3",
      title: "Riesgo de secuencia de rendimientos (Sequence of Returns Risk)",
      subtitle: "Por qué los 3 primeros años de jubilación deciden la supervivencia del patrimonio",
      content: [
        "Incluso con una rentabilidad media del 7%, si los primeros 3 años tras el retiro sufren fuertes caídas bursátiles, vender acciones en mínimos para cubrir gastos puede mermar irreparablemente el capital.",
        "Para protegerte, conviene mantener **1–2 años de gastos en efectivo (colchón de seguridad)** o ajustar gastos durante caídas. Utiliza nuestra tabla de fases para simular estos colchones.",
      ],
      takeaways: [
        "Las caídas bursátiles tempranas son mucho más destructivas que las tardías.",
        "Tener 12–24 meses de colchón de seguridad evita vender acciones en pérdidas.",
        "La planificación flexible de gastos garantiza la longevidad del patrimonio.",
      ],
    },
  ],

  // FAQ Section
  faqSectionBadge: "Preguntas Frecuentes",
  faqSectionTitle: "FAQ del Simulador FIRE",
  faqSectionSubtitle: "Respuestas claras sobre metodología, fórmulas y privacidad.",
  faqs: [
    {
      question: "¿Es este simulador una herramienta de backtesting histórico?",
      answer:
        "No. En lugar de reexaminar caídas históricas pasadas, es un simulador de flujo de caja hacia adelante a 40 años que calcula el crecimiento patrimonial y la renta mensual según tus propios parámetros de rentabilidad e inflación.",
    },
    {
      question: "¿Cómo se calcula el retiro mensual tras el hito FIRE?",
      answer:
        "A partir del año FIRE seleccionado, se retira el 4% del saldo patrimonial a principios de año para gastos. Se divide entre 12 para obtener la renta mensual nominal y real ajustada por inflación.",
    },
    {
      question: "¿Cuál es la diferencia entre patrimonio real y nominal?",
      answer:
        "El nominal es la cifra monetaria en cuenta; el real descuenta la inflación acumulada para mostrar lo que verdaderamente puedes comprar en precios de hoy.",
    },
    {
      question: "¿Cómo se capitalizan las fases de ahorro y gasto?",
      answer:
        "Los importes se actualizan con la inflación cada año. Para flujos anuales continuos, se aplica la fórmula de capitalización a mitad de año `flujo × √(1 + r)`.",
    },
    {
      question: "¿Se guardan mis datos financieros en algún servidor?",
      answer:
        "No. El 100% de los cálculos y datos se ejecutan localmente en tu navegador. Ningún dato viaja a servidores externos.",
    },
  ],

  // Footer
  disclaimer: "Los rendimientos pasados y proyecciones matemáticas no garantizan resultados futuros.",
  githubLabel: "Repositorio en GitHub",

  // Language banner
  langBannerText: "Disponible también en otros idiomas.",
  langBannerLink: "Cambiar idioma",
  langBannerClose: "Cerrar",
};
