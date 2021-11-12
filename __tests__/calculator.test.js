import {Calculator} from './../src/calculator.js';

describe('Calculator', () => {
  
  test('should take an age and store it in the class', () => {
    let newCalculator = new Calculator(33);
    expect(newCalculator.earthYears).toEqual(33);
  });
  
  test('should return the age converted to Mercury years', () => {
    let newCalculator = new Calculator(33);
    expect(newCalculator.mercuryYears).toEqual(7.92);
  });
});