'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { X, Users, User, MessageCircle, Check } from 'lucide-react';

interface EventBookingModalProps {
  event: any;
  onClose: () => void;
}

const EventBookingModal: React.FC<EventBookingModalProps> = ({ event, onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    booking_type: 'individual',
    group_size: 1
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const price = formData.booking_type === 'individual' ? event.price_individual : event.price_group;
    const totalPrice = price * (formData.booking_type === 'group' ? formData.group_size : 1);

    // Save to database
    const { error } = await supabase.from('event_bookings').insert([{
      event_id: event.id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      booking_type: formData.booking_type,
      group_size: formData.group_size,
      total_price: totalPrice
    }]);

    if (!error) {
      // Prepare WhatsApp message
      const whatsappNumber = '254799756831';
      const message = `*Event Booking Request*\n\n` +
                      `*Event:* ${event.title}\n` +
                      `*Name:* ${formData.name}\n` +
                      `*Phone:* ${formData.phone}\n` +
                      `*Type:* ${formData.booking_type === 'group' ? `Group (${formData.group_size} people)` : 'Individual'}\n` +
                      `*Total Price:* Ksh ${totalPrice}\n\n` +
                      `Please confirm my booking.`;
      
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
      setStep(2);
    } else {
      alert('Error booking event: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-brand-dark z-10 transition-colors">
          <X size={24} />
        </button>

        {step === 1 ? (
          <div className="p-10">
            <div className="mb-8">
              <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest mb-2 block">Booking for</span>
              <h3 className="font-barlow text-3xl font-bold uppercase text-brand-dark">{event.title}</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                   <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-sm focus:outline-none focus:border-brand-green" placeholder="Your Name" />
                 </div>
                 <div className="flex flex-col gap-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                   <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-sm focus:outline-none focus:border-brand-green" placeholder="+254..." />
                 </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-sm focus:outline-none focus:border-brand-green" placeholder="email@example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Booking Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, booking_type: 'individual'})}
                    className={`flex items-center justify-center gap-3 p-4 rounded-xl border transition-all ${formData.booking_type === 'individual' ? 'bg-brand-green border-brand-green text-white font-bold' : 'bg-gray-50 border-gray-100 text-gray-400'}`}
                  >
                    <User size={18} />
                    <span className="text-sm">Individual</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, booking_type: 'group'})}
                    className={`flex items-center justify-center gap-3 p-4 rounded-xl border transition-all ${formData.booking_type === 'group' ? 'bg-brand-green border-brand-green text-white font-bold' : 'bg-gray-50 border-gray-100 text-gray-400'}`}
                  >
                    <Users size={18} />
                    <span className="text-sm">Group</span>
                  </button>
                </div>
              </div>

              {formData.booking_type === 'group' && (
                <div className="flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-300">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Group Size</label>
                  <input required type="number" min="2" value={formData.group_size} onChange={e => setFormData({...formData, group_size: Number(e.target.value)})} className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-sm focus:outline-none focus:border-brand-green" />
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-brand-dark hover:bg-black text-white font-bold text-[12px] tracking-[0.2em] py-5 rounded-xl uppercase transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? 'Processing...' : (
                  <>
                    <MessageCircle size={18} />
                    <span>Confirm via WhatsApp</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="p-16 text-center">
            <div className="w-20 h-20 bg-brand-green/10 text-brand-green flex items-center justify-center rounded-full mx-auto mb-8">
              <Check size={40} />
            </div>
            <h3 className="font-barlow text-4xl font-bold uppercase text-brand-dark mb-4">Booking Initialized</h3>
            <p className="text-gray-500 font-dm mb-8 leading-relaxed">
              We've redirected you to WhatsApp to complete your booking for <strong>{event.title}</strong>. Please send the pre-filled message to Coach Ronax.
            </p>
            <button 
              onClick={onClose}
              className="bg-brand-green text-white font-bold text-[11px] tracking-[0.2em] px-10 py-4 rounded-full uppercase transition-all shadow-lg shadow-brand-green/20"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventBookingModal;
