import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Booking Inquiry',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
        setSent(false);
        setFormData({ name: '', email: '', subject: 'Booking Inquiry', message: '' });
    }, 5000);
  };

  const socials = [
    { label: 'FB', url: SOCIAL_LINKS.facebook },
    { label: 'IG', url: SOCIAL_LINKS.instagram },
    { label: 'YT', url: SOCIAL_LINKS.youtube },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <h2 className="font-rock text-6xl text-white mb-6">GET IN <span className="text-neon-red">TOUCH</span></h2>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            Ready to ignite your venue with rock n roll energy? For bookings, press inquiries, or just to say hello, drop us a line.
          </p>
          
          <div className="space-y-6">
            <div>
                <p className="font-rock text-neon-red text-xl mb-1 uppercase">General Inquiries</p>
                <p className="text-white text-lg break-all">colleenandthebleedinghearts@gmail.com</p>
            </div>
            <div>
                <p className="font-rock text-neon-red text-xl mb-1 uppercase">Booking Inquiries</p>
                <p className="text-white text-lg break-all">colleenandthebleedinghearts@gmail.com</p>
            </div>
          </div>

          <div className="mt-12 flex space-x-6">
            {socials.map(social => (
                <a 
                    key={social.label} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center font-rock text-white hover:border-neon-red hover:text-neon-red transition-all"
                >
                    {social.label}
                </a>
            ))}
          </div>
        </div>

        <div className="lg:w-2/3">
          {sent ? (
            <div className="h-full flex items-center justify-center p-12 border-2 border-neon-red bg-neon-red/5">
                <div className="text-center">
                    <h3 className="font-rock text-5xl text-white mb-4">MESSAGE DELIVERED</h3>
                    <p className="text-white/70 italic">We'll get back to you faster than a drum fill.</p>
                </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-rock text-white tracking-widest text-sm ml-1">YOUR NAME</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-neon-red focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-rock text-white tracking-widest text-sm ml-1">YOUR EMAIL</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-neon-red focus:outline-none transition-colors"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="font-rock text-white tracking-widest text-sm ml-1">SUBJECT</label>
                <select 
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-neon-red focus:outline-none transition-colors appearance-none"
                >
                  <option className="bg-neutral-900" value="Booking Inquiry">Booking Inquiry</option>
                  <option className="bg-neutral-900" value="Press/Media">Press/Media</option>
                  <option className="bg-neutral-900" value="Fan Love">Fan Love</option>
                  <option className="bg-neutral-900" value="Other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="font-rock text-white tracking-widest text-sm ml-1">YOUR MESSAGE</label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-neon-red focus:outline-none transition-colors"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit"
                  className="w-full py-4 border-2 border-neon-red text-neon-red font-rock text-2xl tracking-[0.3em] hover:bg-neon-red hover:text-white transition-all duration-300"
                >
                  SEND TRANSMISSION
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
