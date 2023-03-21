import React, { useEffect, useRef, useState } from 'react'
import { useElevationExtender } from './use-elevation-extender'
import { TokenClaims } from '../token-claims'
import { useAuthentication } from '../use-authentication'
import { useTokenClaims } from '../../../libs/auth/src'

const NullComponent = () => null

// TODO: Remove this and use proper component instead
interface PromptComponentProps {
  expiry: Date
  onClick: () => void
}
const PromptComponent = (props: PromptComponentProps) => {
  const { expiry, onClick } = props

  const [timeRemaining, setTimeRemaining] = useState<number>()

  const timerId = useRef<number>()
  useEffect(() => {
    clearInterval(timerId.current)

    setTimeRemaining(Math.ceil((expiry.getTime() - Date.now()) / 1000))

    timerId.current = window.setInterval(() => {
      setTimeRemaining(Math.ceil((expiry.getTime() - Date.now()) / 1000))
    }, 1000)

    return () => clearInterval(timerId.current)
  }, [expiry])

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        background: 'white',
        border: '2px solid black',
        margin: 20,
        padding: 20,
        zIndex: 1,
      }}
    >
      <p>De-elevating soon</p>
      <p>{timeRemaining}</p>
      <button onClick={onClick}>Extend session</button>
    </div>
  )
}

export const useStayElevatedPrompt = (): {
  Component: React.ComponentType
  restrictedSectionUsed: () => void
} => {
  const { authenticated } = useAuthentication({ requireElevated: false })
  const { accessToken: claims } = useTokenClaims<TokenClaims>()
  const { extendElevatedSession } = useElevationExtender()

  const [restrictedSectionUsed, setRestrictedSectionUsed] = useState(false)
  const stayElevatedPromptOpenTimer = useRef<number>()
  const stayElevatedPromptCloseTimer = useRef<number>()
  const stayElevatedPromptBuffer = 1000 * 60 * 2 // 2 minutes
  const [
    isShowingElevationExpiryPrompt,
    setIsShowingElevationExpiryPrompt,
  ] = useState(false)
  const [expiry, setExpiry] = useState<Date>(new Date());

  useEffect(() => {
    clearTimeout(stayElevatedPromptOpenTimer.current)
    clearTimeout(stayElevatedPromptCloseTimer.current)

    if (!authenticated) {
      return
    }

    if (!claims.elevated_exp) {
      return
    }

    setExpiry(new Date(claims.elevated_exp))

    const timeUntilElevationExpiry =
      new Date(claims.elevated_exp).getTime() - Date.now()

    const timeUntilShowStayElevated =
      timeUntilElevationExpiry - stayElevatedPromptBuffer

    // The session may have been extended while the prompt is visible, so it
    // should now be closed
    if (timeUntilShowStayElevated) {
      setIsShowingElevationExpiryPrompt(false)
    }

    stayElevatedPromptOpenTimer.current = window.setTimeout(() => {
      if (!restrictedSectionUsed) {
        return
      }

      setIsShowingElevationExpiryPrompt(true)
    }, timeUntilShowStayElevated)

    stayElevatedPromptCloseTimer.current = window.setTimeout(() => {
      setIsShowingElevationExpiryPrompt(false)
      setRestrictedSectionUsed(false)
    }, timeUntilElevationExpiry)

    return () => {
      clearTimeout(stayElevatedPromptOpenTimer.current)
      clearTimeout(stayElevatedPromptCloseTimer.current)
    }
  }, [authenticated, claims, restrictedSectionUsed])

  return {
    Component: isShowingElevationExpiryPrompt
      ? () => (
        <PromptComponent expiry={expiry} onClick={extendElevatedSession} />
      )
      : NullComponent,
    restrictedSectionUsed: () => setRestrictedSectionUsed(true),
  }
}
