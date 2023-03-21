import { RootState } from '../reducers'

export const selectActiveSidebarItem = (state: RootState) =>
  state.route.sidebarItem

export const selectOpenedContextView = (state: RootState) =>
  state.route.openedContextView

export const selectSpinnerToShow =
  (spinnerName: string) => (state: RootState) => {
    const spinnersToShow = state.route.spinnersToShow?.filter(
      (spinner) => spinner === spinnerName
    )
    return spinnersToShow?.length ? spinnersToShow : null
  }
