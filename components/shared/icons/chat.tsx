import React from 'react'

const ChatIcon = (props: { strokeColor?: string }) => {
  const { strokeColor } = props

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.52136 11.3453V6.16812C1.52136 5.14753 2.2783 4.3125 3.22234 4.3125H12.0079C12.9434 4.3125 13.7089 5.13825 13.7089 6.16812V11.3453C13.7089 12.3659 12.9519 13.2009 12.0079 13.2009H8.5549C8.44434 13.2009 8.34228 13.2473 8.26574 13.3216L5.2465 16.3741C4.97435 16.6524 4.53209 16.439 4.5406 16.0308L4.57462 13.6741C4.57462 13.4143 4.38751 13.2009 4.14937 13.2009H3.22234C2.2783 13.1917 1.52136 12.3659 1.52136 11.3453Z"
        stroke={`${strokeColor ? strokeColor : '#777777'}`}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.27136 2.3207C5.55301 1.82275 6.04389 1.5 6.6072 1.5H14.9119C15.7971 1.5 16.5214 2.32992 16.5214 3.34426V8.48053C16.5214 9.0707 16.2799 9.59631 15.9017 9.9375"
        stroke={`${strokeColor ? strokeColor : '#777777'}`}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChatIcon
