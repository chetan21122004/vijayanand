import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import FloatingActions from './FloatingActions'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import Navbar from './Navbar'

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site-shell">
      <Navbar scrolled={scrolled} onMenuOpen={() => setMenuOpen(true)} />
      <MobileMenu
        open={menuOpen}
        moreOpen={moreOpen}
        onToggleMore={() => setMoreOpen((prev) => !prev)}
        onClose={() => setMenuOpen(false)}
      />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}

export default Layout
