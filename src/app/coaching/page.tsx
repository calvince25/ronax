'use client';

import React from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import { useBooking } from '@/context/BookingContext';

export default function CoachingHub() {
  const { openBookingModal } = useBooking();
  const categories = [
    {
      title: 'Private Lessons',
      description: 'Personalized 1-on-1 coaching to accelerate your technical and tactical development. Available for adults and kids.',
      image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1200',
      link: '/coaching/private-lessons'
    },
    {
      title: 'Group Classes',
      description: 'Social and competitive drills for all levels (minimum 3 players). Learn in a dynamic group environment.',
      image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?q=80&w=1200',
      link: '/coaching/group-classes'
    },
    {
      title: '10 Session Pack',
      description: 'Commit to your game with our bulk session packages. Ideal for players looking for consistent weekly training.',
      image: 'https://images.unsplash.com/photo-1592709823125-a191f07a2a5e?q=80&w=1200',
      link: '/coaching/ten-session-pack'
    },
    {
      title: 'After School Program',
      description: 'Structured youth development for ages 4-16. Sessions on Mon, Wed, and Fri to build future champions.',
      image: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?q=80&w=1200',
      link: '/coaching/junior-tennis'
    }
  ];

  return (
    <>
      <PageHero 
        title="Tennis Coaching Programs"
        subtitle="Professional Training"
        description="From your very first rally to tournament-level performance. Find the perfect program to elevate your game on court."
        imageSrc="https://images.unsplash.com/photo-1773081364166-74db8910af47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NzY3NTU3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      <div className="py-32 px-8 md:px-12 bg-brand-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {categories.map((item, index) => (
              <div key={index} className="flex flex-col group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden mb-8 rounded-sm">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-500"></div>
                </div>
                <h3 className="font-barlow text-3xl font-bold uppercase tracking-wide text-brand-black mb-4 group-hover:text-brand-green transition-colors">
                  {item.title}
                </h3>
                <p className="font-dm text-gray-500 text-[14px] leading-relaxed mb-8 flex-grow font-light">
                  {item.description}
                </p>
                <Link href={item.link} className="flex items-center gap-3 font-dm font-bold text-[11px] tracking-[0.2em] uppercase text-brand-black hover:text-brand-green transition-colors">
                  <span>View Program Details</span>
                  <div className="w-8 h-[1px] bg-current"></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-brand-dark py-24 px-8 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-white font-barlow text-[48px] font-bold uppercase mb-8 leading-[1.1]">
            Not sure which <span className="text-brand-green">program is right</span> for you?
          </h2>
          <p className="text-white/70 font-dm text-lg mb-12 font-light">
            Book a complimentary 20-minute assessment with Coach Ronax to evaluate your skill level.
          </p>
          <button 
            onClick={() => openBookingModal()}
            className="inline-block bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[12px] tracking-[0.15em] px-10 py-5 rounded-full uppercase transition-all shadow-lg shadow-brand-green/20 cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </section>
    </>
  );
}
