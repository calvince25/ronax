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
    level: '',   // renamed from 'program' to match DB column
    message: ''
  });

  useEffect(() => {
    if (initialProgram) {
      setForm(prev => ({ ...prev, level: initialProgram }));
    }
  }, [initialProgram, isBookingModalOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Save to Supabase using 'level' column which exists in the schema
      const { error } = await supabase.from('bookings').insert([{
        name: form.name,
        email: form.email,
        phone: form.phone,
        location: form.location,
        level: form.level,
        message: form.message,
        status: 'pending',
      }]);

      if (error) throw error;

      // 2. Clear form and show success
      setSuccess(true);

      // 3. Prepare WhatsApp Message
      const waMessage = `Hi Coach Ronax! I'd like to book a tennis session.%0A%0A*Details:*%0A- Name: ${form.name}%0A- Program: ${form.level}%0A- Location: ${form.location}%0A- Phone: ${form.phone}%0A%0A*Message:*%0A${form.message || 'No additional message.'}`;
      const waLink = `https://wa.me/254799756831?text=${waMessage}`;

      // 4. Redirect to WhatsApp after a short delay
      setTimeout(() => {
        window.open(waLink, '_blank');
        closeBookingModal();
        setSuccess(false);
        setForm({ name: '', email: '', phone: '', location: '', level: '', message: '' });
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
        <div className={styles.overlay} onClick={closeBookingModal}>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className={styles.closeBtn} onClick={closeBookingModal} aria-label="Close modal">
              <X size={20} />
            </button>

            {success ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>✓</div>
                <h2>Booking Received!</h2>
                <p>Opening WhatsApp now to connect you with Coach Ronax...</p>
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
                  <p className="font-dm">Fill in your details and we'll get you on court.</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGrid}>
                    <div className={styles.inputGroup}>
                      <label><User size={13} /> Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label><Phone size={13} /> Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+254 7XX XXX XXX"
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label><Mail size={13} /> Email Address</label>
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
                      <label><MapPin size={13} /> Preferred Location</label>
                      <select name="location" required value={form.location} onChange={handleChange}>
                        <option value="">Select Location</option>
                        <option value="Westlands">Westlands</option>
                        <option value="Karen">Karen</option>
                        <option value="Riverside">Riverside</option>
                        <option value="Nairobi Club">Nairobi Club</option>
                      </select>
                    </div>
                    <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                      <label><BookOpen size={13} /> Preferred Program</label>
                      <select name="level" required value={form.level} onChange={handleChange}>
                        <option value="">Select a Program</option>
                        <option value="Private Lessons">Private Lessons</option>
                        <option value="Group Classes">Group Classes</option>
                        <option value="Junior Program">Junior Program</option>
                        <option value="Adult Beginners">Adult Beginners</option>
                        <option value="Advanced Training">Advanced Training</option>
                        <option value="Tennis Camps">Tennis Camps</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label><MessageSquare size={13} /> Message (Optional)</label>
                    <textarea
                      name="message"
                      rows={2}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any specific goals or questions?"
                    />
                  </div>

                  <button type="submit" disabled={loading} className={styles.submitBtn}>
                    {loading ? <Loader2 className={styles.spinner} size={18} /> : <Send size={16} />}
                    <span>{loading ? 'Processing...' : 'Confirm & Open WhatsApp'}</span>
                  </button>
                  <p className={styles.disclaimer}>
                    Your booking will be saved and you will be redirected to WhatsApp to finalize with Coach Ronax.
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
