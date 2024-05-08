import { createContext } from 'react'

const initialValue = {
  visibility: false,
  setVisibility: () => {},
}

interface DropdownModel {
  visibility: boolean
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

const DropdownContext = createContext<DropdownModel>(initialValue)

export default DropdownContext
