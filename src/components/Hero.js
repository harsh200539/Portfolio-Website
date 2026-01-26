import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero section" data-aos="zoom-in">
      
      <div className="hero-content container">
        <div className="hero-text animate-fade-in">
          <h1 className="hero-title glow-text">
            Harshvardhan Patil
          </h1>
          <h2 className="hero-subtitle">
            Full Stack Developer & Creative Designer
          </h2>
          <p className="hero-description">
            Crafting digital experiences that are out of this world. 
            Specializing in modern web technologies and innovative solutions.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToAbout}>
              Explore My Work
            </button>
            <button className="btn-secondary" onClick={() => window.location.href = '#contact'}>
              Get In Touch
            </button>
          </div>
        </div>
        

      </div>
      
      <div 
        className={`scroll-indicator ${showScroll ? '' : 'hidden'}`} 
        onClick={scrollToAbout}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
}

export default Hero;
