import PureReact from "./PureReact"
const Hello = (props) => {
  console.log("Props", props)
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <p>Greetings</p>
      <Hello name="George" />
      <Hello name="Daisy" />
      <PureReact />
    </div>
  )
}

export default App
