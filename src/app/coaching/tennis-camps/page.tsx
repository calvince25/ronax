'use client';

import React from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Check, Sun, Users, Flame, Calendar, MapPin } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function TennisCamps() {
  const { openBookingModal } = useBooking();
  const [program, setProgram] = React.useState<any>(null);
  const [prices, setPrices] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchProgram = async () => {
      const { data } = await supabase.from('programs').select('*').eq('slug', 'tennis-camps').single();
      if (data) setProgram(data);

      const { data: priceData } = await supabase.from('prices').select('*').eq('category', 'Tennis Camps').order('display_order', { ascending: true });
      if (priceData) setPrices(priceData);
    };
    fetchProgram();
  }, []);

  const title = program?.title || "Holiday Tennis Camps";
  const subtitle = program?.subtitle || "Intensive Training. Lasting Friendships.";
  const leadDesc = program?.lead_description || "Make the most of the school break with our immersive holiday camps. It is a week of intensive tennis, physical education, and fun.";
  const mainDesc = program?.main_description || "Held during the April, August, and December school holidays, our camps are designed for all levels. We combine professional instruction with team-based challenges and tournaments to keep students engaged and improving rapidly.";
  const imageUrl = program?.image_url || "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydHxlbnwxfHx8fDE3NzY3NTU3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

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
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-8 md:px-12 text-center md:text-left">
          <h1 className="text-white font-barlow text-[64px] md:text-[80px] font-bold uppercase tracking-tight leading-[0.95] mb-6">
            Season <span className="text-brand-green">Camps</span>
          </h1>
          <div className="w-12 h-1 bg-brand-green mb-8 mx-auto md:mx-0"></div>
          <p className="text-white/80 font-dm text-[16px] max-w-2xl font-light leading-relaxed mx-auto md:mx-0">
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
                
                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Camp Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                   {[
                     { t: "Outdoor Adventure", d: "Full-day activities in some of Nairobi's best sporting venues.", icon: <Sun size={22} /> },
                     { t: "Team Challenges", d: "Relay races, team matches, and group strategy sessions.", icon: <Users size={22} /> },
                     { t: "Daily Intensity", d: "3-4 hours of on-court training per day for rapid progression.", icon: <Flame size={22} /> },
                     { t: "Tournament Play", d: "Ending each week with a friendly, structured club tournament.", icon: <Check size={22} /> }
                   ].map((b, i) => (
                     <div key={i} className="flex gap-4 p-8 bg-gray-50 rounded-sm border border-gray-100 group hover:border-brand-green transition-colors duration-500">
                        <div className="text-brand-green">
                           {b.icon}
                        </div>
                        <div>
                           <h4 className="font-barlow text-lg font-bold text-brand-black uppercase mb-1 tracking-wider">{b.t}</h4>
                           <p className="text-xs font-light text-gray-500 leading-relaxed">{b.d}</p>
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
                            Seasonal rates available. Contact Coach Ronax for the upcoming camp pricing.
                          </div>
                        )}
                    </div>
                    <div className="mt-12 flex flex-col sm:flex-row gap-6">
                        <button 
                          onClick={() => openBookingModal('Tennis Camps')}
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
                    <Flame size={300} />
                </div>
              </div>

              <div className="mt-12 p-12 bg-brand-dark text-white rounded-sm relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                   <div className="max-w-md">
                      <h3 className="font-barlow text-3xl font-bold uppercase mb-4 tracking-wide">Next Camp Registration</h3>
                      <p className="font-dm text-sm text-white/70 font-light mb-0 leading-relaxed">
                         Our camps fill up quickly! Secure your child's spot for the upcoming school holidays to avoid disappointment.
                      </p>
                   </div>
                   <button 
                     onClick={() => openBookingModal('Tennis Camps')}
                     className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[11px] tracking-[0.2em] px-10 py-5 rounded-full uppercase transition-all shadow-lg shadow-brand-green/20 shrink-0 cursor-pointer"
                   >
                      Book Now
                   </button>
                </div>
              </div>
            </div>

            <aside className="w-full lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm">
                    <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-8 text-brand-black">Upcoming Dates</h4>
                    <ul className="space-y-6">
                        {program?.upcoming_events && program.upcoming_events.length > 0 ? (
                          program.upcoming_events.map((event: any, i: number) => (
                            <li key={i} className="flex flex-col gap-2 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} className="text-brand-green" />
                                    <span className="text-[12px] font-bold text-brand-black uppercase tracking-widest">{event.title}</span>
                                </div>
                                <span className="text-[14px] font-medium ml-6">{new Date(event.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </li>
                          ))
                        ) : (
                          <li className="flex flex-col gap-2">
                              <span className="text-[14px] font-medium text-gray-500">Contact us for upcoming camp dates.</span>
                          </li>
                        )}
                        <li className="flex flex-col gap-2 pt-2 mt-2 border-t border-gray-100">
                             <div className="flex items-center gap-2">
                                <MapPin size={18} className="text-brand-green" />
                                <span className="text-[12px] font-bold text-brand-black uppercase tracking-widest">Location</span>
                             </div>
                             <span className="text-[14px] font-medium ml-6">Westlands & Karen Hubs</span>
                        </li>
                    </ul>
                  </div>

                  <div className="bg-brand-green p-8 rounded-sm text-brand-dark">
                      <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-4">Sample Daily Schedule</h4>
                      <ul className="space-y-3 text-[13px] font-medium">
                          <li className="flex justify-between border-b border-brand-dark/10 pb-2"><span>09:00 AM</span> <span>Arrival & Warmup</span></li>
                          <li className="flex justify-between border-b border-brand-dark/10 pb-2"><span>09:30 AM</span> <span>Technical Drills</span></li>
                          <li className="flex justify-between border-b border-brand-dark/10 pb-2"><span>11:30 AM</span> <span>Snack Break</span></li>
                          <li className="flex justify-between border-b border-brand-dark/10 pb-2"><span>12:00 PM</span> <span>Matchplay Tactics</span></li>
                          <li className="flex justify-between pb-2"><span>02:00 PM</span> <span>Games & Dismissal</span></li>
                      </ul>
                  </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
