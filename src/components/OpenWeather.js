import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import ForecastDisplay from "./weatherDisplay";

const OpenWeather = (props) => {
  const [forecast, setForecast] = useState("");
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsius, setCelsius] = useState("");
  const [currentDisplay, setCurrentDisplay] = useState("");
  const [showFahrenheit, setShowFahrenheit] = useState (true);
  const apiKey = "69d1b6b1d0ad2eb70808d612c592235b";


  useEffect(() => {
    fetcher();
    fetcherTwo();
  }, []);

  const fetcher = () => {
    console.log("Hello");

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}&units=imperial`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setForecast(json);
        setFahrenheit(json);
        // if(json.main !== undefined) {
        //celsius = (5 / 9) * (json.main.temp - 32);
        //celsiusMax = (5 / 9) * (json.main.temp_max - 32);
        //celsiusMin = (5 / 9) * (json.main.temp_min - 32);
      });
  };


  const fetcherTwo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCelsius(json);
        // if(json.main !== undefined) {
          //celsius = (5 / 9) * (json.main.temp - 32);
          //celsiusMax = (5 / 9) * (json.main.temp_max - 32);
          //celsiusMin = (5 / 9) * (json.main.temp_min - 32);
        // }
      });
  };

  function handleToggle () {
            setShowFahrenheit(!showFahrenheit)
            showFahrenheit ? setForecast (fahrenheit) : setForecast (celsius)
        }

  return (
    <div>
      <ForecastDisplay  showFahrenheit = {showFahrenheit} forecast = {forecast}/>
      <Button outline color="warning" onClick={handleToggle}>
        { !showFahrenheit ? "Click for Celsius" : "Click for Fahrenheit" }
      </Button>
    </div>
  );
};

export default OpenWeather;
