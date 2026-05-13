// 금액 포맷 유틸
// 입력: 원 단위 정수
// 출력: '3억', '3억 5,000만원', '500만원', '-1,200만원' 등
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

// Y축 간결 포맷
// 입력: 원 단위
// 출력: '1억', '1.5억', '5,000만', '-3,000만'
export function fmtAxis(value) {
  if (!Number.isFinite(value)) return "-";
  const sign = value < 0 ? "-" : "";
  const v = Math.abs(value);

  // 1억 경계: 라운딩 후 1억 이상이 되면 '억' 단위로 표시
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
// 입력: 원 단위
// 출력: '+500만원', '-200만원', '월 100만원'
export function fmtManwon(value, withSign = false) {
  if (!Number.isFinite(value)) return "-";

  const man = Math.round(value / 10000);
  const abs = Math.abs(man);

  // 소액(±1만원 미만) 음수가 0으로 라운딩되면서 부호가 사라지는 케이스 방어
  if (man === 0) {
    if (value < 0) return "-0만원";
    if (value > 0 && withSign) return "+0만원";
    return "0만원";
  }

  const sign = man < 0 ? "-" : withSign && man > 0 ? "+" : "";
  return `${sign}${abs.toLocaleString()}만원`;
}
