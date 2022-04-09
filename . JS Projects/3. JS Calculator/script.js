class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement; // at first previousOperandOE is element when clicked its text
        this.currentOperandElement = currentOperandElement;
        this.clear();
    }

    clear (){
        this.previousOperandText = '';
        this.currentOperandText = '';
        this.operation = undefined;
    }

    append (operand){
        if(operand === "." && this.currentOperandText.includes(".")) return;
        this.currentOperandText = this.currentOperandText.toString() + operand.toString();
    }

    getDisplayNumberHelperFunction(number){
        const floatNumber = parseFloat(number)
        if(isNaN(floatNumber)) return ''
        return floatNumber.toLocaleString('en');
    }

    updateDisplay (){
        this.currentOperandElement.innerText = this.getDisplayNumberHelperFunction(this.currentOperandText);
        (this.operation != undefined) ? this.previousOperandElement.innerText = this.previousOperandText + this.operation: this.previousOperandElement.innerText = this.previousOperandText;
    }

    delete (){
        this.currentOperandText = this.currentOperandText.toString().slice(0, -1);
    }

    chooseOperator(operator){
        if(this.currentOperandText === "")return;
        if(this.previousOperandText !== ""){
            this.equalsCompute();
        }
        this.operation = operator;
        this.previousOperandText = this.currentOperandText;
        this.currentOperandText = "";
    }

    equalsCompute (){
        // this.previousOperandElement.innerText = this.previousOperandElement.innerText + this.currentOperandElement.innerText;
        // this.currentOperandElement.innerText = "Answer"
        let computation;
        const prev = parseFloat(this.previousOperandText);
        const current = parseFloat(this.currentOperandText);
        if(isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return
        }
        this.currentOperandText = computation;
        this.operation = undefined;
        this.previousOperandText = '';
    }

}

//  - numbers, operator, other_mislanious button
const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const equalsBtn = document.querySelector('[data-equals]');
const clearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const previousOperandElement = document.querySelector('[data-prev-operand]');
const currentOperandElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandElement, currentOperandElement); //here two arguments are htmlelements

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.append(button.innerText);
        calculator.updateDisplay();
    })
})

operatorBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText);
        calculator.updateDisplay();
    })
})

equalsBtn.addEventListener('click', () => {
    calculator.equalsCompute();
    calculator.updateDisplay();
})

clearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})