import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Heart } from 'lucide-react';
import Logo from './Logo';
import { LinkedInIcon, InstagramIcon, YouTubeIcon, FacebookIcon } from './SocialIcons';

export default function Footer({ onOpenDonate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer 
      id="footer"
      style={{
        backgroundColor: '#310A10',
        color: '#FFFFFF',
        borderTop: '3px solid #D9B45B',
        paddingTop: '64px',
        paddingBottom: '32px',
        position: 'relative',
      }}
    >
      <div className="site-container">
        {/* Main Footer Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Column 1: Identity & Motto */}
          <div>
            <div style={{ marginBottom: '18px' }}>
              <Logo variant="light" height={62} />
            </div>
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '17px',
                fontStyle: 'italic',
                color: '#D9B45B',
                lineHeight: '1.5',
                marginBottom: '12px',
              }}
            >
              Educate. Empower. Serve.
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.6', marginBottom: '20px' }}>
              For a stronger, more inclusive India. Dedicated to quality education for young daughters, unconditional welfare for martyr families, and grassroots women entrepreneurship.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <a
                href="https://in.linkedin.com/company/atharva-foundation"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  border: '1px solid rgba(217, 180, 91, 0.25)',
                  transition: 'all 0.2s ease',
                }}
                className="hover:bg-amber-400 hover:text-burgundy hover:scale-110"
              >
                <LinkedInIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://www.instagram.com/atharvafoundation/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  border: '1px solid rgba(217, 180, 91, 0.25)',
                  transition: 'all 0.2s ease',
                }}
                className="hover:bg-amber-400 hover:text-burgundy hover:scale-110"
              >
                <InstagramIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://www.youtube.com/@atharvafoundation"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  border: '1px solid rgba(217, 180, 91, 0.25)',
                  transition: 'all 0.2s ease',
                }}
                className="hover:bg-amber-400 hover:text-burgundy hover:scale-110"
              >
                <YouTubeIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://www.facebook.com/AtharvaFoundationOfficial/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  border: '1px solid rgba(217, 180, 91, 0.25)',
                  transition: 'all 0.2s ease',
                }}
                className="hover:bg-amber-400 hover:text-burgundy hover:scale-110"
              >
                <FacebookIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#D9B45B',
                marginBottom: '18px',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button 
                  onClick={() => scrollTo('our-belief')} 
                  style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer', fontSize: '14px', padding: 0, textAlign: 'left' }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Our Story & Purpose
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('our-initiatives')} 
                  style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer', fontSize: '14px', padding: 0, textAlign: 'left' }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Our Work & Initiatives
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('people')} 
                  style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer', fontSize: '14px', padding: 0, textAlign: 'left' }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Community Changemakers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('impact')} 
                  style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer', fontSize: '14px', padding: 0, textAlign: 'left' }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Verified Social Impact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('stories')} 
                  style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer', fontSize: '14px', padding: 0, textAlign: 'left' }}
                  className="hover:text-amber-300 transition-colors"
                >
                  Real Stories & Moments
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenDonate} 
                  style={{ background: 'none', border: 'none', color: '#D9B45B', cursor: 'pointer', fontSize: '14px', padding: 0, textAlign: 'left', fontWeight: 600 }}
                  className="hover:underline"
                >
                  Support a Cause →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Focus Areas */}
          <div>
            <h4 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#D9B45B',
                marginBottom: '18px',
              }}
            >
              Our Focus Areas
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>
              <li>Girl Child Education in Rural India</li>
              <li>Assistance to Families of Martyrs</li>
              <li>100 Computers for Daughters</li>
              <li>Women Achiever’s Awards</li>
              <li>Healthcare & Cleanliness Camps</li>
              <li>Tree Plantation & Youth Sports Mentorship</li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h4 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#D9B45B',
                marginBottom: '18px',
              }}
            >
              Get in Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#D9B45B" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  Atharva Educational Complex, Malad Marve Road, Charkop Naka, Malad(W), Mumbai-400095, Maharashtra, India
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} color="#D9B45B" style={{ flexShrink: 0 }} />
                <a href="tel:+912240294949" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-amber-300">
                  +91 22 40294949
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} color="#D9B45B" style={{ flexShrink: 0 }} />
                <a href="mailto:foundation@atharva.edu.in" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-amber-300">
                  foundation@atharva.edu.in
                </a>
              </div>
            </div>

            <button
              onClick={onOpenDonate}
              style={{
                marginTop: '18px',
                backgroundColor: '#D9B45B',
                color: '#500D18',
                fontWeight: 700,
                fontSize: '13px',
                padding: '10px 18px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Heart size={14} fill="#500D18" />
              <span>Contribute to the Cause</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          <div>
            © 2024 Atharva Foundation. All rights reserved. | An Initiative by Atharva Educational Trust.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Contact</span>
            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(217, 180, 91, 0.2)',
                border: '1px solid #D9B45B',
                color: '#D9B45B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              className="hover:bg-amber-400 hover:text-burgundy hover:scale-110"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
