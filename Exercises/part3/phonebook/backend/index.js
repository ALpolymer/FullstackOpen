const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
morgan.token("body", (req) => {
  return JSON.stringify(req.body)
})

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
)

let entries = [
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

const generateId = () => Math.floor(Math.random() * 10 ** 6)

const duplicateChecker = (name) => {
  const checker = entries.some((e) => e.name === name)
  return checker
}

app.get("/", (req, res) => {
  res.send("Welcome to Phonebook App!!!")
})

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

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id
  entries = entries.filter((e) => e.id !== id)
  res.status(204).end()
})

app.post("/api/persons", (req, res) => {
  const entry = req.body

  if (!entry.name) {
    return res.status(400).json({ error: "entry name is missing" })
  }

  if (!entry.number) {
    return res.status(400).json({ error: "entry number is missing" })
  }

  if (entries.some((e) => e.name === entry.name)) {
    return res.status(400).json({ error: "entry name already exists" })
  }

  const newEntry = {
    id: generateId(),
    name: entry.name,
    number: entry.number,
  }

  entries = [...entries, newEntry]
  res.json(newEntry)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
