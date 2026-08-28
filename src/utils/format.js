// Universal Multi-Locale Currency & Compact Number Formatter

// ─── 4-digit System (East Asian: 만/억/조 or 万/億/兆) ───

export function fmt4Digit(value, opts = {}) {
  if (!Number.isFinite(value)) return "-";
  const {
    prefix = "",
    suffix = "",
    unitMan = "만",
    unitEok = "억",
    showFullUnits = true,
  } = opts;

  const v = Math.abs(Math.round(value));
  const sign = value < 0 ? "-" : "";

  if (v === 0) return `${prefix}0${showFullUnits ? suffix : ""}`;

  const eok = Math.floor(v / 100000000);
  const man = Math.floor((v % 100000000) / 10000);

  if (eok > 0 && man > 0) {
    return `${sign}${prefix}${eok}${unitEok} ${man.toLocaleString()}${unitMan}${suffix}`;
  }
  if (eok > 0) {
    return `${sign}${prefix}${eok}${unitEok}${suffix}`;
  }
  if (man > 0) {
    return `${sign}${prefix}${man.toLocaleString()}${unitMan}${suffix}`;
  }
  return `${sign}${prefix}${v.toLocaleString()}${suffix}`;
}

export function fmtAxis4Digit(value, opts = {}) {
  if (!Number.isFinite(value)) return "-";
  const { prefix = "", unitMan = "만", unitEok = "억" } = opts;
  const sign = value < 0 ? "-" : "";
  const v = Math.abs(value);

  const eokRaw = v / 100000000;
  const eokRounded = Math.round(eokRaw * 10) / 10;
  if (eokRounded >= 1) {
    return `${sign}${prefix}${Number.isInteger(eokRounded) ? eokRounded.toFixed(0) : eokRounded.toFixed(1)}${unitEok}`;
  }

  if (v >= 10000) {
    const man = Math.round(v / 10000);
    return `${sign}${prefix}${man.toLocaleString()}${unitMan}`;
  }

  return `${sign}${prefix}${Math.round(v).toLocaleString()}`;
}

export function fmtFlow4Digit(value, withSign = false, opts = {}) {
  if (!Number.isFinite(value)) return "-";
  const { prefix = "", unitMan = "만원", suffix = "" } = opts;
  const man = Math.round(value / 10000);
  const abs = Math.abs(man);

  if (man === 0) {
    if (value < 0) return `-${prefix}0${unitMan}${suffix}`;
    if (value > 0 && withSign) return `+${prefix}0${unitMan}${suffix}`;
    return `${prefix}0${unitMan}${suffix}`;
  }

  const sign = man < 0 ? "-" : withSign && man > 0 ? "+" : "";
  return `${sign}${prefix}${abs.toLocaleString()}${unitMan}${suffix}`;
}

// ─── 3-digit System (Western: K / M / B) ───

export function fmt3Digit(value, opts = {}) {
  if (!Number.isFinite(value)) return "-";
  const { prefix = "$", suffix = "" } = opts;
  const v = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  if (v === 0) return `${prefix}0${suffix}`;

  if (v >= 1_000_000_000) {
    const b = v / 1_000_000_000;
    const str = b >= 100 ? b.toFixed(0) : b >= 10 ? b.toFixed(1) : b.toFixed(2);
    return `${sign}${prefix}${str}B${suffix}`;
  }
  if (v >= 1_000_000) {
    const m = v / 1_000_000;
    const str = m >= 100 ? m.toFixed(0) : m >= 10 ? m.toFixed(1) : m.toFixed(2);
    return `${sign}${prefix}${str}M${suffix}`;
  }
  if (v >= 1_000) {
    const k = v / 1_000;
    const str = k >= 100 ? k.toFixed(0) : k >= 10 ? k.toFixed(1) : k.toFixed(2);
    return `${sign}${prefix}${str}K${suffix}`;
  }
  return `${sign}${prefix}${Math.round(v).toLocaleString("en-US")}${suffix}`;
}

export function fmtAxis3Digit(value, opts = {}) {
  if (!Number.isFinite(value)) return "-";
  const { prefix = "$", suffix = "" } = opts;
  const sign = value < 0 ? "-" : "";
  const v = Math.abs(value);

  if (v >= 1_000_000_000) {
    const b = v / 1_000_000_000;
    return `${sign}${prefix}${b >= 10 ? b.toFixed(0) : b.toFixed(1)}B${suffix}`;
  }
  if (v >= 1_000_000) {
    const m = v / 1_000_000;
    return `${sign}${prefix}${m >= 10 ? m.toFixed(0) : m.toFixed(1)}M${suffix}`;
  }
  if (v >= 1_000) {
    const k = Math.round(v / 1_000);
    return `${sign}${prefix}${k.toLocaleString("en-US")}K${suffix}`;
  }
  return `${sign}${prefix}${Math.round(v).toLocaleString("en-US")}${suffix}`;
}

export function fmtFlow3Digit(value, withSign = false, opts = {}) {
  if (!Number.isFinite(value)) return "-";
  const { prefix = "$", suffix = "" } = opts;
  const rounded = Math.round(value);
  const abs = Math.abs(rounded);

  if (rounded === 0) {
    if (value < 0) return `-${prefix}0${suffix}`;
    if (value > 0 && withSign) return `+${prefix}0${suffix}`;
    return `${prefix}0${suffix}`;
  }

  const sign = rounded < 0 ? "-" : withSign && rounded > 0 ? "+" : "";

  if (abs >= 1_000_000) {
    const m = abs / 1_000_000;
    return `${sign}${prefix}${m >= 10 ? m.toFixed(0) : m.toFixed(1)}M${suffix}`;
  }
  if (abs >= 1_000) {
    const k = abs / 1_000;
    return `${sign}${prefix}${k >= 10 ? k.toFixed(0) : k.toFixed(1)}K${suffix}`;
  }
  return `${sign}${prefix}${abs.toLocaleString("en-US")}${suffix}`;
}

// ─── Legacy Specific Formatters ───

export function fmtKRW(value) {
  return fmt4Digit(value, { suffix: "원", unitMan: "만", unitEok: "억" });
}

export function fmtAxisKRW(value) {
  return fmtAxis4Digit(value, { unitMan: "만", unitEok: "억" });
}

export function fmtManwon(value, withSign = false) {
  return fmtFlow4Digit(value, withSign, { unitMan: "만원" });
}

export function fmtUSD(value) {
  return fmt3Digit(value, { prefix: "$" });
}

export function fmtAxisUSD(value) {
  return fmtAxis3Digit(value, { prefix: "$" });
}

export function fmtUSDFlow(value, withSign = false) {
  return fmtFlow3Digit(value, withSign, { prefix: "$" });
}

// ─── Locale-Aware Formatter Factory ───

export function getFormatters(localeConfigOrIsEn) {
  // Support legacy boolean argument: true -> 'en', false -> 'ko'
  const lang = typeof localeConfigOrIsEn === "object"
    ? localeConfigOrIsEn.lang
    : localeConfigOrIsEn === true
      ? "en"
      : "ko";

  switch (lang) {
    case "ja":
      return {
        fmtValue: (v) => fmt4Digit(v, { prefix: "¥", unitMan: "万", unitEok: "億" }),
        fmtAxis: (v) => fmtAxis4Digit(v, { prefix: "¥", unitMan: "万", unitEok: "億" }),
        fmtFlow: (v, s) => fmtFlow4Digit(v, s, { prefix: "¥", unitMan: "万円" }),
        fmtMonthly: (v) => `月 ¥${Math.abs(Math.round(v / 10000)).toLocaleString()}万`,
      };

    case "zh":
      return {
        fmtValue: (v) => fmt4Digit(v, { prefix: "NT$", unitMan: "萬", unitEok: "億" }),
        fmtAxis: (v) => fmtAxis4Digit(v, { prefix: "NT$", unitMan: "萬", unitEok: "億" }),
        fmtFlow: (v, s) => fmtFlow4Digit(v, s, { prefix: "NT$", unitMan: "萬元" }),
        fmtMonthly: (v) => `月 NT$${Math.abs(Math.round(v / 10000)).toLocaleString()}萬`,
      };

    case "de":
      return {
        fmtValue: (v) => fmt3Digit(v, { prefix: "", suffix: " €" }),
        fmtAxis: (v) => fmtAxis3Digit(v, { prefix: "", suffix: " €" }),
        fmtFlow: (v, s) => fmtFlow3Digit(v, s, { prefix: "", suffix: " €" }),
        fmtMonthly: (v) => `${Math.abs(Math.round(v)).toLocaleString("de-DE")} €/Monat`,
      };

    case "fr":
      return {
        fmtValue: (v) => fmt3Digit(v, { prefix: "", suffix: " €" }),
        fmtAxis: (v) => fmtAxis3Digit(v, { prefix: "", suffix: " €" }),
        fmtFlow: (v, s) => fmtFlow3Digit(v, s, { prefix: "", suffix: " €" }),
        fmtMonthly: (v) => `${Math.abs(Math.round(v)).toLocaleString("fr-FR")} €/mois`,
      };

    case "es":
      return {
        fmtValue: (v) => fmt3Digit(v, { prefix: "", suffix: " €" }),
        fmtAxis: (v) => fmtAxis3Digit(v, { prefix: "", suffix: " €" }),
        fmtFlow: (v, s) => fmtFlow3Digit(v, s, { prefix: "", suffix: " €" }),
        fmtMonthly: (v) => `${Math.abs(Math.round(v)).toLocaleString("es-ES")} €/mes`,
      };

    case "ko":
      return {
        fmtValue: fmtKRW,
        fmtAxis: fmtAxisKRW,
        fmtFlow: fmtManwon,
        fmtMonthly: (v) => `월 ${fmtManwon(v)}`,
      };

    case "en":
    default:
      return {
        fmtValue: fmtUSD,
        fmtAxis: fmtAxisUSD,
        fmtFlow: fmtUSDFlow,
        fmtMonthly: (v) => `$${Math.abs(Math.round(v)).toLocaleString("en-US")}/mo`,
      };
  }
}

export const fmtAxis = fmtAxisKRW;
