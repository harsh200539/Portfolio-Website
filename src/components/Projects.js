import React, { useEffect } from 'react';
import './Projects.css';
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const projectsData = [
    {
      title: 'LinguaLearn-AI',
      description: 'LinguaLearn-AI is a 3D AI-powered learning platform that delivers multilingual lessons with an interactive avatar teacher.',
      technologies: ['HTML5', 'Tailwind CSS', 'Three.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'OpenAI API', 'Google Translate API', 'Ready Player Me API'],
      github: 'https://github.com/harsh200539/LinguaLearn-AI'
    },
    {
      title: 'SkillFlow AI',
      description: 'SkillFlow AI is a modern, full-stack application designed to provide an interactive platform for skills assessment, mentorship, and gamified learning. This project implements a high-fidelity frontend design originally created in Figma, backed by a robust Django API.',
      technologies: ['HTML5', 'Tailwind CSS',  'Node.js', 'Express.js', 'Django', 'Gemini API', 'Socket.io'],
      github: 'https://github.com/harsh200539/SkillFlow_AI'
    },
    {
      title: 'Wexler Marketing',
      description: 'A high-fidelity clone of the Wexler Marketing website, built to demonstrate modern web development practices using Next.js 15, React 19, and Tailwind CSS. This project focuses on replicating the premium aesthetic, smooth animations, and responsive layout of the original site.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Bootstrap', 'TypeScript', 'AOS'],
      github: 'https://github.com/harsh200539/Wexler_Marketing'
    },
    {
      title: 'CENT Banking Application',
      description: 'CENT is a fully integrated e-commerce application designed to deliver secure transactions, user-centric authentication, and a powerful admin interface tailored for streamlined store',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe','Machine Learning', 'Python','TensorFlow', 'PyTorch', 'OpenCV'],
      github: 'https://github.com/harsh200539/CENT.........Face-Detection-Software-For-Banks'
    },
    {
      title: 'Bank Database',
      description: 'A real-time SQL operations viewer designed to demonstrate how banking transactions are handled internally, with interactive charts displaying query activity and data updates.',
      technologies: ['SQL', 'MySQL / PostgreSQL', 'Docker'],
      github: 'https://github.com/harsh200539/Bank-Database'
    },
    
  ];

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
          {projectsData.map((project, index) => (
            <div 
              key={project.title} 
              className={`project-card space-card`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.github} className="project-link">
                  <span>GitHub</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
