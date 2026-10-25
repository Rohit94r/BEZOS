import React from 'react';
import { Link } from 'react-router-dom';

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
    role: 'Founder & Chairman, Atharva Foundation',
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

export default function WhoWeAre() {
  return (
    <div style={{ backgroundColor: 'var(--color-quartz)', minHeight: '100vh', paddingTop: '100px' }}>
      {/* Page Header */}
      <section style={{ padding: '60px 0 40px 0', borderBottom: '1px solid var(--color-alabaster)' }}>
        <div className="site-container">
          <div className="section-badge-wrapper">
            <span className="section-badge">Who We Are</span>
            <hr className="duo-line" />
          </div>
          <h1 style={{ fontSize: '42px', marginBottom: '20px' }}>
            Inspired by Service. <br />
            Dedicated to the Nation.
          </h1>
          <p className="text-lead" style={{ maxWidth: '850px' }}>
            Atharva Foundation is an initiative of The Atharva Educational Trust. We believe that true progress of India can only be achieved when education, dignity, and opportunities reach our most remote villages and the families of those who protect our borders.
          </p>
        </div>
      </section>

      {/* Founder Message Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="site-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <img
                src="/images/atharva/assets_images_resource_1J6A2037.jpg"
                alt="Shri Sunil Rane"
                style={{ width: '100%', borderRadius: '6px', boxShadow: '0 20px 40px rgba(0,32,65,0.15)' }}
              />
            </div>
            <div>
              <span className="section-badge" style={{ color: 'var(--color-clay)' }}>Founder Message</span>
              <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>
                "We must not wait for change — we must be the change."
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#334155', marginBottom: '16px' }}>
                Shri Sunil Rane, Chairman of Atharva Foundation, has a straightforward agenda — <strong>“Nation First”</strong>. He observed that too many children in rural areas are deprived of quality education, families of martyrs who gave their tomorrow for our today are often overlooked, and women in disadvantaged areas lack access to digital technology.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#334155', marginBottom: '24px' }}>
                Through the Atharva Foundation, our teams travel directly to border districts, martyr villages, and remote rural communities to distribute computers, provide educational sponsorships, and celebrate the selfless heroes of our armed forces.
              </p>
              <img
                src="/images/atharva/assets_images_resource_founder-sign.png"
                alt="Shri Sunil Rane Signature"
                style={{ height: '44px', width: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" style={{ padding: '80px 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--color-alabaster)', borderBottom: '1px solid var(--color-alabaster)' }}>
        <div className="site-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
            <div style={{ padding: '40px', backgroundColor: 'var(--color-quartz)', borderRadius: '6px', border: '1px solid var(--color-alabaster)' }}>
              <span className="section-badge">Our Vision</span>
              <h3 style={{ fontSize: '24px', margin: '12px 0 16px 0', color: 'var(--color-ocean)' }}>Questions That Guide Us</h3>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: 1.7, color: '#334155' }}>
                <li style={{ marginBottom: '10px' }}>Why are so many children working at an early age instead of being in school?</li>
                <li style={{ marginBottom: '10px' }}>Why aren't the families of soldiers who sacrificed their lives honored and sustained?</li>
                <li style={{ marginBottom: '10px' }}>Why do underprivileged daughters lack modern digital skills in the 21st century?</li>
                <li>Why wait for others when we can bring about the change ourselves?</li>
              </ul>
            </div>

            <div style={{ padding: '40px', backgroundColor: 'var(--color-quartz)', borderRadius: '6px', border: '1px solid var(--color-alabaster)' }}>
              <span className="section-badge">Our Mission</span>
              <h3 style={{ fontSize: '24px', margin: '12px 0 16px 0', color: 'var(--color-ocean)' }}>Our Core Commitments</h3>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: 1.7, color: '#334155' }}>
                <li style={{ marginBottom: '10px' }}>Educate underprivileged children and provide digital literacy tools.</li>
                <li style={{ marginBottom: '10px' }}>Assist and celebrate families of martyrs across the defense forces.</li>
                <li style={{ marginBottom: '10px' }}>Empower women to live independent, dignified, and skilled lives.</li>
                <li>Promote sanitation, clean environment, and tree plantation drives across India.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section style={{ padding: '80px 0' }}>
        <div className="site-container">
          <div className="section-badge-wrapper">
            <span className="section-badge">Our Journey</span>
            <hr className="duo-line" />
          </div>
          <h2 style={{ fontSize: '32px', marginBottom: '40px' }}>Milestones in Service</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {TIMELINE.map((item, idx) => (
              <div key={idx} style={{ padding: '28px', backgroundColor: '#ffffff', borderRadius: '4px', border: '1px solid var(--color-alabaster)' }}>
                <strong style={{ fontSize: '28px', color: 'var(--color-clay)', fontFamily: 'var(--font-serif-medium)' }}>{item.year}</strong>
                <h4 style={{ fontSize: '18px', margin: '12px 0 8px 0', color: 'var(--color-midnight)' }}>{item.title}</h4>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#475569' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="trust" style={{ padding: '80px 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--color-alabaster)' }}>
        <div className="site-container">
          <div className="section-badge-wrapper">
            <span className="section-badge">Leadership</span>
            <hr className="duo-line" />
          </div>
          <h2 style={{ fontSize: '32px', marginBottom: '40px' }}>The Trustees & Patrons</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px' }}>
            {LEADERSHIP.map((leader, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--color-quartz)', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--color-alabaster)' }}>
                <img
                  src={leader.image}
                  alt={leader.name}
                  style={{ width: '100%', height: '260px', objectFit: 'cover', objectPosition: 'top' }}
                />
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '20px', marginBottom: '6px' }}>{leader.name}</h3>
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-clay)', display: 'block', marginBottom: '12px' }}>
                    {leader.role}
                  </span>
                  <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
