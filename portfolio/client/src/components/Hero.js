import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Animated gradient orbs */}
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />

      {/* Grid overlay */}
      <div className="grid-overlay" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Open to Internship &amp; Entry-Level Roles
        </div>

        <h1 className="hero-name">
          Amnah<br />
          <span className="name-outline">Mumtaz</span>
        </h1>

        <div className="hero-typed">
          <TypeAnimation
            sequence={[
              'MERN Stack Developer',
              2000,
              'React.js Enthusiast',
              2000,
              'Full-Stack Builder',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="hero-desc">
          Building full-stack web applications with <strong>MongoDB, Express.js,
          React &amp; Node.js</strong>. CS student at COMSATS Lahore · GPA 3.62.
        </p>

        <div className="hero-actions">
          <Link to="projects" smooth duration={600} offset={-70} className="btn-gold">
            View Projects
            <FiArrowDown size={16} />
          </Link>
          <Link to="contact" smooth duration={600} offset={-70} className="btn-outline">
            Get In Touch
          </Link>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/Amnahmumtaz97" target="_blank" rel="noreferrer">
            <FiGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/amnah-mumtaz-ahmad-18741b365" target="_blank" rel="noreferrer">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:iamnah97@gmail.com">
            <FiMail size={20} />
          </a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <span className="stat-n">3.62</span>
          <span className="stat-l">GPA</span>
        </div>
        <div className="stat-div" />
        <div className="stat">
          <span className="stat-n">7+</span>
          <span className="stat-l">Projects</span>
        </div>
        <div className="stat-div" />
        <div className="stat">
          <span className="stat-n">MERN</span>
          <span className="stat-l">Stack</span>
        </div>
        <div className="stat-div" />
        <div className="stat">
          <span className="stat-n">PKT</span>
          <span className="stat-l">Lahore, PK</span>
        </div>
      </div>

      <Link to="skills" smooth duration={600} offset={-70} className="scroll-hint">
        <FiArrowDown size={18} />
      </Link>
    </section>
  );
}
