let count = 0
const countDisplay = document.getElementById("countDisplay")
const savedCountDisplay = document.getElementById("savedCountDisplay")

function keepCount() {
    count++
    countDisplay.innerHTML = `The CURRENT Count Is: ${count}`

    localStorage.setItem("currentCount", count)

}

let myCurrentCountValue = localStorage.getItem("currentCount")
savedCountDisplay.innerHTML = `The LAST Count Was: ${myCurrentCountValue}`

document.addEventListener("click", keepCount)





setInterval(function() {
    localStorage.removeItem("currentCount")
}, 5000);
// 1 second later
'hello!'