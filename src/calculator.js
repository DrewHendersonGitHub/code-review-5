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
  
  yearsRemaining(planet) {
    if (planet === 0) {
      return this.lifeExpectancy - this.earthYears;
    }
    else if (planet === 1) {
      return this.mercuryYears(this.lifeExpectancy - this.earthYears);
    }
    else if (planet === 2) {
      return this.venusYears(this.lifeExpectancy - this.earthYears);
    }
    else if (planet === 3) {
      return this.marsYears(this.lifeExpectancy - this.earthYears);
    }
    else {
      return this.jupiterYears(this.lifeExpectancy - this.earthYears);
    }
  }
}