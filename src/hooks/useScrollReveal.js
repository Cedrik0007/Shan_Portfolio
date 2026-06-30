import { useEffect, useRef } from 'react'

/**
 * A custom hook to set up an IntersectionObserver for reveal animations.
 * It observes all elements with '.fade-up' and '.reveal-text' within the referenced container.
 * 
 * @param {number} threshold - The threshold ratio at which the element becomes visible.
 * @returns {React.RefObject} The ref to attach to the container element.
 */
export default function useScrollReveal(threshold = 0.05) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const observer = new IntersectionObserver(
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

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
