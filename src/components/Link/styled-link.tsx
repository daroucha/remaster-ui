import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space } from '@/tokens'
import styled from '@emotion/styled'

const StyledLink = styled.a<{
  disabled?: boolean
}>`
  align-items: center;
  color: ${(props) =>
    props.disabled
      ? $color.text.action.disabled.accent.light
      : $color.text.action.default.accent.light};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: inline-flex;
  flex-direction: row;
  opacity: ${(props) => (props.disabled ? '60%' : '100%')};
  text-decoration: none;

  &:hover {
    box-shadow: ${(props) =>
      props.disabled ? 'none' : '0 2px 0 currentColor'};
  }
`

const LinkIcon = styled.div`
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

const LinkContent = styled(SansSerif)`
  align-items: center;
  color: inherit;
  display: flex;
  flex-direction: row;
  gap: ${$space.gap.xs};
`

const LinkText = styled.span<{ $size: string }>`
  color: inherit;
  font-size: ${(props) =>
    props.$size === 'medium'
      ? $size.type.fontSize.text.md
      : $size.type.fontSize.text.sm};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  line-height: ${(props) =>
    props.$size === 'medium'
      ? $size.type.lineHeight.text.md
      : $size.type.lineHeight.text.sm};
`

export { StyledLink, LinkIcon, LinkContent, LinkText }
