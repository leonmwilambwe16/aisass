import React from 'react';
import '../Pages/Home.scss'
import Navbar from '../Components/Navbar';
import HeroText from '../Components/HeroText';
import AiTools from '../Components/AiTools';
import Testimonial from '../Components/Testimonial';
import Plan from '../Components/Plan';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <HeroText/>
      <AiTools/>
      <Testimonial/>
      <Plan/>
     <Footer/>
    </div>
  )
}

export default Home  
