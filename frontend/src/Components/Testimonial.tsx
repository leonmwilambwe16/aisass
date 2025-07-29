import React from 'react';
import '../Components/Testimonial.scss';
import { TestimonialData } from '../assets/asset';
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className='testimonial-container'>
         <h3>Loved By Creators</h3>
      <p>Dont't Just take our word for it Here is what our users are saying</p>
      <div className="testi-content-container">
      
     
      {TestimonialData.slice(0, 3).map((testimonial, index) => (
        
        <div className="testimonial-card" key={index}>
         
            <div className="testi-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                color={i < testimonial.rating ? " #3a06ca" : "#c9c9c9ff"} 
              />
            ))}
          </div>
         <div className="image-testimonial">
          <p className="testimonial-content">"{testimonial.content}"</p>
          <div className="testi-breack-div">
              <div className="img-profil-testi">
             <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
          </div>
          <div className="testi-image-text">
           <h3 className="testimonial-name">{testimonial.name}</h3>
          <p className="testimonial-title">{testimonial.title}</p>
          
          </div>
          </div>
        
         </div>
        </div>
      ))}
      </div>
      </div>
   
  );
}

export default Testimonial;
