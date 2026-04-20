'use client';

import React from 'react';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Programs from '@/components/sections/Programs';
import WhyRonax from '@/components/sections/WhyRonax';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      
      <Programs />
      
      <WhyRonax />

      {/* Locations Section */}
      <section className="section" id="locations">
        <div className="container">
          <SectionHeading 
            title="Where We Train" 
            subtitle="Locations Across Nairobi" 
          />
          <div className={styles.locationsGrid}>
            <div className={styles.locationCard}>
              <div className={styles.locationImgWrapper}>
                <Image src="/images/tennis-ball.png" alt="Tennis Ball" fill className={styles.locImg} />
              </div>
              <div className={styles.locationInfo}>
                <h3>Westlands</h3>
                <p>Nairobi's premium tennis hub. High-quality hard courts with professional lighting.</p>
                <Link href="/locations/westlands" className={styles.locationLink}>View Location Details</Link>
              </div>
            </div>
            <div className={styles.locationCard}>
              <div className={styles.locationImgWrapper}>
                <Image src="/images/hero-coach.png" alt="Coach" fill className={styles.locImg} />
              </div>
              <div className={styles.locationInfo}>
                <h3>Karen</h3>
                <p>Private and serene training environments. Perfect for focused 1-on-1 sessions.</p>
                <Link href="/locations/karen" className={styles.locationLink}>View Location Details</Link>
              </div>
            </div>
            <div className={styles.locationCard}>
              <div className={styles.locationImgWrapper}>
                <Image src="/images/private.png" alt="Private Court" fill className={styles.locImg} />
              </div>
              <div className={styles.locationInfo}>
                <h3>Nairobi CBD</h3>
                <p>Accessible city locations for quick morning or evening training sessions.</p>
                <Link href="/locations/nairobi" className={styles.locationLink}>View Location Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Start Your Tennis Journey Today</h2>
            <p>Don't wait to improve your game. Book your first session with Coach Ronax today.</p>
            <div className={styles.ctaButtons}>
              <Link href="/book/trial-lesson" className="btn btn-primary btn-large">
                Book Free Trial Lesson
              </Link>
              <Link href="/contact" className="btn btn-outline btn-outline-white">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}
