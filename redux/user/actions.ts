import { AuthUser, User } from '../../types'
import {
  SET_ALL_USERS,
  SET_CURRENT_AUTH,
  SET_CURRENT_USER,
  UNSET_CURRENT_AUTH,
  UNSET_CURRENT_USER,
  USER_SET_ACCOUNT_ID,
} from './types'

export const setCurrentUser = (user: User | null) => ({
  type: SET_CURRENT_USER,
  payload: user,
})

export const setCurrentAuth = (user: AuthUser | null) => ({
  type: SET_CURRENT_AUTH,
  payload: user,
})

export const setAllUsers = (users: Array<User>) => ({
  type: SET_ALL_USERS,
  payload: users,
})

export const unsetCurrentUser = () => ({
  type: UNSET_CURRENT_USER,
  payload: null,
})

export const unsetCurrentAuth = () => ({
  type: UNSET_CURRENT_AUTH,
  payload: null,
})

export const setUserAccountId = (accountId: string | null) => ({
  type: USER_SET_ACCOUNT_ID,
  payload: accountId,
})
