/**
 * Availability notice.
 * Communicates that orders are accepted subject to Appu's availability.
 */

export default function AvailabilityNotice() {
  return (
    <div className="availability-notice">
      <div className="availability-notice-inner container">
        <span className="availability-notice-kicker">Order Availability</span>
        <p className="availability-notice-text">
          Each creation receives the time and attention it deserves. To
          preserve the quality of our handmade work, new orders are accepted
          according to availability. Your order is confirmed only after we
          discuss your requirements and an available slot.
        </p>
      </div>
    </div>
  )
}
