import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from './About.module.css';
import { Trophy, Award, Users, Star, Quote } from 'lucide-react';

const CoachRonax = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Meet Coach Ronax" 
          subtitle="The Visionary Behind Revolutionary Tennis" 
        />
        
        <div className={styles.heroSection}>
          <div className={styles.heroImageWrapper}>
            <Image 
              src="/images/hero.png" 
              alt="Coach Ronax in Action" 
              fill 
              className={styles.heroImage}
            />
          </div>
          <div className={styles.heroContent}>
            <h3>A Passion for Modern Tennis</h3>
            <p className={styles.lead}>
              With over 8 years of professional coaching experience, Ronax has dedicated his career to bringing world-class training methods to Nairobi's tennis community.
            </p>
            <p>
              Certified by the International Tennis Federation (ITF), Ronax specializes in technical correction, match strategy, and youth development. His "Revolutionary" approach focuses on biomechanical efficiency and mental toughness.
            </p>
            <div className={styles.stats}>
              <div className={styles.statBox}>
                <span className={styles.statVal}>200+</span>
                <span className={styles.statLab}>Students Trained</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statVal}>8+</span>
                <span className={styles.statLab}>Years Exp.</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statVal}>ITF</span>
                <span className={styles.statLab}>Certified</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.philosophy}>
          <div className={styles.quoteBlock}>
            <Quote size={40} className={styles.quoteIcon} />
            <blockquote>
              Tennis is 90% mental and 10% physical. My goal is to build athletes who are not only technically sound but also psychologically resilient. Every student has a unique rhythm, and my job is to find it.
            </blockquote>
            <cite>— Coach Ronax</cite>
          </div>
        </div>

        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <Trophy size={32} />
            <h4>Playing Background</h4>
            <p>Former competitive player with deep insights into tournament pressure and match tactics.</p>
          </div>
          <div className={styles.detailCard}>
            <Award size={32} />
            <h4>Certifications</h4>
            <p>ITF Level 1 & 2, Professional Development Credits from world-leading academies.</p>
          </div>
          <div className={styles.detailCard}>
            <Users size={32} />
            <h4>Coaching Style</h4>
            <p>Encouraging, disciplined, and strictly evidence-based. No fluff, just results.</p>
          </div>
        </div>

        <div className={styles.finalCta}>
          <h3>Ready to Train with the Best?</h3>
          <Link href="/book/trial-lesson" className="btn btn-primary btn-large">
            Book a Session with Ronax
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoachRonax;
