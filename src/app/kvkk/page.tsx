import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni',
  description: 'Hayal Perdesi Organizasyon KVKK Aydınlatma Metni. Kişisel verilerin korunması hakkında bilgilendirme.',
};

export default function KVKKPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">KVKK Aydınlatma Metni</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border prose prose-gray max-w-none">
            <h2>1. Veri Sorumlusu</h2>
            <p>
              Hayal Perdesi Organizasyon olarak, kişisel verilerinizin güvenliği hususunda azami hassasiyet göstermekteyiz.
              Bu bilinçle, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;Kanun&quot;) kapsamında veri sorumlusu sıfatıyla,
              kişisel verilerinizi aşağıda açıklanan amaçlar doğrultusunda işlemekteyiz.
            </p>

            <h2>2. Kişisel Verilerin İşlenme Amacı</h2>
            <p>Toplanan kişisel verileriniz;</p>
            <ul>
              <li>Bilet satış işlemlerinin gerçekleştirilmesi</li>
              <li>Etkinlik bilgilendirmelerinin yapılması</li>
              <li>İletişim taleplerinin yanıtlanması</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            </ul>
            <p>amaçlarıyla işlenmektedir.</p>

            <h2>3. İşlenen Kişisel Veriler</h2>
            <p>
              Tarafımızca işlenen kişisel veriler; ad-soyad, telefon numarası ve iletişim bilgilerinden oluşmaktadır.
            </p>

            <h2>4. Kişisel Verilerin Aktarılması</h2>
            <p>
              Toplanan kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda,
              iş ortaklarımıza, tedarikçilerimize, kanunen yetkili kamu kurumlarına ve özel kişilere
              Kanun&apos;un 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları
              çerçevesinde aktarılabilmektedir.
            </p>

            <h2>5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
            <p>
              Kişisel verileriniz, WhatsApp, sosyal medya ve diğer iletişim kanalları aracılığıyla toplanmaktadır.
              Bu veriler, Kanun&apos;un 5. maddesinde belirtilen &quot;bir sözleşmenin kurulması veya ifasıyla doğrudan
              doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması&quot;
              ve &quot;ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru
              menfaatleri için veri işlenmesinin zorunlu olması&quot; hukuki sebeplerine dayanılarak işlenmektedir.
            </p>

            <h2>6. Kişisel Veri Sahibinin Hakları</h2>
            <p>Kanun&apos;un 11. maddesi uyarınca herkes aşağıdaki haklara sahiptir:</p>
            <ul>
              <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
              <li>Kanun&apos;un 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
              <li>Yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
            </ul>

            <h2>7. İletişim</h2>
            <p>
              Kanun kapsamındaki taleplerinizi WhatsApp üzerinden (+90 532 177 0637) veya
              Instagram hesabımız (@hayalperdesiorganizasyon) aracılığıyla iletebilirsiniz.
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Son güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
