import { Link, NavLink } from 'react-router-dom'
import { ctaTargets, moreLinks, navLinks } from '../data/siteData'
import TranslateWidget from './TranslateWidget'

function Navbar({ onMenuOpen, scrolled }) {
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container nav-panel">
        <Link to="/" className="brand">
          Vijayanand Foundation
        </Link>

        <div className="desktop-nav">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="nav-link" style={{ position: 'relative' }}>
            More
            <div
              style={{
                position: 'absolute',
                top: '130%',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#fff',
                borderRadius: '10px',
                border: '1px solid #dbe4ef',
                minWidth: '220px',
                opacity: 0,
                visibility: 'hidden',
                transition: '0.2s ease all',
                boxShadow: '0 16px 24px rgba(15, 23, 42, 0.12)',
                zIndex: 40,
              }}
              className="more-pop"
            >
              {moreLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{
                    display: 'block',
                    padding: '0.75rem 0.9rem',
                    color: '#0f172a',
                    fontSize: '0.88rem',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="nav-actions">
          <div className="desktop-nav">
            <TranslateWidget />
          </div>
          <Link className="admission-btn" to={ctaTargets.admissionRoute}>
            <span>Admission</span>
          </Link>
          <button
            type="button"
            id="menuBtn"
            className="menu-btn"
            aria-label="Open menu"
            onClick={onMenuOpen}
          >
            <i className="bx bx-menu" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
