import Calculator from './../src/calculator.js';

describe('Calculator', () => {
  
  test('should take an age and store it in the class', () => {
    let newCalculator = new Calculator(33);
    expect(newCalculator.earthYears).toEqual(33);
  });
});