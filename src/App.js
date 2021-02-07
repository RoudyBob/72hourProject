import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import JobsList from './components/JobsList';
import Nasa from './components/Nasa';
import OpenWeather from './components/OpenWeather';
import Zomato from './components/Zomato';

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
    <div>
      {findMe()}
      <JobsList longitude={longitude} latitude={latitude}/>
      <Nasa longitude={longitude} latitude={latitude}/>
      <OpenWeather longitude={longitude} latitude={latitude}/>
      <Zomato longitude={longitude} latitude={latitude}/>
    </div>
  );
}

export default App;
