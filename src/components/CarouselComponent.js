import React from 'react';  
import { Carousel } from 'react-bootstrap';  
// import '/Users/karthikeyakatragadda/crowdfundingApp/crowdfunding-app/src/components/CarouselComponent.css'
const projects = [  
  {  
    id: 1,  
    title: 'Medical Funds',  
    image: 'https://www.piramalrevanta.com/wp-content/uploads/2022/09/20220906-article-banner-01.jpg',  
    description: 'Financial aid for medical emergencies.',  
  },  
  {  
    id: 2,  
    title: 'Start up Funds',  
    image: 'https://media.licdn.com/dms/image/v2/D4E12AQEEEcBlZvedcg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1679747717743?e=2147483647&v=beta&t=Z7F7LNGtSxiPX9hXPXBPhom5zpjSSEWj4nwTN889Xdw',  
    description: 'Help Startups make it to the next level.',  
  },  
  {  
    id: 3,  
    title: 'Small Business Funds',  
    image: 'https://stat.international/wp-content/uploads/2018/06/MeetingsRooms.jpg',  
    description: 'We provide funds to small businesses to help them grow.',  
  }, 
  {  
    id: 4,  
    title: 'Education',  
    image: 'https://pcedf.org/img/img111.jpg',  
    description: 'Help people get access to education.',  
  },   
];  

const CarouselComponent = () => {  
    const carouselStyle={
        maxWidth: 'auto',  
        margin: 0, 
    }
    const imgStyle = {  
        height: '650px',  
        objectFit: 'fill', 
        border:'2px' 
      }; 
  return (  
    <Carousel style={{maxWidth: '1710px',  
        margin: 0,}} data-bs-ride="carousel">  
      {projects.map((project) => (  
        <Carousel.Item key={project.id}>  
          <img  
            className="d-block w-100 "  
            src={project.image}  
            alt={project.title} 
            style={imgStyle} 
          />  
          <Carousel.Caption class="caption">  
            <h3>{project.title}</h3>  
            <p>{project.description}</p>  
          </Carousel.Caption>  
        </Carousel.Item>  
      ))}  
    </Carousel>  
  );  
};  

export default CarouselComponent;  