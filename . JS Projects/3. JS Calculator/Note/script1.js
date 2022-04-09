//  - numbers, operator, other_mislanious button

const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const equalsBtn = document.querySelector('[data-equals]');
const clearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const previousOperand = document.querySelector('[data-prev-operand]');
const currentOperand = document.querySelector('[data-current-operand]');

console.log(numberBtn)
console.log(operatorBtn)
console.log(equalsBtn)
console.log(clearBtn)
console.log(deleteBtn)
console.log(previousOperand)
console.log(currentOperand)

class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
    }
}

const buttons = document.getElementsByTagName('button');
console.log(buttons)
console.log(typeof(buttons));
console.log(buttons instanceof Array);
console.log(buttons.length)

for(i=0; i<buttons.length; i++){
    // console.log(buttons[i])
    // console.log(typeof(buttons[i]))
    // console.log(buttons[i].innerHTML)
    // console.log(buttons[i].innerText)
    // console.log(buttons[i].textContent)
    // console.log(typeof(buttons[i].textContent))
    // buttons[i].setAttribute('onclick', "dispaly(buttons[i])");
    // buttons[i].addEventListener("click", () => dispaly(buttons[i]));
    // buttons[i].addEventListener("click", () => dispaly('buttons[i]'));
    // buttons[i].addEventListener("click", () => dispaly(1));
    // buttons[i].style.backgroundColor = "red";
    // console.log(buttons[i].innerHTML )
    // buttons[i].style.backgroundColor = "red";
    // buttons[i].setAttribute('onclick', "dispaly(buttons[i])");
    text = buttons[i].innerHTML;
    console.log(text)
    console.log(typeof(text))
    buttons[i].setAttribute('onclick', "dispaly(text)");
    console.log(buttons[i])
}

function dispaly(x) {
    previousOperand.innerHTML = x;
    alert(x)
    // previousOperand.innerHTML = typeof(x);
    // previousOperand.innerHTML = x;
}