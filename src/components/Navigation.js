import React, { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.history.replaceState(null, '', '#' + sectionId);
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text glow-text">PORTFOLIO</span>
        </div>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <a href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => scrollToSection('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => scrollToSection('about')}
            >
              About
            </a>
          </li>
          <li>
            <a href="#skills"
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a href="#services"
              className={activeSection === 'services' ? 'active' : ''}
              onClick={() => scrollToSection('services')}
            >
              Services
            </a>
          </li>
          <li>
            <a href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
