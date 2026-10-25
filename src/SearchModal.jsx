import React, { useState } from 'react';
import { Search, X, ChevronRight, BookOpen, Heart, Users, Shield } from 'lucide-react';

const SEARCHABLE_ITEMS = [
  { title: 'Girl Child Education in Rural India', category: 'Initiative', icon: BookOpen, targetId: 'our-initiatives' },
  { title: 'Assistance to Families of Martyrs (Bravehearts)', category: 'Initiative', icon: Shield, targetId: 'our-initiatives' },
  { title: 'Women Empowerment & Entrepreneurship', category: 'Initiative', icon: Users, targetId: 'our-initiatives' },
  { title: '100 Computers for Daughters Initiative', category: 'Initiative', icon: BookOpen, targetId: 'our-initiatives' },
  { title: 'Healthcare & Community Well-being Camps', category: 'Initiative', icon: Heart, targetId: 'our-initiatives' },
  { title: 'Education opens doors — Digital Access Story', category: 'Story', icon: BookOpen, targetId: 'stories' },
  { title: 'Women who inspire — Grassroots Leadership', category: 'Story', icon: Users, targetId: 'stories' },
  { title: 'Stronger communities — Healthcare at Grassroots', category: 'Story', icon: Heart, targetId: 'stories' },
  { title: 'A growing community of changemakers', category: 'People', icon: Users, targetId: 'people' },
  { title: 'Support an Initiative / Become a Volunteer', category: 'Get Involved', icon: Heart, targetId: 'get-involved' },
  { title: 'Shri Sunil Rane — Founder Message', category: 'About', icon: Users, targetId: 'hero' },
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim() === '' 
    ? SEARCHABLE_ITEMS.slice(0, 5) 
    : SEARCHABLE_ITEMS.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (targetId) => {
    onClose();
    const el = document.getElementById(targetId);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(20, 4, 8, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px 16px 20px 16px',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '560px',
          backgroundColor: '#F8F3E9',
          borderRadius: '20px',
          border: '1px solid rgba(217, 180, 91, 0.4)',
          boxShadow: '0 25px 50px -12px rgba(80, 13, 24, 0.45)',
          overflow: 'hidden',
          animation: 'scaleUp 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '16px 20px',
            borderBottom: '1px solid rgba(80, 13, 24, 0.12)',
            backgroundColor: '#FFFFFF',
            gap: '12px',
          }}
        >
          <Search size={20} color="#500D18" />
          <input
            type="text"
            autoFocus
            placeholder="Search initiatives, stories, people, or impact..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '15px',
              fontFamily: 'var(--font-sans)',
              color: '#292321',
              backgroundColor: 'transparent',
            }}
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#716A65', padding: '4px' }}
            >
              ×
            </button>
          )}
          <button 
            onClick={onClose}
            style={{
              background: 'rgba(80, 13, 24, 0.08)',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 10px',
              fontSize: '12px',
              cursor: 'pointer',
              color: '#500D18',
              fontWeight: 600,
            }}
          >
            ESC
          </button>
        </div>

        <div style={{ maxHeight: '360px', overflowY: 'auto', padding: '12px' }}>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#716A65', fontWeight: 600, padding: '4px 8px 8px 8px' }}>
            {query.trim() === '' ? 'Quick Suggestions' : `Found ${filtered.length} matches`}
          </div>
          {filtered.length === 0 ? (
            <div style={{ padding: '24px', textAlign: 'center', color: '#716A65', fontSize: '14px' }}>
              No matches found for "{query}". Try searching "Education", "Martyrs", or "Women".
            </div>
          ) : (
            filtered.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  onClick={() => handleSelect(item.targetId)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease',
                  }}
                  className="hover:bg-amber-100/60"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div 
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(80, 13, 24, 0.08)',
                        color: '#500D18',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '14px', color: '#292321' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '11px', color: '#D9B45B', fontWeight: 700 }}>
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={16} color="#716A65" />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
