import RemasterContext from './remaster-context'
import RemasterType from './remaster-types'
import { StyledRemaster } from './styled-remaster'
import useThemeMode from '@/utils/useThemeMode'

interface PropsRemaster {
  children: React.ReactNode
}

function Remaster({ children }: PropsRemaster) {
  const { theme, setTheme } = useThemeMode()

  const value: RemasterType = {
    theme,
    setTheme,
  }

  return (
    <RemasterContext.Provider value={value}>
      <StyledRemaster>{children}</StyledRemaster>
    </RemasterContext.Provider>
  )
}

export default Remaster
