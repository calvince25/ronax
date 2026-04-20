import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Image from 'next/image';
import styles from '../coach-ronax/About.module.css';

import { supabase } from '@/lib/supabase';

export const revalidate = 60;

const Gallery = async () => {
  const { data: images } = await supabase.from('gallery').select('*').order('display_order', { ascending: true }).order('created_at', { ascending: false });
  const galleryImages = images?.length ? images : [
    { image_url: '/images/hero-coach.png', alt_text: 'Coach Ronax Portrait' },
    { image_url: '/images/private.png', alt_text: 'Private Lesson Session' },
    { image_url: '/images/junior.png', alt_text: 'Junior Practice' },
    { image_url: '/images/group-class.png', alt_text: 'Group Class' },
    { image_url: '/images/tennis-ball.png', alt_text: 'Tennis Core Focus' },
  ];
  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Training Gallery" 
          subtitle="Revolutionary Moments on Court" 
        />
        
        <div className={styles.galleryGrid}>
          {galleryImages.map((img, i) => (
            <div key={img.id || i} className={styles.galleryItem}>
              <Image 
                src={img.image_url} 
                alt={img.alt_text || 'Gallery Image'} 
                fill 
                className={styles.galleryImg} 
              />
              <div className={styles.galleryOverlay}>
                <span>{img.alt_text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
