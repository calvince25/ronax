import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import styles from './Locations.module.css';
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';

const locations = [
  {
    name: 'Westlands',
    address: 'Westlands, Nairobi, Kenya',
    description: 'Our primary hub featuring high-quality hard courts and excellent facilities.',
    link: '/locations/westlands',
    mapUrl: 'https://maps.google.com/?q=Westlands+Tennis+Courts'
  },
  {
    name: 'Karen',
    address: 'Karen, Nairobi, Kenya',
    description: 'Private and serene courts perfect for focused 1-on-1 training and junior clinics.',
    link: '/locations/karen',
    mapUrl: 'https://maps.google.com/?q=Karen+Tennis+Courts'
  },
  {
    name: 'Nairobi CBD / Upper Hill',
    address: 'Nairobi, Kenya',
    description: 'Centrally located courts easily accessible for office hours and weekend sessions.',
    link: '/locations/nairobi',
    mapUrl: 'https://maps.google.com/?q=Nairobi+Upper+Hill+Tennis'
  }
];

const LocationsHub = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Where to Find Us in Nairobi" 
          subtitle="Our Training Locations" 
        />
        
        <div className={styles.grid}>
          {locations.map((loc, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.content}>
                <div className={styles.iconBox}><MapPin size={24} /></div>
                <h3 className={styles.title}>{loc.name}</h3>
                <p className={styles.address}>{loc.address}</p>
                <p className={styles.description}>{loc.description}</p>
                <div className={styles.actions}>
                  <Link href={loc.link} className={styles.link}>
                    View Court Details <ArrowRight size={18} />
                  </Link>
                  <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
                    Google Maps <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.infoBox}>
          <h3>Want Coach Ronax at Your Court?</h3>
          <p>We also offer mobile coaching services at private residences and community courts across Nairobi. Contact us for details.</p>
          <Link href="/contact" className="btn btn-outline">Inquire About Home Sessions</Link>
        </div>
      </div>
    </div>
  );
};

export default LocationsHub;
