const useInitials = (value: string) => {
  const regex = new RegExp(/(\p{L}{1})\p{L}+/, 'gu')

  let regexMatch = [...value.matchAll(regex)] || []
  let initials = (
    (regexMatch.shift()?.[1] || '') + (regexMatch.pop()?.[1] || '')
  ).toUpperCase()

  return initials
}

export default useInitials
