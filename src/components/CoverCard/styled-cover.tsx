import { $size } from '@/tokens'
import styled from 'styled-components'

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

const StyledCover = styled.picture<{ $type: string; $size?: number }>`
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
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }
`

export default StyledCover
