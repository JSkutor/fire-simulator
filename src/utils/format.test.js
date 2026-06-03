import test from "node:test";
import assert from "node:assert/strict";
import { fmtKRW, fmtAxis, fmtManwon } from "./format.js";

// ─── fmtKRW ──────────────────────────────────────────────────────────────────

test("fmtKRW: 0원", () => {
  assert.equal(fmtKRW(0), "0원");
});

test("fmtKRW: NaN은 대시 반환", () => {
  assert.equal(fmtKRW(Number.NaN), "-");
  assert.equal(fmtKRW(undefined), "-");
});

test("fmtKRW: Infinity는 대시 반환", () => {
  assert.equal(fmtKRW(Infinity), "-");
});

test("fmtKRW: 1만원 미만은 원 단위", () => {
  assert.equal(fmtKRW(9999), "9,999원");
  assert.equal(fmtKRW(5000), "5,000원");
  assert.equal(fmtKRW(1), "1원");
});

test("fmtKRW: 만원 단위", () => {
  assert.equal(fmtKRW(10000), "1만원");
  assert.equal(fmtKRW(12300000), "1,230만원");
  assert.equal(fmtKRW(99990000), "9,999만원");
});

test("fmtKRW: 억 단위 (만원 미만 버림)", () => {
  assert.equal(fmtKRW(100000000), "1억원");
  assert.equal(fmtKRW(123456789), "1억 2,345만원");
  assert.equal(fmtKRW(350000000), "3억 5,000만원");
  assert.equal(fmtKRW(100800000), "1억 80만원");
});

test("fmtKRW: 음수", () => {
  assert.equal(fmtKRW(-5000000), "-500만원");
  assert.equal(fmtKRW(-123456789), "-1억 2,345만원");
  assert.equal(fmtKRW(-9999), "-9,999원");
  assert.equal(fmtKRW(-10000), "-1만원");
});

// ─── fmtAxis ─────────────────────────────────────────────────────────────────

test("fmtAxis: 0", () => {
  assert.equal(fmtAxis(0), "0");
});

test("fmtAxis: NaN은 대시 반환", () => {
  assert.equal(fmtAxis(Number.NaN), "-");
});

test("fmtAxis: 1억 미만은 만 단위", () => {
  assert.equal(fmtAxis(50000000), "5,000만");
  assert.equal(fmtAxis(99999999), "1억"); // 반올림
  assert.equal(fmtAxis(5000), "5,000");
  assert.equal(fmtAxis(10000), "1만");
});

test("fmtAxis: 1억 이상은 억 단위 (소수 첫째자리)", () => {
  assert.equal(fmtAxis(100000000), "1억");
  assert.equal(fmtAxis(150000000), "1.5억");
  assert.equal(fmtAxis(123000000), "1.2억");
  assert.equal(fmtAxis(999000000), "10억");
});

test("fmtAxis: 음수", () => {
  assert.equal(fmtAxis(-50000000), "-5,000만");
  assert.equal(fmtAxis(-100000000), "-1억");
  assert.equal(fmtAxis(-150000000), "-1.5억");
  assert.equal(fmtAxis(-5000), "-5,000");
});

// ─── fmtManwon ───────────────────────────────────────────────────────────────

test("fmtManwon: NaN은 대시 반환", () => {
  assert.equal(fmtManwon(Number.NaN), "-");
});

test("fmtManwon: 0만원", () => {
  assert.equal(fmtManwon(0), "0만원");
});

test("fmtManwon: 양수 만원 단위", () => {
  assert.equal(fmtManwon(10000), "1만원");
  assert.equal(fmtManwon(1230000), "123만원");
  assert.equal(fmtManwon(15000), "2만원"); // 반올림
  assert.equal(fmtManwon(14999), "1만원"); // 반올림
});

test("fmtManwon: 음수", () => {
  assert.equal(fmtManwon(-10000), "-1만원");
  assert.equal(fmtManwon(-500000), "-50만원");
});

test("fmtManwon: withSign=true 양수는 + 부호", () => {
  assert.equal(fmtManwon(10000, true), "+1만원");
  assert.equal(fmtManwon(1230000, true), "+123만원");
});

test("fmtManwon: withSign=true 음수는 - 부호", () => {
  assert.equal(fmtManwon(-10000, true), "-1만원");
  assert.equal(fmtManwon(-500000, true), "-50만원");
});

test("fmtManwon: 0 미만 소액은 -0만원", () => {
  // -1원 → 반올림해도 0만원이지만 부호 유지
  assert.equal(fmtManwon(-1), "-0만원");
});

test("fmtManwon: 0 초과 소액 withSign은 +0만원", () => {
  assert.equal(fmtManwon(1, true), "+0만원");
});

test("fmtManwon: 0 withSign=true도 0만원 (0은 부호 없음)", () => {
  assert.equal(fmtManwon(0, true), "0만원");
  assert.equal(fmtManwon(0), "0만원");
});
