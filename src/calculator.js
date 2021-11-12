export class Calculator {
  constructor(age) {
    this.earthYears = age;
    this.mercuryYears = Math.floor(this.earthYears / 0.24);
    this.venusYears = Math.floor(this.earthYears / 0.62);
    this.marsYears = Math.floor(this.earthYears / 1.88);
    this.jupiterYears = Math.floor(this.earthYears / 11.86);
  }
  
  calculateLifeExpectancy(daysOfExercisePerWeek, isSmoker, heightInches, weightPounds) {
    this.lifeExpectancy = Math.floor(80 * (0.75 + daysOfExercisePerWeek / 14) + (25 - (703 * weightPounds / (heightInches * heightInches))) - (isSmoker * 10));
  }
}