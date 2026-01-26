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
                  <span className="contact-icon">✉</span>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:hello@example.com">hpatil1704@gmail.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">☎</span>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+918238937146">+91 8238937146</a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">⌘</span>
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
