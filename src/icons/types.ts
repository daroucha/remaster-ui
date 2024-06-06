export type IconWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'bold'
  | 'fill'
  | 'duotone'

export interface PropsIcon
  extends React.ComponentPropsWithRef<'svg'> {
  alt?: string
  color?: string
  size?: string | number
  weight?: IconWeight
  mirrored?: boolean
}

export type Icon = React.ForwardRefExoticComponent<PropsIcon>
