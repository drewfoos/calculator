// divide.test.js
const { divide } = require("../main.js");

test("should divide two numbers correctly", () => {
  expect(divide(6, 3)).toBe(2);
});

test("should divide multiple numbers correctly", () => {
  expect(divide(24, 2, 3)).toBe(4);
});

test("should handle single argument correctly", () => {
  expect(divide(5)).toBe(5);
});

test("should handle negative numbers correctly", () => {
  expect(divide(-6, 3)).toBe(-2);
});

test("should handle mix of positive and negative numbers correctly", () => {
  expect(divide(24, -2, 3)).toBe(-4);
});

test("should handle division by zero correctly", () => {
  expect(() => divide(10, 0)).toThrow();
});

test("should handle all zeros correctly", () => {
  expect(() => divide(0, 0, 0)).toThrow();
});
