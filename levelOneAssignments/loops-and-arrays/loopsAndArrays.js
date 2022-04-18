//Loop through the following array and count how many "`computer`s" there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

function officeItemChecker(arr) {
    let count = 0
    arr.map(item => {
        if (item === "computer") {
            count++
        }
    })
    return count
}



//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [{
    name: "Mike",
    age: 12,
    gender: "male"
}, {
    name: "Madeline",
    age: 80,
    gender: "female"
}, {
    name: "Cheryl",
    age: 22,
    gender: "female"
}, {
    name: "Sam",
    age: 30,
    gender: "male"
}, {
    name: "Suzy",
    age: 4,
    gender: "female"
}]

function ageChecker(arr) {
    arr.map(person => {
        if (person.age >= 18) {
            console.log(`${person.name} is old enough`)
        } else {
            console.log(`${person.name} is not old enough`)

        }
    })
}

ageChecker(peopleWhoWantToSeeMadMaxFuryRoad)


var arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (let i = 0; i < arrayOfArrays.length; i++){
    for (let j = 0; j < arrayOfArrays[i].length; j++){
        console.log(arrayOfArrays[i][j])
    }
}