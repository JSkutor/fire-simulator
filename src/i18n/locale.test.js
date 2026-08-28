import test from "node:test";
import assert from "node:assert/strict";
import {
  detectLocaleFromPath,
  LOCALES,
  SUPPORTED_LANGS,
} from "./useLocale.js";
import { getFormatters } from "../utils/format.js";

test("detectLocaleFromPath: detects each language from pathname", () => {
  assert.equal(detectLocaleFromPath("/ko/"), "ko");
  assert.equal(detectLocaleFromPath("/ja/"), "ja");
  assert.equal(detectLocaleFromPath("/de/"), "de");
  assert.equal(detectLocaleFromPath("/es/"), "es");
  assert.equal(detectLocaleFromPath("/zh/"), "zh");
  assert.equal(detectLocaleFromPath("/fr/"), "fr");
  assert.equal(detectLocaleFromPath("/"), "en");
  assert.equal(detectLocaleFromPath("/some/random/path"), "en");
});

test("LOCALES contains complete configurations for all 7 supported languages", () => {
  assert.deepEqual(SUPPORTED_LANGS, ["en", "ko", "ja", "de", "es", "zh", "fr"]);

  for (const lang of SUPPORTED_LANGS) {
    const config = LOCALES[lang];
    assert.ok(config.lang, `${lang} should have lang`);
    assert.ok(config.name, `${lang} should have display name`);
    assert.ok(config.flag, `${lang} should have flag`);
    assert.ok(config.t, `${lang} should have translation dictionary`);
    assert.ok(config.defaults, `${lang} should have defaults`);
    assert.ok(Array.isArray(config.t.guides), `${lang} should have guides`);
    assert.ok(config.t.guides.length >= 3, `${lang} should have at least 3 guides`);
    assert.ok(Array.isArray(config.t.faqs), `${lang} should have FAQs`);
    assert.ok(config.t.faqs.length >= 5, `${lang} should have at least 5 FAQs`);
    assert.ok(Array.isArray(config.t.presets), `${lang} should have presets`);
    assert.ok(config.t.presets.length >= 3, `${lang} should have at least 3 presets`);
  }
});

test("getFormatters generates working formatters for all languages", () => {
  for (const lang of SUPPORTED_LANGS) {
    const config = LOCALES[lang];
    const fmt = getFormatters(config);

    assert.equal(typeof fmt.fmtValue, "function", `${lang} fmtValue must be function`);
    assert.equal(typeof fmt.fmtAxis, "function", `${lang} fmtAxis must be function`);
    assert.equal(typeof fmt.fmtFlow, "function", `${lang} fmtFlow must be function`);
    assert.equal(typeof fmt.fmtMonthly, "function", `${lang} fmtMonthly must be function`);

    // Basic execution sanity check
    assert.ok(fmt.fmtValue(1000000).length > 0);
    assert.ok(fmt.fmtAxis(1000000).length > 0);
    assert.ok(fmt.fmtFlow(1000000).length > 0);
    assert.ok(fmt.fmtMonthly(50000).length > 0);
  }
});
