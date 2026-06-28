import { useEffect, useRef } from 'react'
import '../styles/Hero.css'

import devimage from "../assets/Shan_2.png"

/* ── Social links ─────────────────────── */
const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/sanjay-n',
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

const MARQUEE_ITEMS = [
  'REACT.JS', 'NODE.JS', 'MONGODB', 'EXPRESS.JS',
  'JAVASCRIPT', 'REST API', 'FULL STACK', 'MERN DEVELOPER',
]

/* ── Hero Component ───────────────────── */
export default function Hero() {
  const sectionRef = useRef(null)

  /* Trigger reveal and fade-up animations on mount */
  useEffect(() => {
    const timer = setTimeout(() => {
      sectionRef.current?.querySelectorAll('.reveal-text, .fade-up').forEach(el => {
        el.classList.add('visible')
      })
    }, 150)
    return () => clearTimeout(timer)
  }, [])

  const marqueeContent = MARQUEE_ITEMS.map(item => `${item} — `).join('')

  return (
    <>
      <section className="hero" id="home" aria-label="Introduction" ref={sectionRef}>
        <div className="container hero-inner">
          {/* ── LEFT: Copy ── */}
          <div className="hero-copy">
            <span className="hero-eyebrow fade-up">Full Stack MERN Developer</span>

            <h1 className="hero-heading">
              <span className="reveal-wrap">
                <span className="reveal-text">Hi, I'm</span>
              </span>
              <br />
              <span className="reveal-wrap">
                <span className="reveal-text hero-name">Sanjay N</span>
              </span>
            </h1>

            <p className="hero-desc fade-up stagger-2">
              I build <strong>scalable web applications</strong> with React, Node.js, Express.js,
              and MongoDB — robust backends paired with polished, high-performance interfaces
              that delight users and impress stakeholders.
            </p>

            <div className="hero-actions fade-up stagger-3">
              <button
                className="btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <a href="#" className="btn-secondary" onClick={e => e.preventDefault()}>
                Download Resume
              </a>
            </div>

            <div className="hero-socials fade-up stagger-4">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} className="social-btn" aria-label={s.label} target="_blank" rel="noreferrer">
                  <span className="social-icon">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Avatar ── */}
          <div className="hero-visual fade-up stagger-2">
            <div className="avatar-frame">
              <img src={devimage} alt="Sanjay N" className="avatar-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ticker ── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-inner">
          <span className="marquee-text">{marqueeContent}</span>
          <span className="marquee-text">{marqueeContent}</span>
        </div>
      </div>
    </>
  )
}
