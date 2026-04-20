import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Coaching.module.css';

const PrivateLessons = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Private 1-on-1 Tennis Lessons" 
          subtitle="Personalized Performance" 
        />
        
        <div className={styles.detailWrapper}>
          <div className={styles.detailContent}>
            <p className={styles.lead}>
              Elevate your game with dedicated attention from Coach Ronax. Private lessons are the fastest way to master technique and tactical awareness.
            </p>
            
            <h3>Why Private Lessons?</h3>
            <p>
              In a private setting, every minute is focused on your specific needs. Whether you are correcting a serve, perfecting your backhand, or learning match strategy, 1-on-1 coaching provides the immediate feedback necessary for rapid improvement.
            </p>
            
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <h4>Customized Drills</h4>
                <p>Training sessions designed around your skill level and goals.</p>
              </div>
              <div className={styles.benefit}>
                <h4>Rapid Technical Fixes</h4>
                <p>Immediate correction of biomechanical errors to prevent injury and improve power.</p>
              </div>
              <div className={styles.benefit}>
                <h4>Tactical Mastery</h4>
                <p>Learn how to read opponents and play high-percentage tennis.</p>
              </div>
            </div>

            <div className={styles.pricingSection}>
              <h3>Pricing Packages</h3>
              <div className={styles.priceGrid}>
                <div className={styles.priceCard}>
                  <span className={styles.priceTitle}>Single Session</span>
                  <span className={styles.price}>KES 2,500</span>
                  <p>1 hour of intensive 1-on-1 coaching.</p>
                </div>
                <div className={styles.priceCard}>
                  <span className={styles.priceTitle}>5 Sessions</span>
                  <span className={styles.price}>KES 11,500</span>
                  <p>Save 1,000. Perfect for technique refinement.</p>
                </div>
                <div className={styles.priceCard}>
                  <span className={styles.priceTitle}>10 Sessions</span>
                  <span className={styles.price}>KES 22,000</span>
                  <p>Best value. Complete transformation package.</p>
                </div>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <Link href="/book/trial-lesson" className="btn btn-primary btn-large">
                Book a Private Session
              </Link>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <Image src="/images/private.png" alt="Private Lesson with Ronax" width={400} height={300} className={styles.sidebarImage} />
              <h4>Program Details</h4>
              <ul>
                <li><strong>Durations:</strong> 60 / 90 mins</li>
                <li><strong>Skill Levels:</strong> All Levels</li>
                <li><strong>Ages:</strong> 5 to 75+</li>
                <li><strong>Locations:</strong> Westlands, Karen, Nairobi</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PrivateLessons;
