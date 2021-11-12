export class Calculator {
  constructor(age) {
    this.earthYears = age;
    this.mercuryYears = this.earthYears * 0.24;
  }
}