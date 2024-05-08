import MenuItem from './menu-item'
import { StyledMenu } from './styled-menu'

interface PropsMenu {
  children: React.ReactNode
}

function Menu({ children }: PropsMenu) {
  return <StyledMenu>{children}</StyledMenu>
}

Menu.Item = MenuItem

export default Menu
