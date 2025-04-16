import "./Header.css";

export default function Header({ isCelsius, setIsCelsius }) {
  return (
    <header>
      <div>Weather App</div>
      <form>
        <input />
        <button type="submit">Search</button>
      </form>
      <button className="degree" onClick={() => setIsCelsius(!isCelsius)}>
        {isCelsius ? "C" : "F"}°
      </button>
    </header>
  );
}
