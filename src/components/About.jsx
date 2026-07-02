import { useEffect, useRef, useState } from 'react'
import '../styles/About.css'
import { useLoading } from '../context/LoadingContext'

const STATS = [
  {
    value: 5,
    suffix: '+',
    label: 'Projects Completed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
        <path d="M12 2C7.5 2 4 5 4 10c0 3 1.5 5.5 3.5 6.5h9c2-1 3.5-3.5 3.5-6.5 0-5-3.5-8-8-8z" />
        <line x1="9" y1="12" x2="15" y2="12" />
      </svg>
    )
  },
  {
    value: 15,
    suffix: '+',
    label: 'Technologies Learned',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    )
  },
  {
    value: 10,
    suffix: '+',
    label: 'GitHub Repositories',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    )
  },
  {
    value: 1000,
    suffix: '+',
    label: 'Coding Hours',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
]

function StatCard({ value, suffix, label, icon, active }) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (active && !started.current) {
      started.current = true
      const duration = 1800
      const startTime = performance.now()
      const tick = (now) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
        setCount(Math.round(value * eased))
        if (progress < 1) rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    return () => cancelAnimationFrame(rafRef.current)
  }, [active, value])

  return (
    <div className="stat-card glass-card">
      <span className="stat-icon" aria-hidden="true">{icon}</span>
      <div className="stat-value">
        <span>{count.toLocaleString()}</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <p className="stat-label">{label}</p>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const loading = useLoading()

  useEffect(() => {
    // Don't start the stat counter observer until the preloader finishes
    if (loading) return

    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, loading])

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container about-inner">
        {/* Left: copy */}
        <div className="about-copy">
          <span className="eyebrow" data-aos="portfolio-fade-up">About Me</span>
          <h2 className="section-title" data-aos="portfolio-fade-up" data-aos-delay="100">
            Passionate About Building<br />
            <span className="gradient-text">Modern Web Applications</span>
          </h2>

          <div className="about-body" data-aos="portfolio-fade-up" data-aos-delay="200">
            <p>
              I'm <strong>Sanjay N</strong>, a Full Stack MERN Developer passionate about building modern,
              scalable, and user-friendly web applications. I enjoy turning ideas into seamless digital
              experiences that blend great design with strong functionality.
            </p>

            <p>
              I specialize in React, Node.js, Express, and MongoDB, creating responsive frontends and
              reliable backend systems. I also leverage modern AI-powered development tools to streamline
              workflows, enhance productivity, and deliver high-quality solutions faster.
            </p>

            <p>
              Currently open to <strong>full-time opportunities and freelance projects</strong> where I
              can contribute to impactful products, solve real-world problems, and continue growing as a
              developer.
            </p>
          </div>

          <div className="about-tags" data-aos="portfolio-fade-up" data-aos-delay="300">
            {['Problem Solver', 'Clean Code Advocate', 'Team Player', 'Fast Learner', 'Detail-Oriented'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Right: stats */}
        <div className="about-stats">
          {STATS.map((s, i) => (
            <div key={s.label} data-aos="portfolio-fade-up" data-aos-delay={100 * (i + 1)}>
              <StatCard {...s} active={active} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
