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

// operations to call when evaluating 
const add = (a,b) => { return parseInt(a) + parseInt(b) };
const subtract = (a,b) => { return parseInt(a) - parseInt(b) };
const multiply = (a,b) => { return parseInt(a) * parseInt(b) };
const divide = (a,b) => { return parseInt(a) / parseInt(b) };

const calculateNumbers = () => {
    isArgEmpty();
    if (operation == 1) {
        displayValue += add(arg1, arg2);
    } else if (operation == 2){
        displayValue += subtract(arg1, arg2);
    } else if (operation == 3) {
        displayValue += multiply(arg1, arg2);
    } else if (operation == 4) {
        displayValue += divide(arg1, arg2);
        if (arg1 == 0 && arg2 == 0) {
            displayValue = 'u = 5T00P1D L0L'
        }
    }
    roundAccurately(arg1, 5)
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}

let arg1 = '';
let arg2 = '';
let displayValue = '';
let doneFirstArg = '';
let doneFirstOp = 0;
let operation = 0;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (doneFirstArg == 0) {
            arg1 += parseInt(`${button.dataset.number}`);
            displayResult.textContent = arg1;
            console.log(arg1, arg2, displayValue)

        } else {
            arg2 += parseInt(`${button.dataset.number}`);
            displayResult.textContent = arg2;
            console.log(arg1, arg2, displayValue)
        }
    })
})

const checkOp = () => {
    if (doneFirstOp > 1) {
        doneFirstOp ++;
    }
}

const isArgEmpty = () => {
    if (arg1 == '') {
        arg1 = 0
    } else if (arg2 == '') {
        arg2 = 0
    }
}

plusBtn.addEventListener('click', () => {
    doneFirstOp ++;
    checkOp();
    newOp();
    operation = 1;
    doneFirstArg ++;
    displayResult.textContent = '+';
    console.log(arg1, arg2, displayValue)
});
minusBtn.addEventListener('click', () => {
    doneFirstOp ++;
    checkOp();
    newOp();
    operation = 2;
    doneFirstArg ++;
    displayResult.textContent = '-';
    console.log(arg1, arg2, displayValue)
});

multipBtn.addEventListener('click', () => {
    doneFirstOp ++;
    checkOp();
    newOp();
    operation = 3;
    doneFirstArg ++;
    displayResult.textContent = 'x';
    console.log(arg1, arg2, displayValue);
});

divideBtn.addEventListener('click', () => {
    doneFirstOp ++;
    checkOp();
    newOp();
    operation = 4;
    doneFirstArg ++;
    displayResult.textContent = '??';
    console.log(arg1, arg2, displayValue);
});

// Clear 
clearBtn.addEventListener('click', () => {
    arg1 = '';
    arg2 = '';
    displayValue = '';
    doneFirstArg = 0;
    doneFirstOp = 0;
    operation = 0;
    displayResult.textContent = 0;
    console.log(arg1, arg2, displayValue);
})

// press equal and get result
equalBtn.addEventListener('click', () => {
    newOp();
    calculateNumbers();
    if (doneFirstOp == 1) {
        displayResult.textContent = displayValue;
    } else {
        displayResult.textContent = arg1;
    }
    console.log(arg1, arg2, displayValue);
})

// Checks if more than 1 operation is done
const newOp = () => {
    if (displayValue != '') {
        arg1 = displayValue;
        arg2 = '';
        doneFirstArg = 1;
        displayValue = '';
        console.log(arg1, arg2, displayValue);
        displayValue.textContent = roundAccurately(arg1,5);
        displayResult.textContent = roundAccurately(displayValue,15);

    } else if (doneFirstOp > 1) {
        calculateNumbers()
        arg1 = displayValue;
        arg2 = '';
        doneFirstArg = 0;
        displayValue = '';
        displayResult.textContent = roundAccurately(arg1, 15);
        console.log(arg1, arg2, displayValue);   
    }
}

   