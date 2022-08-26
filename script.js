const body = document.body
const container = document.querySelector('.container');
const displayResult = document.querySelector('#result');
const buttons = document.querySelectorAll('button');

// operation buttons
const plusBtn = document.getElementById('btn+');
const minusBtn = document.getElementById('btn-');
const multipBtn = document.getElementById('btnx');
const divideBtn = document.getElementById('btn/');
const equalBtn = document.getElementById('btn=');
const clearBtn = document.getElementById('btnC');


let arg1 = 0;
let arg2 = 0;
let result = 0;
let doneFirstArg = 0;
let operation = 0;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (doneFirstArg == 0) {
            arg1 += button.dataset.number;
            displayResult.textContent = arg1;

        } else {
            arg2 += button.dataset.number;
            displayResult.textContent = arg2;

        }
    })
})

const checkArg = () => { doneFirstArg = doneFirstArg == 0 ? 1: 0 };

plusBtn.addEventListener('click', () => {
    checkArg()
    operation = 1;
    displayResult.textContent = '+';

});
minusBtn.addEventListener('click', () => {
    checkArg()
    operation = 2;
    displayResult.textContent = '-';

});
multipBtn.addEventListener('click', () => {
    checkArg()
    operation = 3;
    displayResult.textContent = 'x';

});
divideBtn.addEventListener('click', () => {
    checkArg()
    operation = 4;
    displayResult.textContent = '÷';

});

clearBtn.addEventListener('click', () => {
    arg1 = 0;
    arg2 = 0;
    result = 0;
    doneFirstArg = 0;
    operation = 0;
})

// press equal and get result
equalBtn.addEventListener('click', () => {
    if (operation == 1) {
        result = arg1 + arg2;
    } else if (operation == 2) {
        result = arg1 - arg2;
    } else if (operation == 3) {
        result = arg1 * arg2;
    } else if (operation == 4) {
        result = arg1 / arg2;
    }
    displayResult.textContent = parseInt(result);
})

   