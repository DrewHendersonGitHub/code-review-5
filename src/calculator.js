export class Calculator {
  constructor(age) {
    this.earthYears = age;
  }
  
  mercuryYears(earthYears) {
    return Math.floor(earthYears / 0.24);
  }
  
  venusYears(earthYears) {
    return Math.floor(earthYears / 0.62);
  }
  
  marsYears(earthYears) {
    return Math.floor(earthYears / 1.88);
  }
  
  jupiterYears(earthYears) {
    return Math.floor(earthYears / 11.86);
  }
  
  calculateLifeExpectancy(daysOfExercisePerWeek, isSmoker, heightInches, weightPounds) {
    this.lifeExpectancy = Math.floor(80 * (0.75 + daysOfExercisePerWeek / 14) + (25 - (703 * weightPounds / (heightInches * heightInches))) - (isSmoker * 10));
  }
}