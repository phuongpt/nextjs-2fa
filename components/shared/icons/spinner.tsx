import React from 'react'

interface IconProps {
  color?: string
}

const SpinnerIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="90"
      fill="none"
      color={props.color}
      viewBox="0 0 200 200"
    >
      <defs>
        <linearGradient id="spinner-a">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="100%" stopColor="currentColor" stopOpacity=".5" />
        </linearGradient>
        <linearGradient id="spinner-b">
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" stopOpacity=".5" />
        </linearGradient>
      </defs>
      <g strokeWidth="20">
        <path stroke="url(#spinner-a)" d="M10 100a90 90 0 01180 0" />
        <path stroke="url(#spinner-b)" d="M190 100a90 90 0 01-180 0" />
        <path stroke="currentColor" d="M10 100a90 90 0 010-2" />
      </g>
      <animateTransform
        from="0 0 0"
        to="360 0 0"
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1000ms"
      />
    </svg>
  )
}

export default SpinnerIcon
