import React from 'react';
import './About.css';
function About() {
  return (
    <section id="about" className="about section"data-aos="fade-up">
      <div className="container">
        <h2 className="section-title animate-fade-in">About Me</h2>
        <p className="section-subtitle animate-fade-in delay-1">
          Full stack development, CRM systems and automation in Vadodara
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
              <h3>Harshvardhan Patil — Developer in Vadodara</h3>
              <p>
                I'm Harshvardhan Patil, a full stack and automation developer based in Vadodara, Gujarat. I work on event websites, booking and reporting workflows, CRM features and tools that reduce repetitive operations.
              </p>
              <p>
                My work combines React and Next.js interfaces with Django and Python backends. At LINQ Corporate Solutions, I support the development of event websites and internal systems for a global business conference team.
              </p>
              <p>
                I'm also developing AI agent and automation workflows. This portfolio links to public code and live work where available; you can contact me below about a project or a developer role.
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
              <a href="/Harshvardhan-Patil-Resume.pdf" download>Download my resume (PDF) →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
