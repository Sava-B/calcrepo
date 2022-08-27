const body = document.body
const container = document.querySelector('.container');
const displayResult = document.querySelector('#result');
const buttons = document.querySelectorAll('[data-number]');

// operation buttons
const plusBtn = document.getElementById('btn+');
const minusBtn = document.getElementById('btn-');
const multipBtn = document.getElementById('btnx');
const divideBtn = document.getElementById('btn/');
const equalBtn = document.getElementById('btn=');
const clearBtn = document.getElementById('btnC');

const add = (a,b) => { return parseInt(a) + parseInt(b) };
const subtract = (a,b) => { return parseInt(a) - parseInt(b) };
const multiply = (a,b) => { return parseInt(a) * parseInt(b) };
const divide = (a,b) => { return parseInt(a) / parseInt(b) };

const newOp = () => {
    if (displayValue > 0) {
        arg1 = displayValue;
        arg2 = 0;
        doneFirstArg = 1;
        displayValue = 0;
    }
}

let arg1 = '';
let arg2 = '';
let displayValue = 0;
let doneFirstArg = 0;
let operation = 0;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (doneFirstArg == 0) {
            arg1 += parseInt(`${button.dataset.number}`);
            displayResult.textContent = arg1;
            console.log(arg1, arg2, result)

        } else {
            arg2 += parseInt(`${button.dataset.number}`);
            displayResult.textContent = arg2;
            console.log(arg1, arg2, result)

        }
    })
})

plusBtn.addEventListener('click', () => {
    newOp();
    operation = 1;
    doneFirstArg ++;
    displayResult.textContent = '+';
    console.log(arg1, arg2, result)
});
minusBtn.addEventListener('click', () => {
    newOp();
    operation = 2;
    doneFirstArg ++;
    displayResult.textContent = '-';
    console.log(arg1, arg2, result)
});
multipBtn.addEventListener('click', () => {
    newOp();
    operation = 3;
    doneFirstArg ++;
    displayResult.textContent = 'x';
    console.log(arg1, arg2, result);
});
divideBtn.addEventListener('click', () => {
    newOp();
    operation = 4;
    doneFirstArg ++;
    displayResult.textContent = '÷';
    console.log(arg1, arg2, result);
});

clearBtn.addEventListener('click', () => {
    displayResult.textContent = 0;
    console.log(arg1, arg2, result);
})

const calculateNumbers = () => {
    if (operation == 1) {
        displayValue += add(arg1, arg2);
    } else if (operation == 2){
        displayValue += subtract(arg1, arg2);
    } else if (operation == 3){
        displayValue += multiply(arg1, arg2);
    } else if (operation == 4) {
        displayValue += divide(arg1, arg2);
    }
}

// press equal and get result
equalBtn.addEventListener('click', () => {
    newOp();
    calculateNumbers();
    displayResult.textContent = displayValue;
    console.log(arg1, arg2, result);
})

   