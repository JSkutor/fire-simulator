import test from "node:test";
import assert from "node:assert/strict";
import {
  calcWealth,
  INFLATION,
  WITHDRAW_RATE,
  YEARS,
} from "./calc.js";

const KRW_100M = 100000000;
const DEFAULT_BASE = 10000000;

function assertClose(actual, expected, message) {
  const tolerance = Math.max(1, Math.abs(expected) * 1e-10);
  assert.ok(
    Math.abs(actual - expected) <= tolerance,
    `${message}: expected ${expected}, got ${actual}`,
  );
}

test("returns one annual snapshot from year 0 through YEARS", () => {
  const data = calcWealth(KRW_100M, 5, [], null);

  assert.equal(data.length, YEARS + 1);
  assert.equal(data[0].year, 0);
  assert.equal(data[YEARS].year, YEARS);
});

test("compounds nominal assets and deflates real assets at the same snapshot year", () => {
  const data = calcWealth(KRW_100M, 5, [], null);

  assert.equal(data[0].nominal, KRW_100M);
  assert.equal(data[0].real, KRW_100M);
  assertClose(data[2].nominal, KRW_100M * 1.05 ** 2, "year 2 nominal");
  assertClose(
    data[2].real,
    (KRW_100M * 1.05 ** 2) / (1 + INFLATION) ** 2,
    "year 2 real",
  );
});

test("applies period flow in current-value manwon and inflation-adjusts it by year", () => {
  const data = calcWealth(
    KRW_100M,
    0,
    [{ start: 1, end: 2, amount: 1200 }],
    null,
  );

  assert.equal(data[0].flow, 0);
  assertClose(data[1].flow, 1200 * 10000 * (1 + INFLATION), "year 1 flow");
  assertClose(
    data[2].flow,
    1200 * 10000 * (1 + INFLATION) ** 2,
    "year 2 flow",
  );
  assert.equal(data[3].flow, 0);
});

test("deducts a four-percent withdrawal from the selected FIRE year onward", () => {
  const data = calcWealth(KRW_100M, 0, [], 1);

  assert.equal(data[0].withdrawal, 0);
  assert.equal(data[1].withdrawal, KRW_100M * WITHDRAW_RATE);
  assert.equal(data[2].nominal, KRW_100M * (1 - WITHDRAW_RATE));
  assert.equal(
    data[2].withdrawal,
    KRW_100M * (1 - WITHDRAW_RATE) * WITHDRAW_RATE,
  );
});

test("floors depleted assets at zero", () => {
  const data = calcWealth(
    KRW_100M,
    0,
    [{ start: 0, end: 0, amount: -20000 }],
    null,
  );

  assert.equal(data[1].nominal, 0);
});

test("uses the default base asset when the input is empty", () => {
  const data = calcWealth(0, 0, [], null);

  assert.equal(data[0].nominal, DEFAULT_BASE);
});

test("returns an empty result for invalid base or rate", () => {
  assert.deepEqual(calcWealth(Number.NaN, 5, [], null), []);
  assert.deepEqual(calcWealth(KRW_100M, Number.NaN, [], null), []);
});
