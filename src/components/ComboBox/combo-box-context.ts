import { createContext } from 'react'
import { PropsField } from '../Field/field-props'

const initialState = {
  disabled: false,
  setQuery: () => {},
  visibility: false,
  setVisibility: () => {},
}

interface ComboBoxModel extends PropsField {
  setQuery: React.Dispatch<React.SetStateAction<string>>
  visibility: boolean
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

const ComboBoxContext = createContext<ComboBoxModel>(initialState)

export default ComboBoxContext
