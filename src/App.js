import React, {useState} from 'react';

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

  //location function here
  function findMe() {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
  };

  return (
    <div className="main"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
            <div className="mainDiv">
            {findMe()}
            <TeamHeader />
          <Row
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <JobsList longitude={longitude} latitude={latitude}/>
      <Card body inverse sm="8"
      style={{
        margin: "30px",
        width: "300px",
        backgroundColor: "darkgoldenrod"
      }}>
        <CardImg top width="100%" src="https://picsum.photos/300/200" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Bob</CardTitle>
          <CardSubtitle tag="h6" className="mb-2"><i>Bob's app will go here!</i></CardSubtitle>
          <CardText><Nasa longitude={longitude} latitude={latitude}/></CardText>
        </CardBody>
      </Card>
      <Card body inverse sm="8"
      style={{
        margin: "30px",
        width: "300px",
        backgroundColor: "darkred"
      }}>
        <CardImg top width="auto" height="100%" src="https://coalregioncanary.com/wp-content/uploads/2020/08/summer.gif" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Check your weather!</CardTitle>
          <CardText><OpenWeather longitude={longitude} latitude={latitude}/></CardText>
        </CardBody>
      </Card>
      <Card body inverse sm="8"
      style={{
        margin: "30px",
        width: "300px",
        backgroundColor: "darkgoldenrod"
      }}>
        <CardImg top width="100%" src="https://picsum.photos/300/200" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Mari</CardTitle>
          <CardSubtitle tag="h6" className="mb-2"><i>Mari's app will go here!</i></CardSubtitle>
          <CardText><Zomato longitude={longitude} latitude={latitude}/></CardText>
        </CardBody>
      </Card>
      </Row>
    </div>
    </div>
  );
};

export default App;
