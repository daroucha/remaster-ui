import StyledPaginator from './styled-paginator'
import PageIndicator from './page-indicator'
import { useContext, useEffect, useState } from 'react'
import PaginatorContext from './paginator-context'

interface PropsPaginator {
  children: React.ReactNode
  page: number
}

function Paginator({ children, page }: PropsPaginator) {
  const [currentPage, setCurrentPage] = useState<number>(page)

  const value = { currentPage, setCurrentPage }

  useEffect(() => {
    setCurrentPage(page)
  }, [page])

  return (
    <PaginatorContext.Provider value={value}>
      <StyledPaginator>{children}</StyledPaginator>
    </PaginatorContext.Provider>
  )
}

export const usePaginatorContext = () => {
  const context = useContext(PaginatorContext)

  if (!context) {
    throw new Error(
      `Paginator compound components cannot be rendered outside the Paginator component`,
    )
  }

  return context
}

Paginator.Indicator = PageIndicator

export type { PropsPaginator }
export default Paginator
