import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from 'styled-components'

const StyledInlineStepper = styled.div<{
  $disabled?: boolean
}>`
  align-items: center;
  border-radius: ${$size.radius.md};
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  gap: ${$space.gap.xs};
  justify-content: center;
  opacity: ${(props) => (props.$disabled ? '60%' : '100%')};
  padding-block: ${$space.block.xxs};
  padding-inline: ${$space.inline.xxs};
`

const ISIcon = styled.button<{
  disabled?: boolean
}>`
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  appearance: none;
  aspect-ratio: 1/1;
  background: transparent;
  border-radius: ${$size.radius.sm};
  border: none;
  color: ${$color.icon.text.secondary.light};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  padding-block: ${$space.block.xxs};
  padding-inline: ${$space.block.xxs};

  &:hover:not(:disabled) {
    background: ${$color.background.action.hover.neutral.light};
  }

  svg {
    height: ${$size.icon.xxs};
    width: ${$size.icon.xxs};
  }
`

const ISText = styled(SansSerif)`
  color: ${$color.text.plain.primary.light};
  font-size: ${$size.type.fontSize.text.sm};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.sm};
  user-select: none;
`

export { StyledInlineStepper, ISIcon, ISText }
