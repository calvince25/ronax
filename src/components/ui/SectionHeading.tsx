import React from 'react';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <div className={`${styles.wrapper} ${centered ? styles.centered : ''} ${light ? styles.light : ''}`}>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      {/* <div className={styles.underline}></div> */}
    </div>
  );
};

export default SectionHeading;
