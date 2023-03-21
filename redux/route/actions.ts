import {
  RouteActionTypes,
  SET_CHANNEL_ROUTE_STATE,
  SET_SIDEBAR_ITEM_ROUTE,
  SET_OPENED_CONTEXT_VIEW,
  SET_SPINNERS_TO_SHOW,
} from './types'
import { CONTEXT_VIEW } from '../../types/context-view'

export const setChannelRouteState = ({
  channelId,
  view,
  subView,
  newMessageId,
}): RouteActionTypes => ({
  type: SET_CHANNEL_ROUTE_STATE,
  payload: {
    channelId,
    view,
    subView,
    newMessageId,
  },
})

export const setSidebarItemRoute = (
  sidebarItem: string | null
): RouteActionTypes => ({
  type: SET_SIDEBAR_ITEM_ROUTE,
  payload: {
    sidebarItem,
  },
})

export const setOpenedContextView = (
  contextType?: CONTEXT_VIEW
): RouteActionTypes => ({
  type: SET_OPENED_CONTEXT_VIEW,
  payload: contextType,
})

export const setSpinnersToShow = (
  toShow: boolean,
  spinnerName: string
): RouteActionTypes => ({
  type: SET_SPINNERS_TO_SHOW,
  payload: { toShow, spinnerName },
})
