import React from 'react'
import { Theme } from '../../../libs/shared/styles/src'

const InfoCircleIcon = (props: { color?: string }) => {
  const { color } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke={color ? color : Theme.palette.blue.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.143"
        d="M7.999 15.428a7.429 7.429 0 100-14.857 7.429 7.429 0 000 14.857zM8 8v4"
      />
      <path
        stroke={color ? color : Theme.palette.blue.primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.143"
        d="M7.997 5.714a.571.571 0 100-1.143.571.571 0 000 1.143z"
      />
    </svg>
  )
}

export default InfoCircleIcon
