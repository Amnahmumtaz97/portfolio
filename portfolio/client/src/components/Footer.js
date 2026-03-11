import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">Amnah<span>.</span></div>
        <p className="footer-text">
          MERN Stack Developer · Lahore, Pakistan
        </p>
        <div className="footer-socials">
          <a href="https://github.com/Amnahmumtaz97" target="_blank" rel="noreferrer"><FiGithub size={18}/></a>
          <a href="https://linkedin.com/in/amnah-mumtaz-ahmad-18741b365" target="_blank" rel="noreferrer"><FiLinkedin size={18}/></a>
          <a href="mailto:iamnah97@gmail.com"><FiMail size={18}/></a>
        </div>
        <p className="footer-copy">© 2026 Amnah Mumtaz Ahmad. Built with React &amp; Node.js.</p>
      </div>
    </footer>
  );
}
