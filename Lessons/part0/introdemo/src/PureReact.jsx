import { createElement } from "react"
const PureReact = (props) => {
  const now = new Date()
  const a = 10
  const b = 20

  const elem = createElement(
    "h1",
    { style: { color: "red", backgroundColor: "blue" } },
    props.name
  )

  return createElement(
    "div",
    null,
    createElement(
      "div",
      { style: { color: "green", backgroundColor: "whitesmoke" } },
      `hello world it is ${now.toLocaleString()}`,
      elem,
      createElement("p", null, "hello again")
    ),
    createElement("p", null, `${a} + ${b} is ${a + b}`)
  )
}
export default PureReact
