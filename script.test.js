const {
  stringLength,
  reverseString,
  capitalize,
  calculator,
} = require('./script');

test('Length of string', () => {
  expect(stringLength('testing')).toBe(7);
});

test('Invalid String', () => {
  expect(stringLength('dfghj')).toBe(5);
});

test('Invalid String', () => {
  expect(reverseString('tester')).toBe('retset');
});

describe('Calculator', () => {
  test(`Sum of two numbers is ${20}`, () => {
    expect(calculator.add()).toBe(20);
  });

  test(`Difference of two numbers ${12}`, () => {
    expect(calculator.subtract()).toBe(12);
  });
  test(`Division of two numbers ${4}`, () => {
    expect(calculator.divide()).toBe(4);
  });
  test(`Multiplication of two numbers ${64}`, () => {
    expect(calculator.multiply()).toBe(64);
  });
});

test('capitalize string', () => {
  expect(capitalize('testing-string')).toBe('Testing-string');
});

// test('capitalize string', () => {
//   expect(capitalize('3456789')).toBe('9876543');
// });
