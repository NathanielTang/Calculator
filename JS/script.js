//Operator functions

const addition = (a,b) => a + b;

const subtraction = (a,b) => a-b;

const multiplication = (a,b) => a*b;

const division = (a,b) => {
    if (b===0) {
        return "undefined"
    }
    return a/b;
}

const power = (a,b) => a**b;

//Operator

//global variables

let a = "";
let b = "";
let operator = "";
let temp = "a"
let result;
const displayNum = document.querySelector('#displayNum');
displayNum.textContent = "0";

function operate(a,b = a,operator) {
    a = parseFloat(a)
   
    if (operator === "") return;
   if (b === "") {
       b = a;
   } else {
       b = parseFloat(b)
   }

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
    if (result > 99999999999999 || result < -99999999999999) {
        result = "too high/low"
    }
    if (String(result).length > 14) {
        if (String(result).includes(".")) { 
            result = round(result)}
        } else {result = snipResult(result)}
    
   
    displayNum.textContent = result;

    nextOperation()
    return result;
}

function snipResult(x) {
     y = String(x)
    let result = y.slice(0,14)
    return result;
}
function round(x) {
    y = String(x);
    let e = 14 - y.indexOf('.') - 1;
    return Math.round(y * (10 ** e)) / (10 ** e)
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
        if (a.length > 13) return;
        a += num
        displayNum.textContent = a;
    } else
    if (temp === "b") {
        if (b.length > 13) return;
        b += num
        displayNum.textContent = b;
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
    displayNum.textContent = "0";
}

function displayAOrB() {
    if  (temp === "a") {
        displayNum.textContent = a;
    }
    if (temp === "b") {
        displayNum.textContent = b;
    }
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
        if (a === "" || a == 0) return;
        if (a.includes("-")) {
            a = a.replace("-", "");
        } else if (a.includes("-") === false) {
            a = "-" + a;
        }
    }
    if (temp === "b") {
        if (b == 0) return;
        if (b.includes("-")) {
            b = b.replace("-", "");
        } else if (b.includes("-") === false) {
            b = "-" + b;
        }
    }
    displayAOrB();
}
)

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
    if (temp === "a") {
        if (a.includes(".")) {
            return;
        }
        a = a + "."
        
    }
    if (temp === "b") {
        if (b.includes(".")) {
            return;
        }
        b = b + "."
        }
        displayAOrB()
    }
)


//Adding keyboard functionality

document.addEventListener('keydown', logKey)

function logKey(k) {
    console.log(k.key)
    if (k.key === "0" || k.key === "1" || k.key === "2" || k.key === "3" || k.key === "4" || k.key === "5" || k.key === "6" || k.key === "7" || k.key === "8" || k.key === "9") {
        variableAssembler(k.key)
    }
    // the exponent ^ has been left out because shift+6 (^) would count as two presses
    if (k.key === "/" || k.key === "*" || k.key === "-" || k.key === "+") {
        setOperator(k.key)
    }
    if (k.key === "=" || k.key === "Enter") {
        operate(a,b,operator)
    }
    if (k.key === "Escape") {
        AC()
    }
}