'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { Check, Star, Zap, ShieldCheck } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Star': return <Star size={24} />;
    case 'Zap': return <Zap size={24} />;
    case 'ShieldCheck': return <ShieldCheck size={24} />;
    default: return <Star size={24} />;
  }
};

export default function Pricing() {
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
      <div className="relative w-full h-[50vh] min-h-[400px] bg-brand-dark flex items-center">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1773081364166-74db8910af47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NzY3NTU3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury tennis club"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay object-center"
          />
          <div className="absolute inset-0 bg-[#1A2E1A]/80"></div>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-8 md:px-12 text-center">
          <h1 className="text-white font-barlow text-[64px] md:text-[80px] font-bold uppercase tracking-tight leading-[0.95] mb-6">
            Tennis Coaching Prices & <br />
            <span className="text-brand-green">Packages in Nairobi</span>
          </h1>
          <div className="w-12 h-1 bg-brand-green mb-8 mx-auto"></div>
          <p className="text-white/80 font-dm text-[16px] max-w-2xl font-light leading-relaxed mx-auto">
            Transparent pricing for all coaching programs with Ronax in Nairobi. Private lessons, group classes, junior packages and camps. No hidden fees. Pay via M-Pesa.
          </p>
        </div>
      </div>

      <div className="pt-24 pb-32 px-8 md:px-12 bg-brand-white">
        <div className="max-w-[1440px] mx-auto w-full text-center">
          
          {loading ? (
            <div className="py-20 text-gray-500 font-dm italic">Loading current rates...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto items-stretch">
              {plans.map((plan, i) => (
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
                    <Link href="/contact" className={`block text-center ${plan.popular ? 'bg-brand-dark text-white hover:bg-black font-bold' : 'bg-brand-dark text-white hover:bg-black'} text-[11px] tracking-[0.15em] px-8 py-4 rounded-full uppercase transition-all shadow-lg hover:shadow-xl w-full`}>
                      {plan.popular ? 'Book Preferred' : 'Book Session'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
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
