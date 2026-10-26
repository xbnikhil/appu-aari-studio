/**
 * Image Gallery component.
 * Editorial grid of embroidery photographs with subtle hover effect.
 * Clicking an image opens the ImageLightbox.
 */

import { useState } from 'react'
import ImageLightbox from './ImageLightbox'

export default function ImageGallery({ images, columns = 3 }) {
  const [openImage, setOpenImage] = useState(null)

  return (
    <section className="image-gallery">
      <div className="image-gallery-inner container">
        <div className="image-gallery-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
          {images.map((image) => (
            <article
              key={image.id}
              className="gallery-item"
              onClick={() => setOpenImage(image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setOpenImage(image)
                }
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="gallery-image"
              />
              {image.caption && (
                <p className="gallery-caption">{image.caption}</p>
              )}
              <div className="gallery-overlay">
                <span className="gallery-view">View</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {openImage && (
        <ImageLightbox
          image={openImage}
          allImages={images}
          onClose={() => setOpenImage(null)}
        />
      )}
    </section>
  )
}
