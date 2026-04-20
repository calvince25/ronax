import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Coaching.module.css';
import { ShieldCheck, Trophy, Target } from 'lucide-react';

const AdvancedTraining = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Advanced & Competitive" 
          subtitle="Precision. Power. Performance." 
        />
        
        <div className={styles.detailWrapper}>
          <div className={styles.detailContent}>
            <div className={styles.imageHeader}>
              <Image 
                src="/images/hero-coach.png" 
                alt="Advanced Training" 
                width={800} 
                height={400} 
                className={styles.mainImg}
              />
            </div>
            
            <p className={styles.lead}>
              For tournament players and high-level recreational athletes. Experience the intensity of professional-grade training.
            </p>
            
            <h3>High-Performance Coaching</h3>
            <p>
              Advanced training moves beyond basic technique and dives into tactical patterns, mental resilience, and physical conditioning. Coach Ronax uses video analysis to identify micro-flaws in strokes and match-play strategy to give you a competitive edge in Nairobi's tennis circuits.
            </p>
            
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <Target size={24} color="var(--primary)" />
                <h4>Tactical Patterns</h4>
                <p>Learning high-percentage tennis and court positioning.</p>
              </div>
              <div className={styles.benefitItem}>
                <Trophy size={24} color="var(--primary)" />
                <h4>Match Simulation</h4>
                <p>Drills that mimic high-pressure tournament situations.</p>
              </div>
              <div className={styles.benefitItem}>
                <ShieldCheck size={24} color="var(--primary)" />
                <h4>Biomechanical Efficiency</h4>
                <p>Optimizing power while minimizing injury risk.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <Link href="/book/trial-lesson" className="btn btn-primary">
                Book Performance Assessment
              </Link>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h4>Entry Requirements</h4>
              <p>Candidates must undergo a 30-minute technical assessment to join the Advanced Squad.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTraining;
