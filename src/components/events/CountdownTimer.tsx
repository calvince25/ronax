'use client';

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ label, value }: { label: string, value: number }) => (
    <div className="flex flex-col items-center">
      <div className="bg-brand-green text-white font-barlow text-2xl md:text-3xl font-bold w-12 md:w-16 h-12 md:h-16 rounded-xl flex items-center justify-center shadow-lg mb-2">
        {value.toString().padStart(2, '0')}
      </div>
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center gap-4 md:gap-8 justify-center">
      <TimeBlock label="Days" value={timeLeft.days} />
      <TimeBlock label="Hrs" value={timeLeft.hours} />
      <TimeBlock label="Min" value={timeLeft.minutes} />
      <TimeBlock label="Sec" value={timeLeft.seconds} />
    </div>
  );
};

export default CountdownTimer;
