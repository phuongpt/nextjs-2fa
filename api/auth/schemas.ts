export interface CreateUserRequest {
  email: string
  firstName: string
  lastName: string
  password: string
  mobileNumber: string
  language: string
}

// TODO: Validate based on requirements from swagger docs
// export const validateCreateUserRequest () => {}

export interface TokenResponse {
  refreshToken: string
  token: string
  sessionId: string
  validUntil: string
  refreshTokenValidUntil: string
}

export interface LoginUserRequest {
  email: string
  password: string
}

export interface Login2faUserRequest {
  email: string
  password: string
  code: string
}

export interface ResetPasswordRequest {
  email: string
}

export interface CreateNewPasswordRequest {
  token: string
  password: string
}

export interface GetUserResponse {
  id: number
  email: string
  firstName: string
  lastName: string
  title: string
  organizationId?: number
  mobileNumber?: string
  dialCode?: string
  avatar?: string
}

export interface GetUserListResponse {
  users: Array<GetUserResponse>
}

export interface GetAutologinIdResponse {
  signup: {
    id: string
    countryCode: string
    email: string
    dialCode: string
    phone: string
    password: string
    type: string // company type
    emailVerified: boolean
    phoneVerified: boolean
    memberAdded: boolean
    authCreated: boolean
    status: string // signup status
    createdAt: string
    updatedAt: string
    autoLoginId: string
  }
  inputData: {
    person: {
      firstName: string
      lastName: string
      birthDate: string
      title: string | null
    }
    organization: {
      id: null | string
      fullLegalName: string
      countryId: number
      organizationLegalStructureId: number
      companyNumber: string
      addressLine1: string
      addressLine2: null | string
      city: string
      countryStateId: null | string
      zipCode: string
      subCategoryId: number
      website: number | string
    }
  }
}

export interface MakeAutologinResponse {
  userId: number
  memberId: number
  memberName: string
  location: string
  timezone: string
  primaryLanguage: string
  refreshToken: string
  token: string
  sessionId: string
  organisationId: number
  elevatedSessionExpiryTime: string
  admin: boolean
  email: string
  roles: string[]
  permissions: string[]
}

export enum TwoFactorStatus {
  SUCCESS = 'success',
  UNAUTHORIZED = 'unauthorized',
  UNKNOWN = 'unknown',
}

export interface TwoFactorProcessingStatus {
  finished: boolean
  error: boolean
  type?: null | TwoFactorStatus
}
