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
      id: "trinity",
      name: "트리니티 4% 표준 모델",
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
  guideSectionTitle: "지속 가능한 파이어족(FIRE)의 원리와 금융 수학",
  guideSectionSubtitle:
    "복리 성장, 물가상승률(인플레이션), 안전 인출률의 수학적 원리를 한눈에 이해해 보세요.",

  guides: [
    {
      id: "trinity-study",
      badge: "원칙 1",
      title: "트리니티 연구(Trinity Study)와 4% 룰의 진실",
      subtitle: "왜 4% 인출률이 은퇴 자금의 글로벌 표준이 되었을까?",
      content: [
        "1998년 미국 트리니티 대학교의 3인 교수진(Cooley, Hubbard, Walz)은 1926년부터 1995년까지의 미국 주식/채권 역사 데이터를 바탕으로 은퇴 자금 인출 성공률을 분석했습니다. 그 결과, 은퇴 첫해 자산의 **4%를 인출하고 매년 물가상승률만큼 증액 인출**할 경우 30년간 자산이 고갈되지 않을 확률이 **95% 이상**이라는 사실을 밝혀냈습니다.",
        "하지만 전통적인 고정 4% 룰은 시장 폭락기에도 똑같은 금액을 인출하므로 40년 이상의 조기 은퇴에는 위험할 수 있습니다. 본 시뮬레이터는 **'정률 인출(Dynamic 4% Rule)'**을 적용하여 매년 남은 자산의 4%를 인출합니다. 하락장에는 인출액이 자동으로 줄어들어 원금을 지키고, 상승장에는 월 현금흐름이 늘어나 자산 고갈 위험을 근본적으로 차단합니다.",
      ],
      takeaways: [
        "4% 룰 목표 자산: 연간 총 지출액의 25배 (연 생활비 × 25).",
        "정률 인출 방식은 30~50년 이상의 조기 은퇴 시에도 포트폴리오 파산 확률을 극적으로 낮춤.",
        "월 패시브 현금흐름 = (현재 총 자산 잔액 × 4%) ÷ 12개월.",
      ],
    },
    {
      id: "nominal-vs-real",
      badge: "원칙 2",
      title: "명목 자산 vs 실질 자산: 보이지 않는 세금, 인플레이션",
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
      question: "4% 인출률은 40년 이상의 긴 은퇴 기간에도 안전한가요?",
      answer:
        "오리지널 트리니티 연구는 30년 은퇴 기간을 기준으로 95% 성공률을 도출했습니다. 40~50년 이상의 조기 은퇴를 준비하신다면 3.25%~3.5%의 보수적인 인출률을 적용하거나, 본 시뮬레이터처럼 시장 상황에 맞춰 인출액이 유동적으로 조절되는 정률 인출(Dynamic Rule) 전략을 취하는 것이 안전합니다.",
    },
    {
      question: "실질 자산과 명목 자산은 어떻게 계산되나요?",
      answer:
        "명목 자산은 입력하신 연간 수익률(예: 7%)로 매년 복리 성장합니다. 실질 자산은 여기에 장기 물가상승률(한국 2.3%, 미국 2.0%)을 반영하여 `실질 = 명목 ÷ (1 + 인플레이션)^년차` 공식으로 현재 구매력 가치로 할인 환산됩니다.",
    },
    {
      question: "저축 및 지출 구간(Periods)은 복리에 어떻게 반영되나요?",
      answer:
        "저축/지출 구간에 입력한 금액은 '현재 가치' 기준입니다. 시뮬레이션에서는 매년 물가상승률을 감안하여 실제 납입/지출 금액이 점진적으로 증액되는 것으로 계산되며, 여러 구간이 겹칠 경우 자동으로 합산되어 자산에 반영됩니다.",
    },
    {
      question: "정액 인출(Fixed 4%)과 정률 인출(Dynamic 4%)의 차이는 무엇인가요?",
      answer:
        "정액 인출은 은퇴 첫해 자산의 4%를 정하고 매년 물가상승률만큼만 인출액을 올리는 방식입니다. 반면 본 시뮬레이터가 채택한 정률 인출은 매년 당해 연도 잔여 자산의 4%를 인출하므로, 하락장에는 인출액이 줄어 원금을 보호하고 상승장에는 더 넉넉하게 생활할 수 있어 포트폴리오 파산 위험을 사실상 0으로 만듭니다.",
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

