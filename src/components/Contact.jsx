import { useState, useRef } from 'react'
import '../styles/Contact.css'

const CONTACT_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: '0741sanjai@gmail.com',
    href: 'mailto:0741sanjai@gmail.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/shan02',
    href: 'https://www.linkedin.com/in/shan02',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/Cedrik0007',
    href: 'https://github.com/Cedrik0007',
  },
]

const INITIAL = { name: '', email: '', subject: '', message: '' }

function validate(f) {
  const e = {}
  if (!f.name.trim()) e.name = 'Name is required'
  if (!f.email.trim()) e.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email'
  if (!f.subject.trim()) e.subject = 'Subject is required'
  if (f.message.trim().length < 20) e.message = 'Message must be at least 20 characters'
  return e
}

export default function Contact() {
  const [fields, setFields] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const timerRef = useRef(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
    if (touched[name]) {
      const errs = validate({ ...fields, [name]: value })
      setErrors(ev => ({ ...ev, [name]: errs[name] }))
    }
  }

  const onBlur = (e) => {
    const { name } = e.target
    setTouched(t => ({ ...t, [name]: true }))
    const errs = validate(fields)
    setErrors(ev => ({ ...ev, [name]: errs[name] }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(fields)
    setErrors(errs)
    setTouched({ name: true, email: true, subject: true, message: true })
    if (Object.keys(errs).length > 0) return

    setStatus('sending')
    try {
      const response = await fetch("https://formsubmit.co/ajax/0741sanjai@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          subject: fields.subject,
          message: fields.message
        })
      })

      const resData = await response.json()
      if (response.ok && resData.success === 'true') {
        setStatus('sent')
        setFields(INITIAL)
        setErrors({})
        setTouched({})
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const fieldClass = (name) =>
    `contact-field${errors[name] && touched[name] ? ' field-error' : ''}${!errors[name] && touched[name] && fields[name] ? ' field-ok' : ''}`

  return (
    <section className="section contact" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container">
        <div className="contact-header">
          <span className="eyebrow fade-up">Contact</span>
          <h2 className="section-title fade-up stagger-1">
            Let's Build Something <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="section-subtitle fade-up stagger-2">
            Open to full-time roles, freelance projects, and interesting collaborations. Drop me a message and I'll get back within 24 hours.
          </p>
        </div>

        <div className="contact-inner">
          {/* ── Left: info ── */}
          <div className="contact-info fade-up stagger-2">
            <h3 className="info-heading">Get In Touch</h3>
            <p className="info-text">
              Whether you have a project in mind, want to discuss opportunities, or just want to say hello — I'm always happy to connect.
            </p>

            <div className="contact-items">
              {CONTACT_ITEMS.map(item => (
                <a key={item.label} href={item.href} className="contact-item glass-card" target="_blank" rel="noreferrer">
                  <div className="contact-item-icon">{item.icon}</div>
                  <div className="contact-item-text">
                    <span className="item-label">{item.label}</span>
                    <span className="item-value">{item.value}</span>
                  </div>
                  <svg className="contact-item-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="availability-badge">
              <span className="avail-dot" aria-hidden="true" />
              <div>
                <strong>Available for work</strong>
                <span>Open to full-time &amp; freelance</span>
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="contact-form-wrap glass-card fade-up stagger-3">
            {status === 'sent' ? (
              <div className="form-success" role="alert">
                <div className="success-icon" aria-hidden="true">✓</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out, Sanjay will get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setStatus('idle')}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-name" className="form-label">Full Name</label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      className={fieldClass('name')}
                      placeholder="John Doe"
                      value={fields.name}
                      onChange={onChange}
                      onBlur={onBlur}
                      autoComplete="name"
                      aria-describedby={errors.name && touched.name ? 'err-name' : undefined}
                      aria-invalid={!!(errors.name && touched.name)}
                    />
                    {errors.name && touched.name && <span className="field-err-msg" id="err-name" role="alert">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="cf-email" className="form-label">Email Address</label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      className={fieldClass('email')}
                      placeholder="john@example.com"
                      value={fields.email}
                      onChange={onChange}
                      onBlur={onBlur}
                      autoComplete="email"
                      aria-describedby={errors.email && touched.email ? 'err-email' : undefined}
                      aria-invalid={!!(errors.email && touched.email)}
                    />
                    {errors.email && touched.email && <span className="field-err-msg" id="err-email" role="alert">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="cf-subject" className="form-label">Subject</label>
                  <input
                    id="cf-subject"
                    name="subject"
                    type="text"
                    className={fieldClass('subject')}
                    placeholder="Project Collaboration / Job Opportunity"
                    value={fields.subject}
                    onChange={onChange}
                    onBlur={onBlur}
                    aria-describedby={errors.subject && touched.subject ? 'err-subject' : undefined}
                    aria-invalid={!!(errors.subject && touched.subject)}
                  />
                  {errors.subject && touched.subject && <span className="field-err-msg" id="err-subject" role="alert">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="cf-message" className="form-label">
                    Message
                    <span className="char-count">{fields.message.length} / 1000</span>
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={5}
                    className={fieldClass('message')}
                    placeholder="Tell me about your project, timeline, and what you're looking for..."
                    value={fields.message}
                    onChange={onChange}
                    onBlur={onBlur}
                    maxLength={1000}
                    aria-describedby={errors.message && touched.message ? 'err-message' : undefined}
                    aria-invalid={!!(errors.message && touched.message)}
                  />
                  {errors.message && touched.message && <span className="field-err-msg" id="err-message" role="alert">{errors.message}</span>}
                </div>

                {status === 'error' && (
                  <span className="field-err-msg" role="alert" style={{ marginBottom: '16px', display: 'block' }}>
                    Failed to send message. Please try again or email directly to 0741sanjai@gmail.com
                  </span>
                )}

                <button
                  type="submit"
                  className={`btn-primary submit-btn${status === 'sending' ? ' sending' : ''}`}
                  disabled={status === 'sending'}
                  aria-busy={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <span className="spinner" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
