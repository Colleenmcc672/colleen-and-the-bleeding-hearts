import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Shows from './components/Shows';
import Media from './components/Media';
import FanClub from './components/FanClub';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import TermsOfServiceModal from './components/TermsOfServiceModal';

// DEPLOYMENT TRIGGER: Version 1.8.0 - FINAL CLEANUP & ACTION TRIGGER
const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'bio', 'shows', 'media', 'fanclub', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isPrivacyModalOpen || isTermsModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isPrivacyModalOpen, isTermsModalOpen]);

  return (
    <div className="min-h-screen rock-gradient selection:bg-neon-red selection:text-white">
      <Header activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="bio" className="py-20">
          <Bio />
        </section>

        <section id="shows" className="py-20 bg-black/50">
          <Shows />
        </section>

        <section id="media" className="py-20">
          <Media />
        </section>

        <section id="fanclub" className="py-20 bg-neon-red/10 border-y border-neon-red/20">
          <FanClub />
        </section>

        <section id="testimonials" className="py-20 bg-black/40">
          <Testimonials />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      <Footer 
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)} 
        onOpenTerms={() => setIsTermsModalOpen(true)}
      />

      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />

      <TermsOfServiceModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
    </div>
  );
};

export default App;
