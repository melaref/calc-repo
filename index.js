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
})

equalBtn.addEventListener('click', () => {
    opereateString(text.innerText);
})

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        text.innerText += button.id;
    })
})
let number1;
let firstPart
operators.forEach((button) => {
    button.addEventListener('click', () => {
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
    })
})
const buttons = document.querySelectorAll('button');
function opereateString(string) {
    let x = parseFloat(number1);
    let y = parseFloat(string.substring(firstPart.length, string.length));
    let z = firstPart.substring(firstPart.length - 1, firstPart.length)
    let ans = operate(x, y, z);
    if(typeof(ans) == "number" || ans == NaN) text.innerText = `${ans}`;
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