const body = document.body
const container = document.querySelector('.container');
const displayResult = document.querySelector('#result');

// buttons
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn0 = document.getElementById('btn0');
const plusBtn = document.getElementById('btn+');
const minusBtn = document.getElementById('btn-');
const multipBtn = document.getElementById('btnx');
const divideBtn = document.getElementById('btn/');
const equalBtn = document.getElementById('btn=');
const clearBtn = document.getElementById('btnC');

let arg1 = 0;
let arg2 = 0;
let result;
let doneFirstArg = 0;

btn1.addEventListener('click', () => {
    if (doneFirstArg = 0) {
        arg1 += 1;
    } else {
        arg2 += 1;
    }
});

btn2.addEventListener('click', () => {
    if (doneFirstArg = 0) {
        arg1 += 2;
    } else {
        arg2 += 2;
    }
});

btn3.addEventListener('click', () => {
    if (doneFirstArg = 0) {
        arg1 += 3;
    } else {
        arg2 += 3;
    }
});

btn4.addEventListener('click', () => {
    if (doneFirstArg = 0) {
        arg1 += 4;
    } else {
        arg2 += 4;
    }
});

btn5.addEventListener('click', () => {
    if (doneFirstArg = 0) {
        arg1 += 5;
    } else {
        arg2 += 5;
    }
});

btn6.addEventListener('click', () => {
    if (doneFirstArg = 0) {
        arg1 += 6;
    } else {
        arg2 += 6;
    }
});

btn7.addEventListener('click', () => {
    if (doneFirstArg = 0) {
        arg1 += 7;
    } else {
        arg2 += 7;
    }
});

btn8.addEventListener('click', () => {
    if (doneFirstArg = 0) {
        arg1 += 8;
    } else {
        arg2 += 8;
    }
});

btn9.addEventListener('click', () => {
    if (doneFirstArg = 0) {
        arg1 += 9;
    } else {
        arg2 += 9;
    }
});

btn0.addEventListener('click', () => {
    if (doneFirstArg = 0) {
        arg1 += 10;
    } else {
        arg2 += 10;
    }
});

plusBtn.addEventListener('click', (arg1, arg2) => {
    doneFirstArg = 1;
    result = arg1 + arg2;

});
minusBtn.addEventListener('click', (arg1, arg2) => {
    doneFirstArg = 1;
    result = arg1 - arg2;
});
multipBtn.addEventListener('click', (arg1, arg2) => {
    doneFirstArg = 1;
    result = arg1 * arg2 
});
divideBtn.addEventListener('click', (arg1, arg2) => {
    doneFirstArg = 1;
    result = arg1 / arg2;
});


equalBtn.addEventListener('click', () => {
    displayResult.textContent = result;
})

  