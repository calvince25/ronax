import React from 'react';
import { Metadata } from 'next';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import PageHero from '@/components/ui/PageHero';
import { BookNowButton } from '@/components/booking/BookNowButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Clock, Users, MapPin, Calendar, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Group Tennis Classes Nairobi | Social & Competitive Coaching",
  description: "Social and competitive group tennis coaching in Nairobi with Coach Ronax. Adults Ksh 2,000, Juniors Ksh 1,200. Beginner, intermediate, and advanced groups.",
  alternates: {
    canonical: "https://www.revolutiontennis.co.ke/coaching/group-classes",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Group Tennis Classes Nairobi",
    "description": "Social and competitive group tennis coaching in Nairobi with Coach Ronax. Adults Ksh 2,000 per session, Juniors Ksh 1,200 per session. Minimum 3 players. Beginner, intermediate, and advanced groups at Aga Khan Parklands, Public Service Club, and Karura Forest.",
    "provider": {
      "@type": "SportsOrganization",
      "name": "Revolution Tennis",
      "url": "https://www.revolutiontennis.co.ke",
      "telephone": "+254799756831"
    },
    "url": "https://www.revolutiontennis.co.ke/coaching/group-classes",
    "areaServed": { "@type": "City", "name": "Nairobi" },
    "offers": [
      {
        "@type": "Offer",
        "name": "Group Class — Adult",
        "price": "2000",
        "priceCurrency": "KES",
        "description": "Per session. Minimum 3 players required."
      },
      {
        "@type": "Offer",
        "name": "Group Class — Junior",
        "price": "1200",
        "priceCurrency": "KES",
        "description": "Per session for juniors under 18. Minimum 3 players required."
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do group tennis classes cost in Nairobi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adults pay Ksh 2,000 per session. Juniors under 18 pay Ksh 1,200 per session. Minimum 3 players required."
        }
      },
      {
        "@type": "Question",
        "name": "How many players are in a Revolution Tennis group class?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A minimum of 3 players is required. Sessions are capped to keep everyone active and ensure individual coaching attention."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a partner to join a group tennis class in Nairobi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. You can join as an individual. Coach Ronax manages pairings and rotations on the day."
        }
      },
      {
        "@type": "Question",
        "name": "Can I try a single group tennis class before committing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Drop-in attendance is welcome. Confirm availability via WhatsApp the day before."
        }
      },
      {
        "@type": "Question",
        "name": "Are group tennis classes suitable for players returning after a long break?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The intermediate group is well suited to players returning after years away from school or university tennis."
        }
      }
    ]
  }
];

export default function GroupClasses() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <PageHero 
        title="Group Tennis Classes"
        subtitle="Learn, Compete, and Connect"
        description="Develop your competitive instincts in a dynamic group environment. Structured technical instruction combined with social engagement."
        imageSrc="/images/locations_coaching/group_classes.jpg"
      />

      <div className="py-24 px-8 md:px-12 bg-brand-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-20">
            
            <div className="w-full lg:w-2/3">
              <h2 className="font-barlow text-[42px] font-bold text-brand-black uppercase mb-8 leading-tight">
                Group Tennis Classes in Nairobi — Learn, Compete, and Connect
              </h2>
              
              <div className="prose max-w-none font-dm text-gray-600 text-[17px] leading-[1.8] font-light space-y-8">
                <p>
                  Tennis rewards competitive engagement, and there is no better environment to develop your competitive instincts than a well-run group coaching class. At Revolution Tennis, group sessions combine the structured technical instruction of expert coaching with the energy, motivation, and social enjoyment that only a shared court environment creates. Whether you are new to the sport and want to learn alongside others at the same level, or an experienced player looking for drilling partners and a community of like-minded tennis enthusiasts, group classes with Coach Ronax offer a structured, engaging, and cost-effective pathway to consistent improvement.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">How Group Coaching Works at Revolution Tennis</h3>
                <p>
                  Group coaching reaches its full potential when the coach keeps player numbers manageable and structures drills that keep every participant active, engaged, and improving simultaneously. Revolution Tennis group classes require a minimum of three players and are capped to ensure every participant receives meaningful individual attention within the group format. Every session is matched by ability level so that the pace, drilling intensity, and tactical content are appropriate and genuinely challenging for everyone on court — not just the strongest or the weakest player in the group.
                </p>
                <p>
                  Sessions follow a structured three-part format. The dynamic warm-up opens with movement drills, split-step reactions, and cooperative rally sequences to activate on-court athleticism and rhythm. The technical drill phase focuses on the session's weekly theme — building topspin depth, developing net-game confidence, improving serve-and-return patterns, or sharpening approach-shot decision-making. The competitive games phase closes every session by putting the technical focus into point-play situations with rotating partners, because skills that are never tested under competitive pressure do not transfer into match play.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Levels Available</h3>
                <p>
                  Group classes are available across three ability levels. The Beginner Group is for players with fewer than six months of experience, focusing on correct stroke mechanics, court awareness, basic scoring, and rallying consistency in a supportive, low-pressure environment. The Intermediate Group targets players who can sustain rallies of ten or more shots and introduces tactical concepts including depth and placement, approach shots, net positioning, and serve-and-return patterns. This is the most popular group level and attracts recreational players, returning players, and working professionals who train regularly. The Advanced Group is for competitive club-level players and centres on high-intensity drilling, match-play scenario training, tactical game construction, and the physical demands of competitive tennis.
                </p>
                <p>
                  Coach Ronax assesses every new participant through a brief rally sequence and places them in the most appropriate group. Players who progress quickly can move between levels at any time.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Where Group Classes Are Held</h3>
                <p>
                  Group coaching sessions are held across all three Revolution Tennis venues. Aga Khan Sports Club in Parklands runs from 6:30 AM to 8:30 PM seven days a week — ideal for early-morning group training before work. Public Service Club in Upper Hill operates from 7:00 AM to 9:00 PM and is popular for lunchtime and after-work sessions among Nairobi professionals. Karura Forest courts offer a unique, refreshing group training setting, open from 8:00 AM to 6:00 PM daily.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">The Social Value of Group Training</h3>
                <p>
                  Training alongside others who share your goals creates natural accountability — you are far less likely to cancel when you know your hitting partners are expecting you on court. Revolution Tennis group classes have produced lasting playing partnerships, regular weekend social hits, and several doubles pairs who now compete together in Nairobi club tournaments. Group classes are one of the most popular ways for Nairobi's professional community to stay active, competitive, and social during a busy working week.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Pricing</h3>
                <p>
                  Adults: Ksh 2,000 per session. Juniors (under 18): Ksh 1,200 per session. A minimum of three players is required for a group class to run. Payment is accepted via M-Pesa, Visa/Mastercard, and bank transfer, and is required in advance. Contact Coach Ronax via WhatsApp on +254 799 756 831 for current available times at your preferred venue and to confirm your place in the next session.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Combining Group Classes With Other Programmes</h3>
                <p>
                  Many Revolution Tennis players combine group classes with private lessons or the 10 Session Pack for accelerated development. Group classes provide the court time, competitive engagement, and drilling partners that build consistency and match toughness. Private sessions allow Coach Ronax to address individual technical weaknesses with focused, dedicated attention. Players who combine both formats typically develop significantly faster than those in either format alone. If you are enrolled in the junior after-school programme, weekend group sessions are an excellent supplement to increase your child's weekly court time.
                </p>
              </div>

              <div className="mt-24">
                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide mb-10">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">How much do group tennis classes cost in Nairobi?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      Adults pay Ksh 2,000 per session. Juniors under 18 pay Ksh 1,200 per session. A minimum of three players is required for a group class to run.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">How many players are in a group class?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      A minimum of three players is required. Sessions are capped to keep every participant active and ensure individual coaching attention throughout the session.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">Do I need a partner to join a group class?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      No. You can join as an individual. Coach Ronax manages pairings and rotations on the day. Many Revolution Tennis group regulars began as individuals and found their regular playing partners through the programme.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">Can I try one class before committing?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      Yes. Drop-in attendance is welcome. Confirm availability with Coach Ronax via WhatsApp the day before to ensure there is space in your preferred session.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">Are group classes suitable for players returning after a long break?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      Absolutely. The intermediate group is well-suited to players returning after several years away from school or university tennis. Coach Ronax quickly identifies residual technique and rebuilds match-ready skills efficiently.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <aside className="w-full lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm">
                    <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-8 text-brand-black">Class Details</h4>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4">
                            <Users size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Group Size</span>
                                <span className="text-[14px] font-medium">Min 3 Players / Capped Max</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <Calendar size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Levels</span>
                                <span className="text-[14px] font-medium">Beginner, Intermediate, Advanced</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <MapPin size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Venues</span>
                                <span className="text-[14px] font-medium leading-tight">Parklands, Upper Hill, Karura</span>
                            </div>
                        </li>
                    </ul>
                  </div>

                  <div className="bg-brand-dark p-8 rounded-sm text-white">
                      <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-4">Investment</h4>
                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                           <span className="text-sm font-light opacity-60">Adults</span>
                           <span className="font-barlow text-xl font-bold">Ksh 2,000</span>
                        </div>
                        <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                           <span className="text-sm font-light opacity-60">Juniors</span>
                           <span className="font-barlow text-xl font-bold">Ksh 1,200</span>
                        </div>
                      </div>
                      <BookNowButton 
                        program="Group Classes"
                        className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[11px] tracking-[0.2em] px-8 py-4 rounded-full uppercase transition-all shadow-lg shadow-brand-green/20"
                      />
                  </div>

                  <div className="bg-gray-900 p-8 rounded-sm text-white">
                      <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Smartphone size={18} className="text-brand-green" />
                        WhatsApp
                      </h4>
                      <p className="font-dm text-sm font-light mb-6 opacity-70">
                        Check class availability for your level.
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
