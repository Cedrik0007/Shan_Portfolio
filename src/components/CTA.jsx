import '../styles/CTA.css'
import useScrollReveal from '../hooks/useScrollReveal'

export default function CTA() {
  const ref = useScrollReveal()
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="cta" aria-labelledby="cta-heading" ref={ref}>
      {/* Decorative orbs */}
      <div className="cta-orb cta-orb-1" aria-hidden="true" />
      <div className="cta-orb cta-orb-2" aria-hidden="true" />
      <div className="cta-orb cta-orb-3" aria-hidden="true" />

      {/* Grid overlay */}
      <div className="cta-grid" aria-hidden="true" />

      <div className="container cta-inner">
        <div className="cta-badge fade-up">
          <span className="badge-pulse" aria-hidden="true" />
          Open to Opportunities
        </div>

        <h2 id="cta-heading" className="cta-heading fade-up stagger-1">
          Ready to Build Your<br />
          <span className="gradient-text">Next Project?</span>
        </h2>

        <p className="cta-sub fade-up stagger-2">
          Let's turn your idea into a fast, scalable, and beautifully crafted web application.
          I'm available for full-time roles and freelance contracts.
        </p>

        <div className="cta-actions fade-up stagger-3">
          <button
            className="btn-primary cta-btn-primary"
            onClick={() => scrollTo('contact')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            Hire Me
          </button>
          <button
            className="btn-secondary cta-btn-secondary"
            onClick={() => scrollTo('contact')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Contact Me
          </button>
        </div>

        {/* Floating tech pills */}
        <div className="cta-pills fade-up stagger-4" aria-hidden="true">
          {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'JavaScript'].map((t, i) => (
            <span key={t} className="cta-pill" style={{ animationDelay: `${i * 0.18}s` }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
