import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faCompress,
  faDroplet,
  faSun,
  faVirus,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

export default function Weather({ data, isCelsius }) {
  const degree = isCelsius ? "C" : "F";

  return (
    <>
      <section className="box">
        <div className="main">
          <div>
            <div className="prec">{data.location.name}</div>
            <div className="temp">
              {isCelsius ? data.current.temp_c : data.current.temp_f}°{degree}
            </div>
            <div className="prec">{data.current.condition.text}</div>
            <div className="like">
              Feels like{" "}
              {isCelsius ? data.current.feelslike_c : data.current.feelslike_f}°
              {degree}
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faSun} />
          </div>
        </div>
      </section>
      <section className="box">
        <div className="columns">
          <div>
            <div>
              <FontAwesomeIcon icon={faDroplet} /> Humidity
            </div>
            <div>{data.current.humidity}%</div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faCompress} /> Pressure
            </div>
            <div>{data.current.pressure_mb} mb</div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faWind} /> Wind Speed
            </div>
            <div>{data.current.wind_kph} km/h</div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faCircleNotch} /> Dew Point
            </div>
            <div>
              {isCelsius ? data.current.dewpoint_c : data.current.dewpoint_f}°
              {degree}
            </div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faSun} /> UV Index
            </div>
            <div>{data.current.uv} of 11</div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faVirus} /> AQI
            </div>
            <div>{data.current.air_quality.pm10}</div>
          </div>
        </div>
      </section>
    </>
  );
}
