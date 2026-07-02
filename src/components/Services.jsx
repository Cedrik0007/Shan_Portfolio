import '../styles/Services.css'

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
    title:  'Frontend Development',
    desc:   'Pixel-perfect React interfaces with smooth animations, accessible components, and mobile-first responsive layouts.',
    color:  '#61DAFB',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title:  'Full Stack Web Development',
    desc:   'End-to-end MERN stack applications — from schema design and API architecture to polished client-side experience.',
    color:  '#68A063',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 12h16M4 18h7"/>
        <circle cx="19" cy="18" r="3"/>
        <path d="m21.5 20.5-2-2"/>
      </svg>
    ),
    title:  'REST API Development',
    desc:   'Clean, documented RESTful APIs with JWT auth, input validation, error handling, and scalable Express.js architecture.',
    color:  '#FF6C37',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title:  'Responsive Website Design',
    desc:   'Fluid layouts that look and work great on every screen — phone, tablet, and widescreen desktop.',
    color:  '#C8B6FF',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title:  'Performance Optimization',
    desc:   'Lazy loading, code splitting, bundle analysis, and Core Web Vitals tuning to maximize speed and SEO scores.',
    color:  '#F7DF1E',
  },
]

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="eyebrow" data-aos="portfolio-fade-up">What I Offer</span>
          <h2 className="section-title" data-aos="portfolio-fade-up" data-aos-delay="100">
            Development <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle" data-aos="portfolio-fade-up" data-aos-delay="200">
            From idea to deployment — I cover the full product lifecycle with a focus on quality and maintainability.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="service-card glass-card"
              style={{ '--svc-color': s.color }}
              data-aos="portfolio-fade-up"
              data-aos-delay={100 * (i % 3)}
            >
              <div className="svc-icon-wrap" style={{ color: s.color, background: `${s.color}18`, borderColor: `${s.color}33` }}>
                {s.icon}
              </div>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-desc">{s.desc}</p>
              <div className="svc-bar" style={{ background: s.color }} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
