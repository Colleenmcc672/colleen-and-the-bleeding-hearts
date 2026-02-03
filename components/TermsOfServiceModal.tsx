
import React from 'react';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceModal: React.FC<TermsOfServiceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-neutral-900 border-2 border-neon-red shadow-[0_0_50px_rgba(255,0,60,0.3)] max-h-[90vh] overflow-y-auto custom-scrollbar">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-neon-red transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>

        <div className="p-8 md:p-12">
          <h2 className="font-rock text-4xl text-white mb-8 tracking-widest uppercase border-b border-white/10 pb-4">
            TERMS OF <span className="text-neon-red">SERVICE</span>
          </h2>
          
          <div className="space-y-6 text-white/80 leading-relaxed font-light text-lg">
            <p>
              By accessing or using this website, you agree to the following terms.
            </p>
            
            <p>
              All content on this site—including text, images, videos, music, logos, and branding—is the property of <span className="text-white font-bold italic uppercase tracking-wider">Colleen & The Bleeding Hearts</span> unless otherwise stated and may not be copied, reproduced, or used without permission.
            </p>

            <p>
              This website is provided for informational and promotional purposes only. While we strive to keep information current, we make no guarantees regarding accuracy, availability, or performance details.
            </p>

            <p className="border-l-2 border-neon-red pl-4 py-1 italic text-white/60">
              We are not responsible for the content or practices of third-party websites linked from this site (such as social media, streaming, or ticketing platforms).
            </p>

            <p>
              We reserve the right to update or modify these Terms of Service at any time without notice. Continued use of the site constitutes acceptance of any changes.
            </p>

            <p className="font-bold text-white uppercase tracking-[0.1em]">
              If you do not agree with these terms, please do not use this website.
            </p>

            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="font-rock text-xl text-white tracking-widest mb-2 uppercase">CONTACT</p>
              <a 
                href="mailto:colleenandthebleedinghearts@gmail.com" 
                className="text-neon-red hover:underline break-all transition-all"
              >
                colleenandthebleedinghearts@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-12">
            <button 
              onClick={onClose}
              className="w-full py-4 bg-neon-red text-white font-rock text-2xl tracking-[0.2em] btn-hover transition-all"
            >
              ACCEPT & CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceModal;
