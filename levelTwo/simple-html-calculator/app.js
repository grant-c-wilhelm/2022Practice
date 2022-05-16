const form = document.form
const input1 = form.num1
const input2 = form.num2
const submitButton = document.getElementById("submit")

let mathRadio = form.math

submitButton.addEventListener("click", function(e) {
    e.preventDefault()
    let valueOne = input1.value
    let valueTwo = input2.value
    switch (mathRadio.value) {
        case "add":
            console.log(parseInt(valueOne) + parseInt(valueTwo))
            break;
        case "subtract":
            console.log(parseInt(valueOne) - parseInt(valueTwo))
            break;
        case "multiply":
            console.log(parseInt(valueOne) * parseInt(valueTwo))
            break;
        case "divide":
            console.log(parseInt(valueOne) / parseInt(valueTwo))
            break;
        default:
            break;
    }
})