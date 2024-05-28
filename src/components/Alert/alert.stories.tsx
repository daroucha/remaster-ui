import { Warning } from '@phosphor-icons/react'
import Alert from './alert'

export default {
  title: '🚨 Feedback/Alert',
  component: Alert,
}

export const Default = {
  args: {
    title: 'Alert',
    text: 'Text goes here',
    leading: <Warning />,
    closable: true,
    onClose: () => console.log('close'),
    timer: 4, // seconds,
    onTimeout: () => console.log('timeout'),
  },
}
