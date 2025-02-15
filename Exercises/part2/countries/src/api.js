import axios from "axios"
const countriesUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"
const weatherApiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY
const weatherDataUrl = "https://api.openweathermap.org/data/2.5/weather?"

const getAllCountries = () => {
  const request = axios.get(countriesUrl)
  return request.then((response) => response.data)
}

const getCityWeatherData = (cityName) => {
  const request = axios.get(
    `${weatherDataUrl}q=${cityName}&units=metric&appid=${weatherApiKey}`
  )

  return request.then((response) => response.data)
}

export { getAllCountries, getCityWeatherData }
