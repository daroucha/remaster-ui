import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from 'styled-components'

const StyledCheckboxArea = styled.label<{ $disabled?: boolean }>`
  align-items: center;
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
  display: flex;
  flex-direction: row;
  gap: ${$space.gap.md};
  width: 100%;
`

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0;
`

const CheckboxLabel = styled(SansSerif)`
  color: ${$color.text.plain.secondary.light};
  display: block;
  font-family: ${$primitives.typography.fontFamily.sans};
  font-size: ${$size.type.fontSize.text.md};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.md};
  user-select: none;
`

export { StyledCheckboxArea, CheckboxInput, CheckboxLabel }
