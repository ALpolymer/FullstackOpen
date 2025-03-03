import Filter from "./Filter"
import PersonForm from "./PersonForm"
import Persons from "./Persons"
import Message from "./Messages"
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

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setQuery(e.target.value)
  }

  const handleUpdateEntry = (name, number) => {
    const newData = {
      id: name.id,
      name: name.name,
      number: number,
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
        setMessage([`Updated ${newData.name}'s phone number`, "success"])
        setTimeout(() => {
          setMessage(["", ""])
        }, 5000)
        setNewName("")
        setNewNumber("")
      })
      .catch((error) => {
        setPersons(persons.filter((person) => person.id !== newData.id))
        setMessage([
          `Information of  ${newData.name} has already been removed from server`,
          "error",
        ])
        setTimeout(() => {
          setMessage(["", ""])
        }, 5000)
        console.log(error)
        setNewName("")
        setNewNumber("")
      })
  }

  const handleAddEntry = (name, number) => {
    const nameObj = {
      name: name.trim(),
      number: number,
    }

    phoneService
      .addNewPhone(nameObj)
      .then((newPhone) => {
        setPersons([...persons, newPhone])
        setNewName("")
        setNewNumber("")
      })
      .then(() => {
        setMessage([`Added ${nameObj.name}`, "success"])
        setTimeout(() => {
          setMessage(["", ""])
        }, 5000)
      })
      .catch((error) => console.log(error))
  }

  const handleDeleteEntry = (id, name) => {
    if (confirm) {
      phoneService
        .deletePhone(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id))
          setMessage([`Deleted ${name.name}`, "success"])
          setTimeout(() => {
            setMessage(["", ""])
          }, 5000)
        })
        .catch((error) => {
          setPersons(persons.filter((person) => person.id !== id))
          setMessage([
            `Information of  ${name.name} has already been removed from server`,
            "error",
          ])
          setTimeout(() => {
            setMessage(["", ""])
          }, 5000)

          console.log(error)
        })
    }
  }

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
        handleUpdateEntry(existingName, newNumber)
      }
      setNewName("")
      setNewNumber("")
      return
    } else {
      handleAddEntry(newName, newNumber)
    }
  }

  const deleteName = (id) => {
    const personToDelete = persons.find((person) => person.id === id)
    const confirm = window.confirm(`delete ${personToDelete.name} ?`)
    if (confirm) {
      handleDeleteEntry(id, personToDelete)
    }
    return
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
        <Message message={message} />

        <Filter onFilterChange={handleFilterChange} />

        <h1>Add a new</h1>

        <PersonForm
          onAddName={addName}
          newName={newName}
          onNameChange={handleNameChange}
          newNumber={newNumber}
          onNumberChange={handleNumberChange}
        />

        <h3>Numbers</h3>

        <Persons
          displayedPersons={displayedPersons}
          onDeleteName={deleteName}
        />
      </div>
    </>
  )
}

export default App
