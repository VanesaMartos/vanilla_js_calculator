const Calculator = require('../Calculator')

const testCalculator = new Calculator()

test('add function should return the sum of params', () => {
  expect(testCalculator.add(1, 1)).toBe(2);
})

test('add negative, numbers should be a negative number', () => {
  expect(testCalculator.add(-1, -1)).toBe(-2);
})

test('substract function should return the diference between two numbers', () => {
  expect(testCalculator.substract(5, 1)).toBe(4);
})

test('zero divided by any number is 0', () => {
  expect(testCalculator.divide(0, 5)).toBe(0);
})

test('zero divided by zero is undefined', () => {
  expect(testCalculator.divide(0, 0)).toBe("undefined");
})

test('multiply function should return the multiplication of params', () => {
  expect(testCalculator.multiply(5, 5)).toBe(25);
})

test('zero multiplied by any number should be 0', () => {
  expect(testCalculator.multiply(4, 0)).toBe(0);
})
