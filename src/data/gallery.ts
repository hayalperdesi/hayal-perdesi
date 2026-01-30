export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'gosteriler' | 'sahne-arkasi' | 'etkinlikler';
  venue?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/gosteri-1.jpg',
    alt: 'Karagöz ve Hacivat gölge oyunu sahnesi',
    category: 'gosteriler',
    venue: 'Leyla Dizdar Kültür Merkezi, Karabük',
  },
  {
    id: '2',
    src: '/images/gallery/gosteri-2.jpg',
    alt: 'Çocuklar gösteri izlerken',
    category: 'gosteriler',
  },
  {
    id: '3',
    src: '/images/gallery/sahne-1.jpg',
    alt: 'Hayal perdesi hazırlıkları',
    category: 'sahne-arkasi',
  },
  {
    id: '4',
    src: '/images/gallery/etkinlik-1.jpg',
    alt: 'AVM etkinlik alanı',
    category: 'etkinlikler',
  },
  {
    id: '5',
    src: '/images/gallery/gosteri-3.jpg',
    alt: 'Gölge oyunu figürleri',
    category: 'gosteriler',
  },
  {
    id: '6',
    src: '/images/gallery/etkinlik-2.jpg',
    alt: 'Kültür merkezi gösterisi',
    category: 'etkinlikler',
    venue: 'Leyla Dizdar Kültür Merkezi, Karabük',
  },
];

export const getImagesByCategory = (category: GalleryImage['category']) =>
  galleryImages.filter((img) => img.category === category);

export const categories = [
  { id: 'gosteriler', label: 'Gösteriler' },
  { id: 'sahne-arkasi', label: 'Sahne Arkası' },
  { id: 'etkinlikler', label: 'Etkinlikler' },
] as const;
