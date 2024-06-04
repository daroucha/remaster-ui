import { useContext } from 'react'
import { StyledTable, StyledTableBody } from './styled-table'
import TableCell from './table-cell'
import TableContext from './table-context'
import TableRow from './table-row'

interface PropsDataTable {
  children?: React.ReactNode
  variant?: 'default' | 'zebra'
}

function DataTable({ children, variant = 'default' }: PropsDataTable) {
  const value = {
    variant,
  }

  return (
    <TableContext.Provider value={value}>
      <StyledTable as="table">{children}</StyledTable>
    </TableContext.Provider>
  )
}

export const useTableContext = () => {
  const context = useContext(TableContext)

  if (!context) {
    throw new Error(
      `Table compound components cannot be rendered outside the Table component`,
    )
  }

  return context
}

DataTable.Body = StyledTableBody
DataTable.Row = TableRow
DataTable.Cell = TableCell

export type { PropsDataTable }
export default DataTable
