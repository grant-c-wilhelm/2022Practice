const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e) {
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown() {
    const dropDown = document.createElement("select")

    for (let i = 0; i < colors.length; i++) {
        const option = document.createElement("option")
        option.textContent = colors[i]


        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("change", function(event) {
        console.log(event.target.parentElement)
        event.target.parentElement.style.backgroundColor = event.target.value
    })
    return dropDown

}

function createSubItem(e) {
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value

    subItem.textContent = subItemValue

    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")

    return subItem
}

let headText = document.createElement("p") //p should be a string
headText.textContent = "dwgsfg"
document.getel //Your getElementById(headText) should be input as a string = //try to append an element to an element/id that does not exist - trying appending to an element with an id in HTML on it