import { StyledSectionTitle, STitleArea, STitle } from './styled-section-title'

interface PropsSectionTitle {
  children?: React.ReactNode
  text: string
}

function SectionTitle({ children, text }: PropsSectionTitle) {
  return (
    <StyledSectionTitle>
      <STitleArea>
        <STitle>{text}</STitle>

        {children}
      </STitleArea>

      <hr />
    </StyledSectionTitle>
  )
}

export type { PropsSectionTitle }
export default SectionTitle
