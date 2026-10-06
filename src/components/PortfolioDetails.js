import React from 'react';
import { faqs } from '../contentData';
import './PortfolioDetails.css';

export default function PortfolioDetails() {
  return <section id="experience" className="section portfolio-details">
    <div className="container">
      <h2 className="section-title">Experience & Background</h2>
      <div className="space-card">
        <h3>LINQ Corporate Solutions Pvt. Ltd.</h3>
        <p>Agent and Automation Developer / Operations Executive</p>
        <p><time dateTime="2025-11">November 2025</time> – Present · Vadodara, Gujarat</p>
        <p>Developing event websites, CRM features, APIs and AI-assisted automation for conference operations, with React, Django, Python and connected services.</p>
        <h3>Entrepreneurship Club, Parul University</h3>
        <p>Operations Lead · 2023–2025</p>
        <p>Coordinated teams, logistics and communication for club events.</p>
        <h3>Education</h3>
        <p>B.Tech, Computer Science & Engineering · Parul University · 2022–2026</p>
        <a className="project-link" href="/Harshvardhan-Patil-Resume.pdf" download>Download my resume (PDF) →</a>
      </div>
      <h2 className="section-title details-heading">Frequently Asked Questions</h2>
      <div className="space-card">{faqs.map(([question, answer]) => <details key={question} className="portfolio-faq"><summary>{question}</summary><p>{answer}</p></details>)}</div>
    </div>
  </section>;
}
