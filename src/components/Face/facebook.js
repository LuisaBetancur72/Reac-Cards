import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



import "./slide.scss";

import Photo12 from '../../assets/images/12.jpeg';
import Photo13 from '../../assets/images/13.jpeg';
import Photo14 from '../../assets/images/14.jpeg';
import Photo15 from '../../assets/images/15.jpeg';
import Photo16 from '../../assets/images/16.jpeg';
import Photo17 from '../../assets/images/17.jpeg';
import Photo18 from '../../assets/images/18.jpeg';
import Photo19 from '../../assets/images/19.jpeg';
import Photo20 from '../../assets/images/20.jpeg';
import Photo21 from '../../assets/images/21.jpeg';

const settingsLTR = {
  infinite: true,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1590,
  rtl: false,
};
const settingsRTL = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1590,
  rtl: true,
};

function facebook() {
  return (
    <div className='slideContainer' id='slideContainer'>
      <h1></h1>
      <Slider {...settingsLTR}>
        <div>
          <img src={Photo12} alt="Photo 1" />
        </div>
        <div>
          <img src={Photo13} alt="Photo 2" />
        </div>
        <div>
          <img src={Photo14} alt="Photo 3" />
        </div>
        <div>
          <img src={Photo15} alt="Photo 5" />
        </div>
        <div>
          <img src={Photo16} alt="Photo 5" />
        </div>
      </Slider>
      <Slider {...settingsRTL}>
        <div>
          <img src={Photo17} alt="Photo 1" />
        </div>
        <div>
          <img src={Photo18} alt="Photo 2" />
        </div>
        <div>
          <img src={Photo19} alt="Photo 3" />
        </div>
        <div>
          <img src={Photo20} alt="Photo 5" />
        </div>
        <div>
          <img src={Photo21} alt="Photo 5" />
        </div>
        </Slider>
    </div>
  );
}

export default facebook;
