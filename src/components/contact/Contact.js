// Contact.js
import React, { useState } from 'react';
import './styles-contact.scss';

import JD from '../../assets/images/J&D.png'

function Contact() {
  const [showMantenimiento, setShowMantenimiento] = useState(false);
  const [showAsesorias, setShowAsesorias] = useState(false);

  const handleCardClick = () => {
    setShowMantenimiento(!showMantenimiento);
    
  };
  
  const handleCardClick1 = () => {
    setShowAsesorias(!showAsesorias);
    
  };


  

  return (
    <div className="contact-container">
      <div className="card-container">
        {/* Tarjeta de Mantenimiento */}
        <div
          className={`card ${showMantenimiento ? 'active' : ''}`}
          onClick={handleCardClick}
        >
          {/* Contenido de la tarjeta de Mantenimiento */}
          <img
            src="https://static8.depositphotos.com/1432042/938/i/450/depositphotos_9384106-stock-photo-young-engineer.jpg"
            alt="Mantenimiento"
            className="card-image"
          />
          <div className="card-content">
            <h2>Mantenimiento</h2>
          </div>
        </div>

        {/* Tarjeta de Asesorías */}
        <div className={`card ${showAsesorias ? 'active' : ''}`}
          onClick={handleCardClick1}
          >
          {/* Contenido de la tarjeta de Asesorías */}
          <img
            src="https://www.cooptraiss.com/media/com_jbusinessdirectory/pictures/companies/0/cropped-1592835850.jpeg"
            alt="Asesorías"
            className="card-image"
          />
          <div className="card-content">
            <h2>Asesorías</h2>
          </div>
        </div>
      </div>

      {/* Mostrar el componente de Mantenimiento cuando showMantenimiento es true */}
      {showMantenimiento && (
        <div className="additional-cards-column">
          {/* Card 1 */}
          <div className="additional-card">
            <img
              src="https://www.elg-asesores.com/images/joomlart/categories/servicio-mantenimiento_001.jpg"
              alt="Mantenimiento Industrial"
              className="additional-card-image"
            />
            {/* Agrega el contenido relacionado aquí */}
            <h3>Mantenimiento Industrial</h3>
          </div>

          {/* Card 2 */}
          <div className="additional-card">
          <img
              src="https://kleversoft.com/wp-content/uploads/2021/02/mantenimiento-1.jpg"
              alt="Mantenimiento de Hardware"
              className="additional-card-image"
            />
            {/* Agrega el contenido relacionado aquí */}
            <h3>mantenimiento de Hardware</h3>
          </div>

          {/* Card 3 */}
          <div className="additional-card">
          <img
              src="https://peruconstruye.net/wp-content/uploads/2018/11/MANTENIMIENTO-MAQUUINARIA-PESADA.jpg"
              alt="Mantenimiento de maquinaria pesada"
              className="additional-card-image"
            />
            {/* Agrega el contenido relacionado aquí */}
            <h3>Mantenimiento de maquinaria pesada</h3>
          </div>
        </div>
      )}

      {/* Mostrar el componente de Mantenimiento cuando showMantenimiento es true */}
      {showAsesorias && (
        <div className="additional-cards-column1">
          {/* Card 1 */}
          <div className="additional-card1">
            <img
              src={JD}
              alt="Asesoria Contable y Juridica"
              className="additional-card-image"
            />
            {/* Agrega el contenido relacionado aquí */}
            <h3>Asesoria Contable y Juridica</h3>
          </div>

          {/* Card 2 */}
          <div className="additional-card1">
          <img
              src="https://www.comunicare.es/wp-content/uploads/2021/08/asesoria-de-marketing-online.jpg"
              alt="Asesoria en Marketing"
              className="additional-card-image1"
            />
            {/* Agrega el contenido relacionado aquí */}
            <h3>Asesoria en Marketing</h3>
          </div>

          {/* Card 3 */}
          <div className="additional-card1">
          <img
              src="https://lh3.googleusercontent.com/p/AF1QipOSF-jTKDvt08ozrig6A2BLwWrDwD3RzL2MKjsm=w1080-h608-p-no-v0"
              alt="Asesoria Informatica"
              className="additional-card-image1"
            />
            {/* Agrega el contenido relacionado aquí */}
            <h3>Asesoria Informatica</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
