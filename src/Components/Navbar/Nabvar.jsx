import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import Logo from './Logo.png';
import './navbar.css';

const Menu = () => {
  return (
    <div className="App">
      <div className="barrita d-flex justify-content-center"></div>
      <Navbar className="navbar" expand="lg">
        <Image src={Logo} className="Logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <h5 className="text m-2">HABITACIONES</h5>
            <h5 className="text m-2">PROMOCIONES</h5>
            <h5 className="text m-2">GASTRONOMIA</h5>
            <h5 className="text m-2">GALERIA</h5>
            <h5 className="text m-2">CONTACTO</h5>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="barrita-abajo d-flex justify-content-center"></div>
    </div>
  );
};

export default Menu;
