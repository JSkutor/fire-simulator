// 자산 시뮬레이션 계산
// base: 기초자산(원), rate: 수익률(%), periods: [{start,end,amount(만원)}], fireYear: number|null
// 반환: [{year, nominal, real, flow, withdrawal}]
export const YEARS = 40;
export const INFLATION = 0.023;
export const WITHDRAW_RATE = 0.04;

export function calcWealth(base, rate, periods, fireYear) {
  const r = rate / 100;
  const arr = [];
  arr.push({
    year: 0,
    nominal: base,
    real: base,
    flow: 0,
    withdrawal: 0,
  });

  let asset = base;
  for (let y = 1; y <= YEARS; y++) {
    // 해당 연도 저축/지출 합산 (만원 → 원)
    let flow = 0;
    for (const p of periods) {
      if (!p) continue;
      const s = Number(p.start);
      const e = Number(p.end);
      const amt = Number(p.amount) || 0;
      if (Number.isFinite(s) && Number.isFinite(e) && y >= s && y <= e) {
        flow += amt * 10000;
      }
    }

    const withdrawal = (fireYear !== null && y > fireYear) ? asset * WITHDRAW_RATE : 0;
    let next = (asset - withdrawal + flow) * (1 + r);
    if (next < 0) next = 0;
    asset = next;

    const real = asset / Math.pow(1 + INFLATION, y);
    arr.push({
      year: y,
      nominal: asset,
      real,
      flow,
      withdrawal,
    });
  }
  return arr;
}
