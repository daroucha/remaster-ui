import { isValidElement, useState } from 'react'
import {
  MIChildren,
  MIContent,
  MIDivider,
  MIIcon,
  MILine,
  MIMainArea,
  MIText,
  MITitle,
  MITrailing,
  StyledMenuItem,
} from './styled-menu'

interface PropsMenuItem {
  children?: React.ReactNode
  disabled?: boolean
  divider?: boolean
  leading?: React.ReactNode
  onClick?: () => void
  title: string
  text?: string
  trailing?: React.ReactNode | string
}

function MenuItem({
  children,
  disabled,
  divider,
  leading,
  onClick,
  title,
  text,
  trailing,
}: PropsMenuItem) {
  const [subMenu, setSubMenu] = useState(false)

  return (
    <StyledMenuItem onMouseLeave={() => setSubMenu(false)}>
      <MIContent
        as="div"
        $active={subMenu}
        $disabled={disabled}
        onClick={() => {
          if (!disabled && onClick) {
            onClick()
          }
        }}
        onMouseEnter={() => setSubMenu(true)}
      >
        <MILine>
          <MIMainArea>
            {leading && <MIIcon>{leading}</MIIcon>}

            <MITitle>{title}</MITitle>
          </MIMainArea>

          {trailing && (
            <MITrailing>
              {isValidElement(trailing) ? (
                <MIIcon>{trailing}</MIIcon>
              ) : (
                <MIText>{trailing}</MIText>
              )}
            </MITrailing>
          )}
        </MILine>

        {text && <MIText>{text}</MIText>}
      </MIContent>

      {children && subMenu && <MIChildren>{children}</MIChildren>}

      {divider && (
        <MIDivider>
          <hr />
        </MIDivider>
      )}
    </StyledMenuItem>
  )
}

export type { PropsMenuItem }
export default MenuItem
