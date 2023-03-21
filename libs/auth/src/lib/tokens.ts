export interface Tokens<T> {
  accessToken: T
  refreshToken: T
}

export interface ParseClaims {
  accessToken: AccessTokenPayload
  refreshToken: RefreshTokenPayload
}

/* eslint-disable camelcase */
export interface AccessTokenPayload {
  current_organisation_id: number
  permissions?: string
  session_id?: string
  roles?: string
  two_fa_code_request_only?: boolean
  member_id?: string
  backoffice_user?: boolean
  user_id?: number
  elevated_exp?: number
  jti?: string
  iss?: string
  sub?: string
  iat?: number
  exp: number
}

export interface RefreshTokenPayload {
  refresh_token?: boolean
  user_id?: number
  session_id?: string
  jti?: string
  iss?: string
  sub?: string
  iat?: number
  exp: number
}
/* eslint-enable camelcase */

const TOKENS_KEY = 'tokens'
const TOKENS_CHANGE_EVENT = 'tokenChange'
const CHANGE_STORAGE_EVENT = 'storage'

export function setTokens(tokens: Tokens<string> | null) {
  if (tokens) {
    sessionStorage.setItem(TOKENS_KEY, JSON.stringify(tokens))
  } else {
    sessionStorage.removeItem(TOKENS_KEY)
  }
  window.dispatchEvent(new Event(TOKENS_CHANGE_EVENT))
  window.dispatchEvent(new Event(CHANGE_STORAGE_EVENT))
}

export function parseAsTokens(storageValue: string | null): Tokens<string> {
  if (!storageValue) {
    return {
      accessToken: '',
      refreshToken: '',
    }
  }

  return JSON.parse(storageValue)
}

export function getTokens(): Tokens<string> {
  if (typeof window !== 'undefined') {
    return parseAsTokens(window.sessionStorage.getItem(TOKENS_KEY))
  }
  return { accessToken: '', refreshToken: '' };
}

export function subscribeToTokens(callback: (tokens: Tokens<string>) => void) {
  // Listen for two events:
  //   1. `storage`, which fires when a storage change occurs from a duplicated tab
  //   2. TOKENS_CHANGE_EVENT, which fires when setTokens() is used
  // Together, these cover token changes that happen on the current tab and
  // those from other tabs.

  const onStorageEvent = (e: StorageEvent) => {
    if (e.key === TOKENS_KEY) {
      callback(parseAsTokens(e.newValue))
    }
  }

  const onTokensChangeEvent = () => {
    callback(getTokens())
  }

  window.addEventListener('storage', onStorageEvent)
  window.addEventListener(TOKENS_CHANGE_EVENT, onTokensChangeEvent)

  return () => {
    window.removeEventListener('storage', onStorageEvent)
    window.removeEventListener(TOKENS_CHANGE_EVENT, onTokensChangeEvent)
  }
}
