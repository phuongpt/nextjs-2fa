import React from 'react'

interface DoubleCheckSharpIconProps {
  className?: string
  fill?: string
}

const DoubleCheckSharpIcon = (props: DoubleCheckSharpIconProps) => {
  const { className, fill } = props

  return (
    <svg
      className={className ? className : ''}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9L6 14L13 5"
        stroke={fill ? fill : '#20242C'}
        strokeWidth="2"
      />
      <path
        d="M9.5 12.5L11 14L18 5"
        stroke={fill ? fill : '#20242C'}
        strokeWidth="2"
      />
    </svg>
  )
}

export default DoubleCheckSharpIcon
