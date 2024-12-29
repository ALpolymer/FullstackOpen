/*
------
pop method
------
Extracts the last element of the array and returns it.It is not immutable meaning that it changes the original array
*/

let fruits = ["Apple", "Orange", "Plum"]
console.log(fruits.pop()) //Plum
console.log(fruits) //["Apple", "Orange"](the original array is changed)

let fruits2 = ["Apple", "Orange", "Plum"]
const lastFruit2 = fruits2.pop()
console.log(lastFruit2) //Plum
console.log(fruits2) //["Apple", "Orange"](the original array is changed)

//---->Immutable methods for returning the last element of an array<----
let fruits3 = ["Apple", "Orange", "Plum"]
let lastFruit3 = fruits3[fruits3.length - 1]
console.log(lastFruit3) //Plum
console.log(fruits3) //["Apple", "Orange", "Plum"](the original array is not changed)

let fruits4 = ["Apple", "Orange", "Plum"]
let lastFruit4 = fruits4.at(-1)
console.log(lastFruit4) //Plum
console.log(fruits4) //["Apple", "Orange", "Plum"](the original array is not changed)

//---->Immutable methods for deleting the last element of an array<----
let fruits5 = ["Apple", "Orange", "Plum"]
let deleteFruit = fruits5.slice(0, -1)
console.log(deleteFruit) //["Apple", "Orange"]
console.log(fruits5) //["Apple", "Orange", "Plum"](the original array is not changed)
