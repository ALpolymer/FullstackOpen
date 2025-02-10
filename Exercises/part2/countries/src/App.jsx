import { useEffect, useState } from "react"
import axios from "axios"

const App = () => {
  const [countriesList, setCountriesList] = useState([])
  const [searchInput, setSearchInput] = useState("")
  useEffect(() => {
    console.log("Effect")
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => {
        console.log("Fetched")
        console.log(res.data)
      })
  }, [countriesList])

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchInput(e.target.value)
  }
  const onSearch = (e) => {
    e.preventDefault()
  }
  console.log("DATA", countriesList)
  console.log("Rendered outside")
  return (
    <>
      <h1>hello</h1>
      <form onSubmit={onSearch}>
        find countries:{" "}
        <input type="text" value={searchInput} onChange={handleChange} />
      </form>
      {console.log("Rendered inside")}
    </>
  )
}

export default App
