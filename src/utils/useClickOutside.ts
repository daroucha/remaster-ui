import { useEffect } from 'react'

type ParamsClickOutside = (
  ref: React.RefObject<HTMLElement>,
  onClickOutside: () => void,
) => void

const useClickOutside: ParamsClickOutside = (ref, onClickOutside) => {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside()
      }
    }
    // Bind
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // dispose
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, onClickOutside])
}

export default useClickOutside
