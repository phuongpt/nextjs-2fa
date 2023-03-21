import { Action, combineReducers } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { routeReducer } from './route/reducer'
import { userReducer } from './user/reducer'


const rootReducer = combineReducers({
  route: routeReducer,
  user: userReducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
