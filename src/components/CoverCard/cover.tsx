import StyledCover from './styled-cover'
import { PropsCover } from './cover-props'

function Cover({
  alt,
  className,
  disabled,
  hover = false,
  innerRef,
  size,
  src,
  style,
  type = 'bd',
}: PropsCover) {
  return (
    <StyledCover
      $disabled={disabled}
      $hover={hover}
      $size={size}
      $type={type}
      className={className}
      ref={innerRef}
      style={style}
    >
      {src && <img src={src} alt={alt} />}
    </StyledCover>
  )
}

export default Cover
