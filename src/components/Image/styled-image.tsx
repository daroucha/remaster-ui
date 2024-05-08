import { $color, $size } from '@/tokens'
import styled from 'styled-components'

const StyledImage = styled.div<{ $ratio?: string }>`
  align-items: center;
  aspect-ratio: ${(props) => (props.$ratio ? props.$ratio : 'none')};
  background: ${$color.background.surface.secondary.light};
  border-radius: ${$size.radius.lg};
  color: ${$color.icon.plain.secondary.light};
  display: inline-flex;
  height: auto;
  justify-content: center;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
  user-select: none;
  width: auto;

  img {
    -webkit-user-drag: none;
    height: 100%;
    object-fit: cover;
    position: relative;
    width: 100%;
    z-index: 1;
  }
`

const ImageEmptyContent = styled.div`
  align-items: center;
  background: ${$color.background.surface.secondary.light};
  color: inherit;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0%;
  width: 100%;
  z-index: 2;
`

export { StyledImage, ImageEmptyContent }
