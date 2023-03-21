import { useState } from 'react'

export const useSession = () => {
  const [sessionExpired, toggleSessionStatus] = useState(false)
  const changeSessionState = (flag: boolean) => {
    if (flag) {
      localStorage.setItem('tdbrExp', 'ok')
      toggleSessionStatus(true)
    } else {
      localStorage.removeItem('tdbrExp')
      toggleSessionStatus(false)
    }
  }

  return {
    sessionExpired,
    changeSessionState
  }
}
