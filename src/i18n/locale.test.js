import test from "node:test";
import assert from "node:assert/strict";
import {
  detectLocaleFromPath,
  LOCALES,
  SUPPORTED_LANGS,
} from "./useLocale.js";

test("detectLocaleFromPath: detects 'ko' for /ko and /ko/ paths", () => {
  assert.equal(detectLocaleFromPath("/fire-simulator/ko/"), "ko");
  assert.equal(detectLocaleFromPath("/fire-simulator/ko"), "ko");
  assert.equal(detectLocaleFromPath("/ko/"), "ko");
});

test("detectLocaleFromPath: defaults to 'en' for root and unknown paths", () => {
  assert.equal(detectLocaleFromPath("/fire-simulator/"), "en");
  assert.equal(detectLocaleFromPath("/fire-simulator"), "en");
  assert.equal(detectLocaleFromPath("/"), "en");
  assert.equal(detectLocaleFromPath("/some/random/path"), "en");
});

test("LOCALES contains complete configurations for en and ko", () => {
  assert.deepEqual(SUPPORTED_LANGS, ["en", "ko"]);
  assert.equal(LOCALES.en.path, "/");
  assert.equal(LOCALES.ko.path, "/ko/");

  for (const lang of SUPPORTED_LANGS) {
    const config = LOCALES[lang];
    assert.ok(config.lang, `${lang} should have lang`);
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
