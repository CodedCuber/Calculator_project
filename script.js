
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
    if (screen.textContent.length <= 24){
        if (screen.textContent == '0') {
            screen.textContent = content;
            return;
        }
        else {
            screen.insertAdjacentText('beforeend', content);
        }
    }
}


//big button event listeners

back.addEventListener('click', () => {
    if (screen.textContent.includes('Can\'t divide by zero')) {
        screen.textContent = '0';
        return;
    }
    const text = screen.textContent;
    screen.textContent = text.slice(0, -1);
});

clear.addEventListener('click', () => {
    screen.textContent = '0';
});

//getting screen content for calculation purposes
let myString = '';

const operators = ['+', '-', 'x', '÷'];

//operator event listeners
plus.addEventListener('click', () => conditionalCalculate('+'));
minus.addEventListener('click', () => conditionalCalculate('-'));
multiply.addEventListener('click', () => conditionalCalculate('x'));
divide.addEventListener('click', () => conditionalCalculate('÷'));
dot.addEventListener('click', () => printToScreen('.'));
equals.addEventListener('click', calculateFromScreen);

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

//split screen contents into numbers that can be used for math
function getItems(str, operator) {
    let part1 = parseFloat(str.slice(0, (str.indexOf(operator))));
    let part2 = parseFloat(str.slice(str.indexOf(operator) + 1, str.length));
    
    if(isNaN(part1)) {
        part1 = '0';
    }
    if(isNaN(part2)) {
        part2 = '0';
    }
    
    return [parseFloat(part1), parseFloat(part2)]
}

//creates array with two operatable numbers using the above function ^
//then calls one of the operational functions depending on which operator is in
//the screen
function calculate(arr){
    //for loop is used to retrieve a value from an array of mathematical operators
    //[+, -, x, divide]
  for (let i = 0; i < 4; i++) {
    if (arr.includes(operators[i])) {
            if (i == 0) {
              const items = getItems(myString, '+');
        return add(items[0], items[1]);
      			}
            if (i == 1) {
              const items = getItems(myString, '-');
        return subtract(items[0], items[1]);
      			}
            if (i == 3) {
              const items = getItems(myString, '÷');
        return slash(items[0], items[1]);
      			}
            if (i == 2) {
              const items = getItems(myString, 'x');
        return times(items[0], items[1]);
      			}
    }
  }
}


//operator functions
function add(a, b) {return a + b};
function subtract(a, b) {return a - b};
function times(a, b) {return a * b};
function slash(a, b) {
    if (a == 0) {
    return 0;
  }
  if (b == 0) {
    return 'Can\'t divide by zero';
  }
  return a / b;
}

//calculation depending on what is on the screen

function calculateFromScreen() {
    myString = (document.querySelector('.screen')).textContent;
    const myArr = Array.from(myString);
    screen.textContent = calculate(myArr).toFixed(2);
}


//calculating depending on whether the screen has operators there already
function conditionalCalculate(operator) {
    if (screen.textContent == 'Can\'t divide by zero') {
        screen.textContent = '0';
    }
    else if(screen.textContent.includes('+') || screen.textContent.includes('-') ||
    screen.textContent.includes('÷') || screen.textContent.includes('x')) {
        calculateFromScreen();
    }
    printToScreen(operator)
}