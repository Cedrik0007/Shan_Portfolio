import { useEffect, useState } from 'react'
import '../styles/Preloader.css'

export default function Preloader({ onComplete }) {
  const [pageReady, setPageReady] = useState(false)
  const [minTimeElapsed, setMinTimeElapsed] = useState(false)
  const [fadingOut, setFadingOut] = useState(false)

  // 1. Detect when the page content is completely ready
  useEffect(() => {
    if (document.readyState === 'complete') {
      setPageReady(true)
    } else {
      const handleLoad = () => setPageReady(true)
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  // 2. Ensure the animation runs for at least one full cycle (~2.6 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true)
    }, 2600)
    return () => clearTimeout(timer)
  }, [])

  // 3. Initiate fade out once both conditions are satisfied
  useEffect(() => {
    if (pageReady && minTimeElapsed) {
      setFadingOut(true)
      const timer = setTimeout(() => {
        onComplete()
      }, 500) // matches the transition duration in CSS
      return () => clearTimeout(timer)
    }
  }, [pageReady, minTimeElapsed, onComplete])

  return (
    <div className={`preloader-overlay${fadingOut ? ' fade-out' : ''}`}>
      <div className="preloader-logo" aria-label="SHAN">
        <span className="preloader-letter">S</span>
        <span className="preloader-letter">H</span>
        <span className="preloader-letter">A</span>
        <span className="preloader-letter">N</span>
      </div>
    </div>
  )
}
