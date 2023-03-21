import { BASE_API_URL } from '../../constants'
import { getTokens, setTokens } from '../../libs/auth/src'
import { callApi } from '../call-api'
import {
  CreateUserRequest,
  LoginUserRequest,
  Login2faUserRequest,
  TokenResponse,
  GetUserResponse,
  GetUserListResponse,
  ResetPasswordRequest,
  CreateNewPasswordRequest,
  GetAutologinIdResponse,
  MakeAutologinResponse,
} from './schemas'

export async function register(body: CreateUserRequest) {
  return await callApi('/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

export async function logIn(body: LoginUserRequest) {
  const response = await callApi<TokenResponse>('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  return response
}

export async function logIn2fa(body: Login2faUserRequest) {
  const response = await callApi<TokenResponse>('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-2FA': body.code,
    },
    body: JSON.stringify({
      email: body.email,
      password: body.password,
    }),
  })

  setTokens({
    accessToken: response.token,
    refreshToken: response.refreshToken,
  })

  return response
}

export async function logOut() {
  const { refreshToken } = getTokens()
  if (!refreshToken) {
    return null
  }

  const response = await callApi<TokenResponse>('/auth/logout', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  })

  setTokens(null)

  return response
}

export async function resetPassword(body: ResetPasswordRequest) {
  const response = await callApi('/auth/password-reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  return response
}

export async function createNewPassword(body: CreateNewPasswordRequest) {
  const response = await callApi('/auth/password-reset', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  return response
}

export async function send2faCode(customAccessToken: string | null = null) {
  let token = customAccessToken
  if (!token) {
    const { accessToken } = getTokens()
    token = `Bearer ${accessToken}`
  }

  return await callApi<TokenResponse>('/auth/send-code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      twoFactorType: 'EMAIL', // or 'SMS'
    }),
  })
}

export interface RefreshConfig {
  extendElevatedSession?: boolean
  elevateSessionWith2faCode?: string
}
export async function refresh(config: RefreshConfig = {}) {
  const { accessToken, refreshToken } = getTokens()

  let headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  }
  let body: Record<string, any> = { refreshToken }

  if (config.elevateSessionWith2faCode) {
    headers = {
      ...headers,
      'X-2FA': config.elevateSessionWith2faCode,
    }
  } else if (config.extendElevatedSession) {
    body = {
      ...body,
      extendElevatedSession: true,
    }
  }

  const payload = await callApi<TokenResponse>('/auth/refresh', {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })

  setTokens({
    accessToken: payload.token,
    refreshToken: payload.refreshToken,
  })

  return payload
}

export async function getUser() {
  const tokens = getTokens()
  return await callApi<GetUserResponse>('/auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokens.accessToken}`,
    },
  })
}

export async function getUsers() {
  const tokens = getTokens()
  return await callApi<GetUserListResponse>('/auth/user/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokens.accessToken}`,
    },
  })
}

export const getAutologinData = async (
  signupId: string
): Promise<GetAutologinIdResponse> => {
  return await callApi<GetAutologinIdResponse>(
    `/signup/trade-channels/${signupId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).catch((err) => err?.message ?? err?.error)
}

export const makeAutoLogin = async (
  autoLoginId: string
): Promise<MakeAutologinResponse> => {
  return await callApi<MakeAutologinResponse>(`/auth/auto-login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      autoLoginId,
    }),
  }).catch((err) => err?.message ?? err?.error)
}
