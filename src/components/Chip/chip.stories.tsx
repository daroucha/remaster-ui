import Chip from './chip'
import { ArchiveBox } from '@phosphor-icons/react'

export default {
  title: '🎛️ General/Chip',
  component: Chip,
}

export const Default = {
  args: {
    closable: false,
    leading: <ArchiveBox />,
    size: 'small',
    text: 'Chip',
  },
}
