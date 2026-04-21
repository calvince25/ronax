'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Locations.module.css';
import { MapPin, Clock, Shield, Wifi } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

const WestlandsLocation = () => {
  const { openBookingModal } = useBooking();

  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Tennis Coaching in Westlands" 
          subtitle="Our Primary Hub" 
        />
        
        <div className={styles.detailGrid}>
          <div className={styles.detailMain}>
            <p className={styles.lead}>
              Located in the heart of Westlands, our primary training facility offers professional-grade hard courts and a vibrant tennis community.
            </p>
            
            <div className={styles.facilityInfo}>
              <h3>About the Venue</h3>
              <p>
                Our Westlands location is designed for players who demand the best. With multiple floodlit courts, we offer flexible training hours from early morning to late evening.
              </p>
              
              <div className={styles.amenities}>
                <div className={styles.amenity}>
                  <Shield size={20} />
                  <span>Secure Parking</span>
                </div>
                <div className={styles.amenity}>
                  <Clock size={20} />
                  <span>Floodlit (Night play)</span>
                </div>
                <div className={styles.amenity}>
                  <Wifi size={20} />
                  <span>Clubhouse Access</span>
                </div>
              </div>
            </div>

            <div className={styles.programsHere}>
              <h3>Available Programs</h3>
              <ul>
                <li>Private 1-on-1 Training</li>
                <li>Adult Group Classes (Mon/Wed/Fri)</li>
                <li>Junior Development Clinics</li>
                <li>Competitive Squad Training</li>
              </ul>
            </div>

            <div className={styles.ctaCard}>
              <h3>Ready to Train in Westlands?</h3>
              <p>Book your assessment lesson or a private session today.</p>
              <button 
                onClick={() => openBookingModal('Westlands')}
                className="btn btn-primary cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>

          <aside className={styles.detailSidebar}>
            <div className={styles.sidebarCard}>
              <h4>Location Details</h4>
              <div className={styles.sidebarItem}>
                <MapPin size={18} />
                <span>Westlands Area, Nairobi</span>
              </div>
              <div className={styles.sidebarItem}>
                <Clock size={18} />
                <span>Open: 6:00 AM - 10:00 PM</span>
              </div>
              <div className={styles.mapFrame}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.364489874837!2d36.7972!3d-1.2676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c00000001:0xdeadbeef!2sWestlands+Nairobi!5e0!3m2!1sen!2ske!4v1234567890" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0, borderRadius: '12px' }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>
              <button 
                onClick={() => openBookingModal('Westlands')}
                className="btn btn-primary cursor-pointer" 
                style={{ width: '100%', marginTop: '20px' }}
              >
                Book at Westlands
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default WestlandsLocation;
