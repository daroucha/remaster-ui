import { StyledTableRow } from './styled-table'
import { useTableContext } from './data-table'

interface PropsTableRow {
  children: React.ReactNode
}

function TableRow({ children }: PropsTableRow) {
  const { variant } = useTableContext()

  return <StyledTableRow $variant={variant}>{children}</StyledTableRow>
}

export type { PropsTableRow }
export default TableRow
