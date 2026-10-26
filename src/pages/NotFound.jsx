/**
 * Not Found page — Appu Aari Studio.
 * Custom 404 page with a link back home.
 */

import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found" aria-label="Page not found">
      <div className="not-found-inner container">
        <div className="not-found-content">
          <p className="not-found-kicker">Page Not Found</p>
          <h1 className="not-found-title">We can&rsquo;t find that page.</h1>
          <p className="not-found-text">
            The page you are looking for does not exist. Let&rsquo;s take you
            back to the beginning.
          </p>
          <Link to="/" className="btn btn--primary">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  )
}
