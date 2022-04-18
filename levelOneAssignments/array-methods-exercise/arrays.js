var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


// 1. Remove the last item from the vegetable array.
// 2. Remove the first item from the fruit array.
// 3. Find the index of "orange."
// 4. Add that number to the end of the fruit array.
// 5. Use the length property to find the length of the vegetable array.
// 6. Add that number to the end of the vegetable array.
// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
// 8. Remove 2 elements from your new array starting at index 4 with one method.
// 9. Reverse your array.
// 10. Turn the array into a string and return it.

vegetables.pop()
console.log(vegetables)


fruit.shift()
console.log(fruit)


console.log(fruit.indexOf("orange"))


fruit.push(fruit.indexOf("orange"))
console.log(fruit)


console.log(vegetables.length)


vegetables.push(vegetables.length)
console.log(vegetables)


let food = fruit.concat(vegetables)
console.log(food)


food.splice(4, 2)
console.log(food)


food.reverse()
console.log(food)


let foodString = food.toString()
console.log(foodString)