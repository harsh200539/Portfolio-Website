import React, { useEffect } from 'react';
import './App.css';
import './styles/animations.css';
import './styles/space-theme.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Stars from './components/Stars';

function App() {
  useEffect(() => {
    // Force scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    // Prevent browser from restoring scroll position
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="App">
      <Stars />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
