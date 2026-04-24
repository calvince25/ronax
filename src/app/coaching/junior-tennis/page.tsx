'use client';

import React from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Check, Trophy, Smile, Shield, Star } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function JuniorTennis() {
  const { openBookingModal } = useBooking();
  const [program, setProgram] = React.useState<any>(null);
  const [prices, setPrices] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchProgram = async () => {
      const { data } = await supabase.from('programs').select('*').eq('slug', 'junior-tennis').single();
      if (data) setProgram(data);

      const { data: priceData } = await supabase.from('prices').select('*').eq('category', 'After School Program').order('display_order', { ascending: true });
      if (priceData) setPrices(priceData);
    };
    fetchProgram();
  }, []);

  const title = program?.title || "Junior Tennis Programs";
  const subtitle = program?.subtitle || "Building the Next Generation";
  const leadDesc = program?.lead_description || "Instilling a love for the game in young athletes. Our junior programs focus on hand-eye coordination, basic technique, and sportsmanship.";
  const mainDesc = program?.main_description || "Under Coach Ronax, juniors follow a structured development pathway. We use the 'Red, Orange, Green' ball progression system to ensure students learn at a pace that matches their physical and technical growth.";
  const imageUrl = program?.image_url || "https://images.unsplash.com/photo-1627341398579-2d128de1dc8c?q=80&w=1080";

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
                
                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Development Pillars</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                   {[
                     { t: "Fun First", d: "Engaging games that keep children excited about exercise.", icon: <Smile size={24} /> },
                     { t: "Technical Discipline", d: "Learning the biomechanics of a champion from day one.", icon: <Star size={24} /> },
                     { t: "Mental Stamina", d: "Developing focus and resilience on the court.", icon: <Trophy size={24} /> },
                     { t: "Safety First", d: "A secure environment with professional supervision.", icon: <Shield size={24} /> }
                   ].map((b, i) => (
                     <div key={i} className="flex gap-4 p-6 bg-gray-50 rounded-sm border border-gray-100 group hover:border-brand-green transition-colors">
                        <div className="w-12 h-12 bg-white text-brand-green flex items-center justify-center rounded-full shrink-0 shadow-sm transition-transform group-hover:scale-110">
                           {b.icon}
                        </div>
                        <div>
                           <h4 className="font-barlow text-lg font-bold text-brand-black uppercase mb-1">{b.t}</h4>
                           <p className="text-xs font-light text-gray-500 leading-relaxed">{b.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              <div className="mt-20 p-10 bg-brand-dark rounded-sm text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="font-barlow text-3xl font-bold uppercase mb-8 tracking-wide">Investment In Their Future</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col border-l border-white/10 pl-6 py-2">
                             <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest mb-2">After School Program (4-16 years)</span>
                             <div className="font-barlow text-3xl font-bold mb-1">
                                <span className="text-sm font-normal opacity-60 mr-1">Ksh</span>
                                10,200
                             </div>
                             <span className="text-[11px] font-light text-white/50">Monthly (Mon, Wed, Fri sessions)</span>
                          </div>
                    </div>
                    <div className="mt-12">
                        <button 
                          onClick={() => openBookingModal('Junior Program')}
                          className="inline-block bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[11px] tracking-[0.2em] px-10 py-4 rounded-full uppercase transition-all shadow-lg shadow-brand-green/20 cursor-pointer"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
                <div className="absolute right-[-5%] bottom-[-20%] opacity-[0.03] rotate-[-15deg]">
                    <Trophy size={300} />
                </div>
              </div>
            </div>

            <aside className="w-full lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm">
                    <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-8 text-brand-black">Ball Progression</h4>
                    <ul className="space-y-6">
                        <li className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <span className="text-[12px] font-bold text-brand-black uppercase tracking-widest">Mini Tennis (Red)</span>
                            </div>
                            <span className="text-[13px] font-light text-gray-500">Ages 5-8. Focused on coordination and fun.</span>
                        </li>
                        <li className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                <span className="text-[12px] font-bold text-brand-black uppercase tracking-widest">Development (Orange)</span>
                            </div>
                            <span className="text-[13px] font-light text-gray-500">Ages 9-12. Growing technical skills.</span>
                        </li>
                        <li className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-[12px] font-bold text-brand-black uppercase tracking-widest">Elite Junior (Green)</span>
                            </div>
                            <span className="text-[13px] font-light text-gray-500">Ages 13-17. Advanced strategy and fitness.</span>
                        </li>
                    </ul>
                  </div>

                  <div className="bg-brand-green p-8 rounded-sm text-brand-dark">
                      <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-4 text-white">Join A Session</h4>
                      <p className="font-dm text-sm font-medium mb-6 leading-relaxed">
                          New juniors can book an assessment session to find the right level for their development.
                      </p>
                      <button 
                        onClick={() => openBookingModal('Junior Program')}
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
