import {
  StyledAvatar,
  AvatarImage,
  AvatarText,
  AvatarIcon,
} from './styled-avatar'
import initials from '@/utils/initials'

interface PropsAvatar {
  alt?: string
  icon?: React.ReactNode
  size?: number
  src?: string
  text?: string
}

function Avatar({ alt, icon, size, src, text }: PropsAvatar) {
  const slice = text ? initials(text) : null

  return (
    <StyledAvatar $size={size}>
      {src && <AvatarImage alt={alt} src={src} />}
      {text && !icon && <AvatarText>{slice}</AvatarText>}
      {icon && <AvatarIcon>{icon}</AvatarIcon>}
    </StyledAvatar>
  )
}

export default Avatar
