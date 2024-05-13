import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from 'styled-components'

const StyledSegmentedControl = styled.div`
  align-items: center;
  background: ${$color.background.surface.primary.light};
  border-radius: ${$size.radius.md};
  box-shadow: 0 0 0 ${$size.border.sm} ${$color.border.default.secondary.light};
  box-sizing: border-box;
  display: inline-flex;
  gap: ${$space.gap.xs};
  padding: ${$primitives.units['0.5x']};
`

const StyledSegmentedControlTab = styled.label<{
  $disabled?: boolean
  $checked: boolean
}>`
  align-items: center;
  background: ${(props) =>
    props.$checked
      ? $color.background.action.default.accent.light
      : 'transparent'};
  border-radius: ${$size.radius.sm};
  box-sizing: border-box;
  color: ${(props) =>
    props.$checked
      ? $color.text.inverted.primary.light
      : $color.text.action.default.neutral.light};
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
  display: inline-flex;
  gap: ${$space.gap.md};
  opacity: ${(props) => (props.$disabled ? '60%' : '100%')};
  padding-block: ${$space.inline.xs};
  padding-inline: ${$space.inline.sm};

  &:hover {
    background: ${(props) =>
      props.$disabled
        ? 'transparent'
        : props.$checked
          ? $color.background.action.default.accent.light
          : $color.background.action.hover.neutral.light};
  }

  input {
    display: none;
  }
`

const SCIcon = styled.div`
  color: inherit;
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

const SCText = styled(SansSerif)`
  color: inherit;
  font-size: ${$size.type.fontSize.text.sm};
  font-weight: ${$primitives.typography.fontWeight.sans.medium};
  line-height: ${$size.type.lineHeight.text.sm};
  user-select: none;
`

export { StyledSegmentedControl, StyledSegmentedControlTab, SCIcon, SCText }
