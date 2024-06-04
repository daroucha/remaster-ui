import { $color, $motion, $primitives, $size, $space } from '@/tokens'
import SansSerif from '@/fonts/sansSerif'
import styled from 'styled-components'

const StyledPerspectiveCarousel = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  position: relative;
  gap: ${$space.gap.xxl};
  height: auto;
  width: 100%;
`

const PCControl = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  z-index: 3;

  button {
    transform: translateY(-50%);
  }
`

const PCMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  position: relative;
  height: auto;
  width: 100%;
`

const PCCarousel = styled.div`
  display: block;
  height: 100%;
  /* overflow-x: hidden; */
  position: relative;
  width: 100%;
  z-index: 1;
`

const PCCarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const PCCoverFlow = styled.div`
  -webkit-perspective: 600px;
  display: block;
  height: auto;
  position: relative;
  perspective: 600px;
  width: 100%;
`

const PCItem = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: auto;
  left: 50%;
  margin-left: -9%;
  margin-top: -9%;
  position: absolute;
  top: 50%;
  transform-style: preserve-3d;
  transition-duration: ${$motion.duration.slower};
  transition-property: all;
  transition-timing-function: ${$motion.curve.sine};
  width: 17%;

  picture {
    height: auto;
    width: 100%;
    z-index: 2;
  }
`

const PCCoverFX = styled.div`
  animation-delay: ${$motion.duration.slower};
  animation-duration: ${$motion.duration.slow};
  animation-fill-mode: forwards;
  animation-name: reveal;
  display: block;
  filter: blur(20px);
  left: 0px;
  opacity: 0%;
  position: absolute;
  top: 0px;
  transform: translateY(8%) scale(94%);
  transition-timing-function: ${$motion.curve.sine};
  transition-duration: ${$motion.duration.default};
  z-index: 0;

  @keyframes reveal {
    0% {
      opacity: 0%;
      transform: translateY(0%) scale(100%);
    }
    100% {
      opacity: 100%;
      transform: translateY(8%) scale(94%);
    }
  }
`

const PCActiveItemTextArea = styled(SansSerif)`
  align-items: center;
  animation-delay: ${$motion.duration.slower};
  animation-duration: ${$motion.duration.slow};
  animation-fill-mode: forwards;
  animation-name: appear;
  animation-timing-function: ${$motion.curve.sine};
  bottom: 0;
  box-sizing: border-box;
  color: ${$color.text.title.secondary.light};
  display: flex;
  flex-direction: column;
  opacity: 0%;
  position: absolute;
  transform: translate3d(0px, 10%, 0px);
  width: 100%;

  @keyframes appear {
    0% {
      opacity: 0%;
      transform: translate3d(0px, 10%, 0px);
    }
    100% {
      opacity: 100%;
      transform: translate3d(0px, 0px, 0px);
    }
  }
`

const PCActiveItemContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  transform: translateX(-9%);
`

const PCActiveItemTitle = styled.span`
  color: inherit;
  font-size: ${$size.type.fontSize.text.lg};
  font-weight: ${$primitives.typography.fontWeight.sans.bold};
  line-height: ${$size.type.lineHeight.text.lg};
`

const PCActiveItemText = styled.span`
  color: ${$color.text.plain.tertiary.light};
  font-size: ${$size.type.fontSize.text.md};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.md};
`

export {
  StyledPerspectiveCarousel,
  PCControl,
  PCMain,
  PCCarousel,
  PCCarouselContainer,
  PCCoverFlow,
  PCItem,
  PCCoverFX,
  PCActiveItemTextArea,
  PCActiveItemContent,
  PCActiveItemTitle,
  PCActiveItemText,
}
