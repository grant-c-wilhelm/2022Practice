var readlineSync = require('readline-sync');

var mathType = readlineSync.question("What math operation would you like to perform? Please enter the operation symbol ")
var firstNum = readlineSync.question("What is your first number? ");
var secondNum = readlineSync.question("What is your second number? ");

if (mathType === "+") {
    add(firstNum, secondNum)
} else if (mathType === "-") {
    subtract(firstNum, secondNum)
} else if (mathType === "*") {
    multiply(firstNum, secondNum)
} else {
    divide(firstNum, secondNum)
}


function add(firstNum, secondNum) {
    console.log(parseInt(firstNum) + parseInt(secondNum))
}

function subtract(firstNum, secondNum) {
    console.log(parseInt(firstNum) - parseInt(secondNum))
}

function multiply(firstNum, secondNum) {
    console.log(parseInt(firstNum) * parseInt(secondNum))
}

function divide(firstNum, secondNum) {
    console.log(parseInt(firstNum) / parseInt(secondNum))
}