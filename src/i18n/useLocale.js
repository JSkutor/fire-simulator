import { useMemo } from "react";
import ko from "./ko.js";
import en from "./en.js";


/**
 * Scalable locale configuration registry.
 * To add a new language (e.g. ja, es), add its dictionary and registry config here.
 */
export const LOCALES = {
  en: {
    lang: "en",
    name: "English",
    flag: "🇺🇸",
    t: en,
    isEn: true,
    isKo: false,
    inflation: 0.02, // US Fed long-term PCE target: 2.0%
    scale: 1, // Direct dollar input
    currency: "USD",
    path: "/",
    defaults: {
      base: 30000, // $30,000
      rate: 7,
      periods: [{ start: 0, end: 20, amount: 12000 }], // $12,000/yr ($1,000/mo)
    },
  },
  ko: {
    lang: "ko",
    name: "한국어",
    flag: "🇰🇷",
    t: ko,
    isEn: false,
    isKo: true,
    inflation: 0.023, // 한국 통계청 20년 CPI 연평균: 2.3%
    scale: 10000, // 만원 단위 입력 → 원 단위 변환 (× 10,000)
    currency: "KRW",
    path: "/ko/",
    defaults: {
      base: 30000000, // 3천만원
      rate: 7,
      periods: [{ start: 0, end: 20, amount: 1200 }], // 1200만원/년 (100만원/월)
    },
  },
};

export const SUPPORTED_LANGS = Object.keys(LOCALES);

/**
 * Detect locale from current window URL path.
 * Root /fire-simulator/ → 'en' (default)
 * Subpath /fire-simulator/ko/ → 'ko'
 */
export function detectLocaleFromPath(pathname = window.location.pathname) {
  if (/\/ko(\/|$)/.test(pathname)) {
    return "ko";
  }
  return "en"; // Global default is English
}

/**
 * Generate URL to switch languages while preserving query parameters (shared simulation state).
 */
export function getSwitchLangUrl(targetLang) {
  const targetConfig = LOCALES[targetLang] || LOCALES.en;
  const search = window.location.search || "";
  return targetConfig.path + search;
}

/**
 * URL path-based locale detection hook
 */
export function useLocale() {
  return useMemo(() => {
    const lang = detectLocaleFromPath();
    const config = LOCALES[lang] || LOCALES.en;

    return {
      ...config,
      getSwitchUrl: (targetLang) => getSwitchLangUrl(targetLang),
    };
  }, []);
}

/**
 * Detect user's preferred browser language for banner prompts
 * @returns {'ko' | 'en'}
 */
export function detectBrowserLang() {
  if (typeof window === "undefined") return "en";

  const stored = localStorage.getItem("fire-sim-lang-dismissed");
  if (stored) return null; // Already dismissed banner

  const langs = navigator.languages || [
    navigator.language || navigator.userLanguage,
  ];

  for (const l of langs) {
    if (typeof l === "string") {
      if (l.startsWith("ko")) return "ko";
      if (l.startsWith("en")) return "en";
    }
  }
  return "en"; // Global default
}
