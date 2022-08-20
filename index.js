function operate(x, y, operator) {
    switch (operator) {
        case ('+'): return x + y;
        case ('-'): return x - y;
        case ('*'): return x * y;
        case ('/'): {
            if (y == 0) return 'Can\'t divide by zero!';
            else return x / y;
        }
    }
}
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equals');
const decimalBtn = document.getElementById('decimal');
const text = document.getElementById('textBox');
const message = document.getElementById('message');
let bool = false;

clearBtn.addEventListener('click', () => {
    text.innerText = '';
    buttons.forEach((button) => {
        button.disabled = false;
    })
    number1 = '';
    firstPart = '';
    bool = false;
    decimalBtn.disabled = true;
})

equalBtn.addEventListener('click', () => {
    decimalBtn.disabled = true;
    operators.forEach((button) => { button.disabled = false })
    opereateString(text.innerText);
})

decimalBtn.addEventListener('click', () => {
    text.innerText += '.';
    decimalBtn.disabled = true;
})

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == '0' && text.innerText == '0') {
            operators.forEach((button) => { button.disabled = false })
        } else {
            text.innerText += button.id;
            operators.forEach((button) => { button.disabled = false })
        }
    })
})
let number1;
let firstPart
operators.forEach((button) => {
    button.addEventListener('click', () => {
        decimalBtn.disabled = false;
        if (bool) {
            opereateString(text.innerText);
            number1 = text.innerText;
            text.innerText += `${button.id}`;
            firstPart = text.innerText;
            bool = true;
        } else {
            number1 = text.innerText;
            text.innerText += ` ${button.id}`;
            firstPart = text.innerText;
            bool = true;
        }
        operators.forEach((button) => { button.disabled = true })
    })
})
const buttons = document.querySelectorAll('button');
function opereateString(string) {
    let x = parseFloat(number1);
    let y = parseFloat(string.substring(firstPart.length, string.length));
    let z = firstPart.substring(firstPart.length - 1, firstPart.length)
    let ans = operate(x, y, z);
    if (typeof (ans) == "number" || ans == NaN) text.innerText = `${ans}`;
    else {
        message.innerText = ans;
        text.innerText = '';
    }
    number1 = '';
    firstPart = '';
    bool = false;
    // buttons.forEach((button) => {
    //     if (button.id == 'clear') {
    //         button.disabled = false;
    //     } else {
    //         button.disabled = true;
    //     }
    // })
}