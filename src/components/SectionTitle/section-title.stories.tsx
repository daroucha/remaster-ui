import { CodaLogo } from '@phosphor-icons/react'
import SectionTitle from './section-title'

export default {
  title: '📐 Layout/SectionTitle',
  component: SectionTitle,
}

export const Default = {
  args: {
    children: <CodaLogo />,
    text: 'Section Title',
  },
}
