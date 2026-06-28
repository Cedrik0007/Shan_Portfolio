import '../styles/Skills.css'

const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5',        abbr: 'H5',   color: '#E34F26', bg: 'rgba(227,79,38,0.12)'    },
      { name: 'CSS3',         abbr: 'C3',   color: '#264DE4', bg: 'rgba(38,77,228,0.12)'    },
      { name: 'Bootstrap',    abbr: 'BS',   color: '#7952B3', bg: 'rgba(121,82,179,0.12)'   },
      { name: 'Tailwind CSS', abbr: 'TW',   color: '#38BDF8', bg: 'rgba(56,189,248,0.12)'   },
      { name: 'JavaScript',   abbr: 'JS',   color: '#F7DF1E', bg: 'rgba(247,223,30,0.12)'   },
      { name: 'React.js',     abbr: '⚛',    color: '#61DAFB', bg: 'rgba(97,218,251,0.12)'   },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js',            abbr: 'N',    color: '#68A063', bg: 'rgba(104,160,99,0.12)'   },
      { name: 'Express.js',         abbr: 'Ex',   color: '#AAAAAA', bg: 'rgba(170,170,170,0.12)'  },
      { name: 'REST APIs',          abbr: '⇄',    color: '#FF6C37', bg: 'rgba(255,108,55,0.12)'   },
      { name: 'JWT Authentication',  abbr: 'JWT',  color: '#D63AFF', bg: 'rgba(214,58,255,0.12)'   },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB',  abbr: '🍃',   color: '#47A248', bg: 'rgba(71,162,72,0.12)'    },
      { name: 'Mongoose', abbr: 'Mg',   color: '#880000', bg: 'rgba(136,0,0,0.12)'      },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git',      abbr: 'G',    color: '#F05032', bg: 'rgba(240,80,50,0.12)'    },
      { name: 'GitHub',   abbr: '⎇',    color: '#181717', bg: 'rgba(24,23,23,0.12)'     },
      { name: 'Postman',  abbr: 'PM',   color: '#FF6C37', bg: 'rgba(255,108,55,0.12)'   },
      { name: 'Nodemon',  abbr: 'Nm',   color: '#76DEC1', bg: 'rgba(118,222,193,0.12)'  },
      { name: 'VS Code',  abbr: '{}',   color: '#007ACC', bg: 'rgba(0,122,204,0.12)'    },
    ],
  },
  {
    category: 'CMS',
    skills: [
      { name: 'WordPress', abbr: 'WP',   color: '#21759B', bg: 'rgba(33,117,155,0.12)'   },
      { name: 'Shopify',   abbr: 'S',    color: '#96BF48', bg: 'rgba(150,191,72,0.12)'   },
    ],
  },
]

function SkillCard({ name, abbr, color, bg, index }) {
  return (
    <div
      className={`skill-card glass-card fade-up stagger-${(index % 6) + 1}`}
      style={{ '--sk-color': color, '--sk-bg': bg }}
    >
      <div className="skill-icon-wrap" style={{ background: bg, borderColor: `${color}33` }}>
        <span className="skill-abbr" style={{ color }}>{abbr}</span>
      </div>
      <span className="skill-name">{name}</span>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ background: color }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      {/* section glow */}
      <div className="skills-glow" aria-hidden="true" />

      <div className="container">
        <div className="skills-header">
          <span className="eyebrow fade-up">My Skills</span>
          <h2 className="section-title fade-up stagger-1">
            Technologies <span className="gradient-text">I Work With</span>
          </h2>
          <p className="section-subtitle fade-up stagger-2">
            A toolkit built for shipping robust, scalable MERN applications from design to deployment.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <div key={cat.category} className="skill-category">
              <h3 className="category-label fade-up">{cat.category}</h3>
              <div className="skill-row">
                {cat.skills.map((sk, si) => (
                  <SkillCard key={sk.name} {...sk} index={ci * 4 + si} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
