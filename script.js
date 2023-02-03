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
    else if (operator == "*") {
        result = multiply(x, y);
    }
    else if (operator == "/") {
        result = divide(x, y);
    }

    return result;
}