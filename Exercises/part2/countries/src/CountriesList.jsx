const CountriesList = ({ searchInput, filteredCountries }) => {
  return (
    <>
      {!searchInput ? (
        <div>Type the name of a country</div>
      ) : filteredCountries.length > 10 ? (
        <div>too many matches,specify another filter</div>
      ) : filteredCountries.length === 0 ? (
        <div>No match found</div>
      ) : filteredCountries.length === 1 ? (
        <CountryDetails country={filteredCountries} />
      ) : (
        <ul>
          {filteredCountries.map((country) => (
            <CountryName key={country.area} name={country.name.common} />
          ))}
        </ul>
      )}
    </>
  )
}

export default CountriesList

const CountryName = ({ name }) => {
  return <li>{name}</li>
}

const CountryDetails = ({ country }) => {
  const countryData = country[0]
  const languages = Object.values(countryData.languages)
  console.log("Country", country)
  console.log("languages", languages)
  return (
    <div key={countryData.area}>
      <h1>{countryData.name.common}</h1>
      <p>capital : {countryData.capital[0]}</p>
      <h2>languages</h2>
      <ul>
        {languages.map((language, id) => (
          <li key={id}>{language}</li>
        ))}
      </ul>
    </div>
  )
}
