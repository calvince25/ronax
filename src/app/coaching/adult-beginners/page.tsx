import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Coaching.module.css';
import { Target, Zap, Clock } from 'lucide-react';

const AdultBeginners = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Adult Beginners" 
          subtitle="Start Your Tennis Journey Today" 
        />
        
        <div className={styles.detailWrapper}>
          <div className={styles.detailContent}>
            <div className={styles.imageHeader}>
              <Image 
                src="/images/tennis-ball.png" 
                alt="Tennis Ball Macro" 
                width={800} 
                height={400} 
                className={styles.mainImg}
              />
            </div>
            
            <p className={styles.lead}>
              It is never too late to pick up a racket. Our Adult Beginner program is designed to take you from zero to rally in record time.
            </p>
            
            <h3>Designed for New Players</h3>
            <p>
              We understand that starting a new sport as an adult can be intimidating. That is why Coach Ronax uses a simplified, mechanics-first approach. We focus on the most important fundamentals: contact point, balance, and follow-through.
            </p>
            
            <div className={styles.gridFeatures}>
              <div className={styles.gridItem}>
                <Target size={24} color="var(--primary)" />
                <h4>Technical Foundations</h4>
                <p>Master the 3 core shots: Serve, Forehand, and Backhand.</p>
              </div>
              <div className={styles.gridItem}>
                <Zap size={24} color="var(--primary)" />
                <h4>Cardio & Fitness</h4>
                <p>Get a full-body workout while learning a lifelong skill.</p>
              </div>
              <div className={styles.gridItem}>
                <Clock size={24} color="var(--primary)" />
                <h4>Flexible Hours</h4>
                <p>Weekend and evening slots available for busy professionals.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <Link href="/book/trial-lesson" className="btn btn-primary">
                Book Trial Lesson
              </Link>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h4>Beginner FAQ</h4>
              <ul className={styles.faqList}>
                <li><strong>Do I need my own racket?</strong> No, we provide premium rackets for rent or sale.</li>
                <li><strong>What should I wear?</strong> Comfortable athletic wear and non-marking tennis shoes.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AdultBeginners;
