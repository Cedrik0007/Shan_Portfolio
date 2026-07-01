import { useEffect, useRef, useCallback } from 'react'
import '../styles/CustomCursor.css'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const target = useRef({ x: -100, y: -100 })
  const hovering = useRef(false)
  const raf = useRef(null)

  const lerp = (a, b, t) => a + (b - a) * t

  const animate = useCallback(() => {
    pos.current.x = lerp(pos.current.x, target.current.x, 0.15)
    pos.current.y = lerp(pos.current.y, target.current.y, 0.15)

    if (cursorRef.current) {
      // cursorRef.current.style.transform =
      //   `translate(${pos.current.x}px, ${pos.current.y}px) scale(${hovering.current ? 2.5 : 1})`
      cursorRef.current.style.transform =
        `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(${hovering.current ? 2.5 : 1})`
    }

    raf.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = e.clientX - 16
      target.current.y = e.clientY - 16
    }

    const onEnter = () => { hovering.current = true }
    const onLeave = () => { hovering.current = false }

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select, label')
      interactives.forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
      return interactives
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf.current = requestAnimationFrame(animate)

    // Re-scan for interactive elements periodically (handles dynamic content)
    let interactives = addHoverListeners()
    const rescan = setInterval(() => {
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
      interactives = addHoverListeners()
    }, 2000)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      clearInterval(rescan)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [animate])

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
}
