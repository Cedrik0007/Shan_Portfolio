import '../styles/Footer.css'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Cedrik0007',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shan02',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:0741sanjai@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
]

const scrollTo = (e, href) => {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      {/* Top separator glow */}
      <div className="footer-separator" aria-hidden="true" />

      <div className="container footer-inner glass-card footer-pad">
        {/* ── Top row ── */}
        <div className="footer-top">
          {/* Brand block */}
          <div className="footer-brand" data-aos="portfolio-fade-up">
            <a href="#home" className="footer-logo" onClick={e => scrollTo(e, '#home')} aria-label="Go to top">
              <span className="logo-initials">SANJAY</span>
            </a>
            <p className="footer-tagline">Full Stack MERN Developer</p>
            <p className="footer-bio">
              Building modern digital experiences with clean code, thoughtful architecture, and a relentless focus on performance.
            </p>

            {/* Social icons */}
            <div className="footer-socials">
              {SOCIAL_LINKS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer-social-btn"
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="footer-social-icon">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-links-col" data-aos="portfolio-fade-up" data-aos-delay="100">
            <h3 className="footer-col-title">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="footer-links" role="list">
                {QUICK_LINKS.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer-link"
                      onClick={e => scrollTo(e, link.href)}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Tech stack column */}
          <div className="footer-links-col" data-aos="portfolio-fade-up" data-aos-delay="200">
            <h3 className="footer-col-title">Tech Stack</h3>
            <ul className="footer-tech-list" role="list">
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST APIs', 'Git & GitHub',].map(t => (
                <li key={t} className="footer-tech-item">
                  <span className="tech-dot" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="footer-links-col" data-aos="portfolio-fade-up" data-aos-delay="300">
            <h3 className="footer-col-title">Contact</h3>
            <ul className="footer-contact-list" role="list">
              <li>
                <a href="mailto:0741sanjai@gmail.com" className="footer-contact-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  0741sanjai@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shan02" className="footer-contact-item" target="_blank" rel="noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  linkedin.com/in/shan02
                </a>
              </li>
              <li>
                <a href="https://github.com/Cedrik0007" className="footer-contact-item" target="_blank" rel="noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  github.com/Cedrik0007
                </a>
              </li>
            </ul>

            {/* Availability */}
            <div className="footer-avail">
              <span className="avail-dot" aria-hidden="true" />
              Available for opportunities
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom" data-aos="portfolio-fade-up" data-aos-delay="100">
          <p className="footer-copy">
            © {year} <span className="footer-name">Sanjay N</span>. All Rights Reserved.
          </p>
          <p className="footer-made">
            Crafted with
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#f87171" stroke="none" aria-label="love">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            using React &amp; pure CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
