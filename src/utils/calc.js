// 자산 시뮬레이션 계산
// base: 기초자산(원), rate: 수익률(%), periods: [{start,end,amount(만원)}], fireYear: number|null
//
// 시점 모델 (전부 "연초" 기준):
//  - arr[y]는 **y년차 연초** 시점의 스냅샷이다. (y = 0..YEARS)
//  - nominal: 연초 명목 자산
//  - real:    연초 실질 자산 = nominal / (1+INFLATION)^y   ← 동일 시점이므로 정합
//  - withdrawal: 그 해 연초에 인출해 1년간 생활비로 사용 (= nominal × 4%)
//  - flow:    그 해 동안 발생하는 저축/지출 합산
//
// 연도 진행 식 (y → y+1):
//  next = (nominal[y] - withdrawal[y] + flow[y]) × (1 + r)
//
// 시점 일치 보장:
//  - 같은 row 내에서 nominal × 4% = withdrawal (FIRE 후) 가 정확히 성립.
//  - 따라서 툴팁 검산: withdrawal / 12 = 월 현금흐름, withdrawal × 25 = 필요자산 등 자기완결.
//
// 반환: [{ year, nominal, real, flow, withdrawal }]
export const YEARS = 40;
export const INFLATION = 0.023;
export const WITHDRAW_RATE = 0.04;

export function calcWealth(base, rate, periods, fireYear) {
  if (!Number.isFinite(base) || !Number.isFinite(rate)) return [];

  const r = rate / 100;
  const safePeriods = Array.isArray(periods) ? periods : [];
  const fireSet = Number.isFinite(fireYear) && fireYear >= 0;

  const arr = [];
  let asset = base; // 0년차 연초 자산

  for (let y = 0; y <= YEARS; y++) {
    // asset = y년차 연초 자산

    // 연초 인출: FIRE 해부터 그 해 1년치 생활비를 연초에 빼낸다
    const withdrawal = fireSet && y >= fireYear ? asset * WITHDRAW_RATE : 0;

    // 해당 연도 저축/지출 합산 (만원 → 원)
    let flow = 0;
    for (const p of safePeriods) {
      if (!p) continue;
      const s = Number(p.start);
      const e = Number(p.end);
      const amt = Number(p.amount) || 0;
      if (Number.isFinite(s) && Number.isFinite(e) && y >= s && y <= e) {
        // 저축/지출은 실질 구매력 기준
        flow += amt * 10000 * Math.pow(1 + INFLATION, y);
      }
    }

    // 연초 시점 실질가치 (nominal과 동일 시점)
    const real = asset / Math.pow(1 + INFLATION, y);

    arr.push({
      year: y,
      nominal: asset, // 연초
      real, // 연초 (시점 일치)
      flow, // 그 해 발생
      withdrawal, // 연초 (= nominal × WITHDRAW_RATE)
    });

    // 다음 해 연초로 진행
    if (y < YEARS) {
      // 모델: 인출은 연초, flow는 연중 평균 발생(중간점 근사)
      let next = (asset - withdrawal) * (1 + r) + flow * Math.sqrt(1 + r);
      if (next < 0) next = 0;
      asset = next;
    }
  }

  return arr;
}
