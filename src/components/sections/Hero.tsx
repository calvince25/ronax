import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <Image 
        src="/images/hero.png" 
        alt="Nairobi's #1 Tennis Coach - Coach Ronax" 
        fill 
        priority
        className={styles.heroImage}
      />
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>Nairobi's #1 Tennis Coach</span>
          <h1 className={styles.title}>
            Master the Court with <span className="gradient-text">Revolutionary</span> Tennis
          </h1>
          <p className={styles.description}>
            Train with Coach Ronax – certified professional coaching for all ages and skill levels across Nairobi, Westlands, and Karen.
          </p>
          <div className={styles.ctas}>
            <Link href="/book/trial-lesson" className="btn btn-primary btn-large">
              Book Free Trial Lesson
            </Link>
            <Link href="/coaching" className="btn btn-outline btn-large">
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
