import update from 'immutability-helper'

import {
  SET_ALL_USERS,
  SET_CURRENT_AUTH,
  SET_CURRENT_USER,
  UNSET_CURRENT_AUTH,
  UNSET_CURRENT_USER,
  USER_SET_ACCOUNT_ID,
  UserActionTypes,
  UserState,
} from './types'

const initialState: UserState = {
  current: null,
  auth: null,
  all: {},
  accountId: null,
}

export const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        current: { ...state.current, ...action.payload },
      }

    case SET_CURRENT_AUTH:
      return {
        ...state,
        auth: { ...state.auth, ...action.payload },
      }

    case UNSET_CURRENT_USER:
      return {
        ...state,
        current: null,
      }

    case UNSET_CURRENT_AUTH:
      return {
        ...state,
        auth: null,
      }

    case SET_ALL_USERS:
      return action.payload.reduce(
        (state, user) =>
          update(state, {
            all: {
              [user.id]: { $set: user },
            },
          }),
        state
      )

    case USER_SET_ACCOUNT_ID:
      return {
        ...state,
        accountId: action.payload,
      }

    default:
      return state
  }
}
