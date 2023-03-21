export type UserId = string

export interface User {
  id: UserId
  organizationId?: number
  organizationName?: string
  personId?: number
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
  otherInfo?: string
  location?: string
  timezone?: string
  primaryLanguage?: string
  createdAt?: string
  updatedAt?: string
  disabledAt?: string
  onfidoVerificationNeeded?: boolean
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
  permissions: Permissions[]
}

export enum Permissions {
  READ_RECIPIENT = 'READ_RECIPIENT',
  ADD_CONVERSION_FORWARD = 'ADD_CONVERSION_FORWARD',
  EDIT_RECIPIENT = 'EDIT_RECIPIENT',
  READ_PAYMENT = 'READ_PAYMENT',
  READ_CONVERSION = 'READ_CONVERSION',
  APPROVE_RECIPIENT = 'APPROVE_RECIPIENT',
  READ_CONVERSION_FORWARD = 'READ_CONVERSION_FORWARD',
  ADD_CONVERSION = 'ADD_CONVERSION',
  EDIT_CONVERSION = 'EDIT_CONVERSION',
  EDIT_PAYMENT = 'EDIT_PAYMENT',
  ADD_PAYMENT = 'ADD_PAYMENT',
  APPROVE_PAYMENT = 'APPROVE_PAYMENT',
  ADD_RECIPIENT = 'ADD_RECIPIENT',
  EDIT_CONVERSION_FORWARD = 'EDIT_CONVERSION_FORWARD',
  INVITE_MEMBER = 'INVITE_MEMBER',
}

enum UserStatusType {
  ACTIVE = 'ACTIVE',
}

enum UserOrganizationRoleType {
  BASIC = 'BASIC',
}
