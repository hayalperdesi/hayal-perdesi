import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeri',
  description: 'Buzul Ekspresi çocuk tiyatrosu gösterilerimizden ve etkinliklerimizden fotoğraflar.',
};

export default function GaleriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
