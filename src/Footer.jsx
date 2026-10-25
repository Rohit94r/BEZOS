import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon, HorizontalLogo } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="site-container">
        {/* Top Vertical Accent Line */}
        <div className="footer-top-accent">
          <div className="footer-accent-line"></div>
          <Link to="/" aria-label="Bezos Earth Fund home" style={{ display: 'inline-block' }}>
            <HorizontalLogo style={{ width: '100%', maxWidth: '300px', height: 'auto', fill: '#ffffff' }} />
          </Link>
        </div>

        {/* Main Footer Row */}
        <div className="footer-main-grid">
          <div>
            <p className="footer-tagline">
              Inspired by Nature. <br />
              Driven by Innovation.
            </p>
          </div>

          <nav aria-label="Footer Navigation">
            <ul className="footer-nav-list">
              <li>
                <Link to="/who-we-are#careers" className="footer-nav-link">Careers</Link>
              </li>
              <li>
                <a href="/#ideas" className="footer-nav-link">News & Insights</a>
              </li>
              <li>
                <Link to="/our-programs" className="footer-nav-link">Our Programs</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar: Social Icons & Legal */}
        <div className="footer-bottom-bar">
          <div className="footer-legal">
            <span>&copy; 2026 Bezos Earth Fund</span>
            <span>&bull;</span>
            <a href="#privacy" className="footer-legal-link">Privacy Policy and Terms and Conditions</a>
          </div>

          <ul className="footer-social-list" aria-label="Social media channels">
            <li>
              <a
                href="https://www.instagram.com/bezosearthfund/"
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
                href="https://www.linkedin.com/company/bezos-earth-fund/"
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
                href="https://x.com/BezosEarthFund"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/BezosEarthFund"
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
