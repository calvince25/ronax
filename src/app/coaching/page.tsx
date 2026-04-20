import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Coaching.module.css';
import { ArrowRight, Trophy, Users, Star, Clock, MapPin } from 'lucide-react';

const programs = [
  {
    title: 'Private 1-on-1 Lessons',
    description: 'The fastest way to improve. Get individual attention to your technique, footwork, and strategy.',
    icon: <Star size={24} />,
    image: '/images/private.png',
    link: '/coaching/private-lessons',
    tags: ['Personalized', 'All Levels']
  },
  {
    title: 'Group Tennis Classes',
    description: 'Learn in a social setting. Affordable and fun sessions focused on rallies and game play.',
    icon: <Users size={24} />,
    image: '/images/hero.png',
    link: '/coaching/group-classes',
    tags: ['Social', 'Competitive']
  },
  {
    title: 'Junior Tennis Programs',
    description: 'Building foundations for young athletes. Fun-filled sessions for ages 5 to 17.',
    icon: <Trophy size={24} />,
    image: '/images/junior.png',
    link: '/coaching/junior-tennis',
    tags: ['Kids', 'Foundational']
  },
  {
    title: 'Adult Beginner Programs',
    description: 'It is never too late to start. We teach the basics from scratch in a friendly atmosphere.',
    icon: <Clock size={24} />,
    image: '/images/hero.png',
    link: '/coaching/adult-beginners',
    tags: ['Adults', 'No Experience']
  },
  {
    title: 'Advanced & Competitive',
    description: 'Take your game to tournament level. Focus on tactical awareness and mental toughness.',
    icon: <Trophy size={24} />,
    image: '/images/private.png',
    link: '/coaching/advanced-training',
    tags: ['Pro', 'Elite']
  },
  {
    title: 'Tennis Camps',
    description: 'Intensive holiday programs. Perfect for rapid skill improvement during school breaks.',
    icon: <MapPin size={24} />,
    image: '/images/junior.png',
    link: '/coaching/tennis-camps',
    tags: ['Intensive', 'Holiday']
  }
];

const CoachingHub = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading 
          title="Coaching Programs for Every Player" 
          subtitle="Explore Our Services" 
        />
        
        <div className={styles.grid}>
          {programs.map((program, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imageOverlay}>
                <Image src={program.image} alt={program.title} fill className={styles.image} />
                <div className={styles.iconBox}>{program.icon}</div>
              </div>
              <div className={styles.content}>
                <div className={styles.tags}>
                  {program.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                </div>
                <h3 className={styles.cardTitle}>{program.title}</h3>
                <p className={styles.cardDescription}>{program.description}</p>
                <Link href={program.link} className={styles.btnLink}>
                  Explore Program <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachingHub;
