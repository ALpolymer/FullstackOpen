import PureReact from "./PureReact"
const Hello = ({ name }) => {
  console.log("Props", name)
  return (
    <div>
      <p>Hello {name}</p>
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
