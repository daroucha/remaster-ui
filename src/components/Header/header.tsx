import { useEffect, useState } from 'react'
import {
  HeaderContent,
  HeaderLogo,
  HeaderSidebar,
  StyledHeader,
} from './styled-header'
import useWindowDimensions from '@/utils/useWindowDimensions'
import { $size } from '@/tokens'
import IconButton from '../IconButton'
import { List } from '@phosphor-icons/react'

interface PropsHeader {
  children: React.ReactNode
  logo: React.ReactNode | string
}

function Header({ children, logo }: PropsHeader) {
  const { width } = useWindowDimensions()
  const [mobileMode, setMobileMode] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  useEffect(() => {
    const useMobile = width <= $size.breakpoint.mobile.default

    setMobileMode(useMobile)
  }, [width])

  return (
    <StyledHeader>
      <HeaderLogo as="div">{logo}</HeaderLogo>

      <HeaderContent>
        {mobileMode && (
          <IconButton
            size="medium"
            leading={<List />}
            onClick={() => setSidebar(!sidebar)}
          />
        )}

        {mobileMode ? (
          <>{sidebar && <HeaderSidebar>{children}</HeaderSidebar>}</>
        ) : (
          children
        )}
      </HeaderContent>
    </StyledHeader>
  )
}

export type { PropsHeader }
export default Header
