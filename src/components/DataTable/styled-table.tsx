import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from 'styled-components'

const StyledTable = styled(SansSerif)`
  -webkit-border-horizontal-spacing: 0px;
  -webkit-border-vertical-spacing: ${$space.gap.xs};
  border: none;
  color: ${$color.text.plain.tertiary.light};
  display: table;
  width: 100%;
`

const StyledTableBody = styled.tbody`
  display: table-row-group;
  width: 100%;
`

const StyledTableRow = styled.tr<{
  $variant: 'default' | 'zebra'
}>`
  box-sizing: border-box;
  color: inherit;
  display: table-row;
  width: 100%;

  &:nth-child(even) {
    td {
      background: ${(props) =>
        props.$variant === 'zebra'
          ? $color.background.surface.secondary.light
          : $color.background.surface.primary.light};
    }
  }
`

const StyledTableCell = styled.td<{
  $align?: 'start' | 'end'
  $width?: 'auto' | 'stretch'
}>`
  background: ${$color.background.surface.primary.light};
  box-sizing: border-box;
  color: inherit;
  display: table-cell;
  font-size: ${$size.type.fontSize.text.md};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  height: 100%;
  line-height: ${$size.type.lineHeight.text.md};
  padding-block: ${$space.block.sm};
  text-align: ${(props) => (props.$align === 'end' ? 'right' : 'left')};
  width: ${(props) => (props.$width === 'auto' ? '1%' : 'auto')};
  white-space: ${(props) => (props.$width === 'auto' ? 'nowrap' : 'normal')};
  vertical-align: middle;

  &:first-child {
    border-bottom-left-radius: ${$size.radius.md};
    border-top-left-radius: ${$size.radius.md};
    padding-left: ${$space.inline.sm};
  }

  &:last-child {
    border-bottom-right-radius: ${$size.radius.md};
    border-top-right-radius: ${$size.radius.md};
    padding-right: ${$space.inline.sm};
  }
`

const TableCellContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${$space.gap.md};
  width: 100%;
  height: 100%;
`

export {
  StyledTable,
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
  TableCellContent,
}
