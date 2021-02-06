import React from 'react';

const Nasa = (props) => {
    return ( 
        <>
        <p>Hello from NASA!</p>
        {`Latitude is: ${props.latitude}`}
        <br />
        {`Longitude is: ${props.longitude}`}
        </>
     );
}
 
export default Nasa;