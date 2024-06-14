// add.test.js
const { add } = require("../main.js");

test("should add two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("should add multiple numbers correctly", () => {
  expect(add(2, 3, 4, 5)).toBe(14);
});

test("should handle single argument correctly", () => {
  expect(add(2)).toBe(2);
});

test("should handle negative numbers correctly", () => {
  expect(add(-2, -3)).toBe(-5);
});

test("should handle mix of positive and negative numbers correctly", () => {
  expect(add(2, -3, 4, -5)).toBe(-2);
});
