/*
------
push method
------
Appends the element to the end of the array
Returns the new length of the array
*/

let fruits = ["Apple", "Orange", "Plum"]
fruits.push("Banana")
console.log(fruits) //["Apple", "Orange", "Plum", "Banana"]

//`push` returns the new length of the array
let fruits1 = ["Apple", "Orange", "Plum"]
console.log(fruits1.push("Banana")) // 4

//The call fruits.push(...) is equal to fruits[fruits.length] = ....
let fruits2 = ["Apple", "Orange", "Plum"]
fruits2[fruits2.length] = "Banana"
console.log(fruits2) //["Apple", "Orange", "Plum", "Banana"]

//---->Immutable methods for adding an element to the end of an array<----
let fruits3 = ["Apple", "Orange", "Plum"]
let addFruit = fruits3.concat("Banana")
console.log(addFruit) //["Apple", "Orange", "Plum", "Banana"]
console.log(fruits3) //["Apple", "Orange", "Plum"](the original array is not changed)

let fruits4 = ["Apple", "Orange", "Plum"]
let addFruit2 = [...fruits4, "Banana"]
console.log(addFruit2) //["Apple", "Orange", "Plum", "Banana"]
console.log(fruits4) //["Apple", "Orange", "Plum"](the original array is not changed)
