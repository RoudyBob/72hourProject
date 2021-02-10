import React, {useState, useEffect} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

const Zomato = (props) => {

    const [restaurants, setRestaurants] = useState([]);
    const key = '26dee6c1e5284b5ec886091481c73d4d';
    const url = `https://developers.zomato.com/api/v2.1/geocode?lat=${props.latitude}&lon=${props.longitude}`

    var cardStyle = {
        "margin": "30px",
        "width": "300px",
        "backgroundColor": "darkgoldenrod"
      };

    const fetchRestaurants = () => {
        fetch(url, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application-json',
                'user-key': key
            })
        })
        .then ((response) => response.json())
        .then ((data) => {
            console.log(data)
            setRestaurants(data.nearby_restaurants)
            console.log(restaurants)
        })
    }

    useEffect(() => {
        fetchRestaurants();
      }, []);

    return ( 
        <Card body inverse sm="8" style={cardStyle}>
        <CardImg top width="100%" src="https://images.adsttc.com/media/images/5f74/4cdd/63c0/17ae/2200/0589/slideshow/shutterstock_1768860587.jpg" alt="Picture of Outdoor Restaurant" />
        <CardBody>
          <CardTitle tag="h5">Restaurants Near You</CardTitle>
          <CardSubtitle tag="h6" className="mb-2"><i>Great places to eat!</i></CardSubtitle>
          <CardText>
              <ul>
                {restaurants.map(restaurant => (
                    <li>{restaurant.restaurant.name}</li>
                ))}
              </ul>
          </CardText>
        </CardBody>
      </Card>
     );
}
 
export default Zomato;