import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import './styles/animations.css';
import './styles/space-theme.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Stars from './components/Stars';
import PortfolioDetails from './components/PortfolioDetails';
import DetailPage from './components/DetailPage';

function App({ pathname = '/' }) {
  useEffect(() => {
    document.documentElement.classList.add('js-ready');
    AOS.init({ duration: 250, once: true, offset: 60 });
    // Force scroll to top on page load/refresh
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
    } else window.scrollTo(0, 0);
    
    // Prevent browser from restoring scroll position
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  if (pathname !== '/') return <DetailPage pathname={pathname.replace(/\/$/, '')} />;

  return (
    <div className="App">
      <Stars />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <PortfolioDetails />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
