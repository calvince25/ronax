import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../coach-ronax/About.module.css';
import { Star, TrendingUp, Users } from 'lucide-react';

const results = [
  {
    name: 'David K.',
    title: 'Beginner to Intermediate',
    body: 'In just 3 months, I went from not knowing how to hold a racket to playing sets comfortably. Coach Ronax is a game-changer.',
    category: 'Adult Beginner'
  },
  {
    name: 'Sarah M.',
    title: 'Junior Tournament Winner',
    body: 'The competitive squad training helped my daughter win her first local tournament. The tactical focus is incredible.',
    category: 'Elite Junior'
  },
  {
    name: 'James O.',
    title: 'Technical Refinement',
    body: 'I had developed bad habits over 10 years of playing. Ronax broke down my serve and rebuilt it better than ever.',
    category: 'Advanced'
  }
];

const StudentResults = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Student Results" 
          subtitle="Real People. Real Progress." 
        />
        
        <div className={styles.resultsGrid}>
          {results.map((res, i) => (
            <div key={i} className={styles.resultCard}>
              <div className={styles.resultHeader}>
                <div className={styles.stars}>
                  <Star size={16} fill="var(--primary)" color="var(--primary)" />
                  <Star size={16} fill="var(--primary)" color="var(--primary)" />
                  <Star size={16} fill="var(--primary)" color="var(--primary)" />
                  <Star size={16} fill="var(--primary)" color="var(--primary)" />
                  <Star size={16} fill="var(--primary)" color="var(--primary)" />
                </div>
                <span className={styles.resCategory}>{res.category}</span>
              </div>
              <h4>{res.title}</h4>
              <p>"{res.body}"</p>
              <div className={styles.resultAuthor}>
                <strong>{res.name}</strong>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.resultsMeta}>
          <div className={styles.metaItem}>
            <TrendingUp size={32} color="var(--primary)" />
            <span>98% Success Rate</span>
          </div>
          <div className={styles.metaItem}>
            <Users size={32} color="var(--primary)" />
            <span>500+ Happy Students</span>
          </div>
        </div>

        <div className={styles.finalCta}>
          <Link href="/book/trial-lesson" className="btn btn-primary">
            Start Your Success Story
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentResults;
