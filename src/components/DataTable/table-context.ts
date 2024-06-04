import { createContext } from 'react'

interface TableModel {
  variant: 'default' | 'zebra'
}

const initialState = {
  variant: 'default',
} as TableModel

const TableContext = createContext<TableModel>(initialState)

export default TableContext
