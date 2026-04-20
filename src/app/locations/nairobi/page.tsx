import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Locations.module.css';
import { MapPin, Clock, Buildings } from 'lucide-react';

const NairobiLocation = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Tennis Coaching in Nairobi CBD / Upper Hill" 
          subtitle="Accessible Urban Training" 
        />
        
        <div className={styles.detailGrid}>
          <div className={styles.detailMain}>
            <p className={styles.lead}>
              Ideal for working professionals. Our CBD and Upper Hill locations provide convenient access for morning, lunch-break, or after-work sessions.
            </p>
            
            <div className={styles.facilityInfo}>
              <h3>Central Convenience</h3>
              <p>
                We train at various high-standard club courts in the Upper Hill and CBD peripheral areas. These locations are perfect for those working in the city who want to fit a high-intensity workout into their busy schedule without long commutes.
              </p>
              
              <div className={styles.amenities}>
                <div className={styles.amenity}>
                  <MapPin size={20} />
                  <span>Nairobi Upper Hill</span>
                </div>
                <div className={styles.amenity}>
                  <Clock size={20} />
                  <span>Early Morning Slots</span>
                </div>
              </div>
            </div>

            <div className={styles.ctaCard}>
              <h3>Book Your City Session</h3>
              <p>Get a workout in before the work day starts. Check availability for our Upper Hill courts.</p>
              <Link href="/book/trial-lesson" className="btn btn-primary">Book Now</Link>
            </div>
          </div>

          <aside className={styles.detailSidebar}>
            <div className={styles.sidebarCard}>
              <h4>Location Details</h4>
              <div className={styles.sidebarItem}>
                <MapPin size={18} />
                <span>CBD / Upper Hill, Nairobi</span>
              </div>
              <div className={styles.sidebarItem}>
                <Clock size={18} />
                <span>Open: 6:00 AM - 7:00 PM</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default NairobiLocation;
