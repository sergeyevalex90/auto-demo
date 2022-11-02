import sliderImg from '../../../assets/img/bmw-5-yellow.jpg';
import './Slider.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Slider = (props) => {
  return (
    <div className="wrapper">
      <div className="slider">
        <div className="slider-img">
          <img src={sliderImg} alt="BMW 5 series" />
        </div>
        <div className="slider-desc">
          <div className="slider-circle blue"></div>
          <div className="slider-circle dark-blue"></div>
          <div className="slider-info">
            <div className="slider-model-name">BMW X300</div>
            <div className="slider-model-year">2023 edition</div>
            <Button href="#" variant="contained" size="small">
              Read more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
