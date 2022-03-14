
//screen
const screen = document.querySelector('.screen');

//big buttons
const back = document.getElementById('backspace');
const clear = document.getElementById('clear');

//numbers
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

//operators
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const dot = document.getElementById('dot');
const equals = document.getElementById('equals');

//print to screen
function printToScreen(content) {
    if (screen.textContent == '0') {
        screen.textContent = content;
        return;
    }
    else {
        screen.insertAdjacentText('beforeend', content);
    }
}


//big button event listeners

back.addEventListener('click', () => {
    const text = screen.textContent;
    screen.textContent = text.slice(0, -1);
});

clear.addEventListener('click', () => {
    screen.textContent = '0';
});

//operator event listeners
plus.addEventListener('click', () => printToScreen('+'));
minus.addEventListener('click', () => printToScreen('-'));
multiply.addEventListener('click', () => printToScreen('x'));
divide.addEventListener('click', () => printToScreen('÷'));
dot.addEventListener('click', () => printToScreen('.'));
equals.addEventListener('click', () => printToScreen('='));

//number event listeners
zero.addEventListener('click', () => printToScreen('0'));
one.addEventListener('click', () => printToScreen('1'));
two.addEventListener('click', () => printToScreen('2'));
three.addEventListener('click', () => printToScreen('3'));
four.addEventListener('click', () => printToScreen('4'));
five.addEventListener('click', () => printToScreen('5'));
six.addEventListener('click', () => printToScreen('6'));
seven.addEventListener('click', () => printToScreen('7'));
eight.addEventListener('click', () => printToScreen('8'));
nine.addEventListener('click', () => printToScreen('9'));



