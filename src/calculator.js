export class Calculator {
  constructor(age) {
    this.earthYears = age;
    this.mercuryYears = Math.floor(this.earthYears / 0.24);
    this.venusYears = Math.floor(this.earthYears / 0.62);
    this.marsYears = Math.floor(this.earthYears / 1.88);
    this.jupiterYears = Math.floor(this.earthYears / 11.86);
  }
}