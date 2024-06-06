import SansSerif from '@/fonts/sansSerif'
import { $color, $primitives, $size, $space, $motion } from '@/tokens'
import styled from 'styled-components'

const StyledAlert = styled.div<{ $timer?: boolean }>`
  align-items: flex-start;
  background: ${$color.background.action.default.alert.light};
  border-radius: ${$size.radius.sm};
  color: ${$color.text.inverted.primary.light};
  display: inline-flex;
  gap: ${$space.gap.md};
  overflow: hidden;
  padding-bottom: ${(props) =>
    props.$timer ? $space.block.md : $space.block.sm};
  padding-top: ${$space.block.sm};
  padding-inline: ${$space.inline.sm};
  position: relative;
  transition-duration: ${$motion.duration.default};
  transition-property: padding;
  transition-timing-function: ${$motion.curve.sine};
`

const AlertIcon = styled.div<{ $closable?: boolean }>`
  align-items: center;
  color: inherit;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${$size.icon.sm};
  justify-content: center;
  padding-block: ${(props) =>
    props.$closable ? $space.block.xxs : '0'};
  width: ${$size.icon.xs};

  svg {
    height: ${$size.icon.xs};
    width: ${$size.icon.xs};
  }
`

const AlertContent = styled(SansSerif)`
  align-items: flex-start;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: ${$space.gap.xs};
  width: -webkit-fill-available;
`

const AlertTitleContainer = styled.div`
  align-items: center;
  align-self: stretch;
  color: inherit;
  display: flex;
  justify-content: space-between;

  button {
    color: inherit;
  }
`

const AlertTitle = styled.h4`
  color: inherit;
  font-size: ${$size.type.fontSize.text.md};
  font-weight: ${$primitives.typography.fontWeight.sans.bold};
  line-height: ${$size.type.lineHeight.text.md};
  margin: 0;
`

const AlertText = styled.span`
  color: ${$color.text.inverted.secondary.light};
  font-size: ${$size.type.fontSize.text.sm};
  font-weight: ${$primitives.typography.fontWeight.sans.regular};
  line-height: ${$size.type.lineHeight.text.sm};
`

const AlertTimer = styled.div`
  animation-delay: ${$motion.duration.default};
  animation-duration: ${$motion.duration.default};
  animation-fill-mode: forwards;
  animation-name: revealBar;
  animation-timing-function: ${$motion.curve.cubic};
  bottom: 0px;
  color: inherit;
  display: flex;
  height: auto;
  left: 0px;
  opacity: 0%;
  position: absolute;
  width: 100%;

  @keyframes revealBar {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  .master-progress-bar {
    width: 100%;
  }
`

export {
  StyledAlert,
  AlertIcon,
  AlertContent,
  AlertTitleContainer,
  AlertTitle,
  AlertText,
  AlertTimer,
}
