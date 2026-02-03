import React from 'react';
import { BIO_IMAGE_URL } from '../constants';

const Bio: React.FC = () => {
  const members = [
    { name: "Colleen McCullough", role: "Lead Vocals & Percussion" },
    { name: "Kevin Bell", role: "Lead Guitar & Vocals" },
    { name: "Tommy Groome", role: "Rhythm Guitar" },
    { name: "Mike Witzenhausen", role: "Bass & Vocals" },
    { name: "Kevin Komatsu", role: "Drums & Vocals" }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        {/* Left Side: Image sticky container */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-neon-red z-0 opacity-20 group-hover:opacity-40 transition-opacity"></div>
            {/* The Crowd Shot in the square box */}
            <img 
              src={BIO_IMAGE_URL} 
              alt="Colleen & The Bleeding Hearts Live" 
              className="relative z-10 w-full grayscale contrast-125 border border-white/10 shadow-2xl transition-all duration-500 group-hover:grayscale-0"
            />
            <div className="absolute bottom-4 right-4 font-rock text-6xl text-white/10 select-none pointer-events-none z-20">
              EST. 2010
            </div>
          </div>
        </div>
        
        {/* Right Side: The Narrative */}
        <div className="w-full lg:w-1/2">
          <h2 className="font-rock text-5xl md:text-7xl text-white mb-8">THE <span className="text-neon-red">STORY</span></h2>
          
          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <p>
              <span className="text-white font-bold">Colleen & The Bleeding Hearts</span> are a five-piece rock ’n’ roll cover band from Toronto, Canada, delivering a high-energy live experience to audiences across the <span className="text-white">GTA and surrounding areas</span>. Formed in the heart of Toronto’s local music scene in <span className="text-neon-red font-bold">2010</span>, the band has been entertaining crowds for over a decade with passion, attitude, and a deep respect for the songs that defined generations.
            </p>
            
            <p>
              Fronted by a powerhouse female lead vocalist, the band is made up of seasoned musicians and vocalists whose sound blends hard-hitting grooves, tight arrangements, and rich vocal harmonies. Their setlist pulls from anthems by <span className="text-white font-semibold">Janis Joplin, The Rolling Stones, Joan Jett, Tom Petty, Led Zeppelin, The Black Crowes, The Cult, Neil Young, Jimmy Eat World, The Pretenders</span>, and more—songs that get people singing along and moving from the first note to the last.
            </p>
            
            <div className="relative py-8 px-8 bg-white/5 border-l-4 border-neon-red my-10 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 font-rock text-9xl">"</div>
                <p className="italic text-white font-medium relative z-10 text-xl md:text-2xl leading-relaxed">
                  "We grew up on rock ’n’ roll that made you feel something — songs you sang at the top of your lungs and felt in your bones."
                </p>
            </div>

            <div className="bg-black/40 border border-white/10 p-8 my-10">
                <h3 className="font-rock text-3xl text-neon-red mb-6 tracking-widest uppercase border-b border-neon-red/20 pb-2">THE LINEUP</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {members.map((member, idx) => (
                        <div key={idx} className="flex flex-col group">
                            <span className="font-rock text-xl text-white tracking-wide group-hover:text-neon-red transition-colors">{member.name}</span>
                            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">{member.role}</span>
                        </div>
                    ))}
                </div>
            </div>

            <p>
              Colleen & The Bleeding Hearts genuinely love playing together, and it shows on stage. With a tight, high-octane sound and undeniable chemistry, they focus on creating fun, engaging nights where the crowd is part of the show. Their constantly refreshed setlist and dynamic performances keep the energy high and the vibe alive from start to finish.
            </p>

            <p>
              Available for bar and club bookings, private and corporate events, and outdoor festivals throughout the GTA and Ontario.
            </p>
            
            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="font-rock text-2xl text-white italic tracking-wide">
                Our mission is simple: <span className="text-neon-red">keep it raw</span>, keep the energy high, and leave the crowd bleeding for more.
              </p>
            </div>

            <div className="pt-8 flex flex-wrap gap-3">
              {['Bars & Clubs', 'Private Events', 'Outdoor Festivals', 'Corporate Bookings'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-neon-red/10 border border-neon-red/30 text-[10px] font-rock tracking-[0.2em] uppercase text-neon-red">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
