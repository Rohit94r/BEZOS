import React from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoId = 'mPlUSVVlW5g' }) {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(20, 4, 8, 0.88)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease',
      }}
      onClick={onClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '900px',
          aspectRatio: '16/9',
          backgroundColor: '#000000',
          borderRadius: '18px',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
          border: '2px solid rgba(217, 180, 91, 0.4)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            zIndex: 10,
            background: 'rgba(56, 12, 20, 0.85)',
            border: '1px solid #D9B45B',
            color: '#FFFFFF',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          className="hover:scale-110 hover:bg-amber-400 hover:text-burgundy"
        >
          <X size={20} />
        </button>

        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Atharva Foundation - One For All | All For One Documentary"
          style={{ width: '100%', height: '100%', border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
