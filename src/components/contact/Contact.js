import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './styles-contact.scss';


function YourComponent() {
  const categories = [
    { categoryId: "1", categoryName: "Mantenimiento", imageCategory: "https://static8.depositphotos.com/1432042/938/i/450/depositphotos_9384106-stock-photo-young-engineer.jpg" },
    { categoryId: "2", categoryName: "Asesorias", imageCategory: "https://www.cooptraiss.com/media/com_jbusinessdirectory/pictures/companies/0/cropped-1592835850.jpeg" },
    { categoryId: "3", categoryName: "Servicios", imageCategory: 'https://media.istockphoto.com/id/1471444483/es/foto/concepto-de-encuesta-de-satisfacci%C3%B3n-del-cliente-los-usuarios-califican-las-experiencias-de.jpg?s=612x612&w=0&k=20&c=Bgf3bkIo4eIQDrC55iKezs-UbWzXuTB78Q-NjujIeIE=' },
  ];

  const Services = [
    {serviceId: "1", categoryId: "1", ServiceName: "TiposDeMantenimiento", photo: ["https://www.elg-asesores.com/images/joomlart/categories/servicio-mantenimiento_001.jpg", "https://kleversoft.com/wp-content/uploads/2021/02/mantenimiento-1.jpg", "https://peruconstruye.net/wp-content/uploads/2018/11/MANTENIMIENTO-MAQUUINARIA-PESADA.jpg"]},
    {serviceId: "2", categoryId: "2", ServiceName: "TiposDeAsesorias", photo: ["https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=600", "https://lh3.googleusercontent.com/p/AF1QipOSF-jTKDvt08ozrig6A2BLwWrDwD3RzL2MKjsm=w1080-h608-p-no-v0"]},
    {serviceId: "3", categoryId: "3", ServiceName: "TiposDeServicios", photo: ["https://media.istockphoto.com/id/1366023581/es/foto/foto-recortada-de-un-apuesto-joven-agente-del-centro-de-llamadas-que-trabaja-en-su-oficina.jpg?s=612x612&w=0&k=20&c=50gCt3bdW0b3wmFwawnVUyAilvx_vTHwsyKxhB6S2Iw=", "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/4098232/pexels-photo-4098232.jpeg?auto=compress&cs=tinysrgb&w=600"]}
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null); // Deselecciona la categoría si ya está seleccionada
    } else {
      setSelectedCategory(categoryId); // Selecciona la categoría si no está seleccionada
    }
  };
  return (
    
    <div className="card-container">
      {categories.map((category) => (
        <Card
          key={category.categoryId}
          onClick={() => handleCategoryClick(category.categoryId)}
          className={selectedCategory === category.categoryId ? 'active card' : 'card'}
        >
          <CardMedia className='cardMedia-category'
            component="img"
            src={category.imageCategory}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {category.categoryName}
            </Typography>
          </CardContent>
        </Card>
      ))} 
      <div className="service-card">
      {Services.filter((service) => service.categoryId === selectedCategory).map((filteredService) => ( 
        <Card key={filteredService.serviceId} className='card-service'>
          {filteredService.photo.map((photo, index) => (
            <CardMedia className='cardMedia'
              key={index}
              component="img"
              src={photo}
              alt={`Service ${filteredService.serviceId} Image ${index + 1}`}
            />
          ))}
        </Card>    
      ))}
      </div>
    </div>
  ); 
}
export default YourComponent;
