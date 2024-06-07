import { $color, $motion, $primitives, $size } from '@/tokens'
import styled from '@emotion/styled'

const StyledImageRadio = styled.label<{
  $disabled?: boolean
}>`
  align-items: center;
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
  display: inline-flex;
  height: ${$primitives.units['12x']};
  justify-content: center;
  opacity: ${(props) => (props.$disabled ? '60%' : '100%')};
  width: ${$primitives.units['12x']};
`

const IRImage = styled.label`
  align-items: center;
  aspect-ratio: 1/1;
  background: ${$color.background.surface.primary.light};
  border-radius: ${$size.radius.rounded};
  cursor: inherit;
  display: flex;
  height: ${$primitives.units['12x']};
  justify-content: center;
  opacity: inherit;
  position: relative;
  transition-duration: ${$motion.duration.default};
  transition-timing-function: ${$motion.curve.linear};
  width: ${$primitives.units['12x']};

  &::after {
    aspect-ratio: inherit;
    border-radius: inherit;
    box-shadow: ${`inset 0 0 0 ${$size.border.md} ${$color.border.focus.primary.light}`};
    content: '';
    display: block;
    height: inherit;
    left: 50%;
    position: absolute;
    top: 50%;
    transform-origin: center;
    transform: translate(-50%, -50%) scale(0);
    transition-duration: ${$motion.duration.slower};
    transition-timing-function: ${$motion.curve.cubic};
    width: inherit;
    z-index: 0;
  }
`

const IRImageArea = styled.div`
  align-items: center;
  aspect-ratio: inherit;
  border-radius: inherit;
  display: flex;
  height: 100%;
  justify-content: center;
  object-fit: cover;
  overflow: hidden;
  z-index: 2;

  &::before {
    border-radius: inherit;
    box-shadow: ${`inset 0 0 0 ${$size.border.sm} ${$color.border.default.primary.light}`};
    content: '';
    display: block;
    height: 100%;
    inset: 0px;
    position: absolute;
    width: 100%;
    z-index: 2;
  }

  > picture {
    height: 200%;
    max-height: max-content;
    max-width: max-content;
    z-index: 1;
  }
`

const IRInput = styled.input`
  display: none;
  opacity: 0;
  visibility: hidden;

  &:checked + label {
    height: ${$primitives.units['10x']};
    width: ${$primitives.units['10x']};

    &::after {
      height: ${$primitives.units['12x']};
      transform: translate(-50%, -50%) scale(1);
      width: ${$primitives.units['12x']};
    }
  }
`

export { StyledImageRadio, IRImage, IRImageArea, IRInput }
