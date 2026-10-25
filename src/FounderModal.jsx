import React from 'react';
import { X, Quote, Award, Sparkles } from 'lucide-react';

export default function FounderModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(20, 4, 8, 0.78)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '680px',
          backgroundColor: '#F8F3E9',
          borderRadius: '24px',
          border: '1px solid rgba(217, 180, 91, 0.4)',
          boxShadow: '0 25px 50px -12px rgba(80, 13, 24, 0.45)',
          overflow: 'hidden',
          animation: 'scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          style={{
            backgroundColor: '#500D18',
            color: '#FFFFFF',
            padding: '24px',
            position: 'relative',
            borderBottom: '3px solid #D9B45B',
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '50%',
            }}
          >
            <X size={20} />
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div 
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #D9B45B',
                flexShrink: 0,
              }}
            >
              <img 
                src="/images/atharva/assets_images_resource_1J6A2037.jpg" 
                alt="Shri Sunil Rane"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.currentTarget.src = '/images/ui/hero_founder_banner.jpg';
                }}
              />
            </div>
            <div>
              <span style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D9B45B', fontWeight: 600 }}>
                Founder’s Vision & Message
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', margin: '2px 0 0 0', color: '#FFFFFF' }}>
                Shri Sunil Rane
              </h2>
              <p style={{ margin: '2px 0 0 0', fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>
                Chancellor, Atharva University | Founder Chairman, Atharva Foundation
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '28px', maxHeight: '70vh', overflowY: 'auto' }}>
          {/* Quote Banner */}
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '20px',
              borderLeft: '4px solid #500D18',
              boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
              marginBottom: '20px',
            }}
          >
            <Quote size={28} color="#D9B45B" style={{ marginBottom: '8px' }} />
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', fontStyle: 'italic', color: '#500D18', lineHeight: '1.5', margin: 0 }}>
              "The growth of a nation depends on the growth of the various sections of its society. Our single agenda is 'Nation First' — creating opportunity, self-reliance, and dignity for every daughter, soldier family, and underprivileged youth."
            </p>
          </div>

          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#500D18', marginBottom: '8px' }}>
            About the Founder
          </h4>
          <p style={{ fontSize: '14px', color: '#292321', lineHeight: '1.7', marginBottom: '16px' }}>
            Shri Sunil Rane is an action-oriented educationist and visionary leader whose relentless pursuit has transformed educational and social empowerment in India. As the founder of Atharva Educational Trust, he established world-class institutions imparting quality education in Engineering, Management, Hospitality, Fashion, and Film.
          </p>
          <p style={{ fontSize: '14px', color: '#292321', lineHeight: '1.7', marginBottom: '20px' }}>
            His noble belief that privileged institutions must actively serve grassroots India gave birth to <strong>Atharva Foundation</strong>. Under his leadership, programs such as <em>One For All | All For One</em> (honoring families of martyrs), <em>100 Computers for Daughters</em>, and the prestigious <em>Women Achiever’s Awards</em> have positively impacted over 25,000 lives across remote and border regions.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid rgba(80, 13, 24, 0.1)' }}>
              <Award size={20} color="#D9B45B" style={{ marginBottom: '6px' }} />
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#500D18' }}>Nation First</div>
              <div style={{ fontSize: '12px', color: '#716A65' }}>Unconditional tribute & welfare for martyrs and soldier families.</div>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', padding: '14px', borderRadius: '12px', border: '1px solid rgba(80, 13, 24, 0.1)' }}>
              <Sparkles size={20} color="#D9B45B" style={{ marginBottom: '6px' }} />
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#500D18' }}>Girl Child Dignity</div>
              <div style={{ fontSize: '12px', color: '#716A65' }}>Bridging the digital divide and enabling rural girls to lead.</div>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <button
              onClick={onClose}
              style={{
                padding: '12px 28px',
                backgroundColor: '#500D18',
                color: '#D9B45B',
                fontWeight: 700,
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
