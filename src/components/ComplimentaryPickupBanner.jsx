/**
 * Complimentary Pickup & Drop banner.
 * Reusable benefit banner shown on Home, Process, and Contact pages.
 */

export default function ComplimentaryPickupBanner() {
  return (
    <div className="pickup-banner">
      <div className="pickup-banner-inner container">
        <span className="pickup-banner-kicker">Complimentary Service</span>
        <h3 className="pickup-banner-title">
          Pickup &amp; Drop in Pune
        </h3>
        <p className="pickup-banner-text">
          Enjoy a convenient, personalised experience with complimentary
          pickup and drop-off for your order in Pune. Details can be confirmed
          during your enquiry.
        </p>
      </div>
    </div>
  )
}
