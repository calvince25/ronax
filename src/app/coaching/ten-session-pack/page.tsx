'use client';

import React from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { Check, Clock, Calendar, ShieldCheck } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import PageHero from '@/components/ui/PageHero';

export default function TenSessionPack() {
  const { openBookingModal } = useBooking();

  const features = [
    "At least 2 sessions per week",
    "Expires after 2 months",
    "Priority court booking",
    "Technical assessment included",
    "Flexible rescheduling (24h notice)"
  ];

  return (
    <>
      <PageHero 
        title="10 Session Pack"
        subtitle="Commit to Excellence"
        description="The ultimate training package for dedicated players. Consistent practice is the only way to transform your game."
        imageSrc="https://images.unsplash.com/photo-1634090213390-9f4b0dc4b09b?q=80&w=2000"
      />

      <div className="py-24 pb-40 px-8 md:px-12 bg-brand-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-20">
            
            <div className="w-full lg:w-2/3">
              <h2 className="font-barlow text-[42px] font-bold text-brand-black uppercase mb-8">Package Details</h2>
              <p className="font-dm text-gray-500 text-[18px] leading-relaxed mb-12 font-light">
                Our 10-session pack is designed for players who are serious about technical and tactical development. By committing to a block of sessions, you ensure a structured progression path under Coach Ronax.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                 <div className="bg-brand-dark p-10 rounded-sm text-white">
                    <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest mb-4 block">Adult Package</span>
                    <div className="font-barlow text-[56px] font-bold mb-4">
                       <span className="text-xl font-normal opacity-60 mr-2">Ksh</span>
                       23,500
                    </div>
                    <p className="text-white/60 text-sm font-light mb-8 italic">Valid for 2 months from first session</p>
                    <button 
                      onClick={() => openBookingModal('10 Session Pack - Adult')}
                      className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[11px] tracking-[0.2em] py-4 rounded-full uppercase transition-all"
                    >
                      Book Adult Pack
                    </button>
                 </div>

                 <div className="bg-white border border-gray-100 p-10 rounded-sm shadow-sm">
                    <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest mb-4 block">Kids Package</span>
                    <div className="font-barlow text-[56px] font-bold text-brand-black mb-4">
                       <span className="text-xl font-normal opacity-60 mr-2">Ksh</span>
                       13,500
                    </div>
                    <p className="text-gray-400 text-sm font-light mb-8 italic">Valid for 2 months from first session</p>
                    <button 
                      onClick={() => openBookingModal('10 Session Pack - Kids')}
                      className="w-full bg-brand-dark hover:bg-black text-white font-bold text-[11px] tracking-[0.2em] py-4 rounded-full uppercase transition-all"
                    >
                      Book Kids Pack
                    </button>
                 </div>
              </div>

              <div className="space-y-12">
                 <h3 className="font-barlow text-3xl font-bold uppercase tracking-wide text-brand-black">Terms & Requirements</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-brand-green/10 text-brand-green flex items-center justify-center rounded-full shrink-0">
                          <Calendar size={20} />
                       </div>
                       <div>
                          <h4 className="font-barlow font-bold uppercase text-brand-black mb-2">Consistency Rule</h4>
                          <p className="text-sm font-light text-gray-500">Minimum of 2 sessions per week is required to maintain momentum and technical growth.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-brand-green/10 text-brand-green flex items-center justify-center rounded-full shrink-0">
                          <Clock size={20} />
                       </div>
                       <div>
                          <h4 className="font-barlow font-bold uppercase text-brand-black mb-2">Expiration</h4>
                          <p className="text-sm font-light text-gray-500">The 10-session pack expires 2 months after the first lesson is completed.</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            <aside className="w-full lg:w-1/3">
               <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
                  <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-8 text-brand-black">What's Included</h4>
                  <ul className="space-y-4">
                    {features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-brand-green shrink-0 mt-0.5" />
                        <span className="text-sm font-dm text-gray-600 font-light">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 pt-10 border-t border-gray-200">
                     <div className="flex items-center gap-4 text-brand-black">
                        <ShieldCheck size={32} className="text-brand-green" />
                        <div>
                           <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Secure Payment</p>
                           <p className="text-xs font-medium">MPesa & Credit Cards Accepted</p>
                        </div>
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
