import { useEffect, useState } from "react"
import axios from "axios"
const key = import.meta.env.VITE_OPENWEATHERMAP_API_KEY
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?"

const Weather = ({ country }) => {
  const [weatherData, setWeatherData] = useState([])

  const city = country.capital[0]

  useEffect(() => {
    axios
      .get(`${baseUrl}q=${city}&units=metric&appid=${key}`)
      .then((response) => console.log(response.data))
  }, [])

  return <h1>Weather in {city}</h1>
}

export default Weather
