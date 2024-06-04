import { StyledTableCell, TableCellContent } from './styled-table'

interface PropsTableCell {
  children?: React.ReactNode
  align?: 'start' | 'end'
  width?: 'auto' | 'stretch'
}

function TableCell({ align, children, width }: PropsTableCell) {
  return (
    <StyledTableCell $align={align} $width={width}>
      <TableCellContent>{children}</TableCellContent>
    </StyledTableCell>
  )
}

export type { PropsTableCell }
export default TableCell
