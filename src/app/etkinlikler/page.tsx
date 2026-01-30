import { Metadata } from 'next';
import { getActiveEvents, getComingSoonEvents } from '@/data/events';
import EventCard from '@/components/EventCard';

export const metadata: Metadata = {
  title: 'Etkinlikler',
  description: 'Buzul Ekspresi çocuk tiyatrosu etkinlikleri. Çankırı, Karabük aktif - Rize yakında. AVM ve Kültür Merkezi gösterileri.',
};

export default function EtkinliklerPage() {
  const activeEvents = getActiveEvents();
  const comingSoonEvents = getComingSoonEvents();

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Etkinlikler</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Buzul Ekspresi çocuk tiyatrosu gösterilerimiz Türkiye&apos;nin farklı şehirlerinde devam ediyor.
          </p>
        </div>

        {/* Active Events */}
        {activeEvents.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              <h2 className="text-2xl font-semibold text-gray-900">Aktif Etkinlikler</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}

        {/* Coming Soon */}
        {comingSoonEvents.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
              <h2 className="text-2xl font-semibold text-gray-900">Yakında</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comingSoonEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}

        {/* Cities Info */}
        <section className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Şehirlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Çankırı</h3>
              <p className="text-sm text-green-600 font-medium">Aktif</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Karabük</h3>
              <p className="text-sm text-green-600 font-medium">Aktif</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="w-12 h-12 mx-auto mb-4 bg-amber-50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Rize</h3>
              <p className="text-sm text-amber-600 font-medium">Yakında</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
