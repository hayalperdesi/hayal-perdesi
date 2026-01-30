import { Metadata } from 'next';
import { getAllTicketEvents } from '@/data/events';

export const metadata: Metadata = {
  title: 'Bilet Al',
  description: 'Buzul Ekspresi çocuk tiyatrosu biletleri. WhatsApp üzerinden veya AVM/Kültür Merkezi gişelerinden bilet alabilirsiniz.',
};

const WHATSAPP_NUMBER = '905321770637';
const TICKET_MESSAGE = `Merhaba, Buzul Ekspresi için bilet almak istiyorum.
Şehir:
Etkinlik:
Kişi sayısı:
AVM/Kültür Merkezi:`;

// Status badge konfigürasyonu
const statusConfig = {
  'active': {
    label: 'Satışta',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    borderColor: 'border-green-100',
  },
  'coming-soon': {
    label: 'Yakında',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-100',
  },
  'sold-out': {
    label: 'Satış Bitti',
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-500',
    borderColor: 'border-gray-200',
  },
};

export default function BiletAlPage() {
  const allEvents = getAllTicketEvents();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(TICKET_MESSAGE)}`;

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Bilet Al</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Buzul Ekspresi gösterilerine bilet almak için iki yöntem kullanabilirsiniz.
          </p>
        </div>

        {/* Options */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {/* WhatsApp */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <span className="inline-block bg-green-50 text-green-600 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
              Hızlı İletişim
            </span>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">WhatsApp</h2>
            <p className="text-gray-500 mb-6">
              Bilgi almak ve bilet satın almak için WhatsApp üzerinden ulaşabilirsiniz.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-xl font-medium transition-colors"
            >
              WhatsApp ile Bilet Al
            </a>
          </div>

          {/* AVM/Kültür Merkezi */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
              </svg>
            </div>
            <span className="inline-block bg-amber-50 text-amber-600 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
              Ana Satış Noktası
            </span>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">AVM & Kültür Merkezi</h2>
            <p className="text-gray-500 mb-6">
              Biletlerinizi etkinliğin yapılacağı AVM veya Kültür Merkezi gişelerinden temin edebilirsiniz.
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Yerinde ödeme imkanı
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Koltuk seçimi yapabilme
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Anında bilet teslimi
              </li>
            </ul>
          </div>
        </div>

        {/* Ticket Events */}
        {allEvents.length > 0 && (
          <section className="bg-gray-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Bilet Satışı Yapılan Mekanlar</h2>
            <div className="space-y-4">
              {allEvents.map((event) => {
                const config = statusConfig[event.status];
                const isSoldOut = event.status === 'sold-out';

                return (
                  <div
                    key={event.id}
                    className={`p-5 bg-white rounded-2xl shadow-sm border transition-all ${
                      isSoldOut
                        ? 'border-gray-200 opacity-60 cursor-default'
                        : 'border-gray-100 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className={`font-semibold ${isSoldOut ? 'text-gray-500' : 'text-gray-900'}`}>
                            {event.city}
                          </h3>
                          <span className={`text-xs font-medium px-3 py-1 rounded-full ${config.bgColor} ${config.textColor}`}>
                            {config.label}
                          </span>
                        </div>
                        <p className={`text-sm ${isSoldOut ? 'text-gray-400' : 'text-gray-500'}`}>
                          {event.avm && <span className="font-medium">{event.avm}</span>}
                          {event.avm && event.culturalCenter && ' • '}
                          {event.culturalCenter}
                        </p>
                      </div>

                      {/* CTA sadece active durumda görünür */}
                      {event.status === 'active' && (
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Merhaba, ${event.city} - ${event.avm} için bilet almak istiyorum.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-4 flex-shrink-0 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                        >
                          Bilet Al
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
