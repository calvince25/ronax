'use client';

import React, { createContext, useContext, useState } from 'react';

interface BookingContextType {
  isBookingModalOpen: boolean;
  openBookingModal: (initialProgram?: string) => void;
  closeBookingModal: () => void;
  initialProgram: string;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [initialProgram, setInitialProgram] = useState('');

  const openBookingModal = (program = '') => {
    setInitialProgram(program);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setInitialProgram('');
  };

  return (
    <BookingContext.Provider
      value={{
        isBookingModalOpen,
        openBookingModal,
        closeBookingModal,
        initialProgram,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
