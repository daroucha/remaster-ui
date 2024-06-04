import {
  CCContent,
  CCCoverArea,
  CCTitle,
  StyledCollectionCard,
  CCTextArea,
  CCText,
} from './styled-collection-card'

interface PropsCollectionCard {
  children?: React.ReactNode
  leading?: React.ReactNode
  onClick?: (event: React.MouseEvent<Element>) => void
  text?: string
  title: string
}

function CollectionCard({
  children,
  leading,
  onClick,
  title,
  text,
}: PropsCollectionCard) {
  return (
    <StyledCollectionCard
      onClick={(event) => {
        if (onClick) {
          onClick(event)
        }
      }}
      $clickable={!!onClick}
    >
      <CCCoverArea>{children}</CCCoverArea>

      <CCContent>
        <CCTitle>{title}</CCTitle>

        {text && (
          <CCTextArea>
            {leading}

            <CCText>{text}</CCText>
          </CCTextArea>
        )}
      </CCContent>
    </StyledCollectionCard>
  )
}

export default CollectionCard
