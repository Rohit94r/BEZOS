import React from 'react';

/**
 * Atharva Foundation logo.
 *
 * Renders the official logo artwork only — no duplicated HTML wordmark or
 * tagline. `emblemOnly` switches to the clean tree mark for compact spaces
 * such as the main navigation bar.
 */
export default function Logo({
  variant = 'dark', // 'dark' (light background) or 'light' (dark background)
  className = '',
  height = 54,
  showTagline = true, // kept for API compatibility
  emblemOnly = false,
}) {
  const isLight = variant === 'light';
  const src = emblemOnly
    ? '/images/ui/atharva_emblem.png'
    : '/images/ui/atharva_logo_lockup.png';

  return (
    <span
      className={`atharva-logo ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        height: `${height}px`,
        padding: isLight ? '5px 7px' : 0,
        background: isLight ? 'rgba(255, 255, 255, 0.96)' : 'transparent',
        borderRadius: isLight ? '10px' : 0,
        boxShadow: isLight ? '0 2px 12px rgba(0, 0, 0, 0.18)' : 'none',
        transition: 'opacity 0.25s ease, transform 0.25s ease',
      }}
    >
      <img
        src={src}
        alt="Atharva Foundation"
        width={emblemOnly ? 71 : 167}
        height={emblemOnly ? 42 : 78}
        style={{
          display: 'block',
          height: '100%',
          width: 'auto',
          maxHeight: '100%',
          objectFit: 'contain',
        }}
        onError={(e) => {
          e.currentTarget.src = '/images/ui/atharva_logo_transparent.png';
          e.currentTarget.style.height = '100%';
        }}
      />
    </span>
  );
}

export { Logo as AtharvaLogo };
