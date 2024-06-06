import { IconWeight, PropsIcon } from '../types'

interface PropsIconBase extends PropsIcon {
  weights: Map<IconWeight, React.ReactElement>
}

function IconBase({
  alt,
  color = 'currentColor',
  size = '1em',
  weight = 'regular',
  mirrored = false,
  children,
  weights,
  ...restProps
}: PropsIconBase) {
  return (
    <svg
      fill={color}
      height={size}
      transform={mirrored ? 'scale(-1, 1)' : undefined}
      viewBox="0 0 256 256"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      {children}
      {weights.get(weight)}
    </svg>
  )
}

export default IconBase
