import React from 'react';
import { ArrowRight, BookOpen, Shield, Users, Sprout, Heart, Laptop } from 'lucide-react';
import BotanicalLeaf from '../BotanicalLeaf';

const PROGRAMS_DATA = [
  {
    title: 'Girl Child Education in Rural India',
    tag: 'EDUCATION',
    icon: BookOpen,
    image: '/images/ui/init_card1.jpg',
    desc: 'Empowering young girls from economically disadvantaged backgrounds with scholarships, study kits, and school infrastructure to ensure no daughter is left behind.',
    metrics: '12,000+ Girls Enrolled',
  },
  {
    title: 'Assistance to Families of Martyrs (Bravehearts)',
    tag: 'TRIBUTE & WELFARE',
    icon: Shield,
    image: '/images/ui/init_bravehearts.jpg',
    desc: 'Extending respectful financial, emotional, and educational assistance to the families and widows of our brave martyrs who laid down their lives for India.',
    metrics: '350+ Martyr Families Honored',
  },
  {
    title: '100 Computers for Daughters Initiative',
    tag: 'DIGITAL EMPOWERMENT',
    icon: Laptop,
    image: '/images/ui/story_digital.jpg',
    desc: 'Bridging the digital divide by distributing modern computers and providing digital literacy training to young girls in remote and border villages.',
    metrics: '100+ Border Village Labs',
  },
  {
    title: 'Women Achiever’s Awards',
    tag: 'WOMEN LEADERSHIP',
    icon: Users,
    image: '/images/ui/init_card2.jpg',
    desc: 'An annual national celebration acknowledging the outstanding courage and perseverance of women from the armed forces, sports, education, and rural entrepreneurship.',
    metrics: '500+ Grassroots Leaders Awarded',
  },
  {
    title: 'Community Health, Sanitation & Cleanliness Camps',
    tag: 'HEALTHCARE',
    icon: Heart,
    image: '/images/ui/init_card3.jpg',
    desc: 'Organizing free health screenings, medicine distributions, and menstrual hygiene awareness workshops in slum clusters and underserved hamlets.',
    metrics: '8,000+ Families Screened',
  },
  {
    title: 'Tree Plantation & Environmental Stewardship',
    tag: 'ENVIRONMENT',
    icon: Sprout,
    image: '/images/ui/init_card4.jpg',
    desc: 'Conducting extensive afforestation drives across Maharashtra and mobilizing school students to care for saplings to build green, sustainable communities.',
    metrics: '50,000+ Saplings Planted',
  },
];

export default function OurPrograms({ onOpenDonate }) {
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
          <span className="category-badge">OUR WORK —</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4.5vw, 54px)', color: '#FFFFFF', marginBottom: '16px' }}>
            Flagship Initiatives & Programs
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.88)', maxWidth: '640px', lineHeight: '1.7' }}>
            Every initiative of Atharva Foundation is built around authentic grassroots intervention, delivering measurable impact and lasting dignity to vulnerable communities.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <div className="site-container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginBottom: '60px',
          }}
        >
          {PROGRAMS_DATA.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <div 
                key={idx}
                className="editorial-card"
                style={{
                  borderRadius: '20px',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <div className="card-img-wrap" style={{ height: '220px', position: 'relative' }}>
                  <img 
                    src={prog.image} 
                    alt={prog.title}
                    onError={(e) => {
                      e.currentTarget.src = '/images/ui/belief_girl.jpg';
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '-18px',
                      left: '20px',
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #D9B45B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#500D18',
                      boxShadow: '0 4px 12px rgba(80, 13, 24, 0.15)',
                      zIndex: 2,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                </div>

                <div style={{ padding: '30px 24px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.12em', color: '#D9B45B', textTransform: 'uppercase', marginBottom: '6px' }}>
                    {prog.tag}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#500D18', marginBottom: '10px' }}>
                    {prog.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#716A65', lineHeight: '1.6', flex: 1, marginBottom: '16px' }}>
                    {prog.desc}
                  </p>
                  
                  <div 
                    style={{
                      backgroundColor: '#F8F3E9',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#500D18',
                      marginBottom: '16px',
                    }}
                  >
                    Impact: {prog.metrics}
                  </div>

                  <button
                    onClick={onOpenDonate}
                    className="btn-gold"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '13.5px' }}
                  >
                    <span>Support This Program</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
