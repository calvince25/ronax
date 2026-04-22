'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import PageHero from '@/components/ui/PageHero';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import styles from './Gallery.module.css';
import { Camera, Calendar } from 'lucide-react';



export default function GalleryPage() {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      const { data } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

      setImages(data || []);
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
              {images.length === 0 && (
                <div className="col-span-full py-20 text-center text-gray-400 font-dm italic">
                  No images have been uploaded to the gallery yet.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
