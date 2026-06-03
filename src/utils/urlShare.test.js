import test from "node:test";
import assert from "node:assert/strict";
import {
  encodeStateToParams,
  decodeParamsToState,
} from "./urlShare.js";

// ─── encodeStateToParams ─────────────────────────────────────────────────────

test("encodeStateToParams: 기본값", () => {
  const params = encodeStateToParams(10000000, 7, [], null);
  assert.equal(params.get("b"), "10000000");
  assert.equal(params.get("r"), "7");
  assert.equal(params.get("p"), null);
  assert.equal(params.get("f"), null);
});

test("encodeStateToParams: base가 null/undefined면 생략", () => {
  const params = encodeStateToParams(null, 7, [], null);
  assert.equal(params.get("b"), null);
});

test("encodeStateToParams: rate가 null/undefined면 생략", () => {
  const params = encodeStateToParams(10000000, null, [], null);
  assert.equal(params.get("r"), null);
});

test("encodeStateToParams: fireYear 포함", () => {
  const params = encodeStateToParams(10000000, 7, [], 15);
  assert.equal(params.get("f"), "15");
});

test("encodeStateToParams: fireYear 음수면 생략", () => {
  const params = encodeStateToParams(10000000, 7, [], -1);
  assert.equal(params.get("f"), null);
});

test("encodeStateToParams: periods 인코딩", () => {
  const periods = [{ start: 0, end: 10, amount: 100 }];
  const params = encodeStateToParams(10000000, 7, periods, null);
  assert.equal(params.get("p"), "0:10:100");
});

test("encodeStateToParams: 여러 periods 인코딩", () => {
  const periods = [
    { start: 0, end: 5, amount: 100 },
    { start: 6, end: 10, amount: 200 },
  ];
  const params = encodeStateToParams(10000000, 7, periods, null);
  assert.equal(params.get("p"), "0:5:100,6:10:200");
});

test("encodeStateToParams: 빈 periods 배열은 p 생략", () => {
  const params = encodeStateToParams(10000000, 7, [], null);
  assert.equal(params.get("p"), null);
});

test("encodeStateToParams: periods에 null 요소 필터링", () => {
  const params = encodeStateToParams(10000000, 7, [null, { start: 1, end: 2, amount: 50 }], null);
  assert.equal(params.get("p"), "1:2:50");
});

// ─── decodeParamsToState ─────────────────────────────────────────────────────

test("decodeParamsToState: 빈 파라미터는 기본값 반환", () => {
  const result = decodeParamsToState(new URLSearchParams(""));
  assert.equal(result.base, 30000000);
  assert.equal(result.rate, 7);
  assert.deepEqual(result.periods, [{ start: 0, end: 20, amount: 1200 }]);
  assert.equal(result.fireYear, null);
});

test("decodeParamsToState: 정상 파라미터 디코딩", () => {
  const result = decodeParamsToState(
    new URLSearchParams("b=50000000&r=5&p=0:10:100&f=15"),
  );
  assert.equal(result.base, 50000000);
  assert.equal(result.rate, 5);
  assert.equal(result.periods.length, 1);
  assert.equal(result.periods[0].start, 0);
  assert.equal(result.periods[0].end, 10);
  assert.equal(result.periods[0].amount, 100);
  assert.equal(result.fireYear, 15);
});

test("decodeParamsToState: 잘못된 base는 기본값 유지", () => {
  const result = decodeParamsToState(new URLSearchParams("b=abc"));
  assert.equal(result.base, 30000000);
});

test("decodeParamsToState: 음수 rate는 기본값 유지", () => {
  const result = decodeParamsToState(new URLSearchParams("r=-5"));
  assert.equal(result.rate, 7);
});

test("decodeParamsToState: 잘못된 fireYear는 null 유지", () => {
  const result = decodeParamsToState(new URLSearchParams("f=abc"));
  assert.equal(result.fireYear, null);
});

test("decodeParamsToState: periods 부분 파싱 실패 시 기본값 유지", () => {
  const result = decodeParamsToState(new URLSearchParams("p=abc:10:100"));
  // start가 NaN → null 반환 → 필터링 → 빈 배열 → 기본 periods 유지
  assert.deepEqual(result.periods, [{ start: 0, end: 20, amount: 1200 }]);
});

test("decodeParamsToState: periods amount가 NaN이면 0 처리", () => {
  const result = decodeParamsToState(new URLSearchParams("p=0:10:abc"));
  assert.equal(result.periods.length, 1);
  assert.equal(result.periods[0].amount, 0);
});

test("decodeParamsToState: 여러 periods 디코딩", () => {
  const result = decodeParamsToState(
    new URLSearchParams("p=0:5:100,6:10:200"),
  );
  assert.equal(result.periods.length, 2);
  assert.equal(result.periods[0].start, 0);
  assert.equal(result.periods[0].end, 5);
  assert.equal(result.periods[0].amount, 100);
  assert.equal(result.periods[1].start, 6);
  assert.equal(result.periods[1].end, 10);
  assert.equal(result.periods[1].amount, 200);
});

// ─── encode → decode roundtrip ───────────────────────────────────────────────

test("encode → decode roundtrip: 모든 필드 정상 보존", () => {
  const input = {
    base: 50000000,
    rate: 5,
    periods: [
      { start: 0, end: 10, amount: 100 },
      { start: 15, end: 30, amount: -50 },
    ],
    fireYear: 15,
  };
  const params = encodeStateToParams(
    input.base,
    input.rate,
    input.periods,
    input.fireYear,
  );
  const result = decodeParamsToState(params);

  assert.equal(result.base, input.base);
  assert.equal(result.rate, input.rate);
  assert.equal(result.periods.length, input.periods.length);
  assert.equal(result.periods[0].start, input.periods[0].start);
  assert.equal(result.periods[0].end, input.periods[0].end);
  assert.equal(result.periods[0].amount, input.periods[0].amount);
  assert.equal(result.periods[1].start, input.periods[1].start);
  assert.equal(result.periods[1].end, input.periods[1].end);
  assert.equal(result.periods[1].amount, input.periods[1].amount);
  assert.equal(result.fireYear, input.fireYear);
});

test("encode → decode roundtrip: fireYear 없음", () => {
  const input = {
    base: 30000000,
    rate: 7,
    periods: [],
    fireYear: null,
  };
  const params = encodeStateToParams(
    input.base,
    input.rate,
    input.periods,
    input.fireYear,
  );
  const result = decodeParamsToState(params);

  assert.equal(result.base, 30000000);
  assert.equal(result.rate, 7);
  // periods가 빈 배열이므로 p 파라미터 없음 → 기본 periods 복원
  assert.deepEqual(result.periods, [{ start: 0, end: 20, amount: 1200 }]);
  assert.equal(result.fireYear, null);
});

test("encode → decode roundtrip: periods 없이 fireYear만", () => {
  const params = encodeStateToParams(100000000, 3, [], 10);
  const result = decodeParamsToState(params);

  assert.equal(result.base, 100000000);
  assert.equal(result.rate, 3);
  // 빈 periods → p 파라미터 없음 → 기본 periods
  assert.deepEqual(result.periods, [{ start: 0, end: 20, amount: 1200 }]);
  assert.equal(result.fireYear, 10);
});
