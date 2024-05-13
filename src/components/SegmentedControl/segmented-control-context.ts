import { createContext } from 'react'

const initialState = {
  disabled: false,
  active: '',
  setActive: () => {},
}

interface SegmentedControlModel {
  active: string | number
  disabled?: boolean
  setActive: React.Dispatch<React.SetStateAction<string | number>>
}

const SegmentedControlContext =
  createContext<SegmentedControlModel>(initialState)

export default SegmentedControlContext
