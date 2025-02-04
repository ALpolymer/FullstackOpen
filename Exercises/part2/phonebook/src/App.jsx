import Filter from "./Filter"
import PersonForm from "./PersonForm"
import Persons from "./Persons"
import { useState, useEffect } from "react"
import axios from "axios"
import phoneService from "./services/phones"

function App() {
  const [persons, setPersons] = useState([])

  const [query, setQuery] = useState("")
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  useEffect(() => {
    phoneService.getAllPhones().then((catalog) => setPersons(catalog))
  }, [])

  const addName = (e) => {
    e.preventDefault()
    if (persons.some((person) => person.name === newName.trim())) {
      alert(`${newName} is already added to the phonebook`)
      setNewName("")
      setNewNumber("")
      return
    } else {
      const nameObj = {
        name: newName.trim(),
        number: newNumber,
      }
      axios.post("http://localhost:3001/persons", nameObj).then((response) => {
        setPersons([...persons, response.data])
        setNewName("")
        setNewNumber("")
      })
    }
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setQuery(e.target.value)
  }

  const getFilteredPersons = () => {
    if (!query) return persons
    const filtered = persons.filter((person) =>
      new RegExp(`^${query.trim()}`, "i").test(person.name)
    )
    return filtered.length !== 0
      ? filtered
      : [{ name: "No match found", number: "", id: 0 }]
  }

  const displayedPersons = getFilteredPersons()

  return (
    <>
      <div>
        <h1>Phonebook</h1>

        <Filter onFilterChange={handleFilterChange} />

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
