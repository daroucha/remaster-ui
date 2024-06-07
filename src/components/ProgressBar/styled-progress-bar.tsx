import { $color, $motion, $primitives, $size } from '@/tokens'
import styled from '@emotion/styled'

const StyledProgressBar = styled.div<{ $type: string }>`
  background: ${$color.background.elevation.secondary.light};
  border-radius: ${(props) =>
    props.$type === 'bleed' ? '0px' : $size.radius.md};
  box-sizing: border-box;
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
`

const PBar = styled.div<{ $type: string }>`
  background: ${$color.background.surface.primary.light};
  border-radius: ${(props) =>
    props.$type === 'bleed' ? '0px' : $size.radius.md};
  display: block;
  height: 100%;
  transition-duration: ${$motion.duration.fast};
  transition-property: width;
  transition-timing-function: ${$motion.curve.linear};
`

export { StyledProgressBar, PBar }
