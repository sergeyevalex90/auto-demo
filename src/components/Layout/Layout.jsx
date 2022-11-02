import React from 'react';
import Slider from './Slider/Slider';
import About from './About/About';
import PopularModels from './PopularModels/PopularModels';
import Cars from '../../config/Cars';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Slider />
      <About />
      <PopularModels models={Cars} />
    </React.Fragment>
  );
};

export default Layout;
