'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  src: any;
  fallbackSrc?: string;
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, className, style, fallbackSrc, ...rest } = props

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img 
            src={fallbackSrc || ERROR_IMG_SRC} 
            alt="Error loading image" 
            className="max-w-[48px] max-h-[48px] opacity-20"
          />
        </div>
      </div>
    )
  }

  // Use Next.js Image if fill is specified or both width and height are provided
  if (props.fill || (props.width && props.height)) {
    return (
      <Image
        {...props}
        onError={handleError}
      />
    )
  }

  // Fallback to standard img for missing dimensions to avoid Next.js errors
  return (
    <img
      src={typeof src === 'string' ? src : src?.src}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      {...(rest as any)}
    />
  )
}
