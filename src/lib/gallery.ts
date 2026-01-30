import fs from 'fs/promises';
import path from 'path';

const GALLERY_DIR = path.join(process.cwd(), 'public', 'gallery');
const VALID_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

export async function getGalleryImages(): Promise<string[]> {
  try {
    const files = await fs.readdir(GALLERY_DIR);

    const images = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return VALID_EXTENSIONS.includes(ext);
      })
      .sort((a, b) => a.localeCompare(b, 'tr', { numeric: true }))
      .map((file) => `/gallery/${file}`);

    return images;
  } catch (error) {
    console.error('Galeri klasörü okunamadı:', error);
    return [];
  }
}

export async function getGalleryPreview(count: number = 6): Promise<string[]> {
  const images = await getGalleryImages();
  return images.slice(0, count);
}
