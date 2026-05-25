import test from "node:test";
import assert from "node:assert/strict";
import {
  hasInvalidYearRange,
  normalizePeriod,
  parseNumberInput,
} from "./periodValidation.js";

test("parseNumberInput keeps incomplete numeric drafts editable", () => {
  assert.equal(parseNumberInput(""), "");
  assert.equal(parseNumberInput("-"), "-");
  assert.equal(parseNumberInput("-."), "-.");
  assert.equal(parseNumberInput("12.5"), 12.5);
  assert.equal(parseNumberInput("abc"), "");
});

test("normalizePeriod clamps years to the simulator range", () => {
  assert.deepEqual(
    normalizePeriod({ start: -3, end: 99, amount: "-1200.5" }),
    {
      start: 0,
      end: 40,
      amount: -1200.5,
    },
  );
});

test("normalizePeriod resolves reversed ranges based on the edited field", () => {
  assert.deepEqual(
    normalizePeriod({ start: 10, end: 5, amount: 100 }, "start"),
    {
      start: 10,
      end: 10,
      amount: 100,
    },
  );
  assert.deepEqual(
    normalizePeriod({ start: 10, end: 5, amount: 100 }, "end"),
    {
      start: 5,
      end: 5,
      amount: 100,
    },
  );
});

test("normalizePeriod falls back to zero for invalid amounts", () => {
  assert.deepEqual(normalizePeriod({ start: 1, end: 2, amount: "-" }), {
    start: 1,
    end: 2,
    amount: 0,
  });
});

test("hasInvalidYearRange only flags complete reversed ranges", () => {
  assert.equal(hasInvalidYearRange({ start: 10, end: 5 }), true);
  assert.equal(hasInvalidYearRange({ start: "-", end: 5 }), false);
  assert.equal(hasInvalidYearRange({ start: 5, end: "" }), false);
});
