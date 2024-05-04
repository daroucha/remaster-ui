import {
  StyledCoverCard,
  CCCoverArea,
  CCCoverFX,
  CCChildrenArea,
  CCTextArea,
  CCTitle,
  CCText,
} from './styled-cover-card'
import Cover from './cover'
import { PropsCover } from './cover-props'
import { useState } from 'react'

interface PropsCoverCard extends PropsCover {
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<Element>) => void
  state?: boolean
  text?: string
  title: string
}

function CoverCard(props: PropsCoverCard) {
  const { children, onClick, state, title, text } = props

  const [hover, setHover] = useState(false)

  const useHover = () => (onClick ? hover : false)

  return (
    <StyledCoverCard
      $clickable={!!onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={(event) => {
        if (onClick) {
          onClick(event)
        }
      }}
    >
      <CCCoverArea>
        {children && <CCChildrenArea>{children}</CCChildrenArea>}

        <Cover {...props} hover={useHover()} />

        <CCCoverFX $hover={useHover()}>
          <Cover {...props} />
        </CCCoverFX>
      </CCCoverArea>

      <CCTextArea>
        <CCTitle $state={state}>{title}</CCTitle>
        {text && <CCText>{text}</CCText>}
      </CCTextArea>
    </StyledCoverCard>
  )
}

export default CoverCard
