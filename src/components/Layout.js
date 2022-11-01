import React from 'react';
import Header from '../components/Layout/Header/Header';
import Slider from '../components/Layout/Slider/Slider';
import About from '../components/Layout/About/About';
import Models from './Layout/Models/Models';
import Footer from './Layout/Footer/Footer.js';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <About />
      <Models />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
