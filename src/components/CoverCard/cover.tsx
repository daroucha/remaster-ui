import StyledCover from './styled-cover'
import { PropsCover } from './cover-props'
import Image from '../BaseImage'

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
      <Image src={src} alt={alt} className="image" raw />
    </StyledCover>
  )
}

export default Cover
