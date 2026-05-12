/**
 * calculator.test.js
 *
 * Comprehensive unit tests for calculator.js.
 * Covers all seven supported operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (×)
 *   - Division (÷)
 *   - Modulo (%)
 *   - Exponentiation (^)
 *   - Square Root (√)
 *
 * Includes base cases drawn from calc-basic-operations.png:
 *   2 + 3, 10 - 4, 45 * 2, 20 / 5
 * and extended edge cases for each operation.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// ---------------------------------------------------------------------------
// Addition
// ---------------------------------------------------------------------------
describe('add', () => {
  // Base case from image: 2 + 3 = 5
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));

  test('adds positive numbers', () => expect(add(10, 20)).toBe(30));
  test('adds negative numbers', () => expect(add(-4, -6)).toBe(-10));
  test('adds a positive and a negative number', () => expect(add(10, -3)).toBe(7));
  test('adding zero returns the same number', () => expect(add(7, 0)).toBe(7));
  test('adds floating-point numbers', () => expect(add(0.1, 0.2)).toBeCloseTo(0.3));
});

// ---------------------------------------------------------------------------
// Subtraction
// ---------------------------------------------------------------------------
describe('subtract', () => {
  // Base case from image: 10 - 4 = 6
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));

  test('subtracts positive numbers', () => expect(subtract(20, 8)).toBe(12));
  test('subtracts a larger number from a smaller (negative result)', () => expect(subtract(3, 10)).toBe(-7));
  test('subtracts negative numbers', () => expect(subtract(-5, -3)).toBe(-2));
  test('subtracting zero returns the same number', () => expect(subtract(9, 0)).toBe(9));
  test('subtracts floating-point numbers', () => expect(subtract(5.5, 2.2)).toBeCloseTo(3.3));
});

// ---------------------------------------------------------------------------
// Multiplication
// ---------------------------------------------------------------------------
describe('multiply', () => {
  // Base case from image: 45 * 2 = 90
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));

  test('multiplies positive numbers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies negative numbers', () => expect(multiply(-3, -4)).toBe(12));
  test('multiplies a positive and a negative number', () => expect(multiply(5, -3)).toBe(-15));
  test('multiplying by zero returns zero', () => expect(multiply(100, 0)).toBe(0));
  test('multiplying by one returns the same number', () => expect(multiply(8, 1)).toBe(8));
  test('multiplies floating-point numbers', () => expect(multiply(2.5, 4)).toBeCloseTo(10));
});

// ---------------------------------------------------------------------------
// Division
// ---------------------------------------------------------------------------
describe('divide', () => {
  // Base case from image: 20 / 5 = 4
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));

  test('divides positive numbers', () => expect(divide(10, 2)).toBe(5));
  test('divides negative numbers', () => expect(divide(-12, -4)).toBe(3));
  test('divides a positive by a negative number', () => expect(divide(9, -3)).toBe(-3));
  test('divides resulting in a float', () => expect(divide(7, 2)).toBeCloseTo(3.5));
  test('dividing zero by a number returns zero', () => expect(divide(0, 5)).toBe(0));

  // Edge case: division by zero must throw
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });
  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero');
  });
});

// ---------------------------------------------------------------------------
// Modulo
// ---------------------------------------------------------------------------
describe('modulo', () => {
  test('returns remainder for positive numbers', () => expect(modulo(10, 3)).toBe(1));
  test('returns zero when divisible', () => expect(modulo(12, 4)).toBe(0));
  test('throws an error when modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero');
  });
});

// ---------------------------------------------------------------------------
// Exponentiation
// ---------------------------------------------------------------------------
describe('power', () => {
  test('calculates positive integer exponents', () => expect(power(2, 3)).toBe(8));
  test('handles zero exponent', () => expect(power(5, 0)).toBe(1));
  test('handles negative exponents', () => expect(power(2, -2)).toBeCloseTo(0.25));
});

// ---------------------------------------------------------------------------
// Square Root
// ---------------------------------------------------------------------------
describe('squareRoot', () => {
  test('returns the square root of a perfect square', () => expect(squareRoot(16)).toBe(4));
  test('returns the square root of zero', () => expect(squareRoot(0)).toBe(0));
  test('throws an error for negative numbers', () => {
    expect(() => squareRoot(-1)).toThrow('Square root of negative number');
  });
});
