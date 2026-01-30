import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Organizasyon',
  description: 'Hayal Perdesi AVM ve Kültür Merkezi organizasyonları. Buzul Ekspresi çocuk tiyatrosu gösterileri için bizimle iletişime geçin.',
};

const WHATSAPP_NUMBER = '905321770637';
const ORG_MESSAGE = `Merhaba, Hayal Perdesi organizasyonu hakkında bilgi almak istiyorum.
Mekan türü: AVM / Kültür Merkezi
Şehir:
Tahmini tarih:`;

export default function OrganizasyonPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(ORG_MESSAGE)}`;

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Organizasyon</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AVM&apos;ler ve Kültür Merkezleri için profesyonel Buzul Ekspresi çocuk tiyatrosu organizasyonları düzenliyoruz.
          </p>
        </div>

        {/* Service Types */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* AVM */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">AVM Etkinlikleri</h2>
            <p className="text-gray-600 mb-6">
              Alışveriş merkezlerinde düzenlenen özel günler, festivaller ve hafta sonu etkinlikleri için çocuk tiyatrosu gösterileri.
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Hafta sonu gösterileri
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                23 Nisan, Ramazan Bayramı etkinlikleri
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Sömestr ve yaz dönemi programları
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Çocuk festivalleri
              </li>
            </ul>
          </div>

          {/* Kültür Merkezi */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Kültür Merkezi Etkinlikleri</h2>
            <p className="text-gray-600 mb-6">
              Belediye kültür merkezleri, tiyatro salonları ve etkinlik alanlarında profesyonel çocuk tiyatrosu gösterileri.
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Sahne gösterileri
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Okul turları
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Kültür ve sanat günleri
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Belediye etkinlikleri
              </li>
            </ul>
          </div>
        </div>

        {/* Reference */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="inline-block bg-amber-100 text-amber-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
              Referansımız
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Leyla Dizdar Kültür Merkezi, Karabük</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Karabük&apos;ün en prestijli kültür mekanında düzenlediğimiz Buzul Ekspresi gösterileri büyük ilgi gördü.
              Profesyonel ekibimiz ve kaliteli prodüksiyonumuzla fark yaratıyoruz.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Organizasyon Talebi</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            AVM veya Kültür Merkeziniz için çocuk tiyatrosu organizasyonu planlamak isterseniz bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp ile İletişim
            </a>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              İletişim Sayfası
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
