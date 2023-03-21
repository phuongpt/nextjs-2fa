import { useEffect, useRef, useState } from 'react'
import {
  AuthenticationCriteria,
  AuthenticationState,
  extractClaims,
  useAuthContext,
} from '.'
import { OnCodeCallback } from './internals/use-2fa-prompt'
import { TokenClaims } from './token-claims'
import { TokenResponse } from '../../pages/api/auth/schemas'
import { useTokenClaims } from '../../libs/auth/src'
import { refresh } from '../../api/auth/methods'

export const useAuthentication = (
  criteria: AuthenticationCriteria
): AuthenticationState => {
  const { accessToken: claims } = useTokenClaims<TokenClaims>()
  const authService = useAuthContext()

  const [authenticationState, setAuthenticationState] = useState<
    AuthenticationState
  >({
    authenticating: true,
    authenticated: false,
  })
  const [requesting2faCode, setRequesting2faCode] = useState(false)

  // Check authentication when the token changes, and also when there's an
  // elevated session that expires.
  const timerId = useRef<number>()
  useEffect(() => {
    checkAuthentication()

    clearTimeout(timerId.current)

    if (claims.elevated_exp) {
      const timeUntilExpiry = claims.elevated_exp - Date.now()

      // Token may have an elevatedExp that has already passed, so only
      // schedule a check if it's in the future
      if (timeUntilExpiry) {
        timerId.current = window.setTimeout(
          checkAuthentication,
          timeUntilExpiry
        )
      }
    }

    return () => clearTimeout(timerId.current)
  }, [claims])

  const checkAuthentication = () => {
    const regularExpiryValid = claims.exp !== undefined ? claims.exp * 1000 > Date.now() : false;
    if (!regularExpiryValid) {
      setAuthenticationState({ authenticating: false, authenticated: false })
      return
    }

    const elevatedExpiryValid =
      claims.elevated_exp !== undefined
        ? claims.elevated_exp > Date.now()
        : false
    if (
      criteria.requireElevated &&
      !elevatedExpiryValid &&
      !requesting2faCode
    ) {
      const onCode: OnCodeCallback = async (code, retry, done) => {
        let response: TokenResponse
        try {
          response = await refresh({
            elevateSessionWith2faCode: code,
          })
        } catch (e) {
          retry()
          return
        }

        // There is no error if the 2FA code was wrong, so check to see if the
        // elevated_exp has already passed, to indicate failure.
        const claims = extractClaims(response.token)
        if (claims?.elevated_exp && claims.elevated_exp < Date.now()) {
          retry()
        } else {
          done()
          setRequesting2faCode(false)
        }
      }

      const onCancel = () => {
        setRequesting2faCode(false)
        setAuthenticationState({ authenticating: false, authenticated: false })
      }

      setAuthenticationState({ ...authenticationState, authenticating: true })
      setRequesting2faCode(true)
      return authService.request2faCode(onCode, onCancel)
    }

    if (requesting2faCode) {
      return
    }

    setAuthenticationState({
      authenticating: false,
      authenticated: criteria.requireElevated
        ? elevatedExpiryValid
        : regularExpiryValid,
    })
  }

  return authenticationState
}
