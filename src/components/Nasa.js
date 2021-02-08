import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

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
        <Card body inverse sm="8" style={{
            margin: "30px",
            width: "300px",
            backgroundColor: "darkgoldenrod"
        }}>
        {longitude ? <CardImg top width="100%" src={url} alt="Satellite Image of Location" /> : <CardImg top width="100%" src="./assets/satelliteimage.jpeg" alt="Placeholder Image of Satellite" />}
        <CardBody>
          <CardTitle tag="h5">NASA Satellite View</CardTitle>
          <CardSubtitle tag="h6" className="mb-2">Your Current Location</CardSubtitle>
          <CardText>
          {latitude ? <span>{`Latitude: ${latitude}`}</span> : <span>{`Latitude: Locating...`}</span>}
        <br />
        {longitude ? <span>{`Longitude: ${longitude}`}</span>: <span>{`Longitude: Locating...`}</span>}
        <br />
          </CardText>
        </CardBody>
      </Card>
     );
}
 
export default Nasa;