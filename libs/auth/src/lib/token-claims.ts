import jwtDecode from 'jwt-decode'
import {
  AccessTokenPayload,
  ParseClaims,
  RefreshTokenPayload,
  Tokens,
} from './tokens'

export const parseClaims = (tokens: Tokens<string>): ParseClaims => {
  let accessToken = {} as AccessTokenPayload
  let refreshToken = {} as RefreshTokenPayload

  try {
    accessToken = jwtDecode(tokens.accessToken)
    refreshToken = jwtDecode(tokens.refreshToken)
  } catch (e) {
    // Leave claims empty
  }

  return {
    accessToken,
    refreshToken,
  }
}
