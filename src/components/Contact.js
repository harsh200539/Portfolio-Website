import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Send email using EmailJS
    emailjs.send(
      'service_8pvf208', // Replace with your EmailJS Service ID
      'template_1b7cqdq', // Replace with your EmailJS Template ID
      {
        to_name: 'Harsh',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'q7XNWfglRdOoyVcIt' // Replace with your EmailJS Public Key
    )
      .then(() => {
        setStatus('success');
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.error('Error:', error);
        setStatus('error');
        alert('Failed to send message. Please try again.');
      })
      .finally(() => {
        setStatus('');
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title animate-fade-in">Get In Touch</h2>
        <p className="section-subtitle animate-fade-in delay-1">
          Let's create something amazing together
        </p>

        <div className="contact-content">
          <div className="contact-info animate-slide-left">
            <div className="space-card">
              <h3>Contact Information</h3>
              <p>Feel free to reach out through any of these channels:</p>

              <div className="contact-items">
                <div className="contact-item">
                  <span className="contact-icon">
                    {/* Email SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:hpatil1704@gmail.com">hpatil1704@gmail.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">
                    {/* Phone SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+918238937146">+91 8238937146</a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">
                    {/* Location SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  <div>
                    <h4>Location</h4>
                    <p>Vadodara, Gujrat</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="https://github.com/harsh200539" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/hpatil1704" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn</span>
                </a>
                <a href="https://x.com/harshva06392054?s=11" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <span>Twitter</span>
                </a>
                <a href="https://www.instagram.com/patil_harshvardhan_05?igsh=bzRibmJvdjQxcHh5&utm_source=qr" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper animate-slide-right">
            <form className="contact-form glass" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
