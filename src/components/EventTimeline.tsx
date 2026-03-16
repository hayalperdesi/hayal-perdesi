'use client';

const timeline = [
  {
    city: 'Karabük',
    venue: 'Leyla Dizdar Kültür Merkezi',
    date: '28 Aralık 2025',
    attendance: 272,
    status: 'completed' as const,
  },
  {
    city: 'Çankırı',
    venue: 'Atatürk Kültür Merkezi',
    date: '1 Şubat 2026',
    attendance: 369,
    status: 'completed' as const,
  },
  {
    city: 'Kastamonu',
    venue: 'Kültür Merkezi (Grand Moni yanı)',
    date: '11 Nisan 2026',
    status: 'active' as const,
  },
];

export default function EventTimeline() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-3">Yolculuğumuz</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Şehirden Şehire
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.city}
                  className={`relative flex items-center gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${
                        item.status === 'completed'
                          ? 'bg-amber-500 border-amber-200'
                          : 'bg-white border-amber-500 animate-pulse'
                      }`}
                    >
                      {item.status === 'completed' ? (
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      ) : (
                        <span className="w-3 h-3 bg-amber-500 rounded-full" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-20 md:ml-0 md:w-1/2 md:px-8">
                    <div
                      className={`bg-gray-50 rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${
                        item.status === 'active'
                          ? 'border-amber-300 bg-amber-50'
                          : 'border-transparent hover:border-gray-200'
                      }`}
                    >
                      {item.status === 'active' && (
                        <span className="inline-flex items-center gap-1.5 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                          Sıradaki Durak
                        </span>
                      )}
                      <h3 className="text-2xl font-black text-gray-900">{item.city}</h3>
                      <p className="text-gray-600 mt-1">{item.venue}</p>
                      <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                      {item.attendance && (
                        <div className="mt-3 inline-flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 border border-gray-200">
                          <span className="text-lg font-black text-amber-500">{item.attendance}</span>
                          <span className="text-sm text-gray-500">çocuk katıldı</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
