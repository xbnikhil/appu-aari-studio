/**
 * Section heading component.
 * Consistent typography for page section titles with optional kicker.
 */

export default function SectionHeading({
  kicker,
  heading,
  subheading,
  className = '',
  align = 'center',
}) {
  return (
    <section
      className={`section-heading ${className}`}
      style={{ textAlign: align }}
    >
      {kicker && (
        <p className="section-heading-kicker">{kicker}</p>
      )}
      {heading && <h2 className="section-heading-title">{heading}</h2>}
      {subheading && (
        <p className="section-heading-sub">{subheading}</p>
      )}
    </section>
  )
}
