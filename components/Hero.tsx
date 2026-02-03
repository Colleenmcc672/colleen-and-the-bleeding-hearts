import React from 'react';
import { HERO_BACKGROUND_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
      {/* 
          THE CROWD PHOTO BEHIND THE TEXT 
          High contrast, full grayscale, and sharp visibility.
          Adjusted brightness to ensure the photo is clearly recognizable.
      */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url("${HERO_BACKGROUND_URL}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'grayscale(1) contrast(1.8) brightness(0.5)'
        }}
      ></div>
      
      {/* Subtle Grey/Blue Hue Overlay to push the photo back slightly */}
      <div className="absolute inset-0 z-10 bg-slate-900/40 mix-blend-multiply"></div>
      
      {/* Vignette gradients to help the red text pop off the B&W background */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>

      <div className="relative z-20 text-center px-4 max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="font-impact text-xl md:text-2xl text-white tracking-[0.8em] mb-8 md:mb-12 uppercase opacity-90 drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
          HIGH ENERGY • RAW • UNFORGETTABLE
        </h2>
        
        {/* Band Name Stacked on 3 lines using the "Bleeding" and Rock fonts */}
        <div className="flex flex-col items-center mb-12 md:mb-16 gap-y-2">
          <h1 className="font-rock text-6xl md:text-8xl lg:text-[9rem] text-neon-red drop-shadow-[0_0_30px_rgba(255,0,60,0.8)] leading-none uppercase tracking-widest">
            COLLEEN &
          </h1>
          <h1 className="font-bleeding text-4xl md:text-7xl lg:text-[8rem] text-neon-red drop-shadow-[0_0_40px_rgba(255,0,60,1)] leading-none uppercase tracking-tight">
            THE BLEEDING
          </h1>
          <h1 className="font-bleeding text-5xl md:text-8xl lg:text-[10rem] text-neon-red drop-shadow-[0_0_50px_rgba(255,0,60,1)] leading-none uppercase tracking-tight">
            HEARTS
          </h1>
        </div>

        <p className="text-xl md:text-3xl text-white max-w-4xl mx-auto mb-14 leading-relaxed font-bold italic drop-shadow-[0_4px_30px_rgba(0,0,0,1)] px-6">
          "One of the most electrifying rock ’n’ roll cover bands in the GTA. We don’t just play the hits — we bleed them."
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full sm:w-auto">
          <button 
            onClick={() => document.getElementById('shows')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-12 py-5 bg-neon-red text-white font-rock text-3xl tracking-[0.1em] btn-hover transition-all duration-300 shadow-[0_4px_40px_rgba(255,0,60,0.6)]"
          >
            SEE UPCOMING GIGS
          </button>
          <button 
            onClick={() => document.getElementById('media')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-12 py-5 border-2 border-white text-white font-rock text-3xl tracking-[0.1em] hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm shadow-2xl"
          >
            WATCH VIDEO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
