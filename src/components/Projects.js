import React from 'react';
import './Projects.css';
import { projectsData } from '../projectsData';

function Projects() {



  return (
    <section id="projects" className="projects section">
      <div className="container">
        
        <div 
          className="sticky-header"
          data-aos="fade-up"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and achievements
          </p>
        </div>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div 
              key={project.title} 
              className={`project-card space-card`}
              data-aos="fade-up"
            >
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              <p className="project-contribution">{project.contribution}</p>
              
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.caseStudy && <a href={project.caseStudy} className="project-link">Read case study<span className="arrow">→</span></a>}
                {project.github && <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                  <span>GitHub</span><span className="arrow">→</span>
                </a>}
                {project.live && <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live site`}>
                  <span>Live site</span><span className="arrow">→</span>
                </a>}
                {project.note && <span className="project-note">{project.note}</span>}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
