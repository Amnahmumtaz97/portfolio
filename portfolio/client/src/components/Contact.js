import React, { useState } from 'react';
import axios from 'axios';
import { FiSend, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import './Contact.css';

const contactLinks = [
  {
    icon: <FiMail size={19} />,
    label: 'Email',
    value: 'iamnah97@gmail.com',
    href: 'mailto:iamnah97@gmail.com',
  },
  {
    icon: <FiPhone size={19} />,
    label: 'Phone',
    value: '+92 303 405 4609',
    href: 'tel:+923034054609',
  },
  {
    icon: <FiLinkedin size={19} />,
    label: 'LinkedIn',
    value: 'amnah-mumtaz-ahmad',
    href: 'https://linkedin.com/in/amnah-mumtaz-ahmad-18741b365',
  },
  {
    icon: <FiGithub size={19} />,
    label: 'GitHub',
    value: 'Amnahmumtaz97',
    href: 'https://github.com/Amnahmumtaz97',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('validate');
      return;
    }
    setStatus('loading');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className="section-label">Let's Connect</div>
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-layout">
        {/* Left — info */}
        <div className="contact-info">
          <p className="contact-blurb">
            Open to internship and entry-level opportunities in MERN Stack development.
            Feel free to reach out — I'd love to hear from you.
          </p>

          <div className="contact-links-list">
            {contactLinks.map((c, i) => (
              <a key={i} href={c.href} className="contact-link-item" target="_blank" rel="noreferrer">
                <div className="cli-icon">{c.icon}</div>
                <div className="cli-body">
                  <div className="cli-label">{c.label}</div>
                  <div className="cli-value">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-form-card">
          <div className="cf-row">
            <div className="cf-field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={status === 'validate' && !form.name ? 'error' : ''}
              />
            </div>
            <div className="cf-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={status === 'validate' && !form.email ? 'error' : ''}
              />
            </div>
          </div>

          <div className="cf-field">
            <label>Message</label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the opportunity..."
              className={status === 'validate' && !form.message ? 'error' : ''}
            />
          </div>

          <button
            className={`cf-submit ${status === 'loading' ? 'loading' : ''}`}
            onClick={handleSubmit}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : (
              <>
                Send Message
                <FiSend size={15} />
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="cf-feedback success">
              ✅ Message sent! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="cf-feedback error-msg">
              ❌ Something went wrong. Please email me directly.
            </div>
          )}
          {status === 'validate' && (
            <div className="cf-feedback error-msg">
              ⚠️ Please fill in all fields.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
