import styled from 'styled-components'
import { $color, $size } from '@/tokens'
import { InputBaseElement, StyledInputBase } from '../Field/styled-input-base'

const StyledSelect = styled(InputBaseElement)`
  background: transparent;
  box-shadow: none;
  cursor: inherit;
  position: relative;
  z-index: 3;
`

const StyledSelectBase = styled(StyledInputBase)<{ $disabled: boolean }>`
  background: ${$color.background.surface.primary.light};
  border-radius: ${$size.radius.sm};
  box-shadow: ${`inset 0 0 0 ${$size.border.sm} ${$color.border.default.secondary.light}`};
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
`

export { StyledSelect, StyledSelectBase }
