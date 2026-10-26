/**
 * Home page — Appu Aari Studio.
 * Premium landing page communicating handmade craftsmanship.
 */

import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import ComplimentaryPickupBanner from '../components/ComplimentaryPickupBanner'
import AvailabilityNotice from '../components/AvailabilityNotice'
import ImageGallery from '../components/ImageGallery'
import { images } from '../data/images'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" aria-label="Hero">
        <div className="hero-inner container">
          <div className="hero-content">
            <p className="hero-kicker">Appu Aari Studio · Pune, Maharashtra</p>
            <h1 className="hero-title">
              Handmade with Heart. Crafted in Every Detail.
            </h1>
            <p className="hero-sub">
              Thoughtfully handcrafted Aari embroidery, created one piece at a
              time in Pune.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn--primary btn--large">
                Enquire About Your Design
              </Link>
              <Link to="/our-work" className="btn btn--secondary">
                Explore Our Work
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={images.hero.src}
              alt={images.hero.alt}
              className="hero-image-img"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Complimentary Pickup & Drop */}
      <ComplimentaryPickupBanner />

      {/* The Art of Handmade */}
      <section className="section section--text" id="handmade">
        <div className="container">
          <SectionHeading
            kicker="Our Philosophy"
            heading="The Art of Handmade"
            subheading={
              <span>
                Every piece is carefully handcrafted by Appu, with attention to
                intricate detailing and the individuality of each design. No two
                creations are exactly alike — and that is the beauty of hand
                embroidery.
              </span>
            }
            align="left"
          />
          <div className="text-content">
            <img
              src={images.handmadeDetail.src}
              alt={images.handmadeDetail.alt}
              className="detail-image"
              loading="lazy"
            />
            <div className="text-body">
              <p>
                Aari embroidery is a slow, patient craft. Each stitch is placed
                by hand using a special hooked needle, creating fine, raised
                motifs that cannot be replicated by machine. Appu brings genuine
                interest and patience to every piece, ensuring that the
                craftsmanship shines through in the finished work.
              </p>
              <p>
                Because each design is created by hand, Appu accepts only as
                many orders as she can thoughtfully complete — so every customer
                receives the time and attention their piece deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Creations */}
      <section className="section" id="creations">
        <div className="container">
          <SectionHeading
            kicker="Selected Creations"
            heading="Our Work"
            subheading={
              <span>
                A glimpse of handcrafted Aari embroidery — floral motifs, blouse
                work, borders, and fine thread details.
              </span>
            }
          />
          <ImageGallery images={images.gallery} columns={3} />
        </div>
      </section>

      {/* Made with Intention */}
      <section className="section section--text section--alt" id="intention">
        <div className="container">
          <SectionHeading
            kicker="Our Approach"
            heading="Made with Intention"
            subheading={
              <span>
                Appu prioritises careful execution and customer satisfaction
                rather than accepting more orders than she can thoughtfully
                complete.
              </span>
            }
            align="left"
          />
          <div className="text-content">
            <div className="text-body">
              <p>
                Quality cannot be rushed. Appu works on a limited number of
                pieces at a time so that each design receives the patience and
                care it deserves — from the first stitch to the final finish.
              </p>
              <p>
                This means your order is never part of a production line. It is
                a personal creation, made with attention to the details that
                matter to you.
              </p>
            </div>
            <img
              src={images.threadwork.src}
              alt={images.threadwork.alt}
              className="detail-image detail-image--right"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* A Personal Experience */}
      <section className="section" id="personal">
        <div className="container">
          <SectionHeading
            kicker="Personal Service"
            heading="A Personal Experience"
            subheading={
              <span>
                We listen to your vision, discuss design details, and confirm
                everything before your order begins.
              </span>
            }
          />
          <div className="experience-grid">
            <div className="experience-item">
              <span className="experience-number">01</span>
              <h3>Understanding Your Vision</h3>
              <p>
                You share your design idea or reference images, and we discuss
                the fabric, colours, and detailing together.
              </p>
            </div>
            <div className="experience-item">
              <span className="experience-number">02</span>
              <h3>Design Confirmation</h3>
              <p>
                Every detail is agreed upon before Appu begins work, so you know
                exactly what to expect.
              </p>
            </div>
            <div className="experience-item">
              <span className="experience-number">03</span>
              <h3>Personal Communication</h3>
              <p>
                Appu communicates with you directly throughout the process — no
                intermediaries, no automated responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Notice */}
      <AvailabilityNotice />

      {/* Final CTA */}
      <CTASection
        heading="Have a Design in Mind?"
        text="Let's talk about the piece you would love to create."
        buttonLabel="Start an Enquiry"
        buttonTo="/contact"
      />
    </>
  )
}
