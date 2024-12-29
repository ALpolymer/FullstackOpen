/*
------
unshift method
------
Append the element to the beginning of the array
Returns the new length of the array
*/

let fruits = ["Apple", "Orange", "Plum"]
fruits.unshift("Banana")
console.log(fruits) //["Banana", "Apple", "Orange", "Plum"]

//`unshift` returns the new length of the array
let fruits1 = ["Apple", "Orange", "Plum"]
console.log(fruits1.unshift("Banana")) // 4

//---->Immutable methods for adding an element to the beginning of an array<----
let fruits3 = ["Apple", "Orange", "Plum"]
let addFruit = ["Banana"].concat(fruits3)
console.log(addFruit) //["Banana", "Apple", "Orange", "Plum"]
console.log(fruits3) //["Apple", "Orange", "Plum"](the original array is not changed)

let fruits4 = ["Apple", "Orange", "Plum"]
let addFruit2 = ["Banana", ...fruits4]
console.log(addFruit2) //["Banana", "Apple", "Orange", "Plum"]
console.log(fruits4) //["Apple", "Orange", "Plum"](the original array is not changed)
