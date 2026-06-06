// URL 기반 공유 유틸리티
// 모든 시뮬레이션 상태를 URL 쿼리 파라미터로 인코딩/디코딩

const PERIOD_SEP = ","; // 구간 구분자
const PERIOD_FIELDS_SEP = ":"; // 구간 내 필드 구분자 (start:end:amount)

/**
 * 상태를 URLSearchParams로 인코딩
 */
export function encodeStateToParams(base, rate, periods, fireYear) {
  const params = new URLSearchParams();

  if (base !== undefined && base !== null) params.set("b", String(base));
  if (rate !== undefined && rate !== null) params.set("r", String(rate));

  // periods: [{start, end, amount}] → "start-end-amount,start-end-amount,..."
  if (Array.isArray(periods) && periods.length > 0) {
    const encoded = periods
      .filter((p) => p != null)
      .map((p) => [p.start, p.end, p.amount].join(PERIOD_FIELDS_SEP))
      .join(PERIOD_SEP);
    if (encoded) params.set("p", encoded);
  }

  if (fireYear != null && fireYear >= 0) {
    params.set("f", String(fireYear));
  }

  return params;
}

/**
 * URLSearchParams에서 상태를 디코딩
 * @param {URLSearchParams} searchParams
 * @param {object} [defaults] - 로케일 기본값
 * @returns {{ base, rate, periods, fireYear }}
 */
export function decodeParamsToState(searchParams, defaults) {
  const d = defaults || {
    base: 30000000,
    rate: 7,
    periods: [{ start: 0, end: 20, amount: 1200 }],
  };

  const result = {
    base: d.base,
    rate: d.rate,
    periods: d.periods,
    fireYear: null,
  };

  // base
  const b = searchParams.get("b");
  if (b != null) {
    const num = Number(b);
    if (Number.isFinite(num) && num >= 0) result.base = num;
  }

  // rate
  const r = searchParams.get("r");
  if (r != null) {
    const num = Number(r);
    if (Number.isFinite(num) && num >= 0) result.rate = num;
  }

  // periods
  const p = searchParams.get("p");
  if (p) {
    try {
      const decoded = p
        .split(PERIOD_SEP)
        .map((seg) => {
          const parts = seg.split(PERIOD_FIELDS_SEP);
          if (parts.length < 3) return null;
          const start = Number(parts[0]);
          const end = Number(parts[1]);
          const amount = Number(parts[2]);
          if (!Number.isFinite(start) || !Number.isFinite(end)) return null;
          return { start, end, amount: Number.isFinite(amount) ? amount : 0 };
        })
        .filter(Boolean);
      if (decoded.length > 0) result.periods = decoded;
    } catch {
      // 파싱 실패 시 기본값 유지
    }
  }

  // fireYear
  const f = searchParams.get("f");
  if (f != null) {
    const num = Number(f);
    if (Number.isFinite(num) && num >= 0) result.fireYear = num;
  }

  return result;
}

/**
 * 현재 상태로 공유 URL 생성
 */
export function buildShareURL(base, rate, periods, fireYear) {
  const params = encodeStateToParams(base, rate, periods, fireYear);
  const qs = params.toString();
  const url = new URL(window.location.origin + window.location.pathname);
  if (qs) url.search = qs;
  return url.toString();
}

/**
 * 클립보드에 URL 복사
 */
export async function copyShareURL(base, rate, periods, fireYear) {
  const url = buildShareURL(base, rate, periods, fireYear);
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch {
    // 클립보드 실패 시 fallback
    return false;
  }
}
