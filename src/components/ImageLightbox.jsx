/**
 * Image Lightbox component.
 * Full-screen image viewer with accessible close button and keyboard navigation.
 */

import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageLightbox({ image, allImages, onClose }) {
  const currentIndex = allImages.findIndex((img) => img.id === image.id)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && currentIndex < allImages.length - 1) {
        setCurrentImage(allImages[currentIndex + 1])
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentImage(allImages[currentIndex - 1])
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [currentIndex, image, allImages, onClose])

  const [currentImage, setCurrentImage] = useState(image)

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Image view"
    >
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close image view"
      >
        <X size={20} strokeWidth={2} />
      </button>

      <div className="lightbox-content">
        <button
          className="lightbox-nav lightbox-nav--prev"
          onClick={() =>
            currentIndex > 0 && setCurrentImage(allImages[currentIndex - 1])
          }
          disabled={currentIndex === 0}
          aria-label="Previous image"
        >
          <ChevronLeft size={24} strokeWidth={2} />
        </button>

        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="lightbox-image"
        />

        <button
          className="lightbox-nav lightbox-nav--next"
          onClick={() =>
            currentIndex < allImages.length - 1 &&
            setCurrentImage(allImages[currentIndex + 1])
          }
          disabled={currentIndex === allImages.length - 1}
          aria-label="Next image"
        >
          <ChevronRight size={24} strokeWidth={2} />
        </button>

        {currentImage.caption && (
          <p className="lightbox-caption">{currentImage.caption}</p>
        )}
      </div>
    </div>
  )
}
