import React from 'react'

interface InfoBlackProps {
  fill?: string
}

const InfoBlack = ({ fill }: InfoBlackProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      fill="none"
      viewBox="0 0 18 19"
    >
      <circle cx="9" cy="9.5" r="9" fill={fill ? fill : '#20242C'} />
      <path stroke="#fff" strokeWidth="2" d="M9 14.9V7.7m0-2.25V3.2" />
    </svg>
  )
}

export default InfoBlack
