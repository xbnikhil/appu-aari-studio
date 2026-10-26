/**
 * Header / Navbar for Appu Aari Studio.
 * Premium, minimal navigation with logo link and CTA.
 */

import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/our-story', label: 'Our Story' },
    { to: '/our-work', label: 'Our Work' },
    { to: '/the-process', label: 'The Process' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="header" role="banner">
      <div className="header-inner container">
        <a href="/" className="header-logo" aria-label="Appu Aari Studio — home">
          Appu<span className="logo-accent">Aari</span> Studio
        </a>

        <nav className="header-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' nav-link--active' : '')
              }
              end={link.to === '/'}
              aria-current="page"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a href="/contact" className="btn btn--primary header-cta">
          Enquire
        </a>

        <button
          className="header-menu-toggle"
          aria-label="Open menu"
          aria-expanded="false"
          type="button"
        >
          <Menu size={20} strokeWidth={2} />
        </button>
      </div>
    </header>
  )
}
