import React from 'react';
import '../Components/Footer.scss';
import { FaBraille } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="box-icons">
        <div className="icons-footer">
          <span><FaBraille /><p>AiChamp</p></span>
        </div>
        <div className="text-footer">
          <p>Experience the power of AI with AiChamp, the champion of the world. Transform your content creation with our suite of premium AI tools.</p>
        </div>
      </div>

      <div className="menu-footer">
        <div className="list-menu">
          <h4>Company</h4>
          <ul className="list-menu-footer">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="subscribes-footer">
          <h4>Subscribe to Our Newsletter</h4>
          <p>The latest news, articles, and resources, sent to your inbox weekly</p>
          <form action="">
            <input type="text" placeholder='Enter your email' />
            <button>Submit</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AiChamp. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
