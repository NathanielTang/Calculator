//Operator functions

const addition = (a,b) => a + b;

const subtraction = (a,b) => a-b;

const multiplication = (a,b) => a*b;

const division = (a,b) => a/b;

const power = (a,b) => a**b;

//Operator

//global variables

let a = "";
let b = "";
let operator = "";
let temp = "a"
let result;

function operate(a,b,operator) {
    a = parseFloat(a)
    b = parseFloat(b)
    

    switch (operator) {
        case "+":
            result = addition(a,b);
            break;
        case "-":
            result = subtraction(a,b);
            break;
        case "*":
            result = multiplication(a,b);
            break;
        case "/":
            result = division(a,b);
            break;
        case "^":
            result = power(a,b);
            break;
    }
    console.log(result)

    nextOperation()
    return result;
}

function nextOperation() {
    a = result;
    b = ""
    temp = "b"
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(temp)
}


//variable functions

function variableAssembler(num) {
    if (temp === "a") {
        a += num
        console.log(a)
    } else
    if (temp === "b") {
        b += num
        console.log(b)
    }
    
}

function setOperator (op) {
    operator = op
    temp = "b"
    console.log(operator)
}

function AC () {
    a = "";
    b = "";
    operator = "";
    temp = "a"
}

//display


//buttons

const zero = document.querySelector('#zero')
zero.addEventListener('click', () => variableAssembler("0"))

const one = document.querySelector('#one')
one.addEventListener('click', () => variableAssembler("1"))

const two = document.querySelector('#two')
two.addEventListener('click', () => variableAssembler("2"))

const three = document.querySelector('#three')
three.addEventListener('click', () => variableAssembler("3"))

const four = document.querySelector('#four')
four.addEventListener('click', () => variableAssembler("4"))

const five = document.querySelector('#five')
five.addEventListener('click', () => variableAssembler("5"))

const six = document.querySelector('#six');
six.addEventListener('click', () => variableAssembler("6"));

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => variableAssembler("7"));

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => variableAssembler("8"));

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => variableAssembler("9"));

const add = document.querySelector('#add');
add.addEventListener('click', () => setOperator('+') )

const subtract = document.querySelector('#subtract');
subtract.addEventListener('click', () => setOperator('-') )

const multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => setOperator('*') )

const divide = document.querySelector('#divide');
divide.addEventListener('click', () => setOperator('/') )

const exponent = document.querySelector('#exponent');
exponent.addEventListener('click', () => setOperator('^') )

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => operate(a,b,operator))

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => AC())

const positiveNegative = document.querySelector("#positive-negative");
positiveNegative.addEventListener('click', () => {
    if (temp === "a") {
        if (a.includes("-")) {
            a = a.replace("-", "");
        } else if (a.includes("-") === false) {
            a = "-" + a;
        }
    }
    if (temp === "b") {
        if (b.includes("-")) {
            b = b.replace("-", "");
        } else if (b.includes("-") === false) {
            b = "-" + b;
        }
    }
}
)