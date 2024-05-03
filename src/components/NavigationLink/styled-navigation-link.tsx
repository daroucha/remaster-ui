import styled from 'styled-components'
import { $color, $primitives, $size, $space } from '@/tokens'
import SansSerif from '@/fonts/sansSerif'

const StyledNL = styled.a<{
  $state?: boolean
  $size: string
  $disabled?: boolean
}>`
  background: transparent;
  border-radius: ${$size.radius.sm};
  color: ${(props) =>
    props.$disabled
      ? $color.text.plain.tertiary.light
      : props.$state
        ? $color.text.action.default.accent.light
        : $color.text.action.default.neutral.light};
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
  display: inline-flex;
  height: auto;
  opacity: ${(props) => (props.$disabled ? '60%' : '100%')};
  padding-block: ${$space.block.sm};
  padding-inline: ${(props) =>
    props.$size === 'medium' ? $space.inline.lg : $space.inline.sm};
  width: max-content;

  &:hover {
    background: ${(props) =>
      props.$disabled
        ? 'transparent'
        : $color.background.action.hover.neutral.light};
    color: ${(props) =>
      props.$disabled
        ? $color.text.plain.tertiary.light
        : $color.text.action.hover.neutral.light};
  }
`

const NLContent = styled.div`
  align-items: center;
  color: inherit;
  display: inline-flex;
  flex-direction: row;
  gap: ${$space.gap.md};
`

const NLIcon = styled.div`
  aspect-ratio: 1/1;
  color: inherit;
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${$size.icon.xs};
`

const NLText = styled(SansSerif)<{
  $state?: boolean
  $size: string
}>`
  color: inherit;
  display: block;
  font-size: ${(props) =>
    props.$size === 'medium'
      ? $size.type.fontSize.text.md
      : $size.type.fontSize.text.sm};
  font-weight: ${(props) =>
    props.$state
      ? $primitives.typography.fontWeight.sans.medium
      : $primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.sm};
  user-select: none;
`

export { StyledNL, NLContent, NLIcon, NLText }
