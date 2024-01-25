const addButton = document.querySelector('input[value="+"]');
const substractButton = document.querySelector('input[value="-"]');
const multiplyButton = document.querySelector('input[value="*"]');
const divideButton = document.querySelector('input[value="/"]');
const clearButton = document.querySelector('input[value="C"]');
const historyParagraph = document.querySelector(".history");
const clearAllButton = document.querySelector(".clear-all");

const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const resultInput = document.querySelector(".result");

addButton.addEventListener("click", add);
substractButton.addEventListener("click", substract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
clearButton.addEventListener("click", clearAll);
clearAllButton.addEventListener("click", clearAllHistory);

function add() {
  performOperation("+");
}

function substract() {
  performOperation("-");
}

function multiply() {
  performOperation("*");
}

function divide() {
  performOperation("/");
}

function performOperation(operator) {
  const num1 = parseFloat(number1Input.value);
  const num2 = parseFloat(number2Input.value);

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "You can't'!";
      break;
    default:
      result = "Invalid operator";
  }

  resultInput.value = result;

  historyParagraph.innerHTML += `${num1} ${operator} ${num2} = ${result}<br>`;
}

function clearAll() {
  number1Input.value = "";
  number2Input.value = "";
  resultInput.value = "";
}

function clearAllHistory() {
  number1Input.value = "";
  number2Input.value = "";
  resultInput.value = "";
  historyParagraph.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");

  container.classList.add("visible");
});
