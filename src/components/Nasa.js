import React, {useState, useEffect} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

const Nasa = (props) => {

    const [imgUrl, setImgUrl] = useState('');

    const key = 'Lx7DCgTyG1k0vhWIc97sYKGYjXyRPQGFIy1IMXw5';
    const baseUrl = 'https://efa-cors-anywhere.herokuapp.com/https://api.nasa.gov/planetary/earth/assets';
    const longitude = Math.round(props.longitude * 100) / 100;
    const latitude = Math.round(props.latitude * 100) / 100
    const date = "2020-11-28";
    const dim = .10;
    const url = `${baseUrl}?lon=${longitude}&lat=${latitude}&date=${date}&dim=${dim}&api_key=${key}`;
    
    var cardStyle = {
      "margin": "30px",
      "width": "300px",
      "backgroundColor": "darkgoldenrod"
    };

    const fetchImg = () => {
      //console.log(url);
      fetch(url)
      .then((res) => res.json())
      .then((json) => setImgUrl(json.url))
      .catch((err) => console.log(err))
    };

    useEffect(() => {
      fetchImg();
    }, []);

    return (
        <Card body inverse sm="8" style={cardStyle}>
        {longitude ? <CardImg top width="100%" src={imgUrl} alt="Satellite Image of Location" /> : <CardImg top width="100%" src="./assets/satelliteimage.jpeg" alt="Placeholder Image of Satellite" />}
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