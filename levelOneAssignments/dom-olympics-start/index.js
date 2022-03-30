const messagesLeft = document.getElementsByClassName("message left")
const messagesRight = document.getElementsByClassName("message right")
const allMessages = document.getElementById("messages")
const mainContainer = document.getElementById("main")

const themeDropDown = document.getElementById("theme-drop-down")


messagesLeft[0].innerHTML = "This is fun"
messagesLeft[1].innerHTML = "You wouldnt rememebr the old days"

messagesRight[0].innerHTML = "I TOTALLY AGREE!"
messagesRight[1].innerHTML = "YES I DO!"



//Themes
const themeZero = themeDropDown.options[0].value
const themeOne = themeDropDown.options[1].value

console.log(themeDropDown.selectedIndex)


themeDropDown.addEventListener("change", function(e) {
    if (themeDropDown.selectedIndex === 0) {
        document.body.style.backgroundColor = "purple"
    } else if (themeDropDown.selectedIndex === 1) {
        document.body.style.backgroundColor = "red"
    }
})



//Add Messages
//get the value - create an element - add teh class name - input the value text - append to DOM

const form = document.querySelector("form")
const sendButton = form.elements[1]
const messageContainer = document.getElementById("message-container")
let count = 0

sendButton.addEventListener("click", function(event) {
    event.preventDefault()

    let inputFieldText = form.elements.input.value
    let newTextDiv = document.createElement("div")

    newTextDiv.innerHTML = inputFieldText
    if (count % 2 === 0) {
        newTextDiv.setAttribute("class", "message left")
    } else {
        newTextDiv.setAttribute("class", "message right")
    }

    messageContainer.append(newTextDiv)
    count++

})




console.log(form.elements[1])