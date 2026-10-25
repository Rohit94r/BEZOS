import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Heart } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenDonate, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '/#our-story' },
    { name: 'Our Work', href: '/#our-initiatives' },
    { name: 'People', href: '/#people' },
    { name: 'Impact', href: '/#impact' },
    { name: 'Stories', href: '/#stories' },
    { name: 'Support a Cause', href: '/#get-involved', isDonate: true },
  ];

  const handleNavClick = (href, isDonate) => {
    setMobileMenuOpen(false);
    if (isDonate) {
      onOpenDonate();
      return;
    }
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(80, 13, 24, 0.08)',
          boxShadow: isScrolled ? '0 4px 20px rgba(80, 13, 24, 0.06)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div 
          className="site-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: isScrolled ? '72px' : '82px',
            transition: 'height 0.3s ease',
          }}
        >
          {/* Logo (Dark variant for light background as shown in latest mockup) */}
          <Link 
            to="/" 
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo variant="dark" height={isScrolled ? 48 : 54} showTagline={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav 
            className="hidden lg:flex" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '30px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.isDonate);
                }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14.5px',
                  fontWeight: 500,
                  color: '#292321',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  padding: '6px 2px',
                  position: 'relative',
                  transition: 'color 0.2s ease',
                }}
                className="hover:text-burgundy transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Search */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              style={{
                background: 'rgba(80, 13, 24, 0.04)',
                border: '1px solid rgba(80, 13, 24, 0.12)',
                color: '#500D18',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              className="hover:bg-amber-100 hover:scale-105"
            >
              <Search size={18} />
            </button>

            {/* Primary Action Button: "Get Involved →" matching mockup */}
            <button
              onClick={onOpenDonate}
              style={{
                backgroundColor: '#D9B45B',
                color: '#500D18',
                fontFamily: 'var(--font-sans)',
                fontSize: '14.5px',
                fontWeight: 700,
                padding: '11px 24px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(217, 180, 91, 0.35)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="hover:scale-105 active:scale-95"
            >
              <span>Get Involved</span>
              <span style={{ fontSize: '16px' }}>→</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
              aria-label="Toggle mobile menu"
              style={{
                background: 'none',
                border: 'none',
                color: '#500D18',
                padding: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 45,
            backgroundColor: 'rgba(20, 4, 8, 0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            animation: 'fadeIn 0.2s ease',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderBottom: '3px solid #D9B45B',
              padding: '24px 20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
              animation: 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <Logo variant="dark" height={44} showTagline={false} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: 'rgba(80, 13, 24, 0.08)',
                  border: 'none',
                  color: '#500D18',
                  borderRadius: '50%',
                  padding: '6px',
                  cursor: 'pointer',
                }}
              >
                <X size={22} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href, link.isDonate);
                  }}
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '20px',
                    color: '#500D18',
                    textDecoration: 'none',
                    padding: '8px 0',
                    borderBottom: '1px solid rgba(80, 13, 24, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{link.name}</span>
                  <span style={{ color: '#D9B45B', fontSize: '18px' }}>›</span>
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              style={{
                width: '100%',
                backgroundColor: '#D9B45B',
                color: '#500D18',
                padding: '14px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <Heart size={18} fill="#500D18" />
              <span>Get Involved & Support a Cause</span>
            </button>

            <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '12px', color: '#716A65' }}>
              Atharva Foundation • An Initiative by Atharva Educational Trust
            </div>
          </div>
        </div>
      )}
    </>
  );
}
