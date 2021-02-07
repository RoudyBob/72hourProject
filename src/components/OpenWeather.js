import React, { useState } from 'react';
import { Button } from 'reactstrap';

const OpenWeather = (props) => {

    const [weather, setWeather] = useState('');
    const apiKey = "69d1b6b1d0ad2eb70808d612c592235b";


    const fetcher = (e) => {
        e.preventDefault();

          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}&units=imperial`)
           .then(res => res.json())
           .then(json => {
            console.log(json)
            setWeather(json);
           })
         }

    return ( 
        <div>
            {weather.main ? <p>The weather in {weather.name} is <b>{weather.main.temp}° F</b> with {weather.weather[0].description}.</p> : <><br /><br /></>}
            {weather.main ? <p><i>High:</i> <b>{weather.main.temp_max}° F</b></p> : <><br /><br /></>}
            {weather.main ? <p><i>Low:</i> <b>{weather.main.temp_min}° F</b></p> : <><br /><br /></>}
        <Button outline color="warning" onClick={fetcher}>Fahrenheit</Button>
        </div>
     );
}
 
export default OpenWeather;