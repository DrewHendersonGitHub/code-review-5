export class Calculator {
  constructor(age) {
    this.earthYears = age;
    this.mercuryYears = this.earthYears * 0.24;
    this.venusYears = this.earthYears * 0.62;
    this.marsYears = this.earthYears * 1.88;
  }
}