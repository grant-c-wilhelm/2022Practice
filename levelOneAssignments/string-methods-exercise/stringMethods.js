// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
function capilizeAndLowercase(string) {
    let newArr = []

    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        newArr.push(element.toUpperCase())
    }
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        newArr.push(element.toLowerCase())
    }
    string = newArr.join("")
    console.log(string)
}
// capilizeAndLowercase("HelLo") // => "HELLOhello"



// ---

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
function findMiddleIndex(string) {
    let newNum = string.length
    newNum = Math.floor(newNum / 2)
    return newNum
}
// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5


// ---

// Write a function that uses `[slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)` and the other functions you've written to return the first half of the given string.
function returnFirstHalf(string) {
    let middleIndex = findMiddleIndex(string)
    let stringArr = string.split("")

    let splitString = stringArr.slice(0, middleIndex)

    let returnString = splitString.join("")
    return returnString
}


// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"


// ---

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

// > Hint: If your string length is odd, use Math.floor() to round down.
// > 

function capilizeAndLowercase(string) {
    let middleIndex = findMiddleIndex(string)
    let firstHalf = returnFirstHalf(string).toUpperCase()

    let secondHalf = string.split("").slice(middleIndex).join("").toLowerCase()

    returnString = firstHalf + secondHalf
    console.log(returnString)
}

// ```
capilizeAndLowercase("Hello") // => "HEllo"
capilizeAndLowercase("Hello World") // => "HELLO world"

// ```

// ---

// ### **Optional Code Challenge**

// > (This one is a step up in difficulty and utilizes the .split() string method and .join() array method):
// > 

// Write a function that takes a string as a parameter and capitalizes any character that follows a space.