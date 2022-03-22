const boxOne = document.getElementById("box-1")
const boxTwo = document.getElementById("box-2")
const boxThree = document.getElementById("box-3")
const boxFour = document.getElementById("box-4")

//blue red yellow green orange

function blueColorChange(event) {
    event.target.style.backgroundColor = "blue"
}

function redColorChange(event) {
    event.target.style.backgroundColor = "red"
}

function yellowColorChange(event) {
    event.target.style.backgroundColor = "yellow"
}

function greenColorChange(event) {
    event.target.style.backgroundColor = "green"
}

function orangeColorChange(event) {
    event.target.style.backgroundColor = "orange"
}



//mouse down, mouse up, double click, hover

boxOne.addEventListener("click", blueColorChange)
boxTwo.addEventListener("click", redColorChange)
boxThree.addEventListener("click", yellowColorChange)
boxFour.addEventListener("click", greenColorChange)
boxFour.addEventListener("mouseover", orangeColorChange)