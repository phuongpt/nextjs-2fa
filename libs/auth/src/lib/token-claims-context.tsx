import React, { createContext, useEffect, useState, useContext } from 'react'

import { getTokens, subscribeToTokens, Tokens } from './tokens'
import { parseClaims } from './token-claims'

const AuthenticationTokenClaimsContext = createContext<Tokens<unknown>>({
  accessToken: {},
  refreshToken: {},
})

interface AuthenticationTokenClaimsProviderProps {
  children: React.ReactNode
}
export const AuthenticationTokenClaimsProvider = (
  props: AuthenticationTokenClaimsProviderProps
) => {
  const [tokenClaims, setTokenClaims] = useState<Tokens<unknown>>(() => {
    const tokens = getTokens()
    const claims = parseClaims(tokens)
    return claims
  })

  useEffect(() => {
    const unsubscribe = subscribeToTokens((tokens) => {
      const claims = parseClaims(tokens)
      setTokenClaims(claims)
    })

    return unsubscribe
  }, [])

  return (
    <AuthenticationTokenClaimsContext.Provider value={tokenClaims}>
      {props.children}
    </AuthenticationTokenClaimsContext.Provider>
  )
}

export function useTokenClaims<
  AccessTokenClaims,
  RefreshTokenClaims = AccessTokenClaims
>() {
  const claims = useContext(AuthenticationTokenClaimsContext)
  return claims as {
    accessToken: Partial<AccessTokenClaims>
    refreshToken: Partial<RefreshTokenClaims>
  }
}
