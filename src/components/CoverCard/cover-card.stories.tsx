import CoverCard from './cover-card'
import { Clock } from '@phosphor-icons/react'

export default {
  title: '📊 Data Presentation/CoverCard',
  component: CoverCard,
}

export const Default = {
  args: {
    alt: 'Aliens',
    children: <Clock />,
    size: 200,
    src: 'https://lh3.googleusercontent.com/proxy/ATl8araCru4hoI51qpNBxSYPxFKgMJCSVcS3NJPmlqIej71xCIYa1aQl9dr7nw92jZvQrfH-TERRyH24wIZXKSfLRy3cpHSOEijoTbg6Rq4',
    state: false,
    text: '2017',
    title: 'Alien: Covenant',
    type: 'dvd',
    onClick: () => console.log('clicked'),
  },
}
