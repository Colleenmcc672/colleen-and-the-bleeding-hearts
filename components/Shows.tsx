
import React from 'react';
import { SHOW_DATES } from '../constants';

const Shows: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between mb-12">
        <h2 className="font-rock text-5xl md:text-6xl text-white">UPCOMING <span className="text-neon-red">GIGS</span></h2>
        <div className="hidden md:block h-px flex-grow bg-white/10 mx-8"></div>
      </div>

      <div className="space-y-4">
        {SHOW_DATES.map((show) => (
          <div 
            key={show.id} 
            className="group flex flex-col md:flex-row items-center justify-between p-6 bg-white/5 border border-white/10 hover:border-neon-red/50 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center space-x-8 w-full">
              <div className="text-center md:text-left min-w-[100px]">
                <p className="font-rock text-4xl text-neon-red leading-none">{show.date.split(' ')[1]}</p>
                <p className="font-rock text-xl text-white/60">{show.date.split(' ')[0]}</p>
              </div>
              <div className="h-10 w-px bg-white/10 hidden md:block"></div>
              <div className="flex-grow">
                <h3 className="font-rock text-2xl text-white tracking-wide">{show.venue}</h3>
                <p className="text-white/50">{show.city}</p>
              </div>
              <div className="hidden md:block">
                <span className="font-rock text-white/20 tracking-widest text-sm group-hover:text-neon-red transition-colors uppercase">
                  Mark Your Calendar
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-white/40 italic">More dates being added weekly. Follow us for the latest announcements.</p>
      </div>
    </div>
  );
};

export default Shows;
