import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const INITIATIVES_DATA = [
  {
    id: 'girlchild',
    title: 'Girl Child Education in Rural Regions',
    subtitle: 'Over 5,000 Daughters Supported',
    image: '/images/atharva/assets_images_resource_cause-4.jpg',
    lead: 'Education is the greatest catalyst for social change. In many remote and border districts of India, girl children drop out of school due to financial hardship and lack of learning resources.',
    details: [
      'Providing annual scholarships to cover tuition and school fees.',
      'Distributing educational kits containing notebooks, stationery, bags, and uniforms.',
      'Conducting interactive mentoring workshops to encourage higher studies and STEM careers.',
      'Working closely with rural panchayats and school heads to eliminate dropout rates.',
    ],
  },
  {
    id: 'martyrs',
    title: 'Assistance to Families of Martyrs (One For All)',
    subtitle: 'National Tribute & Direct Aid',
    image: '/images/atharva/assets_images_foundation-gallery_unsungheroes_cover.jpg',
    lead: 'Our soldiers defend the borders selflessly so that 1.4 billion citizens can sleep peacefully. When a braveheart falls in the line of duty, their family deserves the collective gratitude and lifelong support of the entire nation.',
    details: [
      'Felicitating and providing direct financial aid to martyrs’ wives, children, and elderly parents.',
      'Educational sponsorship for the children of fallen defense personnel.',
      'Organizing high-profile national commemoration events bringing stories of courage into the spotlight.',
      'Personal visits by Atharva Foundation trustees to remote martyr homes from Jammu & Kashmir to Assam.',
    ],
  },
  {
    id: 'computers',
    title: '100 Computers for Daughters Program',
    subtitle: 'Bridging the Digital Divide',
    image: '/images/atharva/assets_images_foundation-gallery_technologyawareness_cover.jpg',
    lead: 'Digital literacy is a fundamental right in the 21st century. Through the "100 Computers" mission, Atharva Foundation equips young girls in remote schools with modern computers and digital learning tools.',
    details: [
      'Distributing desktop computers to schools in rural, tribal, and border zones.',
      'Setting up computer labs with Internet connectivity and basic software training.',
      'Training teachers to integrate digital modules into daily school curricula.',
      'Enabling girls to explore coding, basic computing, and online educational resources.',
    ],
  },
  {
    id: 'women',
    title: 'Women Achiever’s Awards & Skill Building',
    subtitle: 'Honoring Courage & Leadership',
    image: '/images/atharva/assets_images_foundation-gallery_womensdayindiandefenceforce_cover.jpg',
    lead: 'Recognizing women who demonstrate extraordinary grit against all odds. Every year on International Women’s Day, Atharva Foundation confers the Women Achiever’s Awards upon inspiring women across India.',
    details: [
      'Honoring women from defense forces, emergency response, sports, and social welfare.',
      'Creating self-help groups and vocational training workshops for rural homemakers.',
      'Empowering women with micro-enterprise skills in stitching, handicrafts, and commerce.',
      'Providing legal and psychological counseling support for women facing distress.',
    ],
  },
  {
    id: 'environment',
    title: 'Environmental Care & Tree Plantation',
    subtitle: 'Green Communities for Future Generations',
    image: '/images/atharva/assets_images_foundation-gallery_treeplantation_cover.jpg',
    lead: 'Clean air, green neighborhoods, and hygienic surroundings are essential for human dignity. Atharva Foundation conducts massive community greening and sanitation drives.',
    details: [
      'Massive tree plantation drives with thousands of saplings planted across Mumbai, Malad, and rural Maharashtra.',
      'Organizing clean-up and sanitation awareness camps in dense urban slums.',
      'School environment awareness clubs promoting plastic waste reduction.',
      'Distributing reusable cloth bags and tree saplings to local families.',
    ],
  },
  {
    id: 'sports',
    title: 'Sports Talent & Youth Empowerment',
    subtitle: 'Making India Proud Globally',
    image: '/images/atharva/assets_images_gallery_gallery10.jpg',
    lead: 'India possesses immense natural sports talent in its villages and small towns. Atharva Foundation supports underprivileged children with sports gear and mentorship.',
    details: [
      'Sponsoring athletic kits, coaching, and nutrition for promising young athletes.',
      'Organizing inter-school tournaments across athletics, cricket, football, and martial arts.',
      'Supporting rural girls to take up competitive sports and build self-defense skills.',
      'Connecting talented youths with professional academies and state-level coaches.',
    ],
  },
];

export default function OurPrograms() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'girlchild';
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  const activeInitiative = INITIATIVES_DATA.find((i) => i.id === activeTab) || INITIATIVES_DATA[0];

  return (
    <div style={{ backgroundColor: 'var(--color-quartz)', minHeight: '100vh', paddingTop: '100px' }}>
      {/* Header */}
      <section style={{ padding: '60px 0 40px 0', borderBottom: '1px solid var(--color-alabaster)' }}>
        <div className="site-container">
          <div className="section-badge-wrapper">
            <span className="section-badge">Our Initiatives</span>
            <hr className="duo-line" />
          </div>
          <h1 style={{ fontSize: '42px', marginBottom: '20px' }}>
            Action-Oriented Initiatives <br />
            Transforming Indian Lives
          </h1>
          <p className="text-lead" style={{ maxWidth: '850px' }}>
            From educating daughters to honoring martyrs' families, Atharva Foundation executes focused programs that solve real challenges on ground zero.
          </p>
        </div>
      </section>

      {/* Tabs & Content */}
      <section style={{ padding: '60px 0 100px 0' }}>
        <div className="site-container">
          {/* Horizontal Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              overflowX: 'auto',
              paddingBottom: '20px',
              marginBottom: '40px',
              borderBottom: '1px solid var(--color-alabaster)'
            }}
          >
            {INITIATIVES_DATA.map((item) => {
              const isSelected = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    padding: '12px 20px',
                    borderRadius: '9999px',
                    fontSize: '13px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    border: isSelected ? '1px solid var(--color-ocean)' : '1px solid var(--color-alabaster)',
                    backgroundColor: isSelected ? 'var(--color-ocean)' : '#ffffff',
                    color: isSelected ? '#ffffff' : 'var(--color-midnight)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {item.title.split(' ')[0]} {item.title.split(' ')[1]}
                </button>
              );
            })}
          </div>

          {/* Active Tab Card Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              backgroundColor: '#ffffff',
              padding: '48px',
              borderRadius: '8px',
              border: '1px solid var(--color-alabaster)',
              boxShadow: '0 10px 30px rgba(0,32,65,0.06)'
            }}
          >
            <div>
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-clay)' }}>
                {activeInitiative.subtitle}
              </span>
              <h2 style={{ fontSize: '32px', margin: '12px 0 20px 0', color: 'var(--color-midnight)' }}>
                {activeInitiative.title}
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#334155', marginBottom: '24px' }}>
                {activeInitiative.lead}
              </p>

              <h4 style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-midnight)', marginBottom: '16px' }}>
                Key Actions & Impact:
              </h4>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: 1.7, color: '#475569', marginBottom: '32px' }}>
                {activeInitiative.details.map((point, i) => (
                  <li key={i} style={{ marginBottom: '8px' }}>{point}</li>
                ))}
              </ul>

              <Link to="/#contact-form" className="btn-pill">
                <span>Support This Initiative</span>
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 9h10M10 5l4 4-4 4" />
                </svg>
              </Link>
            </div>

            <div>
              <img
                src={activeInitiative.image}
                alt={activeInitiative.title}
                style={{
                  width: '100%',
                  aspectRatio: '4 / 3',
                  objectFit: 'cover',
                  borderRadius: '6px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
