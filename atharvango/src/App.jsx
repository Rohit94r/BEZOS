import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import OurPrograms from './pages/OurPrograms';
import MobileSectionNavigator from './MobileSectionNavigator';
import DonateModal from './DonateModal';
import FounderModal from './FounderModal';
import SearchModal from './SearchModal';
import VideoModal from './VideoModal';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [founderModalOpen, setFounderModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState('mPlUSVVlW5g');

  const handleOpenVideo = (vid = 'mPlUSVVlW5g') => {
    setActiveVideoId(vid);
    setVideoModalOpen(true);
  };

  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-ivory)' }}>
        <ScrollToTop />
        
        {/* Main Navbar */}
        <Navbar 
          onOpenDonate={() => setDonateModalOpen(true)} 
          onOpenSearch={() => setSearchModalOpen(true)}
        />

        {/* Page Content */}
        <main style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  onOpenDonate={() => setDonateModalOpen(true)}
                  onOpenFounder={() => setFounderModalOpen(true)}
                  onOpenVideo={handleOpenVideo}
                />
              } 
            />
            <Route 
              path="/who-we-are" 
              element={
                <WhoWeAre 
                  onOpenDonate={() => setDonateModalOpen(true)}
                />
              } 
            />
            <Route 
              path="/our-programs" 
              element={
                <OurPrograms 
                  onOpenDonate={() => setDonateModalOpen(true)}
                />
              } 
            />
            <Route 
              path="*" 
              element={
                <Home 
                  onOpenDonate={() => setDonateModalOpen(true)}
                  onOpenFounder={() => setFounderModalOpen(true)}
                  onOpenVideo={handleOpenVideo}
                />
              } 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenDonate={() => setDonateModalOpen(true)} />

        {/* SPECIAL MOBILE SECTION NAVIGATOR (Down arrow button for automatic section switching) */}
        <MobileSectionNavigator onOpenDonate={() => setDonateModalOpen(true)} />

        {/* Interactive Modals */}
        <DonateModal 
          isOpen={donateModalOpen} 
          onClose={() => setDonateModalOpen(false)} 
        />
        <FounderModal 
          isOpen={founderModalOpen} 
          onClose={() => setFounderModalOpen(false)} 
        />
        <SearchModal 
          isOpen={searchModalOpen} 
          onClose={() => setSearchModalOpen(false)} 
        />
        <VideoModal 
          isOpen={videoModalOpen} 
          onClose={() => setVideoModalOpen(false)} 
          videoId={activeVideoId}
        />
      </div>
    </BrowserRouter>
  );
}
