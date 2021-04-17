import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../components/Home.css';
 
const home = () => {
    return (
<div class="row">

<div className="split left">
    <div className="centered">
    <h1> Invest in founders building the future </h1>
    <p>small businesses you believe in Africa</p>
    <button class="btn">Join the movement</button>

    </div>
</div>


<div className="split right">

    <h2>Working togther</h2>
    <div className="centered">
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
    //  src={require('/images/tech.jpg')}
      src={`${process.env.PUBLIC_URL}/images/sheep.jpg`} 

      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Farm and Agriculture</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={`${process.env.PUBLIC_URL}/images/tech.jpg`} 
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>The Technology is Changing the world</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>


    <img
      className="d-block w-100"
      src={`${process.env.PUBLIC_URL}../images/people.jpg`} 
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>School is the weapon against poverty</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
</div>


    
</div>
      

    );
}
 
export default home;