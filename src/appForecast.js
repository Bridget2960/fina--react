import axios from "axios";
import React, { useState } from "react";

export default function AppForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleSubmit(response) {
    console.log(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="AppForecast">
        <div className="row">
          <div className="col">
            <ul>
              <li className="weekDay">Wednesday</li>
              <li>
                <div>Icon</div>
              </li>
              <li>9</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "1b4oade44afe2b7ce1f6c19030d6t0b5";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.cityName}&key=${apiKey}`;

    axios.get(apiUrl).then(handleSubmit);
    console.log(apiUrl);
    return null;
  }
}
