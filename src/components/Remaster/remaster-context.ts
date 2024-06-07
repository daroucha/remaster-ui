import { createContext, useContext } from 'react'

import RemasterType from './remaster-types'

const initialState: RemasterType = {
  theme: 'light',
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
