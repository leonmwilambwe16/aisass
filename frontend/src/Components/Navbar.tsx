import { useEffect, useState } from 'react';
import '../Components/Navbar.scss';
import { FaBraille } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="ai-logo">
        <span><FaBraille /><p>AiChamp</p></span>
      </div>
  
      <div className="ai-buton-nav">
        {user ? (
          <UserButton />
        ) : (
          <button className="start-ai-board" onClick={() => openSignIn()}>
            Get started <FaArrowRightLong />
          </button>
        )}
      </div>
    </div> 
  );
};

export default Navbar;
