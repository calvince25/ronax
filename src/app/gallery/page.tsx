'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import PageHero from '@/components/ui/PageHero';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import styles from './Gallery.module.css';
import { Camera, Calendar, Info } from 'lucide-react';

export default function GalleryPage() {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

      if (data) setImages(data);
      setLoading(false);
    };

    fetchGallery();
  }, []);

  return (
    <>
      <PageHero 
        title="Our Gallery"
        subtitle="Moments From The Court"
        description="Experience the energy, training, and community at Revolutionary Tennis. From junior tournaments to advanced adult squads."
        imageSrc="https://images.unsplash.com/photo-1627341398579-2d128de1dc8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWQlMjB0ZW5uaXN8ZW58MXx8fHwxNzc2NzU1NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      <div className="py-24 px-8 md:px-12 bg-brand-white">
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
                      className="w-full h-full object-cover"
                    />
                    <div className={styles.overlay}>
                       <Camera size={24} className={styles.icon} />
                    </div>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.date}>
                      <Calendar size={12} />
                      {new Date(img.created_at).toLocaleDateString('en-KE', { month: 'long', year: 'numeric' })}
                    </div>
                    <h3 className="font-barlow text-xl font-bold uppercase tracking-wide text-brand-black mb-2">
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

          {!loading && images.length === 0 && (
            <div className="py-20 text-center">
              <Info size={48} className="mx-auto text-gray-200 mb-4" />
              <p className="text-gray-400 font-dm italic">No images in the gallery yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
