import { useEffect, useState } from 'react'
import '../styles/Preloader.css'

export default function Preloader({ onComplete }) {
  const [pageReady, setPageReady] = useState(false)
  const [minTimeElapsed, setMinTimeElapsed] = useState(false)
  const [fadingOut, setFadingOut] = useState(false)

  // Disable scroll while preloader is active, and restore on unmount
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow
    const originalHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalBodyOverflow
      document.documentElement.style.overflow = originalHtmlOverflow
    }
  }, [])

  // 1. Detect when critical assets (fonts, hero images, and document state) are ready
  useEffect(() => {
    const promises = []

    // A. Wait for general page load / document readystate
    if (document.readyState === 'complete') {
      promises.push(Promise.resolve())
    } else {
      promises.push(new Promise((resolve) => {
        window.addEventListener('load', resolve, { once: true })
      }))
    }

    // B. Wait for critical fonts to load
    if (document.fonts) {
      promises.push(document.fonts.ready)
    }

    // C. Wait for critical hero image
    const heroImgUrl = "https://res.cloudinary.com/rlokioxu/image/upload/v1782809351/Shan_2_i4sana.jpg"
    promises.push(new Promise((resolve) => {
      const img = new Image()
      img.src = heroImgUrl
      if (img.complete) {
        resolve()
      } else {
        img.onload = () => resolve()
        img.onerror = () => resolve() // Resolve on error so loader isn't stuck forever
      }
    }))

    // Wait for all critical assets to load before setting pageReady to true
    Promise.all(promises).then(() => {
      setPageReady(true)
    })
  }, [])

  // 2. Ensure a minimum display time of 1 second for premium design feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true)
    }, 1000)
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
