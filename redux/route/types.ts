import { CONTEXT_VIEW } from '../../types/context-view'

export interface RouteState {
  sidebarItem: string | null
  openedContextView: CONTEXT_VIEW | null
  spinnersToShow: string[] | null
}

export const SET_SIDEBAR_ITEM_ROUTE = 'ROUTE:SET_SIDEBAR_ITEM_ROUTE'
export const SET_OPENED_CONTEXT_VIEW = 'ROUTE:SET_OPENED_CONTEXT_VIEW'
export const SET_SPINNERS_TO_SHOW = 'ROUTE:SET_SPINNERS_TO_SHOW'

export interface SetSidebarItemRoute {
  type: typeof SET_SIDEBAR_ITEM_ROUTE
  payload: {
    sidebarItem: string | null
  }
}

export interface SetOpenedContextView {
  type: typeof SET_OPENED_CONTEXT_VIEW
  payload?: CONTEXT_VIEW
}

export interface SetSpinnersToShow {
  type: typeof SET_SPINNERS_TO_SHOW
  payload: { toShow: boolean; spinnerName: string }
}

export type RouteActionTypes =
  | SetSidebarItemRoute
  | SetOpenedContextView
  | SetSpinnersToShow
