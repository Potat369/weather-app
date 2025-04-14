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

export default function Weather({ data }) {
  return (
    <>
      <section className="box">
        <div className="main">
          <div>
            <div className="temp">{data.c}°C</div>
            <div className="prec">Cloudy</div>
            <div className="like">Feels like {data.feelsLike}°C</div>
          </div>
          <div>
            <img src={data.icon} className="icon" />
          </div>
        </div>
      </section>
      <section className="box">
        <div className="columns">
          <div>
            <div>
              <FontAwesomeIcon icon={faDroplet} /> Humidity
            </div>
            <div>{data.humidity}%</div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faCompress} /> Pressure
            </div>
            <div>{data.pressure} mb</div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faWind} /> Wind Speed
            </div>
            <div>{data.windSpeed} km/h</div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faCircleNotch} /> Dew Point
            </div>
            <div>{data.dewPoint}°</div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faSun} /> UV Index
            </div>
            <div>{data.uv} of 11</div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon icon={faVirus} /> AQI
            </div>
            <div>{data.pollution.aqi}</div>
          </div>
        </div>
      </section>
    </>
  );
}
