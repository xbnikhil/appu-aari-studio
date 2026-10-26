/**
 * Our Work page — Appu Aari Studio.
 * Editorial image gallery of embroidery work.
 */

import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import AvailabilityNotice from '../components/AvailabilityNotice'
import ImageGallery from '../components/ImageGallery'
import { images } from '../data/images'

export default function OurWork() {
  return (
    <>
      <section className="page-hero" aria-label="Page header">
        <div className="page-hero-inner container">
          <div className="page-hero-content">
            <p className="page-hero-kicker">Our Work</p>
            <h1 className="page-hero-title">Selected Creations</h1>
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <SectionHeading
            kicker="Portfolio"
            heading="Handcrafted Aari Embroidery"
            subheading={
              <span>
                Temporary images shown for layout purposes. These will be
                replaced with photographs of Appu's actual work.
              </span>
            }
          />
          <ImageGallery images={images.gallery} columns={3} />
        </div>
      </section>

      <AvailabilityNotice />

      <CTASection
        heading="Interested in a Custom Piece?"
        text="Share your design idea and we will discuss availability and next steps."
        buttonLabel="Send an Enquiry"
        buttonTo="/contact"
      />
    </>
  )
}
