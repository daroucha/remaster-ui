import { Remaster, ActionButton } from 'remaster-lib'
import { Heart } from '@phosphor-icons/react'

function App() {
  return (
    <Remaster>
      <ActionButton
        text="Text"
        variant="primary"
        size="small"
        leading={<Heart />}
      />
    </Remaster>
  )
}

export default App
