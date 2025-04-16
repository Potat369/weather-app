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

  return (
    <>
      <Header isCelsius={isCelsius} setIsCelsius={setDegree} />
      <main>
        <Weather data={data} isCelsius={isCelsius} />
      </main>
    </>
  );
}
