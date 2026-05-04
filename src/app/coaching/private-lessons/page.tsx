import React from 'react';
import { Metadata } from 'next';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import PageHero from '@/components/ui/PageHero';
import { BookNowButton } from '@/components/booking/BookNowButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Clock, Users, MapPin, Calendar, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Private 1-on-1 Tennis Lessons Nairobi | Coach Ronax",
  description: "Personalised one-on-one tennis coaching with Coach Ronax in Nairobi. Adults Ksh 2,500, Juniors Ksh 1,500. Available at Aga Khan Parklands, Public Service Club, and Karura Forest.",
  alternates: {
    canonical: "https://www.revolutiontennis.co.ke/coaching/private-lessons",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private 1-on-1 Tennis Lessons Nairobi",
    "description": "Personalised one-on-one tennis coaching with Coach Ronax in Nairobi. Adults Ksh 2,500 per session. Juniors Ksh 1,500 per session. Available at Aga Khan Parklands, Public Service Club, and Karura Forest.",
    "provider": {
      "@type": "SportsOrganization",
      "name": "Revolution Tennis",
      "url": "https://www.revolutiontennis.co.ke",
      "telephone": "+254799756831"
    },
    "url": "https://www.revolutiontennis.co.ke/coaching/private-lessons",
    "areaServed": { "@type": "City", "name": "Nairobi" },
    "offers": [
      {
        "@type": "Offer",
        "name": "Private Lesson — Adult",
        "price": "2500",
        "priceCurrency": "KES",
        "description": "60-minute private lesson for adults."
      },
      {
        "@type": "Offer",
        "name": "Private Lesson — Junior",
        "price": "1500",
        "priceCurrency": "KES",
        "description": "60-minute private lesson for juniors under 18."
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do private tennis lessons cost in Nairobi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adults pay Ksh 2,500 per session. Juniors under 18 pay Ksh 1,500 per session. Sessions are 60 minutes at Aga Khan Parklands, Public Service Club Upper Hill, or Karura Forest."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to bring my own racquet to private tennis lessons?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Coach Ronax provides loaner racquets and balls for new students in their first session. From the second session onwards you are encouraged to bring your own racquet."
        }
      },
      {
        "@type": "Question",
        "name": "How many private tennis lessons before I see improvement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most players see measurable technique improvements within 3–5 sessions and visible match performance changes after 8–12 sessions of consistent weekly training."
        }
      },
      {
        "@type": "Question",
        "name": "Can absolute beginners book private tennis lessons in Nairobi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Private lessons are ideal for beginners who benefit from undivided expert attention on every fundamental stroke from the very first session."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cancellation policy for private tennis lessons?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At least 24 hours notice is required. Cancellations within 12 hours may be charged at 50% of the session fee."
        }
      }
    ]
  }
];

export default function PrivateLessons() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <PageHero 
        title="Private 1-on-1 Tennis Lessons"
        subtitle="Coach Ronax Nairobi"
        description="The single most effective investment you can make in your game. Personalized technique, tactical mastery, and immediate results."
        imageSrc="/images/locations_coaching/private_lessons.jpg"
      />

      <div className="py-24 px-8 md:px-12 bg-brand-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-20">
            
            <div className="w-full lg:w-2/3">
              <h2 className="font-barlow text-[42px] font-bold text-brand-black uppercase mb-8 leading-tight">
                Private 1-on-1 Tennis Lessons in Nairobi with Coach Ronax
              </h2>
              
              <div className="prose max-w-none font-dm text-gray-600 text-[17px] leading-[1.8] font-light space-y-8">
                <p>
                  If you are serious about improving your tennis — whether you are picking up a racquet for the very first time or a competitive club player wanting to sharpen a specific weakness before your next tournament — private one-on-one coaching with Coach Ronax is the single most effective investment you can make in your game. Unlike group training environments where the coach divides attention across several students, a private session is entirely yours. Every drill, every correction, and every tactical conversation is built around your strengths, your weaknesses, and your individual goals.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Why Private Lessons Produce Faster Results</h3>
                <p>
                  Tennis is a sport built on hundreds of micro-decisions and biomechanical patterns that, once ingrained incorrectly, take significant effort to unlearn. The sooner you receive expert, specific feedback on your grip, your stance, your swing path, and your court positioning, the fewer bad habits you cement into your game. Sports science research consistently shows that deliberate practice with immediate, specific feedback produces far greater skill gains than the same number of hours practising without guidance.
                </p>
                <p>
                  Coach Ronax draws on 15 years of professional coaching experience across Nairobi's leading venues — Aga Khan Sports Club in Parklands, Public Service Club in Upper Hill, and the courts at Karura Forest — to deliver high-quality, actionable feedback in every session. He reads your game from the very first warm-up ball and structures the session in real time around what you need most on that day, not a generic curriculum designed for an imaginary average player.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">What Happens During a Private Session</h3>
                <p>
                  A standard 60-minute private lesson with Coach Ronax follows a proven structure while remaining flexible enough to respond to what you bring to the court. Sessions open with a 10-minute dynamic warm-up that activates your movement patterns and immediately surfaces any technical issues in your groundstrokes, footwork, or racquet preparation. The core 40 minutes address your priority focus — your serve mechanics, forehand topspin, net-game approach, movement patterns, or match-play strategy and shot selection. The final 10 minutes move into competitive point play where you apply what you have been working on under simulated match pressure, because technique that only holds up in drills rarely transfers reliably into a real match.
                </p>
                <p>
                  Coach Ronax uses video analysis on request so you can see exactly what your coach sees. This is particularly powerful for serve mechanics and footwork patterns, where your sense of where your body is in space often differs dramatically from what the camera records.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Who Private Lessons Are For</h3>
                <p>
                  Private lessons at Revolution Tennis deliver results at every level. Complete beginners benefit enormously because they learn correct fundamentals from day one rather than spending years unlearning poor technique accumulated during unsupervised recreational play. Intermediate players — those who have played recreationally for one to five years — find that a focused private coaching block breaks through the plateau preventing them from competing with confidence. Advanced and competitive players use private sessions for tournament preparation, targeted work on a specific stroke weakness, or strategic game planning ahead of important matches.
                </p>
                <p>
                  Children from age five upwards are welcome in private lessons. Coach Ronax adapts his coaching style, court setup, and exercise selection to make sessions developmentally appropriate and genuinely engaging for young players while still building technically correct foundations from the start.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Locations and Scheduling</h3>
                <p>
                  Private lessons are available at three premium Nairobi venues. Aga Khan Sports Club in Parklands features international-standard courts in a family-friendly environment, open Monday to Sunday from 6:30 AM to 8:30 PM. Public Service Club on Mara Road in Upper Hill is ideally located for professionals in the CBD and Upperhill corridor, open Monday to Sunday from 7:00 AM to 9:00 PM. Karura Forest courts offer a uniquely refreshing outdoor coaching experience, open Monday to Sunday from 8:00 AM to 6:00 PM. Home coaching at private residential courts is also available — enquire via WhatsApp for availability in your area.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Pricing</h3>
                <p>
                  Adults: Ksh 2,500 per session. Juniors (under 18): Ksh 1,500 per session. New students can book a first technical assessment session at the standard session rate for their category. For players committed to consistent development, the 10 Session Pack offers the best per-session value — see the 10 Session Pack page for full details. Payment is accepted via M-Pesa, Visa/Mastercard, and bank transfer, and is required in advance to secure your court slot and coaching time.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">How to Book</h3>
                <p>
                  Contact Coach Ronax directly via WhatsApp on +254 799 756 831 or use the Book Now button on this page. Share your preferred date, time, location, and a brief description of your current playing level. Coach Ronax responds within a few hours to confirm availability and send you everything you need ahead of your first session.
                </p>

                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide pt-8">Why Revolution Tennis Is Nairobi's First Choice</h3>
                <p>
                  With 999+ students trained, 15 years of coaching experience, and three premium venues across Nairobi, Revolution Tennis has built a reputation as the city's leading tennis coaching hub. Coach Ronax has coached players from complete beginners to national-level competitors, and his ability to identify the root cause of a technical problem and fix it efficiently — rather than simply drilling the symptom — is what sets the Revolution Tennis private lesson experience apart from recreational club coaching. Whether your goal is to play socially with more confidence, compete in club tournaments, or develop your child into a competitive junior, private lessons with Coach Ronax are where that journey begins.
                </p>
              </div>

              <div className="mt-24">
                <h3 className="font-barlow text-[32px] font-bold text-brand-black uppercase tracking-wide mb-10">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">How much do private tennis lessons cost in Nairobi?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      Adults pay Ksh 2,500 per session. Juniors (under 18) pay Ksh 1,500 per session. Sessions are 60 minutes and are available at Aga Khan Parklands, Public Service Club Upper Hill, and Karura Forest.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">Do I need to bring my own racquet?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      Coach Ronax provides loaner racquets and balls for new students in their first session. From your second session onwards you are encouraged to bring your own racquet. After your first lesson you will receive personalised equipment recommendations based on your playing style and goals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">How many lessons before I see real improvement?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      Most players notice measurable improvements in technique within three to five sessions. Visible changes in match performance typically become apparent after eight to twelve sessions of consistent weekly training.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">Can absolute beginners book private lessons?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      Absolutely. Private lessons are ideal for beginners who benefit from undivided expert attention during the learning of every fundamental stroke from the very first session.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="border-b border-gray-100 py-2">
                    <AccordionTrigger className="font-barlow text-lg font-bold uppercase tracking-wide text-left hover:no-underline hover:text-brand-green transition-colors">What is the cancellation policy?</AccordionTrigger>
                    <AccordionContent className="font-dm text-gray-500 text-[16px] leading-relaxed font-light pt-4 pb-6">
                      At least 24 hours' notice is required for cancellations or rescheduling. Cancellations made within 12 hours of the scheduled session may be charged at 50% of the session fee.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <aside className="w-full lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-sm">
                    <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-8 text-brand-black">Session Details</h4>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4">
                            <Clock size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Duration</span>
                                <span className="text-[14px] font-medium">60 Minutes</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <Users size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Format</span>
                                <span className="text-[14px] font-medium">1-on-1 Personalized</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <MapPin size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Venues</span>
                                <span className="text-[14px] font-medium leading-tight">Aga Khan Parklands, Public Service Club, Karura Forest</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <Calendar size={18} className="text-brand-green" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Schedule</span>
                                <span className="text-[14px] font-medium">Mon–Sun, by Appointment</span>
                            </div>
                        </li>
                    </ul>
                  </div>

                  <div className="bg-brand-dark p-8 rounded-sm text-white">
                      <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-4">Investment</h4>
                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                           <span className="text-sm font-light opacity-60">Adults</span>
                           <span className="font-barlow text-xl font-bold">Ksh 2,500</span>
                        </div>
                        <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                           <span className="text-sm font-light opacity-60">Juniors</span>
                           <span className="font-barlow text-xl font-bold">Ksh 1,500</span>
                        </div>
                      </div>
                      <BookNowButton 
                        program="Private Lessons"
                        className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[11px] tracking-[0.2em] px-8 py-4 rounded-full uppercase transition-all shadow-lg shadow-brand-green/20"
                      />
                  </div>

                  <div className="bg-gray-900 p-8 rounded-sm text-white">
                      <h4 className="font-barlow text-xl font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Smartphone size={18} className="text-brand-green" />
                        WhatsApp
                      </h4>
                      <p className="font-dm text-sm font-light mb-6 opacity-70">
                        Quickest way to book is via WhatsApp.
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
