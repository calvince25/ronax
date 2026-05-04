import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.revolutiontennis.co.ke/about/coach-ronax",
  },
};

export default function AboutCoach() {
  return (
    <>
      <div className="relative w-full h-[60vh] min-h-[500px] bg-brand-black flex items-center">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1661474974389-2c1ad53c9ab0?q=80&w=1440"
            alt="Tennis player celebration"
            fill
            priority
            className="object-cover opacity-80"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-dark/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-brand-dark/40"></div>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-8 md:px-12">
          <h1 className="text-white font-barlow text-[64px] md:text-[84px] font-bold uppercase tracking-tight leading-[0.9] mb-6 max-w-4xl">
            The Passion Behind <br />
            <span className="text-brand-green">Revolution Tennis</span>
          </h1>
          <div className="w-12 h-1 bg-brand-green mb-8"></div>
          <p className="text-white/80 font-dm text-[16px] max-w-xl font-light leading-relaxed">
            Meet Coach Ronax — teaching technique, discipline, and the love of the game on the most picturesque courts in Nairobi.
          </p>
        </div>
      </div>

      <div className="py-32 px-8 md:px-12 bg-brand-white">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-start gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <h2 className="font-barlow text-[52px] leading-[1.1] font-bold text-brand-black mb-10 uppercase tracking-normal">
               About Coach Ronax
            </h2>
            <div className="space-y-6 font-dm text-gray-600 text-[16px] leading-[1.8] font-light">
              <p>
                As one of Nairobi's most respected tennis professionals, Coach Ronax has spent over 15 years perfecting a coaching methodology that balances rigid technical discipline with the fluid enjoyment of the sport.
              </p>
              <p>
                His journey started with a simple belief: that tennis is more than just a game—it's a vehicle for personal growth, health, and community. Today, he operates at several premium venues across Westlands and Karen, bringing international standards to the local scene.
              </p>
              <p className="font-medium text-brand-black">
                "My mission is to help every student, from a 5-year-old picking up their first racket to a competitive veteran, find their unique technical rhythm."
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                   <h4 className="font-barlow text-brand-green text-xl font-bold uppercase mb-2">Philosophy</h4>
                   <p className="text-sm text-gray-500 font-light leading-relaxed">Mechanics-first training paired with tactical pattern development.</p>
                </div>
                <div>
                   <h4 className="font-barlow text-brand-green text-xl font-bold uppercase mb-2">Expertise</h4>
                   <p className="text-sm text-gray-500 font-light leading-relaxed">Junior development, biomechanical correction, and high-performance drills.</p>
                </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full h-[500px] overflow-hidden rounded-sm shadow-2xl z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1634090213390-9f4b0dc4b09b?q=80&w=1080"
                alt="Coach Ronax on court"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-green flex items-center justify-center p-8 text-white z-20 hidden md:flex">
                <span className="font-barlow text-[11px] font-bold tracking-[0.2em] leading-tight uppercase">Certified by the Kenya Tennis Federation</span>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-brand-white pb-32 px-8 md:px-12">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="w-full mb-16">
              <h2 className="font-barlow text-[42px] font-bold text-brand-black uppercase mb-4">Our Core Values</h2>
              <div className="w-12 h-1 bg-brand-green"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { title: "EXCELLENCE", text: "We strive for technical perfection in every stroke and tactical precision in every match." },
                 { title: "INTEGRITY", text: "Sportsmanship and fair play are at the heart of everything we teach on court." },
                 { title: "COMMUNITY", text: "We believe in building a vibrant, supportive community of tennis lovers across Kenya." }
               ].map((v, i) => (
                 <div key={i} className="bg-gray-50 p-10 rounded-sm border border-gray-100 group hover:border-brand-green transition-colors">
                    <h3 className="font-barlow text-2xl font-bold mb-4 tracking-wider group-hover:text-brand-green transition-colors">{v.title}</h3>
                    <p className="font-dm text-gray-500 text-sm leading-relaxed font-light">{v.text}</p>
                 </div>
               ))}
            </div>
          </div>
      </section>

      <section className="bg-brand-green py-20 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-white font-barlow text-[42px] font-bold uppercase leading-none">Ready to start your journey?</h2>
          <Link href="/contact" className="bg-brand-dark hover:bg-brand-dark/90 text-white font-bold text-[12px] tracking-[0.15em] px-12 py-5 rounded-full uppercase transition-all shadow-xl">
             Book Your Trial Session
          </Link>
      </section>
    </>
  );
}
