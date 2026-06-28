# Sanjay N — Portfolio Website

A modern, premium, single-page portfolio for **Sanjay N**, Full Stack MERN Developer.
Built with **React.js** and **external CSS only** — no Tailwind, no Bootstrap, no UI frameworks.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:3000
```

## 📦 Build for Production

```bash
npm run build     # Outputs to /dist
npm run preview   # Preview production build locally
```

---

## 📁 Project Structure

```
sanjay-portfolio/
├── index.html                    # HTML entry (Google Fonts here)
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                  # React root mount
    ├── App.jsx                   # Section assembly + IntersectionObserver
    ├── App.css                   # Global ambient gradient layer
    ├── index.css                 # Design tokens, reset, utilities, buttons
    └── components/
        ├── ScrollProgress.jsx/css    # Fixed top progress bar
        ├── Navbar.jsx/css            # Glass navbar + mobile drawer
        ├── Hero.jsx/css              # Canvas particles, avatar, typewriter
        ├── About.jsx/css             # Stats with count-up animation
        ├── Skills.jsx/css            # Categorised tech skill cards
        ├── Projects.jsx/css          # Project cards with SVG mockups
        ├── Experience.jsx/css        # Vertical timeline
        ├── Services.jsx/css          # Service offering cards
        ├── GitHubDash.jsx/css        # Contribution graph + language bars
        ├── Contact.jsx/css           # Form with validation + contact info
        ├── CTA.jsx/css               # Full-width call-to-action
        └── Footer.jsx/css            # Glass footer with 4-column layout
```

---

## 🎨 Design System

| Token            | Value          |
|------------------|----------------|
| BG Primary       | `#02000D`      |
| BG Secondary     | `#24004D`      |
| Card BG          | `#37006F`      |
| Accent 1         | `#4A0B91`      |
| Accent 2         | `#5F0DB3`      |
| Text Primary     | `#FFFFFF`      |
| Text Secondary   | `#C8B6FF`      |
| Font Display     | Outfit         |
| Font Body        | Inter          |

---

## ✨ Features

- **Canvas particle network** with mouse interaction (Hero)
- **Typewriter effect** for role title
- **Glassmorphism** cards throughout (`backdrop-filter: blur`)
- **Scroll progress indicator** at page top
- **Count-up animation** on About stats (IntersectionObserver triggered)
- **Scroll-based fade-up** entrance animations (staggered per section)
- **Mobile-first responsive** — works on all screen sizes
- **Mobile drawer** navigation with overlay
- **GitHub contribution grid** — deterministic seeded data (52×7 weeks)
- **Language usage bars** with animated fills
- **Contact form** with live field validation and success state
- **SVG project thumbnails** — no external images required
- **SVG developer avatar** — fully inline, no assets needed

---

## 🛠 Personalisation Checklist

- [ ] Replace placeholder email/GitHub/LinkedIn URLs in `Hero.jsx`, `Contact.jsx`, `Footer.jsx`
- [ ] Add real project screenshots: swap `<FashionThumb />`, `<PetThumb />`, `<TaskThumb />` in `Projects.jsx`
- [ ] Update project GitHub & demo links in `Projects.jsx` (`PROJECTS` array)
- [ ] Drop a real `resume.pdf` into `/public/` and wire the Resume button hrefs
- [ ] Swap in a real photo: replace `<DevAvatar />` in `Hero.jsx` with an `<img>` inside `.avatar-frame`
- [ ] Update stat numbers in `About.jsx` (`STATS` array)
- [ ] Adjust GitHub repo stats in `GitHubDash.jsx` (`REPO_STATS` array)

---

## 📜 Tech Stack

| Layer      | Choice                  |
|------------|-------------------------|
| UI         | React 18 (JSX)          |
| Bundler    | Vite 5                  |
| Styling    | External CSS + Variables |
| Layout     | CSS Grid + Flexbox      |
| Animation  | CSS Keyframes + Canvas API |
| Fonts      | Google Fonts (Outfit, Inter) |
| Icons      | Inline SVG (no library) |

---

© 2026 Sanjay N. All Rights Reserved.
