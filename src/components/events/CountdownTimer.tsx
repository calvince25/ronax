'use client';

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft(null);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return <div className="text-brand-green font-bold text-xs uppercase tracking-widest">Event has started</div>;

  return (
    <div className="flex gap-4 items-center">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold font-barlow text-brand-green leading-none">{timeLeft.days}</span>
        <span className="text-[8px] uppercase tracking-widest opacity-50 font-bold">Days</span>
      </div>
      <span className="text-xl opacity-20 font-light mb-4">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold font-barlow text-brand-green leading-none">{timeLeft.hours}</span>
        <span className="text-[8px] uppercase tracking-widest opacity-50 font-bold">Hrs</span>
      </div>
      <span className="text-xl opacity-20 font-light mb-4">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold font-barlow text-brand-green leading-none">{timeLeft.minutes}</span>
        <span className="text-[8px] uppercase tracking-widest opacity-50 font-bold">Min</span>
      </div>
      <span className="text-xl opacity-20 font-light mb-4">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold font-barlow text-brand-green leading-none">{timeLeft.seconds}</span>
        <span className="text-[8px] uppercase tracking-widest opacity-50 font-bold">Sec</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
