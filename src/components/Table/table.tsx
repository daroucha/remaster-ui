import { useContext } from 'react'
import { StyledTable, StyledTableBody } from './styled-table'
import TableCell from './table-cell'
import TableContext from './table-context'
import TableRow from './table-row'

interface PropsTable {
  children?: React.ReactNode
  variant?: 'default' | 'zebra'
}

function Table({ children, variant = 'default' }: PropsTable) {
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

Table.Body = StyledTableBody
Table.Row = TableRow
Table.Cell = TableCell

export type { PropsTable }
export default Table
