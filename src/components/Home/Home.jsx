import React from 'react';
import About from './About/About';
import PopularModels from './PopularModels/PopularModels';
import Cars from '../../config/Cars';
import MainSlider from './MainSlider/MainSlider';

const Home = (props) => {
  return (
    <React.Fragment>
      <MainSlider />
      <About />
      <PopularModels models={Cars} />
    </React.Fragment>
  );
};

export default Home;
