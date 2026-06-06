// 금액 포맷 유틸
// 입력: 원 단위 정수 (ko) 또는 달러 단위 (en)
// 출력: '3억', '3억 5,000만원', '500만원' (ko) / '$1.2M', '$500K' (en) 등

// ─── 한국어 (KRW) 포맷 ───

export function fmtKRW(value) {
  if (!Number.isFinite(value)) return "-";
  const v = Math.abs(Math.round(value));
  if (v === 0) return "0원";
  const sign = value < 0 ? "-" : "";
  const eok = Math.floor(v / 100000000);
  const man = Math.floor((v % 100000000) / 10000);
  if (eok > 0 && man > 0) return `${sign}${eok}억 ${man.toLocaleString()}만원`;
  if (eok > 0) return `${sign}${eok}억원`;
  if (man > 0) return `${sign}${man.toLocaleString()}만원`;
  return `${sign}${v.toLocaleString()}원`;
}

export function fmtAxisKRW(value) {
  if (!Number.isFinite(value)) return "-";
  const sign = value < 0 ? "-" : "";
  const v = Math.abs(value);

  const eokRaw = v / 100000000;
  const eokRounded = Math.round(eokRaw * 10) / 10;
  if (eokRounded >= 1) {
    return `${sign}${Number.isInteger(eokRounded) ? eokRounded.toFixed(0) : eokRounded.toFixed(1)}억`;
  }

  if (v >= 10000) {
    const man = Math.round(v / 10000);
    return `${sign}${man.toLocaleString()}만`;
  }

  return `${sign}${Math.round(v).toLocaleString()}`;
}

// 만원 단위 표시 (저축/지출, 현금흐름용)
export function fmtManwon(value, withSign = false) {
  if (!Number.isFinite(value)) return "-";

  const man = Math.round(value / 10000);
  const abs = Math.abs(man);

  if (man === 0) {
    if (value < 0) return "-0만원";
    if (value > 0 && withSign) return "+0만원";
    return "0만원";
  }

  const sign = man < 0 ? "-" : withSign && man > 0 ? "+" : "";
  return `${sign}${abs.toLocaleString()}만원`;
}

// ─── 영어 (USD) 포맷 ───

export function fmtUSD(value) {
  if (!Number.isFinite(value)) return "-";
  const v = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  if (v === 0) return "$0";

  if (v >= 1_000_000_000) {
    const b = v / 1_000_000_000;
    return `${sign}$${b >= 100 ? b.toFixed(0) : b >= 10 ? b.toFixed(1) : b.toFixed(2)}B`;
  }
  if (v >= 1_000_000) {
    const m = v / 1_000_000;
    return `${sign}$${m >= 100 ? m.toFixed(0) : m >= 10 ? m.toFixed(1) : m.toFixed(2)}M`;
  }
  if (v >= 1_000) {
    const k = v / 1_000;
    return `${sign}$${k >= 100 ? k.toFixed(0) : k >= 10 ? k.toFixed(1) : k.toFixed(2)}K`;
  }
  return `${sign}$${Math.round(v).toLocaleString("en-US")}`;
}

export function fmtAxisUSD(value) {
  if (!Number.isFinite(value)) return "-";
  const sign = value < 0 ? "-" : "";
  const v = Math.abs(value);

  if (v >= 1_000_000_000) {
    const b = v / 1_000_000_000;
    return `${sign}$${b >= 10 ? b.toFixed(0) : b.toFixed(1)}B`;
  }
  if (v >= 1_000_000) {
    const m = v / 1_000_000;
    return `${sign}$${m >= 10 ? m.toFixed(0) : m.toFixed(1)}M`;
  }
  if (v >= 1_000) {
    const k = Math.round(v / 1_000);
    return `${sign}$${k.toLocaleString("en-US")}K`;
  }
  return `${sign}$${Math.round(v).toLocaleString("en-US")}`;
}

// 달러 단위 현금흐름 표시
export function fmtUSDFlow(value, withSign = false) {
  if (!Number.isFinite(value)) return "-";
  const rounded = Math.round(value);
  const abs = Math.abs(rounded);

  if (rounded === 0) {
    if (value < 0) return "-$0";
    if (value > 0 && withSign) return "+$0";
    return "$0";
  }

  const sign = rounded < 0 ? "-" : withSign && rounded > 0 ? "+" : "";

  if (abs >= 1_000_000) {
    const m = abs / 1_000_000;
    return `${sign}$${m >= 10 ? m.toFixed(0) : m.toFixed(1)}M`;
  }
  if (abs >= 1_000) {
    const k = abs / 1_000;
    return `${sign}$${k >= 10 ? k.toFixed(0) : k.toFixed(1)}K`;
  }
  return `${sign}$${abs.toLocaleString("en-US")}`;
}

// ─── 통합 인터페이스: locale-aware 포맷 팩토리 ───

/**
 * 로케일에 따른 포맷 함수 세트를 반환합니다.
 * @param {boolean} isEn - 영어 환경 여부
 * @returns {{ fmtValue, fmtAxis, fmtFlow, fmtMonthly }}
 */
export function getFormatters(isEn) {
  if (isEn) {
    return {
      fmtValue: fmtUSD,
      fmtAxis: fmtAxisUSD,
      fmtFlow: fmtUSDFlow,
      fmtMonthly: (v) => `$${Math.abs(Math.round(v)).toLocaleString("en-US")}/mo`,
    };
  }
  return {
    fmtValue: fmtKRW,
    fmtAxis: fmtAxisKRW,
    fmtFlow: fmtManwon,
    fmtMonthly: (v) => `월 ${fmtManwon(v)}`,
  };
}

// ─── 레거시 호환 export (기존 테스트 코드 지원) ───
export const fmtAxis = fmtAxisKRW;
