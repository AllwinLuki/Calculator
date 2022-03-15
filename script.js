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

function operate(operator, a , b){
    let result = 0;
    switch(expr){
    case 'addButton':
        result = add(a, b);
        break;
    case  'subButton':
        result = subs(a, b);
        break;
    case 'multButton':
        result = mult(a, b);
        break;
    case 'divButton':
        if(b === 0){
        result = 'error can not divide by 0 bro';
        break;
        }
        result = div(a, b);
    }

    return result;
}