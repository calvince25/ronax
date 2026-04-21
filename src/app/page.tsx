import React from 'react';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

export default function Home() {
  return (
    <>
      <PageHero 
        title="Revolutionary Tennis Coaching"
        subtitle="Nairobi's #1 Tennis Hub"
        description="Train with Ronax, Nairobi's top tennis coach. Private lessons, junior programs & group classes. Book your free trial lesson today."
        imageSrc="https://images.unsplash.com/photo-1634090213390-9f4b0dc4b09b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdGVubmlzJTIwcGxheWVyJTIwY3JvdWNoaW5nJTIwYXQlMjBuZXQlMjBkYXJrfGVufDF8fHx8MTc3Njc1NDgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        height="h-screen"
        textAlign="left"
      >
        <Link href="/contact" className="inline-block bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[12px] tracking-[0.15em] px-10 py-4 rounded-full uppercase transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-brand-green/20">
          Book Free Trial Lesson
        </Link>
      </PageHero>

      <section className="bg-brand-white pt-40 pb-32 px-8 md:px-12 relative z-20 overflow-visible">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-[45%] relative min-h-[400px]">
            <div className="absolute bottom-0 -left-6 w-[110%] h-[120%] max-w-[600px] z-10 hidden md:block">
              <ImageWithFallback
                 src="https://images.unsplash.com/photo-1661474974389-2c1ad53c9ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBwbGF5ZXIlMjBqdW1waW5nJTIwY2VsZWJyYXRpbmd8ZW58MXx8fHwxNzc2NzU0ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                 alt="Tennis player jumping"
                 className="w-full h-full object-cover object-center"
                 style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
              />
            </div>
             <div className="block md:hidden mb-12">
                <ImageWithFallback
                   src="https://images.unsplash.com/photo-1661474974389-2c1ad53c9ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBwbGF5ZXIlMjBqdW1waW5nJTIwY2VsZWJyYXRpbmd8ZW58MXx8fHwxNzc2NzU0ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                   alt="Tennis player jumping"
                   className="w-full h-64 object-cover rounded-lg shadow-xl"
                />
             </div>
          </div>
          
          <div className="w-full md:w-[50%] md:pr-12 relative z-30">
            <h2 className="font-barlow text-[52px] leading-[1.1] font-bold text-brand-black mb-8 uppercase tracking-normal">
              About The Coach
            </h2>
            <p className="font-dm text-brand-black text-[16px] leading-[1.7] mb-6 font-medium max-w-[480px]">
              With its diverse list of members, professional equipment and lots of tidy courts the Revolutionary Tennis club is your perfect getaway.
            </p>
            <p className="font-dm text-gray-500 text-[14px] leading-[1.8] mb-12 font-light max-w-[480px]">
              Renown as one of the country's most outstanding facilities, this complex offers a "home away from home" country club setting for resort visitors and Nairobi residents alike. Experience passionate coaching tailored to all skill levels.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/about/coach-ronax" className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[11px] tracking-[0.15em] px-8 py-4 rounded-full uppercase transition-all shadow-lg shadow-brand-green/20 hover:-translate-y-0.5 inline-block text-center">
                Meet Coach Ronax
              </Link>
              <Link href="/coaching" className="bg-transparent hover:bg-gray-50 border border-gray-200 text-brand-black font-bold text-[11px] tracking-[0.15em] px-8 py-4 rounded-full uppercase transition-all hover:-translate-y-0.5 inline-block text-center">
                Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-green py-24 px-8 md:px-12 relative z-10">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row justify-end">
           <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-12 md:gap-x-24 gap-y-16 w-full md:w-[60%] lg:w-[55%]">
            {[
              { number: '12', label: 'TENNIS COURTS IN NAIROBI' },
              { number: '999+', label: 'STUDENTS TRAINED' },
              { number: '15', label: 'YEARS OF EXPERIENCE' },
              { number: '5', label: 'CERTIFIED PROGRAMS' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col text-left">
                <span className="font-barlow font-normal text-white text-[56px] md:text-[64px] leading-[1] mb-4">{stat.number}</span>
                <div className="w-8 h-[2px] bg-white/40 mb-4"></div>
                <span className="font-dm text-white/90 text-[10px] md:text-[11px] tracking-[0.2em] font-medium uppercase">{stat.label}</span>
              </div>
            ))}
           </div>
        </div>
      </section>

      <section className="bg-brand-white py-32 px-8 md:px-12">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 md:pr-4">
            <h2 className="font-barlow text-[52px] leading-[1.05] text-brand-black mb-8 uppercase tracking-normal flex flex-col">
              <span className="font-light text-gray-800">Do More Than</span>
              <span className="font-bold">Just Playing Tennis</span>
            </h2>
            <p className="font-dm text-brand-black text-[15px] leading-[1.7] mb-6 font-medium max-w-[480px]">
              Discreetly located in the charming neighborhoods of Nairobi, the picturesque scenery that our Tennis Club offers is unmatched.
            </p>
            <p className="font-dm text-gray-500 text-[14px] leading-[1.8] font-light max-w-[480px]">
              Our unique venues have a style and grace that reflects the tranquil beauty of the region. Enjoy structured coaching for kids aged 5–17, adult beginner lessons, competitive player training, and intensive holiday camps.
            </p>
          </div>
          
          <div className="w-full md:w-1/2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1660463529569-17f8c4d16fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb2FjaCUyMGNsYXklMjBjb3VydHxlbnwxfHx8fDE3NzY3NTU4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tennis coach on clay court"
              className="w-full h-auto aspect-[4/3] object-cover rounded-sm"
            />
          </div>
        </div>
      </section>
    </>
  );
}
