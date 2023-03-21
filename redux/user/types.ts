import { AuthUser, User, UserId } from '../../types'

export interface UserState {
  current: User | null
  auth: AuthUser | null
  all: Record<UserId, User>
  accountId: null | string
}

export const SET_CURRENT_USER = 'USER:SET_CURRENT_USER'
export const SET_CURRENT_AUTH = 'USER:SET_CURRENT_AUTH'
export const SET_ALL_USERS = 'USER:SET_ALL_USERS'
export const UNSET_CURRENT_USER = 'USER:UNSET_CURRENT_USER'
export const UNSET_CURRENT_AUTH = 'USER:UNSET_CURRENT_AUTH'
export const USER_SET_ACCOUNT_ID = 'USER:SET_ACCOUNT_ID'

export interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER
  payload: User
}

export interface SetCurrentAuthAction {
  type: typeof SET_CURRENT_AUTH
  payload: AuthUser
}

export interface SetAllUsersAction {
  type: typeof SET_ALL_USERS
  payload: Array<User>
}

export interface UnsetCurrentUser {
  type: typeof UNSET_CURRENT_USER
  payload: null
}

export interface UnsetCurrentAuth {
  type: typeof UNSET_CURRENT_AUTH
  payload: null
}

export interface UserSetAccountIdAction {
  type: typeof USER_SET_ACCOUNT_ID
  payload: null | string
}

export type UserActionTypes =
  | SetCurrentUserAction
  | SetCurrentAuthAction
  | SetAllUsersAction
  | UnsetCurrentUser
  | UnsetCurrentAuth
  | UserSetAccountIdAction
