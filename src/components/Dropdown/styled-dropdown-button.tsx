import SansSerif from '@/fonts/sansSerif'
import { $color, $motion, $primitives, $size, $space } from '@/tokens'
import styled from 'styled-components'

const StyledDropdownButton = styled.button<{
  disabled?: boolean
  $active: boolean
}>`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: ${(props) =>
    props.$active
      ? $color.background.action.hover.neutral.light
      : 'transparent'};
  border-radius: ${$size.radius.sm};
  border: none;
  box-sizing: border-box;
  color: ${(props) =>
    props.$active
      ? $color.text.action.default.accent.light
      : $color.text.action.default.neutral.light};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: inline-flex;
  flex-direction: row;
  gap: ${$space.gap.md};
  opacity: ${(props) => (props.disabled ? '60%' : '100%')};
  padding-block: ${$space.block.sm};
  padding-inline: ${$space.inline.sm};
  user-select: none;

  &:hover {
    background: ${(props) =>
      props.disabled
        ? 'transparent'
        : $color.background.action.hover.neutral.light};
  }
`

const DBIcon = styled.div`
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${$size.icon.xs};
  width: ${$size.icon.xs};

  svg {
    height: 100%;
    width: 100%;
  }
`

const DBContent = styled(SansSerif)`
  align-items: center;
  color: inherit;
  display: flex;
  flex-direction: row;
  width: -webkit-fill-available;
  gap: ${$space.gap.xs};
`

const DBText = styled.span`
  color: inherit;
  font-size: ${$size.type.fontSize.text.sm};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.sm};
`

const DBCaret = styled.div<{ $position?: boolean }>`
  align-items: center;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${$primitives.units['2.5x']};
  justify-content: center;
  overflow: hidden;
  transform: ${(props) =>
    props.$position ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition-duration: ${$motion.duration.slow};
  transition-timing-function: ${$motion.curve.sine};
  width: ${$primitives.units['2.5x']};

  svg {
    height: ${$size.icon.xxs};
    width: ${$size.icon.xxs};
  }
`

export { StyledDropdownButton, DBIcon, DBContent, DBText, DBCaret }
