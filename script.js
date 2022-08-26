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

let arg1 = ['21+*'];
let arg2 = [];
let result = [];

class Stack {
    constructor()
    {
        this.items = [];
    }
    push(element) 
    {
        this.items.push(element);
    }
    pop()
    {
        if (this.items.length == 0) 
            return 'Underflow';
        return this.items.pop();
    }
    peek() 
    {
        return this.items[this.items.length - 1];
    }
    isEmpty()
    {
        return this.items.length = 0;
    }
    printStack()
    {
        let str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}


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

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        arg1.push(button.dataset.number);
    })
})


function postFixEvaluation(exp)
{
    var stack = new Stack();
    for (var i = 0; i < exp.length; i++) {
        var c = exp[i];
        if (!isNaN(c))
            stack.push(c - '0');
        else {
            var val1 = stack.pop();
            var val2 = stack.pop();
            if (val1 == "Underflow" || val2 == "Underflow")
                return "Can't perform postfix evaluation";
            switch (c) {
            case '+':
                stack.push(val2 + val1);
                break;
  
            case '-':
                stack.push(val2 - val1);
                break;
  
            case '/':
                stack.push(val2 / val1);
                break;
  
            case '*':
                stack.push(val2 * val1);
                break;
            }
        }
    }
  
    return stack.pop();
}


