'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { supabase } from '@/lib/supabase';
import styles from './Booking.module.css';

const TrialLessonBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    level: 'Beginner',
    location: 'Aga Khan, Parklands',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // 1. Save to Supabase
      const { error } = await supabase
        .from('bookings')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            level: formData.level,
            location: formData.location,
            message: formData.message,
            status: 'pending'
          }
        ]);

      if (error) throw error;

      // 2. Construct WhatsApp Message
      const text = `*New Trial Lesson Booking*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Level:* ${formData.level}%0A*Location:* ${formData.location}%0A*Message:* ${formData.message}`;
      
      const whatsappNumber = '254799756831';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
      
      // 3. Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setStatus({ type: 'success', message: 'Booking saved! Redirecting to WhatsApp...' });
      
      // Clear form
      setFormData({
        name: '',
        phone: '',
        email: '',
        level: 'Beginner',
        location: 'Aga Khan, Parklands',
        message: ''
      });

    } catch (err: any) {
      console.error('Booking Error:', err);
      setStatus({ type: 'error', message: 'Failed to save booking. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Book Your Session" 
          subtitle="Start Your Journey" 
        />
        
        <div className={styles.formWrapper}>
          <div className={styles.formInfo}>
            <h3>What to Expect?</h3>
            <ul>
              <li>60-minute technical assessment</li>
              <li>Equipment provided if needed</li>
              <li>Personalized development plan</li>
              <li>Transparent coaching rates</li>
            </ul>
            <div className={styles.guarantee}>
              <p>Join 200+ students who have elevated their game with Revolutionary Tennis.</p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  placeholder="+254 7XX XXX XXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Skill Level</label>
                <select name="level" value={formData.level} onChange={handleChange}>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Junior (Under 18)</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Preferred Location</label>
                <select name="location" value={formData.location} onChange={handleChange}>
                  <option>Aga Khan, Parklands</option>
                  <option>Public Service Club</option>
                  <option>Karura</option>
                  <option>Other / At my Court</option>
                </select>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Additional Notes</label>
              <textarea 
                name="message" 
                rows={4} 
                placeholder="Tell Coach Ronax about your tennis goals..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            {status && (
              <div className={`${styles.status} ${styles[status.type]}`}>
                {status.message}
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary btn-large" 
              style={{ width: '100%' }}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Book Session via WhatsApp'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrialLessonBooking;
