/**
 * CTA section.
 * Reusable call-to-action block used at the end of pages.
 */

import { Link } from 'react-router-dom'

export default function CTASection({
  heading,
  text,
  buttonLabel,
  buttonTo = '/contact',
  className = '',
}) {
  return (
    <section className={`cta-section ${className}`.trim()}>
      <div className="cta-section-inner container">
        <h2 className="cta-section-heading">{heading}</h2>
        <p className="cta-section-text">{text}</p>
        <a href={buttonTo} className="btn btn--primary btn--block cta-button">
          {buttonLabel}
        </a>
      </div>
    </section>
  )
}
