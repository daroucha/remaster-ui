import {
  DCContent,
  DCIcon,
  DCText,
  DCTextArea,
  DCTitle,
  StyledDetailCard,
} from './styled-detail-card'

interface PropsDetailCard {
  action?: React.ReactNode
  leading?: React.ReactNode
  text?: string
  title: string
}

function DetailCard({ action, leading, text, title }: PropsDetailCard) {
  return (
    <StyledDetailCard $adjust={!!text}>
      <DCContent $adjust={!!text}>
        {leading && <DCIcon>{leading}</DCIcon>}

        <DCTextArea as="div">
          <DCTitle>{title}</DCTitle>

          {text && <DCText>{text}</DCText>}
        </DCTextArea>
      </DCContent>

      {action}
    </StyledDetailCard>
  )
}

export default DetailCard
