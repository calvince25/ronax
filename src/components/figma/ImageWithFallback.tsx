'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src?: string | null;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  fill,
  priority,
  sizes,
  style,
  width,
  height,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  const fallbackSrc =
    'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800';

  const safeSrc = error || !src ? fallbackSrc : src;

  if (fill) {
    return (
      <Image
        src={safeSrc}
        alt={alt}
        fill
        unoptimized={true}
        className={`object-cover ${className || ''}`}
        onError={() => setError(true)}
        priority={priority}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        style={style}
      />
    );
  }

  return (
    <Image
      src={safeSrc}
      alt={alt}
      width={width || 1200}
      height={height || 800}
      unoptimized={true}
      className={`object-cover ${className || ''}`}
      onError={() => setError(true)}
      priority={priority}
      sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'}
      style={style}
    />
  );
}
