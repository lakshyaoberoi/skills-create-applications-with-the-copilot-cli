/**
 * calculator.js
 *
 * Supported operations:
 *   - Addition (+)       : add(a, b)
 *   - Subtraction (-)    : subtract(a, b)
 *   - Multiplication (×) : multiply(a, b)
 *   - Division (÷)       : divide(a, b)  — throws on division by zero
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

module.exports = { add, subtract, multiply, divide };
