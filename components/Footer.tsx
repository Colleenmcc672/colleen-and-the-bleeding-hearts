
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-4 mb-12">
          <span className="font-rock text-3xl md:text-4xl text-neon-red leading-none">COLLEEN</span>
          <span className="font-rock text-2xl text-neon-red leading-none">&</span>
          <span className="font-bleeding text-2xl md:text-3xl text-neon-red leading-none tracking-tight">THE BLEEDING HEARTS</span>
        </div>

        <div className="flex space-x-8 mb-12">
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-neon-red transition-colors font-rock tracking-widest uppercase">Facebook</a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-neon-red transition-colors font-rock tracking-widest uppercase">Instagram</a>
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-neon-red transition-colors font-rock tracking-widest uppercase">YouTube</a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12 font-rock tracking-[0.3em] text-sm text-white/40">
          <button 
            onClick={onOpenPrivacy}
            className="hover:text-neon-red transition-colors duration-300 uppercase"
          >
            PRIVACY POLICY
          </button>
          <button 
            onClick={onOpenTerms}
            className="hover:text-neon-red transition-colors duration-300 uppercase"
          >
            TERMS OF SERVICE
          </button>
          <button className="hover:text-neon-red transition-colors duration-300 uppercase cursor-not-allowed opacity-50">EPK</button>
        </div>

        <p className="text-white/20 text-xs tracking-[0.4em] uppercase leading-loose">
          &copy; {new Date().getFullYear()} Colleen & The Bleeding Hearts. All Rights Reserved. <br className="md:hidden" />
          EST. 2010 in the GTA
        </p>
        
        <div className="mt-12 flex items-center space-x-6">
            <div className="h-[1px] w-16 bg-white/5"></div>
            <div className="w-2 h-2 rounded-full bg-neon-red shadow-[0_0_12px_#ff003c]"></div>
            <div className="h-[1px] w-16 bg-white/5"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
