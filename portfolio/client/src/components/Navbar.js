import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const links = ['Skills', 'Projects', 'Experience', 'Education', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        Amnah<span className="dot">.</span>
      </div>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <Link
              to={l.toLowerCase()}
              smooth duration={600}
              offset={-70}
              onClick={() => setOpen(false)}
            >
              {l}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="https://github.com/Amnahmumtaz97"
            target="_blank"
            rel="noreferrer"
            className="nav-gh"
          >
            GitHub
          </a>
        </li>
      </ul>

      <button className="hamburger" onClick={() => setOpen(o => !o)}>
        {open ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>
    </nav>
  );
}
