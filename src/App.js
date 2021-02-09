import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import JobsList from './components/JobsList';
import Nasa from './components/Nasa';
import OpenWeather from './components/OpenWeather';
import Zomato from './components/Zomato';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Row
} from 'reactstrap';
import TeamHeader from './components/TeamHeader';

// let express = require('express');
// let app = express();
// app.use(require("./middleware/headers"));

function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  var divStyle = {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  };

  // UseEffect async to get location
  useEffect(async () => {
    try {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);})
    } catch (error) {
        console.log(error);
    }
  }, []);

  return (
    <div className="main" style={divStyle}>
      <div className="mainDiv">
      <TeamHeader />
      <Row style={divStyle}>
        { longitude ? <JobsList longitude={longitude} latitude={latitude}/> : <></> }
        { longitude ? <Nasa longitude={longitude} latitude={latitude}/> : <></> }
        { longitude ? <OpenWeather longitude={longitude} latitude={latitude}/> : <></> }
        { longitude ? <Zomato longitude={longitude} latitude={latitude}/> : <></> }
      </Row>
    </div>
    </div>
  );
};

export default App;
