import { createContext, useContext } from 'react'

/**
 * Shared context that tells the app whether the preloader is still active.
 * Components (via useScrollReveal) defer their IntersectionObserver setup
 * until this value becomes `false`, ensuring animations play AFTER the
 * preloader fades away — not behind it.
 */
const LoadingContext = createContext(true)

export const useLoading = () => useContext(LoadingContext)

export default LoadingContext
