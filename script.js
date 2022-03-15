const operatorButtons = document.querySelectorAll('.numpad > .operator');
const buttons = document.querySelectorAll('.numpad > .number');

let arg1 = 0;
let arg2 = "";
let inputNumber = "";
let currentOperator = "";
let result = 0;

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
    let no = this.textContent;
    const input = document.querySelector(".input");
    inputNumber += no;
    input.textContent = inputNumber;
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
        }
        result = div(a, b);
    case 'mod':
        result = mod(a,b);
        break;
    }

    return result;
}

const equalButt = document.querySelector(".equal-but");
equalButt.addEventListener("click", showResult);

function showResult(){
    let res = document.querySelector(".result");
    res.textContent = result;
}