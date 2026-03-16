import Link from 'next/link';
import { avmReferences, showInfo, getCompletedReferences, getPlannedReferences } from '@/data/avm';
import GalleryPreview from '@/components/GalleryPreview';
import AnimatedCounter from '@/components/AnimatedCounter';
import EventTimeline from '@/components/EventTimeline';
import Testimonials from '@/components/Testimonials';

// İstatistikleri hesapla
const completedRefs = getCompletedReferences();
const plannedRefs = getPlannedReferences();

const totalAttendance = completedRefs.reduce((sum, r) => sum + (r.attendance || 0), 0);
const totalCapacity = completedRefs.reduce((sum, r) => sum + (r.capacity || 0), 0);
const avgOccupancy = totalCapacity > 0 ? Math.round((totalAttendance / totalCapacity) * 100) : 0;
const uniqueCities = Array.from(new Set(avmReferences.map(r => r.city))).length;

export default async function HomePage() {
  const completedRef = completedRefs[0]; // İlk tamamlanan referans
  const plannedRef = plannedRefs[0]; // İlk planlanan referans

  return (
    <>
      {/* Hero Section - Full Impact */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero/buzul-ekspresi.jpg')" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Biletler Satışta
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
              Buzul Ekspresi
              <span className="block text-amber-400">Çocuk Tiyatrosu</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Canlı karakterler, interaktif sahne ve unutulmaz anlar.
              <strong className="text-amber-400"> 4-11 yaş</strong> arası çocuklar için özel hazırlandı.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/20">
                <span className="text-3xl font-black text-amber-400">{totalAttendance.toLocaleString('tr-TR')}</span>
                <span className="text-white/80 ml-2">mutlu çocuk</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/20">
                <span className="text-3xl font-black text-white">{uniqueCities}</span>
                <span className="text-white/80 ml-2">şehirde etkinlik</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/bilet-al"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/30 text-center"
              >
                Hemen Bilet Al
              </Link>
              <Link
                href="/avm"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/30 text-center"
              >
                AVM İş Birliği
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Bar */}
      <section className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-black text-amber-400">
                <AnimatedCounter target={totalAttendance} />
              </p>
              <p className="text-sm text-gray-400 mt-1">Toplam Katılım</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-white">
                <AnimatedCounter target={uniqueCities} duration={1000} />
              </p>
              <p className="text-sm text-gray-400 mt-1">Şehir</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-amber-400">
                <AnimatedCounter target={avgOccupancy} prefix="%" duration={1500} />
              </p>
              <p className="text-sm text-gray-400 mt-1">Ort. Doluluk</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-white">
                <AnimatedCounter target={avmReferences.length} duration={1000} />
              </p>
              <p className="text-sm text-gray-400 mt-1">AVM Referansı</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Event - Urgent */}
      {plannedRef && (
        <section className="bg-amber-500 text-white py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">Yaklaşan Etkinlik</p>
                  <p className="text-2xl md:text-3xl font-black">{plannedRef.city} - {plannedRef.date}</p>
                  <p className="text-white/90">{plannedRef.avm} • {plannedRef.culturalCenter}</p>
                </div>
              </div>
              <Link
                href="/bilet-al"
                className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-xl font-bold text-lg transition-all whitespace-nowrap"
              >
                Bilet Al
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* About the Show */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-3">Oyun Hakkında</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Buzul Ekspresi Nedir?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kutup ayısı Pofi, penguen Lumi ve karga Kuru&apos;nun maceralarını anlatan,
                <strong> canlı karakterler</strong> ve <strong>sahne efektleri</strong> ile desteklenen interaktif bir tiyatro deneyimi.
              </p>
            </div>

            {/* Characters */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {showInfo.characters.map((char) => (
                <div key={char.name} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border-2 border-transparent hover:border-amber-200">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl shadow-md flex items-center justify-center">
                    <span className="text-5xl">{char.emoji}</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900">{char.name}</p>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {showInfo.standFeatures.map((feature, index) => (
                <div key={feature} className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="font-medium text-gray-900">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Timeline */}
      <EventTimeline />

      {/* Gallery Preview */}
      <GalleryPreview />

      {/* Başarı Hikayeleri */}
      <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/buzul-ekspresi.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-3">Başarı Hikayelerimiz</p>
              <h2 className="text-4xl md:text-5xl font-black">
                Her Şehirde <span className="text-amber-400">Büyük İlgi</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {completedRefs.filter(r => r.attendance).map((ref) => (
                <div key={ref.id} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-amber-400/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-black">{ref.city}</h3>
                      <p className="text-gray-400 text-sm">{ref.culturalCenter}</p>
                    </div>
                    <span className="bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
                      Tamamlandı
                    </span>
                  </div>
                  <div className="flex items-end gap-4 mb-4">
                    <p className="text-6xl font-black text-amber-400">{ref.attendance}</p>
                    <p className="text-gray-300 pb-2">çocuk katıldı</p>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="bg-white/10 px-3 py-1 rounded-full">{ref.avm} iş birliği</span>
                    <span className="bg-white/10 px-3 py-1 rounded-full">{ref.date}</span>
                    {ref.capacity && (
                      <span className="bg-white/10 px-3 py-1 rounded-full">
                        %{Math.round(((ref.attendance || 0) / ref.capacity) * 100)} doluluk
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-3">Süreç</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Nasıl Çalışıyor?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative">
                <div className="bg-amber-500 rounded-2xl p-8 text-white h-full">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-3xl font-black">1</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">AVM Standı</h3>
                  <p className="text-white/90">
                    AVM içinde stand kurulur. Canlı karakterlerle çocuklara ücretsiz aktiviteler sunulur, bilet satışı yapılır.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-100 rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-3xl font-black text-white">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">45 Gün Tanıtım</h3>
                  <p className="text-gray-600">
                    Sosyal medya, AVM içi duyurular ve ağızdan ağıza pazarlama ile etkinlik tanıtılır.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-900 rounded-2xl p-8 text-white h-full">
                  <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-3xl font-black text-white">3</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Sahne Gösterisi</h3>
                  <p className="text-gray-300">
                    Şehrin kültür merkezinde profesyonel sahne gösterisi. Aileler unutulmaz bir gün yaşar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Çocuğunuza Unutulmaz Bir Deneyim Yaşatın
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Biletler sınırlı sayıda. WhatsApp üzerinden hemen yerinizi ayırtın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905321770637"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp ile Bilet Al
              </a>
              <Link
                href="/etkinlikler"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/30"
              >
                Tüm Etkinlikler
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For AVM Managers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-3">AVM Yöneticileri İçin</p>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                    AVM&apos;nize Aile Trafiği Çekin
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Düşük riskli iş modeli ile ziyaretçi trafiğinizi artırın.
                    <strong>{completedRefs.length} AVM referansı</strong> ve <strong>%{avgOccupancy} ortalama doluluk</strong> ile kanıtlanmış başarı.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      AVM için sıfır maliyet riski
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Profesyonel organizasyon desteği
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Sosyal medya ve ağızdan ağıza tanıtım
                    </li>
                  </ul>
                  <Link
                    href="/avm"
                    className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-bold transition-all"
                  >
                    Detaylı Bilgi Al
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-2xl p-6 text-center text-white">
                    <p className="text-4xl font-black text-amber-400">{totalAttendance.toLocaleString('tr-TR')}</p>
                    <p className="text-sm text-gray-400 mt-1">Toplam Katılım</p>
                  </div>
                  <div className="bg-amber-500 rounded-2xl p-6 text-center text-white">
                    <p className="text-4xl font-black">%{avgOccupancy}</p>
                    <p className="text-sm text-white/80 mt-1">Ort. Doluluk</p>
                  </div>
                  <div className="bg-amber-500 rounded-2xl p-6 text-center text-white">
                    <p className="text-4xl font-black">{avmReferences.length}</p>
                    <p className="text-sm text-white/80 mt-1">AVM Referans</p>
                  </div>
                  <div className="bg-gray-900 rounded-2xl p-6 text-center text-white">
                    <p className="text-4xl font-black text-amber-400">{completedRefs.length}</p>
                    <p className="text-sm text-gray-400 mt-1">Tamamlanan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
