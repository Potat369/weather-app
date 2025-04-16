import "./Header.css";

export default function Header({ isCelsius, setIsCelsius }) {
  return (
    <header>
      <div>Weather App</div>
      <button onClick={() => setIsCelsius(!isCelsius)}>
        {isCelsius ? "C" : "F"}
      </button>
    </header>
  );
}
