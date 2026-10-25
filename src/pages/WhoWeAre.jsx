import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Target, 
  HeartHandshake,
  Briefcase,
  X,
  ExternalLink
} from 'lucide-react';

const TIMELINE_EVENTS = [
  {
    year: '2020',
    title: 'The $10 Billion Commitment',
    description: 'Jeff Bezos announces the founding of the Bezos Earth Fund with a pledge of $10 billion to be disbursed within the decisive decade to combat climate change and protect the living planet.',
    tag: 'Founding',
  },
  {
    year: '2021',
    title: 'COP26 Glasgow Pledges & Nature Pledge',
    description: 'At COP26, the Fund commits $1 billion to conserve nature and protect biodiversity hotspots, focusing on the Congo Basin, tropical Andes, and marine reserves.',
    tag: 'Global Impact',
  },
  {
    year: '2022',
    title: 'Food Systems Transformation & Energy Decarbonization',
    description: 'Launch of the $1 billion Future of Food portfolio to pioneer sustainable proteins, lower livestock methane, and expand regenerative agriculture in Africa and South America.',
    tag: 'Portfolio Expansion',
  },
  {
    year: '2023',
    title: 'AI for Climate & Positive Tipping Points',
    description: 'Unveiling the $100 Million AI for Climate and Nature Grand Challenge to unlock breakthroughs in synthetic biology, grid optimization, and planetary monitoring.',
    tag: 'Innovation',
  },
  {
    year: '2024',
    title: '$100M Urban Greening & Pacific Marine Expansion',
    description: 'Announcing transformative urban forestry and park developments across 8 major U.S. cities, plus multi-nation marine protected corridors across the Blue Pacific Continent.',
    tag: 'Community & Oceans',
  },
];

const LEADERSHIP_MEMBERS = [
  {
    name: 'Jeff Bezos',
    title: 'Executive Chair',
    bio: 'Founder of Amazon and Blue Origin. Established the Bezos Earth Fund in 2020 to provide $10 billion in catalytic grants to protect biodiversity and accelerate climate solutions.',
    image: '/images/Jeff-Bezos-Headshot.jpg',
    category: 'Leadership',
  },
  {
    name: 'Lauren Sánchez Bezos',
    title: 'Vice Chair',
    bio: 'Vice Chair of the Bezos Earth Fund. Focuses on climate communication, indigenous communities in Latin America, and elevating frontline ecological stewardship worldwide.',
    image: '/images/LS-Headshot.jpg',
    category: 'Leadership',
  },
  {
    name: 'Tom Taylor',
    title: 'President & CEO',
    bio: 'President and Chief Executive Officer of the Bezos Earth Fund, overseeing grant allocation, program strategy, and partnerships with sovereign governments and research institutions.',
    image: '/images/BEF_9061.jpg',
    category: 'Executive',
  },
  {
    name: 'Alexa Kleysteuber',
    title: 'Associate Director, Materials & Manufacturing',
    bio: 'Leads our industrial decarbonization strategies targeting near-zero emissions green steel, low-carbon cement, and international industrial coalitions.',
    image: '/images/Headshot_AlexaKleysteuber.jpg',
    category: 'Program Leadership',
  },
  {
    name: 'Amanda Eichel',
    title: 'Senior Director, Clean Energy & Cities',
    bio: 'Directs urban climate initiatives, zero-emission mass transit electrification, and cross-sector coalitions for resilient sustainable cities.',
    image: '/images/BEF_Headshot-53_Amanda-Eichel.jpg',
    category: 'Program Leadership',
  },
  {
    name: 'Adrienne Schmoeker',
    title: 'Senior Program Officer',
    bio: 'Oversees open science data platforms, monitoring frameworks, and accountability tools to ensure transparent tracking of ecological commitments.',
    image: '/images/BEF_9118.jpg',
    category: 'Program Leadership',
  },
];

const GUIDING_PILLARS = [
  {
    icon: Compass,
    title: 'Bold, Flexible Capital',
    description: 'We deploy high-risk philanthropic bets that traditional grantmakers and private capital cannot, unlocking early-stage innovation and policy breakthroughs.',
  },
  {
    icon: ShieldCheck,
    title: 'Rigorous Science',
    description: 'Every grant is anchored in empirical data, peer-reviewed systems analysis, and clear measurable indicators of planetary impact.',
  },
  {
    icon: HeartHandshake,
    title: 'Climate Justice',
    description: 'Those least responsible for climate change suffer its consequences first and worst. We prioritize frontline communities and indigenous leadership.',
  },
  {
    icon: Target,
    title: 'Urgency at Scale',
    description: 'The clock is ticking on tipping points. We operate with discipline, urgency, and focus on interventions that trigger compounding, positive market dynamics.',
  },
];

export default function WhoWeAre() {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  const filteredLeaders = activeTab === 'All' 
    ? LEADERSHIP_MEMBERS 
    : LEADERSHIP_MEMBERS.filter(m => m.category.includes(activeTab));

  return (
    <div className="bg-[#FAF6F4] text-[#002041] pt-28 lg:pt-36">
      {/* 1. HERO HEADER */}
      <section className="site-container pb-16 lg:pb-24 border-b border-gray-200/60">
        <div className="max-w-4xl space-y-6">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B27865] block">
            Who We Are
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-[#002041] tracking-tight leading-[1.1]">
            We are guided by the belief that Earth is the best planet.
          </h1>
          <p className="font-noto text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
            The Bezos Earth Fund began in 2020 and is guided by Jeff Bezos and Lauren Sánchez Bezos’s belief that Earth is the best planet in this solar system. The initial $10 billion commitment is being disbursed to partners in countries and regions all around the globe to support the development of innovative solutions that protect and restore the natural world.
          </p>
        </div>

        {/* Featured Hero Photo */}
        <div className="mt-12 lg:mt-16 rounded-3xl overflow-hidden shadow-xl aspect-[21/9] relative group">
          <img
            src="https://www.bezosearthfund.org/uploads/transforms/_1200x630_crop_center-center_82_none/jeffbezos.jpeg?mtime=1667277426"
            alt="Jeff Bezos and Lauren Sánchez Bezos"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002041]/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 sm:left-10 text-white font-noto">
            <span className="text-xs uppercase font-bold tracking-wider text-[#00A4E1] block mb-1">
              Leadership & Commitment
            </span>
            <p className="font-display font-medium text-lg sm:text-xl text-white">
              Accelerating systemic solutions in the decisive decade.
            </p>
          </div>
        </div>
      </section>

      {/* 2. GUIDING PILLARS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="site-container">
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00A4E1]">
              Our Guiding Principles
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#002041] tracking-tight">
              How we approach transformational change
            </h2>
            <p className="font-noto text-gray-600 text-base leading-relaxed">
              Philanthropy has a special duty to be nimble, take risks that others cannot, and foster collaboration across government, civil society, and the private sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {GUIDING_PILLARS.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#FAF6F4] border border-[#F1EBE8] hover:border-[#A36552] transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#A36552]/10 text-[#A36552] flex items-center justify-center transition-transform group-hover:scale-110">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-medium text-xl text-[#002041] leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="font-noto text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. OUR JOURNEY (TIMELINE) */}
      <section id="our-journey" className="py-24 lg:py-32 bg-[#FAF6F4] relative">
        <div className="site-container">
          <div className="max-w-3xl space-y-4 mb-16 lg:mb-20">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B27865]">
              Milestones
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-[#002041] tracking-tight">
              Our Journey
            </h2>
            <p className="font-noto text-gray-600 text-base leading-relaxed">
              Since 2020, we have moved rapidly from initial vision to building a global portfolio of catalytic grants driving measurable climate action.
            </p>
          </div>

          {/* Interactive Timeline List */}
          <div className="relative border-l-2 border-[#183B72]/20 ml-4 md:ml-32 space-y-12">
            {TIMELINE_EVENTS.map((event, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Year Marker on Left */}
                <div className="hidden md:block absolute -left-32 top-0 text-right w-24">
                  <span className="font-display font-bold text-2xl text-[#002041] group-hover:text-[#A36552] transition-colors">
                    {event.year}
                  </span>
                </div>

                {/* Node Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#00A4E1] group-hover:border-[#A36552] group-hover:scale-125 transition-all shadow-sm" />

                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="md:hidden font-display font-bold text-lg text-[#002041]">
                      {event.year}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A4E1] bg-[#00A4E1]/10 px-2.5 py-0.5 rounded-full">
                      {event.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-medium text-xl sm:text-2xl text-[#002041] leading-snug">
                    {event.title}
                  </h3>
                  <p className="font-noto text-sm text-gray-600 mt-3 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR PEOPLE SECTION */}
      <section id="our-people" className="py-24 lg:py-32 bg-white">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-[#00A4E1]">
                Leadership & Team
              </span>
              <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-[#002041] tracking-tight">
                Our People
              </h2>
              <p className="font-noto text-gray-600 text-base leading-relaxed">
                We are a diverse team of scientists, government leaders, private sector innovators, and climate advocates committed to delivering transformational change.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2">
              {['All', 'Leadership', 'Program Leadership'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === tab
                      ? 'bg-[#002041] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Leaders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLeaders.map((person, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedLeader(person)}
                className="bg-[#FAF6F4] rounded-3xl overflow-hidden border border-[#F1EBE8] hover:shadow-lg transition-all group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square overflow-hidden bg-gray-200">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002041]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#A36552]">
                      {person.category}
                    </span>
                    <h3 className="font-display font-medium text-xl text-[#002041] group-hover:text-[#A36552] transition-colors">
                      {person.name}
                    </h3>
                    <p className="font-noto text-xs sm:text-sm font-semibold text-gray-700">
                      {person.title}
                    </p>
                    <p className="font-noto text-xs text-gray-500 line-clamp-3 pt-1 leading-relaxed">
                      {person.bio}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A36552] flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Biography <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. JOIN OUR TEAM CALLOUT */}
      <section id="careers" className="py-20 lg:py-28 bg-[#002041] text-white relative">
        <div className="site-container">
          <div className="bg-gradient-to-r from-[#183B72] to-[#002041] rounded-3xl p-8 sm:p-14 border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4 text-center lg:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-[#00A4E1]">
                Careers
              </span>
              <h2 className="font-display font-medium text-3xl sm:text-4xl text-white tracking-tight">
                Join Our Team
              </h2>
              <p className="font-noto text-sm sm:text-base text-gray-300 leading-relaxed">
                We are actively looking for visionary thinkers, scientists, project leaders, and operators who want to tackle the greatest challenge of our time.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="https://www.bezosearthfund.org/careers"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <span>View Open Opportunities</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leader Bio Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#002041]/80 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500"
              aria-label="Close biography"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-5 pb-6 border-b border-gray-100">
              <img
                src={selectedLeader.image}
                alt={selectedLeader.name}
                className="w-20 h-20 rounded-2xl object-cover shadow-sm"
              />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A4E1]">
                  {selectedLeader.category}
                </span>
                <h3 className="font-display font-medium text-2xl text-[#002041]">
                  {selectedLeader.name}
                </h3>
                <p className="font-noto text-xs sm:text-sm font-semibold text-[#A36552]">
                  {selectedLeader.title}
                </p>
              </div>
            </div>

            <div className="mt-6 font-noto text-sm text-gray-700 leading-relaxed space-y-3">
              <p>{selectedLeader.bio}</p>
              <p className="text-xs text-gray-500">
                Working collaboratively across portfolios to deliver measurable planetary outcomes by 2030.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setSelectedLeader(null)}
                className="btn-outline text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
