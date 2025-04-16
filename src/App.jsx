import Weather from "./components/Weather.jsx";
import { useState } from "react";
import { mockData } from "./mockData.js";

export default function App() {
  const [data, setData] = useState(mockData);
  const [isCelsius, setIsCelsius] = useState(
    localStorage.getItem("isCelsius") | true,
  );

  return (
    <>
      <main>
        <Weather data={data} isCelsius={isCelsius} />
      </main>
    </>
  );
}
