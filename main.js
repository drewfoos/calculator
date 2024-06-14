document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".displayNumber");
  const buttons = document.querySelectorAll(".number, .symbol");
  const clearButton = document.querySelector(".clear");

  let firstOperand = "";
  let secondOperand = "";
  let currentOperator = null;
  let shouldResetDisplay = false;

  const updateDisplay = (value) => {
    display.textContent = value;
  };

  const appendNumber = (value) => {
    if (value === "." && display.textContent.includes(".")) return;
    if (
      display.textContent === "0" ||
      shouldResetDisplay ||
      display.textContent === "NaN"
    ) {
      display.textContent = value;
      shouldResetDisplay = false;
    } else {
      display.textContent += value;
    }
  };

  const handleOperator = (operator) => {
    if (currentOperator !== null) {
      firstOperand = operate(firstOperand, currentOperator, secondOperand);
      updateDisplay(firstOperand);
    } else {
      firstOperand = display.textContent;
    }
    currentOperator = operator;
    secondOperand = "";
    shouldResetDisplay = true;
  };

  const handleEqual = () => {
    if (currentOperator !== null) {
      secondOperand = display.textContent;
      firstOperand = operate(firstOperand, currentOperator, secondOperand);
      updateDisplay(firstOperand);
      currentOperator = null;
    }
  };

  const handleClear = () => {
    display.textContent = "0";
    firstOperand = "";
    secondOperand = "";
    currentOperator = null;
    shouldResetDisplay = false;
  };

  const handleButtonClick = (value) => {
    if (["+", "-", "x", "/"].includes(value)) {
      handleOperator(value);
    } else if (value === "=") {
      handleEqual();
    } else if (value === "Clear") {
      handleClear();
    } else {
      appendNumber(value);
      if (currentOperator !== null) {
        secondOperand = display.textContent;
      }
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;
      handleButtonClick(value);
    });
  });

  clearButton.addEventListener("click", handleClear);

  document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (!isNaN(key) || key === ".") {
      handleButtonClick(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      const operator = key === "*" ? "x" : key;
      handleButtonClick(operator);
    } else if (key === "Enter" || key === "=") {
      handleEqual();
    } else if (key.toLowerCase() === "c") {
      handleClear();
    }
  });

  function operate(firstNumber, operator, secondNumber) {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let result;

    switch (operator) {
      case "+":
        result = add(num1, num2);
        break;
      case "-":
        result = subtract(num1, num2);
        break;
      case "x":
        result = multiply(num1, num2);
        break;
      case "/":
        if (num2 === 0) {
          return "NaN";
        }
        result = divide(num1, num2);
        break;
      default:
        return secondNumber;
    }

    return parseFloat(result.toFixed(10)); // Round to 10 decimal places to handle floating-point errors
  }
});

const add = (firstNumber, ...args) => {
  if (args.length === 0) {
    return firstNumber;
  }
  return args.reduce((total, number) => total + number, firstNumber);
};
const subtract = (firstNumber, ...args) => {
  if (args.length === 0) {
    return firstNumber;
  }
  return args.reduce((total, number) => total - number, firstNumber);
};
const multiply = (firstNumber, ...args) => {
  if (args.length === 0) {
    return firstNumber;
  }
  return args.reduce((product, number) => product * number, firstNumber);
};

const divide = (firstNumber, ...args) => {
  if (args.length === 0) {
    return firstNumber;
  }
  return args.reduce((product, number) => {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    return product / number;
  }, firstNumber);
};

module.exports = { add, subtract, multiply, divide };
