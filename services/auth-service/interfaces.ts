export interface AuthenticationCriteria {
  requireElevated: boolean
}

export interface AuthenticationState {
  authenticating: boolean
  authenticated: boolean
}
