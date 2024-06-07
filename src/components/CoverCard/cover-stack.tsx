import { $color, $motion } from '@/tokens'
import styled from '@emotion/styled'

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

    &:nth-of-type(n):not(:first-of-type) {
      margin-left: -20%;
    }
  }

  &:hover {
    picture {
      &:nth-of-type(2) {
        margin-left: -12%;
      }

      &:nth-of-type(3) {
        margin-left: -16%;
      }

      &:nth-of-type(4) {
        margin-left: -20%;
      }

      &:nth-of-type(n + 1):not(
          :first-of-type,
          :nth-of-type(2),
          :nth-of-type(3),
          :nth-of-type(4)
        ) {
        margin-left: -22%;
      }
    }
  }
`

export default CoverStack
