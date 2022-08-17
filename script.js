const body = document.body
const container = document.querySelector('.container');

// buttons
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const btn0 = document.querySelector('#btn0');
const plusBtn = document.querySelector('#btn+');
const minusBtn = document.querySelector('#btn-');
const multipBtn = document.querySelector('#btnx');
const divideBtn = document.querySelector('#btn/');
const equalBtn = document.querySelector('#btn=');
const clearBtn = document.querySelector('#btnC');


plusBtn.addEventListener('click', add())
plusBtn.addEventListener('click', subtract())
plusBtn.addEventListener('click', multiply())
plusBtn.addEventListener('click', divide())

const add = function(a, b) {
    return a + b;
};
  
const subtract = function(a, b) {
    return a - b;
};

const divide = function(a, b) {
    return a / b;
};

  
const multiply = function(array) {
    return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};