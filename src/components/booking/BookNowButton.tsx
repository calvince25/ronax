'use client';

import React from 'react';
import { useBooking } from '@/context/BookingContext';

interface BookNowButtonProps {
  className?: string;
  program?: string;
  children?: React.ReactNode;
}

export const BookNowButton = ({ className, program, children }: BookNowButtonProps) => {
  const { openBookingModal } = useBooking();
  
  return (
    <button 
      onClick={() => openBookingModal(program)}
      className={className}
    >
      {children || 'Book Now'}
    </button>
  );
};
