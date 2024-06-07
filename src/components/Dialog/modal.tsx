import {
  animated,
  easings,
  useChain,
  useSpringRef,
  useTransition,
} from '@react-spring/web'
import { Overlay, StyledModal, Window } from './styled-modal'

interface PropsModal {
  children: React.ReactNode
  onClickOutside?: () => void
  visibility: boolean
}

function Modal({ children, onClickOutside, visibility }: PropsModal) {
  const overlayRef = useSpringRef()
  const overlayTransition = useTransition(visibility, {
    ref: overlayRef,
    from: { opacity: 0 as any },
    enter: { opacity: 1 as any },
    leave: { opacity: 0 as any },
    config: {
      duration: 120,
    },
  })

  const windowRef = useSpringRef()
  const windowTransition = useTransition(visibility, {
    ref: windowRef,
    from: { y: '10%', opacity: 0 as any },
    enter: { y: '0%', opacity: 1 as any },
    leave: { y: '10%', opacity: 0 as any },
    config: {
      easing: easings.easeOutSine,
      duration: 200,
    },
  })

  useChain([overlayRef, windowRef], [0, 0.1])

  return overlayTransition(
    (style, item) =>
      item && (
        <StyledModal as={animated.div} style={style}>
          {windowTransition(
            (props, el) =>
              el && (
                <Window as={animated.div} style={props}>
                  {children}
                </Window>
              )
          )}

          <Overlay
            onClick={() => {
              if (onClickOutside) {
                onClickOutside()
              }
            }}
          />
        </StyledModal>
      )
  )
}

export default Modal
