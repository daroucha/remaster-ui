import { XCircle } from '@phosphor-icons/react'
import IconButton from '../IconButton'
import {
  AlertContent,
  AlertIcon,
  AlertText,
  AlertTimer,
  AlertTitle,
  AlertTitleContainer,
  StyledAlert,
} from './styled-alert'
import ProgressBar from '../ProgressBar'
import { useEffect, useState } from 'react'

interface PropsAlert {
  closable?: boolean
  leading?: React.ReactNode
  onClose?: () => void
  onTimeout?: () => void
  text?: string
  timer?: number
  title: string
}

function Alert({
  closable,
  leading,
  onClose,
  onTimeout,
  text,
  timer,
  title,
}: PropsAlert) {
  const [progress, setProgress] = useState(100)

  const hasTimer = timer !== undefined && typeof timer === 'number' && timer > 0

  useEffect(() => {
    if (hasTimer) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress <= 0) {
            clearInterval(interval)
            return 0
          }
          return prevProgress - 100 / (timer * 10)
        })
      }, 100)

      return () => clearInterval(interval)
    }
  }, [timer])

  useEffect(() => {
    if (onTimeout && progress <= 0) {
      onTimeout()
    }
  }, [progress])

  return (
    <StyledAlert $timer={hasTimer}>
      {leading && <AlertIcon $closable={closable}>{leading}</AlertIcon>}

      <AlertContent>
        <AlertTitleContainer>
          <AlertTitle>{title}</AlertTitle>

          {closable && (
            <IconButton
              size="small"
              leading={<XCircle weight="fill" />}
              onClick={() => {
                if (onClose) {
                  onClose()
                }
              }}
            />
          )}
        </AlertTitleContainer>

        {text && <AlertText>{text}</AlertText>}
      </AlertContent>

      {hasTimer && (
        <AlertTimer>
          <ProgressBar type="bleed" progress={progress} />
        </AlertTimer>
      )}
    </StyledAlert>
  )
}

export type { PropsAlert }
export default Alert
