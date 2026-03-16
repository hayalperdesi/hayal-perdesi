'use client';

import { useEffect, useState } from 'react';

const TARGET_DATE = new Date('2026-04-11T17:30:00+03:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Gün', value: timeLeft.days },
    { label: 'Saat', value: timeLeft.hours },
    { label: 'Dakika', value: timeLeft.minutes },
    { label: 'Saniye', value: timeLeft.seconds },
  ];

  return (
    <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/80 font-bold text-sm uppercase tracking-wider mb-2">
            Kastamonu Gösterisine
          </p>
          <div className="flex justify-center gap-4 md:gap-8">
            {units.map((unit) => (
              <div key={unit.label} className="flex flex-col items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl w-16 h-16 md:w-24 md:h-24 flex items-center justify-center border border-white/30">
                  <span className="text-2xl md:text-5xl font-black text-white">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-white/80 text-xs md:text-sm font-medium mt-2">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-white font-bold text-lg md:text-xl mt-6">
            11 Nisan 2026 • Kültür Merkezi (Grand Moni yanı)
          </p>
        </div>
      </div>
    </section>
  );
}
