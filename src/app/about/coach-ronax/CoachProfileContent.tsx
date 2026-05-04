'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import Link from 'next/link';
import { 
  Trophy, 
  Users, 
  MapPin, 
  Calendar, 
  Dumbbell, 
  Target, 
  Brain, 
  GraduationCap, 
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Phone,
  Zap,
  ShieldCheck,
  Star,
  Quote
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

const stats = [
  { label: 'Years of Experience', value: '15+', icon: <Calendar className="w-6 h-6" /> },
  { label: 'Students Coached', value: '500+', icon: <Users className="w-6 h-6" /> },
  { label: 'Training Venues in Nairobi', value: '4', icon: <MapPin className="w-6 h-6" /> },
  { label: 'Age Groups Served', value: 'All (5yrs – 60+)', icon: <Target className="w-6 h-6" /> },
];

const specialties = [
  { 
    title: 'Junior Development', 
    desc: 'Structured programs for children aged 5–17 focusing on technique, coordination, and fun.',
    icon: <Star className="text-brand-green" /> 
  },
  { 
    title: 'Biomechanical Correction', 
    desc: 'Video-supported analysis to fix stroke mechanics and prevent injury.',
    icon: <Zap className="text-brand-green" /> 
  },
  { 
    title: 'High-Performance Drills', 
    desc: 'Competitive players taken through match-intensity training sessions.',
    icon: <Trophy className="text-brand-green" /> 
  },
  { 
    title: 'Tactical Pattern Development', 
    desc: 'Court geometry, shot selection, and match strategy.',
    icon: <Brain className="text-brand-green" /> 
  },
  { 
    title: 'Adult Beginners', 
    desc: 'Zero-judgment, beginner-friendly programs for adults picking up the sport.',
    icon: <Users className="text-brand-green" /> 
  },
  { 
    title: 'Competition Prep', 
    desc: 'Players trained to compete in local and national tournaments.',
    icon: <Target className="text-brand-green" /> 
  },
];

const philosophy = [
  { 
    number: '01',
    title: 'Master the Mechanics', 
    desc: 'Every great rally starts with a perfect stroke. We build from the ground up.' 
  },
  { 
    number: '02',
    title: 'Train the Mind', 
    desc: 'Tennis is 50% mental. Focus, composure, and confidence are coached as deliberately as forehands.' 
  },
  { 
    number: '03',
    title: 'Love the Game', 
    desc: 'Students who enjoy training improve faster. Every session balances discipline with energy and fun.' 
  },
];

const venues = [
  { 
    name: 'Aga Khan, Parklands', 
    location: 'Westlands, Nairobi', 
    note: 'Well-maintained courts in a prestigious setting' 
  },
  { 
    name: 'Public Service Club, Mara Road', 
    location: 'Upper Hill, Nairobi', 
    note: 'Central, accessible, professional club environment' 
  },
  { 
    name: 'Karura Forest Courts', 
    location: 'Limuru Road Entrance, Nairobi', 
    note: 'A unique, scenic setting inside Nairobi\'s beloved forest' 
  },
];

const testimonials = [
  {
    quote: "Coach Ronax took my son from zero to competing in his first tournament in just 8 months. His patience and expertise are unmatched.",
    author: "Parent, Junior Program"
  },
  {
    quote: "I picked up tennis at 40 and thought I'd never get it. Coach Ronax made it fun, progressive, and I'm now playing three times a week.",
    author: "Adult Beginner Student"
  },
  {
    quote: "The biomechanical corrections alone were worth every session. My serve speed went up and my shoulder pain disappeared.",
    author: "Competitive Adult Player"
  }
];

export default function CoachProfileContent() {
  return (
    <div className="bg-brand-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1661474974389-2c1ad53c9ab0?q=80&w=1440"
            alt="Meet Coach Ronax"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/40 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-brand-green font-barlow text-xl font-bold tracking-widest uppercase mb-4 block">
              The Journey of Excellence
            </span>
            <h1 className="text-white text-5xl md:text-8xl font-bold uppercase leading-[0.9] mb-6">
              Meet Coach Ronax — <br />
              <span className="text-brand-green">Nairobi's Premier</span> <br />
              Tennis Coach
            </h1>
            <p className="text-white/80 text-lg md:text-2xl font-dm mb-10 max-w-xl">
              15+ Years. Hundreds of Students. One Mission: Your Best Game.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/book/trial-lesson"
                className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all text-center"
              >
                Book a Trial Session
              </Link>
              <Link 
                href="/coaching"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all text-center"
              >
                View Coaching Programs
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
          >
            <div className="w-1.5 h-1.5 bg-brand-green rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. COACH BIO */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1634090213390-9f4b0dc4b09b?q=80&w=1080"
                  alt="Coach Ronax in Action"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-brand-green p-6 text-white">
                  <p className="font-barlow text-sm tracking-widest uppercase mb-1 opacity-80">Certified Coach</p>
                  <p className="font-barlow text-2xl font-bold uppercase">Kenya Tennis Federation</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8">
                The Legend <span className="text-brand-green">On Court</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Coach Ronax is one of Nairobi's most respected and sought-after tennis coaches, with over 15 years of hands-on experience transforming players of all ages and skill levels. Certified by the Kenya Tennis Federation, Coach Ronax has built a reputation for precision coaching, genuine passion for the sport, and an uncanny ability to unlock potential in every student he works with — from a 5-year-old holding a racket for the first time, to seasoned competitive adults looking to elevate their game.
                </p>
                <p>
                  His coaching philosophy is rooted in a mechanics-first approach: mastering the fundamentals of footwork, grip, swing path, and biomechanics before layering in tactical pattern development. This systematic method ensures students build a technically sound game that holds up under pressure — not just in practice, but on the court when it counts.
                </p>
                <p>
                  Beyond technique, Coach Ronax understands that tennis is a vehicle for personal growth, discipline, mental resilience, and community. His sessions are known for being structured yet energetic, demanding yet encouraging — an environment where students genuinely love to train.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section className="bg-brand-dark py-16 text-white overflow-hidden">
        <div className="container">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="text-center"
              >
                <div className="bg-brand-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-green">
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2 text-brand-green">{stat.value}</h3>
                <p className="text-white/60 font-barlow text-lg tracking-wider uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. SPECIALTIES */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <motion.span 
              {...fadeInUp}
              className="text-brand-green font-barlow text-xl font-bold tracking-widest uppercase mb-4 block"
            >
              What We Excel At
            </motion.span>
            <motion.h2 
              {...fadeInUp}
              className="text-4xl md:text-5xl font-bold uppercase"
            >
              Coaching Specialties
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {specialties.map((specialty, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="mb-6 p-4 bg-brand-green/5 rounded-xl w-fit group-hover:bg-brand-green group-hover:text-white transition-colors">
                  {React.cloneElement(specialty.icon as React.ReactElement, { className: 'w-8 h-8 group-hover:text-white transition-colors' })}
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase">{specialty.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {specialty.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. PHILOSOPHY SECTION */}
      <section className="py-24 md:py-32 bg-brand-dark text-white">
        <div className="container text-center mb-20">
          <motion.h2 {...fadeInUp} className="text-4xl md:text-6xl font-bold uppercase mb-4">
            The Coach Ronax Method
          </motion.h2>
          <div className="w-24 h-1 bg-brand-green mx-auto"></div>
        </div>

        <div className="container">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          >
            {philosophy.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="relative bg-white/5 border border-white/10 p-12 rounded-3xl hover:bg-white/10 transition-colors"
              >
                <span className="text-brand-green/20 text-8xl font-bold absolute top-4 right-8 select-none">
                  {item.number}
                </span>
                <h3 className="text-3xl font-bold mb-6 relative z-10">{item.title}</h3>
                <p className="text-white/60 text-lg leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. TRAINING VENUES SECTION */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <motion.span 
                {...fadeInUp}
                className="text-brand-green font-barlow text-xl font-bold tracking-widest uppercase mb-4 block"
              >
                Convenience & Quality
              </motion.span>
              <motion.h2 
                {...fadeInUp}
                className="text-4xl md:text-5xl font-bold uppercase mb-8"
              >
                Where We Train
              </motion.h2>
              <motion.p {...fadeInUp} className="text-gray-500 text-lg mb-10">
                Premium Courts Across Nairobi. Venue is assigned based on your location and program. Coach Ronax travels across Nairobi to bring world-class coaching to you.
              </motion.p>
              
              <div className="space-y-6">
                {venues.map((venue, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-gray-50 rounded-xl border-l-4 border-brand-green"
                  >
                    <h4 className="text-xl font-bold mb-1">{venue.name}</h4>
                    <p className="text-brand-green font-bold text-sm mb-2 uppercase">{venue.location}</p>
                    <p className="text-gray-500 text-sm italic">{venue.note}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-100 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.364483664797!2d36.8123793!3d-1.2680654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173b2a59e995%3A0xc665e3810c9d691f!2sAga%20Khan%20Sports%20Club!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-2 border-brand-green/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="py-24 md:py-32 bg-brand-green/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase">Student Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="bg-white p-10 rounded-3xl shadow-sm relative"
              >
                <Quote className="w-12 h-12 text-brand-green/10 absolute top-8 right-8" />
                <p className="text-gray-600 text-lg italic mb-8 relative z-10 leading-relaxed">
                  "{t.quote}"
                </p>
                <div>
                  <div className="w-12 h-1 bg-brand-green mb-4"></div>
                  <p className="font-bold text-lg">{t.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CERTIFICATIONS & AFFILIATIONS */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              "Kenya Tennis Federation Certified",
              "15+ Years Active Experience",
              "Junior & Adult Specialist",
              "Available for Corporate Events"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-green w-6 h-6" />
                <span className="font-barlow text-xl font-bold uppercase tracking-wider">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-24 md:py-32 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/10 -skew-x-12 translate-x-1/2"></div>
        
        <div className="container relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-7xl font-bold uppercase mb-8">
              Ready to Start Your <br />
              <span className="text-brand-green">Tennis Journey?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-dm">
              Whether you're a complete beginner or a competitive player, Coach Ronax has a program built for you. Book a no-pressure trial session today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://wa.me/254799756831"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green hover:bg-brand-green/90 text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-green/20"
              >
                <MessageSquare className="w-6 h-6" />
                Book via WhatsApp
              </a>
              <Link 
                href="/coaching"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-full font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-3"
              >
                Explore Coaching Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp for Mobile */}
      <div className="fixed bottom-8 right-8 z-[90] md:hidden">
        <a 
          href="https://wa.me/254799756831"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <Phone className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
