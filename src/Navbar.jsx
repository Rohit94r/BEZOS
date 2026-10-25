import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

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
      alert(`Searching for: "${searchQuery}"`);
    }
  };

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <header className={`header-nav ${isTransparent ? 'transparent' : 'scrolled'}`}>
      <div className="site-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }} aria-label="Bezos Earth Fund">
            <Logo
              className="w-auto"
              style={{ height: '54px', transition: 'all 0.3s ease' }}
              textFill={isTransparent ? '#ffffff' : '#002041'}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ display: 'none' }} className="desktop-nav-menu" aria-label="Main Navigation">
            <ul style={{ display: 'flex', alignItems: 'center', gap: '36px', listStyle: 'none' }}>
              {/* Who We Are */}
              <li
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown('who')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/who-we-are"
                  className={`nav-link ${location.pathname === '/who-we-are' ? 'active' : ''}`}
                >
                  <span>Who We Are</span>
                  <svg width="12" height="12" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.2s ease', transform: activeDropdown === 'who' ? 'rotate(180deg)' : 'none' }}>
                    <path d="M4 6l5 5 5-5" />
                  </svg>
                </Link>

                {activeDropdown === 'who' && (
                  <div className="dropdown-panel">
                    <Link to="/who-we-are" className="dropdown-link">Who We Are</Link>
                    <Link to="/who-we-are#our-journey" className="dropdown-link">Our Journey</Link>
                    <Link to="/who-we-are#our-people" className="dropdown-link">Our People</Link>
                    <Link to="/who-we-are#careers" className="dropdown-link">Careers</Link>
                  </div>
                )}
              </li>

              {/* Our Approach */}
              <li
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown('approach')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="/#about-us"
                  className="nav-link"
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>Our Approach</span>
                  <svg width="12" height="12" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.2s ease', transform: activeDropdown === 'approach' ? 'rotate(180deg)' : 'none' }}>
                    <path d="M4 6l5 5 5-5" />
                  </svg>
                </a>

                {activeDropdown === 'approach' && (
                  <div className="dropdown-panel">
                    <a href="/#about-us" className="dropdown-link">Our Approach</a>
                    <a href="/#about-us" className="dropdown-link">Our View of the World</a>
                    <a href="/#ideas" className="dropdown-link">Systems Change</a>
                    <a href="/#about-us" className="dropdown-link">How We Work</a>
                  </div>
                )}
              </li>

              {/* Our Programs */}
              <li>
                <Link
                  to="/our-programs"
                  className={`nav-link ${location.pathname === '/our-programs' ? 'active' : ''}`}
                >
                  <span>Our Programs</span>
                </Link>
              </li>

              {/* News & Insights */}
              <li>
                <a
                  href="#ideas"
                  className="nav-link"
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('ideas')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>News & Insights</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Controls: Search & Mobile Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Search Input Form */}
            <form onSubmit={handleSearchSubmit} className="search-wrapper">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
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
                <Link to="/who-we-are" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Who We Are
                </Link>
              </li>
              <li>
                <a href="/#about-us" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Our Approach
                </a>
              </li>
              <li>
                <Link to="/our-programs" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Our Programs
                </Link>
              </li>
              <li>
                <a href="/#ideas" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  News & Insights
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
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
