import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import styles from './WhyRonax.module.css';
import { Award, Target, Users, MapPin } from 'lucide-react';

const features = [
  {
    icon: <Award size={32} />,
    title: 'Certified Expert',
    description: 'ITF certified coach with years of professional training experience.'
  },
  {
    icon: <Target size={32} />,
    title: 'Proven Method',
    description: 'Structured coaching system designed to see results from day one.'
  },
  {
    icon: <Users size={32} />,
    title: 'All Ages & Levels',
    description: 'From 5-year-old beginners to competitive tournament players.'
  },
  {
    icon: <MapPin size={32} />,
    title: 'Nairobi-Based',
    description: 'Convenient training at premium courts in Westlands, Karen, and more.'
  }
];

const WhyRonax = () => {
  return (
    <section className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <SectionHeading 
          title="Why Choose Revolution Tennis" 
          subtitle="The Difference" 
        />
        <div className={styles.grid}>
          {features.map((feature, i) => (
            <div key={i} className={styles.feature}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRonax;
