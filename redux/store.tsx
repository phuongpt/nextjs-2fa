import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'

const middleware = [thunk]

const enhancer = composeWithDevTools(applyMiddleware(...middleware))

export const store = createStore(
  rootReducer,
  enhancer
)
