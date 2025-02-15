import { useEffect, useState } from "react"
import { getCityWeatherData } from "./api"
// import axios from "axios"
// const key = import.meta.env.VITE_OPENWEATHERMAP_API_KEY
// const baseUrl = "https://api.openweathermap.org/data/2.5/weather?"

const Weather = ({ country }) => {
  const [weatherData, setWeatherData] = useState([])

  const city = country.capital[0]

  useEffect(() => {
    getCityWeatherData(city).then((data) => {
      setWeatherData(data)
    })
  }, [])
  console.log(weatherData.wind.speed)
  if (weatherData.length === 0) {
    return <h1>Loading....</h1>
  }
  return (
    <div>
      <h1>Weather in {city}</h1>
      <p>Temperature: {weatherData.main.temp} Celsius</p>

      <p>Wind: {weatherData.wind.speed} m/s</p>
    </div>
  )
}

export default Weather
