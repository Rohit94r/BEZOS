import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HERO_SLIDES = [
  {
    tag: 'PRESS RELEASE',
    title: 'Bezos Earth Fund Expands Its Pacific Ocean Conservation to Five More Nations',
    image: '/images/Ocean_CookIslands_iStock_DuroMesiar_2276388049.png',
    isVideo: false,
    ctaText: 'Explore more',
    link: '/our-programs',
  },
  {
    tag: 'INSIGHT',
    title: 'From Silkworms to Seaweed: Student Designers are Building the Future of Fashion',
    image: '/images/FredaXinyueXia_Portfolio-10.png',
    isVideo: false,
    ctaText: 'Learn more',
    link: '/our-programs',
  },
  {
    tag: 'PRESS RELEASE',
    title: 'Phoenix Species Project launches global effort to bring 100 of the world’s most threatened species back from the brink',
    video: '/images/PSP-Header-Loop.mp4',
    poster: '/images/Earth_GulfOfMexico_Unsplash_NASA_Q1p7bh3SHj8.jpg',
    isVideo: true,
    ctaText: 'Explore more',
    link: '/our-programs',
  },
  {
    tag: 'PRESS RELEASE',
    title: '$100 Million Investment to Turn Underused Urban Land into Green Spaces Across Eight U.S. Cities',
    image: '/images/9-Line-Garden_5.jpg',
    isVideo: false,
    ctaText: 'Explore more',
    link: '/our-programs',
  },
];

const IDEAS = [
  {
    title: 'Protecting 30% of the Planet by 2030',
    description: 'Currently, just 15% of land and 8% of our oceans are protected. The Bezos Earth Fund supports initiatives working to protect 30% of the planet’s natural resources by the year 2030.',
    image: '/images/GalapagosIslands_Unsplash_MashaBuschujewa_kqh5_9hzAhY.jpg',
    link: '/our-programs',
  },
  {
    title: 'Satellites for Climate and Nature',
    description: 'With data, we can track emissions and hold actors accountable for climate change impacts, yet too often, information isn’t available or accessible. The Bezos Earth Fund supports game-changing satellite tracking and other technology to show how human activities impact our climate and nature.',
    image: '/images/MethaneSATMission_EDF_0820.jpg',
    link: '/our-programs',
  },
  {
    title: 'Electric Buses for Health and Climate',
    description: 'School buses that run on diesel produce dangerous air pollutants that impact the health of our kids, our communities, and our planet. The Bezos Earth Fund supports efforts to modernize and electrify school bus fleets across the U.S. and finally put fossil fuel-powered buses in the rear-view mirror.',
    image: '/images/ElectricSchoolBus_iStock_GrabillCreative.jpg',
    link: '/our-programs',
  },
  {
    title: 'Carbon-absorbing Crops',
    description: 'Climate change can disrupt food availability and reduce food quality, but it doesn’t have to be this way. The Bezos Earth Fund is investing $1 billion by 2030 to help transform food systems to feed a growing population and create the next generation of crops to be nutrient-rich and climate resilient.',
    image: '/images/Food_CornStalks_Unsplash_StevenWeeks_DUPFowqI6oI.jpg',
    link: '/our-programs',
  },
  {
    title: 'Transforming Carbon-Intensive Industries',
    description: 'Carbon-intensive industries like cement and steel account for 30 percent of global emissions. Technologies available today can slash emissions but only if stakeholders work together to overcome barriers. That’s why the Bezos Earth Fund is partnering with groups like the Mission Possible Partnership to establish green industrial hubs in Houston and Los Angeles to help trigger a net-zero transformation of seven industrial sectors.',
    image: '/images/Steel_MissionPossible_iStock_zhaojiankang_504114086.jpg',
    link: '/our-programs',
  },
  {
    title: 'Reaching Positive Tipping Points',
    description: 'Positive tipping points – in which change triggers a large shift – are critical to solving climate change. The Bezos Earth Fund is working to ensure the scales are tipped in favor of a brighter future.',
    image: '/images/TippingPoints_iStock_ThomasVogel_117150129.jpg',
    link: '/our-programs',
  },
];

const PROGRAMS = [
  'Conserving & Restoring Nature',
  'Future of Food',
  'Environmental Justice',
  'Decarbonizing Energy & Industry',
  'Economics, Finance, & Markets',
  'Next Technologies',
  'Monitoring, Data, & Accountability',
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isHoveringDock, setIsHoveringDock] = useState(false);

  // Newsletter Form State
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', organization: '' });
  const [submitted, setSubmitted] = useState(false);

  const videoRef = useRef(null);
  const carouselTrackRef = useRef(null);

  // Auto-advance hero carousel every 7 seconds
  useEffect(() => {
    if (isHoveringDock) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isHoveringDock]);

  // Handle Play/Pause on the video slide
  const toggleVideoPlayback = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const scrollCarousel = (direction) => {
    if (carouselTrackRef.current) {
      const scrollAmount = direction === 'next' ? 420 : -420;
      carouselTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-quartz)', minHeight: '100vh' }}>
      {/* 1. HERO CAROUSEL */}
      <section className="hero-section" aria-label="Hero Highlights">
        <div className="hero-gradient-overlay" />

        {/* Media Background Slides */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
            aria-hidden={idx !== currentSlide}
          >
            {slide.isVideo ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                poster={slide.poster}
                className="hero-slide-media"
              >
                <source src={slide.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={slide.image}
                alt={slide.title}
                className="hero-slide-media"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            )}
          </div>
        ))}

        {/* Play/Pause Button on Video Slide */}
        {HERO_SLIDES[currentSlide].isVideo && (
          <button
            type="button"
            onClick={toggleVideoPlayback}
            className="video-control-btn"
            aria-label={isVideoPlaying ? 'Pause background video' : 'Play background video'}
          >
            {isVideoPlaying ? (
              <svg width="20" height="20" viewBox="0 0 18 18" fill="currentColor">
                <path d="M4 4h3v10H4zM11 4h3v10h-3z" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 18 18" fill="currentColor">
                <path d="M5 3l10 6-10 6V3z" />
              </svg>
            )}
          </button>
        )}

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
                Inspired by Nature. <br />
                Driven by Innovation.
              </h2>
            </div>
            <div>
              <p className="text-lead">
                The Bezos Earth Fund, guided by the belief that Earth is the best planet in this solar system, works to protect and restore the natural world. With partners around the globe, we are developing innovative solutions to ensure the planet remains a place we can—and want to—live on.
              </p>
            </div>
          </div>

          {/* 2 Feature Cards */}
          <div className="feature-cards-grid">
            {/* Card 1: Our View of the World */}
            <Link to="/who-we-are" className="feature-card">
              <div className="feature-card-image-wrap">
                <img
                  src="/images/Earth_GulfOfMexico_Unsplash_NASA_Q1p7bh3SHj8.jpg"
                  alt="Gulf of Mexico from space with city lights"
                  className="feature-card-image"
                  loading="lazy"
                />
              </div>
              <h3 className="feature-card-title">Our View of the World</h3>
              <p className="feature-card-desc">
                Humanity has enjoyed great progress over the past half-century. But the price for these changes has been high. There doesn’t need to be a trade-off between greater prosperity and healthy environment. We believe there is a better path forward.
              </p>
            </Link>

            {/* Card 2: How We Work */}
            <Link to="/who-we-are" className="feature-card">
              <div className="feature-card-image-wrap">
                <img
                  src="/images/F45_Gabon_Grantees_16X9.jpg"
                  alt="Jeff Bezos and Lauren Sánchez shaking hands with Gabon leaders"
                  className="feature-card-image"
                  loading="lazy"
                />
              </div>
              <h3 className="feature-card-title">How We Work</h3>
              <p className="feature-card-desc">
                The Bezos Earth Fund was established with the largest philanthropic commitment ever to fight climate change and protect nature. As we seek to fulfill our mission ten principles guide our work and inform our decision-making.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ANTHEM VIDEO SECTION */}
      <section className="anthem-section">
        <div className="site-container">
          <div className="anthem-box">
            <div className="anthem-header">
              <h2 className="anthem-title font-medium-serif">
                We are guided by the belief that Earth is the best planet
              </h2>
              <p className="text-lead">
                We accelerate solutions through innovative approaches and partnerships that help to conserve and restore nature, advance clean energy, develop new materials, and transform food sources, among many other areas, to create a more beautiful, healthy, and resilient planet for all life now and future generations.
              </p>
            </div>

            <div
              className="anthem-video-card"
              onClick={() => setVideoModalOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="Play video about Bezos Earth Fund vision"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setVideoModalOpen(true);
              }}
            >
              <img
                src="/images/BEF_Anthem_2023.png"
                alt="Moss traces up a tree trunk in nature"
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

      {/* 4. OUR IDEAS CAROUSEL */}
      <section id="ideas" className="ideas-section">
        <div className="site-container" style={{ position: 'relative' }}>
          <div className="section-badge-wrapper">
            <span className="section-badge">Our Ideas</span>
            <hr className="duo-line" />
          </div>

          <div className="ideas-header-grid">
            <div>
              <h2 className="about-title font-medium-serif">We invest in big ideas</h2>
            </div>
            <div>
              <p className="text-lead">
                We don’t just write checks and walk away. We focus on big ideas, programs and inventions that can help us meet our mission. We develop hybrid-financing models, seek to accelerate technology, and use our power of convening to find the solutions that will help us protect and restore nature and repair the climate. Explore these big ideas and see how the Bezos Earth Fund is working to help the world take major leaps forward in the fight for our planet.
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={() => scrollCarousel('prev')}
            className="carousel-nav-btn prev"
            aria-label="Previous ideas"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M11 14l-5-5 5-5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollCarousel('next')}
            className="carousel-nav-btn next"
            aria-label="Next ideas"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 4l5 5-5 5" />
            </svg>
          </button>

          {/* Carousel Track */}
          <div ref={carouselTrackRef} className="ideas-carousel-track">
            {IDEAS.map((idea, idx) => (
              <Link to={idea.link} key={idx} className="idea-card">
                <div className="idea-image-wrap">
                  <img src={idea.image} alt={idea.title} className="idea-image" loading="lazy" />
                </div>
                <h3 className="idea-title">{idea.title}</h3>
                <p className="idea-desc">{idea.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR PROGRAMS SECTION */}
      <section className="programs-section">
        <div className="site-container">
          <div className="section-badge-wrapper">
            <span className="section-badge">Our Programs</span>
            <hr className="duo-line" />
          </div>

          <div className="about-header-grid">
            <div>
              <h2 className="about-title font-medium-serif">We act with urgency at scale</h2>
            </div>
            <div>
              <p className="text-lead">
                The Bezos Earth Fund focuses on spurring innovation and progress in several key areas that will help us solve the toughest problems not just identify them.
              </p>
            </div>
          </div>

          <div className="programs-grid">
            {/* Left Stats Card */}
            <div className="stats-card">
              <div className="stat-item">
                <strong>$10B</strong>
                <span>Committed to the planet</span>
              </div>
              <hr className="stat-divider" />
              <div className="stat-item">
                <strong>$2.4B</strong>
                <span>Granted (USD) so far</span>
              </div>
              <hr className="stat-divider" />
              <div className="stat-item">
                <strong>371</strong>
                <span>Grants</span>
              </div>
            </div>

            {/* Right Program List */}
            <ul className="program-list">
              {PROGRAMS.map((prog, idx) => (
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

      {/* 6. NEWSLETTER SECTION */}
      <section className="newsletter-section">
        <div className="site-container">
          <div className="section-badge-wrapper">
            <span className="section-badge">Our Newsletter</span>
            <hr className="duo-line" />
          </div>

          <div className="newsletter-grid">
            <div>
              <h2 className="about-title font-medium-serif">Stay Informed</h2>
            </div>

            <div>
              {submitted ? (
                <div style={{ padding: '24px', backgroundColor: 'var(--color-quartz)', border: '1px solid var(--color-alabaster)', borderRadius: '4px' }}>
                  <h3 style={{ fontSize: '20px', color: 'var(--color-ocean)', marginBottom: '8px' }}>Thank you for subscribing!</h3>
                  <p style={{ color: '#475569' }}>You will receive our latest updates and announcements directly in your inbox.</p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                  <input
                    type="text"
                    required
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="form-input"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name *"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
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
                    placeholder="Organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="form-input form-full"
                  />
                  <button type="submit" className="btn-submit">
                    Sign Up
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
              src="https://www.youtube.com/embed/rhqwpg0vgCA?autoplay=1"
              title="We are guided by the belief that Earth is the best planet"
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
