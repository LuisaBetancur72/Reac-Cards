import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import "./slide.scss";
import Photo1 from '../../assets/images/1.jpeg';
import Photo2 from '../../assets/images/2.jpeg';
import Photo3 from '../../assets/images/3.jpeg';
import Photo5 from '../../assets/images/5.jpeg';
import Photo6 from '../../assets/images/6.jpeg';
import Photo7 from '../../assets/images/7.jpeg';
import Photo8 from '../../assets/images/8.jpeg';
import Photo9 from '../../assets/images/9.jpeg';
import Photo10 from '../../assets/images/10.jpeg';
import Photo11 from '../../assets/images/11.jpeg';

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

function instagram() {
  return (
    <div className='slideContainer' id='slideContainer'>
      <h1></h1>
      <Slider {...settingsLTR}>
        <div>
          <img src={Photo6} alt="Photo 1" />
        </div>
        <div>
          <img src={Photo7} alt="Photo 2" />
        </div>
        <div>
          <img src={Photo8} alt="Photo 3" />
        </div>
        <div>
          <img src={Photo9} alt="Photo 5" />
        </div>
        <div>
          <img src={Photo10} alt="Photo 5" />
        </div>
      </Slider>
      <Slider {...settingsRTL}>
        <div>
          <img src={Photo1} alt="Photo 1" />
        </div>
        <div>
          <img src={Photo2} alt="Photo 2" />
        </div>
        <div>
          <img src={Photo3} alt="Photo 3" />
        </div>
        <div>
          <img src={Photo5} alt="Photo 5" />
        </div>
        <div>
          <img src={Photo11} alt="Photo 5" />
        </div>
        </Slider>
    </div>
    
  );
}

export default instagram;