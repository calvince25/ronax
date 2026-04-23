import React from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { MapPin, Clock, Calendar } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

export default function Locations() {
  const venues = [
    {
      name: 'Aga Khan, Parklands',
      address: 'Aga Khan Sports Club, Parklands, Nairobi',
      description: 'Our premier location featuring international standard courts and a family-friendly atmosphere in the heart of Parklands.',
      image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydHxlbnwxfHx8fDE3NzY3NTU3OTI8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      hours: 'Mon - Sun: 6:30 AM - 8:30 PM'
    },
    {
      name: 'Public Service Club',
      address: 'Mara Road, Upper Hill, Nairobi',
      description: 'Conveniently located in Upper Hill, providing excellent facilities for professionals and residents alike.',
      image: 'https://images.unsplash.com/photo-1773081364166-74db8910af47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NzY3NTU3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      hours: 'Mon - Sun: 7:00 AM - 9:00 PM'
    },
    {
      name: 'Karura',
      address: 'Karura Forest (Limuru Road Entrance), Nairobi',
      description: 'Experience tennis in the serene environment of Karura Forest. Perfect for a refreshing outdoor session.',
      image: 'https://images.unsplash.com/photo-1634090213390-9f4b0dc4b09b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdGVubmlzJTIwcGxheWVyJTIwY3JvdWNoaW5nJTIwYXQlMjBkYXJrfGVufDF8fHx8MTc3Njc1NDgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      hours: 'Mon - Sun: 8:00 AM - 6:00 PM'
    }
  ];

  return (
    <>
      <PageHero 
        title="Training Locations"
        subtitle="Where We Play"
        description="Experience world-class coaching in the most convenient and beautiful venues across Nairobi. From clay to hard courts, we have you covered."
        imageSrc="https://images.unsplash.com/photo-1660463529569-17f8c4d16fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb2FjaCUyMGNsYXklMjBjb3VydHxlbnwxfHx8fDE3NzY3NTU4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      <div className="py-32 px-8 md:px-12 bg-brand-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="space-y-32">
            {venues.map((venue, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-24`}>
                <div className="w-full md:w-1/2">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm group">
                        <ImageWithFallback
                          src={venue.image}
                          alt={venue.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-6 left-6 bg-brand-green text-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm">
                           PREMIUM VENUE
                        </div>
                    </div>
                </div>
                
                <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-2 text-brand-green mb-6 font-dm font-bold text-[11px] tracking-[0.2em] uppercase">
                        <MapPin size={16} />
                        <span>Nairobi, KE</span>
                    </div>
                    <h2 className="font-barlow text-[48px] leading-[1.1] font-bold text-brand-black mb-8 uppercase tracking-normal">
                       {venue.name}
                    </h2>
                    <p className="font-dm text-brand-black text-[15px] leading-[1.7] mb-8 font-medium">
                       {venue.address}
                    </p>
                    <p className="font-dm text-gray-500 text-[14px] leading-[1.8] mb-12 font-light">
                       {venue.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-8 py-8 border-t border-gray-100">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-green">
                              <Clock size={18} />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Opening Hours</span>
                              <span className="text-[13px] font-medium text-brand-black">{venue.hours}</span>
                           </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-green">
                              <Calendar size={18} />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Availability</span>
                              <span className="text-[13px] font-medium text-brand-black">Year-Round</span>
                           </div>
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-brand-dark py-32 px-8 md:px-12">
          <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 bg-brand-green p-12 md:p-20 rounded-sm">
             <div className="max-w-xl">
                <h2 className="text-white font-barlow text-[42px] md:text-[52px] font-bold uppercase leading-[1.05] mb-6">
                   Can't find a <span className="text-brand-dark">location near you?</span>
                </h2>
                <p className="text-white/90 font-dm text-lg font-light">
                   We also offer home coaching at private residential courts. Inquire about availability in your area.
                </p>
             </div>
             <a href="https://wa.me/254799756831?text=Hi%20Coach%20Ronax%2C%20do%20you%20offer%20home%20coaching%3F" target="_blank" rel="noopener noreferrer" className="bg-brand-dark hover:bg-black text-white font-bold text-[12px] tracking-[0.15em] px-12 py-5 rounded-full uppercase transition-all shadow-2xl shrink-0">
                Inquire Now
             </a>
          </div>
      </section>
    </>
  );
}
