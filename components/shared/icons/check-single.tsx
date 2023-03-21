import React from 'react'

const CheckSingleIcon = (props: { color?: string }) => {
  const { color } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="11"
      fill="none"
      viewBox="0 0 10 11"
    >
      <path
        fill={color ? color : '#B5B5B56'}
        d="M3.859 10.5c.33 0 .583-.139.76-.416l5.198-8.256a1.26 1.26 0 00.139-.285A.882.882 0 0010 1.27a.75.75 0 00-.217-.553A.752.752 0 009.228.5a.722.722 0 00-.388.097.945.945 0 00-.3.32l-4.703 7.65-2.41-3.135c-.174-.225-.389-.337-.644-.337A.76.76 0 000 5.882a.89.89 0 00.05.296c.037.095.096.192.178.291l2.876 3.638c.207.262.459.393.755.393z"
      />
    </svg>
  )
}

export default CheckSingleIcon
