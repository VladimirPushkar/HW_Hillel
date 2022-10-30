let numA;
let numB;
let operation;

function getA() {
    do {
        numA = +prompt('Enter the first number', '');
    } while (isNaN(numA));
    return numA;
};
function getOperation() {
    do {
        operation = prompt('Enter the operation like: +, -, *, /, %, ^', '');
    } while (!(operation === '+' || operation === '-' || operation === '*' || operation === '/' || operation === '%' || operation === '^'));
    return operation
};
function getB() {
    do {
        numB = +prompt('Enter the second number', '');
    } while (isNaN(numA));
    return numB;
};
function allFinish(x, znak, y) {
    let result;
    x = getA();
    znak = getOperation();
    y = getB();
    if (znak == '+') {
        result = x + y;
    } else if (znak == '-') {
        result = x - y;
    } else if (znak == '*') {
        result = x * y;
    } else if (znak == '/') {
        result = x / y;
    } else if (znak == '%') {
        result = x % y;
    } else if (znak == '^') {
        result = x ** y;
    }
    console.log(result);
};
allFinish();