import { usePaginatorContext } from './paginator'
import { PIText, StyledPageIndicator } from './styled-page-indicator'

interface PropsPageInterface {
  page: number
}

function PageIndicator({ page }: PropsPageInterface) {
  const { currentPage } = usePaginatorContext()

  const active = currentPage === page

  return (
    <StyledPageIndicator $active={active}>
      <PIText $active={active}>{page}</PIText>
    </StyledPageIndicator>
  )
}

export type { PropsPageInterface }
export default PageIndicator
