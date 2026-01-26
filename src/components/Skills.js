import React, { useEffect } from 'react';
import './Skills.css';
// import './skillnetwork.css';
import SkillsNetwork from './skillnetwork';
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section id="skills" className="skills section" data-aos="fade-up">
      <div className="container">
        
        <div 
          className="sticky-header"
          data-aos="fade-up"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            My technical arsenal for building amazing projects
          </p>
        </div>

        <SkillsNetwork />
        
        <div className="skills-grid-container" data-aos="fade-up">
            <h3 className="skills-grid-title">Technical Expertise</h3>
            <div className="skills-list-grid">
                {skillsList.map((skill, index) => (
                    <div key={index} className="skill-box glass">
                        <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/${skill.logo}`} alt={skill.name} className="skill-box-icon" />
                        <span className="skill-box-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

const skillsList = [
    // Frontend Core
    { name: "HTML5", logo: "html5.svg" },
    { name: "CSS3", logo: "css3.svg" },
    { name: "JavaScript", logo: "javascript.svg" },
    { name: "React", logo: "react.svg" },
    { name: "Next.js", logo: "nextdotjs.svg" },
    { name: "Bootstrap", logo: "bootstrap.svg" },
    
    // Backend
    { name: "Python", logo: "python.svg" },
    { name: "Django", logo: "django.svg" },
    { name: "MySQL", logo: "mysql.svg" },
    
    // Tools
    { name: "Git", logo: "git.svg" },
    { name: "GitHub", logo: "github.svg" },
    { name: "Figma", logo: "figma.svg" },
];

export default Skills;
