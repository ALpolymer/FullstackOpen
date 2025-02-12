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
  console.log("Country", country)
  return country.map((item) => (
    <div key={item.area}>
      <h1>{item.name.common}</h1>
      <p>capital : {item.capital[0]}</p>
      <h2>languages</h2>
      {console.log(item.languages)}
    </div>
  ))
}
