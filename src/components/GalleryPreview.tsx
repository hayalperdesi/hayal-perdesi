import Image from 'next/image';
import Link from 'next/link';
import { getGalleryPreview } from '@/lib/gallery';

export default async function GalleryPreview() {
  const images = await getGalleryPreview(6);

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-3">Fotoğraflar</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Etkinliklerden Kareler
            </h2>
          </div>

          {/* Preview Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {images.map((src, index) => (
              <Link
                key={src}
                href="/galeri"
                className="aspect-square relative rounded-2xl overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={`Etkinlik fotoğrafı ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  priority={index < 2}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/galeri"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-bold transition-all"
            >
              Tümünü Gör
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
