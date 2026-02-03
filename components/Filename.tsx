
import React from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'BIO', id: 'bio' },
    { label: 'GIGS', id: 'shows' },
    { label: 'MEDIA', id: 'media' },
    { label: 'FAN CLUB', id: 'fanclub' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-5 flex items-center justify-center">
        <nav>
          <ul className="flex flex-wrap justify-center gap-x-8 md:gap-x-12 font-rock tracking-[0.2em] text-lg">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`transition-all duration-300 whitespace-nowrap uppercase ${
                    activeSection === item.id 
                    ? 'text-neon-red drop-shadow-[0_0_10px_rgba(255,0,60,0.6)] scale-110' 
                    : 'text-white/60 hover:text-white hover:scale-105'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
