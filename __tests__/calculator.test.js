import {Calculator} from './../src/calculator.js';

describe('Calculator', () => {
  
  test('should take an age and store it in the class', () => {
    let newCalculator = new Calculator(33);
    expect(newCalculator.earthYears).toEqual(33);
  });
  
  test('should return the age converted to Mercury years', () => {
    let newCalculator = new Calculator(33);
    expect(newCalculator.mercuryYears).toEqual(137);
  });
  
  test('should return the age converted to Venus years', () => {
    let newCalculator = new Calculator(33);
    expect(newCalculator.venusYears).toEqual(53);
  });
  
  test('should return the age converted to Mars years', () => {
    let newCalculator = new Calculator(33);
    expect(newCalculator.marsYears).toEqual(17);
  });
  
  test('should return the age converted to Mars years', () => {
    let newCalculator = new Calculator(33);
    expect(newCalculator.jupiterYears).toEqual(2);
  });
  
  test('should calculate a life expectancy', () => {
    let newCalculator = new Calculator(33);
    expect(newCalculator.lifeExpectancy).toEqual(80);
  });
});