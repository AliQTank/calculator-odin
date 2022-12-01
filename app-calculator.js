//NUMBERS SELECTOR, CAN BE OPTIMIZED


const selectNumber1 = document.querySelector('#number1');
const selectNumber2 = document.querySelector('#number2');
const selectNumber3 = document.querySelector('#number3');
const selectNumber4 = document.querySelector('#number4');
const selectNumber5 = document.querySelector('#number5');
const selectNumber6 = document.querySelector('#number6');
const selectNumber7 = document.querySelector('#number7');
const selectNumber8 = document.querySelector('#number8');
const selectNumber9 = document.querySelector('#number9');
const selectNumber0 = document.querySelector('#number0');

selectNumber0.addEventListener('click', () => {
    console.log(0);
})

selectNumber1.addEventListener('click', () => {
    console.log(1);
})

selectNumber2.addEventListener('click', () => {
    console.log(2);
})

selectNumber3.addEventListener('click', () => {
    console.log(3);
})

selectNumber4.addEventListener('click', () => {
    console.log(4);
})

selectNumber5.addEventListener('click', () => {
    console.log(5);
})

selectNumber6.addEventListener('click', () => {
    console.log(6);
})

selectNumber7.addEventListener('click', () => {
    console.log(7);
})

selectNumber8.addEventListener('click', () => {
    console.log(8);
})

selectNumber9.addEventListener('click', () => {
    console.log(9);
})

function add(a, b) {
    return a += b;
}

function subtract(a, b) {
    return a -= b;
}

function multiply(a, b) {
    return a *= b;
}

function divide(a, b) {
    return a /= b;
}

function operate(operator, num1, num2) {
    let a = num1;
    let b = num2;


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