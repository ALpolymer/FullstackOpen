function basicDestructuring() {
  let options = {
    title: "Menu",
    width: 100,
    height: 200,
  }

  let { title, width, height } = options
  console.log("\n--- Basic Destructuring ---")
  console.log("title:", title)
  console.log("width:", width)
  console.log("height:", height)
}

function changeVariableNames() {
  let options = {
    title: "Menu",
    width: 100,
    height: 200,
  }
  let { width: w, height: h, title } = options

  console.log("\n--- Change Variable Names ---")
  console.log("w:", w)
  console.log("h:", h)
  console.log("title:", title)
}

function defaultValues() {
  let options = {
    title: "Menu",
  }
  let { width = 100, height = 200, title } = options

  console.log("\n--- Default Values ---")
  console.log("width:", width)
  console.log("height:", height)
  console.log("title:", title)
}

function extractOneValue() {
  let options = {
    title: "Menu",
    width: 100,
    height: 200,
  }
  let { width } = options
  console.log("\n--- Extract One Value ---")
  console.log("width:", width)
}

function restParam() {
  let options = {
    title: "Menu",
    width: 100,
    height: 200,
  }
  let { width, ...rest } = options
  console.log("\n--- Rest Param ---")
  console.log("width:", width)
  console.log("rest:", rest)
}

function nestedDestructuring() {
  let options = {
    title: "Menu",
    width: 100,
    height: 200,
    position: {
      x: 0,
      y: 0,
    },
  }

  let {
    position: { x, y },
  } = options
  console.log("\n--- Nested Destructuring ---")
  console.log("x:", x)
  console.log("y:", y)
}

//basicDestructuring()

//changeVariableNames()

//defaultValues()

//extractOneValue()

restParam()

//nestedDestructuring()
