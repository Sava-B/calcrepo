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

// let arr1 = [];
// let arr2 = [];

// const multiply = (array) => {
//     var result = 1;
//     for (var i=0; i<array.length; i++) {
//         result = result * array[i];
//     } 
// }

let arg1 = '0';
let arg2 = '0';
let result = 0;
let doneFirstArg = 0;
let operation = 0;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (doneFirstArg == 0) {
            arg1 += `${button.dataset.number}`;
        } else {
            arg2 += `${button.dataset.number}`;
        }
    })
})

const checkArg = () => { doneFirstArg = doneFirstArg == 0 ? 1: 0 };

plusBtn.addEventListener('click', () => {
    checkArg()
    operation = 1;
});
minusBtn.addEventListener('click', () => {
    checkArg()
    operation = 2;
});
multipBtn.addEventListener('click', () => {
    checkArg()
    operation = 3;
});
divideBtn.addEventListener('click', () => {
    checkArg()
    operation = 4;
});

// press equal and get result
equalBtn.addEventListener('click', () => {
    if (operation == 1) {
        result = parseInt(arg1) + parseInt(arg2);
    } else if (operation == 2) {
        result = parseInt(arg1) - parseInt(arg2);
    } else if (operation == 3) {
        result = parseInt(arg1) * parseInt(arg2);
    } else if (operation == 4) {
        result = parseInt(arg1) / parseInt(arg2);
    }
    displayResult.textContent = result;
})

  