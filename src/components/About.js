import React from 'react';
import './About.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function About() {
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,
  });
}, []);
  return (
    <section id="about" className="about section"data-aos="fade-up">
      <div className="container">
        <h2 className="section-title animate-fade-in">About Me</h2>
        <p className="section-subtitle animate-fade-in delay-1">
          Exploring the digital universe one project at a time
        </p>
        
        <div className="about-content">
          <div className="about-image animate-slide-left">
            {/* <div className="image-wrapper glass">
              <div className="profile-placeholder">
                <div className="avatar-circle"></div>
              </div>
            </div> */}
          </div>
          
          <div className="about-text animate-slide-right">
            <div className="space-card">
              <h3>Harshvardhan — The Digital Space Explorer</h3>
              <p>
                I'm Harshvardhan Patil, a 20-year-old Full Stack Developer who loves turning ideas into smooth, fast, and visually striking digital experiences. My journey started with simple curiosity—how do digital worlds come alive? That curiosity soon evolved into a full-fledged passion for building applications that feel natural, intuitive, and enjoyable to use.
              </p>
              <p>
                I navigate the ever-expanding universe of web technologies, creating clean, efficient code and modern UI/UX experiences. Whether it's frontend animations, backend logic, or full-stack architecture, I love bringing everything together into a polished, production-ready solution.
              </p>
              <p>
                When I’m not deep in code, you’ll find me experimenting with new tools, contributing to projects, or daydreaming about futuristic tech and space adventures. I thrive on learning, exploring, and leveling up with every project I touch.
              </p>
              
              <div className="about-stats">
                <div className="stat-item">
                  <h4 className="glow-text">1+</h4>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h4 className="glow-text">10+</h4>
                  <p>Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
