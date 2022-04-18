// # 

// 1. Write a for loop that prints to the console the numbers 0 through 9.
// 2. Write a for loop that prints to the console 9 through 0.
// 3. Write a for loop that prints these fruits to the console.

const fruit = ["banana", "orange", "apple", "kiwi"]

for (let i = 0; i < 10; i++) {
    console.log(i)
}
for (let i = 9; i > 0; i--) {
    console.log(i)
}
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}


// # **Bronze Medal**

// 1. Write a for loop that will push the numbers 0 through 9 to an array.
// 2. Write a for loop that prints to the console only even numbers 0 through 100.
// 3. Write a for loop that will push every other fruit to an array.

const fruitArr = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

function arrPusher() {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(i)
    }
    console.log(arr)
}


function toOneHundredEvenly() {
    for (let i = 0; i < 100; i++) {
        i % 2 == 0 ? console.log(i) : console.log("")
    }
}


function everyOtherFruit() {
    for (let i = 0; i < 100; i++) {
        i % 2 == 0 ? console.log(i) : console.log("")
    }
}



// # **Silver Medal**

// 1. Write a loop that will print out all the names of the people of the people array
// 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
// 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".

// Think about what good names for the arrays would be. Since it will be an array of each name or occupation, the plurals of name and occupation would be appropriate.


const peopleArray = [{
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations

function namePrinter(arr) {
    for (let i = 0; i < arr.length; i++) {
        const personName = arr[i];
        console.log(personName.name)

    }
}

function dataSorter(arr) {
    let names = []
    let occupations = []
    for (let i = 0; i < arr.length; i++) {
        const person = arr[i];

        names.push(person.name)
        occupations.push(person.occupation)


    }
    console.log(names, occupations)
}

function evenDataSorter(arr) {
    let names = []
    let occupations = []
    for (let i = 0; i < arr.length; i++) {
        const person = arr[i];

        i % 2 === 0 ? names.push(person.name) && occupations.push(person.occupation) : ""




    }
    console.log(names, occupations)
}


// # **Gold Medal - Nesting**

// 1. Create an array that mimics a grid like the following using nested `for` loops:

// ```
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]

// ```

// 2.Create an array that mimics a grid like the following using nested `for` loops:

// ```
// [[0, 0, 0],
// [1, 1, 1],
// [2, 2, 2]]

// ```

// 3.Create an array that mimics a grid like the following using nested `for` loops:

// ```
// [[0, 1, 2],
// [0, 1, 2],
// [0, 1, 2]]

// ```


function zerodMatrix() {
    var newArr = new Array(3)

    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = []

        for (let j = 0; j < 3; j++) {
            newArr[i][j] = 0
        }
    }
    console.log(newArr)
}


function increasingValueArrMatrix() {
    var newArr = new Array(3)

    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = []

        for (let j = 0; j < 3; j++) {
            newArr[i][j] = i
        }
    }
    console.log(newArr)
}

function increasingValueInArrMatrix() {
    var newArr = new Array(3)

    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = []

        for (let j = 0; j < 3; j++) {
            newArr[i][j] = j
        }
    }
    console.log(newArr)
}



// Given a grid like the previous ones, write a nested for loop that would change every number to an x.



function changeToX() {
    let matrixArr = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2]
]
    for (let i = 0; i < matrixArr.length; i++) {

        for (let j = 0; j < 3; j++) {
            matrixArr[i][j] = "x"
        }
    }
    console.log(matrixArr)

}


changeToX()