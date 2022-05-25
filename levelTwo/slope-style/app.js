function collectAnimals(...animals) {
    console.log(animals)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]


function combineFruit(fruit, sweets, vegetables) {
    return {
        fruit,
        sweets,
        vegetables
    }
}

console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))
    //=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    //  }


const trip = (location, duration) => `We're going to have a good time in ${location} for ${duration}.`
console.log(trip('Burley Idaho', '2 weeks'))

const hockey = (team, gamesLeft) => `the ${team} has ${gamesLeft} until the Stanley Cup`

console.log(hockey("Lightning", "6 games"))

console.log(`this weekend I went to the hockey game. ${hockey("Lightning", "6 games")}`)



const returnFirst = (...items) => {
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}


console.log(returnFirst(423, 52, 5, 21234))



const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    const [firstFav, secondFav, thirdFav] = favoriteActivities
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
}

returnFavorites(favoriteActivities)


function combineAnimals(...arr) {
    let newArr = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
    return newArr
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]



function product(...arr) {
    var numbers = [...arr];

    return numbers.reduce((acc, number) => {
        return acc * number;
    }, 1)
}
console.log(product(1, 2, 3, 4, 5, 6))



function populatePeople(names) {
    return names.map(name => {
        const [firstName, lastName] = name.split(" ");
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
    //[
    //  {firstName: "Frank", lastName: "Peterson"},
    //  {firstName: "Suzy", lastName: "Degual"},
    //  {firstName: "Liza", lastName: "Jones"},
    //]




console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
    //[
    //  {firstName: "Frank", lastName: "Peterson"},
    //  {firstName: "Suzy", lastName: "Degual"},
    //  {firstName: "Liza", lastName: "Jones"},
    //]























// function populatePeople(names) {
//     return names.map(name => {
//         const [firstName, lastName] = name.split(" ");

//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]










// const returnFirst = (...items) => {
//     let [firstItem] = items; /*change this line to be es6*/
//     return firstItem
// }
// console.log(returnFirst(89, 7, 4, 6, 2, 3))


// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// const returnFavorites = () => {
//     const [firstFav, secondFav, thirdFav] = favoriteActivities
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav
// }

// returnFavorites(favoriteActivities)