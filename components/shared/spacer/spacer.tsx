import React from 'react'

interface SpacerProps {
  size: number
  axis: string
  inline?: boolean
  style?: object
}

export const Spacer = ({
  size,
  axis,
  inline = false,
  style = {},
  ...delegated
}: SpacerProps) => {
  const width = axis === 'y' ? 1 : size
  const height = axis === 'x' ? 1 : size
  return (
    <span
      style={{
        display: inline ? 'inline-block' : 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
      {...delegated}
    />
  )
}

export default Spacer
