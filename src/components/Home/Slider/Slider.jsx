import sliderImg from '../../../assets/img/slides/bmw-5-series-slide.jpg';

//Styles
import './Slider.css';

//Matertial UI
import Button from '@mui/material/Button';

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
            <Button href="/models/120" variant="contained" size="small">
              Read more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
