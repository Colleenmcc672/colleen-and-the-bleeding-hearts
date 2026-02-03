import React, { useState, useEffect } from 'react';
import { VIDEOS } from '../constants';

const Media: React.FC = () => {
  const [featuredVideo, setFeaturedVideo] = useState(VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  // Reset play state when changing videos
  useEffect(() => {
    setIsPlaying(false);
  }, [featuredVideo]);

  // Robust YouTube ID extraction
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getThumbnail = (url: string) => {
    const id = getYouTubeId(url);
    // hqdefault is much more reliable than maxresdefault for user-uploaded live clips
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '';
  };

  return (
    <div className="container mx-auto px-6">
      <div className="mb-8">
        <h2 className="font-rock text-5xl md:text-6xl text-white mb-4 text-center uppercase">THE <span className="text-neon-red">EXPERIENCE</span></h2>
        <p className="text-white/60 text-center font-rock tracking-widest uppercase mb-12">Live in the GTA</p>
        
        {/* Featured Video Player Container */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-neon-red px-6 py-3 inline-block shadow-[0_0_20px_rgba(255,0,60,0.3)] mb-0 relative z-10">
            <h3 className="font-rock text-2xl text-white tracking-widest uppercase">
              LIVE @ {featuredVideo.venue} {featuredVideo.year}
            </h3>
          </div>
          
          <div className="relative aspect-video border-4 border-white/10 bg-black shadow-[0_40px_100px_rgba(0,0,0,0.9)] overflow-hidden group">
            {!isPlaying ? (
              <div 
                className="absolute inset-0 w-full h-full cursor-pointer overflow-hidden"
                onClick={() => setIsPlaying(true)}
              >
                {/* Thumbnail with Grayscale to Color Transition */}
                <img 
                  src={getThumbnail(featuredVideo.directUrl)} 
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:border-neon-red group-hover:bg-neon-red transition-all duration-300 shadow-2xl">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="mt-6 font-rock text-xl md:text-2xl text-white tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">CLICK TO PLAY</p>
                </div>

                {/* Edgy Texture Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
              </div>
            ) : (
              <iframe 
                className="absolute inset-0 w-full h-full"
                src={`${featuredVideo.embedUrl}?autoplay=1&rel=0&modestbranding=1`} 
                title={`Colleen & The Bleeding Hearts - ${featuredVideo.title} Live`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                frameBorder="0"
              ></iframe>
            )}
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="flex-grow">
              <div className="flex items-center gap-4 mb-2">
                <span className="h-px w-8 bg-neon-red"></span>
                <p className="text-neon-red font-bold uppercase text-xs tracking-[0.5em]">{featuredVideo.venue.toUpperCase()} • {featuredVideo.year}</p>
              </div>
              <h4 className="font-rock text-4xl text-white tracking-wider uppercase mb-2">{featuredVideo.title} (Live)</h4>
              <p className="text-white/50 max-w-xl leading-relaxed italic mb-6">
                {featuredVideo.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                    href={featuredVideo.directUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-neon-red text-white font-rock text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-[0_5px_15px_rgba(255,0,60,0.3)]"
                >
                    <span>OPEN ON YOUTUBE</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                </a>
                <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-white/60 font-rock text-sm tracking-widest hover:border-white hover:text-white transition-all duration-300"
                >
                    {isPlaying ? 'SHOW POSTER' : 'RELOAD PLAYER'}
                </button>
              </div>
            </div>

            {/* Video Selector / Mini-Gallery */}
            <div className="w-full md:w-80 flex flex-col gap-3">
              <p className="font-rock text-white/40 tracking-[0.3em] uppercase text-xs mb-2">Live Archives</p>
              {VIDEOS.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setFeaturedVideo(video)}
                  className={`group text-left p-3 border transition-all duration-300 flex gap-4 items-center ${
                    featuredVideo.id === video.id 
                    ? 'bg-neon-red border-neon-red shadow-[0_0_20px_rgba(255,0,60,0.2)]' 
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="w-20 h-12 bg-black flex-shrink-0 overflow-hidden border border-white/10">
                    <img 
                        src={getThumbnail(video.directUrl)} 
                        className={`w-full h-full object-cover transition-opacity duration-500 ${featuredVideo.id === video.id ? 'opacity-100 scale-110' : 'opacity-40 group-hover:opacity-100'}`} 
                        alt="" 
                    />
                  </div>
                  <div className="overflow-hidden">
                    <p className={`font-rock tracking-widest text-lg leading-none mb-1 truncate ${featuredVideo.id === video.id ? 'text-white' : 'text-neon-red'}`}>
                        {video.title}
                    </p>
                    <p className={`text-[9px] font-bold uppercase tracking-widest truncate ${featuredVideo.id === video.id ? 'text-white/70' : 'text-white/30'}`}>
                        {video.venue}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
