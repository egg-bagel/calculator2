let display = document.querySelector("#display");
let numberButtons = document.querySelectorAll(".num");
let operatorButtons = document.querySelectorAll(".operator");
let equalsButton = document.querySelector("#equals");
let clearButton = document.querySelector("#clear");
let decimalButton = document.querySelector("#decimal");
let backspace = document.querySelector("#back");

let firstNumber;
let currentOperator;
let lastKeyOperator = false;
let lastKeyEquals = false;
let decimalUsed = false;
let result;

document.addEventListener("keydown", function(e) {
    //Here's what to do if the key pressed is a number
    if (isNaN(e.key) == false) {
        if ((display.innerText == "0") || (lastKeyOperator == true) || (lastKeyEquals == true)) {
            display.innerText = e.key;
            lastKeyOperator = false;
            lastKeyEquals = false;
        }
        else {
            display.innerText = display.innerText + e.key;
        }
    }
    //Here's what to do if the key pressed is an operator
    else if ((e.key == "+") || (e.key == "-") || (e.key == "*") || (e.key == "x") || (e.key == "/")) {
        if (firstNumber == undefined || currentOperator == undefined) {
            firstNumber = display.innerText;
            currentOperator = e.key;
            lastKeyOperator = true;
            decimalUsed = false;
        }
        else {
            result = operate(parseFloat(firstNumber), parseFloat(display.innerText), currentOperator);
            result = +result.toFixed(2);
            display.innerText = result;
            firstNumber = display.innerText;
            currentOperator = e.key;
            lastKeyOperator = true;
            decimalUsed = false;
        }
    }
    else if (e.key == ".") {
        if (decimalUsed == false) {
            if ((display.innerText == "0") || (lastKeyOperator == true) || (lastKeyEquals == true)) {
                display.innerText = e.key;
                lastKeyOperator = false;
                lastKeyEquals = false;
                decimalUsed = true;
            }
            else {
                display.innerText = display.innerText + e.key;
                decimalUsed = true;
            }
        }
    }
    else if ((e.key == "=") || (e.key == "Enter")) {
        if (firstNumber && currentOperator && lastKeyEquals == false) {
            result = operate(parseFloat(firstNumber), parseFloat(display.innerText), currentOperator);
            result = +result.toFixed(2);
            display.innerText = result;
            currentOperator = undefined;
            lastKeyEquals = true;
            decimalUsed = false;
        }
    }
    else if (e.key = "Backspace") {
        display.innerText = display.innerText.substring(0, (display.innerText.length - 1));
    }
    else if ((e.key == "c") || (e.key == "C")) {
        clear();
    }
});


for (numberButton of numberButtons) {
    numberButton.addEventListener("click", function(e) {
        if ((display.innerText == "0") || (lastKeyOperator == true) || (lastKeyEquals == true)) {
            display.innerText = e.target.innerText;
            lastKeyOperator = false;
            lastKeyEquals = false;
        }
        else {
            display.innerText = display.innerText + e.target.innerText;
        }
    });
}

for (operatorButton of operatorButtons) {
    operatorButton.addEventListener("click", function(e) {
        if (firstNumber == undefined || currentOperator == undefined) {
            firstNumber = display.innerText;
            currentOperator = e.target.innerText;
            lastKeyOperator = true;
            decimalUsed = false;
        }
        else {
            result = operate(parseFloat(firstNumber), parseFloat(display.innerText), currentOperator);
            result = +result.toFixed(2);
            display.innerText = result;
            firstNumber = display.innerText;
            currentOperator = e.target.innerText;
            lastKeyOperator = true;
            decimalUsed = false;
        }
    });
}

decimalButton.addEventListener("click", function(e) {
    if (decimalUsed == false) {
        if ((display.innerText == "0") || (lastKeyOperator == true) || (lastKeyEquals == true)) {
            display.innerText = e.target.innerText;
            lastKeyOperator = false;
            lastKeyEquals = false;
            decimalUsed = true;
        }
        else {
            display.innerText = display.innerText + e.target.innerText;
            decimalUsed = true;
        }
    }
});

equalsButton.addEventListener("click", function() {
    if (firstNumber && currentOperator && lastKeyEquals == false) {
        result = operate(parseFloat(firstNumber), parseFloat(display.innerText), currentOperator);
        result = +result.toFixed(2);
        display.innerText = result;
        currentOperator = undefined;
        lastKeyEquals = true;
        decimalUsed = false;
    }
});

backspace.addEventListener("click", function() {
    display.innerText = display.innerText.substring(0, (display.innerText.length - 1));
});

clearButton.addEventListener("click", clear);

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, operator) {
    let result;

    if (operator == "+") {
        result = add(x, y);
    }
    else if (operator == "-") {
        result = subtract(x, y);
    }
    else if (operator == "x") {
        result = multiply(x, y);
    }
    else if (operator == "*") {
        result = multiply(x, y);
    }
    else if (operator == "÷") {
        result = divide(x, y);
    }
    else if (operator == "/") {
        result = divide(x, y);
    }

    return result;
}

function clear() {
    display.innerText = 0;
    firstNumber = undefined;
    currentOperator = undefined;
    lastKeyOperator = false;
    lastKeyEquals = false;
    decimalUsed = false;
}