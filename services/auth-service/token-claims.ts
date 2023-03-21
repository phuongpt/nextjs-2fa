import jwt_decode from 'jwt-decode'

export interface TokenClaims {
  /** Timestamp in seconds */
  exp?: number
  /** Timestamp in milliseconds */
  elevated_exp?: number

  current_organisation_id?: number

  /**
   * @deprecated API shouldn't respond with a token unless fully authenticated
   */
  two_fa_code_request_only?: boolean
}

export const extractClaims = (token: string): TokenClaims => {
  try {
    return jwt_decode(token)
  } catch (e) {
    return {}
  }
}
