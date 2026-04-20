import React from 'react';
import styles from './TrustBar.module.css';

const TrustBar = () => {
  const stats = [
    { label: 'Students Trained', value: '200+' },
    { label: 'Years Experience', value: '8+' },
    { label: 'ITF Certified', value: 'Pro' },
    { label: 'Locations', value: 'Nairobi' }
  ];

  return (
    <div className={styles.bar}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
