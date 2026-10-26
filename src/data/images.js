/**
 * Central image configuration for Appu Aari Studio.
 *
 * To replace a placeholder with a real photograph:
 * 1. Add your image file to `public/images/` (e.g. `public/images/hero-embroidery.jpg`).
 * 2. Update the `src` below to point to `/images/your-file.jpg`.
 * 3. Update `alt` text as needed.
 *
 * All components import from this single file, so image changes only
 * need to be made in one place.
 */

export const images = {
  hero: {
    src: '/images/hero-embroidery.svg',
    alt: 'Handmade Aari embroidery detail by Appu Aari Studio',
  },
  handmadeDetail: {
    src: '/images/handmade-detail.svg',
    alt: 'Close-up of handcrafted Aari embroidery stitching',
  },
  aariFloral: {
    src: '/images/aari-floral-work.svg',
    alt: 'Aari floral embroidery motif',
  },
  blouseWork: {
    src: '/images/blouse-embroidery.svg',
    alt: 'Aari embroidery on a blouse',
  },
  goldPipe: {
    src: '/images/gold-pipe-detail.svg',
    alt: 'Gold pipe embroidery border detail',
  },
  threadwork: {
    src: '/images/threadwork-detail.svg',
    alt: 'Fine threadwork embroidery detail',
  },
  appuPortrait: {
    src: '/images/appu-portrait.svg',
    alt: 'Appu, founder of Appu Aari Studio',
  },
  gallery: [
    {
      id: 'gallery-01',
      src: '/images/gallery-01.svg',
      alt: 'Aari embroidery floral motif detail',
      caption: 'Floral Aari motif',
    },
    {
      id: 'gallery-02',
      src: '/images/gallery-02.svg',
      alt: 'Aari embroidery border design',
      caption: 'Border embroidery',
    },
    {
      id: 'gallery-03',
      src: '/images/gallery-03.svg',
      alt: 'Blouse with Aari threadwork',
      caption: 'Blouse embroidery',
    },
    {
      id: 'gallery-04',
      src: '/images/gallery-04.svg',
      alt: 'Gold pipe and threadwork border',
      caption: 'Gold pipe border',
    },
    {
      id: 'gallery-05',
      src: '/images/gallery-05.svg',
      alt: 'Intricate Aari thread detail',
      caption: 'Thread detail',
    },
    {
      id: 'gallery-06',
      src: '/images/gallery-06.svg',
      alt: 'Aari embroidery neckline design',
      caption: 'Neckline embroidery',
    },
  ],
}

/**
 * Returns the image URL, falling back to the configured placeholder
 * if a real image has not yet been added.
 */
export function getImage(config) {
  return config.src
}

export default images
