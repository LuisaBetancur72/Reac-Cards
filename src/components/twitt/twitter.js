import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./slide.scss";
import {  Modal, Box, Button } from "@mui/material";

const settingsLTR = {
  infinite: true,
  speed: 800,
  slidesToShow: 4,  
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1590,
};

export const twitter=({postsParam}) =>{

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (posts) => {
    setSelectedService(posts);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    setModalOpen(false);
  };

  return (
    <div className='slideContainer' id='slideContainer'>
      <h1></h1>
      <Slider {...settingsLTR}>
        <div>
        {postsParam.length > 0 ? (
          postsParam.map((posts) => 
            <div key={posts._id} onClick={() => handleOpenModal(posts)}>
              <img src={posts.avatar} alt={posts.title} />                          
              </div>
          )
        ) : (
         <p>No hay servicios</p>
        )}
        </div>
        <div>
          <img src={Photo2} alt="Photo 2" />
        </div>
        <div>
          <img src={Photo3} alt="Photo 3" />
        </div>
      </Slider>
    
    </div>
  );
};

