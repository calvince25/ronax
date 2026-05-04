import React from 'react';
import { Metadata } from 'next';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import PageHero from '@/components/ui/PageHero';
import { BookNowButton } from '@/components/booking/BookNowButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Clock, Users, MapPin, Calendar, Smartphone, Percent } from 'lucide-react';

export const metadata: Metadata = {
  title: "10 Session Tennis Coaching Pack Nairobi | Best Value Training",
  description: "Best-value bulk tennis coaching package with Coach Ronax in Nairobi. Adults Ksh 23,500, Juniors Ksh 13,500. Maximum progress through consistency.",
  alternates: {
    canonical: "https://www.revolutiontennis.co.ke/coaching/ten-session-pack",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "10 Session Tennis Coaching Pack Nairobi",
    "description": "Best-value bulk tennis coaching package with Coach Ronax in Nairobi. Adults Ksh 23,500, Juniors Ksh 13,500. Minimum 2 sessions per week. Expires after 2 months. Available at Aga Khan Parklands, Public Service Club, and Karura Forest.",
    "provider": {
      "@type": "SportsOrganization",
      "name": "Revolution Tennis",
      "url": "https://www.revolutiontennis.co.ke",
      "telephone": "+254799756831"
    },
    "url": "https://www.revolutiontennis.co.ke/coaching/ten-session-pack",
    "areaServed": { "@type": "City", "name": "Nairobi" },
    "offers": [
      {
        "@type": "Offer",
        "name": "10 Session Pack — Adult",
        "price": "23500",
        "priceCurrency": "KES",
        "description": "Min 2 sessions/week. Expires 2 months from purchase."
      },
      {
        "@type": "Offer",
        "name": "10 Session Pack — Junior",
        "price": "13500",
        "priceCurrency": "KES",
        "description": "For juniors under 18. Min 2 sessions/week. Expires 2 months from purchase."
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does the 10 Session Tennis Pack cost in Nairobi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adults pay Ksh 23,500. Juniors under 18 pay Ksh 13,500. Minimum 2 sessions per week. Expires 2 months from purchase."
        }
      },
      {
        "@type": "Question",
        "name": "Why does the 10 session pack expire after 2 months?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 2-month validity keeps training consistent at a minimum of 2 sessions per week, which is the pace needed for technique improvements to compound before old habits reassert."
        }
      },
      {
        "@type": "Question",
        "name": "Can two people share the 10 session tennis pack?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Two players of similar level can share it as semi-private sessions, splitting the coaching time and cost."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use my 10 session pack at different venues?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sessions can be split across Aga Khan Parklands, Public Service Club Upper Hill, and Karura Forest in any combination."
        }
      },
      {
        "@type": "Question",
        "name": "Can juniors and adults share a 10 session pack?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adult and junior packs are priced separately (Ksh 23,500 and Ksh 13,500 respectively). Contact Coach Ronax via WhatsApp for specific mixed arrangements."
        }
      }
    ]
  }
];

export default function TenSessionPack() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <PageHero 
        title="10 Session Pack"
        subtitle="Best Value, Maximum Progress"
        description="Commit to your game with our most popular coaching bundle. Designed for rapid development through consistent, structured training."
        imageSrc="/images/locations_coaching/ten_session_pack.jpg"
      />

      <div className="py-24 px-8 md:px-12 bg-brand-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-20">
            
            <div className="w-full lg:w-2/3">
              <h2 className="font-barlow text-[42px] font-bold text-brand-black uppercase mb-8 leading-tight">
                The Revolution Tennis 10 Session Pack — Best Value, Maximum Progress
              </h2>
              
              <div className="prose max-w-none font-dm text-gray-600 text-[17px] leading-[1.8] font-light space-y-8">
                <p>
                  If there is one factor that separates players who improve rapidly from those who plateau, it is consistency. A one-off lesson gives you a valuable insight in the moment, but without regular reinforcement, newly learned technique reverts to old habit quickly. The Revolution Tennis 10 Session Pack is designed for players who are ready to make a committed, structured investment in their development. At a minimum of two sessions per week, this pack is built to take you through a complete development arc — from initial assessment through focused technical work to applied competitive performance — within a two-month period.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Pricing and Savings</h3>
                <p>
                  Adults: Ksh 23,500 for 10 sessions. Juniors (under 18): Ksh 13,500 for 10 sessions. The pack covers a minimum of two sessions per week and expires after two months from the date of purchase. Payment is accepted via M-Pesa, Visa/Mastercard, and bank transfer, and is required in full to activate the pack and secure your schedule with Coach Ronax.
                </p>
                <p>
                  At the adult rate, purchasing 10 individual private sessions at Ksh 2,500 each would cost Ksh 25,000. The adult 10 Session Pack at Ksh 23,500 saves you Ksh 1,500. At the junior rate, purchasing 10 individual sessions at Ksh 1,500 each would cost Ksh 15,000. The junior pack at Ksh 13,500 saves Ksh 1,500. Beyond the financial saving, the pack secures your preferred time slots in advance so you are never subject to last-minute availability constraints.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">What the 10 Sessions Cover</h3>
                <p>
                  Coach Ronax treats the 10 Session Pack as a structured coaching programme, not simply a bundle of individual lessons. Session one opens with a comprehensive technical and tactical assessment establishing your current baseline across all major strokes, your movement, and your match-play decision-making. This baseline informs the structure of everything that follows and ensures your time is spent on what will make the greatest difference to your game.
                </p>
                <p>
                  Sessions two through six follow a structured technical development pathway addressing your priority areas in a logical sequence — moving from foundational work (groundstroke mechanics, serve technique, movement patterns) through to tactical layers (shot selection, court construction, return patterns, and net-game development). Each session builds on the previous one, which is why block coaching produces compounding gains that isolated one-off lessons simply cannot replicate.
                </p>
                <p>
                  Sessions seven through nine shift progressively toward applied practice — longer point-play sequences, competitive drilling at near-match intensity, and simulated match scenarios that test your technical improvements under real pressure. Session ten is a full evaluation session where Coach Ronax reviews your progress against your session one baseline, acknowledges the improvements you have made, and maps your recommended goals for the next development block.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">The Two-Sessions-Per-Week Commitment</h3>
                <p>
                  The minimum of two sessions per week is not arbitrary. At this frequency, technical improvements compound session on session before old movement habits have a chance to reassert themselves. Players who complete their 10 sessions at this pace within two months consistently achieve greater and more durable improvement than those who spread the same number of sessions over a longer period with large gaps between visits. Coach Ronax will work with you to identify the two weekly slots that best fit your schedule and commit those times in advance.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Who This Pack Is For</h3>
                <p>
                  The 10 Session Pack suits three types of player particularly well. First, the committed beginner who has completed a few introductory sessions and has decided to develop tennis as a long-term sport. Second, the returning player who played at school or university, is back on court after a break, and wants to rebuild their game systematically. Third, the performance-focused club player who is preparing for a competitive season, wants to correct a recurring technical weakness, or is working toward a specific tournament or ranking goal.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Locations</h3>
                <p>
                  All three Revolution Tennis venues are available for 10 Session Pack holders: Aga Khan Sports Club in Parklands (Mon–Sun, 6:30 AM–8:30 PM), Public Service Club in Upper Hill (Mon–Sun, 7:00 AM–9:00 PM), and Karura Forest courts (Mon–Sun, 8:00 AM–6:00 PM). You can split sessions across different venues to suit your weekly schedule. Home coaching at private residential courts is also available — enquire via WhatsApp.
                </p>
              </div>

              <div className="mt-24">
                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide mb-10">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">How much does the 10 Session Pack cost?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      Adults pay Ksh 23,500. Juniors under 18 pay Ksh 13,500. The pack requires a minimum of two sessions per week and expires two months from the date of purchase.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">Why does the pack expire after two months?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      The two-month validity is designed to keep your training consistent and ensure you complete the sessions at a pace (minimum two per week) that produces real, lasting improvement. Large gaps between sessions allow technique to regress. The two-month window creates positive structure and keeps your development momentum strong.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">Can two people share the 10 Session Pack?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      Yes. Two players of similar level can share the pack as semi-private sessions. Both players train together each session, splitting the coaching time. This is popular among couples, friends, and colleagues who want to train together at a reduced per-person cost.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">Can I use the pack sessions at different venues?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      Yes. Sessions can be split across Aga Khan Parklands, Public Service Club Upper Hill, and Karura Forest in any combination to suit your weekly schedule.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">Can juniors and adults share the pack?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      The adult pack (Ksh 23,500) and junior pack (Ksh 13,500) are priced separately to reflect the different session rates. Contact Coach Ronax via WhatsApp if you have a specific mixed arrangement in mind and he will advise on the best option.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <aside className="w-full lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm">
                    <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-8 text-brand-black">Pack Details</h4>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4">
                            <Clock size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Consistency</span>
                                <span className="text-[14px] font-medium">Min 2 Sessions / Week</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <Calendar size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Validity</span>
                                <span className="text-[14px] font-medium">2 Months (8 Weeks)</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <Percent size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Benefit</span>
                                <span className="text-[14px] font-medium leading-tight">Best per-session value</span>
                            </div>
                        </li>
                    </ul>
                  </div>

                  <div className="bg-brand-dark p-8 rounded-sm text-white">
                      <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-4">Pack Price</h4>
                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                           <span className="text-sm font-light opacity-60">Adults (10)</span>
                           <span className="font-barlow text-xl font-bold">Ksh 23,500</span>
                        </div>
                        <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                           <span className="text-sm font-light opacity-60">Juniors (10)</span>
                           <span className="font-barlow text-xl font-bold">Ksh 13,500</span>
                        </div>
                      </div>
                      <BookNowButton 
                        program="10 Session Pack"
                        className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[11px] tracking-[0.2em] px-8 py-4 rounded-full uppercase transition-all shadow-lg shadow-brand-green/20"
                      />
                  </div>

                  <div className="bg-gray-900 p-8 rounded-sm text-white">
                      <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Smartphone size={18} className="text-brand-green" />
                        WhatsApp
                      </h4>
                      <p className="font-dm text-sm font-light mb-6 opacity-70">
                        Secure your preferred time slots.
                      </p>
                      <a 
                        href="https://wa.me/254799756831" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block w-full text-center border border-white/20 hover:bg-white/5 text-white font-bold text-[10px] tracking-[0.2em] px-8 py-4 rounded-full uppercase transition-all"
                      >
                        Message Coach Ronax
                      </a>
                  </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
