import React from 'react';
import { caseStudies, notes } from '../contentData';
import Stars from './Stars';
import Footer from './Footer';
import './PortfolioDetails.css';

export default function DetailPage({ pathname }) {
  const item = caseStudies.find(p => pathname === `/projects/${p.slug}`);
  const note = notes.find(p => pathname === `/notes/${p.slug}`);
  return <div className="App"><Stars /><main className="detail-page container">
    <a href="/">← Back to portfolio</a>
    {item ? <article className="space-card">
      <h1>{item.title}</h1><p>{item.description}</p><p>By <a href="/#about">Harshvardhan Patil</a> · Vadodara, Gujarat</p>
      <div className="project-tech">{item.stack.map(t => <span key={t} className="tech-tag">{t}</span>)}</div>
      <h2>The problem</h2><p>{item.problem}</p>
      <h2>My contribution</h2><p>{item.contribution}</p>
      <h2>Implementation decisions</h2>{item.decisions.map(([title, text]) => <section key={title}><h3>{title}</h3><p>{text}</p></section>)}
      <h2>Evidence and current status</h2><p>{item.evidence}</p><p>{item.status}</p>
      {item.screenshot && <figure><img className="project-evidence" src={item.screenshot} alt={`${item.title} public application screenshot`} loading="lazy" width="1348" height="926" /><figcaption>Public application, captured October 2026.</figcaption></figure>}
      <div className="project-links">{item.github && <a href={item.github}>View {item.title} repository →</a>}{item.live && <a href={item.live}>Open {item.title} →</a>}{item.article && <a href={item.article}>Read engineering notes →</a>}</div>
      <h2>Discuss a project</h2><p><a href="/#contact">Contact me</a> about CRM, web development or automation work.</p>
    </article> : note ? <article className="space-card"><h1>{note.title}</h1><p>Engineering notes by <a href="/#about">Harshvardhan Patil</a> · <time dateTime="2026-10-06">6 October 2026</time></p><p>{note.intro}</p>{note.sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}<p><a href={note.project}>Read the related project case study →</a></p></article> : <section className="space-card"><h1>Page not found</h1><p>This page is unavailable. <a href="/">Return to my portfolio</a> to explore projects and contact details.</p></section>}
  </main><Footer /></div>;
}
