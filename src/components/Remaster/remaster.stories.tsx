import ActionButton from '../ActionButton'
import Remaster from './remaster'

export default {
  title: 'Remaster',
  component: Remaster,
}

export const Default = {
  args: {},
  render: () => {
    return (
      <Remaster>
        <ActionButton
          variant="primary"
          text="Action Button"
          size="small"
        />
      </Remaster>
    )
  },
}
