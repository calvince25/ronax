'use client';

import React, { useState } from 'react';
import { X, User, Phone, Mail, Users, CheckCircle2, MessageSquare } from 'lucide-react';

interface EventBookingModalProps {
  event: any;
  onClose: () => void;
}

const EventBookingModal = ({ event, onClose }: EventBookingModalProps) => {
  const [bookingType, setBookingType] = useState<'individual' | 'group'>('individual');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    groupSize: 2
  });

  const totalPrice = bookingType === 'individual' 
    ? event.price_individual 
    : event.price_group * form.groupSize;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hi Coach Ronax! I'd like to book the event: *${event.title}*
    
*Details:*
- Name: ${form.name}
- Phone: ${form.phone}
- Booking Type: ${bookingType === 'individual' ? 'Individual' : `Group of ${form.groupSize}`}
- Total Price: Ksh ${totalPrice}

Please confirm my slot. Thanks!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254799756831?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="relative h-24 bg-brand-dark flex items-center justify-center p-6">
          <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
            <X size={24} />
          </button>
          <div className="text-center">
            <span className="text-brand-green text-[10px] font-bold uppercase tracking-widest mb-2 block">Booking for</span>
            <h3 className="text-white font-barlow text-2xl font-bold uppercase leading-tight">{event.title}</h3>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex gap-4 mb-6">
            <button 
              type="button"
              onClick={() => setBookingType('individual')}
              className={`flex-1 py-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                bookingType === 'individual' 
                ? 'border-brand-green bg-brand-green/5 text-brand-dark' 
                : 'border-gray-100 text-gray-400 hover:border-gray-200'
              }`}
            >
              <User size={20} />
              <span className="text-[11px] font-bold uppercase tracking-wider">Individual</span>
              <span className="text-xs font-medium">Ksh {event.price_individual}</span>
            </button>
            <button 
              type="button"
              onClick={() => setBookingType('group')}
              className={`flex-1 py-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                bookingType === 'group' 
                ? 'border-brand-green bg-brand-green/5 text-brand-dark' 
                : 'border-gray-100 text-gray-400 hover:border-gray-200'
              }`}
            >
              <Users size={20} />
              <span className="text-[11px] font-bold uppercase tracking-wider">Group</span>
              <span className="text-xs font-medium">Ksh {event.price_group} / person</span>
            </button>
          </div>

          <div className="space-y-3 mb-6">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                required
                type="text" 
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-brand-green transition-colors"
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                required
                type="tel" 
                placeholder="Phone Number"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-brand-green transition-colors"
                value={form.phone}
                onChange={e => setForm({...form, phone: e.target.value})}
              />
            </div>
            {bookingType === 'group' && (
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="text-sm font-medium text-gray-600">Group Size</span>
                <div className="flex items-center gap-4">
                  <button 
                    type="button"
                    onClick={() => setForm({...form, groupSize: Math.max(2, form.groupSize - 1)})}
                    className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center font-bold"
                  >-</button>
                  <span className="font-bold w-4 text-center">{form.groupSize}</span>
                  <button 
                    type="button"
                    onClick={() => setForm({...form, groupSize: Math.min(10, form.groupSize + 1)})}
                    className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center font-bold"
                  >+</button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6 flex justify-between items-center">
             <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Total to Pay</span>
                <span className="text-2xl font-bold text-brand-dark">Ksh {totalPrice}</span>
             </div>
             <CheckCircle2 className="text-brand-green" size={24} />
          </div>

          <button 
            type="submit"
            className="w-full bg-brand-dark hover:bg-black text-brand-green font-bold text-sm tracking-[0.2em] py-4 rounded-xl uppercase transition-all shadow-xl flex items-center justify-center gap-3"
          >
            <MessageSquare size={18} />
            Confirm via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventBookingModal;
