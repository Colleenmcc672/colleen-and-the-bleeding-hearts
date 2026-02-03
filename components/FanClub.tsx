
import React, { useState } from 'react';

const FanClub: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setPhone('');
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <div className="mb-10">
        <h2 className="font-rock text-5xl md:text-7xl text-white mb-4">JOIN THE <span className="text-neon-red">BLEEDING</span> CLUB</h2>
        <p className="text-xl text-white/70 italic">Be the first to know of our upcoming gigs, exclusive merch drops and more!</p>
      </div>

      {status === 'success' ? (
        <div className="p-10 border-2 border-dashed border-neon-red bg-black/40 animate-in fade-in zoom-in duration-500">
          <h3 className="font-rock text-4xl text-neon-red mb-2">YOU'RE IN THE SQUAD!</h3>
          <p className="text-white/80">Check your inbox. We'll be in touch before the next riot.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-6 text-sm underline opacity-50 hover:opacity-100"
          >
            Add another?
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              required
              placeholder="YOUR EMAIL ADRESS" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white/5 border-2 border-white/10 px-6 py-4 font-rock text-xl tracking-widest text-white focus:border-neon-red focus:outline-none transition-colors"
            />
            <input 
              type="tel" 
              placeholder="PHONE (OPTIONAL)" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="md:w-1/3 bg-white/5 border-2 border-white/10 px-6 py-4 font-rock text-xl tracking-widest text-white focus:border-neon-red focus:outline-none transition-colors"
            />
          </div>
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 bg-neon-red text-white font-rock text-3xl tracking-[0.2em] btn-hover transition-all disabled:opacity-50"
          >
            {status === 'loading' ? 'TRANSMITTING...' : 'I WANT IN'}
          </button>
          <p className="text-xs text-white/30 uppercase tracking-widest">NO SPAM. JUST ROCK N ROLL. OPT OUT ANYTIME.</p>
        </form>
      )}
    </div>
  );
};

export default FanClub;
