import { Metadata } from 'next';
import React from 'react';
import CoachProfileContent from './CoachProfileContent';

export const metadata: Metadata = {
  title: 'Meet Coach Ronax | Revolution Tennis Nairobi',
  description: 'Meet Coach Ronax — Nairobi\'s premier tennis coach with 15+ years of experience. Professional coaching for juniors and adults at Aga Khan, Public Service Club, and Karura Forest.',
  alternates: {
    canonical: "https://www.revolutiontennis.co.ke/about/coach-ronax",
  },
  openGraph: {
    title: 'Meet Coach Ronax — Nairobi\'s Premier Tennis Coach',
    description: '15+ Years. Hundreds of Students. One Mission: Your Best Game.',
    images: ['https://images.unsplash.com/photo-1661474974389-2c1ad53c9ab0?q=80&w=1440'],
  }
};

export default function AboutCoach() {
  return <CoachProfileContent />;
}
