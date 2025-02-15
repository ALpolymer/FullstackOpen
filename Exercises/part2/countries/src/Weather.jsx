import { useEffect, useState } from "react"
import { getCityWeatherData } from "./api"
import axios from "axios"
// const key = import.meta.env.VITE_OPENWEATHERMAP_API_KEY
// const baseUrl = "https://api.openweathermap.org/data/2.5/weather?"

const Weather = ({ country }) => {
  const [weatherData, setWeatherData] = useState({ allData: null, icon: "" })

  const city = country.capital[0]

  useEffect(() => {
    getCityWeatherData(city).then((data) => {
      setWeatherData({ allData: data, icon: data.weather[0].icon })
    })
  }, [city])

  if (!weatherData.allData) {
    return <h1>Loading....</h1>
  } else {
    console.log("datafetched", weatherData)
  }
  return (
    <div>
      <h1>Weather in {city}</h1>
      <p>Temperature:{weatherData.allData.main.temp} Celsius</p>

      <img
        src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
        alt="Weather icon"
      />

      <p>Wind: {weatherData.allData.wind.speed}m/s</p>
    </div>
  )
}

export default Weather
