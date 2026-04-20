import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '../ui/SectionHeading';
import styles from './Programs.module.css';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'Private 1-on-1 Lessons',
    description: 'Personalized coaching to accelerate your progress. Focus on your specific goals and technique.',
    image: '/images/private.png',
    link: '/coaching/private-lessons',
    price: 'From KES 2,500/hr'
  },
  {
    title: 'Group Tennis Classes',
    description: 'Learn in a social and dynamic environment. Perfect for meeting new players and improving together.',
    image: '/images/hero.png', // Fallback to hero for variety
    link: '/coaching/group-classes',
    price: 'From KES 1,500/session'
  },
  {
    title: 'Junior Tennis Programs',
    description: 'Building the next generation of champions. Fun, structured training for kids aged 5-17.',
    image: '/images/junior.png',
    link: '/coaching/junior-tennis',
    price: 'From KES 12,000/term'
  }
];

const Programs = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading 
          title="Tennis Programs for Every Level" 
          subtitle="What We Offer" 
        />
        <div className={styles.grid}>
          {programs.map((program, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={program.image} 
                  alt={program.title} 
                  fill 
                  className={styles.image}
                />
                <div className={styles.priceTag}>{program.price}</div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{program.title}</h3>
                <p className={styles.cardDescription}>{program.description}</p>
                <Link href={program.link} className={styles.link}>
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.footerCtas}>
           <Link href="/coaching" className="btn btn-outline">
            View All Programs
           </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;
