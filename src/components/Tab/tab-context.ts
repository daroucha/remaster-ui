import { createContext } from 'react'

const initialState = {
  active: '',
  disabled: false,
  setActive: () => {},
}

interface TabModel {
  active: string
  disabled?: boolean
  setActive: React.Dispatch<React.SetStateAction<string>>
}

const TabContext = createContext<TabModel>(initialState)

export default TabContext
