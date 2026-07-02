import '../styles/Experience.css'

const TIMELINE = [
  {
    year: "2025",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "Started Learning Web Development",
    desc: "Began my journey into web development by learning HTML, CSS, JavaScript, and modern development fundamentals. Focused on building a strong foundation through hands-on practice and personal projects.",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    year: "2025",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
        <path d="M12 2C7.5 2 4 5 4 10c0 3 1.5 5.5 3.5 6.5h9c2-1 3.5-3.5 3.5-6.5 0-5-3.5-8-8-8z" />
      </svg>
    ),
    title: "Built Full Stack Projects",
    desc: "Expanded my skills by working with the MERN stack, creating responsive web applications, REST APIs, and real-world projects that strengthened both frontend and backend development expertise.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    year: "2026",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Freelance Web Developer",
    desc: "Started working with clients to design and develop modern websites and web applications. By combining MERN stack expertise with AI-powered development tools, I streamline workflows, accelerate development, and deliver high-quality digital solutions efficiently.",
    tags: ["Freelancing", "MERN Stack", "AI-Assisted Development", "UI/UX"],
    active: true,
  },
]

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="exp-glow" aria-hidden="true" />
      <div className="container">
        <div className="exp-header">
          <span className="eyebrow" data-aos="portfolio-fade-up">My Journey</span>
          <h2 className="section-title" data-aos="portfolio-fade-up" data-aos-delay="100">
            My Learning &amp; <span className="gradient-text">Development Path</span>
          </h2>
        </div>

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />

          {TIMELINE.map((item, i) => (
            <div
              key={`${item.year}-${i}`}
              className={`timeline-item${item.active ? ' active' : ''}`}
              data-aos="portfolio-fade-up"
              data-aos-delay={100 * i}
            >
              {/* Connector dot */}
              <div className="timeline-dot" aria-hidden="true">
                <span className="dot-icon">{item.icon}</span>
              </div>

              {/* Year badge */}
              <div className="timeline-year">{item.year}</div>

              {/* Content card */}
              <div className="timeline-card glass-card">
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.desc}</p>
                <div className="timeline-tags">
                  {item.tags.map(t => (
                    <span key={t} className="timeline-tag">{t}</span>
                  ))}
                </div>
                {item.active && (
                  <div className="active-badge">
                    <span className="active-dot" aria-hidden="true" />
                    Currently Here
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
