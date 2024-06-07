import { $theme } from '@/tokens'
import RemasterContext from './remaster-context'
import RemasterType from './remaster-types'
import { StyledRemaster } from './styled-remaster'
import useThemeMode from '@/utils/useThemeMode'
import { ThemeProvider } from '@emotion/react'
import { useEffect } from 'react'

interface PropsRemaster {
  children: React.ReactNode | any
}

function Remaster({ children }: PropsRemaster) {
  const { theme, setTheme } = useThemeMode()

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) =>
        setTheme(e.matches ? 'dark' : 'light')
      )

    setTheme(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    )

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', () => {})
    }
  }, [])

  const value: RemasterType = {
    theme,
    setTheme,
  }

  return (
    <>
      <RemasterContext.Provider value={value}>
        <ThemeProvider theme={$theme[theme]}>
          <StyledRemaster>{children}</StyledRemaster>
        </ThemeProvider>
      </RemasterContext.Provider>
    </>
  )
}

export default Remaster
