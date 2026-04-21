import React from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  height?: string;
  overlayOpacity?: number;
  textAlign?: 'left' | 'center';
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  height = 'h-[70vh]',
  overlayOpacity = 0.6,
  textAlign = 'center',
  children
}) => {
  return (
    <div className={`relative w-full ${height} min-h-[400px] bg-brand-dark flex items-center`}>
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <ImageWithFallback
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-brand-dark" style={{ opacity: overlayOpacity }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-dark/20"></div>
      </div>
      
      <div className={`relative z-10 max-w-[1440px] mx-auto w-full px-8 md:px-12 ${textAlign === 'center' ? 'text-center' : 'text-left'}`}>
        <div className={textAlign === 'center' ? 'mx-auto' : ''}>
          {subtitle && (
            <span className="inline-block text-brand-green font-dm font-bold text-[11px] tracking-[0.3em] uppercase mb-6">
              {subtitle}
            </span>
          )}
          <h1 className="text-white font-barlow text-[64px] md:text-[84px] font-bold uppercase tracking-tight leading-[0.9] mb-8">
            {title}
          </h1>
          <div className={`w-12 h-1 bg-brand-green mb-8 ${textAlign === 'center' ? 'mx-auto' : ''}`}></div>
          {description && (
            <p className={`text-white/80 font-dm text-[16px] md:text-[18px] max-w-2xl font-light leading-relaxed mb-10 ${textAlign === 'center' ? 'mx-auto' : ''}`}>
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHero;
