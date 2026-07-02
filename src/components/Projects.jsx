import '../styles/Projects.css'
const ImahkImg = 'https://res.cloudinary.com/rlokioxu/image/upload/v1782809349/Imahk_f7bcnk.png'
const HonghuiImg = 'https://res.cloudinary.com/rlokioxu/image/upload/v1782809349/Honghui_o6gssm.png'
const AdminImahkImg = 'https://res.cloudinary.com/rlokioxu/image/upload/v1782809343/Admin_imahk_zspsou.png'

/* ── Project thumbnail SVGs ─────────── */
function FashionThumb() {
  return (
    <svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" className="proj-thumb">
      <defs>
        <linearGradient id="fg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a0038" />
          <stop offset="100%" stopColor="#6B0FCC" />
        </linearGradient>
      </defs>
      <rect width="380" height="220" fill="url(#fg1)" />
      <circle cx="340" cy="30" r="80" fill="rgba(200,0,255,0.08)" />
      <circle cx="50" cy="190" r="60" fill="rgba(155,109,255,0.08)" />
      {/* Fashion icon: dress silhouette */}
      <g transform="translate(190,110)" fill="none" stroke="rgba(200,182,255,0.7)" strokeWidth="1.5">
        <path d="M0 -60 L-14 -38 L-30 20 Q-30 55 0 55 Q30 55 30 20 L14 -38 Z" />
        <path d="M-14 -38 Q-28 -42 -36 -50 Q-22 -52 -14 -38" />
        <path d="M14  -38 Q28  -42 36  -50 Q22  -52 14  -38" />
        <line x1="0" y1="-60" x2="0" y2="-50" />
        <circle cx="0" cy="-60" r="5" />
      </g>
      {/* Decorative lines */}
      <line x1="40" y1="40" x2="120" y2="40" stroke="rgba(200,182,255,0.2)" strokeWidth="1" />
      <line x1="40" y1="55" x2="90" y2="55" stroke="rgba(200,182,255,0.15)" strokeWidth="1" />
      <line x1="260" y1="175" x2="340" y2="175" stroke="rgba(200,182,255,0.2)" strokeWidth="1" />
      <text x="30" y="195" fill="rgba(200,182,255,0.35)" fontSize="9" fontFamily="monospace">ZISO / FASHION</text>
    </svg>
  )
}

function PetThumb() {
  return (
    <svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" className="proj-thumb">
      <defs>
        <linearGradient id="fg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#002830" />
          <stop offset="100%" stopColor="#006644" />
        </linearGradient>
      </defs>
      <rect width="380" height="220" fill="url(#fg2)" />
      <circle cx="50" cy="40" r="80" fill="rgba(0,180,100,0.08)" />
      <circle cx="340" cy="190" r="70" fill="rgba(0,200,120,0.06)" />
      {/* Paw print */}
      <g transform="translate(190,108)" fill="rgba(100,255,180,0.6)">
        {/* Main pad */}
        <ellipse cx="0" cy="20" rx="22" ry="18" />
        {/* Toe pads */}
        <ellipse cx="-22" cy="-5" rx="10" ry="11" transform="rotate(-20,-22,-5)" />
        <ellipse cx="-7" cy="-18" rx="10" ry="11" />
        <ellipse cx="7" cy="-18" rx="10" ry="11" />
        <ellipse cx="22" cy="-5" rx="10" ry="11" transform="rotate(20,22,-5)" />
      </g>
      <line x1="40" y1="180" x2="140" y2="180" stroke="rgba(100,255,180,0.2)" strokeWidth="1" />
      <text x="30" y="198" fill="rgba(100,255,180,0.3)" fontSize="9" fontFamily="monospace">PET CARE / PLATFORM</text>
    </svg>
  )
}

function TaskThumb() {
  return (
    <svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" className="proj-thumb">
      <defs>
        <linearGradient id="fg3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#02000D" />
          <stop offset="100%" stopColor="#4A0B91" />
        </linearGradient>
      </defs>
      <rect width="380" height="220" fill="url(#fg3)" />
      <circle cx="330" cy="40" r="90" fill="rgba(155,109,255,0.08)" />
      {/* Task UI mockup */}
      <rect x="110" y="40" width="160" height="140" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(200,182,255,0.15)" strokeWidth="1" />
      {/* Header */}
      <rect x="110" y="40" width="160" height="28" rx="8" fill="rgba(95,13,179,0.35)" />
      <text x="190" y="59" textAnchor="middle" fill="rgba(200,182,255,0.9)" fontSize="9" fontFamily="monospace" fontWeight="bold">TASK MANAGER</text>
      {/* Task items */}
      {[0, 1, 2, 3].map(i => (
        <g key={i} transform={`translate(0,${i * 24})`}>
          <rect x="122" y="78" width="136" height="18" rx="4" fill="rgba(255,255,255,0.04)" />
          <rect x="128" y="83" width="8" height="8" rx="2" fill={i < 2 ? 'rgba(95,13,179,0.7)' : 'rgba(255,255,255,0.08)'} stroke="rgba(200,182,255,0.3)" strokeWidth="1" />
          {i < 2 && <path d={`M130 87 L132 89 L136 85`} stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" />}
          <rect x="142" y="85" width={60 - i * 8} height="4" rx="2" fill="rgba(200,182,255,0.25)" />
        </g>
      ))}
      <line x1="30" y1="45" x2="100" y2="45" stroke="rgba(200,182,255,0.2)" strokeWidth="1" />
      <text x="30" y="198" fill="rgba(155,109,255,0.35)" fontSize="9" fontFamily="monospace">MERN / TASK MANAGER</text>
    </svg>
  )
}

/* ── Projects data ───────────────────── */
const PROJECTS = [
  {
    title: 'Indian Muslim Association (IMA)',
    desc: 'Community-focused website developed for the Indian Muslim Association, featuring organizational information, events, publications, gallery management, prayer resources, and responsive user experiences for members worldwide.',
    stack: ['WordPress', 'PHP', 'Elementor', 'HTML5', 'CSS3', 'JavaScript'],
    imgsrc: ImahkImg,
    demo: 'https://imahk.org/',
    accent: 'rgba(180,0,255,0.15)',
  },
  {
    title: 'Hong Hui Ventures Capital',
    desc: 'Corporate investment and private equity website designed to showcase investment strategies, portfolio companies, ESG-focused initiatives, and global business partnerships through a modern digital experience.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    imgsrc: HonghuiImg,
    demo: 'https://honghuicapital.com/',
    accent: 'rgba(0,180,100,0.12)',
  },
  {
    title: 'Imahk Admin Dashboard',
    desc: 'Secure administrative dashboard for managing products, orders, content, and operational workflows with a streamlined interface and scalable backend integration.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    imgsrc: AdminImahkImg,
    demo: 'https://admin.imahk.org',
    accent: 'rgba(95,13,179,0.2)',
  },
]

function ProjectCard({ title, desc, stack, Thumb, imgsrc, github, demo, accent, index }) {
  return (
    <article
      className="project-card glass-card"
      style={{ '--accent': accent }}
      data-aos="portfolio-fade-up"
      data-aos-delay={100 * index}
    >
      <div className="proj-thumb-wrap">
        {imgsrc ? (
          <img src={imgsrc} alt={title} className="proj-thumb" />
        ) : (
          Thumb && <Thumb />
        )}
        <div className="proj-thumb-overlay" />
      </div>

      <div className="proj-body">
        <h3 className="proj-title">{title}</h3>
        <p className="proj-desc">{desc}</p>

        <div className="proj-stack">
          {stack.map(t => (
            <span key={t} className="proj-tech">{t}</span>
          ))}
        </div>

        <div className="proj-links">
          {/* <a href={github} target="_blank" rel="noreferrer" className="proj-link proj-link--gh" aria-label={`${title} GitHub`}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a> */}
          <a href={demo} target="_blank" rel="noreferrer" className="proj-link proj-link--demo" aria-label={`${title} live demo`}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <span className="eyebrow" data-aos="portfolio-fade-up">Featured Projects</span>
          <h2 className="section-title" data-aos="portfolio-fade-up" data-aos-delay="100">
            Projects <span className="gradient-text">I've Built</span>
          </h2>
          <p className="section-subtitle" data-aos="portfolio-fade-up" data-aos-delay="200">
            Real-world applications demonstrating end-to-end MERN stack development, from database schema to polished UI.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
