

class Display {
  constructor(displayPrevious, displayActual) {
    this.displayActual = displayActual;
    this.displayPrevious = displayPrevious;
    this.calculator = new Calculator();
    this.operatorType = undefined;
    this.actual = "";
    this.previous = "";
    this.symbol = {
      add: "+",
      substract: "-",
      multiply: "x",
      divide: "/",
    }
  }

  delete() {
    this.actual = this.actual.toString().slice(0, -1);
    this.printValue();
  }

  deleteAll() {
    this.actual = "";
    this.previous = "";
    this.operatorType = undefined;
    this.printValue();
  }

  compute(type) {
    this.operatorType !== "equal" && this.calculate();
    this.operatorType = type;
    this.previous = this.actual || this.previous;
    this.actual = "";
    this.printValue();
  }

  addNumber(number) {
    if (number === "." && this.actual.includes(".")) return
    this.actual = this.actual.toString() + number.toString();
    this.printValue();
  }

  printValue() {
    this.displayActual.textContent = this.actual;
    this.displayPrevious.textContent = `${this.previous} ${this.symbol[this.operatorType] || ""}`;
  }

  calculate() {
    const previous = parseFloat(this.previous);
    const actual = parseFloat(this.actual);

    if (isNaN(actual) || isNaN(previous) ) return
    this.actual = this.calculator[this.operatorType](previous, actual);
  }

}

module.exports = Display
