const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".operand");
const decimal = document.querySelector(".decimal");
const operators = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equals");

let firstNumber = "";
let secNumber = "";
let operatorSign = "";

const output = () => {
    display.textContent = firstNumber;
};

numbers.forEach(number => {
    number.addEventListener("click", () => {
        firstNumber += number.textContent;
        output();
    });
});

decimal.addEventListener("click", () => {
    
    if (!firstNumber.includes(".")) {
        firstNumber += ".";
        output();
    }
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        
        if (firstNumber === "") {
            return;
        }

        if (firstNumber !== "") {
            display.textContent += operator.textContent
            operate();
        }

        operatorSign = operator.textContent;
        secNumber = firstNumber;
        firstNumber = "";
    });
});

const operate = () => {
    let result;
    const prev = Number(secNumber);
    const current = Number(firstNumber);

    switch (operatorSign) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break
        case "/":
            if (current === 0) {
                
                display.textContent = "Cannot divide by zero!";
                return;
            } else {
                result = prev / current;
                break;
            }
        default:
            return;
    }

    firstNumber = +result.toFixed(2); 
    operatorSign = "";
    secNumber = "";
    output();
};

clearButton.addEventListener("click", () => {
    firstNumber = "";
    secNumber = "";
    operatorSign = "";
    output();
});

equalButton.addEventListener("click", operate);
