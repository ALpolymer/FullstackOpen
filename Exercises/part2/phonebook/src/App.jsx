import Filter from "./Filter"
import PersonForm from "./PersonForm"
import Persons from "./Persons"
import { ErrorMessage, SuccessMessage } from "./Messages"
import { useState, useEffect } from "react"
import phoneService from "./services/phones"

function App() {
  const [persons, setPersons] = useState([])

  const [query, setQuery] = useState("")
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [message, setMessage] = useState(["", ""])

  useEffect(() => {
    phoneService
      .getAllPhones()
      .then((catalog) => setPersons(catalog))
      .catch((error) => console.log(error))
  }, [])

  const addName = (e) => {
    e.preventDefault()
    const existingName = persons.find(
      (person) => person.name === newName.trim()
    )

    if (existingName) {
      const confirm = window.confirm(
        `${newName} is already added to the phonebook,replace the number with the new one?`
      )
      if (confirm) {
        const newData = {
          id: existingName.id,
          name: existingName.name,
          number: newNumber,
        }

        phoneService
          .updatePhone(newData.id, newData)
          .then((responseData) => {
            const updatedData = persons.map((person) => {
              if (person.id === responseData.id) {
                return newData
              } else {
                return person
              }
            })
            setPersons(updatedData)
            setNewName("")
            setNewNumber("")
          })
          .catch((error) => console.log(error))
      }
      setNewName("")
      setNewNumber("")
      return
    } else {
      const nameObj = {
        name: newName.trim(),
        number: newNumber,
      }
      phoneService
        .addNewPhone(nameObj)
        .then((newPhone) => {
          setPersons([...persons, newPhone])
          setNewName("")
          setNewNumber("")
        })
        .then(() => {
          setMessage([`Added ${nameObj.name}`, 0])
          setTimeout(() => {
            setMessage(["", ""])
          }, 5000)
        })
        .catch((error) => console.log(error))
    }
  }

  const deleteName = (id) => {
    const personToDelete = persons.find((person) => person.id === id)

    const confirm = window.confirm(`delete ${personToDelete.name} ?`)

    if (confirm) {
      phoneService
        .deletePhone(id)
        .then(setPersons(persons.filter((person) => person.id !== id)))
        .catch((error) => console.log(error))
    } else {
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
        <SuccessMessage message={message[0]} />
        <ErrorMessage message={message[1]} />

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
