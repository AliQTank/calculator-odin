// BASIC MATH FUNCTIONS 001
const add = (a, b) => a += b;
const subtract = (a, b) => a -= b;
const multiply = (a, b) => a *= b;
const divide = (a, b) => a /= b;

// CREATE FUNCTION OPERATE 002
function operate(operator, num1, num2) {
    let a = Number(num1);
    let b = Number(num2);

    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
}

// CREATE A BASIC CALCULATOR IN HTML AND CSS 003

// CREATE FUNCTIONS THAT POPULATE THE DISPLAY 004
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

const para = document.querySelector("p");
let displayValue = 0;
let operatorValue = "";
let accumulator = 0;
let secondAccumulator = NaN; 


selectNumber0.addEventListener("click", () => {
    if (Boolean(operatorValue) && !displayValue && para.textContent !== "0.") {
        console.log(0);
        para.textContent = 0;
        displayValue = para.textContent;                
    }
    else {
        if(!operatorValue && accumulator) {
            accumulator = 0;
            console.log(0);
            para.textContent = 0;
            displayValue = para.textContent;
        }
        else {
            console.log(0);
            para.textContent += 0;
            displayValue = para.textContent;
        }        
    }
})
selectNumber1.addEventListener("click", () => {
    if (operatorValue && !displayValue && para.textContent !== "0.") {
        console.log(1);
        para.textContent = 1;
        displayValue = para.textContent;
                
    }
    else {
        if(!operatorValue && accumulator) {
            accumulator = 0;
            console.log(1);
            para.textContent = 1;
            displayValue = para.textContent;
        }
        else {
            console.log(1);
            para.textContent += 1;
            displayValue = para.textContent;
        }        
    }
})
selectNumber2.addEventListener("click", () => {
    if (operatorValue && !displayValue && para.textContent !== "0.") {
        console.log(2);
        para.textContent = 2;
        displayValue = para.textContent;
                
    }
    else {
        if(!operatorValue && accumulator) {
            accumulator = 0;
            console.log(2);
            para.textContent = 2;
            displayValue = para.textContent;
        }
        else {
            console.log(2);
            para.textContent += 2;
            displayValue = para.textContent;
        }        
    }
})
selectNumber3.addEventListener("click", () => {
    if (operatorValue && !displayValue && para.textContent !== "0.") {
        console.log(3);
        para.textContent = 3;
        displayValue = para.textContent;
                
    }
    else {
        if(!operatorValue && accumulator) {
            accumulator = 0;
            console.log(3);
            para.textContent = 3;
            displayValue = para.textContent;
        }
        else {
            console.log(3);
            para.textContent += 3;
            displayValue = para.textContent;
        }        
    }
})
selectNumber4.addEventListener("click", () => {
    if (operatorValue && !displayValue && para.textContent !== "0.") {
        console.log(4);
        para.textContent = 4;
        displayValue = para.textContent;
                
    }
    else {
        if(!operatorValue && accumulator) {
            accumulator = 0;
            console.log(4);
            para.textContent = 4;
            displayValue = para.textContent;
        }
        else {
            console.log(4);
            para.textContent += 4;
            displayValue = para.textContent;
        }        
    }
})
selectNumber5.addEventListener("click", () => {
    if (operatorValue && !displayValue && para.textContent !== "0.") {
        console.log(5);
        para.textContent = 5;
        displayValue = para.textContent;
                
    }
    else {
        if(!operatorValue && accumulator) {
            accumulator = 0;
            console.log(5);
            para.textContent = 5;
            displayValue = para.textContent;
        }
        else {
            console.log(5);
            para.textContent += 5;
            displayValue = para.textContent;
        }        
    }
})
selectNumber6.addEventListener("click", () => {
    if (operatorValue && !displayValue && para.textContent !== "0.") {
        console.log(6);
        para.textContent = 6;
        displayValue = para.textContent;
                
    }
    else {
        if(!operatorValue && accumulator) {
            accumulator = 0;
            console.log(6);
            para.textContent = 6;
            displayValue = para.textContent;
        }
        else {
            console.log(6);
            para.textContent += 6;
            displayValue = para.textContent;
        }        
    }
})
selectNumber7.addEventListener("click", () => {
    if (operatorValue && !displayValue && para.textContent !== "0.") {
        console.log(7);
        para.textContent = 7;
        displayValue = para.textContent;
                
    }
    else {
        if(!operatorValue && accumulator) {
            accumulator = 0;
            console.log(7);
            para.textContent = 7;
            displayValue = para.textContent;
        }
        else {
            console.log(7);
            para.textContent += 7;
            displayValue = para.textContent;
        }        
    }
})
selectNumber8.addEventListener("click", () => {
    if (operatorValue && !displayValue && para.textContent !== "0.") {
        console.log(8);
        para.textContent = 8;
        displayValue = para.textContent;
                
    }
    else {
        if(!operatorValue && accumulator) {
            accumulator = 0;
            console.log(8);
            para.textContent = 8;
            displayValue = para.textContent;
        }
        else {
            console.log(8);
            para.textContent += 8;
            displayValue = para.textContent;
        }        
    }
})
selectNumber9.addEventListener("click", () => {
    if (operatorValue && !displayValue && para.textContent !== "0.") {
        console.log(9);
        para.textContent = 9;
        displayValue = para.textContent;
                
    }
    else {
        if(!operatorValue && accumulator) {
            accumulator = 0;
            console.log(9);
            para.textContent = 9;
            displayValue = para.textContent;
        }
        else {
            console.log(9);
            para.textContent += 9;
            displayValue = para.textContent;
        }        
    }
})
floater.addEventListener("click", () => {
    if (displayValue ) {
        para.textContent += ".";
        displayValue = para.textContent;
    } else {
        para.textContent = "0.";
    }
    console.log(".");    
})

// NOT NUMBERS

clearAll.addEventListener("click", () => {
    console.log("all cleared");
    para.textContent = "";
    operatorValue = "";
    accumulator = 0;
    secondAccumulator = 0;
    displayValue = 0;
    console.clear();
})

plusOperator.addEventListener("click", () => {
    if (!accumulator) {       
        operatorValue = "+";
        accumulator = displayValue;
        displayValue = 0;
    } else if (!operatorValue) {
        operatorValue = "+";
        para.textContent = accumulator;
    } else if (displayValue === 0) {
        operatorValue = "+";
    } else {
        secondAccumulator = displayValue;
        accumulator = operate(operatorValue, accumulator, displayValue);
        para.textContent = accumulator;
        displayValue = 0;
        operatorValue = "+";
    }
})
substractionOperator.addEventListener("click", () => {
    if (!accumulator) {       
        operatorValue = "-";
        accumulator = displayValue;
        displayValue = 0;
    } else if (!operatorValue) {
        operatorValue = "-";
        para.textContent = accumulator;
    } else if (displayValue === 0) {
        operatorValue = "-";
    } else {
        secondAccumulator = displayValue;
        accumulator = operate(operatorValue, accumulator, displayValue);
        para.textContent = accumulator;
        displayValue = 0;
        operatorValue = "-";
    } 
})
multiplyOperator.addEventListener("click", () => {
    if (!accumulator) {       
        operatorValue = "*";
        accumulator = displayValue;
        displayValue = 0;
    } else if (!operatorValue) {
        operatorValue = "*";
        para.textContent = accumulator;
    } else if (displayValue === 0) {
        operatorValue = "*";
    } else {
        secondAccumulator = displayValue;
        accumulator = operate(operatorValue, accumulator, displayValue);
        para.textContent = accumulator;
        displayValue = 0;
        operatorValue = "*";
    }    
})
dividerOperator.addEventListener("click", () => {
    if (!accumulator) {       
        operatorValue = "/";
        accumulator = displayValue;
        displayValue = 0;
    } else if (!operatorValue) {
        operatorValue = "/";
        para.textContent = accumulator;
    } else if (displayValue === 0) {
        operatorValue = "/";
    } else {
        secondAccumulator = displayValue;
        accumulator = operate(operatorValue, accumulator, displayValue);
        para.textContent = accumulator;
        displayValue = 0;
        operatorValue = "/";
    }     
})

equalizer.addEventListener("click", () => {
    if (!accumulator) {
        accumulator = displayValue;
        para.textContent = accumulator;
        displayValue = 0;
    } else if (!operatorValue) {
        para.textContent = accumulator;
    } else if (!displayValue && secondAccumulator !== NaN) {
        accumulator = operate(operatorValue, accumulator, secondAccumulator);
        para.textContent = accumulator;
    } else {
        accumulator = operate(operatorValue, accumulator, displayValue); 
        para.textContent = accumulator;
        secondAccumulator = displayValue;
        displayValue = 0;
        console.log("=");
        console.log(accumulator);
    }     
    })

oneDelete.addEventListener("click", () => {
    if (!accumulator || displayValue) {
        para.textContent = para.textContent.split("").splice(0, para.textContent.length-1).join("");
    displayValue = para.textContent;
    } else {}
    
})