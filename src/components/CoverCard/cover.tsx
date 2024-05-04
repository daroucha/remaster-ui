import StyledCover from './styled-cover'
import { PropsCover } from './cover-props'

function Cover({ alt, hover = false, size, src, type = 'bd' }: PropsCover) {
  return (
    <StyledCover $type={type} $size={size} $hover={hover}>
      {src && <img src={src} alt={alt} />}
    </StyledCover>
  )
}

export default Cover
