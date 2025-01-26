import { useState } from "react"

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "39-44-5323523", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "39-44-5323523", id: 3 },
    { name: "Mary Poppendieck", number: "39-44-5323523", id: 4 },
  ])
  const [filteredPersons, setFilteredPersons] = useState(null)
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const addName = (e) => {
    e.preventDefault()
    if (persons.some((person) => person.name === newName.trim())) {
      alert(`${newName} is already added to the phonebook`)
      setNewName("")
      return
    } else {
      const nameObj = {
        name: newName.trim(),
        number: newNumber,
        id: persons.length + 1,
      }
      setPersons([...persons, nameObj])
      setNewName("")
    }
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilter = (e) => {
    const query = e.target.value
    const filterPersons = persons.filter((person) =>
      new RegExp(`^${query}`, "i").test(person.name)
    )

    setFilteredPersons(filterPersons)
  }
  // console.log("RENDERED!!!")
  // console.log("NUMBER INPUT", newNumber)

  // console.log("NAME INPUT", newName)

  // console.log("PERSONS", persons)
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <div>
          filtershown with:
          <input placeholder="search phonebook" onChange={handleFilter} />
        </div>

        <h1>Add a new</h1>

        <form onSubmit={addName}>
          <div>
            name:
            <input
              type="text"
              placeholder="type your name"
              value={newName}
              onChange={handleNameChange}
              required
            />
          </div>
          <div>
            number:{" "}
            <input
              type="tel"
              pattern="[0-9]{2}-[0-9]{2}-[0-9]{6}"
              required
              placeholder="XX-XX-XXXXXX"
              value={newNumber}
              onChange={handleNumberChange}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h1>Numbers</h1>
        {!filteredPersons
          ? persons.map((person) => {
              return (
                <div key={person.id}>
                  {person.name} {person.number}
                </div>
              )
            })
          : filteredPersons.map((person) => {
              return (
                <div key={person.id}>
                  {person.name} {person.number}
                </div>
              )
            })}
      </div>
    </>
  )
}

export default App
