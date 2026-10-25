import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, 
  Play, 
  BookOpen, 
  Users, 
  Heart, 
  Sprout, 
  Shield, 
  Handshake, 
  GraduationCap, 
  Network, 
  ChevronLeft, 
  ChevronRight,
  ChevronDown,
  Trophy,
  Send,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import BotanicalLeaf from '../BotanicalLeaf';

const HERO_SLIDES = [
  {
    tag: 'PEOPLE  OPPORTUNITIES  A STRONGER INDIA —',
    title: 'Building a More Inclusive',
    highlight: 'India.',
    subtitle: 'Creating opportunities through education, empowerment, healthcare and community action for underprivileged sections of society.',
    image: '/images/ui/hero_girl_school.jpg',
    fallbackImage: '/images/atharva/assets_images_resource_cause-4.jpg',
    videoId: 'mPlUSVVlW5g',
    stats: [
      { icon: GraduationCap, num: '25,000+', label: 'Lives Impacted' },
      { icon: Network, num: '120+', label: 'Communities' },
      { icon: Heart, num: '200+', label: 'Volunteers' },
      { icon: Sprout, num: '15+', label: 'Initiatives' },
    ]
  },
  {
    tag: 'NATIONAL TRIBUTE —',
    title: 'One For All | All For One:',
    highlight: 'A Tribute to Martyrs.',
    subtitle: 'Commemorating the selfless sacrifices of our Indian Armed Forces soldiers and extending lifelong welfare to martyr families.',
    image: '/images/atharva/assets_images_foundation-gallery_unsungheroes_cover.jpg',
    fallbackImage: '/images/atharva/assets_images_icons_ADGPI_Indian_Army.jpg',
    videoId: 'mPlUSVVlW5g',
    stats: [
      { icon: Shield, num: '350+', label: 'Martyr Families' },
      { icon: Network, num: '28', label: 'States Reached' },
      { icon: Heart, num: '500+', label: 'Tributes Paid' },
      { icon: Sprout, num: '10+', label: 'National Events' },
    ]
  },
  {
    tag: 'GIRL CHILD EDUCATION —',
    title: 'Empowering Young Daughters of',
    highlight: 'India.',
    subtitle: 'Providing scholarships, notebooks, school kits, and infrastructure to young daughters in remote and border villages.',
    image: '/images/atharva/assets_images_resource_cause-4.jpg',
    fallbackImage: '/images/ui/belief_girl.jpg',
    videoId: 'mPlUSVVlW5g',
    stats: [
      { icon: GraduationCap, num: '12,000+', label: 'Daughters Enrolled' },
      { icon: Network, num: '85+', label: 'Rural Villages' },
      { icon: Heart, num: '150+', label: 'Educators' },
      { icon: Sprout, num: '100+', label: 'Computer Labs' },
    ]
  },
  {
    tag: 'DIGITAL EMPOWERMENT —',
    title: '100 Computers for',
    highlight: 'Daughters.',
    subtitle: 'Pioneering digital literacy by setting up modern computer labs in remote schools and border areas of Rajasthan, Maharashtra, and Northeast.',
    image: '/images/atharva/assets_images_foundation-gallery_technologyawareness_cover.jpg',
    fallbackImage: '/images/ui/story_digital.jpg',
    videoId: 'mPlUSVVlW5g',
    stats: [
      { icon: GraduationCap, num: '100+', label: 'Computers Set Up' },
      { icon: Network, num: '45+', label: 'Border Schools' },
      { icon: Heart, num: '5,000+', label: 'Girls Trained' },
      { icon: Sprout, num: '100%', label: 'Free Digital Access' },
    ]
  },
  {
    tag: 'WOMEN ACHIEVER’S AWARDS —',
    title: 'Celebrating Resilience, Courage &',
    highlight: 'Leadership.',
    subtitle: 'An annual celebration acknowledging the outstanding courage and perseverance of women from the armed forces, sports, and rural leadership.',
    image: '/images/atharva/assets_images_foundation-gallery_womensdayindiandefenceforce_cover.jpg',
    fallbackImage: '/images/ui/story_women.jpg',
    videoId: 'mPlUSVVlW5g',
    stats: [
      { icon: Users, num: '500+', label: 'Achievers Honored' },
      { icon: Network, num: '60+', label: 'Clusters' },
      { icon: Heart, num: '180+', label: 'Mentors' },
      { icon: Sprout, num: '25+', label: 'Programs' },
    ]
  }
];

const INITIATIVES_DATA = [
  {
    id: 'education',
    title: 'Girl Child Education in Rural India',
    tag: 'EDUCATION FOR EVERY GIRL',
    icon: BookOpen,
    image: '/images/atharva/assets_images_resource_cause-4.jpg',
    fallbackImage: '/images/ui/init_card1.jpg',
    description: 'Empowering young girls from economically disadvantaged backgrounds with scholarships, study kits, and school infrastructure to ensure no daughter is left behind.',
  },
  {
    id: 'martyrs',
    title: 'Assistance to Families of Martyrs',
    tag: 'STANDING WITH OUR BRAVEHEARTS',
    icon: Shield,
    image: '/images/atharva/assets_images_gallery_gallery6.jpg',
    fallbackImage: '/images/ui/init_bravehearts.jpg',
    description: 'Extending respectful financial, emotional, and educational assistance to the families and widows of our brave martyrs who laid down their lives for India.',
  },
  {
    id: 'computers',
    title: '100 Computers for Daughters Program',
    tag: 'DIGITAL LITERACY',
    icon: GraduationCap,
    image: '/images/atharva/assets_images_foundation-gallery_technologyawareness_cover.jpg',
    fallbackImage: '/images/ui/story_digital.jpg',
    description: 'Bridging the digital divide by distributing modern computers and providing digital literacy training to young girls in remote and border villages.',
  },
  {
    id: 'women',
    title: 'Women Achiever’s Awards',
    tag: 'WOMEN EMPOWERMENT',
    icon: Users,
    image: '/images/atharva/assets_images_foundation-gallery_womensdayindiandefenceforce_cover.jpg',
    fallbackImage: '/images/ui/init_card2.jpg',
    description: 'An annual celebration acknowledging the outstanding courage and perseverance of women from the armed forces, sports, education, and rural entrepreneurship.',
  },
  {
    id: 'environment',
    title: 'Tree Plantation & Environmental Care',
    tag: 'ENVIRONMENT & SANITATION',
    icon: Sprout,
    image: '/images/atharva/assets_images_foundation-gallery_treeplantation_cover.jpg',
    fallbackImage: '/images/ui/init_card4.jpg',
    description: 'Organizing extensive plantation drives across communities and promoting hygiene and sanitation in slum areas to foster healthy, sustainable living.',
  },
  {
    id: 'sports',
    title: 'Youth Sports & Talent Development',
    tag: 'YOUTH DEVELOPMENT',
    icon: Trophy,
    image: '/images/atharva/assets_images_gallery_gallery10.jpg',
    fallbackImage: '/images/ui/people_students.jpg',
    description: 'Identifying and nurturing aspiring young athletes and sportspersons from less-privileged backgrounds to represent India on national and global stages.',
  },
];

const GALLERY_PHOTOS = [
  {
    title: 'One For All Tribute at Wagah Border',
    img: '/images/atharva/assets_images_foundation-gallery_wagahborder_1.jpg',
    tag: 'National Tribute',
  },
  {
    title: 'Teachers Day Felicitations',
    img: '/images/atharva/assets_images_foundation-gallery_teachersday-25_td2.jpeg',
    tag: 'Education',
  },
  {
    title: 'Girl Child Study Kit Distribution',
    img: '/images/atharva/assets_images_gallery_gallery1.jpg',
    tag: 'Rural Literacy',
  },
  {
    title: 'Martyrs Families Assistance Program',
    img: '/images/atharva/assets_images_gallery_gallery5.jpg',
    tag: 'Bravehearts',
  },
  {
    title: 'Tree Plantation Drive with Youth',
    img: '/images/atharva/assets_images_foundation-gallery_treeplantation_cover.jpg',
    tag: 'Green India',
  },
  {
    title: 'Youth Sports Mentorship on Ground',
    img: '/images/atharva/assets_images_gallery_gallery10.jpg',
    tag: 'Youth Talent',
  },
  {
    title: 'Wagah Border Armed Forces Felicitation',
    img: '/images/atharva/assets_images_foundation-gallery_wagahborder_2.jpg',
    tag: 'Defense Tribute',
  },
  {
    title: 'Women in Defense Force Awards',
    img: '/images/atharva/assets_images_foundation-gallery_womenachieversawards_1.jpg',
    tag: 'Women Achievers',
  },
];

export default function Home({ onOpenDonate, onOpenFounder, onOpenVideo }) {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [activeInitiativeIdx, setActiveInitiativeIdx] = useState(0);
  const initiativesTrackRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', city: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Auto-advance hero slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentHeroSlide];

  const handleNextHero = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrevHero = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleInitiativeNav = (direction) => {
    let nextIdx = direction === 'next' ? activeInitiativeIdx + 1 : activeInitiativeIdx - 1;
    if (nextIdx < 0) nextIdx = INITIATIVES_DATA.length - 1;
    if (nextIdx >= INITIATIVES_DATA.length) nextIdx = 0;
    setActiveInitiativeIdx(nextIdx);

    if (initiativesTrackRef.current) {
      const cardWidth = 320;
      initiativesTrackRef.current.scrollBy({
        left: direction === 'next' ? cardWidth : -cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <div style={{ backgroundColor: '#F8F3E9', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* ========================================================
          SECTION 1: HERO (WITH ATHARVA FOUNDATION AUTHENTIC SLIDES)
          ======================================================== */}
      <section 
        id="hero"
        style={{
          position: 'relative',
          backgroundColor: '#380C14',
          color: '#FFFFFF',
          borderBottomLeftRadius: 'clamp(28px, 4.5vw, 56px)',
          borderBottomRightRadius: 'clamp(28px, 4.5vw, 56px)',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(56, 12, 20, 0.25)',
        }}
      >
        {/* Background Image with smooth transition */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: 'right center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            transition: 'background-image 0.7s ease-in-out',
          }}
        />

        {/* Desktop Gradient: Deep wine on left fading into photo */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #380C14 0%, #440D17 38%, rgba(68, 13, 23, 0.85) 58%, rgba(68, 13, 23, 0.3) 85%, transparent 100%)',
          }}
          className="hidden md:block"
        />

        {/* Mobile Gradient: Vertical overlay */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #380C14 0%, #440D17 55%, rgba(68, 13, 23, 0.7) 75%, rgba(68, 13, 23, 0.3) 100%)',
          }}
          className="block md:hidden"
        />

        <div 
          className="site-container"
          style={{
            position: 'relative',
            zIndex: 3,
            minHeight: 'clamp(580px, 82vh, 760px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: '64px',
            paddingBottom: '36px',
          }}
        >
          {/* Main Content Area */}
          <div style={{ maxWidth: '640px', marginTop: 'auto', marginBottom: 'auto' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#D9B45B',
                marginBottom: '18px',
              }}
            >
              <span>{slide.tag}</span>
            </div>

            <h1 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(36px, 4.8vw, 64px)',
                lineHeight: '1.1',
                color: '#FFFFFF',
                fontWeight: 700,
                marginBottom: '18px',
              }}
            >
              {slide.title} <br className="hidden sm:inline" />
              <span style={{ color: '#D9B45B' }}>{slide.highlight}</span>
            </h1>

            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(15px, 1.6vw, 17.5px)',
                color: 'rgba(255, 255, 255, 0.92)',
                lineHeight: '1.65',
                marginBottom: '32px',
                maxWidth: '520px',
              }}
            >
              {slide.subtitle}
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <button
                onClick={() => scrollTo('our-initiatives')}
                className="btn-gold"
                style={{ fontSize: '15px', padding: '13px 28px' }}
              >
                <span>Explore Our Work</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => onOpenVideo(slide.videoId || 'mPlUSVVlW5g')}
                style={{
                  backgroundColor: 'rgba(56, 12, 20, 0.75)',
                  backdropFilter: 'blur(6px)',
                  color: '#FFFFFF',
                  border: '1.5px solid rgba(217, 180, 91, 0.5)',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontWeight: 600,
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                className="hover:border-amber-400 hover:scale-105"
              >
                <div 
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: '#D9B45B',
                    color: '#380C14',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Play size={12} fill="#380C14" style={{ marginLeft: '2px' }} />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>

          {/* Bottom Bar: Stats, Scroll explore, and Carousel switcher */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            {/* Stats row */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, auto)',
                gap: 'clamp(16px, 2.5vw, 36px)',
              }}
              className="grid grid-cols-2 sm:grid-cols-4"
            >
              {slide.stats.map((st, i) => {
                const Icon = st.icon;
                return (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#D9B45B', marginBottom: '2px' }}>
                      <Icon size={18} strokeWidth={2} />
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 700, color: '#FFFFFF' }}>
                        {st.num}
                      </span>
                    </div>
                    <span style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.75)', whiteSpace: 'nowrap' }}>
                      {st.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Scroll to explore center indicator */}
            <div 
              onClick={() => scrollTo('our-story')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                opacity: 0.85,
                transition: 'opacity 0.2s',
              }}
              className="hidden lg:flex hover:opacity-100"
            >
              <div 
                style={{
                  width: '20px',
                  height: '32px',
                  borderRadius: '10px',
                  border: '1.5px solid rgba(255, 255, 255, 0.6)',
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: '6px',
                  marginBottom: '4px',
                }}
              >
                <div 
                  style={{
                    width: '3px',
                    height: '6px',
                    backgroundColor: '#D9B45B',
                    borderRadius: '2px',
                    animation: 'bounce 1.5s infinite',
                  }}
                />
              </div>
              <span style={{ fontSize: '11px', letterSpacing: '0.05em', color: 'rgba(255, 255, 255, 0.8)' }}>
                Scroll to explore
              </span>
              <ChevronDown size={14} color="#D9B45B" />
            </div>

            {/* Carousel navigation & slide count */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  onClick={handlePrevHero}
                  aria-label="Previous slide"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  className="hover:bg-amber-400 hover:text-burgundy"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNextHero}
                  aria-label="Next slide"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  className="hover:bg-amber-400 hover:text-burgundy"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <div style={{ fontSize: '13px', fontWeight: 600, color: '#D9B45B', letterSpacing: '0.05em' }}>
                0{currentHeroSlide + 1} / 0{HERO_SLIDES.length}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: OUR STORY (Empowering People. Building Communities.)
          ======================================================== */}
      <section 
        id="our-story"
        style={{
          paddingTop: '70px',
          paddingBottom: '80px',
          position: 'relative',
          backgroundColor: '#F8F3E9',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', bottom: '-20px', right: '4%', opacity: 0.12, pointerEvents: 'none' }}>
          <BotanicalLeaf width={320} height={320} color="#500D18" opacity={0.5} />
        </div>

        <div className="site-container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            {/* Left Photo of Shri Sunil Rane and Children */}
            <div style={{ position: 'relative', maxWidth: '440px' }}>
              <div 
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 16px 36px rgba(80, 13, 24, 0.1)',
                  border: '1px solid rgba(80, 13, 24, 0.12)',
                  position: 'relative',
                }}
              >
                <img 
                  src="/images/atharva/assets_images_resource_1J6A2037.jpg"
                  alt="Shri Sunil Rane with Children - Atharva Foundation"
                  style={{
                    width: '100%',
                    height: '270px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  onError={(e) => {
                    e.currentTarget.src = '/images/ui/story_classroom_children.jpg';
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(56, 12, 20, 0.88)',
                    backdropFilter: 'blur(4px)',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    fontSize: '11px',
                    fontWeight: 600,
                  }}
                >
                  Shri Sunil Rane · Founder & Chairman
                </div>
              </div>
            </div>

            {/* Right Story Text */}
            <div style={{ maxWidth: '640px' }}>
              <span className="category-badge">— OUR STORY</span>
              
              <h2 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(30px, 3.8vw, 46px)',
                  lineHeight: '1.18',
                  color: '#500D18',
                  marginBottom: '16px',
                }}
              >
                Nation First. <br />
                Empowering People. Building Communities.
              </h2>

              <p 
                style={{
                  fontSize: '15.5px',
                  color: '#292321',
                  lineHeight: '1.7',
                  marginBottom: '18px',
                  maxWidth: '560px',
                }}
              >
                Atharva Foundation is an initiative of The Atharva Educational Trust, founded by Shri Sunil Rane. He believes that the growth of a nation depends on the growth of the various sections of its society. This noble thought has led to the formation of Atharva Foundation, looking after the not-so-privileged sections of our society and bringing about a positive change in the lives of the less fortunate people of India.
              </p>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <button
                  onClick={onOpenFounder}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#500D18',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                  className="hover:text-amber-600 transition-colors"
                >
                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '1.5px solid #500D18',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ArrowRight size={16} />
                  </div>
                  <span>Founder's Message & Vision</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: OUR INITIATIVES (6 AUTHENTIC FLAGSHIP INITIATIVES)
          ======================================================== */}
      <section 
        id="our-initiatives"
        style={{
          paddingTop: '80px',
          paddingBottom: '80px',
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid rgba(80, 13, 24, 0.08)',
          borderBottom: '1px solid rgba(80, 13, 24, 0.08)',
          position: 'relative',
        }}
      >
        <div className="site-container">
          <div 
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '40px',
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <span className="category-badge">OUR INITIATIVES —</span>
              <h2 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(28px, 3.8vw, 44px)',
                  color: '#500D18',
                  lineHeight: '1.16',
                  marginBottom: '12px',
                }}
              >
                Focused on People. <br className="hidden sm:inline" />
                Driven by Impact.
              </h2>
              <p style={{ fontSize: '15px', color: '#716A65', lineHeight: '1.65' }}>
                We believe in direct action on ground zero. From remote villages in the Himalayas and border regions of Rajasthan to Maharashtra and the Northeast, Atharva Foundation brings education, technology, and direct family support where it is needed most.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={() => handleInitiativeNav('prev')}
                aria-label="Previous initiative"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(80, 13, 24, 0.2)',
                  backgroundColor: '#FFFFFF',
                  color: '#500D18',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                className="hover:border-burgundy hover:bg-amber-50"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleInitiativeNav('next')}
                aria-label="Next initiative"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(80, 13, 24, 0.2)',
                  backgroundColor: '#FFFFFF',
                  color: '#500D18',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                className="hover:border-burgundy hover:bg-amber-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Initiatives Cards Grid */}
          <div 
            ref={initiativesTrackRef}
            className="mobile-carousel-track"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '36px',
            }}
          >
            {INITIATIVES_DATA.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  className="editorial-card mobile-carousel-item"
                  style={{
                    backgroundColor: '#F8F3E9',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(80, 13, 24, 0.08)',
                  }}
                >
                  <div className="card-img-wrap" style={{ height: '210px', position: 'relative' }}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      onError={(e) => {
                        e.currentTarget.src = item.fallbackImage;
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

                  <div style={{ padding: '30px 22px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '10.5px', letterSpacing: '0.12em', color: '#D9B45B', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                      {item.tag}
                    </span>
                    <h3 
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '19px',
                        color: '#500D18',
                        marginBottom: '10px',
                        lineHeight: '1.25',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#716A65', lineHeight: '1.6', flex: 1, marginBottom: '18px' }}>
                      {item.description}
                    </p>
                    <div>
                      <button
                        onClick={onOpenDonate}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#500D18',
                          fontWeight: 700,
                          fontSize: '13px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          cursor: 'pointer',
                          padding: 0,
                        }}
                        className="hover:text-amber-600 transition-colors"
                      >
                        <span>Support Initiative</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sub-Banner: Our Approach */}
          <div 
            id="our-approach"
            style={{
              backgroundColor: '#310A10',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              color: '#FFFFFF',
              boxShadow: '0 20px 45px rgba(49, 10, 16, 0.35)',
              border: '1px solid rgba(217, 180, 91, 0.3)',
            }}
          >
            <div style={{ position: 'absolute', top: '-20px', left: '-20px', opacity: 0.15, pointerEvents: 'none' }}>
              <BotanicalLeaf width={260} height={260} color="#D9B45B" opacity={0.6} />
            </div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                alignItems: 'center',
              }}
            >
              <div style={{ padding: '40px 36px', zIndex: 2 }}>
                <span style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#D9B45B', fontWeight: 700, textTransform: 'uppercase' }}>
                  OUR APPROACH —
                </span>
                <h3 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(24px, 3.2vw, 36px)',
                    color: '#FFFFFF',
                    lineHeight: '1.2',
                    margin: '8px 0 14px 0',
                  }}
                >
                  People at the heart <br className="hidden sm:inline" />
                  of everything <span style={{ color: '#D9B45B', fontStyle: 'italic' }}>we do.</span>
                </h3>
                <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.65', marginBottom: '24px', maxWidth: '440px' }}>
                  We work closely with communities, armed forces, partners and volunteers to create sustainable and long-lasting ground impact across India.
                </p>
                <button
                  onClick={onOpenDonate}
                  className="btn-gold"
                  style={{ fontSize: '14px' }}
                >
                  <span>Explore All Initiatives</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              <div style={{ height: '100%', minHeight: '260px', position: 'relative' }}>
                <img 
                  src="/images/atharva/assets_images_resource_1J6A2037.jpg"
                  alt="Atharva Foundation Community Approach"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  onError={(e) => {
                    e.currentTarget.src = '/images/ui/approach_banner.jpg';
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, #310A10 0%, transparent 40%)',
                  }}
                  className="hidden md:block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: GROUND IMPACT & STATS
          ======================================================== */}
      <section 
        id="impact"
        style={{
          paddingTop: '90px',
          paddingBottom: '0px',
          backgroundColor: '#F8F3E9',
          position: 'relative',
        }}
      >
        <div className="site-container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
              marginBottom: '60px',
            }}
          >
            <div>
              <span className="category-badge">OUR IMPACT —</span>
              <h2 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  color: '#500D18',
                  lineHeight: '1.15',
                  marginBottom: '16px',
                }}
              >
                Action with measurable <br />
                <span style={{ color: '#D9B45B', fontStyle: 'italic' }}>ground impact.</span>
              </h2>
              <p style={{ fontSize: '15px', color: '#716A65', lineHeight: '1.7', marginBottom: '32px', maxWidth: '480px' }}>
                The Atharva Foundation focuses on sustainable, empowering outcomes. Rather than short-term fixes, we build computer labs, provide educational scholarships, and stand with martyrs' families with lifelong dignity.
              </p>

              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '16px',
                  marginBottom: '32px',
                }}
              >
                <div 
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '20px',
                    borderRadius: '16px',
                    border: '1px solid rgba(80, 13, 24, 0.08)',
                    boxShadow: '0 4px 14px rgba(80, 13, 24, 0.03)',
                  }}
                >
                  <div style={{ color: '#500D18', marginBottom: '8px' }}>
                    <GraduationCap size={24} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 700, color: '#500D18' }}>
                    25,000+
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#716A65', fontWeight: 500 }}>
                    Lives Impacted
                  </div>
                </div>

                <div 
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '20px',
                    borderRadius: '16px',
                    border: '1px solid rgba(80, 13, 24, 0.08)',
                    boxShadow: '0 4px 14px rgba(80, 13, 24, 0.03)',
                  }}
                >
                  <div style={{ color: '#500D18', marginBottom: '8px' }}>
                    <Shield size={24} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 700, color: '#500D18' }}>
                    350+
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#716A65', fontWeight: 500 }}>
                    Martyr Families Supported
                  </div>
                </div>

                <div 
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '20px',
                    borderRadius: '16px',
                    border: '1px solid rgba(80, 13, 24, 0.08)',
                    boxShadow: '0 4px 14px rgba(80, 13, 24, 0.03)',
                  }}
                >
                  <div style={{ color: '#500D18', marginBottom: '8px' }}>
                    <GraduationCap size={24} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 700, color: '#500D18' }}>
                    100+
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#716A65', fontWeight: 500 }}>
                    Computers to Daughters
                  </div>
                </div>

                <div 
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '20px',
                    borderRadius: '16px',
                    border: '1px solid rgba(80, 13, 24, 0.08)',
                    boxShadow: '0 4px 14px rgba(80, 13, 24, 0.03)',
                  }}
                >
                  <div style={{ color: '#500D18', marginBottom: '8px' }}>
                    <Sprout size={24} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 700, color: '#500D18' }}>
                    50,000+
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#716A65', fontWeight: 500 }}>
                    Trees Planted
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollTo('stories')}
                className="btn-burgundy"
                style={{ fontSize: '14px' }}
              >
                <span>See Our Impact</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div style={{ position: 'relative' }}>
              <div 
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(80, 13, 24, 0.15)',
                  border: '2px solid rgba(217, 180, 91, 0.3)',
                }}
              >
                <img 
                  src="/images/atharva/assets_images_resource_cause-4.jpg"
                  alt="Atharva Foundation Girl Child Impact"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '500px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  onError={(e) => {
                    e.currentTarget.src = '/images/ui/impact_girl_portrait.jpg';
                  }}
                />
              </div>

              <div style={{ position: 'absolute', top: '-30px', right: '-30px', pointerEvents: 'none', opacity: 0.4 }}>
                <BotanicalLeaf width={200} height={200} color="#D9B45B" opacity={0.6} />
              </div>
            </div>
          </div>
        </div>

        {/* Quote Banner */}
        <div 
          style={{
            backgroundColor: '#310A10',
            color: '#FFFFFF',
            padding: '50px 24px',
            position: 'relative',
            textAlign: 'center',
            borderTop: '2px solid #D9B45B',
          }}
        >
          <div className="site-container" style={{ maxWidth: '820px' }}>
            <span style={{ fontSize: '32px', color: '#D9B45B', fontFamily: 'var(--font-serif)' }}>“</span>
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(20px, 2.6vw, 28px)',
                lineHeight: '1.45',
                color: '#FFFFFF',
                margin: '0 auto 16px auto',
                fontStyle: 'italic',
              }}
            >
              We believe in the power of people, working together for a <span style={{ color: '#D9B45B' }}>stronger, more inclusive India.</span>
            </p>
            <div 
              style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              — ATHARVA FOUNDATION
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: PEOPLE BEHIND THE PROGRESS (REAL LEADERSHIP & GROUND TEAMS)
          ======================================================== */}
      <section 
        id="people"
        style={{
          paddingTop: '80px',
          paddingBottom: '80px',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="site-container">
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '20px',
              marginBottom: '36px',
            }}
          >
            <div>
              <span className="category-badge">PEOPLE BEHIND THE PROGRESS —</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3.5vw, 42px)', color: '#500D18' }}>
                A growing community of changemakers.
              </h2>
            </div>
            <button
              onClick={() => scrollTo('get-involved')}
              style={{
                background: 'none',
                border: 'none',
                color: '#500D18',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
              className="hover:text-amber-600 transition-colors"
            >
              <span>Meet our people</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                role: 'Educators & Teachers',
                desc: 'Dedicated rural teachers and instructors creating learning opportunities at the grassroots.',
                img: '/images/atharva/assets_images_foundation-gallery_teachersday-25_td1.jpeg',
                fallback: '/images/ui/people_educators.jpg',
              },
              {
                role: 'Volunteers on Ground',
                desc: 'Giving their time and skills for martyr families, health screenings, and children literacy.',
                img: '/images/atharva/assets_images_gallery_gallery6.jpg',
                fallback: '/images/ui/people_volunteers.jpg',
              },
              {
                role: 'Armed Forces Welfare',
                desc: 'Guided by ex-servicemen leaders like Col. Sudhir Raje (Retd.) to support martyrs across India.',
                img: '/images/atharva/assets_images_team_team-1.jpg',
                fallback: '/images/ui/people_community.jpg',
              },
              {
                role: 'Student Changemakers',
                desc: 'Atharva Engineering & Management students conducting digital camps and tree plantation drives.',
                img: '/images/atharva/assets_images_foundation-gallery_technologyawareness_cover.jpg',
                fallback: '/images/ui/people_students.jpg',
              },
            ].map((p, i) => (
              <div 
                key={i}
                className="editorial-card"
                style={{
                  borderRadius: '16px',
                  backgroundColor: '#F8F3E9',
                }}
              >
                <div className="card-img-wrap" style={{ height: '180px' }}>
                  <img 
                    src={p.img} 
                    alt={p.role}
                    onError={(e) => {
                      e.currentTarget.src = p.fallback;
                    }}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#500D18', marginBottom: '6px' }}>
                    {p.role}
                  </h4>
                  <p style={{ fontSize: '13px', color: '#716A65', lineHeight: '1.5' }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: STORIES & MOMENTS (REAL STORIES)
          ======================================================== */}
      <section 
        id="stories"
        style={{
          paddingTop: '80px',
          paddingBottom: '80px',
          backgroundColor: '#F8F3E9',
          borderTop: '1px solid rgba(80, 13, 24, 0.08)',
        }}
      >
        <div className="site-container">
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '20px',
              marginBottom: '36px',
            }}
          >
            <div>
              <span className="category-badge">STORIES & MOMENTS —</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3.6vw, 42px)', color: '#500D18', marginBottom: '6px' }}>
                Real stories. Real change.
              </h2>
              <p style={{ fontSize: '15px', color: '#716A65' }}>
                From learning opportunities to tribute events, discover the moving stories behind Atharva Foundation's work.
              </p>
            </div>
            <button
              onClick={() => onOpenVideo('mPlUSVVlW5g')}
              className="btn-outline-dark"
              style={{ fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Play size={14} fill="#500D18" />
              <span>Watch Tribute Film</span>
            </button>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Left Big Card: One For All Wagah Border */}
            <div 
              className="editorial-card group"
              style={{
                borderRadius: '24px',
                position: 'relative',
                minHeight: '440px',
                overflow: 'hidden',
                backgroundColor: '#310A10',
                cursor: 'pointer',
              }}
              onClick={() => onOpenVideo('mPlUSVVlW5g')}
            >
              <img 
                src="/images/atharva/assets_images_foundation-gallery_wagahborder_cover.jpg"
                alt="One For All Tribute - Atharva Foundation"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.85,
                  transition: 'transform 0.6s ease',
                }}
                className="group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/images/atharva/assets_images_foundation-gallery_unsungheroes_cover.jpg';
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(49, 10, 16, 0.95) 0%, rgba(49, 10, 16, 0.4) 50%, transparent 100%)',
                }}
              />
              
              <div 
                style={{
                  position: 'relative',
                  zIndex: 2,
                  marginTop: 'auto',
                  padding: '32px',
                  color: '#FFFFFF',
                }}
              >
                <span style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#D9B45B', fontWeight: 700, textTransform: 'uppercase' }}>
                  NATIONAL TRIBUTE DOCUMENTARY
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: '#FFFFFF', margin: '6px 0 10px 0' }}>
                  One For All | All For One
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.6', marginBottom: '20px', maxWidth: '420px' }}>
                  Commemorating the untold stories of ten brave soldiers and martyrs with dignitaries, armed forces, and thousands of civilians.
                </p>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: '#D9B45B',
                    color: '#380C14',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  className="group-hover:scale-110 transition-transform"
                >
                  <Play size={18} fill="#380C14" style={{ marginLeft: '2px' }} />
                </div>
              </div>
            </div>

            {/* Right 2 Stacked Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div 
                className="editorial-card group"
                style={{
                  borderRadius: '20px',
                  position: 'relative',
                  minHeight: '210px',
                  overflow: 'hidden',
                  backgroundColor: '#310A10',
                  flex: 1,
                }}
              >
                <img 
                  src="/images/atharva/assets_images_foundation-gallery_technologyawareness_cover.jpg"
                  alt="Digital Access Opens Doors"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.82,
                    transition: 'transform 0.6s ease',
                  }}
                  className="group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/images/ui/story_digital.jpg';
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(49, 10, 16, 0.92) 0%, rgba(49, 10, 16, 0.3) 60%, transparent 100%)',
                  }}
                />
                <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto', padding: '24px', color: '#FFFFFF' }}>
                  <span style={{ fontSize: '10.5px', letterSpacing: '0.12em', color: '#D9B45B', fontWeight: 700, textTransform: 'uppercase' }}>
                    DIGITAL EMPOWERMENT
                  </span>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '4px' }}>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#FFFFFF', margin: 0 }}>
                        Digital access opens doors
                      </h4>
                      <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)', margin: '4px 0 0 0', maxWidth: '340px' }}>
                        Providing computer labs in remote border villages so young girls can build tech futures.
                      </p>
                    </div>
                    <button
                      onClick={onOpenDonate}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(217, 180, 91, 0.25)',
                        border: '1px solid #D9B45B',
                        color: '#D9B45B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        flexShrink: 0,
                      }}
                      className="hover:scale-110 hover:bg-amber-400 hover:text-burgundy transition-all"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div 
                className="editorial-card group"
                style={{
                  borderRadius: '20px',
                  position: 'relative',
                  minHeight: '210px',
                  overflow: 'hidden',
                  backgroundColor: '#310A10',
                  flex: 1,
                }}
              >
                <img 
                  src="/images/atharva/assets_images_foundation-gallery_womensdayindiandefenceforce_cover.jpg"
                  alt="Women who inspire"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.82,
                    transition: 'transform 0.6s ease',
                  }}
                  className="group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/images/ui/story_women_inspire.jpg';
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(49, 10, 16, 0.92) 0%, rgba(49, 10, 16, 0.3) 60%, transparent 100%)',
                  }}
                />
                <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto', padding: '24px', color: '#FFFFFF' }}>
                  <span style={{ fontSize: '10.5px', letterSpacing: '0.12em', color: '#D9B45B', fontWeight: 700, textTransform: 'uppercase' }}>
                    WOMEN ACHIEVERS
                  </span>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '4px' }}>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#FFFFFF', margin: 0 }}>
                        Women who inspire
                      </h4>
                      <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)', margin: '4px 0 0 0', maxWidth: '340px' }}>
                        Honoring the courage and leadership of women in defense forces, sports, and rural enterprise.
                      </p>
                    </div>
                    <button
                      onClick={onOpenDonate}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(217, 180, 91, 0.25)',
                        border: '1px solid #D9B45B',
                        color: '#D9B45B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        flexShrink: 0,
                      }}
                      className="hover:scale-110 hover:bg-amber-400 hover:text-burgundy transition-all"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          NEW SECTION: AUTHENTIC GROUND GALLERY STRIP
          ======================================================== */}
      <section 
        style={{
          paddingTop: '70px',
          paddingBottom: '70px',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="site-container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 36px auto' }}>
            <span className="category-badge">GROUND WORK & ARCHIVES —</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3.5vw, 40px)', color: '#500D18' }}>
              Moments from the Ground
            </h2>
            <p style={{ fontSize: '14.5px', color: '#716A65' }}>
              Real photographs from Atharva Foundation drives, defense tributes, schools, and martyr family support.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '18px',
            }}
          >
            {GALLERY_PHOTOS.map((g, idx) => (
              <div 
                key={idx}
                className="editorial-card group"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '210px',
                }}
              >
                <img 
                  src={g.img} 
                  alt={g.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                  className="group-hover:scale-108"
                  onError={(e) => {
                    e.currentTarget.src = '/images/atharva/assets_images_resource_1J6A2037.jpg';
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(56, 12, 20, 0.9) 0%, rgba(56, 12, 20, 0.2) 60%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '16px',
                    color: '#FFFFFF',
                  }}
                >
                  <span style={{ fontSize: '10px', color: '#D9B45B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {g.tag}
                  </span>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>
                    {g.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 7: GET INVOLVED & INLINE MESSAGE FORM
          ======================================================== */}
      <section 
        id="get-involved"
        style={{
          paddingTop: '80px',
          paddingBottom: '80px',
          backgroundColor: '#F8F3E9',
          borderTop: '1px solid rgba(80, 13, 24, 0.08)',
        }}
      >
        <div className="site-container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
            <span className="category-badge">JOIN THE MOVEMENT —</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(30px, 4vw, 44px)', color: '#500D18', marginBottom: '12px' }}>
              Many ways to <span style={{ color: '#D9B45B', fontStyle: 'italic' }}>make a difference.</span>
            </h2>
            <p style={{ fontSize: '15px', color: '#716A65', lineHeight: '1.7' }}>
              Be a part of our journey towards a more inclusive and equitable society. Participate, volunteer or partner with us to support our real initiatives on the ground.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '56px',
            }}
          >
            <div 
              className="editorial-card"
              style={{
                borderRadius: '20px',
                backgroundColor: '#FFFFFF',
              }}
            >
              <div className="card-img-wrap" style={{ height: '210px', position: 'relative' }}>
                <img 
                  src="/images/atharva/assets_images_resource_cause-4.jpg" 
                  alt="Support an Initiative"
                  onError={(e) => {
                    e.currentTarget.src = '/images/ui/get_involved_card1.jpg';
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
                  <BookOpen size={20} />
                </div>
              </div>
              <div style={{ padding: '30px 24px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#500D18', marginBottom: '8px' }}>
                  Support an Initiative
                </h3>
                <p style={{ fontSize: '13.5px', color: '#716A65', lineHeight: '1.6', flex: 1, marginBottom: '20px' }}>
                  Help us strengthen education, women empowerment, healthcare, and support for families of martyrs through verified projects.
                </p>
                <button
                  onClick={onOpenDonate}
                  className="btn-outline-dark"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '13.5px' }}
                >
                  <span>Explore Ways to Help</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            <div 
              className="editorial-card"
              style={{
                borderRadius: '20px',
                backgroundColor: '#FFFFFF',
              }}
            >
              <div className="card-img-wrap" style={{ height: '210px', position: 'relative' }}>
                <img 
                  src="/images/atharva/assets_images_gallery_gallery6.jpg" 
                  alt="Volunteer"
                  onError={(e) => {
                    e.currentTarget.src = '/images/ui/get_involved_card2.jpg';
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
                  <Users size={20} />
                </div>
              </div>
              <div style={{ padding: '30px 24px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#500D18', marginBottom: '8px' }}>
                  Become a Volunteer
                </h3>
                <p style={{ fontSize: '13.5px', color: '#716A65', lineHeight: '1.6', flex: 1, marginBottom: '20px' }}>
                  Contribute your time, skills, and mentorship to create meaningful change in remote and rural communities.
                </p>
                <button
                  onClick={onOpenDonate}
                  className="btn-outline-dark"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '13.5px' }}
                >
                  <span>Become a Volunteer</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            <div 
              className="editorial-card"
              style={{
                borderRadius: '20px',
                backgroundColor: '#FFFFFF',
              }}
            >
              <div className="card-img-wrap" style={{ height: '210px', position: 'relative' }}>
                <img 
                  src="/images/atharva/assets_images_team_team-2.jpg" 
                  alt="Partner With Us"
                  onError={(e) => {
                    e.currentTarget.src = '/images/ui/get_involved_card3.jpg';
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
                  <Handshake size={20} />
                </div>
              </div>
              <div style={{ padding: '30px 24px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#500D18', marginBottom: '8px' }}>
                  CSR & Institution Partner
                </h3>
                <p style={{ fontSize: '13.5px', color: '#716A65', lineHeight: '1.6', flex: 1, marginBottom: '20px' }}>
                  Collaborate with us as CSR partners or institutions to scale social-impact initiatives that create lasting community value.
                </p>
                <button
                  onClick={() => scrollTo('contact-form')}
                  className="btn-outline-dark"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '13.5px' }}
                >
                  <span>Contact the Foundation</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Contact / Get In Touch Form (From previous version) */}
          <div 
            id="contact-form"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: 'clamp(28px, 4vw, 48px)',
              border: '1px solid rgba(80, 13, 24, 0.1)',
              boxShadow: '0 10px 30px rgba(80, 13, 24, 0.05)',
              marginBottom: '48px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '36px', alignItems: 'center' }}>
              <div>
                <span className="category-badge">CONNECT WITH US —</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3vw, 36px)', color: '#500D18', marginBottom: '14px' }}>
                  Get in Touch with Atharva Foundation
                </h3>
                <p style={{ fontSize: '14.5px', color: '#716A65', lineHeight: '1.7', marginBottom: '20px' }}>
                  Whether you want to volunteer, sponsor girl child education, or support the families of our brave martyrs, your contribution brings real smiles and positive change.
                </p>
                <div style={{ fontSize: '13px', color: '#500D18', fontWeight: 600 }}>
                  📍 Atharva Educational Complex, Malad Marve Road, Mumbai-400095 <br />
                  📞 +91 22 40294949 · ✉️ foundation@atharva.edu.in
                </div>
              </div>

              <div>
                {formSubmitted ? (
                  <div 
                    style={{
                      backgroundColor: 'rgba(217, 180, 91, 0.15)',
                      border: '1px solid #D9B45B',
                      borderRadius: '16px',
                      padding: '28px',
                      textAlign: 'center',
                    }}
                  >
                    <CheckCircle2 size={36} color="#500D18" style={{ margin: '0 auto 12px auto' }} />
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: '#500D18', marginBottom: '8px' }}>
                      Thank you for reaching out!
                    </h4>
                    <p style={{ fontSize: '13.5px', color: '#292321', lineHeight: '1.6' }}>
                      Our team will connect with you shortly. Together, let us put <strong>Nation First</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                      <input 
                        type="text" 
                        required 
                        placeholder="Your Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '8px',
                          border: '1px solid rgba(80, 13, 24, 0.2)',
                          backgroundColor: '#F8F3E9',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                      <input 
                        type="tel" 
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '8px',
                          border: '1px solid rgba(80, 13, 24, 0.2)',
                          backgroundColor: '#F8F3E9',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                      <input 
                        type="email" 
                        required 
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '8px',
                          border: '1px solid rgba(80, 13, 24, 0.2)',
                          backgroundColor: '#F8F3E9',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                      <input 
                        type="text" 
                        placeholder="City / State"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        style={{
                          padding: '12px 14px',
                          borderRadius: '8px',
                          border: '1px solid rgba(80, 13, 24, 0.2)',
                          backgroundColor: '#F8F3E9',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>
                    <textarea 
                      rows="3" 
                      placeholder="How would you like to contribute or get involved?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '8px',
                        border: '1px solid rgba(80, 13, 24, 0.2)',
                        backgroundColor: '#F8F3E9',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                    <button 
                      type="submit" 
                      className="btn-burgundy"
                      style={{ alignSelf: 'flex-start', padding: '12px 28px', fontSize: '14px' }}
                    >
                      <span>Send Message</span>
                      <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Closing Banner */}
          <div 
            id="closing-banner"
            style={{
              backgroundColor: '#310A10',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              color: '#FFFFFF',
              boxShadow: '0 20px 45px rgba(49, 10, 16, 0.35)',
              border: '1px solid rgba(217, 180, 91, 0.3)',
            }}
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                alignItems: 'center',
              }}
            >
              <div style={{ padding: '48px 40px', zIndex: 2 }}>
                <h3 
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(26px, 3.4vw, 38px)',
                    color: '#FFFFFF',
                    lineHeight: '1.2',
                    marginBottom: '14px',
                  }}
                >
                  Change happens <br />
                  when people come <span style={{ color: '#D9B45B', fontStyle: 'italic' }}>together.</span>
                </h3>
                <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.65', marginBottom: '28px', maxWidth: '440px' }}>
                  Join hands with Atharva Foundation and be part of initiatives that create lasting impact in communities across India.
                </p>
                <button
                  onClick={onOpenDonate}
                  className="btn-gold"
                  style={{ fontSize: '15px' }}
                >
                  <span>Be Part of the Change</span>
                  <ArrowRight size={17} />
                </button>
              </div>

              <div style={{ height: '100%', minHeight: '280px', position: 'relative' }}>
                <img 
                  src="/images/atharva/assets_images_resource_1J6A2037.jpg"
                  alt="Atharva Foundation Changemakers"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  onError={(e) => {
                    e.currentTarget.src = '/images/ui/get_involved_boys_banner.jpg';
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, #310A10 0%, transparent 40%)',
                  }}
                  className="hidden md:block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
