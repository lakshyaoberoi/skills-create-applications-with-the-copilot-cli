/**
 * calculator.js
 *
 * Supported operations:
 *   - Addition (+)       : add(a, b)
 *   - Subtraction (-)    : subtract(a, b)
 *   - Multiplication (×) : multiply(a, b)
 *   - Division (÷)       : divide(a, b)  — throws on division by zero
 *   - Modulo (%)         : modulo(a, b)  — throws on modulo by zero
 *   - Exponentiation (^) : power(base, exponent)
 *   - Square Root (√)    : squareRoot(n) — throws on negative numbers
 */

// Returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Returns the difference of a minus b
function subtract(a, b) {
  return a - b;
}

// Returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Returns the quotient of a divided by b; throws an error if b is zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// Returns the remainder of a divided by b; throws an error if b is zero
function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

// Returns base raised to exponent
function power(base, exponent) {
  return base ** exponent;
}

// Returns the square root of n; throws an error if n is negative
function squareRoot(n) {
  if (n < 0) throw new Error('Square root of negative number');
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
