'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string | null;
  alt: string;
  fill?: boolean;
  priority?: boolean;
}

export function ImageWithFallback({ src, alt, className, fill, priority, ...rest }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  const fallbackSrc = 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800';
  
  // Safe source handling
  const safeSrc = error || !src ? fallbackSrc : src;

  if (fill) {
    return (
      <Image
        src={safeSrc}
        alt={alt}
        fill
        className={`object-cover ${className || ''}`}
        onError={() => setError(true)}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  }

  return (
    <Image
      src={safeSrc}
      alt={alt}
      width={800}
      height={500}
      className={`object-cover ${className || ''}`}
      onError={() => setError(true)}
      priority={priority}
    />
  );
}
