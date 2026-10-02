import React from 'react';
import './Services.css';
import { FaCode, FaPaintBrush, FaMobileAlt, FaRobot, FaFigma } from 'react-icons/fa';
function Services() {
  const handleEnquire = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Full Stack Web Development",
      description: "Building web applications with React and Next.js frontends, Django APIs, and practical workflows for teams.",
      icon: <FaCode />
    },
    {
      title: "Web Design",
      description: "Creating visually appealing, modern, and responsive websites that provide an engaging user experience across all devices.",
      icon: <FaPaintBrush />
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and seamless user experiences using Figma, focusing on user-centric design principles.",
      icon: <FaFigma />
    },
    {
      title: "AI & Workflow Automation",
      description: "Designing agent-assisted workflows, integrations and repeatable processes with Python and connected tools.",
      icon: <FaRobot />
    },
    {
      title: "CRM & Internal Tools",
      description: "Building booking, reporting and operations tools that help teams manage records and day-to-day work.",
      icon: <FaMobileAlt />
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="sticky-header" data-aos="fade-up">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            Specialized solutions tailored to your needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card glass"
              data-aos="fade-up"
              data-aos-delay={index * 40}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="enquire-btn" onClick={handleEnquire}>
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
