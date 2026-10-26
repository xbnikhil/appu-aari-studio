/**
 * Contact / Enquiry page — Appu Aari Studio.
 * Refined enquiry form with availability notice.
 */

import SectionHeading from '../components/SectionHeading'
import EnquiryForm from '../components/EnquiryForm'
import AvailabilityNotice from '../components/AvailabilityNotice'
import ComplimentaryPickupBanner from '../components/ComplimentaryPickupBanner'

export default function Contact() {
  return (
    <>
      <section className="page-hero" aria-label="Page header">
        <div className="page-hero-inner container">
          <div className="page-hero-content">
            <p className="page-hero-kicker">Get in Touch</p>
            <h1 className="page-hero-title">Start an Enquiry</h1>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <SectionHeading
            kicker="Enquire"
            heading="Have a Design in Mind?"
            subheading={
              <span>
                Tell us about the piece you would love to create. We will
                discuss your requirements and confirm availability before any
                order is accepted.
              </span>
            }
            align="left"
          />

          <div className="contact-layout">
            <div className="contact-form">
              <EnquiryForm />
            </div>

            <aside className="contact-info">
              <div className="info-card">
                <h3 className="info-card-title">Complimentary Pickup &amp; Drop</h3>
                <p className="info-card-text">
                  Enjoy a convenient, personalised experience with complimentary
                  pickup and drop-off for your order in Pune. Details can be
                  confirmed during your enquiry.
                </p>
              </div>

              <div className="info-card info-card--availability">
                <h3 className="info-card-title">Order Availability</h3>
                <p className="info-card-text">
                  Each creation receives the time and attention it deserves. New
                  orders are accepted according to availability — your order is
                  confirmed only after we discuss your requirements and confirm
                  an available slot.
                </p>
              </div>

              <div className="info-card info-card--location">
                <h3 className="info-card-title">Location</h3>
                <p className="info-card-text">
                  Appu Aari Studio serves customers in Pune, Maharashtra, India.
                  Complimentary pickup and drop-off is available within Pune.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <AvailabilityNotice />
    </>
  )
}
