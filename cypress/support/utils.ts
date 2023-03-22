import * as jose from 'jose'

export const generateAccessToken = async () => {
  const date = new Date(Date.now() + 100000000).getTime()

  return new jose.SignJWT({
    two_fa_code_request_only: false,
    member_id: 1,
    backoffice_user: false,
    user_id: 1,
    elevated_exp: date,
    current_organisation_id: 1,
    permissions: '',
    session_id: '',
    roles: '',
    jti: '7',
    iss: 'APP',
    sub: '1',
    iat: Math.ceil(date / 1000),
    exp: Math.ceil(date / 1000),
  })
    .setProtectedHeader({ alg: 'HS256' })
    .sign(new TextEncoder().encode('secret'))
}

export const generateRefreshToken = async () => {
  const date = new Date(Date.now() + 100000000).getTime()

  return new jose.SignJWT({
    session_id: '',
    refresh_token: true,
    user_id: 1,
    jti: '',
    iss: 'APP',
    sub: '3486',
    iat: Math.ceil(date / 1000),
    exp: Math.ceil(date / 1000),
  })
    .setProtectedHeader({ alg: 'HS256' })
    .sign(new TextEncoder().encode('secret'))
}
