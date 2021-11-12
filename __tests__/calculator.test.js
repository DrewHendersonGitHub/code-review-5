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
  
  test('should return the age converted to Venus years', () => {
    let newCalculator = new Calculator(33);
    expect(newCalculator.mercuryYears).toEqual(20.46);
  });
  
  test('should return the age converted to Mars years', () => {
    let newCalculator = new Calculator(33);
    expect(newCalculator.mercuryYears).toEqual(62.04);
  });
});