import React, { useEffect, useRef } from 'react'
import {
  StyledMenuItem,
  StyledList,
  Wrapper,
  Timer,
  Link,
} from './security-code-menu.styles'

const menuOptions = [
  {
    id: 3,
    title: 'Contact support',
    url: 'support@support.com',
    type: 'mail',
  },
]

export interface SecurityCodeMenuProps {
  onRequestNewCode: () => void
  setMenuClosed: (selectedOption?) => void
  requestCodeDelay
}

function useOutsideAlerter(ref, closeCb) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        closeCb()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

const SecurityCodeMenu = ({
  setMenuClosed,
  onRequestNewCode,
  requestCodeDelay,
}: SecurityCodeMenuProps) => {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, setMenuClosed)

  const handleClose = (selectedOption?) => {
    setMenuClosed(selectedOption)

    if (selectedOption) console.log('Navigate to', selectedOption.url)
  }

  const sendCodeAndClose = () => {
    onRequestNewCode()
    setMenuClosed(null)
  }

  return (
    <Wrapper ref={wrapperRef}>
      <StyledList className={requestCodeDelay > 0 ? 'full' : ''}>
        <StyledMenuItem disabled={requestCodeDelay > 0}>
          <Link href="#" onClick={sendCodeAndClose}>
            {`Get new code${requestCodeDelay ? ` (available in ` : ''}`}
            {requestCodeDelay ? (
              <Timer requestCodeDelay={requestCodeDelay}>
                {requestCodeDelay}
              </Timer>
            ) : null}
            {requestCodeDelay ? ` sec)` : ''}
          </Link>
        </StyledMenuItem>
        {menuOptions.map((option) => (
          <StyledMenuItem key={option.id} onClick={() => handleClose(option)}>
            {option.type === 'mail' ? (
              <a href={`mailto:${option.url}`}>{option.title}</a>
            ) : (
              <span>{option.title}</span>
            )}
          </StyledMenuItem>
        ))}
      </StyledList>
    </Wrapper>
  )
}

export default SecurityCodeMenu
