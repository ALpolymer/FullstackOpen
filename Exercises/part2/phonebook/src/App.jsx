import Filter from "./Filter"
import PersonForm from "./PersonForm"
import Persons from "./Persons"
import { useState, useEffect } from "react"
import phoneService from "./services/phones"
import axios from "axios"

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
      phoneService.addNewPhone(nameObj).then((newPhone) => {
        setPersons([...persons, newPhone])
        setNewName("")
        setNewNumber("")
      })
    }
  }

  const deleteName = (id) => {
    const personToDelete = persons.find((person) => person.id === id)
    console.log(personToDelete)

    const confirm = window.confirm(`delete ${personToDelete.name} ?`)

    if (confirm) {
      const updatedPersons = persons.filter((person) => person.id !== id)
      axios
        .delete(`http://localhost:3001/persons/${id}`)
        .then(setPersons(updatedPersons))
        .catch((error) => console.log(error))
    } else {
      console.log("canceled")
      return
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

        <Persons
          displayedPersons={displayedPersons}
          onDeleteName={deleteName}
        />
      </div>
    </>
  )
}

export default App
