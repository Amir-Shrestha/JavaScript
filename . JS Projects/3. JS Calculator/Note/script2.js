//  - numbers, operator, other_mislanious button

const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const equalsBtn = document.querySelector('[data-equals]');
const clearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const previousOperand = document.querySelector('[data-prev-operand]');
const currentOperand = document.querySelector('[data-current-operand]');

class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
    }
}

const buttons = document.getElementsByTagName('button');

for(i=0; i<buttons.length; i++){
    let text = buttons[i].innerHTML;
    console.log(text)
    console.log(typeof(text))
    // buttons[i].setAttribute('onclick', `dispaly(${text})`);
    buttons[i].setAttribute('onclick', `dispaly("${text}")`);
    // console.log(buttons[i])
}

function dispaly(x) {
    previousOperand.innerHTML = x;
    // alert(x)
    // previousOperand.innerHTML = typeof(x);
    // previousOperand.innerHTML = x;
}
