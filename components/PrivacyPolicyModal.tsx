
import React from 'react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
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
            PRIVACY <span className="text-neon-red">POLICY</span>
          </h2>
          
          <div className="space-y-6 text-white/80 leading-relaxed font-light text-lg">
            <p>
              Colleen & The Bleeding Hearts respect your privacy. Any personal information you provide through this website (such as your name or email address) is used only to respond to inquiries, share band updates, or send newsletters if you choose to subscribe.
            </p>
            
            <p className="border-l-2 border-neon-red pl-4 py-1">
              We do not sell, rent, or share your personal information with third parties.
            </p>

            <p>
              Our website may use cookies or basic analytics to improve site performance and understand how visitors interact with the site. This information is collected anonymously.
            </p>

            <p>
              This website may include links to third-party platforms (such as social media, streaming, or ticketing sites). We are not responsible for their privacy practices.
            </p>

            <p className="italic text-white/60">
              By using this site, you consent to this Privacy Policy. You may unsubscribe from communications or request removal of your information at any time.
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
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
