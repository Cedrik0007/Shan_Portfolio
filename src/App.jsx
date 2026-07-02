import { useState, useEffect } from 'react'
import LoadingContext from './context/LoadingContext'
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
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles/App.css'

export default function App() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('portfolio-preloader-shown')
    }
    return true
  })

  useEffect(() => {
    if (!loading) {
      AOS.init({
        once: true,
        offset: 40,
        duration: 800,
        delay: 50,
      })
    }
  }, [loading])

  return (
    <LoadingContext.Provider value={loading}>
      <div className="app">
        {loading && (
          <Preloader
            onComplete={() => {
              setLoading(false)
              sessionStorage.setItem('portfolio-preloader-shown', 'true')
            }}
          />
        )}
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
    </LoadingContext.Provider>
  )
}

