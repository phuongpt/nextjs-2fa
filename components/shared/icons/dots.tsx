import React from 'react'

interface DotsIconProps {
  color?: string
}

const DotsIcon = ({ color }: DotsIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="4"
      fill="none"
      viewBox="0 0 16 4"
    >
      <path
        fill={color ? color : '#fff'}
        d="M2.375 3.688a1.687 1.687 0 110-3.375 1.687 1.687 0 010 3.374zm5.625 0A1.687 1.687 0 118 .313a1.687 1.687 0 010 3.374zm5.625 0a1.687 1.687 0 110-3.375 1.687 1.687 0 010 3.374z"
      />
    </svg>
  )
}

export default DotsIcon
