import { RootState } from '../reducers'

export const selectCurrentUser = (state: RootState) => state.user.current

export const selectCurrentAuth = (state: RootState) => state.user.auth

export const selectUserById = (userId: number) => (state: RootState) =>
  state.user.all[userId] || {
    displayName: `Deleted User #${userId?.toString(27).toUpperCase()}`,
    firstName: 'Deleted',
    id: userId,
    lastName: 'User',
  }

export const getAccountId = (state: RootState) => state.user.accountId
