import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../coach-ronax/About.module.css';
import { Award, ShieldCheck, GraduationCap } from 'lucide-react';

const Certifications = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Professional Certifications" 
          subtitle="Expertise You Can Trust" 
        />
        
        <div className={styles.certsGrid}>
          <div className={styles.certCard}>
            <Image 
              src="/images/tennis-ball.png" 
              alt="ITF Logo" 
              width={100} 
              height={100} 
              className={styles.certIconImg}
            />
            <h3>ITF Level 2 Certified</h3>
            <p>Advanced Coaching Certification from the International Tennis Federation, focusing on high-performance athlete development.</p>
          </div>
          <div className={styles.certCard}>
            <GraduationCap size={48} color="var(--primary)" />
            <h3>Sports Science Diploma</h3>
            <p>Deep understanding of biomechanics, nutrition, and injury prevention tailored for racket sports.</p>
          </div>
          <div className={styles.certCard}>
            <ShieldCheck size={48} color="var(--primary)" />
            <h3>First Aid & Safeguarding</h3>
            <p>Fully compliant with international safety standards for working with children and adults.</p>
          </div>
        </div>

        <div className={styles.commitment}>
          <h3>Commitment to Excellence</h3>
          <p>Coach Ronax participates in annual professional development workshops to stay updated with the latest technological and tactical advancements in modern tennis.</p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
