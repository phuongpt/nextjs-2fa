import * as React from 'react'

import { StyledPopover } from './popover.styles'

export interface PopoverProps {
  target: HTMLElement
  open: boolean
  onClose: () => void
  children: React.ReactNode
  positionY?: 'center' | 'top' | 'bottom'
  positionX?: 'center' | 'left' | 'right'
}

export default function SimplePopover(props: PopoverProps) {
  const { target, open, onClose, children, positionY, positionX, ...rest } =
    props

  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <StyledPopover
        id={id}
        open={open}
        anchorEl={target}
        onClose={onClose}
        anchorOrigin={{
          vertical: positionY ? positionY : 'top',
          horizontal: positionX ? positionX : 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        {...rest}
      >
        {children}
      </StyledPopover>
    </div>
  )
}
