import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Coaching.module.css';
import { Trophy, Smile, Shield } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export const revalidate = 60; // revalidate every minute

const JuniorTennis = async () => {
  const { data: program } = await supabase.from('programs').select('*').eq('slug', 'junior-tennis').single();

  const title = program?.title || "Junior Tennis Programs";
  const subtitle = program?.subtitle || "Building the Next Generation";
  const leadDesc = program?.lead_description || "Instilling a love for the game in young athletes. Our junior programs focus on hand-eye coordination, basic technique, and sportsmanship.";
  const mainDesc = program?.main_description || "Under Coach Ronax, juniors follow a structured development pathway. We use the 'Red, Orange, Green' ball progression system to ensure students learn at a pace that matches their physical and technical growth.";
  const imageUrl = program?.image_url || "/images/junior.png";

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
            
            <h3>Ages 5 to 17</h3>
            <p>
              {mainDesc}
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
