import Filter from "./Filter"
import PersonForm from "./PersonForm"
import { useState } from "react"

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "39-44-5323523", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "39-44-5323523", id: 3 },
    { name: "Mary Poppendieck", number: "39-44-5323523", id: 4 },
  ])
  const [filteredPersons, setFilteredPersons] = useState([])
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
      setNewNumber("")
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
    console.log("Query", query)
    const filterPersons = persons.filter((person) =>
      new RegExp(`^${query}`, "i").test(person.name)
    )

    setFilteredPersons(filterPersons)
  }

  console.log("filtered", filteredPersons)

  const displayedPersons =
    filteredPersons.length === 0 ? persons : filteredPersons

  console.log("Displayed", displayedPersons)
  console.log("Newname", !!newName)
  return (
    <>
      <div>
        <h1>Phonebook</h1>

        <Filter onFilter={handleFilter} />

        <h1>Add a new</h1>

        <PersonForm
          onAddName={addName}
          newName={newName}
          onNameChange={handleNameChange}
          newNumber={newNumber}
          onNumberChange={handleNumberChange}
        />

        <h1>Numbers</h1>

        <Persons displayedPersons={displayedPersons} />
      </div>
    </>
  )
}

export default App

const Persons = ({ displayedPersons }) => {
  return displayedPersons.map((person) => {
    return (
      <div key={person.id}>
        {person.name} {person.number}
      </div>
    )
  })
}
