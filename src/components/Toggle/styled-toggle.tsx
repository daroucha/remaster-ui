import SansSerif from '@/fonts/sansSerif'
import { $color, $motion, $primitives, $size, $space } from '@/tokens'
import styled from 'styled-components'

const StyledToggleArea = styled.label<{
  $disabled?: boolean
}>`
  align-items: center;
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
  display: flex;
  flex-direction: row;
  gap: ${$space.gap.md};
  width: 100%;
`

const ToggleInputArea = styled.div<{
  $disabled?: boolean
}>`
  background: ${(props) =>
    props.$disabled
      ? $color.background.action.disabled.neutral.light
      : $color.background.surface.primary.light};
  border-radius: ${$size.radius.rounded};
  box-shadow:
    inset 0 0 0 ${$size.border.sm},
    ${$color.border.default.primary.light};
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${$primitives.units['5x']};
  opacity: ${(props) => (props.$disabled ? '60%' : '100%')};
  overflow: hidden;
  position: relative;
  width: ${$primitives.units['8x']};
`

const ToggleInputMark = styled.div<{
  $checked?: boolean
}>`
  align-items: center;
  box-sizing: border-box;
  color: ${(props) =>
    props.$checked
      ? $color.icon.inverted.primary.light
      : $color.icon.plain.tertiary.light};
  display: flex;
  height: 100%;
  justify-content: flex-start;
  left: 0px;
  position: absolute;
  padding-inline: ${$space.inline.xxs};
  top: 0px;
  width: 100%;

  svg {
    color: inherit;
    height: ${$size.icon.xxs};
    margin-left: ${(props) =>
      props.$checked ? `calc(100% - ${$size.icon.xxs})` : '0%'};
    transition-duration: ${$motion.duration.default};
    transition-timing-function: ${$motion.curve.cubic};
    width: ${$size.icon.xxs};
  }
`

const ToggleInput = styled.input.attrs({ type: 'checkbox' })`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  border: none;
  cursor: inherit;
  display: block;
  height: 100%;
  margin: 0;
  transition-duration: ${$motion.duration.default};
  transition-timing-function: ${$motion.curve.linear};
  width: 100%;

  &:checked {
    background: ${$color.background.action.default.accent.light};
  }
`

const ToggleLabel = styled(SansSerif)<{
  $checked?: boolean
}>`
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
  StyledToggleArea,
  ToggleInputArea,
  ToggleInputMark,
  ToggleInput,
  ToggleLabel,
}
