import { $motion, $primitives, $size } from '@/tokens'
import styled from '@emotion/styled'

const StyledProgressBar = styled.div<{ $type: string }>`
  border-radius: ${(props) =>
    props.$type === 'bleed' ? '0px' : $size.radius.md};
  box-sizing: border-box;
  color: inherit;
  display: inline-block;
  height: ${(props) =>
    props.$type === 'bleed'
      ? $primitives.units['1x']
      : $primitives.units['2x']};
  min-width: 200px;
  overflow: hidden;
  position: relative;
  padding-block: ${(props) =>
    props.$type === 'bleed' ? '0px' : $primitives.units['0.5x']};
  padding-inline: ${(props) =>
    props.$type === 'bleed' ? '0px' : $primitives.units['0.5x']};

  &::after {
    background: currentColor;
    content: '';
    display: block;
    height: 100%;
    inset: 0px;
    position: absolute;
    width: 100%;
    opacity: 30%;
    z-index: 1;
  }
`

const PBar = styled.div<{ $type: string }>`
  background: currentColor;
  border-radius: ${(props) =>
    props.$type === 'bleed' ? '0px' : $size.radius.md};
  color: inherit;
  display: block;
  height: 100%;
  position: relative;
  transition-duration: ${$motion.duration.fast};
  transition-property: width;
  transition-timing-function: ${$motion.curve.linear};
  z-index: 3;
`

export { StyledProgressBar, PBar }
