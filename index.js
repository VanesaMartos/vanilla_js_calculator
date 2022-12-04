const displayPrevious = document.getElementById("previous");
const displayActual = document.getElementById("actual");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const display = new Display(displayPrevious, displayActual);

numberButtons.forEach(button => {
  button.addEventListener("click", () => display.addNumber(button.innerHTML));
});

operatorButtons.forEach(button => {
  button.addEventListener("click", () => display.compute(button.value))
})