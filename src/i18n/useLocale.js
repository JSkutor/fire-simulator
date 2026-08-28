import { useMemo } from "react";
import en from "./en.js";
import ko from "./ko.js";
import ja from "./ja.js";
import de from "./de.js";
import es from "./es.js";
import zh from "./zh.js";
import fr from "./fr.js";

/**
 * Scalable locale configuration registry.
 */
export const LOCALES = {
  en: {
    lang: "en",
    name: "English",
    flag: "🇺🇸",
    t: en,
    isEn: true,
    isKo: false,
    inflation: 0.02, // US Fed target 2.0%
    scale: 1,
    currency: "USD",
    path: "/",
    defaults: {
      base: 30000,
      rate: 7,
      periods: [{ start: 0, end: 20, amount: 12000 }],
    },
  },
  ko: {
    lang: "ko",
    name: "한국어",
    flag: "🇰🇷",
    t: ko,
    isEn: false,
    isKo: true,
    inflation: 0.023, // 한국 통계청 20년 CPI 2.3%
    scale: 10000,
    currency: "KRW",
    path: "/ko/",
    defaults: {
      base: 30000000,
      rate: 7,
      periods: [{ start: 0, end: 20, amount: 1200 }],
    },
  },
  ja: {
    lang: "ja",
    name: "日本語",
    flag: "🇯🇵",
    t: ja,
    isEn: false,
    isKo: false,
    inflation: 0.015, // 日本銀行 目標 1.5%
    scale: 10000,
    currency: "JPY",
    path: "/ja/",
    defaults: {
      base: 3000000,
      rate: 7,
      periods: [{ start: 0, end: 20, amount: 120 }],
    },
  },
  de: {
    lang: "de",
    name: "Deutsch",
    flag: "🇩🇪",
    t: de,
    isEn: false,
    isKo: false,
    inflation: 0.02, // EZB-Ziel 2.0%
    scale: 1,
    currency: "EUR",
    path: "/de/",
    defaults: {
      base: 30000,
      rate: 7,
      periods: [{ start: 0, end: 20, amount: 12000 }],
    },
  },
  es: {
    lang: "es",
    name: "Español",
    flag: "🇪🇸",
    t: es,
    isEn: false,
    isKo: false,
    inflation: 0.02,
    scale: 1,
    currency: "EUR",
    path: "/es/",
    defaults: {
      base: 30000,
      rate: 7,
      periods: [{ start: 0, end: 20, amount: 12000 }],
    },
  },
  zh: {
    lang: "zh",
    name: "繁體中文",
    flag: "🇹🇼",
    t: zh,
    isEn: false,
    isKo: false,
    inflation: 0.02,
    scale: 10000,
    currency: "TWD",
    path: "/zh/",
    defaults: {
      base: 1000000,
      rate: 7,
      periods: [{ start: 0, end: 20, amount: 60 }],
    },
  },
  fr: {
    lang: "fr",
    name: "Français",
    flag: "🇫🇷",
    t: fr,
    isEn: false,
    isKo: false,
    inflation: 0.02,
    scale: 1,
    currency: "EUR",
    path: "/fr/",
    defaults: {
      base: 30000,
      rate: 7,
      periods: [{ start: 0, end: 20, amount: 12000 }],
    },
  },
};

export const SUPPORTED_LANGS = Object.keys(LOCALES);

/**
 * Detect locale from current window URL path.
 */
export function detectLocaleFromPath(pathname = typeof window !== "undefined" ? window.location.pathname : "/") {
  for (const lang of SUPPORTED_LANGS) {
    if (lang === "en") continue;
    if (new RegExp(`/${lang}(/|$)`).test(pathname)) {
      return lang;
    }
  }
  return "en"; // Global default is English
}

/**
 * Generate URL to switch languages while preserving query parameters.
 */
export function getSwitchLangUrl(targetLang) {
  const targetConfig = LOCALES[targetLang] || LOCALES.en;
  const search = typeof window !== "undefined" ? window.location.search || "" : "";
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
 */
export function detectBrowserLang() {
  if (typeof window === "undefined") return "en";

  const stored = localStorage.getItem("fire-sim-lang-dismissed");
  if (stored) return null;

  const langs = navigator.languages || [
    navigator.language || navigator.userLanguage,
  ];

  for (const l of langs) {
    if (typeof l === "string") {
      const code = l.toLowerCase().split("-")[0];
      if (SUPPORTED_LANGS.includes(code)) {
        return code;
      }
    }
  }
  return "en";
}
