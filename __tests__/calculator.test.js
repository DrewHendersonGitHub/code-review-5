import {Calculator} from './../src/calculator.js';

describe('Calculator', () => {
  
  test('should take an age and store it in the class', () => {
    let newCalculator = new Calculator(33);
    expect(newCalculator.earthYears).toEqual(33);
  });
  
  test('should return the age converted to Mercury years', () => {
    let newCalculator = new Calculator(33);
    expect(newCalculator.mercuryYears(newCalculator.earthYears)).toEqual(137);
  });
  
  test('should return the age converted to Venus years', () => {
    let newCalculator = new Calculator(33);
    expect(newCalculator.venusYears(newCalculator.earthYears)).toEqual(53);
  });
  
  test('should return the age converted to Mars years', () => {
    let newCalculator = new Calculator(33);
    expect(newCalculator.marsYears(newCalculator.earthYears)).toEqual(17);
  });
  
  test('should return the age converted to Jupiter years', () => {
    let newCalculator = new Calculator(33);
    expect(newCalculator.jupiterYears(newCalculator.earthYears)).toEqual(2);
  });
  
  test('should calculate a life expectancy', () => {
    let newCalculator = new Calculator(33);
    newCalculator.calculateLifeExpectancy(3, 0, 72, 150);
    expect(newCalculator.lifeExpectancy).toEqual(81);
  });
  
  test('should return how many years left on a given planet', () => {
    let newCalculator = new Calculator(33);
    newCalculator.calculateLifeExpectancy(3, 0, 72, 150);
    expect(newCalculator.yearsRemaining(0)).toEqual(48);
    expect(newCalculator.yearsRemaining(1)).toEqual(200);
    expect(newCalculator.yearsRemaining(2)).toEqual(77);
    expect(newCalculator.yearsRemaining(3)).toEqual(25);
    expect(newCalculator.yearsRemaining(4)).toEqual(4);
  });
  
  test('should return how many years have passed if older than life expectancy', () => {
    let newCalculator = new Calculator(133);
    newCalculator.calculateLifeExpectancy(3, 0, 72, 150);
    expect(newCalculator.yearsRemaining(0)).toEqual(52);
    expect(newCalculator.yearsRemaining(1)).toEqual(217);
    expect(newCalculator.yearsRemaining(2)).toEqual(84);
    expect(newCalculator.yearsRemaining(3)).toEqual(28);
    expect(newCalculator.yearsRemaining(4)).toEqual(5);
  });
});