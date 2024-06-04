import { useContext, useState } from 'react'
import { StyledTab, TabsArea } from './styled-tab'
import TabControl from './tab-control'
import TabContext from './tab-context'
import TabContent from './tab-content'

interface PropsTab {
  children?: React.ReactNode
  disabled?: boolean
  defaultValue?: string
}

function Tab({ children, disabled, defaultValue = '' }: PropsTab) {
  const [active, setActive] = useState<string>(defaultValue)

  const value = { disabled, active, setActive }

  return (
    <TabContext.Provider value={value}>
      <StyledTab>{children}</StyledTab>
    </TabContext.Provider>
  )
}

export const useTabContext = () => {
  const context = useContext(TabContext)

  if (!context) {
    throw new Error(
      `Tab compound components cannot be rendered outside the Tab component`,
    )
  }

  return context
}

Tab.Tabs = TabsArea
Tab.Control = TabControl
Tab.Content = TabContent

export default Tab
