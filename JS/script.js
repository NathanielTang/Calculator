//Operator functions

const add = (a,b) => a + b;

const subtract = (a,b) => a-b;

const multiply = (a,b) => a*b;

const divide = (a,b) => a/b;

const exponent = (a,b) => a**b;

//Operator

function operate(a,b,operator) {
    a = Number(a)
    b = Number(b)
    let result;

    switch (operator) {
        case "+":
            result = add(a,b);
            break;
        case "-":
            result = subtract(a,b);
            break;
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;
        case "^":
            result = exponent(a,b);
            break;
    }
    return result;
}