import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Coaching.module.css';
import { Users, Calendar, CheckCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export const revalidate = 60; // revalidate every minute

const GroupClasses = async () => {
  const { data: program } = await supabase.from('programs').select('*').eq('slug', 'group-classes').single();

  const title = program?.title || "Group Tennis Classes";
  const subtitle = program?.subtitle || "Social, Competitive & Fun";
  const leadDesc = program?.lead_description || "Join a vibrant community of players. Our group classes are designed to improve your game in a dynamic, social environment.";
  const mainDesc = program?.main_description || "Our group sessions focus on high-volume hitting, tactical drills, and live ball games. It is the perfect way to apply technical skills in real match-play scenarios while meeting other tennis enthusiasts in Nairobi.";
  const imageUrl = program?.image_url || "/images/group-class.png";

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
            
            <h3>What to Expect</h3>
            <p>
              {mainDesc}
            </p>
            
            <div className={styles.featuresSharp}>
              <div className={styles.featureItem}>
                <CheckCircle size={20} color="var(--primary)" />
                <span>Max 6 players per court for maximum hitting time.</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle size={20} color="var(--primary)" />
                <span>Level-based splitting (Beginner to Advanced).</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle size={20} color="var(--primary)" />
                <span>Focused tactical themes every week.</span>
              </div>
            </div>

            <div className={styles.pricingSection}>
              <h3>Group Session Pricing</h3>
              <div className={styles.priceGrid}>
                <div className={styles.priceCard}>
                  <span className={styles.priceTitle}>Drop-in</span>
                  <span className={styles.price}>KES 1,500</span>
                  <p>Single session access.</p>
                </div>
                <div className={styles.priceCard}>
                  <span className={styles.priceTitle}>Monthly (4)</span>
                  <span className={styles.price}>KES 5,000</span>
                  <p>Once a week sessions.</p>
                </div>
                <div className={styles.priceCard}>
                  <span className={styles.priceTitle}>Unlimited</span>
                  <span className={styles.price}>KES 12,000</span>
                  <p>Access all group sessions.</p>
                </div>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <Link href="/book/trial-lesson" className="btn btn-primary">
                Join a Group Session
              </Link>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h4>Schedule Info</h4>
              <ul className={styles.scheduleList}>
                <li><span>Weekdays:</span> 6PM - 8PM</li>
                <li><span>Saturdays:</span> 8AM - 11AM</li>
                <li><span>Sundays:</span> 4PM - 6PM</li>
              </ul>
              <div className={styles.sidebarMeta}>
                <Calendar size={18} />
                <span>Westlands & Karen Hubs</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default GroupClasses;
