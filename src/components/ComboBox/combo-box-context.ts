import { createContext } from 'react'
import { PropsField } from '../Field/field-props'

const initialState = {
  disabled: false,
}

const ComboBoxContext = createContext<PropsField>(initialState)

export default ComboBoxContext
