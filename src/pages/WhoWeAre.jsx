import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import BotanicalLeaf from '../BotanicalLeaf';

const TIMELINE = [
  {
    year: '2016',
    title: 'Formation of Atharva Foundation',
    description: 'Shri Sunil Rane establishes Atharva Foundation under the Atharva Educational Trust to serve the underprivileged sections of society and work with a "Nation First" mission.',
  },
  {
    year: '2017',
    title: 'Launch of "One For All | All For One"',
    description: 'Initiative launched to throw light on the supreme sacrifices of our brave soldiers and extend financial and emotional support to martyr families across India.',
  },
  {
    year: '2018',
    title: 'Girl Child Education in Rural Belts',
    description: 'Distribution of scholarships, notebooks, school kits, and uniforms to hundreds of underprivileged girl students in remote villages of Maharashtra and Rajasthan.',
  },
  {
    year: '2019',
    title: '100 Computers for Daughters Program',
    description: 'Pioneering digital literacy by setting up modern computer labs in remote schools and distributing desktop computers to young girls in border areas.',
  },
  {
    year: '2021-2024',
    title: 'Women Achiever’s Awards & Tree Plantation',
    description: 'Annual prestigious awards recognizing courageous women in defense, public service, and rural leadership, alongside extensive ecological tree plantation drives.',
  },
];

const LEADERSHIP = [
  {
    name: 'Shri Sunil Rane',
    role: 'Founder & Chairman, Atharva Foundation | Chancellor',
    bio: 'Visionary educationist, social leader, and Chairman of Atharva Educational Trust. He spearheads national-level social causes prioritizing youth education, defense personnel dignity, and rural women empowerment.',
    image: '/images/atharva/assets_images_resource_1J6A2037.jpg',
  },
  {
    name: 'Smt. Varsha Rane',
    role: 'Trustee & Patron',
    bio: 'Championing girl child welfare, health camps, and grassroots women entrepreneurship initiatives across remote rural regions.',
    image: '/images/atharva/assets_images_team_team-2.jpg',
  },
  {
    name: 'Col. Sudhir Raje (Retd.)',
    role: 'Director - Veterans & Armed Forces Welfare',
    bio: 'Directing the "One For All" initiative to identify, honor, and support martyr families and veterans across every state in India.',
    image: '/images/atharva/assets_images_team_team-1.jpg',
  },
];

export default function WhoWeAre({ onOpenDonate }) {
  return (
    <div style={{ backgroundColor: 'var(--color-ivory)', minHeight: '100vh', paddingTop: '40px', paddingBottom: '80px' }}>
      {/* Header Banner */}
      <section 
        style={{
          backgroundColor: '#500D18',
          color: '#FFFFFF',
          padding: '60px 0',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '60px',
        }}
      >
        <div style={{ position: 'absolute', top: '-30px', right: '-30px', opacity: 0.2 }}>
          <BotanicalLeaf width={300} height={300} color="#D9B45B" opacity={0.6} />
        </div>
        <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="category-badge">OUR FOUNDATION —</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4.5vw, 54px)', color: '#FFFFFF', marginBottom: '16px' }}>
            Who We Are
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.88)', maxWidth: '640px', lineHeight: '1.7' }}>
            Atharva Foundation is the philanthropic initiative of The Atharva Educational Trust, dedicated to the principle that real national growth begins with uplifting the underprivileged.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <div className="site-container" style={{ marginBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '36px',
              border: '1px solid rgba(80, 13, 24, 0.1)',
              boxShadow: '0 8px 24px rgba(80, 13, 24, 0.04)',
            }}
          >
            <span className="category-badge">OUR GUIDING PRINCIPLE</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: '#500D18', margin: '8px 0 16px 0' }}>
              Why We Exist
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14.5px', color: '#292321' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="#D9B45B" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Why are young daughters deprived of modern schooling and digital skills? We bridge this divide.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="#D9B45B" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Why aren't the families of soldiers who sacrificed their lives honored and supported? We stand beside them.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="#D9B45B" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Why wait for external interventions when we can act directly at the grassroots?</span>
              </li>
            </ul>
          </div>

          <div 
            style={{
              backgroundColor: '#310A10',
              borderRadius: '20px',
              padding: '36px',
              color: '#FFFFFF',
              border: '1px solid rgba(217, 180, 91, 0.3)',
              boxShadow: '0 8px 24px rgba(49, 10, 16, 0.2)',
            }}
          >
            <span style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#D9B45B', fontWeight: 700, textTransform: 'uppercase' }}>
              NATION FIRST
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: '#FFFFFF', margin: '8px 0 16px 0' }}>
              Our Mission
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.7', marginBottom: '20px' }}>
              To educate those who cannot afford school, champion women’s financial and emotional independence, provide unconditional tribute to martyr families, and foster healthy, green living.
            </p>
            <button
              onClick={onOpenDonate}
              className="btn-gold"
              style={{ fontSize: '14px' }}
            >
              <span>Join Our Mission</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="site-container" style={{ marginBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="category-badge">OUR STEWARDS —</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: '#500D18' }}>
            Foundation Leadership
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
          {LEADERSHIP.map((lead, i) => (
            <div 
              key={i}
              className="editorial-card"
              style={{
                borderRadius: '18px',
                backgroundColor: '#FFFFFF',
              }}
            >
              <div className="card-img-wrap" style={{ height: '240px' }}>
                <img 
                  src={lead.image} 
                  alt={lead.name}
                  onError={(e) => {
                    e.currentTarget.src = '/images/ui/people_educators.jpg';
                  }}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#500D18', marginBottom: '4px' }}>
                  {lead.name}
                </h3>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#D9B45B', textTransform: 'uppercase', marginBottom: '12px' }}>
                  {lead.role}
                </div>
                <p style={{ fontSize: '13.5px', color: '#716A65', lineHeight: '1.6' }}>
                  {lead.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="site-container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="category-badge">OUR JOURNEY —</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: '#500D18' }}>
            Milestones of Change
          </h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {TIMELINE.map((t, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                gap: '24px',
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid rgba(80, 13, 24, 0.08)',
                boxShadow: '0 4px 16px rgba(80, 13, 24, 0.03)',
              }}
            >
              <div 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#D9B45B',
                  flexShrink: 0,
                  width: '90px',
                }}
              >
                {t.year}
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#500D18', marginBottom: '6px' }}>
                  {t.title}
                </h4>
                <p style={{ fontSize: '14px', color: '#716A65', lineHeight: '1.6', margin: 0 }}>
                  {t.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
