'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone, MapPin, BookOpen, MessageSquare, Loader2 } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { supabase } from '@/lib/supabase';
import styles from './BookingModal.module.css';

const BookingModal = () => {
  const { isBookingModalOpen, closeBookingModal, initialProgram } = useBooking();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    program: '',
    message: ''
  });

  useEffect(() => {
    if (initialProgram) {
      setForm(prev => ({ ...prev, program: initialProgram }));
    }
  }, [initialProgram, isBookingModalOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Save to Supabase
      const { error } = await supabase.from('bookings').insert([{
        ...form,
        status: 'pending',
        created_at: new Date().toISOString()
      }]);

      if (error) throw error;

      // 2. Clear form and show success
      setSuccess(true);
      
      // 3. Prepare WhatsApp Message
      const waMessage = `Hi Coach Ronax! I'd like to book a tennis session.%0A%0A*Details:*%0A- Name: ${form.name}%0A- Program: ${form.program}%0A- Location: ${form.location}%0A- Phone: ${form.phone}%0A%0A*Message:*%0A${form.message || 'No additional message.'}`;
      const waLink = `https://wa.me/254799756831?text=${waMessage}`;
      
      // 4. Redirect to WhatsApp after a short delay
      setTimeout(() => {
        window.open(waLink, '_blank');
        closeBookingModal();
        setSuccess(false);
        setForm({ name: '', email: '', phone: '', location: '', program: '', message: '' });
      }, 2000);

    } catch (err: any) {
      alert('Error saving booking: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isBookingModalOpen && (
        <div className={styles.overlay}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={closeBookingModal}>
              <X size={24} />
            </button>

            {success ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>✓</div>
                <h2>Booking Received!</h2>
                <p>We've saved your details. Opening WhatsApp now to connect you with Coach Ronax for instant scheduling...</p>
                <div className={styles.progressBar}>
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: '100%' }} 
                    transition={{ duration: 2 }}
                    className={styles.progressFill} 
                  />
                </div>
              </div>
            ) : (
              <div className={styles.content}>
                <div className={styles.modalHeader}>
                  <h2 className="font-barlow">Book Your Session</h2>
                  <p className="font-dm">Fill in your details and we'll get you on court in no time.</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGrid}>
                    <div className={styles.inputGroup}>
                      <label><User size={14} /> Full Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={form.name} 
                        onChange={handleChange}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label><Mail size={14} /> Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={form.email} 
                        onChange={handleChange}
                        placeholder="email@example.com"
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label><Phone size={14} /> Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        value={form.phone} 
                        onChange={handleChange}
                        placeholder="e.g. +254..."
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label><BookOpen size={14} /> Preferred Program</label>
                      <select name="program" required value={form.program} onChange={handleChange}>
                        <option value="">Select a Program</option>
                        <option value="Private Lessons">Private Lessons</option>
                        <option value="Group Classes">Group Classes</option>
                        <option value="Junior Program">Junior Program</option>
                        <option value="Adult Beginners">Adult Beginners</option>
                        <option value="Advanced Training">Advanced Training</option>
                        <option value="Tennis Camps">Tennis Camps</option>
                      </select>
                    </div>
                    <div className={styles.inputGroup}>
                      <label><MapPin size={14} /> Preferred Location</label>
                      <select name="location" required value={form.location} onChange={handleChange}>
                        <option value="">Select a Location</option>
                        <option value="Westlands">Westlands</option>
                        <option value="Karen">Karen</option>
                        <option value="Riverside">Riverside</option>
                        <option value="Nairobi Club">Nairobi Club</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label><MessageSquare size={14} /> Additional Message (Optional)</label>
                    <textarea 
                      name="message" 
                      rows={3} 
                      value={form.message} 
                      onChange={handleChange}
                      placeholder="Any specific goals or questions?"
                    />
                  </div>

                  <button type="submit" disabled={loading} className={styles.submitBtn}>
                    {loading ? <Loader2 className={styles.spinner} /> : <Send size={18} />}
                    <span>{loading ? 'Processing...' : 'Confirm & Open WhatsApp'}</span>
                  </button>
                  <p className={styles.disclaimer}>
                    By clicking "Confirm", your booking will be saved and you will be redirected to WhatsApp to finalize the schedule with the coach.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
