import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Coaching.module.css';
import { Sun, Users, Flame } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export const revalidate = 60; // revalidate every minute

const TennisCamps = async () => {
  const { data: program } = await supabase.from('programs').select('*').eq('slug', 'tennis-camps').single();

  const title = program?.title || "Holiday Tennis Camps";
  const subtitle = program?.subtitle || "Intensive Training. Lasting Friendships.";
  const leadDesc = program?.lead_description || "Make the most of the school break with our immersive holiday camps. It is a week of intensive tennis, physical education, and fun.";
  const mainDesc = program?.main_description || "Held during the April, August, and December school holidays, our camps are designed for all levels. We combine professional instruction with team-based challenges and tournaments to keep students engaged and improving rapidly.";
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
            
            <h3>Seasonal Camps</h3>
            <p>
              {mainDesc}
            </p>
            
            <div className={styles.campHighlights}>
              <div className={styles.campItem}>
                <Sun size={24} color="var(--primary)" />
                <h4>Outdoor Fun</h4>
                <p>Full-day activities in some of Nairobi's best sporting venues.</p>
              </div>
              <div className={styles.campItem}>
                <Users size={24} color="var(--primary)" />
                <h4>Team Spirit</h4>
                <p>Relay races, team matches, and group strategy sessions.</p>
              </div>
              <div className={styles.campItem}>
                <Flame size={24} color="var(--primary)" />
                <h4>Intensity</h4>
                <p>3-4 hours of on-court training per day for rapid progression.</p>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <Link href="/contact" className="btn btn-primary">
                Inquire About Next Camp
              </Link>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h4>Upcoming Dates</h4>
              <p>August Holiday Camp: 17th - 21st August, 2025</p>
              <p>Duration: 9:00 AM - 3:00 PM Daily</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default TennisCamps;
