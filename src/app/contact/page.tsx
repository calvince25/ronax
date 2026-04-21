import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

export default function Contact() {
  return (
    <>
      <PageHero 
        title="Get In Touch"
        subtitle="Contact Us"
        description="Ready to hit the court? Have questions about our coaching programs or locations? Send us a message or contact us directly."
        imageSrc="https://images.unsplash.com/photo-1627341398579-2d128de1dc8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdGVubmlzJTIwcGxheWVyJTIwYXQlMjBuZXR8ZW58MXx8fHwxNzc2NzU1NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      <div className="py-24 pb-40 px-8 md:px-12 bg-brand-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-20">
            
            <div className="w-full lg:w-1/2">
              <h2 className="font-barlow text-[42px] font-bold text-brand-black uppercase mb-4">Send a Message</h2>
              <div className="w-12 h-1 bg-brand-green mb-12"></div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-dm text-[11px] font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                    <input type="text" placeholder="Your Name" className="bg-gray-50 border border-gray-100 p-4 rounded-sm font-dm text-sm focus:outline-none focus:border-brand-green transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-dm text-[11px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <input type="email" placeholder="email@example.com" className="bg-gray-50 border border-gray-100 p-4 rounded-sm font-dm text-sm focus:outline-none focus:border-brand-green transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-dm text-[11px] font-bold uppercase tracking-widest text-gray-500">Subject</label>
                  <select className="bg-gray-50 border border-gray-100 p-4 rounded-sm font-dm text-sm focus:outline-none focus:border-brand-green transition-colors appearance-none">
                    <option>General Inquiry</option>
                    <option>Free Trial Lesson</option>
                    <option>Private Coaching</option>
                    <option>Junior Programs</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-dm text-[11px] font-bold uppercase tracking-widest text-gray-500">Message</label>
                  <textarea rows={5} placeholder="How can we help you?" className="bg-gray-50 border border-gray-100 p-4 rounded-sm font-dm text-sm focus:outline-none focus:border-brand-green transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[12px] tracking-[0.15em] px-10 py-5 rounded-full uppercase transition-all shadow-lg shadow-brand-green/20 w-fit">
                  Send Message
                </button>
              </form>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gray-50 p-10 rounded-sm flex flex-col items-center text-center group hover:bg-brand-dark transition-colors duration-500">
                    <div className="w-16 h-16 bg-brand-green/10 text-brand-green flex items-center justify-center rounded-full mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-500">
                      <Phone size={24} />
                    </div>
                    <h4 className="font-barlow text-[20px] font-bold text-brand-black uppercase mb-2 group-hover:text-white">Call Us</h4>
                    <a href="tel:+254799756831" className="font-dm text-sm text-gray-500 group-hover:text-gray-300 transition-colors">+254 799 756 831</a>
                  </div>

                  <div className="bg-gray-50 p-10 rounded-sm flex flex-col items-center text-center group hover:bg-brand-dark transition-colors duration-500">
                    <div className="w-16 h-16 bg-brand-green/10 text-brand-green flex items-center justify-center rounded-full mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-500">
                      <MessageCircle size={24} />
                    </div>
                    <h4 className="font-barlow text-[20px] font-bold text-brand-black uppercase mb-2 group-hover:text-white">WhatsApp</h4>
                    <a href="https://wa.me/254799756831" target="_blank" rel="noopener noreferrer" className="font-dm text-sm text-gray-500 group-hover:text-gray-300 transition-colors">Chat With Coach Ronax</a>
                  </div>

                  <div className="bg-gray-50 p-10 rounded-sm flex flex-col items-center text-center group hover:bg-brand-dark transition-colors duration-500">
                    <div className="w-16 h-16 bg-brand-green/10 text-brand-green flex items-center justify-center rounded-full mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-500">
                      <Mail size={24} />
                    </div>
                    <h4 className="font-barlow text-[20px] font-bold text-brand-black uppercase mb-2 group-hover:text-white">Email Us</h4>
                    <a href="mailto:info@revolutionarytennis.co.ke" className="font-dm text-sm text-gray-500 group-hover:text-gray-300 transition-colors">info@revolutionarytennis...</a>
                  </div>

                  <div className="bg-gray-50 p-10 rounded-sm flex flex-col items-center text-center group hover:bg-brand-dark transition-colors duration-500">
                    <div className="w-16 h-16 bg-brand-green/10 text-brand-green flex items-center justify-center rounded-full mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-500">
                      <MapPin size={24} />
                    </div>
                    <h4 className="font-barlow text-[20px] font-bold text-brand-black uppercase mb-2 group-hover:text-white">Our Courts</h4>
                    <span className="font-dm text-sm text-gray-500 group-hover:text-gray-300 transition-colors text-xs">Westlands & Karen, Nairobi</span>
                  </div>
               </div>

               <div className="bg-brand-dark text-white p-12 rounded-sm relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="font-barlow text-3xl font-bold uppercase mb-4 tracking-wide">Direct Booking</h3>
                    <p className="font-dm text-white/70 text-sm font-light mb-8 max-w-[320px]">
                      The fastest way to secure a slot is through WhatsApp. Just mention your preferred location and skill level.
                    </p>
                    <a href="https://wa.me/254799756831?text=Hi%20Coach%20Ronax%2C%20I'd%20like%20to%20book%20a%20tennis%20session." className="inline-flex items-center gap-3 bg-brand-green hover:bg-brand-green/90 text-white font-bold text-[11px] tracking-[0.15em] px-8 py-4 rounded-full uppercase transition-all shadow-lg hover:-translate-y-1">
                      <MessageCircle size={18} />
                      <span>Chat On WhatsApp</span>
                    </a>
                  </div>
                  <div className="absolute bottom-[-20%] right-[-10%] opacity-10 rotate-[-15deg]">
                    <Phone size={250} />
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
