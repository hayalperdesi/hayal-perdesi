export interface Event {
  id: string;
  title: string;
  city: string;
  venue: string;
  avm?: string;
  culturalCenter?: string;
  date: string;
  time: string;
  status: 'active' | 'coming-soon' | 'sold-out';
  description: string;
  image: string;
  ticketInfo: string;
}

export const events: Event[] = [
  {
    id: 'karabuk-gosterisi',
    title: 'Buzul Ekspresi',
    city: 'Karabük',
    venue: 'Leyla Dizdar Kültür Merkezi',
    avm: 'Kares AVM',
    culturalCenter: 'Leyla Dizdar Kültür Merkezi',
    date: '2024-12-28',
    time: '17:30',
    status: 'sold-out',
    description: 'Buzul Ekspresi çocuk tiyatrosu Karabük\'te gerçekleşti. 300 kişilik salonda 272 katılım sağlandı.',
    image: '/images/events/karabuk.jpg',
    ticketInfo: 'Bu etkinliğin bilet satışı sona ermiştir.',
  },
  {
    id: 'cankiri-gosterisi',
    title: 'Buzul Ekspresi',
    city: 'Çankırı',
    venue: 'Atatürk Kültür Merkezi',
    avm: 'Yunus AVM',
    culturalCenter: 'Atatürk Kültür Merkezi',
    date: '2025-02-01',
    time: '17:30',
    status: 'active',
    description: 'Buzul Ekspresi çocuk tiyatrosu Çankırı\'da! 4-11 yaş arası çocuklar için eğlenceli ve öğretici bir gösteri.',
    image: '/images/events/cankiri.jpg',
    ticketInfo: 'Biletler Yunus AVM standından ve Atatürk Kültür Merkezi gişesinden temin edilebilir.',
  },
  {
    id: 'rize-gosterisi',
    title: 'Buzul Ekspresi',
    city: 'Rize',
    venue: 'Yakında açıklanacak',
    avm: 'Şimal AVM',
    culturalCenter: 'Yakında açıklanacak',
    date: '2025',
    time: 'Belirlenecek',
    status: 'coming-soon',
    description: 'Buzul Ekspresi çocuk tiyatrosu yakında Rize\'de! Detaylar için takipte kalın.',
    image: '/images/events/rize.jpg',
    ticketInfo: 'Bilet satışı yakında başlayacak.',
  },
];

export const getActiveEvents = () => events.filter((e) => e.status === 'active');
export const getComingSoonEvents = () => events.filter((e) => e.status === 'coming-soon');
export const getSoldOutEvents = () => events.filter((e) => e.status === 'sold-out');
export const getAllTicketEvents = () => events; // Tüm etkinlikler (bilet sayfası için)
export const getEventById = (id: string) => events.find((e) => e.id === id);
export const getEventsByCity = (city: string) => events.filter((e) => e.city.toLowerCase() === city.toLowerCase());
