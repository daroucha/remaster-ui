import { createContext } from 'react'
import { PropsField } from '../Field/field-props'

const initialState = {
  disabled: false,
  setQuery: () => {},
}

interface ComboBoxModel extends PropsField {
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

const ComboBoxContext = createContext<ComboBoxModel>(initialState)

export default ComboBoxContext
