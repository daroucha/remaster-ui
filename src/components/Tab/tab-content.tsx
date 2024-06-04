import { StyledTabContent } from './styled-tab'
import { useTabContext } from './tab'

interface PropsTabContent {
  children: React.ReactNode
  value: string
}

function TabContent({ children, value }: PropsTabContent) {
  const { active } = useTabContext()

  const isActive = active === value

  return <StyledTabContent $active={isActive}>{children}</StyledTabContent>
}

export default TabContent
