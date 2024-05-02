import styled from 'styled-components'
import { $color, $primitives, $size, $space } from '@/tokens'
import '@/typography/sansSerif.css'

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
      : $color.text.action.default.neutral.light};
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
  display: inline-block;
  height: auto;
  opacity: ${(props) => (props.$disabled ? '60%' : '100%')};
  padding-block: ${$space.block.sm};
  padding-inline: ${$space.inline.sm};

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
  flex-shrink: 0;
  flex-grow: 0;
  height: ${$size.icon.xs};
`

const NLText = styled.span`
  color: inherit;
  display: block;
  font-family: ${$primitives.typography.fontFamily.sans};
  font-size: ${$size.type.fontSize.text.sm};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.sm};
  user-select: none;
`

export { StyledNL, NLContent, NLIcon, NLText }
