import { $size, $motion } from '@/tokens'
import styled from '@emotion/styled'

const aspectRatio = (type: string) => {
  switch (type) {
    case 'bd':
      return '27/34'
      break

    case 'dvd':
      return '13/18'
      break

    default:
      return '5772287999999999/7833600000000000'
      break
  }
}

const borderRadius = (type: string) => {
  switch (type) {
    case 'bd':
      return '4.938271604938271%'
      break

    case 'dvd':
      return '3.619909502262444%'
      break

    default:
      return '1.7739932588256166%'
      break
  }
}

const StyledCover = styled.picture<{
  $disabled?: boolean
  $hover?: boolean
  $size?: number
  $type: string
}>`
  align-items: center;
  aspect-ratio: ${(props) => aspectRatio(props.$type)};
  background: currentColor;
  border-radius: ${(props) => borderRadius(props.$type)};
  direction: ltr;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${(props) =>
    props.$size ? props.$size + 'px' : '-webkit-fill-available'};
  justify-content: center;
  min-height: ${$size.icon.lg};
  transform: ${(props) => (props.$hover ? 'scale(104%)' : 'none')};
  transition-timing-function: ${$motion.curve.sine};
  transition-duration: ${$motion.duration.default};
  overflow: hidden;

  .image {
    height: 100%;
    opacity: ${(props) => (props.$disabled ? '60%' : '100%')};
    transition: inherit;
    width: 100%;
  }
`

export default StyledCover
