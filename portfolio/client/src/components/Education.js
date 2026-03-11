import React from 'react';
import { FiBook, FiAward } from 'react-icons/fi';
import './Education.css';

export default function Education() {
  return (
    <section className="section-wrapper alt-section" id="education">
      <div className="section-label">Background</div>
      <h2 className="section-title">Education &amp; Certifications</h2>

      <div className="edu-grid">
        {/* Education */}
        <div className="edu-card">
          <div className="edu-card-icon">
            <FiBook size={22} />
          </div>
          <div className="edu-body">
            <div className="edu-degree">B.S. Computer Science</div>
            <div className="edu-school">COMSATS University Islamabad</div>
            <div className="edu-campus">Lahore Campus · Pakistan</div>
            <div className="edu-date">Expected 2027</div>
            <div className="gpa-row">
              <span className="gpa-badge">⭐ GPA: 3.62 / 4.0</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="certs-card">
          <div className="certs-header">
            <FiAward size={20} />
            <span>Certifications</span>
          </div>
          <div className="cert-list">
            <div className="cert-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cisco/cisco-original.svg"
                alt="Cisco"
                className="cert-logo"
              />
              <div className="cert-body">
                <div className="cert-name">CCNA: Introduction to Networks</div>
                <div className="cert-issuer">Cisco · February 2025</div>
                <div className="cert-desc">Hands-on labs covering routing, switching & network fundamentals</div>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-icon-placeholder">🛡️</div>
              <div className="cert-body">
                <div className="cert-name">Risk Assessment e-Learning</div>
                <div className="cert-issuer">March 2025</div>
                <div className="cert-desc">Identifying, evaluating & mitigating digital risks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
