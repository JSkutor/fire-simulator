import { YEARS } from "./calc.js";

const INCOMPLETE_NUMBER_INPUTS = new Set(["", "-", ".", "-."]);

export function parseNumberInput(value) {
  if (INCOMPLETE_NUMBER_INPUTS.has(value)) return value;

  const number = Number(value);
  return Number.isFinite(number) ? number : "";
}

export function normalizePeriod(period, editedField) {
  const start = clampYear(period?.start);
  const end = clampYear(period?.end);
  const amount = normalizeAmount(period?.amount);

  if (start <= end) return { start, end, amount };

  if (editedField === "start") return { start, end: start, amount };
  if (editedField === "end") return { start: end, end, amount };

  return { start: end, end: start, amount };
}

export function hasInvalidYearRange(period) {
  if (!isCompleteNumber(period?.start) || !isCompleteNumber(period?.end)) {
    return false;
  }

  return Number(period.start) > Number(period.end);
}

function clampYear(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0;

  return Math.min(YEARS, Math.max(0, Math.trunc(number)));
}

function normalizeAmount(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function isCompleteNumber(value) {
  return (
    !INCOMPLETE_NUMBER_INPUTS.has(String(value)) && Number.isFinite(Number(value))
  );
}
