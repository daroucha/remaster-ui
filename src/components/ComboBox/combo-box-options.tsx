import { Check } from '@phosphor-icons/react'
import { useComboBoxContext } from './combo-box'
import { CBMenu, CBOption, CBOptionText } from './styled-combo-box'
import { useTransition, animated, easings } from '@react-spring/web'

interface PropsCBOptions {
  children: React.ReactNode
  position: 'top' | 'bottom'
}

function ComboBoxOptions({ children, position = 'bottom' }: PropsCBOptions) {
  const { visibility } = useComboBoxContext()

  const transitions = useTransition(visibility, {
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

  return transitions(
    (style, item) =>
      item && (
        <CBMenu as={animated.ul} style={style} $position={position}>
          {children}
        </CBMenu>
      ),
  )
}

interface PropsCBOption {
  active?: boolean
  onClick?: (event: React.MouseEvent<Element>) => void
  text: string
}

function ComboBoxOption({ active, onClick, text }: PropsCBOption) {
  const { setVisibility } = useComboBoxContext()

  return (
    <CBOption
      as="li"
      $active={active}
      $clickable={!!onClick}
      onClick={(event) => {
        if (onClick) {
          setVisibility(false)
          onClick(event)
        }
      }}
    >
      <CBOptionText>{text}</CBOptionText>

      {active && <Check />}
    </CBOption>
  )
}

export { ComboBoxOptions, ComboBoxOption }
