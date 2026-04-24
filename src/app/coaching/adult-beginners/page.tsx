'use client';

export const dynamic = 'force-dynamic';

import React from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Check, Target, Zap, Clock, HelpCircle } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function AdultBeginners() {
  const { openBookingModal } = useBooking();
  const [program, setProgram] = React.useState<any>(null);
  const [prices, setPrices] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchProgram = async () => {
      const { data } = await supabase.from('programs').select('*').eq('slug', 'adult-beginners').single();
      if (data) setProgram(data);

      const { data: priceData } = await supabase.from('prices').select('*').eq('category', 'Adult Beginners').order('display_order', { ascending: true });
      if (priceData) setPrices(priceData);
    };
    fetchProgram();
  }, []);

  const title = program?.title || "Adult Beginners";
  const subtitle = program?.subtitle || "Start Your Tennis Journey Today";
  const leadDesc = program?.lead_description || "It is never too late to pick up a racket. Our Adult Beginner program is designed to take you from zero to rally in record time.";
  const mainDesc = program?.main_description || "We understand that starting a new sport as an adult can be intimidating. That is why Coach Ronax uses a simplified, mechanics-first approach. We focus on the most important fundamentals: contact point, balance, and follow-through.";
  const imageUrl = program?.image_url || "/images/locations_coaching/coaching_hero.jpg";

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
                
                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Program Focus</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                   {[
                     { t: "Technical Foundations", d: "Master the 3 core shots: Serve, Forehand, and Backhand." },
                     { t: "Cardio & Fitness", d: "Get a full-body workout while learning a lifelong skill." },
                     { t: "Flexible Hours", d: "Weekend and evening slots available for busy professionals." },
                     { t: "Equipment Provided", d: "Don't have a racket? We provide premium options for beginners." }
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
                        {prices.length === 0 && (
                          <div className="col-span-full text-white/50 font-dm italic text-sm">
                            Custom pricing available. Contact Coach Ronax for details.
                          </div>
                        )}
                    </div>
                    <div className="mt-12 flex flex-col sm:flex-row gap-6">
                        <button 
                          onClick={() => openBookingModal('Adult Beginners')}
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
                    <Target size={300} />
                </div>
              </div>

              <div className="mt-12 p-10 bg-brand-green rounded-sm text-brand-dark relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                   <div className="max-w-md">
                      <h3 className="font-barlow text-3xl font-bold uppercase mb-4 tracking-wide text-white">First Step On Court?</h3>
                      <p className="font-dm text-sm font-medium mb-0 opacity-80">
                         Book a special 1-hour assessment for beginners at only Ksh 1,500. We'll help you find your rhythm.
                      </p>
                   </div>
                   <button 
                     onClick={() => openBookingModal('Adult Beginners')}
                     className="bg-brand-dark hover:bg-black text-white font-bold text-[11px] tracking-[0.2em] px-10 py-5 rounded-full uppercase transition-all shadow-xl shrink-0 cursor-pointer"
                   >
                      Book Now
                   </button>
                </div>
              </div>
            </div>

            <aside className="w-full lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm">
                    <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-8 text-brand-black flex items-center gap-2">
                        <HelpCircle size={20} className="text-brand-green" />
                        <span>Beginner FAQ</span>
                    </h4>
                    <ul className="space-y-8">
                        <li className="flex flex-col gap-2">
                            <span className="text-[12px] font-bold text-brand-black uppercase tracking-widest">Do I need my own racket?</span>
                            <span className="text-[14px] font-light text-gray-500 leading-relaxed">No, we provide premium rackets for rent or sale during your initial lessons.</span>
                        </li>
                        <li className="flex flex-col gap-2">
                            <span className="text-[12px] font-bold text-brand-black uppercase tracking-widest">What should I wear?</span>
                            <span className="text-[14px] font-light text-gray-500 leading-relaxed">Comfortable athletic wear and non-marking tennis shoes (no running shoes with aggressive treads).</span>
                        </li>
                        <li className="flex flex-col gap-2">
                            <span className="text-[12px] font-bold text-brand-black uppercase tracking-widest">Am I too old?</span>
                            <span className="text-[14px] font-light text-gray-500 leading-relaxed">Never! We have students starting in their 40s, 50s, and beyond.</span>
                        </li>
                    </ul>
                  </div>

                  <div className="bg-brand-dark p-8 rounded-sm text-white relative overflow-hidden">
                      <div className="relative z-10">
                        <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-4">Availability</h4>
                        <ul className="space-y-4 text-xs font-light text-white/70 tracking-widest">
                            <li className="flex justify-between"><span>MORNINGS:</span> <span>6AM - 9AM</span></li>
                            <li className="flex justify-between"><span>EVENINGS:</span> <span>6PM - 8PM</span></li>
                            <li className="flex justify-between"><span>WEEKENDS:</span> <span>ALL DAY</span></li>
                        </ul>
                      </div>
                      <div className="absolute right-[-10%] bottom-[-10%] opacity-[0.05] rotate-[-15deg]">
                         <Clock size={150} />
                      </div>
                  </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
