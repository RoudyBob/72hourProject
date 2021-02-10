import React, {useState, useEffect} from 'react';
import { FormGroup } from 'reactstrap';
// import RestaurantDisplay from 
import {
    Card, Button, CardImg,  CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Row
} from 'reactstrap';


const Zomato = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    // const [] = useState('');
    // const [] = useState("");
    // const [] = useState (true);
    // const [] = apiKey = "0f1ddcd1038bd92c020b48ad309b2600";
    const url = `https://developers.zomato.com/api/v2.1/geocode?lat=${props.latitude}&lon=${props.longitude}`;
 
    const fetcher = () => {
    console.log("I am hungry!");
    fetch(url, {
        headers: {"user-key": "dd3a558f48b1a8d01d37fe7e20a2d4bd", "content-type": "application/json"}})
    .then(res => res.json())
    .then(json => {
      
    
        console.log('This is the json', json.nearby_restaurants);
        setRestaurants(json.nearby_restaurants);
        
    });
    };
    
 const handleSubmit = (e) => {
   e.preventDefault();
   fetcher();
 }

    return ( 
        <Card body inverse sm="8"
        style={{
            margin: "30px",
            width: "300px",
            backgroundColor: "darkgoldenrod"
        }} >
      <CardImg top width="100%" height="100%" src="https://images.pexels.com/photos/3490367/pexels-photo-3490367.jpeg" alt="Picture of restaurant" />
            <CardBody>
          <CardTitle tag="h5">FIND A RESTAURANT!</CardTitle>
          <CardText><p>Find restaurants near you!</p></CardText>
          <form onSubmit={(e) => handleSubmit(e)}>
          

          <Button outline color="danger" onClick={fetcher}>click</Button>
          {restaurants.map(result=> {
            return (
              <div>
                <p>Restaurant Name: {result.restaurant.name}</p>
              </div>
            )})};
            </form>
          </CardBody>
      </Card>
     
        );
            }
    
 
export default Zomato;