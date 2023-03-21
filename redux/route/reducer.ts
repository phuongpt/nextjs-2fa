import update from 'immutability-helper'
import {
  RouteActionTypes,
  RouteState,
  SET_OPENED_CONTEXT_VIEW,
  SET_SPINNERS_TO_SHOW,
} from './types'
import { AuthActionTypes, LOG_OUT } from '../auth/types'

const initialState: RouteState = {
  sidebarItem: null,
  openedContextView: null,
  spinnersToShow: [],
}

export function routeReducer(
  state = initialState,
  action: RouteActionTypes | AuthActionTypes
): RouteState {
  switch (action.type) {

    case SET_OPENED_CONTEXT_VIEW:
      return {
        ...state,
        openedContextView: action.payload || null,
      }

    case SET_SPINNERS_TO_SHOW:
      if (action.payload.toShow) {
        if (!state.spinnersToShow?.includes(action.payload.spinnerName)) {
          return update(state, {
            spinnersToShow: { $push: [action.payload.spinnerName] },
          })
        } else {
          return state
        }
      } else {
        return {
          ...state,
          spinnersToShow:
            state.spinnersToShow?.filter(
              (spinner) => spinner !== action.payload.spinnerName
            ) || [],
        }
      }

    case LOG_OUT:
      return initialState

    default:
      return state
  }
}
