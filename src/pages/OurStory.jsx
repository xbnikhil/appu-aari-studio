/**
 * Our Story page — Appu Aari Studio.
 * Personal, elegant brand story page.
 */

import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import AvailabilityNotice from '../components/AvailabilityNotice'
import ComplimentaryPickupBanner from '../components/ComplimentaryPickupBanner'
import { images } from '../data/images'

export default function OurStory() {
  return (
    <>
      <section className="page-hero" aria-label="Page header">
        <div className="page-hero-inner container">
          <div className="page-hero-content">
            <p className="page-hero-kicker">Our Story</p>
            <h1 className="page-hero-title">The Hands Behind the Stitch</h1>
          </div>
          <div className="page-hero-image">
            <img
              src={images.appuPortrait.src}
              alt={images.appuPortrait.alt}
              className="page-hero-image-img"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="section section--text" id="story">
        <div className="container">
          <SectionHeading
            kicker="Our Story"
            heading="A Love for Aari Work"
            subheading={
              <span>
                Appu's journey with Aari embroidery began with a fascination for
                the patience and precision the craft demands. Over time, that
                fascination grew into a studio where every piece is made by hand
                with genuine care.
              </span>
            }
            align="left"
          />
          <div className="story-content">
            <p>
              Aari work is more than embroidery — it is a slow, meditative
              process that uses a hooked needle to create fine, raised motifs
              on fabric. Each design requires hours of focused attention, and
              Appu approaches every piece with that same dedication.
            </p>
            <p>
              She believes that handmade craftsmanship matters more than volume.
              Rather than accepting a high number of orders, Appu chooses to
              work on a limited number of pieces at a time, giving each one the
              patience it deserves.
            </p>
            <p>
              Customer satisfaction is at the heart of the studio. Every design
              is discussed personally, and every stitch is placed with the
              intention of creating something the customer will cherish.
            </p>
          </div>
        </div>
      </section>

      <ComplimentaryPickupBanner />
      <AvailabilityNotice />

      <CTASection
        heading="Start a Conversation"
        text="Share your design idea and we will discuss how Appu can bring it to life."
        buttonLabel="Send an Enquiry"
        buttonTo="/contact"
      />
    </>
  )
}
