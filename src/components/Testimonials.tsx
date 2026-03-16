'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Ayşe Y.',
    city: 'Karabük',
    text: 'Kızım gösteriden sonra günlerce Pofi ve Lumi\'den bahsetti. Harika bir organizasyondu, teşekkürler!',
  },
  {
    name: 'Mehmet K.',
    city: 'Çankırı',
    text: 'Çocuklar çok eğlendi, biz de keyifle izledik. Profesyonel bir ekip, her şey çok düzenliydi.',
  },
  {
    name: 'Fatma D.',
    city: 'Karabük',
    text: 'AVM\'deki stantta çocuğum karakterlerle fotoğraf çektirdi, çok mutlu oldu. Gösteriyi de çok sevdi.',
  },
  {
    name: 'Elif S.',
    city: 'Çankırı',
    text: 'Hem eğitici hem eğlenceli bir gösteri. Çocuğumun ilk tiyatro deneyimiydi ve bayıldı!',
  },
  {
    name: 'Hasan B.',
    city: 'Karabük',
    text: 'Sahne efektleri ve canlı karakterler gerçekten etkileyiciydi. Bir sonraki etkinliği sabırsızlıkla bekliyoruz.',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-3">Ailelerden</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Neler Dediler?
            </h2>
          </div>

          <div className="relative min-h-[200px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-500 ${
                  i === active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 text-center">
                  <svg className="w-10 h-10 text-amber-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                    {t.text}
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-amber-600">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === active ? 'bg-amber-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Yorum ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
