import { useEffect, useState } from 'react'

function getSecondsUntil(date: Date) {
  const ms = date.getTime() - Date.now()
  const seconds = Math.ceil(ms / 1000)
  return Math.max(seconds, 0)
}

export const useCountdown = (endDate: Date) => {
  const [secondsRemaining, setSecondsRemaining] = useState<number>()
  useEffect(() => {
    if (!endDate) {
      return
    }

    const seconds = getSecondsUntil(endDate)
    setSecondsRemaining(seconds)
  }, [endDate])

  useEffect(() => {
    if (!endDate || secondsRemaining === 0) {
      return
    }

    const timeoutId = setTimeout(() => {
      const seconds = getSecondsUntil(endDate)
      setSecondsRemaining(seconds)
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [endDate, secondsRemaining])

  return {
    secondsRemaining,
  }
}
