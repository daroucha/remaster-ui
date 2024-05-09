import {
  StyledList,
  ListMain,
  ListIcon,
  ListContent,
  ListTitle,
  ListText,
} from './styled-list'

interface PropsList {
  children?: React.ReactNode
  leading?: React.ReactNode
  title: string
  text?: string
}

function List({ children, leading, title, text }: PropsList) {
  return (
    <StyledList>
      <ListMain>
        {leading && <ListIcon>{leading}</ListIcon>}

        <ListContent>
          <ListTitle>{title}</ListTitle>

          {text && <ListText>{text}</ListText>}
        </ListContent>
      </ListMain>

      {children}
    </StyledList>
  )
}

export type { PropsList }
export default List
