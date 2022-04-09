const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const equalsBtn = document.querySelector('[data-equals]');
const clearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const previousOperandTextElement = document.querySelector('[data-prev-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberBtn.forEach((button, i) => {
    // button.addEventListener('click', () => {
    //     // calculator.append(button.innerText);
    //     // calculator.updateDisplay();
    // })
    button.setAttribute('onclick', `alert(${i})`);
})
















numberBtn.forEach((button, i) => {
    button.addEventListener('click', () => {
        // calculator.append(button.innerText);
        // calculator.updateDisplay();
        alert(i)
        // alert(button.innerText)
    })
    // button.setAttribute('onclick', `alert(${i})`);
})
