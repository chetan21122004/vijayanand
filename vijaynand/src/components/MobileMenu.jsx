import { Link, NavLink } from 'react-router-dom'
import { ctaTargets, moreLinks, navLinks } from '../data/siteData'

function MobileMenu({ open, onClose, moreOpen, onToggleMore }) {
  return (
    <aside id="mobileMenu" className={`mobile-drawer ${open ? 'open' : ''}`}>
      <div className="drawer-head">
        <strong>Vijayanand Foundation</strong>
        <button id="closeBtn" type="button" className="menu-btn" onClick={onClose}>
          <i className="bx bx-x" />
        </button>
      </div>
      <nav className="drawer-nav">
        {navLinks.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onClose}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {item.label}
          </NavLink>
        ))}
        <button
          id="mobileExploreBtn"
          type="button"
          onClick={onToggleMore}
          style={{ border: 0, background: 'transparent', textAlign: 'left', padding: 0 }}
        >
          More <i id="mobileExploreIcon" className={`bx ${moreOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`} />
        </button>
        {moreOpen && (
          <div id="mobileExploreMenu" style={{ marginLeft: '0.8rem', display: 'grid', gap: '0.45rem' }}>
            {moreLinks.map((item) => (
              <Link key={item.to} to={item.to} onClick={onClose}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
        <Link className="btn primary" to={ctaTargets.admissionRoute} onClick={onClose}>
          Admission
        </Link>
      </nav>
    </aside>
  )
}

export default MobileMenu
