import { useRef, useEffect } from 'react'
import { useTokenClaims } from './token-claims-context'
import { JwtPayload } from 'jwt-decode'

interface SessionManagerProps {
  onRefreshRequested: () => void
  onSessionExpiry?: () => void
}
export const SessionManager = (props: SessionManagerProps) => {
  const { onRefreshRequested, onSessionExpiry } = props

  const { accessToken: accessTokenClaims, refreshToken: refreshTokenClaims } =
    useTokenClaims<JwtPayload>()

  const accessTokenRefreshTimer = useRef<number | undefined>(undefined)
  const refreshTokenExpiryTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    clearTimeout(accessTokenRefreshTimer.current)
    clearTimeout(refreshTokenExpiryTimer.current)

    if (
      typeof accessTokenClaims.exp !== 'number' ||
      typeof refreshTokenClaims.exp !== 'number'
    ) {
      return
    }

    const timeUntilAccessTokenExpiry =
      new Date(accessTokenClaims.exp * 1000).getTime() - Date.now()

    const timeUntilRefreshTokenExpiry =
      new Date(refreshTokenClaims.exp * 1000).getTime() - Date.now()

    const accessTokenRefreshBuffer = randomInt(10, 60, 3) * 1000

    accessTokenRefreshTimer.current = window.setTimeout(
      () => onRefreshRequested(),
      timeUntilAccessTokenExpiry - accessTokenRefreshBuffer
    )

    if (typeof onSessionExpiry === 'function') {
      refreshTokenExpiryTimer.current = window.setTimeout(
        () => onSessionExpiry(),
        timeUntilRefreshTokenExpiry
      )
    }
  }, [
    accessTokenClaims,
    refreshTokenClaims,
    onRefreshRequested,
    onSessionExpiry,
  ])

  return null
}

/**
 * @param min Inclusive minimum value
 * @param max Inclusive maximum value
 * @param step
 */
function randomInt(min: number, max: number, step = 1) {
  const delta = max - min + 1 // +1 as Math.random returns x where 0 <= x < 1
  const range = delta / step

  return Math.floor(Math.random() * range) * step + min
}
