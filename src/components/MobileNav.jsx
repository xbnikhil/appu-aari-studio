/**
 * Mobile navigation overlay.
 * Accessible slide-out menu triggered from the header.
 */

import { NavLink, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'

export default function MobileNav({ isOpen, onClose }) {
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/our-story', label: 'Our Story' },
    { to: '/our-work', label: 'Our Work' },
    { to: '/the-process', label: 'The Process' },
    { to: '/contact', label: 'Contact' },
  ]

  if (!isOpen) return null

  return (
    <div
      className="mobile-nav-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
    >
      <div className="mobile-nav-panel">
        <div className="mobile-nav-header">
          <span className="mobile-logo">
            Appu<span className="logo-accent">Aari</span> Studio
          </span>
          <button className="mobile-nav-close" onClick={onClose} aria-label="Close menu">
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        <nav className="mobile-nav-list" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                'mobile-nav-link' + (isActive ? ' mobile-nav-link--active' : '')
              }
              end={link.to === '/'}
              onClick={onClose}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mobile-nav-actions">
          <a href="/contact" className="btn btn--primary btn--block">
            Enquire About Your Design
          </a>
          <p className="mobile-nav-note">
            Complimentary pickup &amp; drop in Pune
          </p>
        </div>
      </div>
    </div>
  )
}
