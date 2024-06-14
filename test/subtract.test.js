// subtract.test.js
const { subtract } = require("../main.js");

test("should subtract two numbers correctly", () => {
  expect(subtract(10, 3)).toBe(7);
});

test("should subtract multiple numbers correctly", () => {
  expect(subtract(20, 3, 4, 5)).toBe(8);
});

test("should handle single argument correctly", () => {
  expect(subtract(5)).toBe(5);
});

test("should handle negative numbers correctly", () => {
  expect(subtract(-10, -3)).toBe(-7);
});

test("should handle mix of positive and negative numbers correctly", () => {
  expect(subtract(10, -3, 4, -5)).toBe(14);
});
