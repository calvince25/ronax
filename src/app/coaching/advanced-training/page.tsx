import React from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Check, ShieldCheck, Trophy, Target, PlayCircle } from 'lucide-react';

export const revalidate = 60;

export default async function AdvancedTraining() {
  const { data: program } = await supabase.from('programs').select('*').eq('slug', 'advanced-training').single();

  const title = program?.title || "Advanced & Competitive";
  const subtitle = program?.subtitle || "Precision. Power. Performance.";
  const leadDesc = program?.lead_description || "For tournament players and high-level recreational athletes. Experience the intensity of professional-grade training.";
  const mainDesc = program?.main_description || "Advanced training moves beyond basic technique and dives into tactical patterns, mental resilience, and physical conditioning. Coach Ronax uses video analysis to identify micro-flaws in strokes and match-play strategy to give you a competitive edge in Nairobi's tennis circuits.";
  const imageUrl = program?.image_url || "https://images.unsplash.com/photo-1634090213390-9f4b0dc4b09b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdGVubmlzJTIwcGxheWVyJTIwY3JvdWNoaW5nJTIwYXQlMjBuZXQlMjBkYXJrfGVufDF8fHx8MTc3Njc1NDgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <>
      <div className="relative w-full h-[50vh] min-h-[400px] bg-brand-dark flex items-center">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-[#1A2E1A]/60"></div>
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

              <div className="mt-20 p-12 bg-gray-50 border border-gray-100 rounded-sm relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                   <div className="max-w-md">
                      <h3 className="font-barlow text-3xl font-bold uppercase mb-4 tracking-wide text-brand-black">Tournament Preparation</h3>
                      <p className="font-dm text-sm text-gray-500 font-light mb-0 leading-relaxed">
                         Intensive squads specifically for players entering local KTF tournaments or seeking college recruitment.
                      </p>
                   </div>
                   <Link href="/contact" className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[11px] tracking-[0.2em] px-10 py-5 rounded-full uppercase transition-all shadow-lg shadow-brand-green/20 shrink-0">
                      Book Assessment
                   </Link>
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
