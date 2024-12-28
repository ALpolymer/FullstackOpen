const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name},you are {props.age} years old
      </p>
    </div>
  )
}

const MyLink = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

// const App = () => {
//   const name = "John"
//   const age = 20
//   return (
//     <div>
//       <p>Greetings</p>
//       <Hello name="George" age={20 + 10} />
//       <Hello name={name} age={age} />
//       <MyLink />
//     </div>
//   )
// }

//----->FRAGMENT<------
const App = () => {
  const name = "John"
  const age = 20
  return (
    <>
      <p>Greetings</p>
      <Hello name="George" age={20 + 10} />
      <Hello name={name} age={age} />
      <MyLink />
    </>
  )
}

//----->Objects are not valid as a React child<------
// const App = () => {
//   const friends = [
//     { name: "Peter", age: 4 },
//     { name: "Maya", age: 10 },
//   ]
//   return (
//     <>
//       <p>{friends[0]}</p>
//       <p>{friends[1]}</p>
//     </>
//   )
// }

//----->Fix the error<------
//---->In React, the individual things rendered in braces must be primitive values, such as numbers or strings.<----
// const App = () => {
//   const friends = [
//     { name: "Peter", age: 4 },
//     { name: "Maya", age: 10 },
//   ]
//   return (
//     <>
//       <p>
//         {friends[0].name} {friends[0].age}
//       </p>
//       <p>
//         {friends[1].name} {friends[1].age}
//       </p>
//     </>
//   )
// }

// ----->React also allows arrays to be rendered if the array contains values that are eligible for rendering (such as numbers or strings). So the following program would work, although the result might not be what we want:<-----
// const App = () => {
//   const friends = ["Peter", "Maya"]

//   return (
//     <div>
//       <p>{friends}</p>
//     </div>
//   )
// }

export default App
