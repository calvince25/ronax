import React from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import Link from 'next/link';

export default function CoachingHub() {
  const categories = [
    {
      title: 'Private Lessons',
      description: 'Personalized 1-on-1 coaching to accelerate your technical and tactical development.',
      image: 'https://images.unsplash.com/photo-1773081364166-74db8910af47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NzY3NTU3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/coaching/private-lessons'
    },
    {
      title: 'Group Classes',
      description: 'Social and competitive drills for all levels. Learn in a dynamic group environment.',
      image: 'https://images.unsplash.com/photo-1634567220268-20d009b11910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBncm91cHxlbnwxfHx8fDE3NzY3NTU3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/coaching/group-classes'
    },
    {
      title: 'Junior Program',
      description: 'Structured youth development from ages 5-17. Building the future of Kenyan tennis.',
      image: 'https://images.unsplash.com/photo-1627341398579-2d128de1dc8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWQlMjB0ZW5uaXN8ZW58MXx8fHwxNzc2NzU1NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/coaching/junior-tennis'
    },
    {
      title: 'Adult Beginners',
      description: "It's never too late to start. Master the basics and start playing matches quickly.",
      image: 'https://images.unsplash.com/photo-1542144582-1ba0045d45e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXNlcnxlbnwxfHx8fDE3NzY3NTU3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/coaching/adult-beginners'
    },
    {
      title: 'Advanced Training',
      description: 'Intensive drills and high-performance strategy for competitive tournament players.',
      image: 'https://images.unsplash.com/photo-1634090213390-9f4b0dc4b09b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdGVubmlzJTIwcGxheWVyJTIwY3JvdWNoaW5nJTIwYXQlMjBuZXQlMjBkYXJrfGVufDF8fHx8MTc3Njc1NDgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/coaching/advanced-training'
    },
    {
      title: 'Tennis Camps',
      description: 'Holiday intensives combining technical training, fitness, and team competition.',
      image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydHxlbnwxfHx8fDE3NzY3NTU3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/coaching/tennis-camps'
    }
  ];

  return (
    <>
      <div className="relative w-full h-[50vh] min-h-[400px] bg-brand-dark flex items-center">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1773081364166-74db8910af47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NzY3NTU3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Tennis facility"
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-[#1A2E1A]/60"></div>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-8 md:px-12 text-center">
          <h1 className="text-white font-barlow text-[64px] md:text-[80px] font-bold uppercase tracking-tight leading-[0.95] mb-6">
            Tennis Coaching <br />
            <span className="text-brand-green">Programs In Nairobi</span>
          </h1>
          <div className="w-12 h-1 bg-brand-green mb-8 mx-auto"></div>
          <p className="text-white/80 font-dm text-[16px] max-w-2xl font-light leading-relaxed mx-auto">
            From your very first rally to tournament-level performance. Find the perfect program to elevate your game on court.
          </p>
        </div>
      </div>

      <div className="py-32 px-8 md:px-12 bg-brand-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {categories.map((item, index) => (
              <div key={index} className="flex flex-col group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden mb-8 rounded-sm">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-500"></div>
                </div>
                <h3 className="font-barlow text-3xl font-bold uppercase tracking-wide text-brand-black mb-4 group-hover:text-brand-green transition-colors">
                  {item.title}
                </h3>
                <p className="font-dm text-gray-500 text-[14px] leading-relaxed mb-8 flex-grow font-light">
                  {item.description}
                </p>
                <Link href={item.link} className="flex items-center gap-3 font-dm font-bold text-[11px] tracking-[0.2em] uppercase text-brand-black hover:text-brand-green transition-colors">
                  <span>View Program Details</span>
                  <div className="w-8 h-[1px] bg-current"></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-brand-dark py-24 px-8 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-white font-barlow text-[48px] font-bold uppercase mb-8 leading-[1.1]">
            Not sure which <span className="text-brand-green">program is right</span> for you?
          </h2>
          <p className="text-white/70 font-dm text-lg mb-12 font-light">
            Book a complimentary 20-minute assessment with Coach Ronax to evaluate your skill level.
          </p>
          <Link href="/contact" className="inline-block bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[12px] tracking-[0.15em] px-10 py-5 rounded-full uppercase transition-all shadow-lg shadow-brand-green/20">
            Schedule Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
