export interface AVMReference {
  id: string;
  city: string;
  avm: string;
  culturalCenter: string;
  date: string;
  time: string;
  capacity?: number;
  attendance?: number;
  ageRange: string;
  status: 'completed' | 'planned' | 'upcoming';
}

export interface Character {
  name: string;
  emoji: string;
  color: string;
}

export interface ShowInfo {
  name: string;
  ageRange: string;
  duration: string;
  sessions: string;
  characters: Character[];
  standFeatures: string[];
}

export const showInfo: ShowInfo = {
  name: 'Buzul Ekspresi',
  ageRange: '4–11 yaş',
  duration: '1 saat',
  sessions: '17:30 – 18:30 (2 seans)',
  characters: [
    { name: 'Kutup Ayısı Pofi', emoji: '🐻‍❄️', color: 'sky' },
    { name: 'Penguen Lumi', emoji: '🐧', color: 'indigo' },
    { name: 'Karga Kuru', emoji: '🐦‍⬛', color: 'slate' },
  ],
  standFeatures: [
    'Canlı karakterler ile etkileşim',
    'Fotoğraf alanı',
    'Sahne dekoru',
    'Ailece vakit geçirilen deneyim alanı',
  ],
};

export const avmReferences: AVMReference[] = [
  {
    id: 'karabuk-kares',
    city: 'Karabük',
    avm: 'Kares AVM',
    culturalCenter: 'Leyla Dizdar Kültür Merkezi',
    date: '28 Aralık 2024',
    time: '17:30 – 18:30',
    capacity: 300,
    attendance: 272,
    ageRange: '4–11 yaş',
    status: 'completed',
  },
  {
    id: 'antalya-agora',
    city: 'Antalya',
    avm: 'Agora AVM',
    culturalCenter: 'Agora Kültür Merkezi',
    date: '2024',
    time: '17:00 – 19:00',
    capacity: 500,
    attendance: 378,
    ageRange: '4–11 yaş',
    status: 'completed',
  },
  {
    id: 'kocaeli-arasta',
    city: 'Kocaeli',
    avm: 'ArastaPark AVM',
    culturalCenter: 'ArastaPark Etkinlik Alanı',
    date: '2024',
    time: '17:00 – 19:00',
    capacity: 400,
    attendance: 322,
    ageRange: '4–11 yaş',
    status: 'completed',
  },
  {
    id: 'cankiri-yunus',
    city: 'Çankırı',
    avm: 'Yunus AVM',
    culturalCenter: 'Atatürk Kültür Merkezi',
    date: '1 Şubat 2025',
    time: '17:30 – 18:30',
    ageRange: '4–11 yaş',
    status: 'planned',
  },
  {
    id: 'rize-simal',
    city: 'Rize',
    avm: 'Şimal AVM',
    culturalCenter: 'Şimal Kültür Merkezi',
    date: 'Yakında',
    time: 'Belirlenecek',
    ageRange: '4–11 yaş',
    status: 'upcoming',
  },
];


export const avmBenefits = [
  {
    title: 'Sıfır Maliyet Riski',
    description: 'AVM herhangi bir ödeme yapmaz. Stand alanı ve kültür merkezi yönlendirmesi yeterli.',
    icon: 'shield',
    highlight: true,
  },
  {
    title: 'Aile Trafiği Artışı',
    description: 'Bilet satış standı ve ücretsiz çocuk aktiviteleri ile AVM\'ye aile grupları çekilir.',
    icon: 'chart',
    highlight: false,
  },
  {
    title: 'Çocuk Dostu Deneyim',
    description: 'Canlı karakterler, fotoğraf alanı ve mini oyunlar ile çocuklar eğlenir, aileler AVM\'de kalır.',
    icon: 'heart',
    highlight: false,
  },
  {
    title: 'Sosyal Medya Etkisi',
    description: 'Karakterlerle fotoğraflar doğal olarak paylaşılır, AVM organik reklam alır.',
    icon: 'camera',
    highlight: false,
  },
  {
    title: 'Profesyonel Organizasyon',
    description: 'Tüm planlama, kurulum ve yönetim bizden. AVM sadece alan sağlar.',
    icon: 'cog',
    highlight: false,
  },
  {
    title: 'Kanıtlanmış Sonuçlar',
    description: '3 AVM referansı ve ortalama %80+ doluluk oranı ile kanıtlanmış başarı.',
    icon: 'star',
    highlight: false,
  },
];

export const processSteps = [
  {
    step: 1,
    title: 'AVM İçi Satış',
    color: 'emerald',
    items: [
      'AVM içerisinde stand kurulumu',
      'AVM ziyaretçisine birebir bilet satışı',
      'Çocuklara ücretsiz mini oyun / aktivite',
      'Canlı karakterler ile yüksek ilgi ve trafik',
    ],
  },
  {
    step: 2,
    title: 'Bekleme Süreci (45 Gün)',
    color: 'amber',
    items: [
      'Satıştan sonra yaklaşık 45 gün',
      'AVM içi duyurular ve sosyal medya paylaşımları',
      'Talep ve beklenti oluşturma',
    ],
  },
  {
    step: 3,
    title: 'Gösterim',
    color: 'violet',
    items: [
      'AVM\'nin yönlendirdiği kültür merkezinde',
      '"Buzul Ekspresi" sahne alır',
      'Planlı ve profesyonel organizasyon',
    ],
  },
];

export const getCompletedReferences = () => avmReferences.filter((r) => r.status === 'completed');
export const getPlannedReferences = () => avmReferences.filter((r) => r.status === 'planned');
