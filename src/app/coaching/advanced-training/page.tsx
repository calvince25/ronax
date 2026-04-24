'use client';

export const dynamic = 'force-dynamic';

import React from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Check, ShieldCheck, Trophy, Target, PlayCircle } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function AdvancedTraining() {
  const { openBookingModal } = useBooking();
  const [program, setProgram] = React.useState<any>(null);
  const [prices, setPrices] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchProgram = async () => {
      const { data } = await supabase.from('programs').select('*').eq('slug', 'advanced-training').single();
      if (data) setProgram(data);

      const { data: priceData } = await supabase.from('prices').select('*').eq('category', 'Advanced Training').order('display_order', { ascending: true });
      if (priceData) setPrices(priceData);
    };
    fetchProgram();
  }, []);

  const title = program?.title || "Advanced & Competitive";
  const subtitle = program?.subtitle || "Precision. Power. Performance.";
  const leadDesc = program?.lead_description || "For tournament players and high-level recreational athletes. Experience the intensity of professional-grade training.";
  const mainDesc = program?.main_description || "Advanced training moves beyond basic technique and dives into tactical patterns, mental resilience, and physical conditioning. Coach Ronax uses video analysis to identify micro-flaws in strokes and match-play strategy to give you a competitive edge in Nairobi's tennis circuits.";
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
            Elite <span className="text-brand-green">Performance</span>
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
                
                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Performance Modules</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                   {[
                     { t: "Tactical Patterns", d: "Learning high-percentage tennis and court positioning.", icon: <Target size={22} /> },
                     { t: "Match Simulation", d: "Drills that mimic high-pressure tournament situations.", icon: <Trophy size={22} /> },
                     { t: "Biomechanical Efficiency", d: "Optimizing power while minimizing injury risk.", icon: <ShieldCheck size={22} /> },
                     { t: "Video Analysis", d: "On-court recording and frame-by-frame technical breakdown.", icon: <PlayCircle size={22} /> }
                   ].map((b, i) => (
                     <div key={i} className="flex gap-4 p-8 bg-brand-dark text-white rounded-sm group hover:bg-brand-green transition-colors duration-500">
                        <div className="text-brand-green group-hover:text-brand-dark transition-colors duration-500">
                           {b.icon}
                        </div>
                        <div>
                           <h4 className="font-barlow text-lg font-bold uppercase mb-1 tracking-wider">{b.t}</h4>
                           <p className="text-xs font-light text-white/60 leading-relaxed group-hover:text-brand-dark/80 transition-colors duration-500">{b.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              <div className="mt-20 p-10 bg-brand-dark rounded-sm text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="font-barlow text-3xl font-bold uppercase mb-8 tracking-wide text-brand-green">Investment In Your Game</h3>
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
                            Tournament packages and squad rates available on request.
                          </div>
                        )}
                    </div>
                    <div className="mt-12 flex flex-col sm:flex-row gap-6">
                        <button 
                          onClick={() => openBookingModal('Advanced Training')}
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
                    <Trophy size={300} />
                </div>
              </div>

              <div className="mt-12 p-12 bg-gray-50 border border-gray-100 rounded-sm relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                   <div className="max-w-md">
                      <h3 className="font-barlow text-3xl font-bold uppercase mb-4 tracking-wide text-brand-black">Tournament Preparation</h3>
                      <p className="font-dm text-sm text-gray-500 font-light mb-0 leading-relaxed">
                         Intensive squads specifically for players entering local KTF tournaments or seeking college recruitment.
                      </p>
                   </div>
                   <button 
                     onClick={() => openBookingModal('Advanced Training')}
                     className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[11px] tracking-[0.2em] px-10 py-5 rounded-full uppercase transition-all shadow-lg shadow-brand-green/20 shrink-0 cursor-pointer"
                   >
                      Book Now
                   </button>
                </div>
              </div>
            </div>

            <aside className="w-full lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                  <div className="bg-brand-dark text-white p-8 rounded-sm">
                    <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-8 text-brand-green">Entry Standards</h4>
                    <p className="font-dm text-sm font-light mb-8 opacity-80 leading-relaxed">
                        Candidates MUST undergo a mandatory 30-minute technical assessment to join the Advanced Squad. No exceptions are made to ensure squad quality.
                    </p>
                    <div className="space-y-4 pt-8 border-t border-white/10">
                        <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
                            <span>Consistency Required</span>
                            <span className="text-brand-green">80%+</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 overflow-hidden">
                            <div className="w-[85%] h-full bg-brand-green"></div>
                        </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm">
                      <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-4">Location</h4>
                      <p className="font-dm text-[14px] text-gray-600 font-medium mb-6">
                          Advanced training takes place primarily at our Westlands and Nairobi Club circuits.
                      </p>
                      <Link href="/locations" className="text-brand-green font-bold text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 hover:translate-x-2 transition-transform">
                          <span>View Locations</span>
                          <div className="w-8 h-[1px] bg-current"></div>
                      </Link>
                  </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
