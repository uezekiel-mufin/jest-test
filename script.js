// Test function 1
const stringLength = (str) => {
  if (str.length < 1 || str.length > 10) {
    throw new Error('invalid string');
  }
  return str.length;
};

// Test function 2
const reverseString = (string) => {
  return string.split('').reverse().join('');
};

// Test function 3
class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add = () => {
    return this.a + this.b;
  };
  subtract = () => {
    return this.a - this.b;
  };
  divide = () => {
    return this.a / this.b;
  };
  multiply = () => {
    return this.a * this.b;
  };
}

// Test function 4
const capitalize = (string) => {
  if (typeof string !== 'string') {
    throw new Error('invalid input');
  }
  return `${string.charAt(0).toUpperCase()}${string
    .split('')
    .splice(1)
    .join('')}`;
};

const calculator = new Calculator(16, 4);

module.exports = { stringLength, reverseString, capitalize, calculator };
