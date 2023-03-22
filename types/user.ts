export type UserId = string

export interface User {
  id: UserId
  organizationId?: number
  organizationName?: string
  title: string
  firstName: string
  lastName: string
  birthDate?: string
  email?: string
  dialCode?: string
  mobileNumber?: string
  avatar?: string
  displayName: string
  status?: UserStatusType
  organizationRole?: UserOrganizationRoleType
  location?: string
  timezone?: string
  primaryLanguage?: string
  createdAt?: string
  updatedAt?: string
  disabledAt?: string
}

export interface AuthUser {
  userId: UserId
  memberId: UserId
  memberName: string
  location: string | null
  timezone: string | null
  primaryLanguage: string | null
  refreshToken: string
  token: string
  organisationId: number
  organisationIds: number[]
  admin: boolean
  email: string
  roles: string[]
}

enum UserStatusType {
  ACTIVE = 'ACTIVE',
}

enum UserOrganizationRoleType {
  BASIC = 'BASIC',
}
