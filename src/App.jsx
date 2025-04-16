import Weather from "./components/Weather.jsx";
import { useState } from "react";
import { mockData } from "./mockData.js";
import Header from "./components/Header.jsx";

export default function App() {
  const [data, setData] = useState(mockData);
  const [isCelsius, setIsCelsius] = useState(
    localStorage.getItem("isCelsius") === "true",
  );

  function setDegree() {
    localStorage.setItem("isCelsius", !isCelsius);
    setIsCelsius(!isCelsius);
  }

  function fetchWeather(query) {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_SECRET}&q=${query}&aqi=yes`,
      {
        headers: {
          Accept: "application/json",
        },
      },
    )
      .then((res) => res.json())
      .then((value) => setData(value));
  }

  return (
    <>
      <Header
        isCelsius={isCelsius}
        setIsCelsius={setDegree}
        onSearch={fetchWeather}
      />
      <main>
        <Weather data={data} isCelsius={isCelsius} />
      </main>
    </>
  );
}
