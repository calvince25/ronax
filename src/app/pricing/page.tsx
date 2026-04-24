'use client';

export const dynamic = 'force-dynamic';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { Check, Star, Zap, ShieldCheck } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import PageHero from '@/components/ui/PageHero';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Star': return <Star size={24} />;
    case 'Zap': return <Zap size={24} />;
    case 'ShieldCheck': return <ShieldCheck size={24} />;
    default: return <Star size={24} />;
  }
};

export default function Pricing() {
  const { openBookingModal } = useBooking();
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      const { data, error } = await supabase
        .from('prices')
        .select('*')
        .order('display_order', { ascending: true });
      
      if (!error && data) {
        setPlans(data);
      }
      setLoading(false);
    };

    fetchPrices();
  }, []);

  return (
    <>
      <PageHero 
        title="Pricing & Packages"
        subtitle="Investment in your Game"
        description="Transparent pricing for all coaching programs at Aga Khan (Parklands), Public Service Club, and Karura. Private lessons, group classes, 10-session packs, and after-school programs."
        imageSrc="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1440"
      />

      <div className="pt-24 pb-32 px-8 md:px-12 bg-brand-white">
        <div className="max-w-[1440px] mx-auto w-full text-center">
          
          {loading ? (
            <div className="py-20 text-gray-500 font-dm italic">Loading current rates...</div>
          ) : (
            <>
              {(Object.entries(
                plans.reduce((acc, plan) => {
                  const category = plan.category || 'General';
                  if (!acc[category]) acc[category] = [];
                  acc[category].push(plan);
                  return acc;
                }, {} as Record<string, any[]>)
              ) as [string, any[]][]).map(([category, categoryPlans]) => (
                <div key={category} className="mb-24">
                  <h3 className="text-3xl font-barlow font-bold uppercase tracking-widest text-brand-dark mb-12 relative inline-block">
                    {category}
                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-brand-green"></span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    {categoryPlans.map((plan: any, i: number) => (
                      <div key={i} className={`bg-white border ${plan.popular ? 'border-2 border-brand-green scale-105 z-10 shadow-2xl' : 'border-gray-200 shadow-lg'} rounded-sm overflow-hidden flex flex-col text-left transition-transform duration-300 hover:z-20`}>
                        {plan.popular && (
                          <div className="bg-brand-green text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 text-center">
                            Most Popular
                          </div>
                        )}
                        
                        <div className={`${plan.popular ? 'bg-brand-green text-brand-dark' : 'bg-brand-dark text-white'} p-8 text-center border-b-[4px] ${plan.popular ? 'border-brand-dark' : 'border-brand-green'}`}>
                          <div className="flex justify-center mb-4 opacity-80">
                               {getIcon(plan.icon)}
                          </div>
                          <h3 className="font-barlow text-2xl font-bold uppercase tracking-wide mb-2">{plan.name}</h3>
                          <p className={`font-dm ${plan.popular ? 'text-brand-dark/70' : 'text-gray-400'} text-[13px] font-light mb-6 opacity-80`}>{plan.description}</p>
                          <div className="font-barlow text-5xl font-bold flex items-center justify-center gap-2">
                               <span className="text-sm font-normal opacity-60">Ksh</span>
                               {plan.price}
                          </div>
                          <p className={`font-dm ${plan.popular ? 'text-brand-dark/70' : 'text-gray-400'} text-xs font-medium mt-2 uppercase tracking-widest`}>{plan.unit}</p>
                        </div>
                        
                        <div className="p-8 bg-white flex-grow">
                          <ul className="space-y-4 mb-4 font-dm text-[14px] text-gray-600 font-light">
                            {Array.isArray(plan.features) && plan.features.map((feature: string, j: number) => (
                              <li key={j} className="flex items-start gap-3">
                                <Check size={16} className="text-brand-green shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="p-8 pt-0 bg-white">
                          <button 
                            onClick={() => openBookingModal(plan.name)}
                            className={`block text-center ${plan.popular ? 'bg-brand-dark text-white hover:bg-black font-bold' : 'bg-brand-dark text-white hover:bg-black'} text-[11px] tracking-[0.15em] px-8 py-4 rounded-full uppercase transition-all shadow-lg hover:shadow-xl w-full cursor-pointer`}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}

          <div className="bg-gray-50 rounded-sm p-12 max-w-4xl mx-auto border border-gray-100 text-left relative overflow-hidden">
            <div className="relative z-10">
                <h4 className="font-barlow text-3xl font-bold uppercase tracking-wide mb-6">Payment Methods</h4>
                <p className="font-dm text-[15px] text-gray-500 font-light mb-8 max-w-2xl leading-relaxed">
                  We accept all major credit cards, bank transfers, and <strong>Lipa na M-Pesa</strong>. Payments are required in advance to secure your court booking and coaching slot.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="bg-brand-dark text-white px-5 py-2.5 font-bold text-[10px] uppercase tracking-[0.2em] rounded-sm">M-Pesa Buy Goods</div>
                  <div className="bg-brand-dark text-white px-5 py-2.5 font-bold text-[10px] uppercase tracking-[0.2em] rounded-sm">Visa / Mastercard</div>
                  <div className="bg-brand-dark text-white px-5 py-2.5 font-bold text-[10px] uppercase tracking-[0.2em] rounded-sm">Bank Transfer</div>
                </div>
            </div>
            <div className="absolute top-1/2 right-[-5%] translate-y-[-50%] opacity-[0.03] rotate-[-15deg] pointer-events-none">
                <ShieldCheck size={300} />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
