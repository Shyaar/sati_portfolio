import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0C0D12]/80 backdrop-blur-xl border-b border-[#1E2030]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            SHYAAR
          </span>
          <span className="w-0.5 h-4 bg-[#00E5FF] animate-pulse"></span>
        </div>

        <div className="hidden md:flex items-center gap-8" style={{ fontFamily: 'var(--font-body)' }}>
          <a href="#work" className="text-[#ECEEF4] hover:text-[#00E5FF] transition-colors">
            Work
          </a>
          <a href="#about" className="text-[#ECEEF4] hover:text-[#00FFA3] transition-colors">
            About
          </a>
          <a href="#stack" className="text-[#ECEEF4] hover:text-[#9D7BFF] transition-colors">
            Stack
          </a>
          <a href="#contact" className="text-[#ECEEF4] hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF]"></span>
            <span className="w-2 h-2 rounded-full bg-[#00FFA3]"></span>
            <span className="w-2 h-2 rounded-full bg-[#9D7BFF]"></span>
          </div>
          <span className="text-sm text-[#ECEEF4] ml-2">Available</span>
        </div>
      </div>
    </nav>
  );
}
