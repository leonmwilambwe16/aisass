import React from 'react';
import '../Components/HeroText.scss'
import { TestimonialData } from '../assets/asset';
import { useNavigate } from 'react-router-dom';

const HeroText = () => {
 
  const navigate = useNavigate()


  return (
    <div className='Hero-container'>
      <h1>Create amazing Content with <span>Ai tools</span></h1>
      <p>Discover the power of artificial intelligence to streamline your creative process, 
        boost productivity, and bring your ideas to life—faster and smarter than ever before.</p>
        <div className="hero-btn">
          <button className='start-btn' onClick={()=>navigate('/ai')} >Star Creating Now</button>
            <button className='demo-btn'>Watch Demo</button>
        </div>
        <div className="user-content-hero">
         {TestimonialData.slice(0, 5).map((user, index) => (
          <img
            key={index}
            src={user.image}
            alt={user.name}
            className="user-profile"
          /> 
        ))}<span>Trusted by 20k people</span> 
        </div>
    </div>
  )
}

export default HeroText  

