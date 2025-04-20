import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faDownLeftAndUpRightToCenter,
  faDroplet,
  faEye,
  faSun,
  faTemperature0,
  faVirus,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

export default function Weather({ data, isCelsius }) {
  const degree = isCelsius ? "C" : "F";

  return (
    <>
      <section className="box">
        <div className="main">
          <div className="data">
            <div className="like">
              {data.location.name}, {data.location.region},{" "}
              {data.location.country}
            </div>
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
              <FontAwesomeIcon icon={faWind} /> Wind Direction
            </div>
            <div>
              <FontAwesomeIcon
                icon={faArrowDown}
                style={{ rotate: data.current.wind_degree + "deg" }}
              />{" "}
              {data.current.wind_dir}
            </div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} /> Pressure
            </div>
            <div>{data.current.pressure_mb} mb</div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faWind} /> Wind Speed
            </div>
            <div>
              {isCelsius ? data.current.wind_kph : data.current.wind_mph}{" "}
              {isCelsius ? "km/h" : "mph"}
            </div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faEye} /> Visibility
            </div>
            <div>
              {isCelsius ? data.current.vis_km : data.current.vis_miles}{" "}
              {isCelsius ? "km" : "mi"}
            </div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faTemperature0} /> Dew Point
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
              <FontAwesomeIcon icon={faVirus} /> AQI <sup>pm10</sup>
            </div>
            <div>{data.current.air_quality.pm10}</div>
          </div>
        </div>
      </section>
    </>
  );
}
