'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Contact.module.css';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, redirect to WhatsApp as a primary contact method
    const text = `*New Website Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/254799756831?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Contact Us" 
        />
        
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <div className={styles.iconBox}><Phone size={24} /></div>
              <div>
                <h4>Phone / WhatsApp</h4>
                <p>+254 799 756 831</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.iconBox}><Mail size={24} /></div>
              <div>
                <h4>Email</h4>
                <p>info@revolutionarytennis.co.ke</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.iconBox}><MapPin size={24} /></div>
              <div>
                <h4>Training Locations</h4>
                <p>Westlands, Karen, Nairobi CBD</p>
              </div>
            </div>

            <div className={styles.socialBox}>
              <h4>Follow Us</h4>
              <div className={styles.socials}>
                <a href="#" className={styles.socialLink}>Instagram</a>
                <a href="#" className={styles.socialLink}>Facebook</a>
                <a href="#" className={styles.socialLink}>YouTube</a>
              </div>
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
            <div className={styles.inputGroup}>
              <label>Subject</label>
              <select name="subject" value={formData.subject} onChange={handleChange}>
                <option>General Inquiry</option>
                <option>Private Lessons</option>
                <option>Junior Programs</option>
                <option>Court Locations</option>
                <option>Other</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea 
                name="message" 
                rows={5} 
                required
                placeholder="How can Coach Ronax help you today?"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-large" style={{ width: '100%' }}>
              Send Message <Send size={18} style={{ marginLeft: '10px' }} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
