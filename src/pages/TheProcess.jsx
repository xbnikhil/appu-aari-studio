/**
 * The Process page — Appu Aari Studio.
 * Explains the order journey in a premium layout.
 */

import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import AvailabilityNotice from '../components/AvailabilityNotice'
import ComplimentaryPickupBanner from '../components/ComplimentaryPickupBanner'

const processSteps = [
  {
    number: '01',
    title: 'Share Your Idea',
    description:
      'Tell us about the design you have in mind, or share reference images of the embroidery you would like.',
  },
  {
    number: '02',
    title: 'Discuss the Details',
    description:
      'Appu discusses the desired design, fabric, colours, detailing, and requirements with you personally.',
  },
  {
    number: '03',
    title: 'Check Availability',
    description:
      'The request is reviewed against Appu’s current workload to ensure each piece receives the time it deserves.',
  },
  {
    number: '04',
    title: 'Confirm the Order',
    description:
      'The order proceeds only after availability and all relevant details are agreed upon together.',
  },
  {
    number: '05',
    title: 'Handcrafted with Care',
    description:
      'Appu creates the piece by hand with careful attention to every stitch and detail.',
  },
  {
    number: '06',
    title: 'Complimentary Pickup & Drop',
    description:
      'Free pickup and drop-off in Pune, arranged personally for your convenience.',
  },
]

export default function TheProcess() {
  return (
    <>
      <section className="page-hero" aria-label="Page header">
        <div className="page-hero-inner container">
          <div className="page-hero-content">
            <p className="page-hero-kicker">How It Works</p>
            <h1 className="page-hero-title">The Order Journey</h1>
          </div>
        </div>
      </section>

      <section className="section section--text" id="process-intro">
        <div className="container">
          <SectionHeading
            kicker="The Process"
            heading="From Idea to Handmade Piece"
            subheading={
              <span>
                A simple, personal process — with no rush and no compromise on
                quality.
              </span>
            }
            align="left"
          />
          <p className="process-intro-text">
            Because Appu creates each order by hand, she accepts new requests
            only when she has an available slot. This ensures every piece
            receives genuine attention from start to finish.
          </p>
        </div>
      </section>

      <section className="section" id="process-steps">
        <div className="container">
          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step.number} className="process-step">
                <span className="process-step-number">{step.number}</span>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ComplimentaryPickupBanner />
      <AvailabilityNotice />

      <CTASection
        heading="Ready to Begin?"
        text="Share your design idea and we will check availability together."
        buttonLabel="Send an Enquiry"
        buttonTo="/contact"
      />
    </>
  )
}
