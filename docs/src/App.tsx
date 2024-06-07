import { ActionButton } from 'remaster-lib'
import { Heart } from '@phosphor-icons/react'

function App() {
  return (
    <>
      <ActionButton
        text="Text"
        variant="primary"
        size="small"
        leading={<Heart />}
      />
    </>
  )
}

export default App
