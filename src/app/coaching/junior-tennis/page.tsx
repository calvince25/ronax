import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Coaching.module.css';
import { Trophy, Smile, Shield } from 'lucide-react';

const JuniorTennis = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Junior Tennis Programs" 
          subtitle="Building the Next Generation" 
        />
        
        <div className={styles.detailWrapper}>
          <div className={styles.detailContent}>
            <div className={styles.imageHeader}>
              <Image 
                src="/images/junior.png" 
                alt="Junior Tennis Training" 
                width={800} 
                height={400} 
                className={styles.mainImg}
              />
            </div>
            
            <p className={styles.lead}>
              Instilling a love for the game in young athletes. Our junior programs focus on hand-eye coordination, basic technique, and sportsmanship.
            </p>
            
            <h3>Ages 5 to 17</h3>
            <p>
              Under Coach Ronax, juniors follow a structured development pathway. We use the "Red, Orange, Green" ball progression system to ensure students learn at a pace that matches their physical and technical growth.
            </p>
            
            <div className={styles.pillarGrid}>
              <div className={styles.pillar}>
                <Smile size={32} color="var(--primary)" />
                <h4>Fun First</h4>
                <p>Engaging games that keep children excited about exercise.</p>
              </div>
              <div className={styles.pillar}>
                <Trophy size={32} color="var(--primary)" />
                <h4>Discipline</h4>
                <p>Learning the etiquette and mental stamina of a solo sport.</p>
              </div>
              <div className={styles.pillar}>
                <Shield size={32} color="var(--primary)" />
                <h4>Safety</h4>
                <p>A secure environment with professional supervision at all times.</p>
              </div>
            </div>

            <div className={styles.pricingSection}>
              <h3>Junior Program Fees</h3>
              <div className={styles.priceGrid}>
                <div className={styles.priceCard}>
                  <span className={styles.priceTitle}>Weekly Session</span>
                  <span className={styles.price}>KES 1,200</span>
                  <p>Single 1.5hr class.</p>
                </div>
                <div className={styles.priceCard}>
                  <span className={styles.priceTitle}>Full Term</span>
                  <span className={styles.price}>KES 12,000</span>
                  <p>12 weeks of training.</p>
                </div>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <Link href="/book/trial-lesson" className="btn btn-primary">
                Register Your Child
              </Link>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h4>Class Levels</h4>
              <ul className={styles.levelList}>
                <li><strong>Mini Tennis:</strong> Ages 5-8</li>
                <li><strong>Development:</strong> Ages 9-12</li>
                <li><strong>Elite Junior:</strong> Ages 13-17</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default JuniorTennis;
