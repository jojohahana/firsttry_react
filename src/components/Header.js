import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Header.css';

const Header = () => {
  const headerRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    gsap.from(headerRef.current, { opacity: 100, y: -50, duration: 20 });
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
    setIsNavOpen(false);
  };

  return (
    <header ref={headerRef}>
      <h1>Yohana Portfolio</h1>
      <nav className={isNavOpen ? 'responsive' : ''}>
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
        <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        <a href="#" className="icon" onClick={() => setIsNavOpen(!isNavOpen)}>
          &#9776;
        </a>
      </nav>
    </header>
  );
};

export default Header;
