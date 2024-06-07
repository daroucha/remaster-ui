import { ThemeMode } from '@/components/Remaster/remaster-types'
import { useState, useEffect } from 'react'

const useThemeMode = () => {
  const localTheme = localStorage.getItem(
    'remaster-theme-mode'
  ) as ThemeMode
  const initialTheme = 'light'

  const [theme, setTheme] = useState<ThemeMode>(
    localTheme || initialTheme
  )

  useEffect(() => {
    localStorage.setItem('remaster-theme-mode', theme)
  }, [theme])

  return { theme, setTheme }
}

export default useThemeMode
