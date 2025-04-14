import Weather from "./components/Weather.jsx";

const mockData = {
  condition: "OVERCAST",
  humidity: 62,
  pressure: 756,
  c: 15,
  f: 59,
  windSpeed: 4,
  windDirection: "SOUTH",
  dewPoint: 7.7,
  feelsLike: 12,
  uv: 4,
  icon: "https://yastatic.net/weather/i/icons/confident/dark/svg/ovc.svg",
  pollution: {
    aqi: 37,
  },
};

export default function App() {
  return (
    <>
      <Weather data={mockData} />
    </>
  );
}
