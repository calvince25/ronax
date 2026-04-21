'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import { useBooking } from '@/context/BookingContext';

const RacketIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-current">
    <ellipse cx="8" cy="8" rx="5" ry="7" transform="rotate(-45 8 8)" />
    <path d="M11.5 11.5L21 21" />
    <path d="M19 21L21 19" />
    <path d="M5 8L11 8" />
    <path d="M8 5L8 11" />
  </svg>
);

const Navbar = () => {
  const pathname = usePathname();
  const { openBookingModal } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', path: '/about/coach-ronax' },
    { name: 'COACHING', path: '/coaching' },
    { name: 'LOCATIONS', path: '/locations' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'BLOG', path: '/blog' },
    { name: 'PRICING', path: '/pricing' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-8 md:px-12 py-6 flex items-center justify-between ${
        isScrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent'
      }`}
    >
      <Link href="/" className="flex items-center gap-3 text-white group" onClick={() => setMobileMenuOpen(false)}>
        <RacketIcon />
        <span className="font-dm font-normal tracking-[0.2em] text-sm uppercase mt-0.5 group-hover:text-brand-green transition-colors">Revolutionary</span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((item) => (
          <Link 
            key={item.name} 
            href={item.path} 
            className={`text-[11px] tracking-[0.15em] transition-colors uppercase font-medium ${
              pathname === item.path ? 'text-brand-green' : 'text-white hover:text-brand-green'
            }`}
          >
            {item.name}
          </Link>
        ))}
        <button 
          onClick={() => openBookingModal()}
          className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[10px] tracking-[0.15em] px-6 py-2.5 rounded-full uppercase transition-all shadow-lg shadow-brand-green/20 hover:-translate-y-0.5 cursor-pointer"
        >
          Book Now
        </button>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-brand-dark z-[110] flex flex-col items-center justify-center gap-10 p-8">
          <button 
            className="absolute top-8 right-8 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          
          <div className="flex flex-col items-center gap-6 overflow-y-auto max-h-[70vh] py-4">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.path} 
                className={`text-2xl tracking-[0.2em] transition-colors uppercase font-bold ${
                  pathname === item.path ? 'text-brand-green' : 'text-white hover:text-brand-green'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              openBookingModal();
            }}
            className="bg-brand-green text-white font-bold text-[14px] tracking-[0.15em] px-10 py-4 rounded-full uppercase mt-4 cursor-pointer"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
    </nav>
  );
};

export default Navbar;
