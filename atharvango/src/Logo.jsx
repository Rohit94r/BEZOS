import React from 'react';

/**
 * Authentic Atharva Foundation Logo Component
 * Adheres strictly to Section 3 of Atharva Foundation Branding Kit:
 * - Original multicoloured tree logo mark
 * - "ATHARVA FOUNDATION" wordmark
 * - "An Initiative by Atharva Educational Trust" tagline
 */
export default function Logo({ 
  variant = 'dark', // 'dark' (for warm ivory/white) or 'light' (for deep burgundy)
  className = '',
  height = 54,
  showTagline = true 
}) {
  const isLight = variant === 'light';

  return (
    <div 
      className={`inline-flex items-center gap-3 select-none transition-transform duration-300 hover:scale-[1.02] ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}
    >
      {/* Multicoloured Tree Emblem */}
      <div 
        style={{
          width: `${height * 0.9}px`,
          height: `${height * 0.9}px`,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          background: isLight ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          borderRadius: isLight ? '10px' : '0',
          padding: isLight ? '4px' : '0',
          boxShadow: isLight ? '0 2px 10px rgba(0,0,0,0.15)' : 'none'
        }}
      >
        <img 
          src="/images/ui/atharva_logo_transparent.png" 
          alt="Atharva Foundation Emblem"
          style={{
            height: '100%',
            width: 'auto',
            objectFit: 'contain',
            maxHeight: `${height}px`
          }}
          onError={(e) => {
            // Fallback to original logo3 if needed
            e.currentTarget.src = '/images/atharva/assets_images_logo3.png';
          }}
        />
      </div>

      {/* Atharva Foundation Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: 1.1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
          <span 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: `${height * 0.44}px`,
              fontWeight: 700,
              letterSpacing: '0.02em',
              color: isLight ? '#FFFFFF' : '#500D18',
              lineHeight: 1
            }}
          >
            ATHARVA
          </span>
          <span 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: `${height * 0.40}px`,
              fontWeight: 400,
              fontStyle: 'italic',
              color: isLight ? '#D9B45B' : '#716A65',
              lineHeight: 1
            }}
          >
            Foundation
          </span>
        </div>
        {showTagline && (
          <span 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: `${Math.max(9, height * 0.17)}px`,
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: isLight ? 'rgba(255, 255, 255, 0.8)' : '#716A65',
              marginTop: '3px',
              textTransform: 'uppercase'
            }}
          >
            An Initiative by Atharva Educational Trust
          </span>
        )}
      </div>
    </div>
  );
}
