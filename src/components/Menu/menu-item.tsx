import { isValidElement } from 'react'
import {
  MIContent,
  MIDivider,
  MIIcon,
  MILine,
  MIMainArea,
  MIText,
  MITitle,
  MITrailing,
  StyledMenuItem,
} from './styled-menu'

interface PropsMenuItem {
  disabled?: boolean
  divider?: boolean
  leading?: React.ReactNode
  title: string
  text?: string
  trailing?: React.ReactNode | string
}

function MenuItem({
  disabled,
  divider,
  leading,
  title,
  text,
  trailing,
}: PropsMenuItem) {
  return (
    <StyledMenuItem>
      <MIContent as="div" $disabled={disabled}>
        <MILine>
          <MIMainArea>
            {leading && <MIIcon>{leading}</MIIcon>}

            <MITitle>{title}</MITitle>
          </MIMainArea>

          {trailing && (
            <MITrailing>
              {isValidElement(trailing) ? (
                <MIIcon>{trailing}</MIIcon>
              ) : (
                <MIText>{trailing}</MIText>
              )}
            </MITrailing>
          )}
        </MILine>

        {text && <MIText>{text}</MIText>}
      </MIContent>

      {divider && (
        <MIDivider>
          <hr />
        </MIDivider>
      )}
    </StyledMenuItem>
  )
}

export default MenuItem
