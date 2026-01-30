import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Hayal Perdesi Organizasyon - Buzul Ekspresi çocuk tiyatrosu. Türkiye genelinde AVM ve kültür merkezlerinde çocuklara unutulmaz anlar yaşatıyoruz.',
};

export default function HakkimizdaPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hakkımızda</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Çocuklara sanatı sevdirmek ve ailelere kaliteli etkinlikler sunmak için çalışıyoruz.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h2>
            <p className="text-gray-600 mb-4">
              Türkiye&apos;nin farklı şehirlerinde çocuklarla buluşan, AVM&apos;lerde ve sosyal alanlarda güvenle tercih edilen, çocuk tiyatrosu denildiğinde akla gelen, sürdürülebilir ve sevilen bir marka olmak.
            </p>
            <p className="text-gray-600">
              Sanatı çocukların günlük hayatının doğal bir parçası haline getirmeyi hedefliyoruz.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h2>
            <p className="text-gray-600 mb-4">
              Buzul Ekspresi olarak; çocukların hayal gücünü geliştiren, eğlendirirken öğreten ve tiyatroyu sevdiren oyunlar sahneleyerek, ailelerin güvenle katılabileceği kaliteli çocuk etkinlikleri sunmayı amaçlıyoruz.
            </p>
            <p className="text-gray-600">
              Her çocuğun sanata dokunma hakkı olduğuna inanıyor, bunu neşeli ve pedagojik bir yaklaşımla sahneye taşıyoruz.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Etkinliklerimiz</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Buzul Ekspresi çocuk tiyatrosu gösterileri
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Çocuklara özel interaktif sahne deneyimi
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Eğitici ve eğlenceli içerikler
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Profesyonel sahne ve ses düzeni
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Canlı karakterler ile etkileşim alanı
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bize Ulaşın</h2>
            <p className="text-gray-600 mb-6">
              Organizasyon talepleri ve iş birlikleri için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                İletişim
              </Link>
              <a
                href="https://instagram.com/hayalperdesiorganizasyon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
