import { useState } from 'react'
import ActionButton from '../ActionButton'
import Dialog from './dialog'
import { Warning } from '@phosphor-icons/react'

export default {
  title: '🚨 Feedback/Dialog',
  component: Dialog,
  render: ({ ...args }) => {
    const [visibility, setVisibility] = useState(false)

    return (
      <>
        <ActionButton
          size="small"
          variant="primary"
          text="Open Dialog"
          onClick={() => setVisibility(true)}
        />

        <Dialog
          {...args}
          visibility={visibility}
          onDismiss={() => setVisibility(false)}
        >
          <ActionButton
            size="small"
            variant="tertiary"
            text="Cancel"
            onClick={() => setVisibility(false)}
          />

          <ActionButton size="small" variant="primary" text="Main" />
        </Dialog>
      </>
    )
  },
}

export const Default = {
  args: {
    actions: 'stretch',
    useDivider: true,
    title: 'Dialog title',
    text: 'Dialog text goes here',
    leading: <Warning />,
  },
}
