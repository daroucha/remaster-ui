import { createContext, useContext } from 'react'
import RemasterType, { ThemeMode } from './remaster-types'

const localTheme = localStorage.getItem(
  'remaster-theme-mode'
) as ThemeMode
const initialTheme = 'auto'

const initialState: RemasterType = {
  theme: localTheme || initialTheme,
  setTheme: () => {},
}

const RemasterContext = createContext<RemasterType>(initialState)

export const useRemasterContext = () => {
  const context = useContext(RemasterContext)

  if (!context) {
    throw new Error(
      `Component theme cannot be rendered outside the Remaster component`
    )
  }

  return context
}

export default RemasterContext
