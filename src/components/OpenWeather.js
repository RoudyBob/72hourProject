import React, { useState, useEffect } from "react";
import ForecastDisplay from "./weatherDisplay";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Row
} from 'reactstrap';

const OpenWeather = (props) => {
  const [forecast, setForecast] = useState("");
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsius, setCelsius] = useState("");
  const [showFahrenheit, setShowFahrenheit] = useState (true);
  const apiKey = "69d1b6b1d0ad2eb70808d612c592235b";


  useEffect(() => {
    fetcher();
    fetcherTwo();
  }, []);

  const fetcher = () => {
    console.log("Hello");
    console.log("Testing");
    console.log("Testing 4");

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
      <Card body inverse sm="8"
      style={{
        margin: "30px",
        width: "300px",
        backgroundColor: "darkred"
      }}>
        <CardImg top width="auto" height="100%" src="https://coalregioncanary.com/wp-content/uploads/2020/08/summer.gif" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Check your weather!</CardTitle>
          <CardText><ForecastDisplay  showFahrenheit = {showFahrenheit} forecast = {forecast}/>
          <Button outline color="warning" onClick={handleToggle}>
        { !showFahrenheit ? "Click for Celsius" : "Click for Fahrenheit" }
      </Button></CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default OpenWeather;
