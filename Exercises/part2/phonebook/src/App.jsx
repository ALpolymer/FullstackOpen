import { useState } from "react"

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }])
  const [newName, setNewName] = useState("")
  const addName = (e) => {
    e.preventDefault()
    if (persons.some((person) => person.name === newName.trim())) {
      alert(`${newName} is already added to the phonebook`)
      setNewName("")
      return
    } else {
      const nameObj = { name: newName.trim() }
      setPersons([...persons, nameObj])
      setNewName("")
    }
  }

  const handleNameChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }
  console.log("RENDERED!!!")
  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addName}>
          <div>
            name:{" "}
            <input
              placeholder="type your name"
              value={newName}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        {persons.map((person) => {
          return <div key={person.name}>{person.name}</div>
        })}
      </div>
    </>
  )
}

export default App
