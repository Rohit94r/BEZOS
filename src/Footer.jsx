import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer id="contact" className="footer-wrap">
      <div className="site-container">
        {/* Top Vertical Accent Line */}
        <div className="footer-top-accent">
          <div className="footer-accent-line"></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/" aria-label="Atharva Foundation Home">
              <img
                src="/images/atharva/assets_images_logo3.png"
                alt="Atharva Foundation"
                style={{ height: '58px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
            <img
              src="/images/atharva/assets_images_oneforall-logo.png"
              alt="One For All | All For One"
              style={{ height: '46px', width: 'auto', filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>

        {/* Main Footer Row */}
        <div className="footer-main-grid">
          <div>
            <p className="footer-tagline">
              Nation First. <br />
              One For All | All For One.
            </p>
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.7)', fontSize: '15px', maxWidth: '420px', lineHeight: 1.6 }}>
              An initiative of The Atharva Educational Trust, founded by Shri Sunil Rane. Committed to Girl Child Education, Martyr Families, and Women Empowerment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px' }}>
            {/* Quick Links */}
            <div>
              <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#00A4E1', marginBottom: '16px' }}>
                Quick Links
              </h4>
              <ul className="footer-nav-list">
                <li>
                  <Link to="/who-we-are" className="footer-nav-link">Founder Message</Link>
                </li>
                <li>
                  <Link to="/our-programs" className="footer-nav-link">Our Initiatives</Link>
                </li>
                <li>
                  <a href="/#tribute" className="footer-nav-link">Tribute to Martyrs</a>
                </li>
                <li>
                  <a href="/#ideas" className="footer-nav-link">Gallery & Impact</a>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#00A4E1', marginBottom: '16px' }}>
                Contact Us
              </h4>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '12px' }}>
                Atharva Educational Complex,<br />
                Malad Marve Road, Charkop Naka,<br />
                Malad (West), Mumbai - 400095,<br />
                Maharashtra, India
              </p>
              <p style={{ fontSize: '14px', marginBottom: '6px' }}>
                <a href="mailto:atharvafoundation1@gmail.com" style={{ color: '#ffffff', textDecoration: 'none' }}>
                  atharvafoundation1@gmail.com
                </a>
              </p>
              <p style={{ fontSize: '14px' }}>
                <a href="tel:+912240294949" style={{ color: '#00A4E1', textDecoration: 'none', fontWeight: 600 }}>
                  +91 22 40294949
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Social Icons & Legal */}
        <div className="footer-bottom-bar">
          <div className="footer-legal">
            <span>&copy; 2026 Atharva Foundation. All Rights Reserved.</span>
            <span>&bull;</span>
            <a href="#privacy" className="footer-legal-link">Privacy Policy</a>
          </div>

          <ul className="footer-social-list" aria-label="Social media channels">
            <li>
              <a
                href="https://www.instagram.com/atharvafoundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/atharva-foundation/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/AtharvaFoundat1"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Twitter / X"
              >
                <XIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@atharvafoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
