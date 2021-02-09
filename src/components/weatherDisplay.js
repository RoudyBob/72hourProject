import React from "react";

const ForecastDisplay = (props) => {
  return (
    <div>
      {props.forecast.main ? (
        <p>
          The weather in {props.forecast.name} is{" "}
          <b>{props.forecast.main.temp}°</b> with{" "}
          {props.forecast.weather[0].description}.
        </p>
      ) : ( null 
      )}
      {props.forecast.main ? (
        <p>
          <i>High:</i> <b>{props.forecast.main.temp_max}°</b>
        </p>
      ) : (
        null
      )}
      {props.forecast.main ? (
        <p>
          <i>Low:</i> <b>{props.forecast.main.temp_min}°</b>
        </p>
      ) : (
        null
      )}
    </div>
  );
};

export default ForecastDisplay;
