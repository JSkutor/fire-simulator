import posthog from "posthog-js";

const POSTHOG_KEY = "phc_q28FLZSCKSR4uRjyVQses32Aey4XQrWCFttnEAAopVwM";
const POSTHOG_HOST = "https://us.i.posthog.com";

let isInitialized = false;

/**
 * Initialize PostHog with session replay and full autocapture
 */
export function initAnalytics(localeConfig = {}) {
  if (typeof window === "undefined" || isInitialized) return;

  try {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      autocapture: true,
      capture_pageview: true,
      capture_pageleave: true,
      persistence: "localStorage",
      session_recording: {
        maskAllInputs: false, // Allows viewing financial numbers in session recordings
        maskInputOptions: {
          password: true,
        },
      },
      loaded: (ph) => {
        if (localeConfig.lang) {
          ph.register({
            initial_locale: localeConfig.lang,
            initial_currency: localeConfig.currency,
          });
        }
      },
    });
    isInitialized = true;
  } catch (err) {
    console.error("PostHog initialization error:", err);
  }
}

/**
 * Register global properties (e.g. current language)
 */
export function setAnalyticsLocale(lang, currency) {
  if (!isInitialized) return;
  try {
    posthog.register({
      current_locale: lang,
      current_currency: currency,
    });
  } catch {}
}

/**
 * Track custom event with safe try/catch
 */
export function trackEvent(eventName, properties = {}) {
  if (!isInitialized) return;
  try {
    posthog.capture(eventName, {
      timestamp: new Date().toISOString(),
      ...properties,
    });
  } catch {}
}

// ─── High-Density Event Helpers ───

export function trackPresetApplied(preset, lang) {
  trackEvent("preset_applied", {
    preset_id: preset.id,
    preset_name: preset.name,
    preset_base: preset.base,
    preset_rate: preset.rate,
    preset_fire_year: preset.fireYear,
    preset_periods_count: preset.periods?.length || 0,
    lang,
  });
}

export function trackFireYearChanged(fireYear, metrics = {}) {
  if (fireYear != null) {
    trackEvent("fire_year_set", {
      fire_year: fireYear,
      nominal_asset_at_fire: metrics.nominal,
      real_asset_at_fire: metrics.real,
      monthly_nominal_withdraw: metrics.flowN,
      monthly_real_withdraw: metrics.flowR,
    });
  } else {
    trackEvent("fire_year_cleared");
  }
}

export function trackInflationChanged(inflation, source = "input") {
  trackEvent("inflation_changed", {
    inflation_pct: Number((inflation * 100).toFixed(2)),
    source, // 'chip' | 'input'
  });
}

export function trackShareUrlCopied(state = {}) {
  trackEvent("share_url_copied", {
    base: state.base,
    rate: state.rate,
    periods_count: state.periods?.length || 0,
    fire_year: state.fireYear,
    url: window.location.href,
  });
}

export function trackLanguageSwitched(fromLang, toLang) {
  trackEvent("language_switched", {
    from_lang: fromLang,
    to_lang: toLang,
  });
}

export function trackPeriodAdded(newCount) {
  trackEvent("period_added", {
    total_periods: newCount,
  });
}

export function trackPeriodRemoved(remainingCount) {
  trackEvent("period_removed", {
    total_periods: remainingCount,
  });
}

export function trackFaqToggled(question, isOpen) {
  trackEvent("faq_toggled", {
    question,
    action: isOpen ? "opened" : "closed",
  });
}

export function trackGuideViewed(guideId, guideTitle) {
  trackEvent("guide_viewed", {
    guide_id: guideId,
    guide_title: guideTitle,
  });
}
