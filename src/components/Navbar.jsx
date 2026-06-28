import { useState, useEffect, useCallback } from 'react'
import '../styles/Navbar.css'
import resumePdf from "../assets/Sanjay N Resume.pdf"

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [activeSection,  setActiveSection]  = useState('home')

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60)
    const ids = NAV_LINKS.map(l => l.href.slice(1))
    for (let i = ids.length - 1; i >= 0; i--) {
      const el = document.getElementById(ids[i])
      if (el && window.scrollY >= el.offsetTop - 130) {
        setActiveSection(ids[i])
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  /* Lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="nav-inner">
          {/* ── Logo ── */}
          <a href="#home" className="nav-logo" onClick={e => scrollTo(e, '#home')} aria-label="Go to top">
            <span className="logo-initials">SANJAY</span>
          </a>

          {/* ── Desktop links ── */}
          <ul className="nav-links" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`nav-link${activeSection === link.href.slice(1) ? ' active' : ''}`}
                  onClick={e => scrollTo(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Right actions ── */}
          <div className="nav-actions">
            <a href={resumePdf} className="btn-primary btn-sm" target="_blank" rel="noreferrer" download="Sanjay_N_Resume.pdf">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>

            <button
              className={`hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div className={`mobile-drawer${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        <ul role="list">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`mobile-link${activeSection === link.href.slice(1) ? ' active' : ''}`}
                onClick={e => scrollTo(e, link.href)}
                tabIndex={mobileOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={resumePdf} className="btn-primary mobile-resume-btn" onClick={() => setMobileOpen(false)} tabIndex={mobileOpen ? 0 : -1} target="_blank" rel="noreferrer" download="Sanjay_N_Resume.pdf">
              Download Resume
            </a>
          </li>
        </ul>
      </div>

      {mobileOpen && (
        <div className="nav-overlay" onClick={() => setMobileOpen(false)} aria-hidden="true" />
      )}
    </>
  )
}
