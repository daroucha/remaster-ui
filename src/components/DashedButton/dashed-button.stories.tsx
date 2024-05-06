import { ArrowRight, Download } from '@phosphor-icons/react'
import DashedButton from './dashed-button'

export default {
  title: '🖲️ Buttons/DashedButton',
  component: DashedButton,
}

export const Default = {
  args: {
    disabled: false,
    leading: <Download />,
    text: 'Dashed Button',
    trailing: <ArrowRight />,
  },
}
