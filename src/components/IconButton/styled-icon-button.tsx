import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from '@emotion/styled'

const StyledIconButton = styled.button<{
  disabled?: boolean
  $active?: boolean
}>`
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  appearance: none;
  background: ${(props) =>
    props.$active
      ? $color.background.action.default.support.light
      : 'transparent'};
  border-radius: ${$size.radius.sm};
  border: none;
  box-sizing: border-box;
  color: ${(props) =>
    props.$active
      ? $color.text.inverted.primary.light
      : $color.text.action.default.neutral.light};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: inline-flex;
  flex-direction: column;
  gap: ${$space.gap.xxs};
  justify-content: center;
  opacity: ${(props) => (props.disabled ? '60%' : '100%')};
  padding-block: ${$space.inline.xs};
  padding-inline: ${$space.inline.sm};
  text-decoration: none;

  &:hover:not(:disabled) {
    background: ${(props) =>
      props.$active
        ? $color.background.action.default.support.light
        : $color.background.action.hover.neutral.light};
  }
`

const IBIcon = styled.div<{ $size: string }>`
  aspect-ratio: 1/1;
  align-items: center;
  color: inherit;
  display: flex;
  min-height: ${(props) =>
    props.$size === 'medium' ? $size.icon.md : $size.icon.xs};
  justify-content: center;
  min-width: ${(props) =>
    props.$size === 'medium' ? $size.icon.md : $size.icon.xs};

  svg {
    height: 100%;
    width: 100%;
  }
`

const IBText = styled(SansSerif)`
  color: inherit;
  font-size: ${$size.type.fontSize.text.sm};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.sm};
  text-align: center;
  user-select: none;
`

export { StyledIconButton, IBIcon, IBText }
