import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Locations.module.css';
import { MapPin, Clock, Trees, Shield } from 'lucide-react';

const KarenLocation = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Tennis Coaching in Karen" 
          subtitle="Serene Private Training" 
        />
        
        <div className={styles.detailGrid}>
          <div className={styles.detailMain}>
            <p className={styles.lead}>
              Experience tennis in the tranquil surroundings of Karen. Our selected private courts offer a serene environment perfect for focused 1-on-1 sessions.
            </p>
            
            <div className={styles.facilityInfo}>
              <h3>Premium Private Courts</h3>
              <p>
                We partner with high-end residences and private clubs in Karen to provide an exclusive training experience. Our Karen hub is preferred by adult beginners and junior students who value privacy and concentration.
              </p>
              
              <div className={styles.amenities}>
                <div className={styles.amenity}>
                  <Trees size={20} />
                  <span>Serene Environment</span>
                </div>
                <div className={styles.amenity}>
                  <Shield size={20} />
                  <span>Exclusive Access</span>
                </div>
                <div className={styles.amenity}>
                  <Clock size={20} />
                  <span>Flexible Booking</span>
                </div>
              </div>
            </div>

            <div className={styles.ctaCard}>
              <h3>Ready to Train in Karen?</h3>
              <p>Book a private session or an initial assessment at our Karen hub.</p>
              <Link href="/book/trial-lesson" className="btn btn-primary">Book Now</Link>
            </div>
          </div>

          <aside className={styles.detailSidebar}>
            <div className={styles.sidebarCard}>
              <h4>Location Details</h4>
              <div className={styles.sidebarItem}>
                <MapPin size={18} />
                <span>Karen, Nairobi</span>
              </div>
              <div className={styles.sidebarItem}>
                <Clock size={18} />
                <span>By Appointment Only</span>
              </div>
              <div className={styles.mapFrame}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.856!2d36.7!3d-1.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b!2sKaren+Nairobi!5e0!3m2!1sen!2ske!4v1234567890" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0, borderRadius: '12px' }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default KarenLocation;
