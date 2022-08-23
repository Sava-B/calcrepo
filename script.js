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

let arg1 = 0;
let arg2 = 0;
let result = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
            arg1 += `${button.dataset.number}`;

        
    })
})

plusBtn.addEventListener('click', () => {
    displayResult.textContent = '+';
});

minusBtn.addEventListener('click', () => {
    displayResult.textContent = '-';
});
multipBtn.addEventListener('click', () => {
    displayResult.textContent = 'x';
});
divideBtn.addEventListener('click', () => {
    displayResult.textContent = '÷';
});
clearBtn.addEventListener('click', () => {
    arg1 = 0;
    arg2 = 0;
    displayResult.textContent = 0;
})

// press equal and get result
equalBtn.addEventListener('click', () => {
})

class Stack {
    constructor()
    {
        this.items = [];
    }
    push(arg1) 
    {
        this.items.push(arg1)
    }
    isEmpty()
    {
        return this.items.length = 0;
    }
    printStack()
    {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }

}