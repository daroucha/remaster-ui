import IconButton from '../IconButton'
import DetailCard from './detail-card'
import { Disc, Trash } from '@phosphor-icons/react'

export default {
  title: '📊 Data Presentation/DetailCard',
  component: DetailCard,
}

export const Default = {
  args: {
    title: 'Title',
    text: 'This is a Detail Card',
    leading: <Disc />,
    action: <IconButton leading={<Trash />} size="small" />,
  },
}
