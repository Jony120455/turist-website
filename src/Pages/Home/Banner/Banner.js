import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Banner.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
    <div>
      <Container>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 opacity-75"
      src="https://kundutirthoovraman.com/wp-content/uploads/2018/05/kunduotirthovroman-facebook-banner.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <div className="text-warning  fs-3 fw-bold">
      <h3>KUNDU</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 opacity-75"
      src="https://www.clockenstay.com/medias/slide/big/3/slide1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <div className="text-warning  fs-3 fw-bold">
      <h3>JAY VEER TOURS & TRAVELS</h3>
      <p>consectetur adipiscing elitJayveer Tours & Travels is an Establish Travel Agency in Ahmedabad Which deals in All Travel Services.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 opacity-75"
      src="https://lh3.googleusercontent.com/proxy/Bgx2bDMMXGdkISeoRXTQDPOaRgYlFUD-3bUocFuILX4YAPz5m9R_8XJQ1rSuuOtaQz87WD3T_ypHPi8lkZCTvGp6yg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="text-warning  fs-3 fw-bold">
      <h3>ACTIVITY AND TOURS</h3>
      <p>A DREAM STAY AT THE BEST PRICE.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Container>
    </div>
  );
};

export default Banner;
