import Modal from './modal'
import {
  DialogActions,
  DialogContent,
  DialogIcon,
  DialogText,
  DialogTextArea,
  DialogTitle,
} from './styled-dialog'

interface PropsDialog {
  actions: 'stretch' | 'end' | 'between'
  children: React.ReactNode
  leading?: React.ReactNode
  onDismiss?: () => void
  title: string
  text?: string
  useDivider?: boolean
  visibility: boolean
}

function Dialog({
  actions,
  children,
  leading,
  onDismiss,
  useDivider,
  title,
  text,
  visibility,
}: PropsDialog) {
  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss()
    }
  }

  return (
    <Modal visibility={visibility} onClickOutside={handleDismiss}>
      <DialogContent>
        {leading && <DialogIcon>{leading}</DialogIcon>}

        <DialogTextArea>
          <DialogTitle>{title}</DialogTitle>
          {text && <DialogText>{text}</DialogText>}
        </DialogTextArea>
      </DialogContent>

      <DialogActions $variant={actions} $divider={useDivider}>
        {children}
      </DialogActions>
    </Modal>
  )
}

export default Dialog
