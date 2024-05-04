import StyledCover from './styled-cover'

interface PropsCover {
  alt?: string
  size?: number
  src?: string
  type: 'bd' | 'dvd' | 'collection'
}

function Cover({ alt, size, src, type = 'bd' }: PropsCover) {
  return (
    <StyledCover $type={type} $size={size}>
      {src && <img src={src} alt={alt} />}
    </StyledCover>
  )
}

export default Cover
