const operatorButtons = document.querySelectorAll('.numpad > .operator');
const buttons = document.querySelectorAll('.numpad > .number');
const shownButtons = document.querySelectorAll('.numpad > .show');

shownButtons.forEach(button => button.addEventListener("click", displayShow));

function displayShow(){
    let shownDisplay = document.querySelector(".input");
    shownDisplay.textContent += this.textContent;
}

let arg1 = 0;
let inputNumber = "";
let displayCalc = "";
let currentOperator = "";
let result = 0;
let opEnded = false;
let res = document.querySelector(".result");

const clear = document.querySelector(".C-but");
const clearAll = document.querySelector(".AC-but");

clearAll.addEventListener("click", clearAllFunc);
clear.addEventListener("click", clearFunc);

function clearFunc(){
    inputNumber = "";
    const input = document.querySelector(".input");
    input.textContent = "";
}

function clearAllFunc(){
opEnded = false;
inputNumber = "";
res.textContent = "";
const input = document.querySelector(".input");
input.textContent = inputNumber;
currentOperator = "";
arg1 = 0;
}

operatorButtons.forEach(button => button.addEventListener("click", storeArg));
buttons.forEach(button => button.addEventListener("click", updateDisplay))

function add(a, b){
    return a + b;
}

function subs(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a/b;
}

function mod(a, b){
    return a%b;
}

function updateDisplay(){
    if(opEnded){
        res.textContent = "";
        opEnded = false;
    }
    let no = this.textContent;
 
    inputNumber += no;

}

function storeArg(){
    
    if(arg1 === 0){
        currentOperator = this.dataset.op;
        arg1 = Number(inputNumber);
        inputNumber = "";
        console.log(arg1);
    }else{
        arg1 = operate(currentOperator, arg1, Number(inputNumber));
        currentOperator = this.dataset.op;
        inputNumber = "";
        console.log(arg1);
    }
}

function operate(operator, a, b){
    switch(operator){
    case 'add':
        result = add(a, b);
        break;
    case  'sub':
        result = subs(a, b);
        break;
    case 'mult':
        result = mult(a, b);
        break;
    case 'div':
        if(b === 0){
        result = 'error can not divide by 0 bro';
        break;
        }else{
        result = div(a, b);
        break;
        }
    case 'mod':
        result = mod(a,b);
        break;
    }

    return result;
}

const equalButt = document.querySelector(".equal-but");
equalButt.addEventListener("click", showResult);

function showResult(){
    operate(currentOperator, arg1, Number(inputNumber));
    res.textContent = result;
    opEnded = true;
    arg1 = 0;
    result = 0;
    inputNumber = "";
}