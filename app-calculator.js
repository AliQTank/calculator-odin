//NUMBERS SELECTOR, CAN BE OPTIMIZED

//
const para = document.querySelector('p');
let displayValue = 0;
let operatorValue = "";
let accumulator = 0;
let secondAccumulator = NaN;


//NUMBERS SELECTORS
const selectNumber1 = document.querySelector('.NUMBER-1');
const selectNumber2 = document.querySelector('#number2');
const selectNumber3 = document.querySelector('#number3');
const selectNumber4 = document.querySelector('#number4');
const selectNumber5 = document.querySelector('#number5');
const selectNumber6 = document.querySelector('#number6');
const selectNumber7 = document.querySelector('#number7');
const selectNumber8 = document.querySelector('#number8');
const selectNumber9 = document.querySelector('#number9');
const selectNumber0 = document.querySelector('#number0');
const floater = document.getElementById('point-floater');
const numbersGroup = document.getElementById('numbers');

//OPERATORS SELECTORS

const clearAll = document.querySelector('.clear-all');
const oneDelete = document.querySelector('.delete-one');
const plusOperator = document.querySelector('#plus');
const substractionOperator = document.querySelector('#subtract');
const multiplyOperator = document.querySelector('#multiply');
const dividerOperator = document.querySelector('#divide');
const equalizer = document.querySelector('#equals');



// ADD EVENT LISTENERS FOR NUMBERS 

selectNumber0.addEventListener('click', () => {
    para.textContent += 0;
    console.log(0);
    displayValue = para.innerText;
    consoleLoggersForOperators();
})

selectNumber1.addEventListener('click', () => {
    para.textContent += 1;
    console.log(1);
    displayValue = para.innerText;
    consoleLoggersForOperators();
})

selectNumber2.addEventListener('click', () => {
    para.textContent += 2;
    console.log(2);
    displayValue = para.innerText;
    consoleLoggersForOperators();
})

selectNumber3.addEventListener('click', () => {
    para.textContent += 3;
    console.log(3);
    displayValue = para.innerText;
    consoleLoggersForOperators();
})

selectNumber4.addEventListener('click', () => {
    para.textContent += 4;
    console.log(4);
    displayValue = para.innerText;
    consoleLoggersForOperators();
})

selectNumber5.addEventListener('click', () => {
    para.textContent += 5;
    console.log(5);
    displayValue = para.innerText;
    consoleLoggersForOperators();
})

selectNumber6.addEventListener('click', () => {
    para.textContent += 6;
    console.log(6);
    displayValue = para.innerText;
    consoleLoggersForOperators();
})

selectNumber7.addEventListener('click', () => {
    para.textContent += 7;
    console.log(7);
    displayValue = para.innerText;
    consoleLoggersForOperators();
})

selectNumber8.addEventListener('click', () => {
    para.textContent += 8;
    console.log(8);
    displayValue = para.innerText;
    consoleLoggersForOperators();
})

selectNumber9.addEventListener('click', () => {
    para.textContent += 9;
    console.log(9);
    displayValue = para.innerText;
    consoleLoggersForOperators();
})

floater.addEventListener('click', () => {
    para.textContent += '.';
    console.log('.');
    displayValue = para.innerText;
    consoleLoggersForOperators();
})

// OPERATORS ADD EVENT LISTENERS

clearAll.addEventListener('click', () => {
    displayValue = Number("");
    para.textContent = "";
    accumulator = 0;
    operatorValue = null;
    secondAccumulator = 0;
    equalizer.disabled = false;
    console.clear();
});

oneDelete.addEventListener('click', () => {
    accumulator = displayValue;
    para.textContent = "";
    displayValue = 0;
})

plusOperator.addEventListener('click', () => {
    console.log('plus operator pressed');
    operatorValue = '+';
    accumulator = operate(operatorValue, accumulator, displayValue);
    para.textContent = accumulator;
    displayValue = 0;
})

const operatorValueArray = ["+", "-", "/", "*"];

substractionOperator.addEventListener('click', () => {
    console.log('subtract operator pressed');
    operatorValue = '-';
    toReduceLinerInOperators();
})

dividerOperator.addEventListener('click', () => {
    console.log('divider pressed');
    operatorValue = '/';
    toReduceLinerInOperators();
})

multiplyOperator.addEventListener('click', () => {
    console.log('multiplyer pressed');
    operatorValue = '*';
    toReduceLinerInOperators();
})

equalizer.addEventListener('click', () => {
    console.log('equals');
    if (!operatorValue && !accumulator) {
        accumulator = displayValue;
        para.textContent = "";

    }
    para.textContent = operate(operatorValue, accumulator, displayValue);
    accumulator = operate(operatorValue, accumulator, displayValue);
    displayValue = para.textContent;
    consoleLoggersForOperators();
    equalizer.disabled = true;
})

function consoleLoggersForOperators () {
    console.log(`accumulator ${accumulator}`);
    console.log(`operatorValue ${operatorValue}`);
    console.log(`displayValue ${displayValue}`);
}

function toReduceLinerInOperators () {
    accumulator = displayValue;
    para.textContent = "";
    displayValue = 0;
    equalizer.disabled = false;
    consoleLoggersForOperators();
}





// BASIC MATH FUNCTIONS

const add = (a, b) => a += b;

const subtract = (a, b) => a -= b;

const multiply = (a, b) => a *= b;

const divide = (a, b) => a /= b;

function operate(operator, num1, num2) {
    let a = Number(num1);
    let b = Number(num2);


    switch (operator) {
        
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }    
}