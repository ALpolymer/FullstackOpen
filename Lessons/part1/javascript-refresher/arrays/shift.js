/*
------
shift method
------
Extracts the first element of the array and returns it.It is not immutable meaning that it changes the original array
*/

let fruits = ["Apple", "Orange", "Plum"]
console.log(fruits.shift()) //Apple
console.log(fruits) //["Orange", "Plum"](the original array is changed)

//---->Immutable methods for deleting the first element of an array<----
let fruits4 = ["Apple", "Orange", "Plum"]
let deleteFruit = fruits4.slice(1)
console.log(deleteFruit) //["Orange", "Plum"]
console.log(fruits4) //["Apple", "Orange", "Plum"](the original array is not changed)
