import { useEffect, useState } from "react"
import { getAllCountries } from "./api"
import SearchInput from "./SearchInput"
import Countries from "./Countries"

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

  return (
    <>
      <SearchInput searchInput={searchInput} onInputChange={handleInput} />

      <Countries
        searchInput={searchInput}
        filteredCountries={filteredCountries}
      />
    </>
  )
}

export default App
