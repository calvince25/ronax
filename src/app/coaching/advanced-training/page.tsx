import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Coaching.module.css';
import { ShieldCheck, Trophy, Target } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export const revalidate = 60; // revalidate every minute

const AdvancedTraining = async () => {
  const { data: program } = await supabase.from('programs').select('*').eq('slug', 'advanced-training').single();

  const title = program?.title || "Advanced & Competitive";
  const subtitle = program?.subtitle || "Precision. Power. Performance.";
  const leadDesc = program?.lead_description || "For tournament players and high-level recreational athletes. Experience the intensity of professional-grade training.";
  const mainDesc = program?.main_description || "Advanced training moves beyond basic technique and dives into tactical patterns, mental resilience, and physical conditioning. Coach Ronax uses video analysis to identify micro-flaws in strokes and match-play strategy to give you a competitive edge in Nairobi's tennis circuits.";
  const imageUrl = program?.image_url || "/images/hero-coach.png";

  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title={title} 
          subtitle={subtitle} 
        />
        
        <div className={styles.detailWrapper}>
          <div className={styles.detailContent}>
            <div className={styles.imageHeader}>
              <Image 
                src={imageUrl} 
                alt={title} 
                width={800} 
                height={400} 
                className={styles.mainImg}
              />
            </div>
            
            <p className={styles.lead}>
              {leadDesc}
            </p>
            
            <h3>High-Performance Coaching</h3>
            <p>
              {mainDesc}
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
