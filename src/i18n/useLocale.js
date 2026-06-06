import { useMemo } from "react";
import ko from "./ko";
import en from "./en";

// 한국어 기본 인플레이션 (한국 CPI 20년 평균)
const INFLATION_KO = 0.023;
// 영어 기본 인플레이션 (미 연준 장기 목표)
const INFLATION_EN = 0.02;

// 한국어: 만원 단위 입력 → 원 단위 변환 (× 10,000)
// 영어: 달러 단위 직접 입력 (× 1)
const SCALE_KO = 10000;
const SCALE_EN = 1;

// 기본값
const DEFAULTS = {
  ko: {
    base: 30000000, // 3천만원
    rate: 7,
    periods: [{ start: 0, end: 20, amount: 1200 }], // 1200만원/년
  },
  en: {
    base: 30000, // $30,000
    rate: 7,
    periods: [{ start: 0, end: 20, amount: 12000 }], // $12,000/yr
  },
};

/**
 * URL 경로 기반 로케일 감지 hook
 * /fire-simulator/en/ → 'en', 그 외 → 'ko'
 */
export function useLocale() {
  return useMemo(() => {
    const path = window.location.pathname;
    const isEn = /\/en(\/|$)/.test(path);
    const lang = isEn ? "en" : "ko";

    return {
      t: isEn ? en : ko,
      lang,
      isEn,
      inflation: isEn ? INFLATION_EN : INFLATION_KO,
      scale: isEn ? SCALE_EN : SCALE_KO,
      defaults: isEn ? DEFAULTS.en : DEFAULTS.ko,
    };
  }, []);
}

/**
 * 브라우저 선호 언어 감지 (배너 표시용)
 * @returns {'ko' | 'en'}
 */
export function detectBrowserLang() {
  const stored = localStorage.getItem("fire-sim-lang-dismissed");
  if (stored) return null; // 이미 닫은 배너는 다시 안 보여줌

  const langs = navigator.languages || [
    navigator.language || navigator.userLanguage,
  ];
  for (const l of langs) {
    if (l.startsWith("ko")) return "ko";
    if (l.startsWith("en")) return "en";
  }
  return "en"; // 기본: 영어 (글로벌)
}
