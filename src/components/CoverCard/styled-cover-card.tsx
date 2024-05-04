import SansSerif from '@/fonts/sansSerif'
import { $color, $motion, $primitives, $size, $space } from '@/tokens'
import styled from 'styled-components'

const StyledCoverCard = styled.div<{ $clickable: boolean }>`
  align-items: center;
  color: ${$color.text.title.secondary.light};
  cursor: ${(props) => (props.$clickable ? 'pointer' : 'default')};
  display: inline-flex;
  flex-direction: column;
  gap: ${$space.gap.md};
`

const CCCoverArea = styled.div`
  display: block;
  height: auto;
  position: relative;
  width: auto;

  > picture {
    position: relative;
    z-index: 1;
  }
`

const CCCoverFX = styled.div<{ $hover: boolean }>`
  display: block;
  filter: ${(props) => (props.$hover ? 'blur(20px)' : 'none')};
  left: 0px;
  opacity: ${(props) => (props.$hover ? '60%' : '0%')};
  position: absolute;
  top: 0px;
  transform: ${(props) =>
    props.$hover ? 'translateY(8%) scale(94%)' : 'translateY(0%) scale(100%)'};
  transition-timing-function: ${$motion.curve.sine};
  transition-duration: ${$motion.duration.default};
  z-index: 0;
`

const CCChildrenArea = styled.div`
  box-sizing: border-box;
  display: flex;
  left: 0px;
  padding-block: ${$space.block.sm};
  padding-inline: ${$space.inline.sm};
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 2;
`

const CCTextArea = styled(SansSerif)`
  align-items: center;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CCTitle = styled.span<{ $state?: boolean }>`
  color: inherit;
  font-size: ${(props) =>
    props.$state ? $size.type.fontSize.text.lg : $size.type.fontSize.text.md};
  font-weight: ${(props) =>
    props.$state
      ? $primitives.typography.fontWeight.sans.bold
      : $primitives.typography.fontWeight.sans.regular};
  line-height: ${(props) =>
    props.$state
      ? $size.type.lineHeight.text.lg
      : $size.type.lineHeight.text.md};
`

const CCText = styled.span`
  color: ${$color.text.plain.tertiary.light};
  font-size: ${$size.type.fontSize.text.md};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.md};
`

export {
  StyledCoverCard,
  CCCoverArea,
  CCCoverFX,
  CCChildrenArea,
  CCTextArea,
  CCTitle,
  CCText,
}
