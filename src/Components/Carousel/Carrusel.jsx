import React from "react";
import { Carousel } from "react-bootstrap";
import spa from "./spa.jpg";
import motogp from "./motogp.jpg";
import piles from "./piles.jpg";
import plan from "./plan.jpg";
import './Carrusel.css';

const Calesita = () => {
    return (
<Carousel>
  <Carousel.Item>
    <img
      className=" carrusel d-block w-100"
      src={spa}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carrusel d-block w-100"
      src={piles}
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carrusel d-block w-100"
      src={motogp}
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carrusel d-block w-100"
      src={plan}
      alt="Four slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    );
};

export default Calesita;