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

const CheckboxInputArea = styled.div<{
  $disabled?: boolean
}>`
  background: ${(props) =>
    props.$disabled
      ? $color.background.action.disabled.neutral.light
      : $color.background.surface.primary.light};
  border-radius: ${$size.radius.sm};
  box-shadow:
    inset 0 0 0 ${$size.border.sm},
    ${$color.border.default.primary.light};
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${$primitives.units['4.5x']};
  opacity: ${(props) => (props.$disabled ? '60%' : '100%')};
  overflow: hidden;
  position: relative;
  width: ${$primitives.units['4.5x']};
`

const CheckboxInputMark = styled.div<{ $checked?: boolean }>`
  align-items: center;
  color: ${(props) =>
    props.$checked
      ? $color.icon.inverted.primary.light
      : $color.icon.plain.tertiary.light};
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;

  svg {
    height: ${$size.icon.xxs};
    width: ${$size.icon.xxs};
  }
`

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  border: none;
  cursor: inherit;
  display: block;
  height: 100%;
  margin: 0;
  width: 100%;

  &:checked {
    background: ${$color.background.action.default.accent.light};
  }
`

const CheckboxLabel = styled(SansSerif)<{ $checked?: boolean }>`
  color: ${(props) =>
    props.$checked
      ? $color.text.plain.primary.light
      : $color.text.plain.secondary.light};
  display: block;
  font-size: ${$size.type.fontSize.text.md};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.md};
  user-select: none;
`

export {
  StyledCheckboxArea,
  CheckboxInputArea,
  CheckboxInputMark,
  CheckboxInput,
  CheckboxLabel,
}
