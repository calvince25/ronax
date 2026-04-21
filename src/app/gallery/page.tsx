'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import PageHero from '@/components/ui/PageHero';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import styles from './Gallery.module.css';
import { Camera, Calendar } from 'lucide-react';

// High quality Unsplash tennis images shown when no admin content is uploaded yet
const SHOWCASE_IMAGES = [
  {
    id: 'p1',
    image_url: 'https://images.unsplash.com/photo-1542144582-1ba00540f367?q=80&w=1200',
    alt_text: 'Advanced Training Session',
    description: 'Coach Ronax works one-on-one with advanced players to sharpen technique and mental focus.',
    created_at: '2025-03-15T08:00:00Z',
  },
  {
    id: 'p2',
    image_url: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1200',
    alt_text: 'Junior Tennis Development',
    description: 'Our junior program uses the Red-Orange-Green ball progression system to build confidence and skill.',
    created_at: '2025-02-20T08:00:00Z',
  },
  {
    id: 'p3',
    image_url: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1200',
    alt_text: 'Group Training At Westlands',
    description: 'Our flagship Westlands location hosts group sessions every Monday, Wednesday, and Friday.',
    created_at: '2025-02-10T08:00:00Z',
  },
  {
    id: 'p4',
    image_url: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1200',
    alt_text: 'Serving Technique Clinic',
    description: 'A focused serving clinic that covers biomechanics, toss consistency, and power generation.',
    created_at: '2025-01-28T08:00:00Z',
  },
  {
    id: 'p5',
    image_url: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1200',
    alt_text: 'Karen Private Court Sessions',
    description: 'Exclusive private sessions at our Karen courts — serene, focused, and premium.',
    created_at: '2025-01-15T08:00:00Z',
  },
  {
    id: 'p6',
    image_url: 'https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=1200',
    alt_text: 'Adults Beginner Class',
    description: "It's never too late to start. Our adult beginner program makes learning fun and comfortable.",
    created_at: '2024-12-18T08:00:00Z',
  },
];

export default function GalleryPage() {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      const { data } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

      // If no admin images, show showcase images
      setImages(data && data.length > 0 ? data : SHOWCASE_IMAGES);
      setLoading(false);
    };

    fetchGallery();
  }, []);

  return (
    <>
      <PageHero
        title="Our Gallery"
        subtitle="Moments From The Court"
        description="Experience the energy, training, and community at Revolutionary Tennis — from junior tournaments to elite adult squads."
        imageSrc="https://images.unsplash.com/photo-1542144582-1ba00540f367?q=80&w=2000"
      />

      <div className="py-24 pb-40 px-8 md:px-12 bg-brand-white">
        <div className="max-w-[1440px] mx-auto w-full">

          {loading ? (
            <div className="py-20 text-center text-gray-400 font-dm italic">Loading gallery...</div>
          ) : (
            <div className={styles.grid}>
              {images.map((img) => (
                <div key={img.id} className={styles.card}>
                  <div className={styles.imgWrapper}>
                    <ImageWithFallback
                      src={img.image_url}
                      alt={img.alt_text}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={styles.hoverOverlay}>
                      <Camera size={28} className="text-white" />
                    </div>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.date}>
                      <Calendar size={11} />
                      {new Date(img.created_at).toLocaleDateString('en-KE', { month: 'long', year: 'numeric' })}
                    </div>
                    <h3 className="font-barlow text-lg font-bold uppercase tracking-wide text-brand-black mb-1">
                      {img.alt_text}
                    </h3>
                    {img.description && (
                      <p className="font-dm text-sm text-gray-500 font-light leading-relaxed">
                        {img.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
