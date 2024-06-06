import Menu from '@/components/Menu'
import MenuItem, { PropsMenuItem } from '@/components/Menu/menu-item'
import { useDropdownContext } from './dropdown'
import { StyledDropdownMenu } from './styled-dropdown'
import { animated, easings, useTransition } from '@react-spring/web'

interface PropsDropdownMenu {
  children: React.ReactNode
  position?: 'bottom' | 'top'
}

function DropdownMenu({
  children,
  position = 'bottom',
}: PropsDropdownMenu) {
  const { visibility } = useDropdownContext()

  const transition = useTransition(visibility, {
    from: {
      opacity: 0,
      y: position === 'bottom' ? '90%' : '-90%',
    },
    enter: {
      opacity: 1,
      y: position === 'bottom' ? '100%' : '-100%',
      config: {
        easing: easings.easeOutCubic,
        duration: 200,
      },
    },
    leave: {
      opacity: 0,
      y: position === 'bottom' ? '90%' : '-90%',
      config: {
        easing: easings.easeInCubic,
        duration: 160,
      },
    },
  })

  return transition(
    (props, item) =>
      item && (
        <StyledDropdownMenu as={animated.div} style={props}>
          <Menu>{children}</Menu>
        </StyledDropdownMenu>
      )
  )
}

function DropdownItem({
  as,
  children,
  disabled,
  divider,
  leading,
  onClick,
  title,
  text,
  trailing,
}: PropsMenuItem) {
  const { setVisibility } = useDropdownContext()

  return (
    <MenuItem
      as={as}
      children={children}
      disabled={disabled}
      divider={divider}
      leading={leading}
      onClick={() => {
        setVisibility(false)
        if (onClick) {
          onClick()
        }
      }}
      title={title}
      text={text}
      trailing={trailing}
    />
  )
}

export { DropdownMenu, DropdownItem }
