import "./Header.css";

export default function Header({ isCelsius, setIsCelsius, onSearch }) {
  function onSubmit(ev) {
    ev.preventDefault();

    onSearch(ev.target[0].value);
  }

  return (
    <header>
      <div>Weather App</div>
      <form onSubmit={onSubmit}>
        <input name="city" />
        <button type="submit">Search</button>
      </form>
      <button className="degree" onClick={setIsCelsius}>
        {isCelsius ? "C" : "F"}°
      </button>
    </header>
  );
}
