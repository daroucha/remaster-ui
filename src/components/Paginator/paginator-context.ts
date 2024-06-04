import { createContext } from 'react'

const initialValue = {
  currentPage: 1,
  setCurrentPage: () => {},
}

interface PaginatorModel {
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const PaginatorContext = createContext<PaginatorModel>(initialValue)

export default PaginatorContext
