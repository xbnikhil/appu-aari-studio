/**
 * Footer for Appu Aari Studio.
 * Site-wide links, brand note, and availability reminder.
 */

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner container">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            Appu<span className="logo-accent">Aari</span> Studio
          </a>
          <p className="footer-note">
            Handcrafted Aari embroidery, made one piece at a time in Pune,
            Maharashtra.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <div className="footer-nav-group">
            <h4 className="footer-heading">Studio</h4>
            <ul>
              <li>
                <Link to="/our-story">Our Story</Link>
              </li>
              <li>
                <Link to="/our-work">Our Work</Link>
              </li>
              <li>
                <Link to="/the-process">The Process</Link>
              </li>
            </ul>
          </div>
          <div className="footer-nav-group">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul>
              <li>
                <Link to="/contact">Enquire About a Design</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="footer-availability">
          <p className="footer-availability-text">
            Each creation receives the time and attention it deserves. New
            orders are accepted according to availability.
          </p>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Appu Aari Studio, Pune, Maharashtra,
            India.
          </p>
        </div>
      </div>
    </footer>
  )
}
