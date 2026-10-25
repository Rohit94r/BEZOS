import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HERO_SLIDES = [
  {
    tag: 'NATIONAL TRIBUTE',
    title: 'One For All | All For One: A Tribute to the Indian Armed Forces & Families of Martyrs',
    image: '/images/atharva/assets_images_icons_ADGPI_Indian_Army.jpg',
    isVideo: false,
    ctaText: 'Explore Tribute',
    link: '/our-programs',
  },
  {
    tag: 'GIRL CHILD EDUCATION',
    title: 'Empowering Young Daughters Across Remote & Border Regions Through Quality Education',
    image: '/images/atharva/assets_images_resource_cause-4.jpg',
    isVideo: false,
    ctaText: 'Learn More',
    link: '/our-programs',
  },
  {
    tag: 'MARTYRS WELFARE',
    title: 'Commemorating the Selfless Sacrifices of Our Soldiers and Supporting Their Families',
    image: '/images/atharva/assets_images_foundation-gallery_unsungheroes_cover.jpg',
    isVideo: false,
    ctaText: 'Watch Stories',
    link: '/our-programs',
  },
  {
    tag: 'WOMEN EMPOWERMENT',
    title: 'Women Achiever’s Awards: Celebrating Resilience, Courage & Grassroots Leadership',
    image: '/images/atharva/assets_images_foundation-gallery_womensdayindiandefenceforce_cover.jpg',
    isVideo: false,
    ctaText: 'Discover Impact',
    link: '/our-programs',
  },
];

const INITIATIVES = [
  {
    title: 'Girl Child Education in Rural India',
    description: 'Empowering young girls from economically disadvantaged backgrounds with scholarships, study kits, and school infrastructure to ensure no daughter is left behind.',
    image: '/images/atharva/assets_images_resource_cause-4.jpg',
    link: '/our-programs',
  },
  {
    title: 'Assistance to Families of Martyrs',
    description: 'Extending respectful financial, emotional, and educational assistance to the families and widows of our brave martyrs who laid down their lives for India.',
    image: '/images/atharva/assets_images_gallery_gallery6.jpg',
    link: '/our-programs',
  },
  {
    title: '100 Computers for Daughters Program',
    description: 'Bridging the digital divide by distributing modern computers and providing digital literacy training to young girls in remote and border villages.',
    image: '/images/atharva/assets_images_foundation-gallery_technologyawareness_cover.jpg',
    link: '/our-programs',
  },
  {
    title: 'Women Achiever’s Awards',
    description: 'An annual celebration acknowledging the outstanding courage and perseverance of women from the armed forces, sports, education, and rural entrepreneurship.',
    image: '/images/atharva/assets_images_foundation-gallery_womensdayindiandefenceforce_cover.jpg',
    link: '/our-programs',
  },
  {
    title: 'Tree Plantation & Environmental Care',
    description: 'Organizing extensive plantation drives across communities and promoting hygiene and sanitation in slum areas to foster healthy, sustainable living.',
    image: '/images/atharva/assets_images_foundation-gallery_treeplantation_cover.jpg',
    link: '/our-programs',
  },
  {
    title: 'Youth Sports & Talent Development',
    description: 'Identifying and nurturing aspiring young athletes and sportspersons from less-privileged backgrounds to represent India on national and global stages.',
    image: '/images/atharva/assets_images_gallery_gallery10.jpg',
    link: '/our-programs',
  },
];

const IMPACT_PROGRAMS = [
  'Girl Child Education & Rural Literacy',
  'Support & Dignity for Martyr Families',
  '100 Computers Initiative for Daughters',
  'Women Achiever’s Awards & Skill Building',
  'Cleanliness, Sanitation & Health Camps',
  'Tree Plantation & Environmental Awareness',
  'Sports Talent Mentorship & Youth Support',
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState('mPlUSVVlW5g');
  const [isHoveringDock, setIsHoveringDock] = useState(false);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const carouselTrackRef = useRef(null);

  // Auto-advance hero carousel every 7 seconds
  useEffect(() => {
    if (isHoveringDock) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isHoveringDock]);

  const scrollCarousel = (direction) => {
    if (carouselTrackRef.current) {
      const scrollAmount = direction === 'next' ? 420 : -420;
      carouselTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openVideo = (youtubeId) => {
    setActiveVideoId(youtubeId);
    setVideoModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-quartz)', minHeight: '100vh' }}>
      {/* 1. HERO CAROUSEL */}
      <section className="hero-section" aria-label="Atharva Foundation Highlights">
        <div className="hero-gradient-overlay" />

        {/* Media Background Slides */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
            aria-hidden={idx !== currentSlide}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-slide-media"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* 4 Bottom Cards Dock */}
        <div
          className="hero-dock"
          onMouseEnter={() => setIsHoveringDock(true)}
          onMouseLeave={() => setIsHoveringDock(false)}
        >
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`hero-card ${isActive ? 'active' : 'inactive'}`}
                role="tab"
                aria-selected={isActive}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setCurrentSlide(idx);
                  }
                }}
              >
                <div>
                  <span className="hero-card-tag">{slide.tag}</span>
                  <hr className="duo-line" style={{ marginBottom: '16px' }} />
                  <h3>{slide.title}</h3>
                </div>

                {isActive && (
                  <div style={{ marginTop: '20px' }}>
                    <Link to={slide.link} className="btn-pill" onClick={(e) => e.stopPropagation()}>
                      <span>{slide.ctaText}</span>
                      <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M4 9h10M10 5l4 4-4 4" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section id="about-us" className="about-section">
        <div className="site-container">
          <div className="section-badge-wrapper">
            <span className="section-badge">About Us</span>
            <hr className="duo-line" />
          </div>

          <div className="about-header-grid">
            <div>
              <h2 className="about-title font-medium-serif">
                Nation First. <br />
                Driven by Compassion & Service.
              </h2>
            </div>
            <div>
              <p className="text-lead">
                Atharva Foundation is an initiative of The Atharva Educational Trust, the brain child of Shri Sunil Rane. Shri Sunil Rane believes that the growth of a nation depends on the growth of the various sections of its society. This noble thought has led to the formation of Atharva Foundation, looking after the not-so-privileged sections of our society and bringing about a positive change in the lives of the less fortunate people of India.
              </p>
            </div>
          </div>

          {/* 2 Feature Cards */}
          <div className="feature-cards-grid">
            {/* Card 1: Founder Vision */}
            <Link to="/who-we-are" className="feature-card">
              <div className="feature-card-image-wrap">
                <img
                  src="/images/atharva/assets_images_resource_1J6A2037.jpg"
                  alt="Shri Sunil Rane, Founder and Chairman"
                  className="feature-card-image"
                  style={{ objectPosition: 'top center' }}
                  loading="lazy"
                />
              </div>
              <h3 className="feature-card-title">Founder's Message: Shri Sunil Rane</h3>
              <p className="feature-card-desc">
                An action-oriented and visionary leader with a simple agenda — “Nation First”. He believes that rather than waiting for support from others, we must take the initiative to educate girls, support martyrs' families, and uplift society.
              </p>
            </Link>

            {/* Card 2: One For All */}
            <div id="tribute" className="feature-card" onClick={() => openVideo('mPlUSVVlW5g')} style={{ cursor: 'pointer' }}>
              <div className="feature-card-image-wrap">
                <img
                  src="/images/atharva/assets_images_foundation-gallery_wagahborder_cover.jpg"
                  alt="One For All, All For One - Tribute to Indian Army"
                  className="feature-card-image"
                  loading="lazy"
                />
              </div>
              <h3 className="feature-card-title">One For All | All For One</h3>
              <p className="feature-card-desc">
                An effort towards throwing light on the selfless contribution and sacrifice of our brave soldiers. Moving stories of courage and grit commemorated in the presence of dignitaries, armed forces, and thousands of civilians.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ANTHEM VIDEO SECTION */}
      <section className="anthem-section">
        <div className="site-container">
          <div className="anthem-box">
            <div className="anthem-header">
              <h2 className="anthem-title font-medium-serif">
                A Tribute to the Bravehearts of the Indian Armed Forces
              </h2>
              <p className="text-lead">
                Ten untold stories of soldiers who have been pillars of grit and mettle commemorated through heartfelt wartime tales of courage, patriotism, and sacrifice. Watch the Atharva Foundation tribute documentary below.
              </p>
            </div>

            <div
              className="anthem-video-card"
              onClick={() => openVideo('mPlUSVVlW5g')}
              role="button"
              tabIndex={0}
              aria-label="Play Atharva Foundation Tribute Documentary"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openVideo('mPlUSVVlW5g');
              }}
            >
              <img
                src="/images/atharva/assets_images_foundation-gallery_unsungheroes_cover.jpg"
                alt="One For All Tribute - Atharva Foundation"
                className="anthem-poster"
                loading="lazy"
              />
              <div className="anthem-play-btn" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M5 3l10 6-10 6V3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR INITIATIVES CAROUSEL */}
      <section id="ideas" className="ideas-section">
        <div className="site-container" style={{ position: 'relative' }}>
          <div className="section-badge-wrapper">
            <span className="section-badge">Our Initiatives</span>
            <hr className="duo-line" />
          </div>

          <div className="ideas-header-grid">
            <div>
              <h2 className="about-title font-medium-serif">We invest in humanitarian action</h2>
            </div>
            <div>
              <p className="text-lead">
                We believe in direct action on ground zero. From remote villages in the Himalayas and border regions of Rajasthan to Maharashtra and the Northeast, the Atharva Foundation brings education, technology, and direct family support where it is needed most.
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={() => scrollCarousel('prev')}
            className="carousel-nav-btn prev"
            aria-label="Previous initiatives"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M11 14l-5-5 5-5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollCarousel('next')}
            className="carousel-nav-btn next"
            aria-label="Next initiatives"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 4l5 5-5 5" />
            </svg>
          </button>

          {/* Carousel Track */}
          <div ref={carouselTrackRef} className="ideas-carousel-track">
            {INITIATIVES.map((item, idx) => (
              <Link to={item.link} key={idx} className="idea-card">
                <div className="idea-image-wrap">
                  <img src={item.image} alt={item.title} className="idea-image" loading="lazy" />
                </div>
                <h3 className="idea-title">{item.title}</h3>
                <p className="idea-desc">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR IMPACT & STATS SECTION */}
      <section className="programs-section">
        <div className="site-container">
          <div className="section-badge-wrapper">
            <span className="section-badge">Our Impact</span>
            <hr className="duo-line" />
          </div>

          <div className="about-header-grid">
            <div>
              <h2 className="about-title font-medium-serif">Action with measurable ground impact</h2>
            </div>
            <div>
              <p className="text-lead">
                The Atharva Foundation focuses on sustainable, empowering outcomes. Rather than short-term fixes, we build computer labs, provide educational scholarships, and stand with martyrs' families with lifelong dignity.
              </p>
            </div>
          </div>

          <div className="programs-grid">
            {/* Left Stats Card */}
            <div className="stats-card">
              <div className="stat-item">
                <strong>100+</strong>
                <span>Computers Distributed to Daughters</span>
              </div>
              <hr className="stat-divider" />
              <div className="stat-item">
                <strong>100+</strong>
                <span>Martyr Families Felicitated & Supported</span>
              </div>
              <hr className="stat-divider" />
              <div className="stat-item">
                <strong>5,000+</strong>
                <span>Girl Students Empowered Across India</span>
              </div>
            </div>

            {/* Right Program List */}
            <ul className="program-list">
              {IMPACT_PROGRAMS.map((prog, idx) => (
                <li key={idx}>
                  <Link to="/our-programs" className="program-row">
                    <span className="program-name">{prog}</span>
                    <span className="btn-circle-arrow" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M4 9h10M10 5l4 4-4 4" />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. GET INVOLVED / CONTACT SECTION */}
      <section id="contact-form" className="newsletter-section">
        <div className="site-container">
          <div className="section-badge-wrapper">
            <span className="section-badge">Join The Movement</span>
            <hr className="duo-line" />
          </div>

          <div className="newsletter-grid">
            <div>
              <h2 className="about-title font-medium-serif">Get in Touch with Atharva Foundation</h2>
              <p style={{ marginTop: '16px', color: '#64748B', lineHeight: 1.6 }}>
                Whether you want to volunteer, sponsor girl child education, or support the families of our brave martyrs, your contribution brings real smiles and positive change.
              </p>
            </div>

            <div>
              {submitted ? (
                <div style={{ padding: '24px', backgroundColor: 'var(--color-quartz)', border: '1px solid var(--color-alabaster)', borderRadius: '4px' }}>
                  <h3 style={{ fontSize: '20px', color: 'var(--color-ocean)', marginBottom: '8px' }}>Thank you for reaching out!</h3>
                  <p style={{ color: '#475569' }}>Our team will connect with you shortly. Together, let us put Nation First.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="newsletter-form">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input form-full"
                  />
                  <input
                    type="text"
                    placeholder="City / State"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="form-input form-full"
                  />
                  <textarea
                    rows="3"
                    placeholder="How would you like to contribute or get involved?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input form-full"
                    style={{ resize: 'vertical' }}
                  />
                  <button type="submit" className="btn-submit">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {videoModalOpen && (
        <div className="modal-overlay" onClick={() => setVideoModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="modal-close-btn"
              aria-label="Close video player"
            >
              <span>Close</span> &times;
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="Atharva Foundation Video"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
