import { XCircle } from '@phosphor-icons/react'
import {
  ChipClose,
  ChipContent,
  ChipIcon,
  ChipText,
  StyledChip,
} from './styled-chip'

interface PropsChip {
  closable?: boolean
  leading?: React.ReactNode
  size: 'small' | 'medium'
  text: string
}

function Chip({ closable, leading, size = 'small', text }: PropsChip) {
  return (
    <StyledChip $size={size}>
      <ChipContent>
        {leading && <ChipIcon $size={size}>{leading}</ChipIcon>}

        <ChipText $size={size}>{text}</ChipText>
      </ChipContent>

      {closable && (
        <ChipClose $size={size}>
          <XCircle weight="fill" />
        </ChipClose>
      )}
    </StyledChip>
  )
}

export default Chip
