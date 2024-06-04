import { DBIcon, DBText, StyledDashedButton } from './styled-dashed-button'

interface PropsDashedButton {
  disabled?: boolean
  leading?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  text: string
  trailing?: React.ReactNode
}

function DashedButton({
  disabled,
  leading,
  onClick,
  text,
  trailing,
}: PropsDashedButton) {
  return (
    <StyledDashedButton
      disabled={disabled}
      onClick={(event) => {
        if (!disabled && onClick) {
          onClick(event)
        }
      }}
    >
      {leading && <DBIcon>{leading}</DBIcon>}

      <DBText>{text}</DBText>

      {trailing && <DBIcon>{trailing}</DBIcon>}
    </StyledDashedButton>
  )
}

export default DashedButton
