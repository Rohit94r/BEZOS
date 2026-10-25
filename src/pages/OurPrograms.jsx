import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Leaf, 
  Layers, 
  HeartHandshake, 
  Zap, 
  Globe2, 
  Cpu, 
  BarChart3, 
  ExternalLink,
  CheckCircle2,
  Shield,
  Search
} from 'lucide-react';

const PROGRAMS_DATA = [
  {
    id: 'nature',
    title: 'Conserving & Restoring Nature',
    subtitle: '$2 Billion Commitment',
    category: 'Nature & Oceans',
    color: '#01A664',
    icon: Leaf,
    image: '/images/Restoration_TreePlanting_iStock_SouthAgency_1130655067.jpg',
    lead: 'The Bezos Earth Fund has committed $2 billion to conserve and restore nature. We are working to conserve 30% of the planet by 2030, halt deforestation, and support indigenous stewardship.',
    keyStats: [
      { label: 'Committed Funding', value: '$2 Billion' },
      { label: 'Key Geographies', value: 'Congo Basin, Andes, Pacific' },
      { label: 'Global Target', value: '30% of Earth by 2030' },
    ],
    initiatives: [
      'Congo Basin & Tropical Andes: Providing durable funding for indigenous land rights and forest preservation.',
      'Eastern Tropical Pacific Marine Corridor: Connecting oceanic reserves across Costa Rica, Panama, Colombia, and Ecuador.',
      'AFR100 Landscape Restoration: Restoring 100 million hectares of deforested land across Africa by 2030.',
    ],
  },
  {
    id: 'food',
    title: 'Future of Food',
    subtitle: '$1 Billion Commitment',
    category: 'Food Systems',
    color: '#B27865',
    icon: Layers,
    image: '/images/Agriculture_Soil_Hands_Unslash_GabrielJimenez_jin4W1HqgL4.jpg',
    lead: 'The food system is the second-largest source of global greenhouse gas emissions. We must transform how we grow, distribute, and consume food while feeding a growing world population.',
    keyStats: [
      { label: 'Food Commitment', value: '$1 Billion' },
      { label: 'Centers Established', value: 'Global Protein Hubs' },
      { label: 'Key Focus', value: 'Methane & Soil Health' },
    ],
    initiatives: [
      'Bezos Centers for Sustainable Protein: Investing in university research hubs to make alternative meat tasty, nutritious, and affordable.',
      'Livestock Methane Reduction: Developing innovative feed additives and microbiome interventions to cut cattle emissions.',
      'Soil Carbon & Crop Genomics: Breeding crops with deeper root networks to store carbon underground permanently.',
    ],
  },
  {
    id: 'justice',
    title: 'Environmental Justice',
    subtitle: '$110 Million Committed',
    category: 'Equity & Community',
    color: '#9833A8',
    icon: HeartHandshake,
    image: '/images/ElectricSchoolBus_iStock_GrabillCreative.jpg',
    lead: 'Those who contribute least to emissions suffer the earliest and most severe climate harms. We direct flexible resources directly to frontline groups leading grassroots environmental solutions.',
    keyStats: [
      { label: 'Direct Grants', value: '$110+ Million' },
      { label: 'Urban Land Greening', value: '8 Target U.S. Cities' },
      { label: 'Clean Mobility', value: 'Electric School Buses' },
    ],
    initiatives: [
      'Greening America’s Cities: $100M initiative transforming vacant parcels into community parks and shade trees.',
      'Equitable Transit Electrification: Replacing toxic diesel school buses with zero-emission fleets in disadvantaged districts.',
      'Frontline Grassroots Capacity: Unrestricted operational grants to grassroots environmental justice advocates.',
    ],
  },
  {
    id: 'decarb',
    title: 'Decarbonizing Energy & Industry',
    subtitle: 'Industrial Tipping Points',
    category: 'Clean Industry',
    color: '#00A4E1',
    icon: Zap,
    image: '/images/Transport_Shipping_iStock_JuanGarces_1167914501.jpg',
    lead: 'Heavy industry, electricity, and freight transport account for the majority of global carbon pollution. We target the critical levers needed to commercialize near-zero solutions before 2030.',
    keyStats: [
      { label: 'Target Sectors', value: 'Steel, Cement, Shipping' },
      { label: 'Coalition Partner', value: 'Mission Possible Partnership' },
      { label: '2030 Goal', value: 'Commercial Parity' },
    ],
    initiatives: [
      'Green Steel Transition: Spurring industrial demand and standardizing definitions for near-zero emission metallurgy.',
      'Clean Maritime Shipping Corridors: Advancing hydrogen-derived green fuels and port bunkering infrastructure.',
      'Renewable Grid Modernization: Fast-tracking grid interconnection and long-duration storage technologies.',
    ],
  },
  {
    id: 'economy',
    title: 'Economics, Finance, & Markets',
    subtitle: 'Realigning Capital',
    category: 'Market Design',
    color: '#183B72',
    icon: Globe2,
    image: '/images/Earth_Unsplash_DanielOlah_HNkgPFBShSw.jpg',
    lead: 'Markets can be a powerful engine for planetary regeneration, but only when economic incentives reward conservation and internalize ecological externalities.',
    keyStats: [
      { label: 'Focus Areas', value: 'Integrity & Catalytic Capital' },
      { label: 'Partnerships', value: 'Global Financial Institutions' },
      { label: 'Carbon Integrity', value: 'High-Standard Credits' },
    ],
    initiatives: [
      'High-Integrity Carbon Markets: Supporting strict scientific baselines to prevent greenwashing in offset programs.',
      'Nature Disclosures & Accounting: Helping institutional investors measure biodiversity dependencies and financial risks.',
      'Blended Finance Vehicles: Deploying first-loss philanthropic equity to unlock private investment in emerging markets.',
    ],
  },
  {
    id: 'tech',
    title: 'Next Technologies & AI',
    subtitle: '$100M Grand Challenge',
    category: 'Breakthrough Tech',
    color: '#002041',
    icon: Cpu,
    image: '/images/MethaneSATMission_EDF_0820.jpg',
    lead: 'Technological acceleration is essential to leapfrog historical development paths. We fund audacious scientific innovation that can alter the climate trajectory.',
    keyStats: [
      { label: 'AI Challenge Pool', value: '$100 Million' },
      { label: 'Satellite Program', value: 'MethaneSAT' },
      { label: 'Disciplines', value: 'AI, Genomics, Remote Sensing' },
    ],
    initiatives: [
      'AI for Climate and Nature Grand Challenge: Funding global researchers using frontier AI models to solve climate challenges.',
      'MethaneSAT Orbital Sensing: Detecting global methane plumes from space with high spatial and spectral resolution.',
      'Synthetic Biology: Engineered enzymes for rapid biomaterial degradation and industrial decarbonization.',
    ],
  },
  {
    id: 'data',
    title: 'Monitoring, Data, & Accountability',
    subtitle: 'Open Planetary Truth',
    category: 'Data Science',
    color: '#A36552',
    icon: BarChart3,
    image: '/images/ETP_ScientistScubaDiver_CreditEmilyDarling_WildlifeConservationSociety.jpg',
    lead: 'What gets measured gets managed. We equip international watchdogs, indigenous communities, and policymakers with unbiased, transparent data.',
    keyStats: [
      { label: 'Platform Type', value: 'Open Access Data' },
      { label: 'Verification', value: 'Near Real-Time Tracking' },
      { label: 'Global Coverage', value: 'Planetary Canopy & Oceans' },
    ],
    initiatives: [
      'Global Forest Watch & Land Tracking: Real-time deforestation alerts powered by cloud computation and radar imagery.',
      'Open Emissions Registries: Democratizing access to facility-level greenhouse gas output data worldwide.',
      'Marine Sanctuary Tracking: Real-time vessel monitoring to deter illegal fishing in newly established ocean reserves.',
    ],
  },
];

export default function OurPrograms() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'all';
  const [searchFilter, setSearchFilter] = useState('');

  // Scroll to selected program if anchor or query exists
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && tab !== 'all') {
      const element = document.getElementById(tab);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  const handleTabChange = (id) => {
    setSearchParams(id === 'all' ? {} : { tab: id });
  };

  const filteredPrograms = PROGRAMS_DATA.filter((p) => {
    const matchesTab = currentTab === 'all' || p.id === currentTab;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.lead.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.category.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-[#FAF6F4] text-[#002041] pt-28 lg:pt-36">
      {/* 1. HERO HEADER */}
      <section className="site-container pb-16 lg:pb-24 border-b border-gray-200/60">
        <div className="max-w-4xl space-y-6">
          <span className="text-xs uppercase font-bold tracking-widest text-[#00A4E1] block">
            Our Programs
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-[#002041] tracking-tight leading-[1.1]">
            Spurring innovation to transform entire systems.
          </h1>
          <p className="font-noto text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
            Solving climate change requires more than lowering emissions. The Bezos Earth Fund focuses on spurring innovation and progress in several key areas that together can transform our society and economy to remain in balance with nature.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => handleTabChange('all')}
              className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                currentTab === 'all'
                  ? 'bg-[#002041] text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200/60'
              }`}
            >
              All Programs ({PROGRAMS_DATA.length})
            </button>
            {PROGRAMS_DATA.map((prog) => (
              <button
                key={prog.id}
                onClick={() => handleTabChange(prog.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                  currentTab === prog.id
                    ? 'bg-[#002041] text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200/60'
                }`}
              >
                {prog.category}
              </button>
            ))}
          </div>

          {/* Keyword Search */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Filter initiatives..."
              className="w-full bg-white text-sm text-[#002041] pl-10 pr-4 py-2.5 rounded-full border border-gray-200/80 focus:outline-none focus:border-[#00A4E1] transition-all"
            />
          </div>
        </div>
      </section>

      {/* 2. PROGRAM DEEP DIVES */}
      <section className="py-20 lg:py-28 site-container space-y-24">
        {filteredPrograms.map((prog, index) => {
          const IconComp = prog.icon;
          const isEven = index % 2 === 1;

          return (
            <div
              key={prog.id}
              id={prog.id}
              className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-sm scroll-mt-32 transition-all hover:shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Media Image */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-3xl overflow-hidden aspect-[16/11] shadow-lg group">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm"
                        style={{ backgroundColor: prog.color }}
                      >
                        {prog.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Stats Bar under photo */}
                  <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-100 text-center">
                    {prog.keyStats.map((stat, sIdx) => (
                      <div key={sIdx} className="bg-[#FAF6F4] p-3 rounded-2xl">
                        <div className="font-display font-bold text-sm sm:text-base text-[#002041]">
                          {stat.value}
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mt-0.5">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content description */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${prog.color}20`, color: prog.color }}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                      {prog.category}
                    </span>
                  </div>

                  <h2 className="font-display font-medium text-3xl sm:text-4xl text-[#002041] tracking-tight leading-[1.15]">
                    {prog.title}
                  </h2>

                  <p className="font-noto text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                    {prog.lead}
                  </p>

                  {/* Bulleted Initiatives */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#002041]">
                      Key Strategic Initiatives
                    </h4>
                    <div className="space-y-2.5">
                      {prog.initiatives.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-600 font-noto">
                          <CheckCircle2
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color: prog.color }}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      to="/"
                      className="btn-primary"
                      style={{ backgroundColor: prog.color, borderColor: prog.color }}
                    >
                      <span>Explore Grants</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. BIG IDEAS BANNER CTA */}
      <section className="py-20 lg:py-28 bg-[#002041] text-white">
        <div className="site-container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00A4E1]">
              Collaboration & Impact
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-white tracking-tight leading-[1.15]">
              We invest in big ideas for change.
            </h2>
            <p className="font-noto text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Philanthropic flexibility gives us the freedom to test novel concepts, partner with frontline actors, and scale proven climate innovations.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link to="/who-we-are" className="btn-primary">
                <span>Who We Are</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/" className="btn-outline-white">
                <span>Return to Homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
