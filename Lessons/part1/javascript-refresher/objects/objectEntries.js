function BasicConcept() {
  const book = {
    title: "Salem's Lot",
    author: "Stephen King",
  }

  const entries = Object.entries(book)
  console.log("\n--- Basic Concept---")
  console.log(entries)
  /*
  Object.entries() is like turning a dictionary into a list of key-value pairs. It takes an object and transforms it into an array of arrays, where each inner array contains two elements: the property name (key) and its value.
  */
}

function accessingEntries() {
  const movie = {
    title: "Dracula",
    director: "Francis Ford Coppola",
    year: 1992,
  }

  for (const [key, value] of Object.entries(movie)) {
    console.log(key, value)
  }
}

function TransformingObjects() {
  const nums = {
    a: 2,
    b: 4,
    c: 6,
  }
  const tripled = Object.fromEntries(
    Object.entries(nums).map(([key, val]) => [key, val * 3])
  )

  console.log(tripled)
}

function filterObjectProperties() {
  const scores = {
    John: 85,
    Alice: 92,
    Bob: 78,
    Carol: 95,
  }

  const filtered = Object.fromEntries(
    Object.entries(scores).filter(
      ([name, score]) => score > 90 && name[0] === "C"
    )
  )
  console.log(filtered)
}
//BasicConcept()
//accessingEntries()
//TransformingObjects()
//filterObjectProperties()
