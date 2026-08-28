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

  // Guides Section (SEO Content)
  guideSectionBadge: "FIRE 심층 가이드",
  guideSectionTitle: "생애 현금흐름 모델과 파이어족(FIRE) 금융 원리",
  guideSectionSubtitle:
    "복리 성장, 물가상승률(인플레이션), 다단계 저축·지출과 4% 인출 룰의 계산 원리를 한눈에 살펴보세요.",

  guides: [
    {
      id: "rule-of-four-percent",
      badge: "원칙 1",
      title: "4% 인출 룰과 다단계 현금흐름 시뮬레이션의 원리",
      subtitle: "단순 과거 백테스팅을 넘어, 내 생애 주기 맞춤형 복리 곡선을 그리는 방법",
      content: [
        "FIRE(조기은퇴) 운동에서 널리 쓰이는 **'4% 룰'**은 연간 은퇴 자산 잔액의 약 4%를 인출하여 1년 생활비로 사용한다는 대표적인 자립 벤치마크입니다. 이는 통상 **'연간 생활비의 25배'**를 모으면 경제적 자유를 달성할 수 있다는 계산의 바탕이 됩니다.",
        "많은 전통 계산기들이 과거 미국 시장 데이터(트리니티 연구 등)에만 의존해 단일 고정 금액의 생존 확률만 보여주는 반면, 실제 현실의 삶은 이직, 안식년, 사업 소득, 은퇴 후 파트타임 등 **생애 주기에 따라 저축과 지출이 역동적으로 변합니다**.",
        "본 시뮬레이터는 **'구간별 저축/지출(Multi-phase Flow)'**과 **'연초 잔여 자산의 4% 정률 인출'**을 결합한 **40년 전방 현금흐름 모델**을 적용합니다. 상승장에는 인출 여력이 늘고 하락장에는 인출액이 자연스럽게 조절되어 자산 고갈 위험을 완화하며, 미래 특정 연도에 매월 실제로 얼마를 인출할 수 있는지(`월 인출액 = 연 인출액 ÷ 12`)를 직관적으로 예측합니다.",
      ],
      takeaways: [
        "목표 자산 벤치마크: 연간 필요 생활비 × 25배 (은퇴 자금의 기준점).",
        "구간별 저축·지출 설정을 통해 이직, 안식년, 부수입 등 생애 재무 이벤트를 정밀 모델링.",
        "월 가용 현금흐름 = (해당 연차 연초 총자산 × 4%) ÷ 12개월.",
      ],
    },
    {
      id: "nominal-vs-real",
      badge: "원칙 2",
      title: "명목 자산 vs 실질 자산: 인플레이션의 착시와 구매력 계산",
      subtitle: "30년 뒤의 20억은 지금의 20억과 전혀 다릅니다",
      content: [
        "복리 계산기에서 찍히는 숫자는 매우 커 보이지만, 물가 상승을 고려하지 않으면 치명적인 착시가 발생합니다. 한국의 지난 20년 평균 소비자물가지수(CPI) 상승률은 연 2.3% 수준입니다.",
        "연 2.3% 물가상승률을 적용하면 **30년 뒤 20억 원**의 실질 구매력은 **현재 가치 기준 약 10.1억 원**으로 반토막 납니다. 차트의 **초록색 곡선(실질 자산)**은 물가상승분을 완벽히 제하여, 훗날 은퇴했을 때 내가 현재의 물가 기준으로 얼마의 구매력을 누릴 수 있는지 정확히 보여줍니다.",
      ],
      takeaways: [
        "명목 자산 (파란 곡선): 미래 통장에 실제로 찍히는 액면가 숫자.",
        "실질 자산 (초록 곡선): 물가 상승분을 제거한 현재 기준의 실제 구매력.",
        "계산 공식: 실질 가치 = 명목 가치 ÷ (1 + 물가상승률)^경과년수.",
      ],
    },
    {
      id: "sequence-of-returns",
      badge: "원칙 3",
      title: "은퇴 초기 최대의 적: 수익률 순서 리스크 (Sequence of Returns Risk)",
      subtitle: "은퇴 직후 1~3년의 시장 상황이 40년의 은퇴 성패를 결정합니다",
      content: [
        "평균 연 7%의 복리 수익률을 올리더라도, 은퇴 직후 첫 3년에 -20%의 대폭락장을 맞으면 자산이 급격히 쪼그라들어 복리의 회복력을 영원히 잃게 됩니다. 이를 '수익률 순서 리스크(SRR)'라고 부릅니다.",
        "이를 방어하기 위해 현명한 파이어족들은 **1~2년 치 생활비에 해당하는 현금 버퍼**를 두거나, 은퇴 초기 지출을 일시적으로 줄이는 유연한 현금흐름 전략을 사용합니다. 본 시뮬레이터의 **저축/지출 구간 설정** 기능을 통해 시장 하락기 지출 절감이나 부수입(바리스타 파이어) 효과를 직접 시뮬레이션해 보세요.",
      ],
      takeaways: [
        "은퇴 초기 폭락장에서 원금을 헐값에 매도하는 것이 자산 고갈의 제1원인.",
        "12~24개월 치 현금성 완충 자산 보유 시 하락장 매도 압박 완벽 방어.",
        "구간별 저축/지출 설정을 활용하여 생애 주기별 유연한 현금흐름 계획 수립.",
      ],
    },
  ],

  // FAQ Section
  faqSectionBadge: "자주 묻는 질문",
  faqSectionTitle: "FIRE 시뮬레이터 FAQ",
  faqSectionSubtitle: "계산 공식, 복리 및 인출 가정, 데이터 보안에 관한 궁금증을 해결해 드립니다.",
  faqs: [
    {
      question: "이 시뮬레이터는 트리니티 연구 기반의 백테스팅 도구인가요?",
      answer:
        "아닙니다. 본 시뮬레이터는 과거 역사적 주가 데이터를 돌려 생존 확률을 역산하는 백테스팅 도구가 아니라, 사용자가 입력한 '수익률(r%)', '구간별 저축/지출 플로우', '물가상승률'을 바탕으로 향후 40년간의 자산 복리 성장과 월 인출 가능액을 실시간 추정하는 '전방 다단계 현금흐름 시뮬레이터(Forward Multi-Phase Cash Flow Simulator)'입니다.",
    },
    {
      question: "FIRE 시점 이후 월 인출액은 어떻게 계산되나요?",
      answer:
        "지정한 FIRE 연차부터 매년 연초 자산 잔액의 4%를 연간 생활비로 인출한다고 가정합니다. 이를 12개월로 나누어 '월 명목 인출액'을 산출하고, 여기에 인플레이션을 할인하여 현재 구매력 기준의 '월 실질 인출액'을 동시에 산출합니다.",
    },
    {
      question: "실질 자산과 명목 자산은 어떻게 계산되나요?",
      answer:
        "명목 자산은 입력하신 연간 수익률(예: 7%)로 매년 복리 성장합니다. 실질 자산은 여기에 장기 물가상승률(한국 2.3%, 미국 2.0%)을 반영하여 `실질 = 명목 ÷ (1 + 인플레이션)^년차` 공식으로 현재 구매력 가치로 할인 환산됩니다.",
    },
    {
      question: "저축 및 지출 구간(Periods)은 복리에 어떻게 반영되나요?",
      answer:
        "저축/지출 구간에 입력한 금액은 '현재 가치' 기준입니다. 시뮬레이션에서는 매년 물가상승률을 감안하여 실제 납입/지출 금액이 점진적으로 증액되는 것으로 계산되며, 연중 발생하는 현금흐름을 반영하기 위해 `flow × √(1+r)` 중간점 복리 공식을 적용합니다. 여러 구간이 겹칠 경우 자동으로 합산됩니다.",
    },
    {
      question: "내가 입력한 자산 및 소득 정보가 서버에 저장되나요?",
      answer:
        "전혀 저장되지 않습니다. 100% 모든 계산과 데이터 처리는 사용자의 웹 브라우저 로컬 환경에서만 안전하게 실행됩니다. '공유' 버튼을 누를 때 생성되는 URL 또한 브라우저 주소창의 파라미터로만 인코딩되며 외부 서버로 전송되지 않습니다.",
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

