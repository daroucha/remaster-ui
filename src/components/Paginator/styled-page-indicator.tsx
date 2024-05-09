import SansSerif from '@/fonts/sansSerif'
import { $color, $motion, $primitives, $size } from '@/tokens'
import styled from 'styled-components'

const StyledPageIndicator = styled.div<{ $active: boolean }>`
  align-items: center;
  aspect-ratio: 1/1;
  background: ${$color.background.action.default.accent.light};
  border-radius: ${$size.radius.rounded};
  color: ${$color.text.inverted.primary.light};
  display: inline-flex;
  height: ${(props) =>
    props.$active ? $size.icon.xs : $primitives.units['2.5x']};
  justify-content: center;
  overflow: hidden;
  position: relative;
  text-align: center;
  transition-duration: ${$motion.duration.default};
  transition-timing-function: ${$motion.curve.sine};
`

const PIText = styled(SansSerif)<{ $active: boolean }>`
  color: ${(props) =>
    props.$active ? 'inherit' : $color.text.action.default.accent.light};
  font-size: ${$size.type.fontSize.text.sm};
  font-weight: ${$primitives.typography.fontWeight.sans.bold};
  line-height: ${$size.type.lineHeight.text.sm};
  position: absolute;
  transition-duration: ${$motion.duration.slow};
  transition-timing-function: ${$motion.curve.sine};
  user-select: none;
`

export { StyledPageIndicator, PIText }
