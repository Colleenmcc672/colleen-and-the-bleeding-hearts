
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-rock text-5xl text-white inline-block relative">
          WHAT THE <span className="text-neon-red">HEARTS</span> ARE SAYING
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-neon-red/30"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="relative p-8 border border-white/5 bg-gradient-to-br from-white/5 to-transparent hover:border-neon-red/20 transition-all group">
            <div className="text-neon-red text-6xl font-serif absolute -top-4 -left-2 opacity-20">"</div>
            <p className="text-lg text-white/80 italic mb-8 relative z-10 line-clamp-4 group-hover:line-clamp-none transition-all">
              {t.quote}
            </p>
            <div className="mt-auto">
              <h4 className="font-rock text-xl text-white tracking-widest uppercase">{t.name}</h4>
              <p className="text-xs text-neon-red font-bold uppercase tracking-tighter">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
