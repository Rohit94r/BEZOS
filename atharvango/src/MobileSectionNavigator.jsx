import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUp, ChevronRight, Layers } from 'lucide-react';

export const SECTIONS = [
  { id: 'hero', name: 'Hero', label: 'Building An Inclusive India' },
  { id: 'our-story', name: 'Our Story', label: 'Empowering People' },
  { id: 'our-initiatives', name: 'Initiatives', label: 'Focused on People' },
  { id: 'our-approach', name: 'Approach', label: 'Heart of Everything' },
  { id: 'impact', name: 'Impact', label: 'Creating Brighter Tomorrow' },
  { id: 'people', name: 'People', label: 'Community of Changemakers' },
  { id: 'stories', name: 'Stories', label: 'Real People. Real Change' },
  { id: 'get-involved', name: 'Get Involved', label: 'Make a Difference' },
  { id: 'closing-banner', name: 'Join Us', label: 'Be Part of the Change' },
  { id: 'footer', name: 'Contact', label: 'Footer & Information' },
];

export default function MobileSectionNavigator({ onOpenDonate }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [showDrawer, setShowDrawer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = SECTIONS.findIndex((s) => s.id === entry.target.id);
          if (index !== -1) {
            setActiveIdx(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index) => {
    if (index >= SECTIONS.length) {
      // If at end, scroll back to hero
      const hero = document.getElementById('hero');
      if (hero) hero.scrollIntoView({ behavior: 'smooth' });
      setActiveIdx(0);
      return;
    }

    const target = SECTIONS[index];
    const el = document.getElementById(target.id);
    if (el) {
      const yOffset = -70; // Header offset
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveIdx(index);
    }
  };

  const handleNextSection = () => {
    if (activeIdx >= SECTIONS.length - 1) {
      scrollToSection(0); // Back to top
    } else {
      scrollToSection(activeIdx + 1);
    }
  };

  const isLast = activeIdx >= SECTIONS.length - 1;
  const currentSection = SECTIONS[activeIdx] || SECTIONS[0];

  return (
    <>
      {/* Floating Section Navigator Dock (Mobile primary & Desktop assistive) */}
      <div
        className="fixed z-40 transition-all duration-300"
        style={{
          bottom: '20px',
          right: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          filter: 'drop-shadow(0 8px 24px rgba(80, 13, 24, 0.28))',
        }}
      >
        {/* Section Pill indicator with quick jump toggle */}
        <button
          onClick={() => setShowDrawer(!showDrawer)}
          aria-label="View all sections"
          style={{
            background: 'rgba(49, 10, 16, 0.94)',
            backdropFilter: 'blur(12px)',
            color: '#F8F3E9',
            border: '1px solid rgba(217, 180, 91, 0.35)',
            borderRadius: '9999px',
            padding: '8px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            transition: 'all 0.25s ease',
          }}
          className="hover:scale-105 active:scale-95"
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#D9B45B',
              display: 'inline-block',
              animation: 'pulse 2s infinite',
            }}
          />
          <span style={{ fontFamily: 'var(--font-sans)', color: '#D9B45B' }}>
            {activeIdx + 1}/{SECTIONS.length}
          </span>
          <span 
            className="hidden sm:inline"
            style={{ 
              maxWidth: '130px', 
              whiteSpace: 'nowrap', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis',
              color: '#F8F3E9' 
            }}
          >
            {currentSection.name}
          </span>
          <Layers size={13} style={{ color: '#D9B45B', opacity: 0.8 }} />
        </button>

        {/* PRIMARY ACTION: Next Section Circular Arrow Button requested by user */}
        <button
          onClick={handleNextSection}
          id="mobile-next-section-btn"
          aria-label={isLast ? "Return to top" : "Go to next section"}
          title={isLast ? "Back to top" : `Jump to next: ${SECTIONS[activeIdx + 1]?.name || 'Next'}`}
          style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            backgroundColor: '#D9B45B',
            color: '#500D18',
            border: '2px solid #FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(80, 13, 24, 0.35), 0 0 12px rgba(217, 180, 91, 0.5)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="hover:scale-110 active:scale-95"
        >
          {isLast ? (
            <ArrowUp size={24} strokeWidth={2.5} style={{ animation: 'bounce 1.5s infinite' }} />
          ) : (
            <ArrowDown size={24} strokeWidth={2.5} style={{ animation: 'bounce 1.5s infinite' }} />
          )}
        </button>
      </div>

      {/* Quick Section Jump Drawer Modal */}
      {showDrawer && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            animation: 'fadeIn 0.2s ease',
          }}
          onClick={() => setShowDrawer(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '480px',
              backgroundColor: '#F8F3E9',
              borderTopLeftRadius: '24px',
              borderTopRightRadius: '24px',
              border: '1px solid rgba(80, 13, 24, 0.15)',
              padding: '24px',
              maxHeight: '80vh',
              overflowY: 'auto',
              boxShadow: '0 -10px 30px rgba(0,0,0,0.3)',
              animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#D9B45B', fontWeight: 700 }}>
                  Page Navigation
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#500D18', margin: '2px 0 0 0' }}>
                  Jump to Section
                </h3>
              </div>
              <button
                onClick={() => setShowDrawer(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  color: '#716A65',
                  cursor: 'pointer',
                  padding: '4px 8px',
                }}
              >
                ×
              </button>
            </div>

            <p style={{ fontSize: '13px', color: '#716A65', marginBottom: '16px' }}>
              Tap any section to smooth scroll immediately without manual scrolling:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {SECTIONS.map((sec, idx) => {
                const isCurrent = idx === activeIdx;
                return (
                  <button
                    key={sec.id}
                    onClick={() => {
                      scrollToSection(idx);
                      setShowDrawer(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: isCurrent ? '#500D18' : '#FFFFFF',
                      color: isCurrent ? '#FFFFFF' : '#292321',
                      border: isCurrent ? '1px solid #500D18' : '1px solid rgba(80, 13, 24, 0.08)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 700,
                          backgroundColor: isCurrent ? '#D9B45B' : '#F8F3E9',
                          color: isCurrent ? '#500D18' : '#716A65',
                        }}
                      >
                        {idx + 1}
                      </span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '14px' }}>{sec.name}</div>
                        <div style={{ fontSize: '12px', opacity: 0.8, color: isCurrent ? '#D9B45B' : '#716A65' }}>
                          {sec.label}
                        </div>
                      </div>
                    </div>
                    <ChevronRight size={16} style={{ opacity: isCurrent ? 1 : 0.4 }} />
                  </button>
                );
              })}
            </div>

            {onOpenDonate && (
              <button
                onClick={() => {
                  setShowDrawer(false);
                  onOpenDonate();
                }}
                style={{
                  width: '100%',
                  marginTop: '16px',
                  padding: '14px',
                  backgroundColor: '#D9B45B',
                  color: '#500D18',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Support a Cause Now →
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
