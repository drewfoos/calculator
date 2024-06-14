// multiply.test.js
const { multiply } = require("../main.js");

test("should multiply two numbers correctly", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("should multiply multiple numbers correctly", () => {
  expect(multiply(2, 3, 4)).toBe(24);
});

test("should handle single argument correctly", () => {
  expect(multiply(5)).toBe(5);
});

test("should handle negative numbers correctly", () => {
  expect(multiply(-2, 3)).toBe(-6);
});

test("should handle mix of positive and negative numbers correctly", () => {
  expect(multiply(2, -3, 4)).toBe(-24);
});

test("should handle zeros correctly", () => {
  expect(multiply(2, 0, 4)).toBe(0);
});

test("should handle all zeros correctly", () => {
  expect(multiply(0, 0, 0)).toBe(0);
});
