import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { Menu, X, Sun, Moon } from 'lucide-react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home',        to: '/' },
  { label: 'About',       to: '/about' },
  { label: 'Initiatives', to: '/initiatives' },
  { label: 'Events',      to: '/events' },
  { label: 'Team',        to: '/team' },
  { label: 'Startups',    to: '/startups' },
  { label: 'Contact',     to: '/contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* LOGO */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-mark">E</span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-main">CELL</span>
            <span className="navbar__logo-sub">IIITDM KAnchEEpUrAm</span>
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="navbar__links">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`navbar__link ${location.pathname === to ? 'navbar__link--active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ACTIONS */}
        <div className="navbar__actions">
          <button className="navbar__theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <Link to="/join" className="navbar__cta">Join Us</Link>
          <button className="navbar__burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`navbar__drawer ${open ? 'navbar__drawer--open' : ''}`}>
        {NAV_LINKS.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={`navbar__drawer-link ${location.pathname === to ? 'navbar__drawer-link--active' : ''}`}
          >
            {label}
          </Link>
        ))}
        <Link to="/join" className="navbar__drawer-cta">Join Us →</Link>
      </div>
    </nav>
  )
}
