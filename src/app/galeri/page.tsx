import { Metadata } from 'next';
import { getGalleryImages } from '@/lib/gallery';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata: Metadata = {
  title: 'Galeri',
  description: 'Buzul Ekspresi çocuk tiyatrosu gösterilerimizden ve etkinliklerimizden fotoğraflar.',
};

export default async function GaleriPage() {
  const images = await getGalleryImages();

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-3">Fotoğraflar</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Galeri</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Buzul Ekspresi gösterilerimizden ve etkinliklerimizden kareler.
          </p>
        </div>

        {/* Gallery Grid */}
        {images.length > 0 ? (
          <GalleryGrid images={images} priorityCount={4} />
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <p className="text-gray-500">Henüz fotoğraf eklenmemiş.</p>
          </div>
        )}

        {/* Image Count */}
        {images.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">{images.length} fotoğraf</p>
          </div>
        )}

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Daha fazla fotoğraf için Instagram sayfamızı takip edin
          </p>
          <a
            href="https://instagram.com/hayalperdesiorganizasyon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-full font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @hayalperdesiorganizasyon
          </a>
        </div>
      </div>
    </div>
  );
}
