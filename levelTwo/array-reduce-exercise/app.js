// .reduce()

// 1 - reduce the array of numbers into a sum of all the numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result1 = nums.reduce(function(final, num) {
    final += num
    return final
})


// 2 - reduce the users to an array of strings of the user's first and last names
const users = [

    { fName: "tina", lName: "johnson" },
    { fName: "joe", lName: "smithy" },
    { fName: "rick", lName: "sanchez" }
]





const names = ['joe smithy', 'rick sanchez', 'tina johnson']

function capitalize(name, index, arr) {
    arr[index] = name + "s"
    return arr
}











const usersArr = users.reduce(function(final, user, i) {

    final.push(`${user.fName} ${user.lName}`)
    return final
}, [])

usersArr.map(element => {
    return element[0].toUpperCase() + element.substring(1)
})





// 3 - reduce the array into a count of how many people voted
var voters = [
    { name: "steve", voted: true },
    { name: "janet", voted: true },
    { name: "rebecca", voted: false },
    { name: "harvey", voted: true },
]

const votersVoted = voters.reduce(function(final, voter) {
    voter.voted ? final++ : false
    return final
}, 0)







// Use the built-in `.reduce()` method on arrays to solve all of these problems

// Feel free to copy and paste the code for easy testing.

//1) Turn an array of numbers into a total of all the numbers**


function total(arr) {
    let result = arr.reduce(function(final, current) {
        final += current
        return final
    })
    return result
}

console.log(total([1, 2, 3])); // 6





//2) Turn an array of numbers into a long string of all those numbers.**


function stringConcat(arr) {
    let final = arr.reduce(function(finalString, current) {
        finalString += current
        return finalString
    }, "")
    return final
}

console.log(stringConcat([1, 2, 3])); // "123"





//3) Turn an array of voter objects into a count of how many people voted**


function totalVotes(arr) {
    let votersVoted = arr.reduce(function(total, current) {
        current.voted ? total++ : false
        return total
    }, 0)
    return votersVoted
}

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
console.log(totalVotes(voters)); // 7



// > Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.
// > 



//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once**


function shoppingSpree(arr) {
    let totalCost = arr.reduce(function(price, current) {
        price += current.price
        return price
    }, 0)
    return totalCost
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005





//5) Given an array of arrays, flatten them into a single array**


function flatten(arr) {
    let finalArr = arr.reduce(function(flattenArr, current, i) {
        flattenArr = flattenArr.concat(current)


        return flattenArr
    }, )
    return finalArr
}





var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];



// > Note: Take a look at Array.concat() to help with this one
// > 



//6) Given an array of potential voters, return an object representing the results of the vote**

// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.


var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr) {
    let votedObject = arr.reduce(function(final, voter) {
        if (voter.age <= 25) {
            voter.voted ?
                final.numYoungVotes++ +
                final.numYoungPeople++ :
                final.numYoungPeople++

        } else if (voter.age > 25 && voter.age < 36) {
            voter.voted ?
                final.numMidVotesPeople++ +
                final.numMidsPeople++ :
                final.numMidsPeople++

        } else if (voter.age > 35) {
            voter.voted ?
                final.numOldVotesPeople++ +
                final.numOldsPeople++ :
                final.numOldsPeople++
        }

        return final



    }, { numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidsPeople: 0, numOldVotesPeople: 0, numOldsPeople: 0 })

    return votedObject
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/