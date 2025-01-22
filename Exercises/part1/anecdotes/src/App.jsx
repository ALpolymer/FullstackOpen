import { useState } from "react"

const App = () => {
  const anecdotes = [
    "0:If it hurts, do it more often.",
    "1:Adding manpower to a late software project makes it later!",
    "2:The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "3:Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "4:Premature optimization is the root of all evil.",
    "5:Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "6:Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "7:The only way to go fast, is to go well.",
  ]

  const [selected, setSelected] = useState(0)

  const votesArr = Array.from(Array(anecdotes.length), () => 0)
  console.log(votesArr)

  const handleAnecdoteSelection = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleAnecdoteVote = () => {
    console.log(`voted ${selected}`)
  }
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Has {votesArr[selected]} votes</p>
      <Button text={"vote"} onClick={handleAnecdoteVote} />
      <Button text={"next anecdote"} onClick={handleAnecdoteSelection} />
    </div>
  )
}

export default App

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}
