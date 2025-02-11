import { useEffect, useState } from "react"
import getAllCountries from "./api"

const App = () => {
  const [countriesList, setCountriesList] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [searchInput, setSearchInput] = useState("")
  useEffect(() => {
    getAllCountries()
      .then((data) => {
        setCountriesList(data)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleInput = (e) => {
    const input = e.target.value
    setSearchInput(input)
    if (countriesList.length !== 0) {
      const filtered = countriesList.filter((country) =>
        country.name.common.toLowerCase().includes(input.trim().toLowerCase())
      )
      setFilteredCountries(filtered)
    }
  }

  console.log("filteredCountries_OUT", filteredCountries)
  return (
    <>
      <h1>hello</h1>
      <span> find countries:</span>
      <input type="text" value={searchInput} onChange={handleInput} />
      {console.log("filteredCountries_RENDERED", filteredCountries)}

      {!searchInput ? (
        <div>no countries</div>
      ) : filteredCountries.length > 10 ? (
        <div>too many matches,specify another filter</div>
      ) : (
        <div>List of countries</div>
      )}
    </>
  )
}

export default App
