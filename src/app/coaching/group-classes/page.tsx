'use client';

import React from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Check, Clock, Users, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function GroupClasses() {
  const { openBookingModal } = useBooking();
  const [program, setProgram] = React.useState<any>(null);
  const [prices, setPrices] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchProgram = async () => {
      const { data } = await supabase.from('programs').select('*').eq('slug', 'group-classes').single();
      if (data) setProgram(data);

      const { data: priceData } = await supabase.from('prices').select('*').eq('category', 'Group Classes').order('display_order', { ascending: true });
      if (priceData) setPrices(priceData);
    };
    fetchProgram();
  }, []);

  const title = program?.title || "Group Tennis Classes";
  const subtitle = program?.subtitle || "Social, Competitive & Fun";
  const leadDesc = program?.lead_description || "Join a vibrant community of players. Our group classes are designed to improve your game in a dynamic, social environment.";
  const mainDesc = program?.main_description || "Our group sessions focus on high-volume hitting, tactical drills, and live ball games. It is the perfect way to apply technical skills in real match-play scenarios while meeting other tennis enthusiasts in Nairobi.";
  const imageUrl = program?.image_url || "https://images.unsplash.com/photo-1634567220268-20d009b11910?q=80&w=1080";

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
                
                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">What to Expect</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                   {[
                     { t: "Max 6 Players", d: "Small groups ensure personalized attention and high hitting volume." },
                     { t: "Level-Based", d: "We split groups by skill level to ensure competitive and fun play." },
                     { t: "Tactical Themes", d: "Each week focuses on a specific aspect of the game." },
                     { t: "Social Matchplay", d: "Apply what you've learned in structured point-play scenarios." }
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
                          { name: 'Drop-in', price: '1,500', note: 'Single Session' },
                          { name: 'Monthly (4)', price: '5,000', note: 'Once a Week' },
                          { name: 'Unlimited', price: '12,000', note: 'Access All Groups' }
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
                          onClick={() => openBookingModal('Group Classes')}
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
                    <Users size={300} />
                </div>
              </div>
            </div>

            <aside className="w-full lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm">
                    <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-8 text-brand-black">Session Schedule</h4>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4">
                            <Calendar size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Weekdays</span>
                                <span className="text-[14px] font-medium">6:00 PM - 8:00 PM</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <Calendar size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Saturdays</span>
                                <span className="text-[14px] font-medium">8:00 AM - 11:00 AM</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <Calendar size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sundays</span>
                                <span className="text-[14px] font-medium">4:00 PM - 6:00 PM</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <MapPin size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Locations</span>
                                <span className="text-[14px] font-medium">Westlands & Karen Hubs</span>
                            </div>
                        </li>
                    </ul>
                  </div>

                  <div className="bg-brand-dark p-8 rounded-sm text-white">
                      <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-4">First Group Session?</h4>
                      <p className="font-dm text-sm font-light mb-6 leading-relaxed opacity-80">
                          Try your first group session for just Ksh 1,000 to see if the level and dynamic suit you.
                      </p>
                      <button 
                        onClick={() => openBookingModal('Group Classes')}
                        className="inline-block bg-brand-green text-white font-bold text-[10px] tracking-[0.2em] px-6 py-3 rounded-full uppercase hover:bg-brand-green/90 transition-colors cursor-pointer"
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
