import { useState } from "react"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood((prev) => prev + 1)
  }
  const handleClickNeutral = () => {
    setNeutral((prev) => prev + 1)
  }

  const handleClickBad = () => {
    setBad((prev) => prev + 1)
  }

  function calcStatisticks() {
    const all = good + neutral + bad
    const positive = `${all === 0 ? 0 : ((good / all) * 100).toFixed(2)}%`
    let avg = all === 0 ? 0 : ((good * 1 + bad * -1) / all).toFixed(2)

    return [all, avg, positive]
  }

  const statisticks = calcStatisticks()

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={handleClickGood} />
      <Button text="neutral" onClick={handleClickNeutral} />
      <Button text="bad" onClick={handleClickBad} />
      <h1>Statistics</h1>
      {statisticks[0] === 0 ? (
        <div>No feedback given</div>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={statisticks[0]}
          average={statisticks[1]}
          positive={statisticks[2]}
        />
      )}
    </div>
  )
}

export default App

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <table>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </table>
  )
}
const StatisticLine = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text} </td>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}
