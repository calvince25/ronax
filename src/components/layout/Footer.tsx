import React from 'react';
import Link from 'next/link';

const RacketIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-current">
    <ellipse cx="8" cy="8" rx="5" ry="7" transform="rotate(-45 8 8)" />
    <path d="M11.5 11.5L21 21" />
    <path d="M19 21L21 19" />
    <path d="M5 8L11 8" />
    <path d="M8 5L8 11" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12 px-8 md:px-12 mt-auto">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-8 text-brand-green">
            <RacketIcon />
            <span className="font-dm font-normal tracking-[0.2em] text-sm uppercase mt-0.5 text-white">Revolutionary</span>
          </div>
          <p className="text-gray-400 text-[14px] leading-relaxed mb-8 font-light max-w-[300px]">
            Nairobi's premium tennis club and coaching hub. Train with the best and elevate your game on our beautiful courts.
          </p>
          <div className="flex gap-4">
             {/* Social placeholders could go here */}
          </div>
        </div>

        <div>
          <h4 className="font-barlow text-lg font-bold uppercase tracking-[0.1em] mb-8 text-white">Programs</h4>
          <ul className="space-y-4 text-gray-400 text-[13px] font-light uppercase tracking-wider">
            <li><Link href="/coaching" className="hover:text-brand-green transition-colors">Private Lessons</Link></li>
            <li><Link href="/coaching" className="hover:text-brand-green transition-colors">Group Classes</Link></li>
            <li><Link href="/coaching" className="hover:text-brand-green transition-colors">Junior Tennis</Link></li>
            <li><Link href="/coaching" className="hover:text-brand-green transition-colors">Adult Beginners</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-barlow text-lg font-bold uppercase tracking-[0.1em] mb-8 text-white">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-[13px] font-light uppercase tracking-wider">
            <li><Link href="/about/coach-ronax" className="hover:text-brand-green transition-colors">About Coach Ronax</Link></li>
            <li><Link href="/gallery" className="hover:text-brand-green transition-colors">Gallery</Link></li>
            <li><Link href="/blog" className="hover:text-brand-green transition-colors">Latest Blogs</Link></li>
            <li><Link href="/locations" className="hover:text-brand-green transition-colors">Our Locations</Link></li>
            <li><Link href="/pricing" className="hover:text-brand-green transition-colors">Pricing & Plans</Link></li>
            <li><Link href="/contact" className="hover:text-brand-green transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-barlow text-lg font-bold uppercase tracking-[0.1em] mb-8 text-white">Contact Us</h4>
          <ul className="space-y-4 text-gray-400 text-[13px] font-light leading-relaxed">
            <li className="flex flex-col gap-1">
                <span className="text-white font-medium uppercase text-[10px] tracking-widest opacity-50">Location</span>
                Nairobi, Kenya
            </li>
            <li className="flex flex-col gap-1">
                <span className="text-white font-medium uppercase text-[10px] tracking-widest opacity-50">Phone / WhatsApp</span>
                <a href="https://wa.me/254799756831" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">+254 799 756 831</a>
            </li>
            <li className="flex flex-col gap-1">
                <span className="text-white font-medium uppercase text-[10px] tracking-widest opacity-50">Email</span>
                <a href="mailto:info@revolutionarytennis.co.ke" className="hover:text-brand-green transition-colors text-sm">info@revolutionarytennis.co.ke</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-[10px] tracking-[0.2em] font-medium uppercase">
          © {new Date().getFullYear()} Revolutionary Tennis. All rights reserved.
        </div>
        <div className="text-gray-500 text-[10px] tracking-[0.2em] font-medium uppercase">
          Designed by <a href="https://growthlab.co.ke" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:text-white transition-colors">growthlab.co.ke</a>
        </div>
        <div className="flex gap-8 text-gray-500 text-[10px] tracking-[0.2em] font-medium uppercase">
             <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
