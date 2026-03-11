import React from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Elevvo Pathways',
    type: 'Remote',
    date: 'February 2026',
    bullets: [
      'Built responsive UI components using React and Tailwind CSS for production-ready web applications',
      'Collaborated remotely using Git and GitHub for version control and team-based workflows',
      'Delivered mobile-first, accessible UI designs following modern web standards',
      'Integrated frontend components with backend REST APIs, ensuring seamless data flow',
    ],
    tech: ['React', 'Tailwind CSS', 'Git', 'GitHub', 'REST APIs'],
  }
];

export default function Experience() {
  return (
    <section className="section-wrapper" id="experience">
      <div className="section-label">Where I've Worked</div>
      <h2 className="section-title">Experience</h2>

      <div className="exp-timeline">
        {experiences.map((exp, i) => (
          <div className="exp-item" key={i}>
            <div className="exp-line">
              <div className="exp-dot">
                <FiBriefcase size={14} />
              </div>
              <div className="exp-track" />
            </div>

            <div className="exp-card">
              <div className="exp-header">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <div className="exp-meta">
                  <span><FiCalendar size={13} /> {exp.date}</span>
                  <span><FiMapPin size={13} /> {exp.type}</span>
                </div>
              </div>

              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>

              <div className="exp-tech">
                {exp.tech.map((t, j) => (
                  <span key={j} className="exp-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
