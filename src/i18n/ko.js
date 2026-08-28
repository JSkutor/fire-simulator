// 한국어 번역 리소스
export default {
  lang: "ko",
  currency: "KRW",

  // Header & Nav
  title: "경제적 자립, 언제?",
  subtitle: "복리의 마법과 마르지 않는 현금흐름 시뮬레이션",
  shareBtn: "입력값 공유",
  copied: "복사됨!",
  shareTitle: "현재 설정을 URL로 공유",
  languageLabel: "언어",

  // Presets
  presetsTitle: "추천 시뮬레이션 프리셋",
  presetApply: "적용하기",
  presetApplied: "프리셋이 적용되었습니다!",
  presets: [
    {
      id: "standard",
      name: "표준 복리 & 4% 인출 모델",
      desc: "초기 5천만원, 연 2,400만원(월 200만) 15년 저축, 연 7% 수익률, 15년차 은퇴.",
      base: 50000000,
      rate: 7,
      periods: [{ start: 0, end: 15, amount: 2400 }],
      fireYear: 15,
    },
    {
      id: "lean",
      name: "공격적 조기은퇴 (Lean FIRE)",
      desc: "초기 2천만원, 연 3,600만원(월 300만) 10년 집중 저축, 연 9% 수익률, 10년차 조기은퇴.",
      base: 20000000,
      rate: 9,
      periods: [{ start: 0, end: 10, amount: 3600 }],
      fireYear: 10,
    },
    {
      id: "coast",
      name: "바리스타 / 코스트 FIRE",
      desc: "초기 5년간 연 2,000만원 집중 저축 후, 10년간 연 500만원만 가볍게 저축하며 복리 유지, 15년차 은퇴.",
      base: 30000000,
      rate: 7.5,
      periods: [
        { start: 0, end: 5, amount: 2000 },
        { start: 5, end: 15, amount: 500 },
      ],
      fireYear: 15,
    },
  ],

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
  inflationLabel: "예상 물가상승률(인플레이션) (%)",
  inflationHint: (pct) => `인플레이션 ${pct}%`,
  inflationPresets: {
    target: "한은 목표 (2.0%)",
    avg: "20년 평균 (2.3%)",
    high: "고물가 시나리오 (3.5%)",
  },

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

  // Guides Section (SEO Content)
  guideSectionBadge: "FIRE 심층 가이드",
  guideSectionTitle: "지속 가능한 파이어족을 위한 핵심 금융 원리",
  guideSectionSubtitle:
    "단순한 희망 회로가 아닌, 복리 성장·물가상승률·현금흐름 수학으로 내 은퇴 시점을 현실적으로 설계해 보세요.",

  guides: [
    {
      id: "rule-of-four-percent",
      badge: "핵심 원칙 1",
      title: "4% 룰과 다단계 현금흐름 시뮬레이션의 원리",
      subtitle: "단순한 과거 백테스트를 넘어, 내 인생 주기에 맞춘 40년 복리 곡선 그리기",
      content: [
        "FIRE(조기은퇴) 운동의 상징인 **'4% 룰'**은 은퇴 자산의 약 4%를 매년 생활비로 인출한다는 기준점입니다. 일반적으로 **'1년 생활비의 25배'**를 모으면 경제적 자립이 가능하다고 봅니다.",
        "하지만 많은 전통 계산기는 과거 데이터(트리니티 연구 등)에만 갇혀 고정 금액의 파산 확률만 보여줍니다. 실제 현실의 삶은 이직, 안식년, 부업, 단계적 은퇴(바리스타 파이어)처럼 **시기마다 저축과 지출이 역동적으로 변합니다**.",
        "본 시뮬레이터는 **'생애 주기별 저축/지출 플로우'**와 **'연초 잔여 자산의 4% 정률 인출'**을 결합한 **40년 전방 현금흐름 모델**을 사용합니다. 상승장에는 인출 여력이 늘고 하락장에는 인출액이 자동으로 줄어들어 원금을 지키며, 미래 특정 연도에 매월 실제로 얼마를 쓸 수 있는지(`연 인출액 ÷ 12`)를 직관적으로 보여줍니다.",
      ],
      takeaways: [
        "목표 자산 기준점: 연간 필요 생활비 × 25배.",
        "구간별 저축·지출 설정으로 이직, 안식년, 부수입 등 현실적인 재무 이벤트를 정밀 시뮬레이션.",
        "월 가용 현금흐름 = (해당 연차 연초 총자산 × 4%) ÷ 12개월.",
      ],
    },
    {
      id: "nominal-vs-real",
      badge: "핵심 원칙 2",
      title: "명목 자산 vs 실질 자산: 인플레이션의 착시와 진짜 구매력",
      subtitle: "30년 뒤의 20억은 지금의 20억과 완전히 다릅니다",
      content: [
        "복리 계산기에서 불어나는 숫자는 화려하지만, 물가 상승을 빼놓으면 치명적인 착시에 빠지게 됩니다. 한국의 지난 20년 평균 소비자물가지수(CPI) 상승률은 연 2.3% 수준입니다.",
        "연 2.3% 물가상승률을 적용하면 **30년 뒤 20억 원**의 실질 구매력은 **현재 가치 기준 약 10.1억 원**으로 반토막 납니다. 차트의 **초록색 곡선(실질 자산)**은 물가상승분을 완벽히 제하여, 미래 은퇴 시점에 내가 누릴 수 있는 진짜 생활 수준을 정확히 보여줍니다.",
      ],
      takeaways: [
        "명목 자산 (파란 선): 미래 통장에 실제로 찍히는 액면가 숫자.",
        "실질 자산 (초록 선): 물가 상승분을 뺀 현재 기준의 실제 구매력.",
        "계산 공식: 실질 가치 = 명목 가치 ÷ (1 + 물가상승률)^경과년수.",
      ],
    },
    {
      id: "sequence-of-returns",
      badge: "핵심 원칙 3",
      title: "수익률 순서 리스크(SRR): 은퇴 직후 3년이 40년을 좌우한다",
      subtitle: "평균 수익률이 같아도, 하락장을 언제 맞느냐에 따라 은퇴 성패가 갈립니다",
      content: [
        "평균 연 7%의 복리 수익률을 기록하더라도, 은퇴 직후 첫 3년에 -20%의 대폭락장을 맞으면 자산이 급격히 쪼그라들어 복리의 회복력을 영원히 잃게 됩니다. 이를 '수익률 순서 리스크(SRR)'라고 부릅니다.",
        "이를 현명하게 방어하기 위해 파이어족들은 **1~2년 치 생활비에 해당하는 현금 완충 버퍼**를 두거나, 은퇴 초기 지출을 유연하게 줄입니다. 본 시뮬레이터의 **저축/지출 구간 설정** 기능을 통해 하락기 지출 절감이나 가벼운 부수입 효과를 직접 시뮬레이션해 보세요.",
      ],
      takeaways: [
        "은퇴 초기 폭락장에서 원금을 헐값에 매도하는 것이 자산 고갈의 가장 큰 원인.",
        "12~24개월 치 안전 현금 버퍼 확보 시 하락장 매도 압박 완벽 방어.",
        "구간별 유연한 저축/지출 계획으로 시장 변동성에 강한 포트폴리오 구축.",
      ],
    },
  ],

  // FAQ Section
  faqSectionBadge: "자주 묻는 질문",
  faqSectionTitle: "FIRE 시뮬레이터 FAQ",
  faqSectionSubtitle: "계산 원리, 복리 가정, 데이터 프라이버시에 대해 명쾌하게 알려드립니다.",
  faqs: [
    {
      question: "이 시뮬레이터는 트리니티 연구 기반의 백테스팅 도구인가요?",
      answer:
        "아닙니다. 과거 주가를 돌려 생존 확률을 역산하는 백테스팅 도구가 아니라, 사용자가 직접 설정한 수익률, 구간별 저축/지출 플로우, 물가상승률에 따라 향후 40년간의 자산 복리 성장과 월 인출 가능액을 실시간 계산하는 '전방 다단계 현금흐름 시뮬레이터'입니다.",
    },
    {
      question: "FIRE 시점 이후 월 인출액은 어떻게 계산되나요?",
      answer:
        "지정한 FIRE 연차부터 매년 연초 자산 잔액의 4%를 생활비로 인출한다고 가정합니다. 이를 12개월로 나누어 '월 명목 인출액'을 계산하고, 여기에 인플레이션을 할인하여 현재 물가 기준의 '월 실질 인출액'을 함께 보여줍니다.",
    },
    {
      question: "실질 자산과 명목 자산의 차이는 무엇인가요?",
      answer:
        "명목 자산은 통장에 찍히는 미래의 액면가 숫자이고, 실질 자산은 물가상승률을 할인하여 `실질 = 명목 ÷ (1 + 인플레이션)^년차` 공식으로 계산한 '오늘날의 실제 장바구니 구매력'입니다.",
    },
    {
      question: "저축 및 지출 구간(Periods)은 복리에 어떻게 반영되나요?",
      answer:
        "입력하신 구간별 금액은 '현재 가치' 기준이며, 매년 물가상승률만큼 자동 증액 반영됩니다. 또한 연중 고르게 발생하는 현금흐름을 사실적으로 반영하기 위해 `flow × √(1+r)` 중간점 복리 공식을 적용합니다.",
    },
    {
      question: "내가 입력한 금융 데이터가 서버에 저장되나요?",
      answer:
        "전혀 저장되지 않습니다. 100% 모든 계산은 사용자의 웹 브라우저 로컬 환경에서만 안전하게 실행됩니다. '공유' 버튼으로 생성되는 링크도 브라우저 주소창의 파라미터로만 인코딩되며 외부 서버로 전송되지 않습니다.",
    },
  ],

  // Footer
  disclaimer: "과거의 수익률이나 수학적 시뮬레이션이 미래의 투자 결과를 보장하지 않습니다.",
  githubLabel: "GitHub 저장소",

  // Language banner (shown on KO page to EN users)
  langBannerText: "English version is available.",
  langBannerLink: "Switch to English",
  langBannerClose: "Close",
};

