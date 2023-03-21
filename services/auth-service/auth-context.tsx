import React, { createContext, useContext } from 'react'
import { useElevationExtender } from './internals/use-elevation-extender'
import { useStayElevatedPrompt } from './internals/use-stay-elevated-prompt'
import { Request2faCode, use2faPrompt } from './internals/use-2fa-prompt'
import { useCurrentUser } from '../../hooks'

interface AuthContextValue {
  request2faCode: Request2faCode
  restrictedActionPerformed: () => void
}

const AuthContext = createContext<AuthContextValue>(null as unknown as AuthContextValue);

export const useAuthContext = () => useContext(AuthContext)

interface AuthContextProviderProps {
  children: React.ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  useCurrentUser()
  const { extendElevatedSession } = useElevationExtender()

  const { Component: TwoFactorAuthenticationPrompt, request2faCode } =
    use2faPrompt()
  const { Component: StayElevatedPrompt, restrictedSectionUsed } =
    useStayElevatedPrompt()

  return (
    <AuthContext.Provider
      value={{
        request2faCode,
        restrictedActionPerformed: () => {
          restrictedSectionUsed()
          extendElevatedSession()
        },
      }}
    >
      <TwoFactorAuthenticationPrompt />
      <StayElevatedPrompt />

      {children}
    </AuthContext.Provider>
  )
}
