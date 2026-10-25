import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setSearchOpen(false);
  }, [location.pathname]);

  const toggleSearch = () => {
    if (!searchOpen) {
      setSearchOpen(true);
      setTimeout(() => searchInputRef.current?.focus(), 150);
    } else {
      setSearchOpen(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching Atharva Foundation for: "${searchQuery}"`);
    }
  };

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <header className={`header-nav ${isTransparent ? 'transparent' : 'scrolled'}`}>
      <div className="site-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
          {/* Logo & National Badge */}
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              textDecoration: 'none'
            }}
            aria-label="Atharva Foundation Homepage"
          >
            <img
              src="/images/atharva/assets_images_logo3.png"
              alt="Atharva Foundation"
              style={{
                height: '52px',
                width: 'auto',
                filter: isTransparent ? 'brightness(0) invert(1)' : 'none',
                transition: 'all 0.3s ease'
              }}
            />
            <div
              style={{
                display: 'none',
                borderLeft: isTransparent ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(0,32,65,0.2)',
                paddingLeft: '12px',
                flexDirection: 'column'
              }}
              className="brand-subtext"
            >
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: isTransparent ? '#ffffff' : '#002041' }}>
                One For All
              </span>
              <span style={{ fontSize: '10px', color: isTransparent ? '#00A4E1' : '#B27865', fontWeight: 600, letterSpacing: '0.08em' }}>
                All For One
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ display: 'none' }} className="desktop-nav-menu" aria-label="Main Navigation">
            <ul style={{ display: 'flex', alignItems: 'center', gap: '32px', listStyle: 'none' }}>
              {/* About Us */}
              <li
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/who-we-are"
                  className={`nav-link ${location.pathname === '/who-we-are' ? 'active' : ''}`}
                >
                  <span>About Us</span>
                  <svg width="12" height="12" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.2s ease', transform: activeDropdown === 'about' ? 'rotate(180deg)' : 'none' }}>
                    <path d="M4 6l5 5 5-5" />
                  </svg>
                </Link>

                {activeDropdown === 'about' && (
                  <div className="dropdown-panel">
                    <Link to="/who-we-are" className="dropdown-link">Founder Message</Link>
                    <Link to="/who-we-are#vision" className="dropdown-link">Our Vision & Mission</Link>
                    <Link to="/who-we-are#trust" className="dropdown-link">Atharva Trust</Link>
                    <a href="/#tribute" className="dropdown-link">Tribute to Martyrs</a>
                  </div>
                )}
              </li>

              {/* Initiatives */}
              <li
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown('initiatives')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/our-programs"
                  className={`nav-link ${location.pathname === '/our-programs' ? 'active' : ''}`}
                >
                  <span>Our Initiatives</span>
                  <svg width="12" height="12" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.2s ease', transform: activeDropdown === 'initiatives' ? 'rotate(180deg)' : 'none' }}>
                    <path d="M4 6l5 5 5-5" />
                  </svg>
                </Link>

                {activeDropdown === 'initiatives' && (
                  <div className="dropdown-panel">
                    <Link to="/our-programs?tab=girlchild" className="dropdown-link">Girl Child Education</Link>
                    <Link to="/our-programs?tab=martyrs" className="dropdown-link">Help Families of Martyrs</Link>
                    <Link to="/our-programs?tab=computers" className="dropdown-link">100 Computers Program</Link>
                    <Link to="/our-programs?tab=women" className="dropdown-link">Women Achievers Award</Link>
                  </div>
                )}
              </li>

              {/* Tribute to Soldiers */}
              <li>
                <a
                  href="/#tribute"
                  className="nav-link"
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('tribute')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>Tribute to Armed Forces</span>
                </a>
              </li>

              {/* Gallery & Impact */}
              <li>
                <a
                  href="/#ideas"
                  className="nav-link"
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('ideas')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>Gallery & Stories</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Controls: Search, Donate Button & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Search Input Form */}
            <form onSubmit={handleSearchSubmit} className="search-wrapper">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search initiatives, martyrs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`search-input ${searchOpen ? 'open' : ''}`}
              />
              <button
                type="button"
                onClick={toggleSearch}
                className="search-btn"
                aria-label={searchOpen ? 'Close search' : 'Open search'}
              >
                {searchOpen ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                )}
              </button>
            </form>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-pill"
              style={{
                display: 'none',
                padding: '10px 20px',
                fontSize: '11px'
              }}
            >
              <span>Get Involved</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-toggle-btn"
              style={{
                background: 'transparent',
                border: 'none',
                color: isTransparent ? '#ffffff' : '#002041',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px'
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div
            style={{
              marginTop: '16px',
              padding: '24px',
              backgroundColor: 'var(--color-midnight)',
              borderRadius: '8px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              color: '#ffffff'
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <li>
                <Link to="/who-we-are" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  About Us & Founder Message
                </Link>
              </li>
              <li>
                <Link to="/our-programs" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Our Initiatives
                </Link>
              </li>
              <li>
                <a href="/#tribute" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Tribute to Indian Armed Forces
                </a>
              </li>
              <li>
                <a href="/#ideas" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Gallery & Bravery Stories
                </a>
              </li>
              <li>
                <a href="/#contact" style={{ color: '#00A4E1', textDecoration: 'none', fontSize: '15px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav-menu {
            display: block !important;
          }
          .brand-subtext {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
          .btn-pill {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
