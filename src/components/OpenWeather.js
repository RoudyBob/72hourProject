import React from 'react';

const OpenWeather = (props) => {

    const key = 'f8c31fa5e8ede3bd259010a4a6518ce6';
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const longitude = props.longitude;
    const latitude = props.latitude;

    const url = `${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${key}`

    console.log(`URL for Weather: ${url}`);

    // const fetchWeather = () => {
    //     fetch(url) = ()
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    //     .err((err) => console.log(err))
    // }

    return ( 
        <>
        <p>Hello from OpenWeather!</p>
        {/* <button onClick={fetchWeather}>Click for Weather</button> */}
        </>
     );
}
 
export default OpenWeather;