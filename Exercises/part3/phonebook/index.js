const express = require("express")
const app = express()

app.use(express.json())

const entries = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
]

app.get("/api/info", (req, res) => {
  const entriesLength = entries.length
  const dateTime = new Date().toString()
  res.send(`<p>Phonebook has info for ${entriesLength} people</p>
    <p>${dateTime}</p>
    `)
})

app.get("/api/persons", (req, res) => {
  res.json(entries)
})

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id
  const entry = entries.find((e) => e.id === id)

  if (entry) {
    res.json(entry)
  } else {
    res.status(404).end()
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
