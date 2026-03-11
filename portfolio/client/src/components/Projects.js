import React, { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'GadgetGlam',
    subtitle: 'MERN E-Commerce Store',
    emoji: '🛍️',
    color: '#e8c547',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Context API'],
    highlights: [
      'JWT auth, bcrypt hashing, rate limiting & MongoDB sanitization',
      'React frontend with Context API for global state',
      'Advanced SEO: JSON-LD schema, Open Graph tags, auto-slug generation',
      'Breadcrumb structured data & sitemap endpoint',
    ],
    github: 'https://github.com/Amnahmumtaz97',
  },
  {
    title: 'DataVault',
    subtitle: 'Secure Backup System',
    emoji: '🔐',
    color: '#5ee8b0',
    stack: ['Python', 'Flask', 'AES-256', 'PBKDF2', 'APScheduler'],
    highlights: [
      'AES-256 encryption with PBKDF2 key derivation — all data unreadable without password',
      'SHA-256 tamper detection — aborts restore on any hash mismatch',
      'Full / Incremental / Differential backup modes with auto-scheduling',
      'Browser-based dashboard for backup management',
    ],
    github: 'https://github.com/Amnahmumtaz97',
  },
  {
    title: 'Mobile Shopping App',
    subtitle: 'React Native + Strapi',
    emoji: '📱',
    color: '#f07070',
    stack: ['React Native', 'Strapi', 'Navigation', 'State Management'],
    highlights: [
      'Fully functional mobile shopping app for Android & iOS',
      'Product listing and detail screens with dynamic navigation',
      'Strapi CMS integration for content management',
      'Cross-screen state management with React hooks',
    ],
    github: 'https://github.com/Amnahmumtaz97',
  },
  {
    title: 'Sentiment Analysis',
    subtitle: 'NLP with DistilBERT',
    emoji: '🧠',
    color: '#a78bfa',
    stack: ['Python', 'DistilBERT', 'HuggingFace', 'NLP'],
    highlights: [
      'DistilBERT transformer model for real-world text classification',
      'Full ML pipeline: tokenization, training, evaluation & reporting',
      'Trained and evaluated on real-world datasets',
    ],
    github: 'https://github.com/Amnahmumtaz97',
  },
  {
    title: 'Cafe Management System',
    subtitle: 'Desktop App — C# WinForms',
    emoji: '☕',
    color: '#fdba74',
    stack: ['C#', 'WinForms', 'SQL Server', 'MVC', 'RDLC'],
    highlights: [
      'Full desktop app with MVC architecture — Model, View, Controller separation',
      'Role-based authentication with admin & user login screens',
      'SQL Server integration with RDLC reporting',
    ],
    github: 'https://github.com/Amnahmumtaz97',
  },
  {
    title: 'Parallel Maze Solver',
    subtitle: 'Multithreaded Python GUI',
    emoji: '🌀',
    color: '#67e8f9',
    stack: ['Python', 'Threading', 'GUI', 'Algorithms'],
    highlights: [
      'Interactive animated GUI for real-time maze solving',
      'Parallel processing via Python threading for performance',
      'Optimized algorithm for complex maze structures',
    ],
    github: 'https://github.com/Amnahmumtaz97',
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="section-wrapper alt-section" id="projects">
      <div className="section-label">What I've Built</div>
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            className={`project-card ${hovered === i ? 'hovered' : ''}`}
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ '--card-accent': p.color }}
          >
            <div className="pc-top">
              <div className="pc-icon" style={{ background: `${p.color}14`, border: `1px solid ${p.color}30` }}>
                <span>{p.emoji}</span>
              </div>
              <div className="pc-links">
                <a href={p.github} target="_blank" rel="noreferrer" title="GitHub">
                  <FiGithub size={17} />
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" title="Live Demo">
                    <FiExternalLink size={17} />
                  </a>
                )}
              </div>
            </div>

            <div className="pc-title">{p.title}</div>
            <div className="pc-subtitle">{p.subtitle}</div>

            <ul className="pc-highlights">
              {p.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>

            <div className="pc-stack">
              {p.stack.map((s, j) => (
                <span key={j} className="pc-tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
