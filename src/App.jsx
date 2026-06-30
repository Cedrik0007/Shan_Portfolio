import { useState } from 'react'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import GitHubDash from './components/GitHubDash'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import './styles/App.css'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="app">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        {/* <GitHubDash /> */}
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
