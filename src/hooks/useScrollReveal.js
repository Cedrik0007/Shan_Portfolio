import { useEffect, useRef } from 'react'
import { useLoading } from '../context/LoadingContext'

/**
 * A custom hook to set up an IntersectionObserver for reveal animations.
 * It observes all elements with '.fade-up' and '.reveal-text' within the referenced container.
 *
 * IMPORTANT: Observation is deferred until the preloader completes (via LoadingContext)
 * so that CSS transitions play visibly instead of completing behind the overlay.
 *
 * @param {number} threshold - The threshold ratio at which the element becomes visible.
 * @returns {React.RefObject} The ref to attach to the container element.
 */
export default function useScrollReveal(threshold = 0.05) {
  const ref = useRef(null)
  const loading = useLoading()

  useEffect(() => {
    // Don't set up observers while the preloader is still active
    if (loading) return

    const container = ref.current
    if (!container) return

    // Use a double-rAF to guarantee the browser has painted the initial
    // hidden state (opacity: 0 / translateY) before the observer can add
    // .visible. Without this, Chrome can batch the class addition with the
    // first paint, causing the CSS transition to be skipped entirely.
    let rafId
    let observer

    rafId = requestAnimationFrame(() => {
      rafId = requestAnimationFrame(() => {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible')
                observer.unobserve(entry.target)
              }
            })
          },
          {
            threshold,
            rootMargin: '0px 0px -40px 0px',
          }
        )

        const revealables = container.querySelectorAll('.fade-up, .reveal-text')
        revealables.forEach((el) => observer.observe(el))
      })
    })

    return () => {
      cancelAnimationFrame(rafId)
      if (observer) observer.disconnect()
    }
  }, [threshold, loading])

  return ref
}

