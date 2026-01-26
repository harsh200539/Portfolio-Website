import React, { useEffect } from 'react';
import './Services.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode, FaPaintBrush, FaMobileAlt, FaRobot, FaFigma } from 'react-icons/fa';
function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleEnquire = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Full Stack Web Development",
      description: "Specialized in building end-to-end web applications using React, Next.js, and Django. delivering robust and scalable solutions.",
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
      title: "AI/ML Model Development",
      description: "Building and deploying intelligent machine learning models and AI solutions using Python to solve complex problems.",
      icon: <FaRobot />
    },
    {
      title: "App Development (Android)",
      description: "Developing high-performance Android mobile applications with a focus on usability and performance.",
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
              data-aos-delay={index * 100}
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
