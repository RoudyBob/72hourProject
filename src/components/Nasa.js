import React from 'react';

const Nasa = (props) => {

    const key = 'Lx7DCgTyG1k0vhWIc97sYKGYjXyRPQGFIy1IMXw5';
    const baseUrl = 'https://api.nasa.gov/planetary/earth/imagery';
    const longitude = Math.round(props.longitude * 100) / 100;
    const latitude = Math.round(props.latitude * 100) / 100
    const date = "2020-11-28";
    const dim = .10;
    const url = `${baseUrl}?lon=${longitude}&lat=${latitude}&date=${date}&dim=${dim}&api_key=${key}`;
    
    // Output URL to Console Log
    console.log(`URL for API query: ${url}`)

    return ( 
        <>
        <p>Hello from NASA!</p>
        {latitude ? <span>{`Latitude is: ${props.latitude}`}</span> : <span>{`Latidude is: Locating...`}</span>}
        <br />
        {longitude ? <span>{`Longitude is: ${props.longitude}`}</span>: <span>{`Longitude is: Locating...`}</span>}
        <br />
        {longitude ? <img src={url} width="300" /> : <></>}
        </>
     );
}
 
export default Nasa;