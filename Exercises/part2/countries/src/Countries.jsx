import { useState } from "react"
import Weather from "./Weather"

const Countries = ({ searchInput, filteredCountries }) => {
  const [toggleDetails, setToggleDetails] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(null)

  const findCountry = (name) => {
    const countryFound = filteredCountries.find(
      (country) => country.name.common === name
    )

    setSelectedCountry(countryFound)
  }
  return (
    <>
      {!searchInput ? (
        <div>Type the name of a country</div>
      ) : filteredCountries.length > 10 ? (
        <div>too many matches,specify another filter</div>
      ) : filteredCountries.length === 0 ? (
        <div>No match found</div>
      ) : toggleDetails ? (
        <CountryDetails
          country={selectedCountry}
          onToggleDetails={setToggleDetails}
        />
      ) : (
        <ul>
          {filteredCountries.map((country) => (
            <CountriesList
              key={country.area}
              name={country.name.common}
              onToggleDetails={setToggleDetails}
              findCountry={findCountry}
            />
          ))}
        </ul>
      )}
    </>
  )
}

export default Countries

const CountriesList = ({ name, onToggleDetails, findCountry }) => {
  const handleClick = () => {
    onToggleDetails((prev) => !prev)
    findCountry(name)
  }
  return (
    <li>
      {name}
      <button onClick={handleClick}>Show</button>
    </li>
  )
}

const CountryDetails = ({ country, onToggleDetails }) => {
  const languages = Object.values(country.languages)
  console.log("Country", country)
  console.log("languages", languages)
  return (
    <div key={country.area}>
      <h1>{country.name.common}</h1>
      <div>Capital : {country.capital[0]}</div>
      <div>Area: {country.area}</div>
      <h2>languages</h2>
      <ul>
        {languages.map((language, id) => (
          <li key={id}>{language}</li>
        ))}
      </ul>

      <img src={country.flags.png} alt={country.flags.alt} />

      <Weather country={country} />

      <br />
      <button onClick={() => onToggleDetails((prev) => !prev)}>
        Switch to countries list
      </button>
    </div>
  )
}
