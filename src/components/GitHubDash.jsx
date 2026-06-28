import { useMemo } from 'react'
import '../styles/GitHubDash.css'

/* ── Seeded random (deterministic, no flickering) ── */
function seededRand(seed) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return Math.abs(s) / 0xffffffff
  }
}

/* ── Generate 52-week contribution grid ── */
function useContribData() {
  return useMemo(() => {
    const rand   = seededRand(42)
    const weeks  = 52
    const days   = 7
    const grid   = []
    let total    = 0

    for (let w = 0; w < weeks; w++) {
      const week = []
      const hot  = rand() > 0.65 // 35% chance of active week
      for (let d = 0; d < days; d++) {
        const isWeekend = d === 0 || d === 6
        let level = 0
        const r = rand()
        if (hot) {
          level = r < 0.15 ? 0 : r < 0.3 ? 1 : r < 0.55 ? 2 : r < 0.78 ? 3 : 4
        } else {
          level = r < 0.55 ? 0 : r < 0.75 ? 1 : r < 0.9 ? 2 : 3
        }
        if (isWeekend && level > 0) level = Math.max(0, level - 1)
        const commits = level === 0 ? 0 : level === 1 ? Math.ceil(rand() * 2) : level === 2 ? Math.ceil(rand() * 4) + 2 : level === 3 ? Math.ceil(rand() * 6) + 4 : Math.ceil(rand() * 8) + 8
        total += commits
        week.push({ level, commits })
      }
      grid.push(week)
    }
    return { grid, total }
  }, [])
}

const LEVEL_COLORS = [
  'rgba(255,255,255,0.05)',
  'rgba(95,13,179,0.35)',
  'rgba(95,13,179,0.55)',
  'rgba(95,13,179,0.78)',
  '#5F0DB3',
]

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const DAYS   = ['', 'Mon', '', 'Wed', '', 'Fri', '']

const LANGUAGES = [
  { name: 'JavaScript', pct: 44, color: '#F7DF1E' },
  { name: 'React (JSX)', pct: 28, color: '#61DAFB' },
  { name: 'CSS3',        pct: 14, color: '#264DE4' },
  { name: 'Node.js',    pct: 10, color: '#68A063' },
  { name: 'MongoDB',    pct:  4, color: '#47A248' },
]

const REPO_STATS = [
  { label: 'Repositories', value: '24',  icon: '📁' },
  { label: 'Contributions', value: '680+', icon: '✅' },
  { label: 'Stars Earned', value: '38',  icon: '⭐' },
  { label: 'Pull Requests', value: '52',  icon: '🔀' },
]

export default function GitHubDash() {
  const { grid, total } = useContribData()

  /* Month label positions (approx every 4.3 weeks) */
  const monthLabels = MONTHS.map((m, i) => ({
    label: m,
    col:   Math.round(i * (52 / 12)),
  }))

  return (
    <section className="section github-dash" id="github">
      <div className="container">
        <div className="gh-header">
          <span className="eyebrow fade-up">GitHub</span>
          <h2 className="section-title fade-up stagger-1">
            My Development <span className="gradient-text">Activity</span>
          </h2>
          <p className="section-subtitle fade-up stagger-2">
            {total.toLocaleString()} contributions in the last year — shipped across personal projects, client work, and open source.
          </p>
        </div>

        <div className="gh-grid fade-up stagger-2">
          {/* ── Contribution Graph ── */}
          <div className="gh-card glass-card gh-contrib-card">
            <div className="gh-card-header">
              <span className="gh-card-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8"  y1="2" x2="8"  y2="6"/>
                  <line x1="3"  y1="10" x2="21" y2="10"/>
                </svg>
                Contribution Graph
              </span>
              <span className="gh-card-badge">{total.toLocaleString()} commits</span>
            </div>

            <div className="contrib-wrapper">
              {/* Day labels */}
              <div className="day-labels" aria-hidden="true">
                {DAYS.map((d, i) => <span key={i} className="day-label">{d}</span>)}
              </div>

              <div className="contrib-cols-wrap">
                {/* Month labels */}
                <div className="month-labels" aria-hidden="true">
                  {monthLabels.map(m => (
                    <span key={m.label} className="month-label" style={{ gridColumn: `${m.col + 1}` }}>{m.label}</span>
                  ))}
                </div>

                {/* Grid */}
                <div className="contrib-grid" role="img" aria-label="GitHub contribution graph">
                  {grid.map((week, wi) => (
                    <div key={wi} className="contrib-week">
                      {week.map((day, di) => (
                        <div
                          key={di}
                          className="contrib-cell"
                          style={{ background: LEVEL_COLORS[day.level] }}
                          title={day.commits > 0 ? `${day.commits} commit${day.commits !== 1 ? 's' : ''}` : 'No contributions'}
                          role="presentation"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="contrib-legend" aria-hidden="true">
              <span>Less</span>
              {LEVEL_COLORS.map((c, i) => (
                <div key={i} className="legend-cell" style={{ background: c }} />
              ))}
              <span>More</span>
            </div>
          </div>

          {/* ── Repo stats ── */}
          <div className="gh-card glass-card gh-stats-card">
            <div className="gh-card-header">
              <span className="gh-card-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
                Repository Stats
              </span>
            </div>
            <div className="stats-mini-grid">
              {REPO_STATS.map(s => (
                <div key={s.label} className="stats-mini-card">
                  <span className="stats-mini-icon">{s.icon}</span>
                  <span className="stats-mini-val">{s.value}</span>
                  <span className="stats-mini-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Most Used Languages ── */}
          <div className="gh-card glass-card gh-lang-card">
            <div className="gh-card-header">
              <span className="gh-card-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
                Most Used Languages
              </span>
            </div>

            {/* Stacked bar */}
            <div className="lang-bar-stack" role="img" aria-label="Language usage bar chart">
              {LANGUAGES.map(l => (
                <div
                  key={l.name}
                  className="lang-bar-seg"
                  style={{ width: `${l.pct}%`, background: l.color }}
                  title={`${l.name}: ${l.pct}%`}
                />
              ))}
            </div>

            {/* Lang list */}
            <div className="lang-list">
              {LANGUAGES.map(l => (
                <div key={l.name} className="lang-item">
                  <div className="lang-row">
                    <span className="lang-dot" style={{ background: l.color }} aria-hidden="true" />
                    <span className="lang-name">{l.name}</span>
                    <span className="lang-pct">{l.pct}%</span>
                  </div>
                  <div className="lang-track">
                    <div
                      className="lang-fill"
                      style={{ width: `${l.pct}%`, background: l.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
