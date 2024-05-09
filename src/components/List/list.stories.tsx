import { Bluray } from '@/icons'
import List from './list'
import Checkbox from '../Checkbox'
import { Cover } from '../CoverCard'
import { ArrowRight } from '@phosphor-icons/react'

export default {
  title: '📊 Data Presentation/List',
  component: List,
}

export const Default = {
  args: {
    leading: <Bluray />,
    title: 'List title',
    text: 'List text goes here',
    children: <Checkbox />,
  },
}

export const CoverList = {
  args: {
    leading: <Cover type="bd" />,
    title: 'List title',
    text: 'List text goes here',
    children: <ArrowRight />,
  },
}
