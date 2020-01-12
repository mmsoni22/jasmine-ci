function calculate(inputValue) {
const expression = /\+|\-|\*|\//;

// spilt the expression 
const numbers = inputValue.split(expression);

const numberA = parseInt(numbers[0]); //convert string into numbers
const numberB = parseInt(numbers[1]);

//when it recognize the (+,-,*,/) signs it will return signs. (+).
const operation = inputValue.match(expression); 

// search NaN javascript mdn fot documentation
if (Number.isNaN(numberA) || Number.isNaN(numberB) || operation === null) {
    updateResult("operation is not recognized")
    return;
}

//start to bulid calculator
let calculator = new Calculator();
calculator.add(numberA);

let result;
 
switch(operation[0]) {
case "+":
result = calculator.add(numberB);
    break;
case "-":
result = calculator.subtract(numberB);
    break;
case "*":
result = calculator.multiply(numberB);
    break;
case "/":
result = calculator.divide(numberB);
    break;

}
updateResult(result);
}

function updateResult(result) {
    const element = document.getElementById("result");

    if(element) {
        element.innerText = result;
    }
}

function showVersion() {
    const calculator = new Calculator();

    const element = document.getElementById("version");
    calculator.version 
    .then(function(version) {
        element.innerText = version;
    })

    element.innerText = calculator.version;
}
