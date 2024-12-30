// Wrap each example in a function
const destructuringExamples = {
  basicArrayDestructuring() {
    let arr = ["John", "Smith"]
    let [firstName, surName] = arr
    console.log("\n--- Basic Array Destructuring ---")
    console.log("Original array:", arr)
    console.log("firstName:", firstName)
    console.log("surName:", surName)
    // comments:
    // firstName is now equal to "John" and surName is now equal to "Smith"
  },

  traditionalAssignment() {
    let arr1 = ["Alex", "Bolton"]
    let firstName1 = arr1[0]
    let surName1 = arr1[1]
    console.log("\n--- Traditional Assignment ---")
    console.log("Original array:", arr1)
    console.log("firstName1:", firstName1)
    console.log("surName1:", surName1)
  },

  stringDestructuring() {
    let [a, b, c] = "ABC"
    console.log("\n--- String Destructuring ---")
    console.log("a:", a)
    console.log("b:", b)
    console.log("c:", c)
  },

  leftSideAssignment() {
    console.log("\n--- Assign to anything at the left-side ---")
    let user = {}
    ;[user.name, user.surname] = "John Smith".split(" ")
    console.log("user:", user)
    console.log("user.name:", user.name)
    console.log("user.surname:", user.surname)
  },

  restOperatorExample1() {
    let [head, ...tail] = [1, 2, 3, 4, 5]
    console.log("\n--- Rest Operator Example 1 ---")
    console.log("head:", head)
    console.log("tail:", tail)
  },

  restOperatorExample2() {
    let [x, y, ...z] = [1, 2, 3, 4, 5]
    console.log("\n--- Rest Operator Example 2 ---")
    console.log("x:", x)
    console.log("y:", y)
    console.log("z:", z)
  },
}

// Run individual examples by uncommenting the ones you want to run
//destructuringExamples.basicArrayDestructuring()
// destructuringExamples.traditionalAssignment();
// destructuringExamples.stringDestructuring();
destructuringExamples.leftSideAssignment()
// destructuringExamples.restOperatorExample1();
// destructuringExamples.restOperatorExample2();

// Or run all examples at once
// Object.values(destructuringExamples).forEach(example => example());
