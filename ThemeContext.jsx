import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // Start light. Scrolling DOWN → dark. Scrolling UP → light.
  const [theme, setTheme] = useState('light')
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollDir, setScrollDir] = useState('up')

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY
    const dir = currentY > lastScrollY ? 'down' : 'up'

    if (dir !== scrollDir) {
      setScrollDir(dir)
      setTheme(dir === 'down' ? 'dark' : 'light')
    }
    setLastScrollY(currentY)
  }, [lastScrollY, scrollDir])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, scrollDir }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
