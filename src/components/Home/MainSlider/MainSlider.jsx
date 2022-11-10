import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

//Styles
import './MainSlider.css';

//Matertial UI
import Button from '@mui/material/Button';

//Slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//Assets
import sliderImg1 from '../../../assets/img/slides/bmw-5-series-slide.jpg';
import sliderImg2 from '../../../assets/img/slides/bmw-x1-series-slide.jpg';
import sliderImg3 from '../../../assets/img/slides/bmw-7-series-slide.jpg';

class SliderReadMore extends Component {
  render() {
    const { t } = this.props;
    return <span>{t('slider.readMore')}</span>;
  }
}
const ReadMore = withTranslation()(SliderReadMore);

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      lazyLoad: true,
      arrows: false,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="wrapper">
        <div className="slider">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div className="slider-item">
              <div className="slider-img">
                <img src={sliderImg1} alt="BMW 5 series" />
              </div>
              <div className="slider-desc">
                <div className="slider-circle small-circle blue"></div>
                <div className="slider-circle big-circle dark-blue"></div>
                <div className="slider-info">
                  <div className="slider-model-name">BMW 5 Series</div>
                  <div className="slider-model-year">2023 edition</div>
                  <Button href="/models/120" variant="contained" size="small">
                    <ReadMore />
                  </Button>
                </div>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-img">
                <img src={sliderImg2} alt="BMW X1 series" />
              </div>
              <div className="slider-desc">
                <div className="slider-circle small-circle brown"></div>
                <div className="slider-circle big-circle dark-brown"></div>
                <div className="slider-info">
                  <div className="slider-model-name">BMW X1 Series</div>
                  <div className="slider-model-year">2023 edition</div>
                  <Button href="/models/120" variant="contained" size="small">
                    <ReadMore />
                  </Button>
                </div>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-img">
                <img src={sliderImg3} alt="BMW 7 series" />
              </div>
              <div className="slider-desc">
                <div className="slider-circle small-circle gray"></div>
                <div className="slider-circle big-circle dark-gray"></div>
                <div className="slider-info">
                  <div className="slider-model-name">BMW 7 Series</div>
                  <div className="slider-model-year">2023 edition</div>
                  <Button href="/models/120" variant="contained" size="small">
                    <ReadMore />
                  </Button>
                </div>
              </div>
            </div>
          </Slider>
          <div className="slider-btns">
            <div className="arrow arrow-left" onClick={this.previous}></div>
            <div className="arrow arrow-right" onClick={this.next}></div>
          </div>
        </div>
      </div>
    );
  }
}
