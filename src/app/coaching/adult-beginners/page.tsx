import React from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Check, Target, Zap, Clock, HelpCircle } from 'lucide-react';

export const revalidate = 60;

export default async function AdultBeginners() {
  const { data: program } = await supabase.from('programs').select('*').eq('slug', 'adult-beginners').single();

  const title = program?.title || "Adult Beginners";
  const subtitle = program?.subtitle || "Start Your Tennis Journey Today";
  const leadDesc = program?.lead_description || "It is never too late to pick up a racket. Our Adult Beginner program is designed to take you from zero to rally in record time.";
  const mainDesc = program?.main_description || "We understand that starting a new sport as an adult can be intimidating. That is why Coach Ronax uses a simplified, mechanics-first approach. We focus on the most important fundamentals: contact point, balance, and follow-through.";
  const imageUrl = program?.image_url || "https://images.unsplash.com/photo-1542144582-1ba0045d45e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXNlcnxlbnwxfHx8fDE3NzY3NTU3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <>
      <div className="relative w-full h-[50vh] min-h-[400px] bg-brand-dark flex items-center">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-[#1A2E1A]/70"></div>
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

              <div className="mt-20 p-10 bg-brand-green rounded-sm text-brand-dark relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                   <div className="max-w-md">
                      <h3 className="font-barlow text-3xl font-bold uppercase mb-4 tracking-wide text-white">First Step On Court?</h3>
                      <p className="font-dm text-sm font-medium mb-0 opacity-80">
                         Book a special 1-hour assessment for beginners at only Ksh 1,500. We'll help you find your rhythm.
                      </p>
                   </div>
                   <Link href="/contact" className="bg-brand-dark hover:bg-black text-white font-bold text-[11px] tracking-[0.2em] px-10 py-5 rounded-full uppercase transition-all shadow-xl shrink-0">
                      Book Assessment
                   </Link>
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
