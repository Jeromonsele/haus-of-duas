/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AIChat from './components/AIChat';
import GrainOverlay from './components/GrainOverlay';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ManifestoSection from './components/ManifestoSection';
import GallerySection from './components/GallerySection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import InquiryModal from './components/InquiryModal';
import ProjectDetail from './components/ProjectDetail';
import AllProjects from './components/AllProjects';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import Preloader from './components/Preloader';
import { Project } from './types';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openInquiry = (service?: string) => {
    setPreSelectedService(service);
    setInquiryOpen(true);
  };

  // Smooth Scroll Handler with Offset for Fixed Header
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#1C1C1C] selection:bg-[#1C1C1C] selection:text-[#F5F2EB]">
      <SmoothScroll />
      <CustomCursor />
      <GrainOverlay />

      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Overlay Components */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onInquire={() => openInquiry()}
        onNavigate={handleScrollToSection}
      />

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        preSelectedService={preSelectedService}
      />

      <AnimatePresence>
        {activeProject && (
          <ProjectDetail
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
        {showAllProjects && (
          <AllProjects
            onClose={() => setShowAllProjects(false)}
            onSelect={(p) => {
              setActiveProject(p);
            }}
          />
        )}
      </AnimatePresence>

      {/* Navigation */}
      <Navbar
        isScrolled={isScrolled}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
        onInquire={() => openInquiry()}
        onNavigate={handleScrollToSection}
        onScrollToTop={scrollToTop}
      />

      {/* HERO SECTION */}
      <HeroSection />

      {/* MANIFESTO */}
      <ManifestoSection />

      {/* CURATED GALLERY SECTION */}
      <GallerySection
        onShowAll={() => setShowAllProjects(true)}
        onSelectProject={setActiveProject}
      />

      {/* SERVICES */}
      <ServicesSection onInquire={openInquiry} />

      {/* PROCESS / TECH */}
      <ProcessSection onInquire={() => openInquiry()} />

      {/* FOOTER */}
      <Footer onNavigate={handleScrollToSection} />

      <AIChat />
    </div>
  );
};

export default App;