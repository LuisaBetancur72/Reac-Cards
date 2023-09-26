import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./slide.scss";

import Photo22 from '../../assets/images/22.jpeg';
import Photo23 from '../../assets/images/23.jpeg';
import Photo24 from '../../assets/images/24.jpeg';
import Photo25 from '../../assets/images/25.jpeg';
import Photo26 from '../../assets/images/26.jpeg';
import Photo27 from '../../assets/images/27.jpeg';
import Photo28 from '../../assets/images/28.jpeg';
import Photo29 from '../../assets/images/29.jpeg';
import Photo30 from '../../assets/images/30.jpeg';
import Photo31 from '../../assets/images/31.jpeg';

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

function twitter() {
  return (
    <div className='slideContainer' id='slideContainer'>
      <h1></h1>
      <Slider {...settingsLTR}>
        <div>
          <img src={Photo22} alt="Photo 1" />
        </div>
        <div>
          <img src={Photo23} alt="Photo 2" />
        </div>
        <div>
          <img src={Photo24} alt="Photo 3" />
        </div>
        <div>
          <img src={Photo25} alt="Photo 5" />
        </div>
        <div>
          <img src={Photo26} alt="Photo 5" />
        </div>
      </Slider>
      <Slider {...settingsRTL}>
        <div>
          <img src={Photo27} alt="Photo 1" />
        </div>
        <div>
          <img src={Photo28} alt="Photo 2" />
        </div>
        <div>
          <img src={Photo29} alt="Photo 3" />
        </div>
        <div>
          <img src={Photo30} alt="Photo 5" />
        </div>
        <div>
          <img src={Photo31} alt="Photo 5" />
        </div>
        </Slider>
    </div>
  );
}

export default twitter;
