import { Sun } from '@phosphor-icons/react'
import ActionButton from '../ActionButton'
import Remaster from './remaster'
import IconButton from '../IconButton'

export default {
  title: 'Remaster',
  component: Remaster,
}

export const Default = {
  args: {
    children: (
      <ul>
        <li>
          <IconButton
            size="small"
            leading={<Sun />}
            text="Toggle theme"
          />
        </li>

        <li></li>

        <li>
          <ActionButton
            variant="primary"
            text="Action Button"
            size="small"
          />
        </li>
      </ul>
    ),
  },
}
