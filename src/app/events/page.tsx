'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import PageHero from '@/components/ui/PageHero';
import CountdownTimer from '@/components/events/CountdownTimer';
import EventBookingModal from '@/components/events/EventBookingModal';
import { MapPin, Calendar, Users, DollarSign, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

const EventsPage = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('status', 'upcoming')
        .order('date', { ascending: true });
      
      if (!error && data) {
        setEvents(data);
      }
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return (
    <>
      <PageHero 
        title="Upcoming Events"
        subtitle="Tennis Experiences"
        description="Join our tournaments, clinics, and social sessions. Competition and community, all on the court."
        imageSrc="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2000"
      />

      <div className="py-24 pb-40 px-8 md:px-12 bg-brand-white">
        <div className="max-w-[1440px] mx-auto w-full">
          
          {loading ? (
            <div className="text-center py-20 text-gray-500 font-dm italic">Loading upcoming events...</div>
          ) : events.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
               <Calendar className="mx-auto text-gray-200 mb-6" size={64} />
               <h3 className="font-barlow text-2xl font-bold uppercase text-brand-dark mb-2">No Events Scheduled</h3>
               <p className="text-gray-500 font-dm max-w-xs mx-auto">We're planning our next big event. Check back soon or subscribe to our newsletter!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {events.map((event) => (
                <div key={event.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row">
                   <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                      <ImageWithFallback 
                        src={event.image_url || 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800'} 
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/0 transition-colors duration-500"></div>
                   </div>

                   <div className="w-full md:w-3/5 p-8 flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                         <div>
                            <span className="text-[10px] font-bold text-brand-green uppercase tracking-[0.2em] mb-2 block">Upcoming Event</span>
                            <h3 className="font-barlow text-3xl font-bold uppercase text-brand-dark leading-tight group-hover:text-brand-green transition-colors">{event.title}</h3>
                         </div>
                      </div>

                      <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                         <CountdownTimer targetDate={event.date} />
                      </div>

                      <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-10">
                         <div className="flex items-center gap-3 text-gray-500">
                            <Calendar size={16} className="text-brand-green" />
                            <span className="text-[13px] font-medium">{new Date(event.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                         </div>
                         <div className="flex items-center gap-3 text-gray-500">
                            <Clock size={16} className="text-brand-green" />
                            <span className="text-[13px] font-medium">{new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                         </div>
                         <div className="flex items-center gap-3 text-gray-500 col-span-2">
                            <MapPin size={16} className="text-brand-green" />
                            <span className="text-[13px] font-medium">{event.location}</span>
                         </div>
                      </div>

                      <div className="mt-auto flex items-center justify-between">
                         <div className="flex flex-col">
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">From</span>
                            <span className="font-barlow text-2xl font-bold text-brand-dark">Ksh {event.price_individual}</span>
                         </div>
                         <button 
                            onClick={() => setSelectedEvent(event)}
                            className="bg-brand-dark hover:bg-black text-white font-bold text-[10px] tracking-[0.2em] px-8 py-4 rounded-full uppercase transition-all shadow-lg flex items-center gap-3 group/btn"
                         >
                            <span>Book Now</span>
                            <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                         </button>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedEvent && (
        <EventBookingModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </>
  );
};

export default EventsPage;
