import React from 'react'

type Props = {
  color?: string
}

const SearchIcon = ({ color = 'black' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <circle
        cx="5.875"
        cy="5.875"
        r="4.875"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 13l-3-3"
      />
    </svg>
  )
}

export default SearchIcon
