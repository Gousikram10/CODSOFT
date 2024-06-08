document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    let currentOperand = '';
    let previousOperand = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            switch (value) {
                case 'clear':
                    display.textContent = '';
                    currentOperand = '';
                    previousOperand = '';
                    operator = '';
                    break;
                case '=':
                    if (currentOperand && previousOperand && operator) {
                        currentOperand = eval(`${previousOperand}${operator}${currentOperand}`);
                        display.textContent = currentOperand;
                        previousOperand = '';
                        operator = '';
                    }
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                    if (currentOperand && !operator) {
                        operator = value;
                        previousOperand = currentOperand;
                        currentOperand = '';
                        display.textContent = operator;
                    }
                    break;
                default:
                    currentOperand += value;
                    display.textContent = currentOperand;
                    break;
            }
        });
    });
});
