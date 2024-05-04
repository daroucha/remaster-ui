import { $color, $motion } from '@/tokens'
import styled from 'styled-components'

const CoverStack = styled.div`
  align-items: center;
  direction: rtl;
  display: inline-flex;
  flex-direction: row-reverse;
  height: -webkit-fill-available;
  justify-content: center;

  picture {
    box-shadow: 0 0 0 4px ${$color.background.surface.secondary.light};
    transition-duration: ${$motion.duration.default};
    transition-timing-function: ${$motion.curve.cubic};

    &:nth-child(n):not(:first-child) {
      margin-left: -20%;
    }
  }

  &:hover {
    picture {
      &:nth-child(2) {
        margin-left: -12%;
      }

      &:nth-child(3) {
        margin-left: -16%;
      }

      &:nth-child(4) {
        margin-left: -20%;
      }

      &:nth-child(n + 1):not(
          :first-child,
          :nth-child(2),
          :nth-child(3),
          :nth-child(4)
        ) {
        margin-left: -22%;
      }
    }
  }
`

export default CoverStack
