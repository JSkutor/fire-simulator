// 금액 포맷 유틸
// 입력: 원 단위 정수
// 출력: '3억', '3억 5000만원', '500만원', '-1200만원' 등
export function fmtKRW(value) {
  if (value === 0) return '0원';
  const sign = value < 0 ? '-' : '';
  const v = Math.abs(Math.round(value));
  const eok = Math.floor(v / 100000000);
  const man = Math.floor((v % 100000000) / 10000);
  if (eok > 0 && man > 0) return `${sign}${eok}억 ${man.toLocaleString()}만원`;
  if (eok > 0) return `${sign}${eok}억원`;
  if (man > 0) return `${sign}${man.toLocaleString()}만원`;
  return `${sign}${v.toLocaleString()}원`;
}

// Y축 간결 포맷
export function fmtAxis(value) {
  const v = Math.abs(value);
  const sign = value < 0 ? '-' : '';
  if (v >= 100000000) {
    const eok = v / 100000000;
    return `${sign}${eok % 1 === 0 ? eok.toFixed(0) : eok.toFixed(1)}억`;
  }
  if (v >= 10000) {
    const man = Math.round(v / 10000);
    return `${sign}${man.toLocaleString()}만`;
  }
  return `${sign}${v.toLocaleString()}`;
}

// 만원 단위 표시 (저축/지출, 현금흐름용)
// 입력: 원 단위
// 출력: '+500만원', '-200만원', '월 100만원'
export function fmtManwon(value, withSign = false) {
  const man = Math.round(value / 10000);
  const abs = Math.abs(man);
  const sign = man < 0 ? '-' : (withSign && man > 0 ? '+' : '');
  return `${sign}${abs.toLocaleString()}만원`;
}
