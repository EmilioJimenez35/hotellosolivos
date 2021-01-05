import React from 'react';
import './App.css';
import Menu from './Components/Navbar/Nabvar';
import Social from './Components/socialBar/Socialbar';
import Calesita from './Components/Carousel/Carrusel';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Social />
      <Calesita />
    </React.Fragment>
  );
}

export default App;
