import styled from 'styled-components'
import { $color, $primitives, $size } from '@/tokens'
import SansSerif from '@/fonts/sansSerif'

const StyledAvatar = styled.div<{ $size?: number }>`
  align-items: center;
  aspect-ratio: 1/1;
  background: ${$color.background.surface.secondary.light};
  border-radius: ${$size.radius.rounded};
  display: flex;
  height: ${(props) => (props.$size ? props.$size + 'px' : $size.icon.md)};
  min-height: ${$size.icon.xs};
  min-width: ${$size.icon.xs};
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: ${(props) => (props.$size ? props.$size + 'px' : $size.icon.md)};
`

const AvatarImage = styled.img`
  aspect-ratio: 1/1;
  display: block;
  height: 100%;
  left: 0px;
  position: absolute;
  width: auto;
  z-index: 2;
`

const AvatarText = styled(SansSerif)`
  color: ${$primitives.colors.transparency.black[60]};
  font-family: ${$primitives.typography.fontFamily.sans};
  font-size: ${$size.type.fontSize.text.sm};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  text-transform: uppercase;
  user-select: none;
  z-index: 1;
`

const AvatarIcon = styled.div`
  aspect-ratio: 1/1;
  color: ${$primitives.colors.transparency.black[60]};
  display: block;
  height: 50%;
  max-height: ${$size.icon.lg};
  max-width: ${$size.icon.lg};
  min-height: ${$size.icon.xs};
  min-width: ${$size.icon.xs};
  width: 50%;

  svg {
    height: 100%;
    width: 100%;
  }
`

export { StyledAvatar, AvatarImage, AvatarText, AvatarIcon }
