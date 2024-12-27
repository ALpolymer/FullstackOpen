import { createElement } from "react"
const PureReact = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b)

  const elem = createElement(
    "h1",
    { style: { color: "red", backgroundColor: "blue" } },
    "HEADER"
  )

  console.log(elem)

  return createElement(
    "div",
    null,
    createElement(
      "div",
      null,
      `hello world it is ${now.toLocaleString()}`,
      elem,
      createElement("p", null, "hello")
    ),
    createElement("p", null, `${a} + ${b} is ${a + b}`)
  )
}
export default PureReact
