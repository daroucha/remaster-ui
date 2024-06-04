import { ArrowBendDownRight, ArrowsDownUp } from '@phosphor-icons/react'
import Dropdown from '../Dropdown'
import IconButton from '../IconButton'
import InlineStepper from '../InlineStepper'
import ButtonGroup, { PropsButtonGroup } from './button-group'

export default {
  title: '🖲️ Buttons/ButtonGroup',
  component: ButtonGroup,
}

export const Primary = {
  args: {
    variant: 'primary',
    children: [
      <Dropdown>
        <Dropdown.Button text="Options" />

        <Dropdown.Menu>
          <Dropdown.Item title="Option" />
        </Dropdown.Menu>
      </Dropdown>,
      <InlineStepper total={10} />,
      <IconButton size="small" leading={<ArrowBendDownRight />} text="Icon" />,
    ],
  } as PropsButtonGroup,
}

export const Secondary = {
  args: {
    variant: 'secondary',
    children: [
      <Dropdown>
        <Dropdown.Button text="Options" />

        <Dropdown.Menu>
          <Dropdown.Item title="Option" />
        </Dropdown.Menu>
      </Dropdown>,
      <InlineStepper total={10} />,
      <IconButton size="small" leading={<ArrowsDownUp />} />,
    ],
  } as PropsButtonGroup,
}
