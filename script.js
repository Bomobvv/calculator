document.addEventListener('DOMContentLoaded', function () {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '0';
    let operator = null;
    let previousInput = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'clear') {
                currentInput = '0';
                operator = null;
                previousInput = null;
            } else if (value === '+/-') {
                currentInput = (parseFloat(currentInput) * -1).toString();
            } else if (value === '%') {
                currentInput = (parseFloat(currentInput) / 100).toString();
            } else if (value === '=') {
                if (operator && previousInput !== null) {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`).toString();
                    operator = null;
                    previousInput = null;
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                previousInput = currentInput;
                currentInput = '0';
            } else {
                if (currentInput === '0') {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
            }

            screen.textContent = currentInput;
        });
    });
});
