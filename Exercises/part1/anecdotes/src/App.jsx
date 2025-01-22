import { useState } from "react"

/**
 * App component renders a view with the following features:
 *   1. A randomly selected anecdote is displayed.
 *   2. The user can vote for the currently selected anecdote.
 *   3. The user can select a new anecdote to be displayed.
 *   4. The highest rated anecdote is displayed at the bottom of the page.
 */
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    Array.from(Array(anecdotes.length), () => 0)
  )

  // Randomly selects an anecdote to be displayed.
  const handleAnecdoteSelection = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  //Increases the vote count of the currently selected anecdote by 1.
  const handleAnecdoteVote = () => {
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
  }

  return (
    <div>
      <SelectedAnecdote
        votes={votes}
        selected={selected}
        anecdotes={anecdotes}
      />
      <Button text={"vote"} onClick={handleAnecdoteVote} />
      <Button text={"next anecdote"} onClick={handleAnecdoteSelection} />
      <TopAnecdote votes={votes} anecdotes={anecdotes} />
    </div>
  )
}
export default App

//Renders a button element.
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}

//Renders the anecdote with the most votes.
const TopAnecdote = ({ votes, anecdotes }) => {
  const maxVote = [...votes].sort((a, b) => b - a)[0]
  const indexOfMax = votes.indexOf(maxVote)

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      {maxVote === 0 ? (
        <div>Please vote for the anecdote of the day</div>
      ) : (
        <>
          <div>{anecdotes[indexOfMax]}</div>
          <div>Has {votes[indexOfMax]} votes</div>
        </>
      )}
    </div>
  )
}

// Renders the selected anecdote and its number of votes.
const SelectedAnecdote = ({ votes, anecdotes, selected }) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>Has {votes[selected]} votes</div>
    </div>
  )
}
