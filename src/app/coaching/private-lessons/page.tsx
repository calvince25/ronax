'use client';

import React from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Check, Clock, Users, MapPin, Calendar } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function PrivateLessons() {
  const { openBookingModal } = useBooking();
  const [program, setProgram] = React.useState<any>(null);
  const [prices, setPrices] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchProgram = async () => {
      const { data } = await supabase.from('programs').select('*').eq('slug', 'private-lessons').single();
      if (data) setProgram(data);
      
      const { data: priceData } = await supabase.from('prices').select('*').eq('category', 'Private Lessons').order('display_order', { ascending: true });
      if (priceData) setPrices(priceData);
    };
    fetchProgram();
  }, []);

  const title = program?.title || "Private 1-on-1 Tennis Lessons";
  const subtitle = program?.subtitle || "Personalized Performance";
  const leadDesc = program?.lead_description || "Elevate your game with dedicated attention from Coach Ronax. Private lessons are the fastest way to master technique and tactical awareness.";
  const mainDesc = program?.main_description || "In a private setting, every minute is focused on your specific needs. Whether you are correcting a serve, perfecting your backhand, or learning match strategy, 1-on-1 coaching provides the immediate feedback necessary for rapid improvement.";
  const imageUrl = program?.image_url || "https://images.unsplash.com/photo-1773081364166-74db8910af47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NzY3NTU3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <>
      <div className="relative w-full h-[50vh] min-h-[400px] bg-brand-black flex items-center">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-brand-dark/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-brand-dark/40"></div>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-8 md:px-12">
          <h1 className="text-white font-barlow text-[64px] md:text-[80px] font-bold uppercase tracking-tight leading-[0.95] mb-6">
            {title}
          </h1>
          <div className="w-12 h-1 bg-brand-green mb-8"></div>
          <p className="text-white/80 font-dm text-[16px] max-w-2xl font-light leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="py-24 pb-40 px-8 md:px-12 bg-brand-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-20">
            
            <div className="w-full lg:w-2/3">
              <p className="font-dm text-brand-black text-[20px] leading-relaxed mb-12 font-medium">
                {leadDesc}
              </p>
              
              <div className="prose max-w-none font-dm text-gray-500 text-[16px] leading-[1.8] font-light space-y-8">
                <p>{mainDesc}</p>
                
                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Key Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                   {[
                     { t: "Customized Drills", d: "Training sessions designed around your skill level and goals." },
                     { t: "Rapid Fixes", d: "Immediate correction of biomechanical errors." },
                     { t: "Tactical Mastery", d: "Learn how to read opponents and play high-percentage tennis." },
                     { t: "Flexible Scheduling", d: "Book sessions at times that suit your busy Nairobi lifestyle." }
                   ].map((b, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 bg-brand-green/10 text-brand-green flex items-center justify-center rounded-full shrink-0">
                           <Check size={20} />
                        </div>
                        <div>
                           <h4 className="font-barlow text-lg font-bold text-brand-black uppercase mb-1">{b.t}</h4>
                           <p className="text-sm font-light text-gray-500">{b.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              <div className="mt-20 p-10 bg-brand-dark rounded-sm text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="font-barlow text-3xl font-bold uppercase mb-8 tracking-wide">Investment In Your Game</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {prices.map((p, i) => (
                          <div key={i} className="flex flex-col border-l border-white/10 pl-6 py-2">
                             <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest mb-2">{p.name}</span>
                             <div className="font-barlow text-3xl font-bold mb-1">
                                <span className="text-sm font-normal opacity-60 mr-1">Ksh</span>
                                {p.price}
                             </div>
                             <span className="text-[11px] font-light text-white/50">{p.unit}</span>
                          </div>
                        ))}
                        {prices.length === 0 && [
                          { name: 'Single Session', price: '2,500', note: '1 Hour' },
                          { name: '5 Sessions', price: '11,500', note: 'Save 1,000' },
                          { name: '10 Sessions', price: '22,000', note: 'Best Value' }
                        ].map((p, i) => (
                          <div key={i} className="flex flex-col border-l border-white/10 pl-6 py-2">
                             <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest mb-2">{p.name}</span>
                             <div className="font-barlow text-3xl font-bold mb-1">
                                <span className="text-sm font-normal opacity-60 mr-1">Ksh</span>
                                {p.price}
                             </div>
                             <span className="text-[11px] font-light text-white/50">{p.note}</span>
                          </div>
                        ))}
                    </div>
                    <div className="mt-12 flex flex-col sm:flex-row gap-6">
                        <button 
                          onClick={() => openBookingModal('Private Lessons')}
                          className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[11px] tracking-[0.2em] px-8 py-4 rounded-full uppercase transition-all shadow-lg shadow-brand-green/20 text-center cursor-pointer"
                        >
                            Book Now
                        </button>
                        <Link href="/pricing" className="bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold text-[11px] tracking-[0.2em] px-8 py-4 rounded-full uppercase transition-all text-center">
                            Full Pricing List
                        </Link>
                    </div>
                </div>
                <div className="absolute right-[-5%] bottom-[-20%] opacity-[0.03] rotate-[-15deg]">
                    <Clock size={300} />
                </div>
              </div>
            </div>

            <aside className="w-full lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm">
                    <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-8 text-brand-black">Quick Details</h4>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4">
                            <Clock size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Duration</span>
                                <span className="text-[14px] font-medium">60 / 90 Minutes</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <Users size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Intimacy</span>
                                <span className="text-[14px] font-medium">1-on-1 Coaching</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <MapPin size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Locations</span>
                                <span className="text-[14px] font-medium">Riverside, Karen, Westlands</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <Calendar size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Availability</span>
                                <span className="text-[14px] font-medium">Daily by Appointment</span>
                            </div>
                        </li>
                    </ul>
                  </div>

                  <div className="bg-brand-green p-8 rounded-sm text-brand-dark">
                      <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-4">First Session?</h4>
                      <p className="font-dm text-sm font-medium mb-6 leading-relaxed">
                          New students can book a 60-minute technical assessment for a special rate of Ksh 1,500.
                      </p>
                      <button 
                        onClick={() => openBookingModal('Private Lessons')}
                        className="inline-block bg-brand-dark text-white font-bold text-[10px] tracking-[0.2em] px-6 py-3 rounded-full uppercase hover:bg-black transition-colors cursor-pointer"
                      >
                          Book Now
                      </button>
                  </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
