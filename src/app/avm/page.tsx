import { Metadata } from 'next';
import { showInfo, avmReferences, avmBenefits, processSteps, getCompletedReferences } from '@/data/avm';

export const metadata: Metadata = {
  title: 'AVM İş Birliği | Buzul Ekspresi Çocuk Tiyatrosu',
  description: 'AVM\'ler için sıfır maliyetli aile etkinlik modeli. Stand + ücretsiz çocuk aktiviteleri + 45 gün sonra kültür merkezinde sahne oyunu. 3 AVM referansı, %80+ doluluk.',
  openGraph: {
    title: 'AVM İş Birliği | Hayal Perdesi Organizasyon',
    description: 'AVM içinde bilet satış standı + çocuklara ücretsiz oyun alanı + kültür merkezinde profesyonel sahne oyunu',
  },
};

const WHATSAPP_NUMBER = '905321770637';
const PROPOSAL_MESSAGE = `Merhaba, AVM etkinlik iş birliği hakkında bilgi almak istiyorum.

AVM Adı:
Şehir:
İletişim Bilgileri:
Uygun Tarih Aralığı:`;

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PROPOSAL_MESSAGE)}`;

// İstatistikler
const completedRefs = getCompletedReferences();
const totalAttendance = completedRefs.reduce((sum, r) => sum + (r.attendance || 0), 0);
const totalCapacity = completedRefs.reduce((sum, r) => sum + (r.capacity || 0), 0);
const avgOccupancy = Math.round((totalAttendance / totalCapacity) * 100);

export default function AVMPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Premium B2B */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('/images/hero/buzul-ekspresi.jpg')] bg-cover bg-center opacity-20" />

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              B2B İş Birliği Modeli
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
              AVM&apos;nize Aile Trafiği Çekin,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                Sıfır Maliyetle
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Çocuk tiyatrosu odaklı etkinlik modelimiz ile ziyaretçi sayınızı artırın.
              <strong className="text-white"> 3 AVM referansı</strong> ve
              <strong className="text-amber-400"> %{avgOccupancy} ortalama doluluk</strong> ile kanıtlanmış başarı.
            </p>

            {/* Key Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-10 max-w-xl">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/10">
                <p className="text-4xl font-black text-amber-400">{completedRefs.length}</p>
                <p className="text-sm text-slate-400 mt-1">Tamamlanan AVM</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/10">
                <p className="text-4xl font-black text-white">{totalAttendance.toLocaleString('tr-TR')}</p>
                <p className="text-sm text-slate-400 mt-1">Toplam Katılım</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/10">
                <p className="text-4xl font-black text-green-400">%{avgOccupancy}</p>
                <p className="text-sm text-slate-400 mt-1">Ort. Doluluk</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-green-500/25"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                İş Birliği Görüşmesi
              </a>
              <a
                href="#nasil-calisir"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
              >
                Nasıl Çalışır?
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-slate-900 text-white py-6 border-y border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">AVM için sıfır maliyet</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Profesyonel ekip</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">3+ AVM referansı</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">%{avgOccupancy} ortalama doluluk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Bu Model Çalışıyor? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">Avantajlar</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mt-3">
                Neden Bu Model Çalışıyor?
              </h2>
              <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
                AVM&apos;ler için tasarlanmış, düşük riskli ve yüksek getirili iş birliği modeli.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {avmBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className={`rounded-2xl p-6 transition-all hover:shadow-xl ${
                    benefit.highlight
                      ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/20'
                      : 'bg-slate-50 hover:bg-white border border-slate-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    benefit.highlight ? 'bg-white/20' : 'bg-amber-100'
                  }`}>
                    {benefit.icon === 'shield' && (
                      <svg className={`w-6 h-6 ${benefit.highlight ? 'text-white' : 'text-amber-600'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    )}
                    {benefit.icon === 'chart' && (
                      <svg className={`w-6 h-6 ${benefit.highlight ? 'text-white' : 'text-amber-600'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                      </svg>
                    )}
                    {benefit.icon === 'heart' && (
                      <svg className={`w-6 h-6 ${benefit.highlight ? 'text-white' : 'text-amber-600'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    )}
                    {benefit.icon === 'camera' && (
                      <svg className={`w-6 h-6 ${benefit.highlight ? 'text-white' : 'text-amber-600'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                      </svg>
                    )}
                    {benefit.icon === 'cog' && (
                      <svg className={`w-6 h-6 ${benefit.highlight ? 'text-white' : 'text-amber-600'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {benefit.icon === 'star' && (
                      <svg className={`w-6 h-6 ${benefit.highlight ? 'text-white' : 'text-amber-600'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    )}
                  </div>
                  <h3 className={`font-bold text-lg mb-2 ${benefit.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {benefit.title}
                  </h3>
                  <p className={benefit.highlight ? 'text-white/90' : 'text-slate-600'}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nasıl Çalışır - 3 Adım */}
      <section id="nasil-calisir" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">Süreç</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mt-3">
                3 Adımda İş Birliği
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-slate-200" />
                  )}

                  <div className={`rounded-2xl p-8 h-full relative ${
                    index === 0 ? 'bg-amber-500 text-white' :
                    index === 1 ? 'bg-white border-2 border-slate-200 text-slate-900' :
                    'bg-slate-900 text-white'
                  }`}>
                    {/* Step Number */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      index === 0 ? 'bg-white/20' :
                      index === 1 ? 'bg-amber-500' :
                      'bg-amber-500'
                    }`}>
                      <span className={`text-3xl font-black ${index === 1 ? 'text-white' : ''}`}>{step.step}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>

                    <ul className="space-y-3">
                      {step.items.map((item) => (
                        <li key={item} className={`flex items-start gap-3 ${
                          index === 1 ? 'text-slate-600' : 'text-white/90'
                        }`}>
                          <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            index === 0 ? 'text-white/70' :
                            index === 1 ? 'text-amber-500' :
                            'text-amber-400'
                          }`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Oyun Tanıtımı */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Sol - Metin */}
              <div>
                <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">Oyun</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mt-3 mb-6">
                  {showInfo.name}
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  <strong>{showInfo.ageRange}</strong> arası çocuklar için tasarlanmış, eğitici ve eğlenceli profesyonel sahne oyunu.
                </p>

                {/* Karakterler */}
                <div className="space-y-4 mb-8">
                  <h3 className="font-bold text-slate-900">Karakterler</h3>
                  <div className="flex flex-wrap gap-3">
                    {showInfo.characters.map((char) => (
                      <div key={char.name} className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
                        <span className="text-2xl">{char.emoji}</span>
                        <span className="font-medium text-slate-700">{char.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detaylar */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-sm text-slate-500">Süre</p>
                    <p className="font-bold text-slate-900">{showInfo.duration}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-sm text-slate-500">Yaş Aralığı</p>
                    <p className="font-bold text-slate-900">{showInfo.ageRange}</p>
                  </div>
                </div>
              </div>

              {/* Sağ - Stand Özellikleri */}
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">AVM Standında Sunulanlar</h3>
                <div className="space-y-4">
                  {showInfo.standFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-white/80 text-sm">
                    Tüm stand malzemeleri, dekor ve kostümler tarafımızdan sağlanır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referanslar */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-amber-400 font-bold text-sm uppercase tracking-wider">Referanslar</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-3">
                İş Birliği Yaptığımız AVM&apos;ler
              </h2>
              <p className="text-lg text-slate-400 mt-4">
                Her etkinlikte yüksek doluluk oranları ve memnun AVM yönetimleri
              </p>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                <p className="text-4xl font-black text-amber-400">{avmReferences.length}</p>
                <p className="text-sm text-slate-400 mt-1">Toplam AVM</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                <p className="text-4xl font-black text-white">{completedRefs.length}</p>
                <p className="text-sm text-slate-400 mt-1">Tamamlanan</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                <p className="text-4xl font-black text-green-400">{totalAttendance.toLocaleString('tr-TR')}</p>
                <p className="text-sm text-slate-400 mt-1">Toplam Katılım</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                <p className="text-4xl font-black text-amber-400">%{avgOccupancy}</p>
                <p className="text-sm text-slate-400 mt-1">Ort. Doluluk</p>
              </div>
            </div>

            {/* Reference Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {avmReferences.map((ref) => {
                const occupancyRate = ref.capacity && ref.attendance
                  ? Math.round((ref.attendance / ref.capacity) * 100)
                  : null;

                return (
                  <div
                    key={ref.id}
                    className={`rounded-2xl p-6 transition-all ${
                      ref.status === 'completed'
                        ? 'bg-white'
                        : ref.status === 'planned'
                        ? 'bg-amber-500/10 border border-amber-500/30'
                        : 'bg-slate-800 border border-slate-700'
                    }`}
                  >
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        ref.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : ref.status === 'planned'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-slate-700 text-slate-300'
                      }`}>
                        {ref.status === 'completed' ? 'Tamamlandı' : ref.status === 'planned' ? 'Planlandı' : 'Yakında'}
                      </span>
                      {occupancyRate && (
                        <span className="text-lg font-black text-green-600">%{occupancyRate}</span>
                      )}
                    </div>

                    {/* City & AVM */}
                    <h3 className={`text-xl font-bold mb-1 ${
                      ref.status === 'completed' ? 'text-slate-900' : 'text-white'
                    }`}>
                      {ref.city}
                    </h3>
                    <p className={`font-medium mb-4 ${
                      ref.status === 'completed' ? 'text-amber-600' : 'text-amber-400'
                    }`}>
                      {ref.avm}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 text-sm">
                      <div className={`flex items-center gap-2 ${
                        ref.status === 'completed' ? 'text-slate-600' : 'text-slate-400'
                      }`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        <span>{ref.culturalCenter}</span>
                      </div>

                      {ref.capacity && ref.attendance && (
                        <div className={`flex items-center gap-2 ${
                          ref.status === 'completed' ? 'text-slate-600' : 'text-slate-400'
                        }`}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                          </svg>
                          <span>{ref.attendance} / {ref.capacity} kişi</span>
                        </div>
                      )}

                      {ref.date && ref.date !== 'Yakında' && (
                        <div className={`flex items-center gap-2 ${
                          ref.status === 'completed' ? 'text-slate-600' : 'text-slate-400'
                        }`}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                          <span>{ref.date}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              AVM&apos;niz için
              <br />
              Görüşme Ayarlayalım
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-xl mx-auto">
              Detaylı bilgi ve şehrinize özel teklif için hemen iletişime geçin.
              İş birliği sürecini başlatalım.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-amber-600 px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-black/20"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp ile İletişime Geç
            </a>

            <p className="mt-8 text-white/80 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              0532 177 06 37
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
