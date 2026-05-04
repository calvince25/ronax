import React from 'react';
import { Metadata } from 'next';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import PageHero from '@/components/ui/PageHero';
import { BookNowButton } from '@/components/booking/BookNowButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Clock, Users, MapPin, Calendar, Smartphone, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "Junior Tennis Programme Nairobi | After-School Coaching Ages 4-16",
  description: "Structured after-school tennis coaching for children aged 4–16 in Nairobi. Monday, Wednesday, Friday sessions. Ksh 10,200 per month. Red, Orange, Green ball progression.",
  alternates: {
    canonical: "https://www.revolutiontennis.co.ke/coaching/junior-tennis",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Junior Tennis Programme Nairobi — After School Coaching Ages 4 to 16",
    "description": "Structured after-school tennis coaching for children aged 4–16 in Nairobi. Monday, Wednesday, Friday sessions. Ksh 10,200 per month. Red, Orange, Green ball progression. Coach Ronax, Revolution Tennis.",
    "provider": {
      "@type": "SportsOrganization",
      "name": "Revolution Tennis",
      "url": "https://www.revolutiontennis.co.ke",
      "telephone": "+254799756831"
    },
    "url": "https://www.revolutiontennis.co.ke/coaching/junior-tennis",
    "areaServed": { "@type": "City", "name": "Nairobi" },
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 4,
      "suggestedMaxAge": 16
    },
    "offers": {
      "@type": "Offer",
      "name": "After School Junior Programme — Monthly",
      "price": "10200",
      "priceCurrency": "KES",
      "description": "Ages 4–16. Monday, Wednesday, Friday sessions. 3 sessions per week."
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does the junior tennis after-school programme cost in Nairobi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ksh 10,200 per month for ages 4–16. Covers Monday, Wednesday, and Friday sessions. Sibling discounts available."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum age for the Revolution Tennis junior programme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "From age 4. The Mini Red stage uses foam balls and shorter racquets to make tennis immediately accessible and enjoyable for young children."
        }
      },
      {
        "@type": "Question",
        "name": "Is 14 too late to start tennis in Nairobi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. Teenagers with athletic backgrounds often progress rapidly. Many competitive Nairobi juniors began in their early to mid teens."
        }
      },
      {
        "@type": "Question",
        "name": "How is my child placed in the right ball stage group?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Coach Ronax conducts a 15–20 minute on-court assessment before placing every new junior in the most appropriate group."
        }
      },
      {
        "@type": "Question",
        "name": "Can juniors combine the group programme with private lessons?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes and this is highly recommended. Players who combine both formats develop significantly faster than those in either format alone."
        }
      }
    ]
  }
];

export default function JuniorTennis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <PageHero 
        title="Junior Tennis Programme"
        subtitle="After-School Coaching Ages 4 to 16"
        description="Building complete players and instilling discipline, resilience, and sportsmanship. A structured developmental pathway for future champions."
        imageSrc="/images/locations_coaching/after_school.jpg"
      />

      <div className="py-24 px-8 md:px-12 bg-brand-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-20">
            
            <div className="w-full lg:w-2/3">
              <h2 className="font-barlow text-[42px] font-bold text-brand-black uppercase mb-8 leading-tight">
                Junior Tennis Programme & After-School Coaching in Nairobi — Ages 4 to 16
              </h2>
              
              <div className="prose max-w-none font-dm text-gray-600 text-[17px] leading-[1.8] font-light space-y-8">
                <p>
                  Revolution Tennis has built one of Nairobi's most respected junior tennis programmes under the guidance of Coach Ronax, who brings 15 years of experience coaching young players at every age and ability level. The after-school programme is not simply a place for children to hit tennis balls at the end of the school day — it is a structured, age-appropriate developmental pathway that builds complete tennis players and instils the qualities that tennis uniquely develops: discipline, focus, resilience, competitive courage, and genuine sportsmanship. These are skills that transfer directly into academic performance and every other area of a young person's life.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Programme Schedule and Structure</h3>
                <p>
                  The Revolution Tennis junior after-school programme runs three times per week — Monday, Wednesday, and Friday — providing regularity and rhythm without overwhelming young players' schedules. Sessions are held at all three Revolution Tennis venues across Nairobi: Aga Khan Sports Club in Parklands, Public Service Club in Upper Hill, and Karura Forest courts, giving families across the city a convenient venue option close to home or school.
                </p>
                <p>
                  Players are grouped by age and ability using the internationally recognised Red, Orange, and Green ball progression system. This system, developed by the ITF and adopted by tennis federations worldwide, ensures every child learns tennis on equipment that matches their physical size and developmental stage — producing better technique, stronger rallying skills, and a more lasting love for the sport than starting on full adult equipment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 not-prose">
                   <div className="bg-red-50 p-8 border-b-4 border-red-500 rounded-sm">
                      <h4 className="font-barlow text-xl font-bold uppercase mb-4 text-red-900">Mini Red</h4>
                      <p className="text-sm font-light text-red-800/80 mb-2 tracking-widest uppercase font-bold">Ages 4–8</p>
                      <p className="text-sm text-red-900/70 leading-relaxed font-light">Play-based learning with foam balls and smaller courts to build coordination and fun.</p>
                   </div>
                   <div className="bg-orange-50 p-8 border-b-4 border-orange-500 rounded-sm">
                      <h4 className="font-barlow text-xl font-bold uppercase mb-4 text-orange-900">Orange</h4>
                      <p className="text-sm font-light text-orange-800/80 mb-2 tracking-widest uppercase font-bold">Ages 9–12</p>
                      <p className="text-sm text-orange-900/70 leading-relaxed font-light">Transition to full court with lower-compression balls. Focus on stroke mechanics and scoring.</p>
                   </div>
                   <div className="bg-green-50 p-8 border-b-4 border-green-500 rounded-sm">
                      <h4 className="font-barlow text-xl font-bold uppercase mb-4 text-green-900">Elite Green</h4>
                      <p className="text-sm font-light text-green-800/80 mb-2 tracking-widest uppercase font-bold">Ages 13–16</p>
                      <p className="text-sm text-green-900/70 leading-relaxed font-light">Full regulation equipment and match-realistic scenarios for competitive readiness.</p>
                   </div>
                </div>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Monthly Fee and Enrolment</h3>
                <p>
                  The after-school programme is priced at Ksh 10,200 per month for all age groups (4 to 16 years). This monthly fee covers all three weekly sessions — Monday, Wednesday, and Friday. It represents one of the most competitive junior coaching rates available at a premium Nairobi venue with a professional certified coach. Sibling discounts apply for families enrolling two or more children simultaneously — contact Coach Ronax via WhatsApp for the applicable discount.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Development Pillars</h3>
                <p>
                  Every Revolution Tennis junior session is built around four core pillars:
                </p>
                <ul className="list-none space-y-4">
                  <li className="flex gap-4">
                    <span className="font-bold text-brand-green">Fun First:</span>
                    <span>Energetic, game-based sessions ensure children develop a lasting love for the sport.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-brand-green">Technical Discipline:</span>
                    <span>Biometrically correct strokes from day one that scale as the player grows.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-brand-green">Mental Stamina:</span>
                    <span>Developing focus, concentration, and emotional resilience for competition.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-brand-green">Safety First:</span>
                    <span>Structured, professionally supervised environment appropriate to each age group.</span>
                  </li>
                </ul>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Holiday Camps</h3>
                <p>
                  In addition to the weekly after-school programme, Revolution Tennis runs intensive holiday camps during school breaks. Holiday camps typically offer three to five sessions per week over two to three weeks and provide an excellent opportunity for accelerated development. Children who attend holiday camps consistently progress by the equivalent of a full school term of regular sessions in a fraction of the time.
                </p>
              </div>

              <div className="mt-24">
                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide mb-10">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">How much does the junior after-school tennis programme cost?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      Ksh 10,200 per month for ages 4 to 16. This covers all three weekly sessions on Monday, Wednesday, and Friday. Sibling discounts apply — enquire via WhatsApp.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">What is the minimum age for the junior programme?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      The programme accepts children from age 4. The Mini Red stage uses foam balls and shorter racquets specifically designed for young children, making tennis immediately playable and enjoyable even for the youngest participants.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">Is 14 too late to start playing tennis?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      Not at all. Teenagers with athletic backgrounds often progress very quickly due to their physical coordination and ability to absorb coaching. Many competitive Nairobi junior players began in their early to mid teens and went on to represent their schools and compete at regional level.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">How is my child placed in the correct ball stage group?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      Coach Ronax conducts a brief 15 to 20-minute on-court assessment for every new junior player before group placement. This ensures your child is in a group that is both developmentally appropriate and genuinely challenging — not simply assigned by age alone.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">Can juniors combine the after-school programme with private lessons?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      Yes, and this combination is highly recommended. The group programme builds consistency, competitive engagement, and social enjoyment of the sport. Private lessons allow Coach Ronax to address individual technical weaknesses with focused dedicated time. Players who combine both formats develop significantly faster than those in either format alone.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <aside className="w-full lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm">
                    <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-8 text-brand-black">Programme Details</h4>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4">
                            <Clock size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Frequency</span>
                                <span className="text-[14px] font-medium">3 Sessions / Week</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <Calendar size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Days</span>
                                <span className="text-[14px] font-medium">Mon, Wed, Fri</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <Award size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Levels</span>
                                <span className="text-[14px] font-medium leading-tight">Red, Orange, Green Ball</span>
                            </div>
                        </li>
                    </ul>
                  </div>

                  <div className="bg-brand-dark p-8 rounded-sm text-white">
                      <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-4">Monthly Fee</h4>
                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                           <span className="text-sm font-light opacity-60">Full Program</span>
                           <span className="font-barlow text-xl font-bold">Ksh 10,200</span>
                        </div>
                      </div>
                      <BookNowButton 
                        program="Junior Program"
                        className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[11px] tracking-[0.2em] px-8 py-4 rounded-full uppercase transition-all shadow-lg shadow-brand-green/20"
                      />
                  </div>

                  <div className="bg-gray-900 p-8 rounded-sm text-white">
                      <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Smartphone size={18} className="text-brand-green" />
                        WhatsApp
                      </h4>
                      <p className="font-dm text-sm font-light mb-6 opacity-70">
                        Book an assessment for your child.
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
