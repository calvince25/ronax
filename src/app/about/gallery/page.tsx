import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Image from 'next/image';
import styles from '../coach-ronax/About.module.css';

const images = [
  { src: '/images/hero-coach.png', alt: 'Coach Ronax Portrait' },
  { src: '/images/private.png', alt: 'Private Lesson Session' },
  { src: '/images/junior.png', alt: 'Junior Practice' },
  { src: '/images/group-class.png', alt: 'Group Class' },
  { src: '/images/tennis-ball.png', alt: 'Tennis Core Focus' },
  { src: '/images/hero-coach.png', alt: 'Technical Assessment' },
];

const Gallery = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Training Gallery" 
          subtitle="Revolutionary Moments on Court" 
        />
        
        <div className={styles.galleryGrid}>
          {images.map((img, i) => (
            <div key={i} className={styles.galleryItem}>
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className={styles.galleryImg} 
              />
              <div className={styles.galleryOverlay}>
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
